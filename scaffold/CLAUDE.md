# SDD Framework - Spec Driven Development

This project uses an enriched Spec Driven Development methodology that fuses modern SDD with classical requirements engineering.

## Framework Structure

```
.sdd/                  # Framework config, templates, and slash commands
docs/                  # System-level documentation (Layer 1)
domains/               # Domain-level documentation (Layer 2)
specs/                 # Feature-level specs, plans, and tasks (Layer 3)
  active/              # In-progress features
  completed/           # Archived features (safety net for impact analysis)
  bugs/                # Bug reports
```

## Before ANY Code Change

1. Read `.sdd/constitution.md` for immutable project principles
2. Read `docs/product.md`, `docs/tech.md`, `docs/structure.md` for system context
3. Read relevant `domains/*/overview.md` for affected domain(s)
4. Check `specs/completed/` and `specs/active/` for related specs
5. Perform impact analysis before implementing

## Slash Commands

- `/sdd-bootstrap` -- **Run once**: Reads codebase and fills system docs, constitution, and domain overviews
- `/sdd-new-feature` -- Start a new feature spec (full workflow)
- `/sdd-new-bug` -- Create a bug report with impact analysis
- `/sdd-new-improvement` -- Small improvement (mini-spec, lightweight)
- `/sdd-impact-analysis` -- Analyze blast radius of a proposed change
- `/sdd-advance` -- Move current spec to next phase (spec -> plan -> tasks -> implement)
- `/sdd-verify` -- Verify implementation against spec acceptance criteria (quality gate before complete)
- `/sdd-complete` -- Archive completed spec, collect outcome metrics, update domain docs
- `/sdd-health` -- Generate framework health report (quality trends, coverage, recommendations)
- `/sdd-update-domain` -- Refresh domain documentation from codebase

## Ceremony Levels

| Level | When | Artifacts |
|-------|------|-----------|
| **Hotfix** | Typo, config fix | Direct prompt, no artifacts |
| **Bug** | Known defect | `specs/bugs/BUG-NNN.md` with impact analysis |
| **Small** | 1-2 files, simple | `spec.md` only (ceremony: small) |
| **Medium** | Multi-file, clear scope | Full: `spec.md` + `plan.md` + `tasks.md` |
| **Complex** | Cross-domain, new patterns | Discovery + full SDD + mandatory ADRs |

## ID Scheme

- Specs: `SPC-NNN` | Bugs: `BUG-NNN`
- Requirements: `SPC-NNN.R-NN`
- Acceptance Criteria: `SPC-NNN.R-NN.AC-NN`
- Tasks: `SPC-NNN.T-NN`
- Decisions: `SPC-NNN.D-NN` (spec-level) | `DOM-<name>.D-NN` (domain-level)
- Cross-reference in text: `[SPC-NNN.R-NN]`
- Counters tracked in `.sdd/config.md`

## Workflow Phases (medium/complex)

```
SPEC -> PLAN -> TASKS -> IMPLEMENT -> VERIFY -> COMPLETE
```

1. **Spec**: Define WHAT (use cases, EARS requirements, Gherkin acceptance criteria, impact analysis)
2. **Plan**: Define HOW (architecture, ADRs, component design, testing strategy)
3. **Tasks**: Define STEPS (ordered tasks with traceability to requirements)
4. **Implement**: Execute tasks one by one
5. **Verify**: Validate implementation against every AC, NFR, and regression check
6. **Complete**: Archive spec, collect outcome metrics, update domain documentation

## Format Standards

- **Requirements**: EARS notation -- `WHEN [condition] THE SYSTEM SHALL [behavior] SO THAT [rationale]`
- **Acceptance Criteria**: Gherkin -- `Given/When/Then`
- **Decisions**: MADR format (Context, Decision Drivers, Options, Decision, Consequences)
- **All artifacts**: YAML frontmatter + Markdown body

## Rules

- NEVER implement without reading affected domain overviews first
- NEVER skip impact analysis for bugs and features
- ALWAYS use EARS notation for requirements
- ALWAYS use Gherkin for acceptance criteria
- EVERY requirement must trace to at least one task (traceability matrix)
- EVERY spec completion MUST update affected domain overviews
- The LAST task in every tasks.md is "Update Domain Documentation"
- When ceremony is `small`, only spec.md is needed (includes implementation notes)
- Open questions in a spec MUST be resolved before advancing to plan phase
- When in doubt, ASK the user. Do not guess business logic, domain boundaries, or architectural intent. It is always better to ask than to assume wrong.
- Each phase (spec, plan, tasks) requires explicit user approval before advancing to the next phase
