---
type: domain
domain: <domain-name>
last_updated: YYYY-MM-DD
related_specs: []
---

# Domain: [Domain Name]

## Purpose
[What this domain is responsible for, in 2-3 sentences.]

## Key Components
| Component | Type | Location | Responsibility |
|-----------|------|----------|----------------|
| [Name]    | Model/Service/Controller/etc. | [file path] | [What it does] |

## Architecture Patterns
[How this domain is structured internally. Key patterns used.
E.g., "Uses Strategy pattern for gateway resolution via PaymentGateway interface."]

## Integrations
| Integrates With | Direction | Mechanism | Notes |
|-----------------|-----------|-----------|-------|
| [Other domain/service] | inbound/outbound/bidirectional | [events/API/direct call] | [Details] |

## Extension Points
> These are designed to change. New features should extend here.

- **EP-01**: [What can be extended and how]
- **EP-02**: [Another extension point]

## Constraints
> These must NOT change without explicit spec approval and constitutional review.

### Design Constraints
- **DC-01**: [What must remain stable by design and why]
- **DC-02**: [Another design constraint]

### Legacy Constraints
- **LC-01**: [What cannot change due to external dependencies, backwards compatibility,
  or historical decisions. Include WHY it's legacy and whether migration is planned.]

## Assumptions
> Things believed to be true but not formally verified. If any assumption
> proves wrong, specs that depend on it may need revision.

- **AS-01**: [Assumption and what depends on it]

## Data Model Summary
[Key entities, their relationships, and important fields.
Keep concise; link to migrations or model files for full details.]

## Event Catalog
| Event | Trigger | Payload | Consumers |
|-------|---------|---------|-----------|
| [EventName] | [When fired] | [Key data] | [Who listens] |
