import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vitepress'

const docsRoot = path.resolve('docs-en')
const categoryOrder = [
  'VIN & Model',
  'Used Car Valuation',
  'Accident & Claims',
  'Vehicle Transfer & Condition',
  'Auto Finance — Car 5 Essentials',
  'Auto Finance — Person-Vehicle Verification',
  'Auto Insurance',
  'NEV Three-Electric Systems',
  'New Car Sales Analysis',
  'Auto Market Research',
  'Global Market Analysis',
  'Used Car Transaction Volume',
  'Power BI Solutions',
  'Overview'
]

const expandedCategories = new Set([
  'New Car Sales Analysis',
  'Global Market Analysis',
  'NEV Three-Electric Systems'
])

function readFrontmatter(filePath: string) {
  const source = fs.readFileSync(filePath, 'utf8')
  const match = source.match(/^---\n([\s\S]*?)\n---\n/)
  const fields: Record<string, string> = {}
  for (const line of match?.[1]?.split('\n') || []) {
    const separator = line.indexOf(':')
    if (separator === -1) continue
    fields[line.slice(0, separator).trim()] = line.slice(separator + 1).trim()
  }
  return fields
}

function routeFor(fileName: string) {
  return `/${fileName.replace(/\.md$/, '')}`
}

function readEntries() {
  return fs.readdirSync(docsRoot, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md') && !['index.md', 'README.md'].includes(entry.name))
    .map((entry) => ({
      entry,
      fields: readFrontmatter(path.join(docsRoot, entry.name))
    }))
}

function isActive(fields: Record<string, string>) {
  return fields.is_active !== 'no'
}

function collectInactiveDocs(dir: string): string[] {
  const results: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'is_active_0' || entry.name === 'public') continue
      results.push(...collectInactiveDocs(fullPath))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      if (!isActive(readFrontmatter(fullPath))) {
        results.push(path.relative(docsRoot, fullPath))
      }
    }
  }
  return results
}

function buildSidebar() {
  const entries = readEntries().filter(({ fields }) => isActive(fields))

  const extraCategories = entries
    .map(({ fields }) => fields.category)
    .filter((category): category is string => Boolean(category) && !categoryOrder.includes(category))
  const categories = [...categoryOrder, ...new Set(extraCategories)]
  const groups = new Map<string, { text: string; link: string; order: number }[]>()
  for (const category of categories) groups.set(category, [])

  for (const { entry, fields } of entries) {
    const category = fields.category
    if (!groups.has(category)) continue
    groups.get(category)?.push({
      text: fields.title || entry.name.replace(/\.md$/, ''),
      link: routeFor(entry.name),
      order: Number(fields.order) || 9999
    })
  }

  const sidebar = categories
    .map((category) => ({
      text: category,
      collapsed: !expandedCategories.has(category),
      items: (groups.get(category) || [])
        .sort((a, b) => a.order - b.order || a.text.localeCompare(b.text, 'en'))
        .map(({ text, link }) => ({ text, link }))
    }))
    .filter((group) => group.items.length > 0)

  return sidebar
}

const nav = [
  { text: 'Data & API Overview', link: '/' },
  { text: 'Company Profile', link: '/company-profile' },
  { text: 'CN', link: 'https://www.autobigdata.com/' },
  { text: 'EN', link: 'https://en.autobigdata.com/' }
]

const inactiveDocs = collectInactiveDocs(docsRoot)

const BASE_URL = 'https://en.autobigdata.com'

function pageUrl(page: string) {
  const slug = page.replace(/\.md$/, '').replace(/\/index$/, '')
  if (slug === '' || slug === 'index') return `${BASE_URL}/`
  return `${BASE_URL}/${encodeURI(slug)}`
}

export default defineConfig({
  lang: 'en-US',
  title: 'AutoBigData Open Platform',
  description: 'AutoBigData automotive data API documentation',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'alternate', hreflang: 'zh-CN', href: 'https://www.autobigdata.com/' }],
    ['link', { rel: 'alternate', hreflang: 'en-US', href: `${BASE_URL}/` }],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'AutoBigData Open Platform',
        url: BASE_URL,
        description: 'Full-value-chain automotive data and API services covering vehicle basic data, new cars, used cars, auto finance, and NEV three-electric systems.'
      })
    ]
  ],
  cleanUrls: false,
  srcExclude: ['is_active_0/**', ...inactiveDocs],
  lastUpdated: true,
  sitemap: {
    hostname: BASE_URL
  },
  transformHead(context) {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: context.pageData.title,
      description: context.description,
      url: pageUrl(context.page),
      inLanguage: 'en-US'
    }
    return [['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)]]
  },
  themeConfig: {
    siteTitle: 'AutoBigData',
    nav,
    sidebar: buildSidebar(),
    outline: { level: [2, 3], label: 'On this page' },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Search docs', buttonAriaLabel: 'Search docs' },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Clear search',
            footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' }
          }
        }
      }
    },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    lastUpdated: { text: 'Last updated' },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Toggle theme'
  }
})
