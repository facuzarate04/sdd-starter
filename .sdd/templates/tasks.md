---
type: tasks
spec: SPC-NNN
status: pending | in-progress | completed
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# Tasks: SPC-NNN - [Feature Title]

## Progress
- Total: N tasks
- Completed: 0/N
- Current: --

## Task List

<!--
  Each task must be:
  - Self-contained: all context needed to execute is here or referenced
  - Unambiguous: the agent should not need to guess anything
  - Verifiable: has a clear acceptance check
  - Traceable: maps to one or more requirements via "implements"

  Mark parallel-safe tasks with [P] in the title.
  The LAST task should always be "Update Domain Documentation".
-->

### SPC-NNN.T-01: [Task Title]
- **Status**: pending | in-progress | completed | skipped
- **Implements**: [SPC-NNN.R-01]
- **Description**: [Concrete description of what to do]
- **Files**:
  - `[path/to/file]` -- create | modify: [what to do in this file]
- **Acceptance Check**: [How to verify this task is done correctly]
- **Notes**: [Any gotchas, references to plan decisions, or constraints]

### SPC-NNN.T-02: [Task Title]
- **Status**: pending
- **Implements**: [SPC-NNN.R-01, SPC-NNN.R-02]
- **Depends On**: [SPC-NNN.T-01]
- **Description**: [What to do]
- **Files**:
  - `[path/to/file]` -- create | modify: [what to do]
- **Acceptance Check**: [Verification method]

### SPC-NNN.T-03: [Task Title] [P]
- **Status**: pending
- **Implements**: [SPC-NNN.R-03]
- **Description**: [What to do -- this task can run in parallel with others marked [P]]
- **Files**:
  - `[path/to/file]` -- modify: [what to do]
- **Acceptance Check**: [Verification method]

### SPC-NNN.T-NN: Update Domain Documentation
- **Status**: pending
- **Implements**: [] (housekeeping)
- **Depends On**: [all previous tasks]
- **Description**: Update affected domain overviews and decisions to
  reflect changes introduced by this spec.
- **Files**:
  - `domains/[name]/overview.md` -- modify: [Add new components, update integrations, extension points, constraints, related_specs]
  - `domains/[name]/decisions.md` -- modify: [Promote relevant spec decisions to domain level]
- **Acceptance Check**: Domain overview accurately reflects the new
  state of the domain after this feature.

## Traceability Matrix

| Requirement | Tasks | Status |
|-------------|-------|--------|
| SPC-NNN.R-01 | T-01, T-02 | pending |
| SPC-NNN.R-02 | T-02 | pending |
| SPC-NNN.R-03 | T-03 | pending |
| SPC-NNN.NFR-01 | T-02 | pending |

<!--
  Every requirement from spec.md MUST appear in this matrix.
  If a requirement has no task, either add a task or question
  whether the requirement is necessary.
-->
