import { existsSync, readFileSync, appendFileSync, copyFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import {
  colors, getScaffoldDir, ensureDir,
  copyIfMissing, listFiles, createCounters,
} from './utils.js';

const SDD_MARKER = '# SDD Framework - Spec Driven Development';

export function init(targetPath, options = {}) {
  const { dryRun = false } = options;
  const target = resolve(targetPath);
  const scaffold = getScaffoldDir();

  if (!existsSync(target)) {
    console.error(colors.red(`Error: Target directory '${target}' does not exist.`));
    process.exit(1);
  }

  const counters = createCounters();
  const prefix = dryRun ? `${colors.dim('[DRY RUN]')} ` : '';

  console.log(`${prefix}${colors.bold('=== SDD Framework Installer ===')}`);
  console.log(`Target: ${target}`);
  console.log('');

  // Step 1: Directory structure
  console.log(`${colors.bold('[1/4]')} Creating directory structure...`);
  const dirs = [
    '.sdd/templates',
    '.sdd/commands',
    '.claude/commands',
    'docs',
    'domains',
    'specs/active',
    'specs/completed',
    'specs/bugs',
  ];
  for (const dir of dirs) {
    ensureDir(join(target, dir), dryRun);
  }

  // Step 2: Framework files
  console.log(`${colors.bold('[2/4]')} Copying framework files...`);

  // .sdd root files (config, constitution)
  for (const src of listFiles(join(scaffold, '.sdd'))) {
    copyIfMissing(src, join(target, '.sdd', src.split('/').pop()), counters, dryRun);
  }

  // .sdd/templates
  for (const src of listFiles(join(scaffold, '.sdd', 'templates'))) {
    copyIfMissing(src, join(target, '.sdd', 'templates', src.split('/').pop()), counters, dryRun);
  }

  // .sdd/commands
  for (const src of listFiles(join(scaffold, '.sdd', 'commands'))) {
    copyIfMissing(src, join(target, '.sdd', 'commands', src.split('/').pop()), counters, dryRun);
  }

  // .claude/commands
  for (const src of listFiles(join(scaffold, '.claude', 'commands'))) {
    copyIfMissing(src, join(target, '.claude', 'commands', src.split('/').pop()), counters, dryRun);
  }

  // Step 3: System-level docs
  console.log(`${colors.bold('[3/4]')} Copying system-level doc templates...`);
  for (const src of listFiles(join(scaffold, 'docs'))) {
    copyIfMissing(src, join(target, 'docs', src.split('/').pop()), counters, dryRun);
  }

  // Step 4: CLAUDE.md merge
  console.log(`${colors.bold('[4/4]')} Handling CLAUDE.md...`);
  const targetClaudeMd = join(target, 'CLAUDE.md');
  const sourceClaudeMd = join(scaffold, 'CLAUDE.md');

  if (!existsSync(targetClaudeMd)) {
    if (dryRun) {
      console.log(`  ${colors.dim('[DRY RUN]')} ${colors.green('COPY')}: CLAUDE.md (new file)`);
    } else {
      copyFileSync(sourceClaudeMd, targetClaudeMd);
      console.log(`  ${colors.green('COPY')}: CLAUDE.md (new file)`);
    }
    counters.copied++;
  } else {
    const existing = readFileSync(targetClaudeMd, 'utf8');
    if (existing.includes(SDD_MARKER)) {
      console.log(`  ${colors.yellow('SKIP')}: CLAUDE.md already contains SDD section`);
      counters.skipped++;
    } else {
      if (dryRun) {
        console.log(`  ${colors.dim('[DRY RUN]')} ${colors.cyan('MERGE')}: SDD section appended to CLAUDE.md`);
      } else {
        const sddContent = readFileSync(sourceClaudeMd, 'utf8');
        appendFileSync(targetClaudeMd, '\n\n' + sddContent);
        console.log(`  ${colors.cyan('MERGE')}: SDD section appended to existing CLAUDE.md`);
      }
      counters.copied++;
    }
  }

  // Summary
  console.log('');
  console.log(`${prefix}${colors.bold('=== SDD Framework installed ===')}`);
  console.log(`  Files copied:  ${counters.copied}`);
  console.log(`  Files skipped: ${counters.skipped}`);
  console.log('');
  console.log('Next steps:');
  console.log('  1. Open Claude Code in your project directory');
  console.log('  2. Run /sdd-bootstrap to auto-fill docs from your codebase');
  console.log('  3. Review and approve the generated documentation');
  console.log('  4. Start using /sdd-new-feature, /sdd-new-bug, etc.');
  console.log('');
}
