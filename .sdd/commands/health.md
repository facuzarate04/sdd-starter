# SDD: Framework Health Report

You are generating a health report for the SDD framework in this project.
This report helps the user understand if SDD is providing value and where
to improve.

## Step 1: Gather Data

### Scan completed specs
Read ALL `specs/completed/*/spec.md` files. For each, extract from the
Outcome section (if it exists):
- Acceptance criteria total and hit rate
- Rework cycles
- Regressions caused
- Ceremony level accuracy
- Impact analysis catches

### Scan active specs
Read ALL `specs/active/*/spec.md` frontmatter:
- How many specs are in progress
- What statuses are they in (draft, approved, implementing)
- Any specs stuck (created > 2 weeks ago, still in draft)

### Scan bugs
Read ALL `specs/bugs/BUG-*.md`:
- Total bugs filed
- Severity distribution
- How many were caught by impact analysis vs discovered in production

### Scan domains
Read ALL `domains/*/overview.md`:
- Total domains documented
- Last updated dates (flag stale ones > 3 months)
- How many have empty sections

### Check coverage
- List all domains referenced in `docs/structure.md` or visible in codebase
- Compare against documented domains
- Calculate coverage percentage

## Step 2: Generate Report

```markdown
# SDD Health Report - [Date]

## Summary
| Metric | Value |
|--------|-------|
| Total specs completed | N |
| Total bugs filed | N |
| Active specs in progress | N |
| Domains documented | N/N (%) |

## Quality Trends
| Metric | Average | Best | Worst |
|--------|---------|------|-------|
| AC hit rate (first try) | N% | SPC-NNN (N%) | SPC-NNN (N%) |
| Rework cycles per spec | N | SPC-NNN (N) | SPC-NNN (N) |
| Regressions per spec | N | -- | SPC-NNN (N) |

## Ceremony Level Accuracy
| Chosen | Actual Needed | Count | Accuracy |
|--------|---------------|-------|----------|
| small | small | N | correct |
| small | medium | N | underestimated |
| medium | medium | N | correct |
| medium | complex | N | underestimated |
| complex | complex | N | correct |
| complex | medium | N | overestimated |

## Impact Analysis Value
- Times impact analysis caught a real risk: N
- Times it missed something: N
- Conclusion: [valuable / needs improvement / not enough data]

## Domain Health
| Domain | Last Updated | Specs | Status |
|--------|-------------|-------|--------|
| [name] | [date] | N | healthy / stale / incomplete |

## Stale Items
- [List specs stuck in draft, domains not updated, etc.]

## Top Learnings (from Outcome sections)
1. [Most repeated positive learning]
2. [Most repeated improvement area]
3. [Most repeated template gap]

## Recommendations
- [Based on the data, what should the team focus on improving]
```

## Step 3: Present and Discuss

Show the report to the user. Highlight:
- **Wins**: Where SDD is clearly providing value
- **Gaps**: Where the framework needs adjustment
- **Actions**: Concrete next steps (update stale domains, adjust templates, etc.)
