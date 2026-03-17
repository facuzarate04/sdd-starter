---
type: constitution
version: 1
last_updated: YYYY-MM-DD
---

# Project Constitution

> These principles are immutable. Every spec, plan, and implementation
> decision must be consistent with them. If a principle needs to change,
> it requires an explicit constitutional amendment with rationale.

## Core Principles

### CP-01: [Principle Name]
[One-paragraph statement of the principle and WHY it matters.]

### CP-02: [Principle Name]
[One-paragraph statement of the principle and WHY it matters.]

## Architectural Boundaries

### AB-01: [Boundary Name]
[What is separated from what, and why this boundary must be respected.]

## Non-Negotiable Constraints

### NC-01: [Constraint Name]
[Hard constraint that applies to ALL features. E.g., "All API endpoints
must require authentication unless explicitly exempted in the spec."]

## Ambiguity Policy

> When information is unclear or incomplete, the agent must follow these
> rules based on the level of risk involved.

- **Invariant risk** (could violate constitution or domain constraints):
  STOP and ask the user. Do not proceed under any circumstance.
- **Architectural decision** (multiple valid approaches, affects structure):
  Propose options with trade-offs. Let the user decide.
- **Local and safe** (change is contained, no cross-domain impact, reversible):
  Proceed, but explicitly state the assumption made.

## Amendment Log

| Date | Section | Change | Rationale |
|------|---------|--------|-----------|
