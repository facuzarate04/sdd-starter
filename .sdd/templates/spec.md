---
type: spec
id: SPC-NNN
title: "[Feature Title]"
status: draft | in-review | approved | implementing | completed
ceremony: small | medium | complex
created: YYYY-MM-DD
updated: YYYY-MM-DD
domains: []
depends_on: []
author: "[name]"
---

# SPC-NNN: [Feature Title]

## Overview
[2-3 sentence summary of what this feature does and why it matters.]

## Actors
- **[Actor 1]**: [Role description and what they need from this feature]
- **[Actor 2]**: [Role description]

## Use Cases

### UC-01: [Use Case Title]

- **Actor**: [Primary actor]
- **Preconditions**: [What must be true before this use case starts]
- **Trigger**: [What initiates this use case]

**Main Flow**:
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Alternative Flows**:
- **AF-01**: [Condition] -> [Different path and outcome]

**Exception Flows**:
- **EF-01**: [Error condition] -> [How the system handles it]

**Postconditions**: [What is true after successful completion]

<!--
  Add more use cases as needed: UC-02, UC-03, etc.
  Each use case should represent a distinct goal the actor wants to achieve.
-->

## Requirements

<!--
  Use EARS notation (Easy Approach to Requirements Syntax):
  WHEN [condition] THE SYSTEM SHALL [behavior] SO THAT [rationale]

  Each requirement gets acceptance criteria in Gherkin format.
-->

### SPC-NNN.R-01: [Requirement Title]
WHEN [condition or trigger]
THE SYSTEM SHALL [observable behavior]
SO THAT [rationale / value delivered]

**Acceptance Criteria**:

#### SPC-NNN.R-01.AC-01: [Criteria Title]
```gherkin
Given [initial context]
When [action performed]
Then [expected outcome]
```

#### SPC-NNN.R-01.AC-02: [Criteria Title]
```gherkin
Given [initial context]
When [action performed]
Then [expected outcome]
```

### SPC-NNN.R-02: [Next Requirement Title]
WHEN [condition or trigger]
THE SYSTEM SHALL [observable behavior]
SO THAT [rationale / value delivered]

**Acceptance Criteria**:

#### SPC-NNN.R-02.AC-01: [Criteria Title]
```gherkin
Given [initial context]
When [action performed]
Then [expected outcome]
```

## Non-Functional Requirements

### SPC-NNN.NFR-01: [NFR Title]
[EARS notation statement about performance, security, scalability, etc.
E.g., "THE SYSTEM SHALL respond to login requests within 200ms under normal load."]

## Impact Analysis

### Affected Domains
| Domain | Impact | Details |
|--------|--------|---------|
| [domain] | high/medium/low | [What changes, what could break] |

### Affected Specs
| Spec | Acceptance Criteria at Risk | Details |
|------|----------------------------|---------|
| [SPC-NNN] | [AC IDs] | [How this feature could affect those criteria] |

### Risk Assessment
- [Risk 1]: [Likelihood] / [Impact] -- [Mitigation]

## Out of Scope
[What this feature explicitly does NOT include. This reduces ambiguity
by setting clear boundaries for the agent.]

## Open Questions
- [ ] [Question that needs resolution before implementation]

## References
- [Link to external docs, designs, tickets, conversations, etc.]

<!--
  FOR CEREMONY: SMALL
  When ceremony is "small", the following sections are sufficient:
  - Overview
  - Requirements (with acceptance criteria)
  - Impact Analysis
  - Implementation Notes (replaces full plan.md)
  - Files to Modify

  You can delete Use Cases, Actors, NFRs, and other sections.
  Add this section instead:

  ## Implementation Notes
  [Brief technical approach - replaces the need for a separate plan.md]

  ## Files to Modify
  | File | Change |
  |------|--------|
  | [path] | [what changes] |
-->
