#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { colors } from '../lib/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), 'utf8'));

// ---------------------------------------------------------------------------
// Parse arguments
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const positional = args.filter((a) => !a.startsWith('--'));

const command = positional[0];
const targetPath = positional[1] || '.';
const dryRun = flags.has('--dry-run');

// ---------------------------------------------------------------------------
// Help
// ---------------------------------------------------------------------------

const HELP = `
${colors.bold(`SDD Starter v${pkg.version}`)} - Spec Driven Development framework

${colors.bold('USAGE')}
  npx sdd-starter <command> [path] [options]

${colors.bold('COMMANDS')}
  init [path]     Install SDD framework (default: current directory)
  update [path]   Update commands and templates only

${colors.bold('OPTIONS')}
  --dry-run       Preview changes without writing files
  --help          Show this help message
  --version       Show version number

${colors.bold('EXAMPLES')}
  npx sdd-starter init
  npx sdd-starter init ./my-project
  npx sdd-starter update
  npx sdd-starter update --dry-run
`;

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

try {
  if (flags.has('--version')) {
    console.log(pkg.version);
    process.exit(0);
  }

  if (flags.has('--help') || !command) {
    console.log(HELP);
    process.exit(0);
  }

  if (command === 'init') {
    const { init } = await import('../lib/init.js');
    init(targetPath, { dryRun });
  } else if (command === 'update') {
    const { update } = await import('../lib/update.js');
    update(targetPath, { dryRun });
  } else {
    console.error(colors.red(`Unknown command: ${command}`));
    console.error('Run "npx sdd-starter --help" for usage information.');
    process.exit(1);
  }
} catch (err) {
  console.error(colors.red(`Error: ${err.message}`));
  process.exit(1);
}
