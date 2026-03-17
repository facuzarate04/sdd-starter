# SDD: New Small Improvement

You are creating a lightweight spec for a small improvement (ceremony: small).
This is a streamlined flow -- only spec.md is created, no separate plan or tasks.

## Step 1: Gather Information
Ask the user for:
- What to improve and why
- Which domain(s) it affects

## Step 2: Assign ID
Read `.sdd/config.md`, increment spec counter, assign `SPC-NNN`.
Update the counter.

## Step 3: Read Context
1. `.sdd/constitution.md`
2. `domains/<affected>/overview.md`
3. Scan `specs/completed/*/spec.md` frontmatter for related specs
4. Read any closely related specs

## Step 4: Create Mini-Spec
Create `specs/active/NNN-improvement-name/spec.md` using the template
with `ceremony: small`.

For small ceremony, include only:
- **Overview**: What changes and why
- **Requirements**: EARS notation with Gherkin acceptance criteria
- **Impact Analysis**: Affected domains, affected specs, unchanged behavior
- **Implementation Notes**: Brief technical approach (replaces plan.md)
- **Files to Modify**: Table of files and changes

Skip: Actors, Use Cases, NFRs (unless relevant).

## Step 5: Present for Review
Show the mini-spec to the user.
Once approved, proceed directly to implementation.

## After Implementation
- Move to `specs/completed/NNN-improvement-name/`
- Update domain overview if relevant
- Update spec status to `completed`
