---
type: plan
spec: SPC-NNN
status: draft | approved | implementing | completed
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# Plan: SPC-NNN - [Feature Title]

## Technical Approach
[High-level description of HOW this will be implemented. 1-2 paragraphs
covering the overall strategy, key patterns to follow, and how this
integrates with the existing codebase.]

## Component Design

### [Component/Layer 1]
- **What**: [What this component does]
- **Where**: [File path(s) -- new or modified]
- **How**: [Key implementation details, patterns to follow]

### [Component/Layer 2]
- **What**: [What this component does]
- **Where**: [File path(s)]
- **How**: [Implementation details]

<!--
  Add as many components as needed. Each should map to a logical
  piece of the implementation (model, service, controller, migration, etc.)
-->

## Data Model Changes
[New tables, columns, relationships. Include migration description.
Reference the domain's current data model from domains/<name>/overview.md.]

## API Changes
[New or modified endpoints. Include:]
| Method | Endpoint | Request | Response | Auth |
|--------|----------|---------|----------|------|
| [verb] | [path]   | [shape] | [shape]  | [required/public] |

## Sequence Diagram
```
[Actor] -> [Component A]: [action]
[Component A] -> [Component B]: [action]
[Component B] -> [Database]: [query]
[Database] --> [Component B]: [result]
[Component B] --> [Component A]: [response]
[Component A] --> [Actor]: [result]
```

## Decisions

<!--
  Use MADR format for each technical decision.
  These may be promoted to domain-level decisions upon spec completion.
-->

### SPC-NNN.D-01: [Decision Title]

- **Status**: proposed | accepted
- **Context**: [Why this decision was needed]
- **Decision Drivers**:
  - [Driver 1]
  - [Driver 2]
- **Considered Options**:
  1. [Option A] -- [Brief description with pros/cons]
  2. [Option B] -- [Brief description with pros/cons]
- **Decision**: [Chosen option] because [justification].
- **Consequences**:
  - Good: [Benefit]
  - Bad: [Trade-off accepted]

## Testing Strategy
- **Unit Tests**: [What to test, key scenarios]
- **Feature/Integration Tests**: [HTTP tests, service integration tests]
- **Edge Cases**: [Specific scenarios that must be covered]

## Migration & Deployment Notes
[Any special deployment steps, feature flags, data migrations,
backwards compatibility concerns, or rollback strategy.]

## Files to Create or Modify
| File | Action | Purpose |
|------|--------|---------|
| [path] | create | [What this new file does] |
| [path] | modify | [What changes and why] |

## Constitution Compliance
<!--
  Verify the plan respects all constitutional principles.
  Check each applicable principle and note any concerns.
-->
- [ ] CP-01: [Principle name] -- [Compliant / Concern: ...]
- [ ] CP-02: [Principle name] -- [Compliant / Concern: ...]
