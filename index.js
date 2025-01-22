import { appendFile, writeFile } from "fs/promises"
await writeFile('./2mb_lfs_file.txt', '')

for (let i = 0; i < 2; i++) {
  await appendFile('./2mb_lfs_file.txt', 'a'.repeat(1024 * 1024))
}
