import sharp from 'sharp'
import { readdirSync, statSync, renameSync, unlinkSync } from 'fs'
import { join, extname } from 'path'

const folders = [
  'public/assets/images/misc',
  'public/assets/images/artistportraits',
]

for (const folder of folders) {
  let files
  try { files = readdirSync(folder) } catch { continue }

  for (const file of files) {
    const ext = extname(file).toLowerCase()
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue
    const filePath = join(folder, file)
    if (statSync(filePath).isDirectory()) continue

    const sizeMB = statSync(filePath).size / 1024 / 1024
    if (sizeMB < 1) {
      console.log(`Skipping ${file} (${sizeMB.toFixed(2)}MB — already small)`)
      continue
    }

    const tmpPath = filePath + '.tmp.jpg'
    try {
      await sharp(filePath)
        .resize({ width: 1800, withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(tmpPath)

      const newMB = statSync(tmpPath).size / 1024 / 1024
      unlinkSync(filePath)
      renameSync(tmpPath, filePath)
      console.log(`${file}: ${sizeMB.toFixed(1)}MB → ${newMB.toFixed(2)}MB`)
    } catch (e) {
      try { unlinkSync(tmpPath) } catch {}
      console.error(`Failed ${file}:`, e.message)
    }
  }
}
console.log('Done.')
