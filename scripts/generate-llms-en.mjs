import fs from 'node:fs'
import path from 'node:path'

const BASE_URL = 'https://en.autobigdata.com'
const docsRoot = path.resolve('docs-en')
const publicDir = path.join(docsRoot, 'public')
const force = process.argv.includes('--force')

const SITE_TITLE = 'AutoBigData Open Platform · Automotive Data API Documentation'
const SITE_DESC = 'Full-value-chain automotive data and API services covering vehicle basic data, new cars, used cars, auto finance, and NEV three-electric systems.'

// Keep in sync with docs-en/.vitepress/config.mts categoryOrder
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

function readDoc(filePath) {
  const source = fs.readFileSync(filePath, 'utf8')
  const match = source.match(/^---\n([\s\S]*?)\n---\n/)
  const fields = {}
  for (const line of match?.[1]?.split('\n') || []) {
    const sep = line.indexOf(':')
    if (sep === -1) continue
    fields[line.slice(0, sep).trim()] = line.slice(sep + 1).trim()
  }
  const body = source.replace(/^---[\s\S]*?---\s*/, '')
  return { source, fields, body }
}

function cleanText(text) {
  return text
    .replace(/[*_`[\]]/g, '')
    .replace(/["']/g, '')
    .trim()
}

function truncate(text) {
  return text.length > 140 ? text.slice(0, 140) : text
}

function extractDescription(body) {
  for (const raw of body.split('\n')) {
    let line = raw.trim()
    if (!line) continue
    if (/^(#|\||```|---)/.test(line)) continue
    line = line.replace(/^-\s*/, '')

    const boldWithDesc = line.match(/^\*\*(.+?)\*\*[:：]\s*(.+)$/)
    if (boldWithDesc) {
      const desc = cleanText(boldWithDesc[2])
      if (desc.length >= 6) return truncate(desc)
    }

    if (/^\*\*.+\*\*$/.test(line)) continue

    const plain = cleanText(line)
    if (plain.length >= 8) return truncate(plain)
  }
  return ''
}

function collectDocs() {
  return fs
    .readdirSync(docsRoot, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('.md') && !['index.md', 'README.md'].includes(e.name))
    .map((e) => ({ name: e.name, ...readDoc(path.join(docsRoot, e.name)) }))
    .filter((d) => d.fields.is_active !== 'no')
}

function slugFor(name) {
  return name.replace(/\.md$/, '')
}

function urlFor(name) {
  return `${BASE_URL}/${encodeURI(slugFor(name))}`
}

function setDescription(doc, desc) {
  const fm = doc.source.match(/^---\n([\s\S]*?)\n---\n/)
  if (!fm) return
  let fmContent = fm[1]
  const descValue = `description: "${desc}"`
  if (/^description:/m.test(fmContent)) {
    fmContent = fmContent.replace(/^description:.*$/m, descValue)
  } else {
    fmContent += `\n${descValue}`
  }
  const newSource = doc.source.replace(fm[0], `---\n${fmContent}\n---\n`)
  fs.writeFileSync(path.join(docsRoot, doc.name), newSource)
  doc.fields.description = desc
}

function backfillDescriptions(docs) {
  let count = 0
  for (const doc of docs) {
    if (doc.fields.description && !force) continue
    const desc = extractDescription(doc.body)
    if (!desc) continue
    setDescription(doc, desc)
    count++
  }
  return count
}

function generateLlms(docs) {
  const groups = new Map()
  for (const cat of categoryOrder) groups.set(cat, [])
  for (const doc of docs) {
    const cat = doc.fields.category || 'Overview'
    if (!groups.has(cat)) groups.set(cat, [])
    groups.get(cat).push(doc)
  }

  const lines = [`# ${SITE_TITLE}`, '', `> ${SITE_DESC}`, '', '## Overview', '']
  lines.push(`- [Data & API Overview](${BASE_URL}/): a capability index of the whole platform, organized by business capability.`)

  for (const cat of categoryOrder) {
    const items = groups.get(cat) || []
    if (items.length === 0) continue
    items.sort((a, b) => (Number(a.fields.order) || 9999) - (Number(b.fields.order) || 9999))
    lines.push('', `## ${cat}`, '')
    for (const item of items) {
      const title = item.fields.title || slugFor(item.name)
      const desc = item.fields.description || ''
      lines.push(`- [${title}](${urlFor(item.name)})${desc ? `: ${desc}` : ''}`)
    }
  }
  fs.writeFileSync(path.join(publicDir, 'llms.txt'), lines.join('\n') + '\n')
}

function generateLlmsFull(docs) {
  const parts = [
    `# ${SITE_TITLE}`,
    '',
    `> ${SITE_DESC}`,
    '',
    'This document contains the full body of all public API documentation, intended for one-shot ingestion by AI models.'
  ]
  for (const doc of docs) {
    parts.push('\n---\n\n' + doc.body.trim())
  }
  fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), parts.join('\n') + '\n')
}

function generateApiIndex(docs) {
  const index = {
    site: SITE_TITLE,
    baseUrl: BASE_URL,
    count: docs.length,
    categories: categoryOrder.filter((cat) => docs.some((d) => (d.fields.category || 'Overview') === cat)),
    apis: docs
      .map((d) => ({
        title: d.fields.title || slugFor(d.name),
        category: d.fields.category || 'Overview',
        order: Number(d.fields.order) || 9999,
        url: urlFor(d.name),
        description: d.fields.description || ''
      }))
      .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'en'))
  }
  fs.writeFileSync(path.join(publicDir, 'api-index.json'), JSON.stringify(index, null, 2) + '\n')
}

fs.mkdirSync(publicDir, { recursive: true })
const docs = collectDocs()
const backfilled = backfillDescriptions(docs)
generateLlms(docs)
generateLlmsFull(docs)
generateApiIndex(docs)

console.log(
  `Done: ${docs.length} active docs, ${force ? 'overwrote' : 'backfilled'} ${backfilled} descriptions, generated llms.txt / llms-full.txt / api-index.json.`
)
