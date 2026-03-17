# SDD: Impact Analysis

You are performing a standalone impact analysis for a proposed change.
This can be used before any modification to understand the blast radius.

## Step 1: Understand the Change
Ask the user: What change are you considering? Get enough detail to
identify affected areas.

## Step 2: Identify Affected Domains
Based on the description, determine which domains are affected.
Read `domains/` folder to see all existing domains.

## Step 3: Read Domain Context
For each affected domain, read:
1. `domains/<name>/overview.md` -- especially:
   - **Constraints**: Will this change violate any?
   - **Extension Points**: Is this change using a designed extension point?
   - **Integrations**: Will other domains be affected transitively?
   - **Key Components**: Which components are involved?

## Step 4: Scan Existing Specs
1. Read frontmatter of ALL `specs/completed/*/spec.md` to find specs
   in the affected domain(s)
2. For each related spec, read its requirements and acceptance criteria
3. Identify specific acceptance criteria that could be broken by the change
4. Also check `specs/active/*/spec.md` for in-progress work that might conflict

## Step 5: Produce Report
Present a structured report:

### Change Description
[Summary of the proposed change]

### Affected Domains
| Domain | Impact Level | Details |
|--------|-------------|---------|
| [name] | high/medium/low | [What's affected] |

### Constraint Violations
| Domain | Constraint | Status |
|--------|-----------|--------|
| [name] | [DC-NN: description] | safe / at-risk / violated |

### Acceptance Criteria at Risk
| Spec | Requirement | Criteria | Risk |
|------|------------|----------|------|
| [SPC-NNN] | [R-NN] | [AC-NN: description] | [What could break] |

### Active Spec Conflicts
| Spec | Status | Conflict |
|------|--------|----------|
| [SPC-NNN] | [implementing] | [Description of conflict] |

### Recommendation
[Summary: safe to proceed / proceed with caution / needs spec / needs redesign]

## Step 6: Next Steps
Based on the analysis, recommend:
- Proceed directly (low impact)
- Create a bug report (`/sdd:new-bug`)
- Create a small improvement (`/sdd:new-improvement`)
- Create a full feature spec (`/sdd:new-feature`)
