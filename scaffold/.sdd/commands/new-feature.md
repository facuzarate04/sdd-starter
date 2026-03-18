# SDD: New Feature

You are starting the Spec Driven Development workflow for a new feature.

## Step 1: Gather Information
Ask the user for:
- Feature title (short, descriptive)
- Brief description of what the feature should do
- Which domain(s) it affects (refer to `domains/` folder for existing domains)

## Step 2: Determine Ceremony Level
Based on the scope, suggest a ceremony level:
- **small**: Simple change, 1-2 files, clear approach. Only spec.md needed.
- **medium**: Multiple files, known approach. Full SDD (spec + plan + tasks).
- **complex**: Cross-domain, new patterns, unknown approach. Discovery + full SDD + mandatory ADRs.

Confirm the ceremony level with the user.

## Step 3: Assign ID
Read `.sdd/config.md` to get the current spec counter.
Increment it and assign `SPC-NNN` (zero-padded to 3 digits).
Update the counter in `.sdd/config.md`.

## Step 4: Read Context
Before writing the spec, read the following files:
1. `.sdd/constitution.md` -- project principles
2. `docs/product.md` -- product context
3. `docs/tech.md` -- technology constraints
4. `docs/structure.md` -- project structure and conventions
5. `domains/<affected>/overview.md` -- for each affected domain
6. `domains/<affected>/decisions.md` -- existing decisions
7. Scan `specs/completed/*/spec.md` frontmatter -- find related specs in the same domain(s)
8. Read full spec of any closely related completed specs

## Step 5: Create Spec
Create the folder `specs/active/NNN-feature-name/`.
Use the template from `.sdd/templates/spec.md` to create `spec.md`.

Fill in:
- YAML frontmatter with correct ID, domains, dates
- Overview explaining the feature and its value
- Actors involved
- Use cases with Cockburn structure (preconditions, main flow, alternative flows, exception flows, postconditions)
- Requirements in EARS notation with Gherkin acceptance criteria
- Non-functional requirements if applicable
- Impact analysis (based on the context you read)
- Out of scope (explicit boundaries)
- Open questions (anything that needs clarification)

## Step 6: Present for Review
Show the spec to the user and ask for feedback.
Mark status as `in-review`.

## Next Steps
Once the user approves the spec:
- For **small** ceremony: proceed directly to implementation (spec contains implementation notes)
- For **medium/complex** ceremony: tell the user to run `/sdd:advance` to create the technical plan
