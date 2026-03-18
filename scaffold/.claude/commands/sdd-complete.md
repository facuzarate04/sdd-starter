# SDD: Complete Spec

You are completing and archiving a finished spec.

## Step 1: Verify Completion
Read `specs/active/NNN-feature/tasks.md`:
- Confirm ALL tasks are marked as `completed`
- Confirm the traceability matrix shows all requirements covered
- If any tasks are pending, list them and ask the user how to proceed

## Step 2: Outcome Review (with user)

Ask the user to help fill the outcome section. This is critical for measuring
whether SDD is working. Go through each question and discuss with the user:

### Quality
- **Acceptance criteria hit rate**: Of all ACs in the spec, how many passed
  on first implementation without rework? (e.g., "8/10 passed first try")
- **Rework needed**: What had to be corrected after initial implementation?
  Was it due to a spec gap, a plan gap, or an implementation error?
- **Regressions**: Did any existing spec's acceptance criteria break?
  If yes, was it caught by impact analysis or missed?

### Process
- **Ceremony level accuracy**: Was the chosen ceremony level right?
  (e.g., "chose medium, was correct" or "chose small, should have been medium")
- **Spec revision rounds**: How many times was the spec revised before approval?
- **Ambiguities found during implementation**: Things the agent had to guess
  that should have been in the spec
- **Impact analysis value**: Did impact analysis catch anything that would
  have been missed otherwise?

### Learnings
- **What worked well**: What aspects of the spec/plan/tasks made implementation smooth?
- **What to improve**: What should be specified differently next time?
- **Template gaps**: Any information that was needed but the template didn't ask for?

Write the outcome into the spec.md file as a new section at the end:

```markdown
## Outcome

### Metrics
| Metric | Value |
|--------|-------|
| Acceptance criteria total | N |
| AC passed on first try | N/N (%) |
| Rework cycles | N |
| Regressions caused | N |
| Impact analysis catches | N |
| Ceremony level | [chosen] -> [actual needed] |
| Spec revisions before approval | N |

### What Worked
- [Point 1]

### What to Improve
- [Point 1]

### Learnings
- [Point 1]
```

## Step 3: Update Statuses
Update frontmatter `status` to `completed` in:
- `spec.md`
- `plan.md` (if exists)
- `tasks.md` (if exists)

Update all `updated` dates.

## Step 4: Update Domain Documentation
For each domain listed in the spec's `domains` field:

### Update `domains/<name>/overview.md`:
- Add new components to **Key Components** table
- Add new integrations to **Integrations** table
- Update **Extension Points** if new ones were created
- Update **Constraints** if new ones apply
- Update **Data Model Summary** if schema changed
- Update **Event Catalog** if new events were added
- Add `SPC-NNN` to `related_specs` in frontmatter
- Update `last_updated` date

### Update `domains/<name>/decisions.md`:
- Review decisions from `plan.md` (SPC-NNN.D-NN)
- Promote decisions that are relevant at the domain level:
  - Create new `DOM-<name>.D-NN` entry
  - Reference the original `SPC-NNN.D-NN`
  - Keep the original context and rationale

## Step 5: Archive
Move the entire folder:
`specs/active/NNN-feature/` -> `specs/completed/NNN-feature/`

## Step 6: Summary
Present a completion summary:
- Feature: [title]
- Requirements implemented: [count]
- Tasks completed: [count]
- AC hit rate: [N/N (percentage)]
- Rework cycles: [count]
- Domains updated: [list]
- Decisions promoted: [list or "none"]
- Spec ID: [SPC-NNN] -- now in completed archive
- Key learning: [one-line summary of most important takeaway]
