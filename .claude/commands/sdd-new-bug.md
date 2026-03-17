# SDD: New Bug Report

You are creating a structured bug report with impact analysis.

## Step 1: Gather Information
Ask the user for:
- Bug title
- Current behavior (what happens now)
- Expected behavior (what should happen)
- Steps to reproduce
- Severity assessment: critical / high / medium / low

## Step 2: Assign ID
Read `.sdd/config.md` to get the current bug counter.
Increment it and assign `BUG-NNN` (zero-padded to 3 digits).
Update the counter in `.sdd/config.md`.

## Step 3: Read Context for Impact Analysis
1. Identify which domain(s) this bug belongs to
2. Read `domains/<affected>/overview.md` -- understand components and constraints
3. Scan `specs/completed/*/spec.md` frontmatter -- find specs in the same domain(s)
4. Read acceptance criteria from related specs -- identify what must NOT break
5. Check `specs/active/*/spec.md` -- flag conflicts with in-progress work

## Step 4: Root Cause Analysis
Investigate the codebase to identify:
- The specific file(s) and code causing the bug
- Why the bug occurs (logic error, missing validation, race condition, etc.)
- Whether this is a regression from a known spec

## Step 5: Create Bug Report
Use the template from `.sdd/templates/bug-report.md`.
Create the file at `specs/bugs/BUG-NNN-short-name.md`.

Fill in all sections, paying special attention to:
- **Impact Analysis**: which domains and specs are affected
- **Unchanged Behavior**: specific acceptance criteria from existing specs that must remain intact after the fix
- **Fix**: proposed change with verification method

## Step 6: Present for Review
Show the bug report to the user. Once approved, proceed with the fix.
After fixing, update the status to `resolved`.

## Escalation
If during analysis the bug reveals a larger structural issue:
- Recommend creating a feature spec (ceremony: medium) instead
- The bug report can reference the new spec as the proper solution
