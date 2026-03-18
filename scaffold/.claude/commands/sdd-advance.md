# SDD: Advance to Next Phase

You are advancing a spec to its next phase in the SDD workflow.
The flow is: spec (draft -> approved) -> plan -> tasks -> implementation.

## Step 1: Identify Current Spec
Look in `specs/active/` for the spec the user wants to advance.
If multiple active specs exist, ask which one.
Read the spec's frontmatter to determine current status.

## Step 2: Determine Next Phase

### If status is `draft` or `in-review` -> Move to `approved`
- Confirm with the user that the spec is ready
- Update spec.md status to `approved`
- If ceremony is `small`, skip to implementation (no plan/tasks needed)
- If ceremony is `medium` or `complex`, proceed to create plan

### If status is `approved` -> Create Plan
Read:
1. The approved `spec.md`
2. `domains/<affected>/overview.md` for each affected domain
3. `docs/tech.md` for technology constraints
4. `docs/structure.md` for project conventions
5. `.sdd/constitution.md` for principles to comply with

Create `plan.md` using `.sdd/templates/plan.md`:
- Technical approach coherent with existing architecture
- Component design with file paths
- Data model and API changes
- ADRs for significant technical decisions (MADR format)
- Testing strategy
- Constitution compliance checklist
- File list (create/modify)

Present the plan for review.

### If plan is approved -> Create Tasks
Read:
1. `spec.md` -- requirements and acceptance criteria
2. `plan.md` -- technical approach and file list

Create `tasks.md` using `.sdd/templates/tasks.md`:
- Break plan into ordered, self-contained tasks
- Each task maps to requirement(s) via `implements` field
- Include file paths and concrete actions
- Mark parallel-safe tasks with [P]
- Last task is ALWAYS "Update Domain Documentation"
- Fill traceability matrix ensuring every requirement has at least one task

Present tasks for review. Check for overengineering -- fewer tasks is better.

### If tasks are approved -> Start Implementation
Update spec status to `implementing`.
Update tasks status to `in-progress`.
Begin executing tasks sequentially (or in parallel where marked [P]).
Mark each task as `completed` when done.

## Step 3: Update Metadata
After each phase transition, update:
- `status` field in the relevant file's frontmatter
- `updated` date in frontmatter
