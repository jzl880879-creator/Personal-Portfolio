import { readdir, readFile, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'

const distDir = join(process.cwd(), 'dist')
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Personal-Portfolio'
const configuredBase = process.env.VITE_BASE_PATH || `/${repositoryName}/`
const base = `/${configuredBase.replace(/^\/+|\/+$/g, '')}/`
const baseSegment = base.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const rootStringPattern = new RegExp("([\\\"'`])/(?!/|" + baseSegment + "/)", 'g')
const cssUrlPattern = new RegExp(`url\\((['"]?)/(?!/|${baseSegment}/)`, 'g')

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(entries.map(entry => {
    const filePath = join(directory, entry.name)
    return entry.isDirectory() ? listFiles(filePath) : [filePath]
  }))
  return nested.flat()
}

const textFiles = (await listFiles(distDir)).filter(file => ['.js', '.css'].includes(extname(file)))

for (const file of textFiles) {
  const source = await readFile(file, 'utf8')
  const rewritten = source
    .replace(rootStringPattern, `$1${base}`)
    .replace(cssUrlPattern, `url($1${base}`)
  if (rewritten !== source) await writeFile(file, rewritten, 'utf8')
}

console.log(`Prepared GitHub Pages assets for ${base}`)
