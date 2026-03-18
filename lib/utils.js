import { existsSync, mkdirSync, readFileSync, copyFileSync, statSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// Colors (respects NO_COLOR and non-TTY)
// ---------------------------------------------------------------------------

const supportsColor = process.stdout.isTTY && !process.env.NO_COLOR;

export const colors = {
  green:  (s) => supportsColor ? `\x1b[32m${s}\x1b[0m` : s,
  yellow: (s) => supportsColor ? `\x1b[33m${s}\x1b[0m` : s,
  red:    (s) => supportsColor ? `\x1b[31m${s}\x1b[0m` : s,
  cyan:   (s) => supportsColor ? `\x1b[36m${s}\x1b[0m` : s,
  bold:   (s) => supportsColor ? `\x1b[1m${s}\x1b[0m`  : s,
  dim:    (s) => supportsColor ? `\x1b[2m${s}\x1b[0m`  : s,
};

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function getScaffoldDir() {
  return join(__dirname, '..', 'scaffold');
}

// ---------------------------------------------------------------------------
// File operations
// ---------------------------------------------------------------------------

export function ensureDir(dirPath, dryRun) {
  if (existsSync(dirPath)) return;
  if (dryRun) {
    console.log(`  ${colors.dim('[DRY RUN]')} MKDIR: ${dirPath}`);
    return;
  }
  mkdirSync(dirPath, { recursive: true });
}

export function copyIfMissing(src, dst, counters, dryRun) {
  const name = dst.split('/').slice(-2).join('/');
  if (existsSync(dst)) {
    console.log(`  ${colors.yellow('SKIP')} (exists): ${name}`);
    counters.skipped++;
    return;
  }
  if (dryRun) {
    console.log(`  ${colors.dim('[DRY RUN]')} ${colors.green('COPY')}: ${name}`);
    counters.copied++;
    return;
  }
  mkdirSync(dirname(dst), { recursive: true });
  copyFileSync(src, dst);
  console.log(`  ${colors.green('COPY')}: ${name}`);
  counters.copied++;
}

export function forceCopy(src, dst, counters, dryRun) {
  const name = dst.split('/').slice(-2).join('/');
  if (existsSync(dst)) {
    const srcBuf = readFileSync(src);
    const dstBuf = readFileSync(dst);
    if (srcBuf.equals(dstBuf)) {
      console.log(`  ${colors.dim('OK')} (up to date): ${name}`);
      counters.skipped++;
      return;
    }
    if (dryRun) {
      console.log(`  ${colors.dim('[DRY RUN]')} ${colors.cyan('UPDATE')}: ${name}`);
      counters.updated++;
      return;
    }
    copyFileSync(src, dst);
    console.log(`  ${colors.cyan('UPDATE')}: ${name}`);
    counters.updated++;
  } else {
    if (dryRun) {
      console.log(`  ${colors.dim('[DRY RUN]')} ${colors.green('COPY')}: ${name}`);
      counters.copied++;
      return;
    }
    mkdirSync(dirname(dst), { recursive: true });
    copyFileSync(src, dst);
    console.log(`  ${colors.green('COPY')}: ${name}`);
    counters.copied++;
  }
}

export function listFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => statSync(join(dir, f)).isFile())
    .map((f) => join(dir, f));
}

export function createCounters() {
  return { copied: 0, skipped: 0, updated: 0 };
}
