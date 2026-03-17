---
type: bug
id: BUG-NNN
title: "[Bug Title]"
status: open | analyzing | fixing | resolved
severity: critical | high | medium | low
created: YYYY-MM-DD
updated: YYYY-MM-DD
domains: []
related_specs: []
---

# BUG-NNN: [Bug Title]

## Current Behavior
[What happens now. Be specific -- include error messages, wrong values,
unexpected states, etc.]

## Expected Behavior
[What should happen instead. Reference acceptance criteria from existing
specs if applicable: "Per SPC-007.R-01.AC-02, the system should..."]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Root Cause Analysis
[After investigation: what is the underlying cause. Include file paths
and line numbers where the bug originates.]

## Impact Analysis

### Affected Domains
| Domain | Impact | Details |
|--------|--------|---------|
| [domain] | high/medium/low | [What's affected in this domain] |

### Affected Specs
| Spec | Acceptance Criteria | Concern |
|------|---------------------|---------|
| [SPC-NNN] | [AC IDs] | [How the fix might affect these guarantees] |

### Unchanged Behavior
> These behaviors MUST remain intact after the fix.
> Reference specific acceptance criteria from existing specs.

- [SPC-NNN.R-NN.AC-NN]: [Description of behavior that must not regress]
- [SPC-NNN.R-NN.AC-NN]: [Another preserved behavior]

## Fix
- **File(s)**: [paths to modified files]
- **Change**: [description of the fix]
- **Verification**: [How to verify the fix works AND regressions don't occur]
