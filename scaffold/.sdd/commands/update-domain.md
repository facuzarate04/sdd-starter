# SDD: Update Domain Documentation

You are refreshing domain documentation to ensure it accurately reflects
the current state of the codebase and completed specs.

## Step 1: Identify Domain
Ask the user which domain to update.
If not specified, list all domains in `domains/` and ask.

## Step 2: Read Current State
1. Read `domains/<name>/overview.md` -- current documented state
2. Read `domains/<name>/decisions.md` -- current decisions
3. List all specs referencing this domain:
   - Scan `specs/completed/*/spec.md` frontmatter for `domains` containing this domain
   - Scan `specs/active/*/spec.md` frontmatter for in-progress work

## Step 3: Analyze Codebase
Read the actual codebase files referenced in the domain overview:
- Check if Key Components still exist and are accurate
- Check if file paths have changed
- Look for new components not yet documented
- Verify integrations are current
- Check if extension points are still valid
- Verify constraints still apply

## Step 4: Reconcile
Compare documented state vs actual state:
- **Missing components**: New files/classes in the domain not in overview
- **Stale components**: Documented components that no longer exist
- **Changed paths**: Components that moved
- **New integrations**: New connections to other domains
- **Outdated decisions**: Decisions that were superseded by implementation

## Step 5: Update
Update `domains/<name>/overview.md` with:
- Corrected Key Components table
- Updated integrations
- Revised extension points and constraints
- Updated data model summary
- Current related_specs list
- New `last_updated` date

Update `domains/<name>/decisions.md` if any decisions need revision.

## Step 6: Present Changes
Show the user what was updated and why.
This helps build confidence that domain docs are trustworthy.
