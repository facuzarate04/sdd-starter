import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import {
  colors, getScaffoldDir,
  forceCopy, listFiles, createCounters,
} from './utils.js';

export function update(targetPath, options = {}) {
  const { dryRun = false } = options;
  const target = resolve(targetPath);
  const scaffold = getScaffoldDir();

  if (!existsSync(target)) {
    console.error(colors.red(`Error: Target directory '${target}' does not exist.`));
    process.exit(1);
  }

  const counters = createCounters();
  const prefix = dryRun ? `${colors.dim('[DRY RUN]')} ` : '';

  console.log(`${prefix}${colors.bold('=== SDD Framework Updater ===')}`);
  console.log(`Target: ${target}`);
  console.log('');

  // Step 1: Templates
  console.log(`${colors.bold('[1/2]')} Updating templates and commands...`);

  for (const src of listFiles(join(scaffold, '.sdd', 'templates'))) {
    forceCopy(src, join(target, '.sdd', 'templates', src.split('/').pop()), counters, dryRun);
  }

  for (const src of listFiles(join(scaffold, '.sdd', 'commands'))) {
    forceCopy(src, join(target, '.sdd', 'commands', src.split('/').pop()), counters, dryRun);
  }

  for (const src of listFiles(join(scaffold, '.claude', 'commands'))) {
    forceCopy(src, join(target, '.claude', 'commands', src.split('/').pop()), counters, dryRun);
  }

  // Step 2: Summary
  console.log('');
  console.log(`${prefix}${colors.bold('=== SDD Framework updated ===')}`);
  console.log(`  Files updated:   ${counters.updated}`);
  console.log(`  Files added:     ${counters.copied}`);
  console.log(`  Already current: ${counters.skipped}`);
  console.log('');
  console.log(colors.dim('NOT touched: constitution, config, docs/*, domains/*, specs/*, CLAUDE.md'));
  console.log('');
}
