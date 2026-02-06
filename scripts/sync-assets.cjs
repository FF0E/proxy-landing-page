/* eslint-disable no-console */
const fs = require("fs")
const path = require("path")

function safeStat(filePath) {
  try {
    return fs.statSync(filePath)
  } catch {
    return null
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true })
}

function copyIfExists(srcPath, destPath) {
  const st = safeStat(srcPath)
  if (!st || !st.isFile()) return false
  ensureDir(path.dirname(destPath))
  fs.copyFileSync(srcPath, destPath)
  return true
}

function pickNewest(files) {
  let best = null
  for (const filePath of files) {
    const st = safeStat(filePath)
    if (!st || !st.isFile()) continue
    if (!best || st.mtimeMs > best.st.mtimeMs) best = { filePath, st }
  }
  return best?.filePath ?? null
}

function main() {
  const repoRoot = path.resolve(__dirname, "..")
  // Staging directory (not served by Next.js). Contents are copied into /public.
  const stagingDir = process.env.ASSET_STAGING_DIR || "un-use"
  const srcDir = path.join(repoRoot, stagingDir)
  const downloadsDir = path.join(repoRoot, "public", "downloads")
  const windowsImagesDir = path.join(repoRoot, "public", "images", "windows")

  const srcDirStat = safeStat(srcDir)
  if (!srcDirStat || !srcDirStat.isDirectory()) {
    console.warn(`[sync-assets] Skipped: missing staging directory: ${srcDir}`)
    return
  }

  // Copy PC screenshots if present.
  ensureDir(windowsImagesDir)
  for (const name of ["pc-main.png", "pc-shop.png", "pc-account.png"]) {
    const ok = copyIfExists(
      path.join(srcDir, name),
      path.join(windowsImagesDir, name),
    )
    if (ok) console.log(`[sync-assets] Copied ${name} -> public/images/windows/${name}`)
  }

  // Copy the newest Windows installer to a stable public filename used by the site.
  const entries = fs.readdirSync(srcDir)
  const exes = entries
    .filter((n) => n.toLowerCase().endsWith(".exe"))
    .map((n) => path.join(srcDir, n))
  const preferred = exes.filter((p) => path.basename(p).toLowerCase().includes("tuitui"))
  const candidates = preferred.length ? preferred : exes

  const newestExe = pickNewest(candidates)
  if (!newestExe) {
    console.warn(`[sync-assets] Skipped: no Windows installer (.exe) found in ${srcDir}`)
    return
  }

  ensureDir(downloadsDir)
  const destExe = path.join(downloadsDir, "tuitui-client.exe")
  fs.copyFileSync(newestExe, destExe)
  console.log(`[sync-assets] Copied ${path.basename(newestExe)} -> public/downloads/tuitui-client.exe`)
}

main()
