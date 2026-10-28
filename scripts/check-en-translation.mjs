import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const zhRoot = path.join(root, 'docs')
const enRoot = path.join(root, 'docs-en')
const map = JSON.parse(fs.readFileSync(path.join(root, 'scripts', 'en-doc-map.json'), 'utf8'))
const glossaryPath = path.join(enRoot, 'translation-glossary.yml')
const reportArg = process.argv.find((arg) => arg.startsWith('--report='))
const reportPath = reportArg ? path.resolve(root, reportArg.slice('--report='.length)) : path.join(root, 'reports', 'en-translation-review.md')
const checkMode = process.argv.includes('--check')

function readFrontmatter(filePath) {
  const source = fs.readFileSync(filePath, 'utf8')
  const match = source.match(/^---\n([\s\S]*?)\n---\n/)
  const fields = {}
  for (const line of match?.[1]?.split('\n') || []) {
    const separator = line.indexOf(':')
    if (separator === -1) continue
    fields[line.slice(0, separator).trim()] = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '')
  }
  return { source, fields }
}

function lineNumber(source, index) {
  return source.slice(0, Math.max(index, 0)).split('\n').length
}

function endpointSet(source) {
  return new Set([...source.matchAll(/\b(?:POST|GET|PUT|DELETE|PATCH)\s+(\/[^\s`"'<>)]+)/g)].map((match) => `${match[0].split(/\s+/)[0]} ${match[1]}`))
}

function jsonLikeCodes(source) {
  return new Set(source.match(/\b(?:0000|0001|4001|4002|401|403|404|429|5001|5002|503)\b/g) || [])
}

function proseLines(source) {
  const lines = []
  let inFence = false
  let inFrontmatter = false
  source.split('\n').forEach((line, index) => {
    if (index === 0 && line.trim() === '---') {
      inFrontmatter = true
      return
    }
    if (inFrontmatter && line.trim() === '---') {
      inFrontmatter = false
      return
    }
    if (inFrontmatter) return
    if (line.trim().startsWith('```')) {
      inFence = !inFence
      return
    }
    if (!inFence && !line.trim().startsWith('|') && !line.trim().startsWith('<!--')) lines.push({ line, number: index + 1 })
  })
  return lines
}

function parseGlossary(source) {
  const entries = []
  let current = null
  for (const raw of source.split('\n')) {
    const line = raw.trim()
    if (line.startsWith('- source:')) {
      if (current) entries.push(current)
      current = { source: line.replace(/^- source:\s*/, '').replace(/^['"]|['"]$/g, '') }
    } else if (current && /^(preferred|avoid|notes|notes_zh):/.test(line)) {
      const [key, ...rest] = line.split(':')
      current[key] = rest.join(':').trim().replace(/^['"]|['"]$/g, '')
    }
  }
  if (current) entries.push(current)
  return entries
}

function collectMarkdown(rootDir) {
  const results = []
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'public' || entry.name === '.vitepress') continue
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(fullPath)
      else if (entry.isFile() && entry.name.endsWith('.md')) results.push(path.relative(rootDir, fullPath))
    }
  }
  walk(rootDir)
  return results
}

const glossary = parseGlossary(fs.readFileSync(glossaryPath, 'utf8'))
const allowedChineseProductNames = ['大数据查车奥图德塔']
const findings = []
const add = (severity, file, line, sourceText, current, recommendation, reason, contract = '否') => {
  findings.push({ severity, file, line, sourceText, current, recommendation, reason, contract })
}

const required = ['title', 'category', 'order', 'docType', 'is_active']
const enDocs = new Map()
for (const file of collectMarkdown(enRoot)) {
  const fullPath = path.join(enRoot, file)
  const doc = { ...readFrontmatter(fullPath), fullPath }
  if (file === 'index.md' || map[file]) enDocs.set(file, doc)
}
const zhDocs = new Map()
for (const file of collectMarkdown(zhRoot)) {
  const fullPath = path.join(zhRoot, file)
  zhDocs.set(file, { ...readFrontmatter(fullPath), fullPath })
}

for (const [enFile, zhFile] of Object.entries(map)) {
  const en = enDocs.get(enFile)
  const zh = zhDocs.get(zhFile)
  if (!en || !zh) {
    add('P1', enFile, 1, zhFile, en ? 'English file exists but Chinese source is missing' : 'Chinese source exists but English file is missing', 'Repair the mapping before semantic review.', 'The bilingual pair cannot be verified.', '是')
    continue
  }
  const enActive = en.fields.is_active?.toLowerCase() === 'yes'
  const zhActive = zh.fields.is_active === '是'
  if (enActive !== zhActive) add('P1', enFile, 1, zhFile, `English is_active=${en.fields.is_active}`, `Match Chinese is_active=${zh.fields.is_active}`, 'Publication status differs between source and translation.')
  const requiredFields = enFile.startsWith('knowledge/') ? ['title', 'is_active'] : required
  for (const key of requiredFields) if (!en.fields[key]) add('P1', enFile, 1, key, 'Missing English frontmatter field', `Add ${key}.`, 'The page cannot be reliably indexed or reviewed.')

  const zhEndpoints = endpointSet(zh.source)
  const enEndpoints = endpointSet(en.source)
  for (const endpoint of zhEndpoints) if (!enEndpoints.has(endpoint)) add('P1', enFile, lineNumber(en.source, en.source.indexOf('/api/')), endpoint, endpoint, endpoint, 'HTTP method or endpoint differs from the Chinese contract.', '是')
  for (const endpoint of enEndpoints) if (!zhEndpoints.has(endpoint)) add('P1', enFile, lineNumber(en.source, en.source.indexOf('/api/')), 'English-only endpoint', endpoint, 'Remove or verify against the Chinese source.', 'The translation adds an unverified API operation.', '是')
  for (const code of jsonLikeCodes(zh.source)) if (!jsonLikeCodes(en.source).has(code)) add('P1', enFile, 1, code, 'Code appears in Chinese source but not English page', `Retain ${code} unless the API contract changed.`, 'Error and success codes are part of the API contract.', '是')
}

for (const [file, doc] of enDocs) {
  for (const { line, number } of proseLines(doc.source)) {
    if (/^[#>-]/.test(line.trim()) && /[\u3400-\u9fff]/.test(line) && !allowedChineseProductNames.some((name) => line.includes(name))) add('P2', file, number, '中文正文或标题', line.trim(), 'Translate the prose or explain the retained proper noun.', 'Chinese text remains in an English-facing prose line.')
    for (const term of glossary) {
      if (term.avoid && line.toLowerCase().includes(term.avoid.toLowerCase())) add('P2', file, number, term.source, line.trim(), `Use “${term.preferred}” where the Chinese source means ${term.source}.`, term.notes)
    }
  }
}

function existsTarget(from, target) {
  if (/^[a-z]+:\/\//i.test(target) || target.startsWith('#')) return true
  const clean = target.split('#')[0].split('?')[0]
  if (!clean) return true
  if (clean.startsWith('/')) {
    const route = clean.replace(/^\//, '')
    return fs.existsSync(path.join(enRoot, `${route}.md`)) || fs.existsSync(path.join(enRoot, route)) || fs.existsSync(path.join(enRoot, 'public', route))
  }
  const candidate = path.resolve(path.dirname(from), clean.endsWith('.md') ? clean : `${clean}.md`)
  return fs.existsSync(candidate) || fs.existsSync(path.resolve(path.dirname(from), clean))
}

for (const [file, doc] of enDocs) {
  for (const match of doc.source.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    if (!existsTarget(doc.fullPath, match[1])) add('P2', file, lineNumber(doc.source, match.index), 'Markdown link', match[1], 'Fix the target or use the English site route.', 'The English page contains a broken local link.')
  }
}

const severityOrder = { P1: 0, P2: 1, P3: 2 }
findings.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity] || a.file.localeCompare(b.file) || a.line - b.line)
const counts = {}
for (const finding of findings) counts[finding.severity] = (counts[finding.severity] || 0) + 1
const generatedAt = new Intl.DateTimeFormat('zh-CN', {
  timeZone: 'Asia/Shanghai',
  dateStyle: 'full',
  timeStyle: 'long'
}).format(new Date())
function findingExplanation(item) {
  const glossaryEntry = glossary.find((entry) => entry.source === item.sourceText)
  if (glossaryEntry) {
    const escapedAvoid = glossaryEntry.avoid?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const suggestedEnglish = escapedAvoid
      ? item.current.replace(new RegExp(escapedAvoid, 'gi'), (match) => {
          if (!/^[A-Z]/.test(match)) return glossaryEntry.preferred
          return glossaryEntry.preferred[0].toUpperCase() + glossaryEntry.preferred.slice(1)
        })
      : item.current
    return {
      title: `${glossaryEntry.source}：统一专业英文译法`,
      current: `当前行包含术语“${glossaryEntry.avoid || glossaryEntry.preferred}”。它需要结合中国汽车数据业务语境重新确认，不能只按字面理解。`,
      recommendation: `建议采用“${glossaryEntry.preferred}”。如果页面前文已经完成定义，后文可以使用对应的简短形式。`,
      suggestedEnglish,
      reason: `${glossaryEntry.notes_zh || glossaryEntry.notes} 这样可以避免美国读者把中国业务口径误解为美国法律、保险或汽车市场口径。`
    }
  }
  if (item.sourceText === '中文正文或标题') {
    return {
      title: '微信小程序名称：保留中文原名并调整英文顺序',
      current: '当前英文写成 “Big Data Vehicle Lookup — AutoData (大数据查车奥图德塔)”。其中中文是产品注册名称，不应当被当作普通未翻译正文；英文品牌写法也应与公司统一使用的 AUTODATA 保持一致。',
      recommendation: '建议写成 “Big Data Vehicle Lookup by AUTODATA (大数据查车奥图德塔)”，保留中文原名并用 by AUTODATA 表示品牌归属。',
      suggestedEnglish: '- WeChat Mini Program: Big Data Vehicle Lookup by AUTODATA (大数据查车奥图德塔)',
      reason: 'WeChat Mini Program 是面向英文读者的标准产品类别名称；Big Data Vehicle Lookup 是对“大数据查车”的功能性翻译；中文原名保留后可确保用户能够在微信中准确搜索产品。该改法不改变产品名称或 API 契约。'
    }
  }
  if (item.sourceText === 'Markdown link') {
    return {
      title: '页面链接目标需要核验',
      current: `当前链接目标为“${item.current}”，检查器无法在英文站中找到对应目标。`,
      recommendation: '改成有效的英文站路由、相对 Markdown 路径或 public 资源路径。',
      suggestedEnglish: item.recommendation,
      reason: '无效链接会阻断读者从总览页进入接口详情页，也会影响搜索引擎和 AI 文档抓取。'
    }
  }
  return {
    title: '双语内容或接口契约需要核验',
    current: item.current,
    recommendation: item.recommendation,
    suggestedEnglish: item.recommendation,
    reason: item.reason
  }
}

function findingGroupKey(item) {
  if (glossary.some((entry) => entry.source === item.sourceText)) return `term:${item.sourceText}`
  if (item.sourceText === '中文正文或标题' && item.file === 'company-profile.md' && item.line === 24) return 'product-name:wechat'
  return `${item.sourceText}:${item.file}:${item.line}`
}

function groupFindings(items) {
  const groups = new Map()
  for (const item of items) {
    const key = findingGroupKey(item)
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(item)
  }
  return [...groups.values()]
}

function renderFindingGroup(items, number) {
  const first = items[0]
  const explanation = findingExplanation(first)
  const hasContractImpact = items.some((item) => item.contract === '是')
  const locations = items.map((item) => `- \`${item.file}:${item.line}\`：${item.current.replaceAll('\n', ' ')}`)
  return [
    `### ${number}. ${explanation.title}（涉及 ${items.length} 处）`, '',
    '- **中文对应概念**：' + first.sourceText,
    `- **API 契约影响**：${hasContractImpact ? '有，必须先核对接口契约。' : '无，不改变接口字段和返回结构。'}`,
    '- **复核状态**：待双语文档校对和汽车数据业务复核。', '',
    '#### 涉及位置', '',
    ...locations, '',
    '#### 现状', '',
    explanation.current, '',
    '#### 建议改动', '',
    explanation.recommendation, '',
    '**建议英文示例：**', '',
    `> ${explanation.suggestedEnglish.replaceAll('\n', '\n> ')}`, '',
    '#### 修改原因', '',
    explanation.reason, ''
  ].join('\n')
}

function renderSeverity(severity, label) {
  const items = findings.filter((item) => item.severity === severity)
  const groups = groupFindings(items)
  const lines = [`## ${label}（${items.length} 条记录，归并为 ${groups.length} 类）`, '']
  if (groups.length === 0) {
    lines.push('### 当前没有发现', '', '自动化检查没有发现此级别的问题。', '')
    return lines
  }
  groups.forEach((group, index) => lines.push(renderFindingGroup(group, index + 1), ''))
  return lines
}

const report = [
  '# 英文站全量专业校对首轮问题清单', '',
  `生成时间：${generatedAt}`, '',
  '本报告以中文 `docs/` 为业务和接口语义来源，以英文 `docs-en/` 为校对对象，记录自动检查结果和需要人工确认的双语问题。', '',
  '## 检查概况', '',
  '### 检查范围', '',
  `- 已建立中英文映射：${Object.keys(map).length} 个页面。`,
  `- 已检查英文 Markdown 页面：${enDocs.size} 个，包含接口文档、首页、公司简介和 knowledge 参考页。`,
  `- 检查结果：${findings.length} 条记录，其中 P1 ${counts.P1 || 0} 条、P2 ${counts.P2 || 0} 条、P3 ${counts.P3 || 0} 条；P2 记录归并为 ${groupFindings(findings.filter((item) => item.severity === 'P2')).length} 类。`, '',
  '### 问题等级说明', '',
  '- **P1**：API 契约、发布状态或数据语义存在明确不一致，必须优先处理。',
  '- **P2**：专业术语、业务表达、残留中文或链接需要人工复核和修改。',
  '- **P3**：美式英语语法、标点、风格和可读性问题，待人工语言复核补充。', '',
  '### 统一复核方法', '',
  '每条问题都要回看中文原文，分别确认当前英文表达、建议改法、业务含义和 API 契约影响。涉及保险、二手车、金融、NEV 三电和销量口径的条目，应由汽车数据业务人员复核。', '',
  ...renderSeverity('P1', 'P1 级问题'),
  ...renderSeverity('P2', 'P2 级问题'),
  ...renderSeverity('P3', 'P3 级问题'),
  '## 后续人工复核', '',
  '### 复核顺序', '',
  '1. 先处理 P1，确认接口方法、路径、字段、错误码和发布状态。',
  '2. 再处理 P2，统一术语并检查中文原稿中的限制条件是否完整传达。',
  '3. 最后补充 P3 美式英语编辑，确保标题使用 sentence case、句式自然、专业词汇稳定。', '',
  '### 修改后的验证', '',
  '运行 `pnpm check:en-translation:strict`、`pnpm build:en` 和 `git diff --check`，再检查生成的 `llms.txt`、`llms-full.txt`、`api-index.json` 与页面正文是否一致。'
].join('\n') + '\n'
fs.mkdirSync(path.dirname(reportPath), { recursive: true })
fs.writeFileSync(reportPath, report)
console.log(`Generated ${reportPath}: ${findings.length} findings (P1 ${counts.P1 || 0}, P2 ${counts.P2 || 0}, P3 ${counts.P3 || 0}).`)
if (checkMode && findings.some((item) => item.severity === 'P1')) process.exitCode = 1
