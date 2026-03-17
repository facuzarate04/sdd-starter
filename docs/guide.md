# SDD Starter — Full Guide

## What's Inside

```
.sdd/
  constitution.md          # Immutable project principles
  config.md                # ID counters (SPC-NNN, BUG-NNN)
  templates/               # Templates for all artifacts
    spec.md                # Use cases + EARS requirements + Gherkin ACs
    plan.md                # Technical design + ADRs + constitution compliance
    tasks.md               # Ordered tasks + traceability matrix
    bug-report.md          # Bug + impact analysis + unchanged behavior
    domain-overview.md     # Components, extension points, constraints
    domain-decisions.md    # Architecture Decision Records per domain
  commands/                # Slash command definitions (10 commands)
docs/
  product.md               # What the product does
  structure.md             # How code is organized
  tech.md                  # Stack and constraints
domains/                   # One folder per domain (overview.md + decisions.md)
specs/
  active/                  # In-progress features
  completed/               # Archived (safety net for impact analysis)
  bugs/                    # Bug reports
CLAUDE.md                  # Entry point for Claude Code
init.sh                    # Installer script
```

## Installation

```bash
git clone https://github.com/facuzarate04/sdd-starter.git
./sdd-starter/init.sh /path/to/your/project
```

The script:
- Creates the directory structure
- Copies templates and slash commands
- Appends the SDD section to your existing CLAUDE.md (never overwrites)
- Skips any file that already exists (safe to run multiple times)

To sync updates later:

```bash
./sdd-starter/init.sh /path/to/your/project --update
```

This overwrites only templates and commands. Never touches your constitution, domains, specs, or docs.

## Getting Started

### 1. Bootstrap your project

Open Claude Code in your project and run:

```
/sdd-bootstrap
```

The agent reads your codebase, existing docs, and configuration files, then fills in:
- System docs (product, tech, structure)
- Constitution (extracted from your existing rules and conventions)
- Domain overviews (one per domain detected in your codebase)

Review and approve what it generates.

### 2. Choose the right ceremony level

| Situation | Command | Artifacts |
|-----------|---------|-----------|
| Typo, config fix | Just code it | None |
| Bug | `/sdd-new-bug` | Bug report + impact analysis |
| Small improvement (1-2 files) | `/sdd-new-improvement` | Mini-spec only |
| Medium feature | `/sdd-new-feature` | Spec + Plan + Tasks |
| Complex feature (cross-domain) | `/sdd-new-feature` (ceremony: complex) | Discovery + Full SDD + ADRs |

### 3. The full cycle (medium/complex)

| Phase | Command | What happens |
|-------|---------|-------------|
| Spec | `/sdd-new-feature` | Agent generates spec, you review |
| Plan | `/sdd-advance` | Agent generates technical plan, you review |
| Tasks | `/sdd-advance` | Agent generates ordered tasks, you review |
| Implement | `/sdd-advance` | Agent implements task by task |
| Verify | `/sdd-verify` | Agent validates code against acceptance criteria |
| Complete | `/sdd-complete` | Archive spec, collect metrics, update domain docs |

### 4. Anytime commands

| Command | Purpose |
|---------|---------|
| `/sdd-impact-analysis` | Analyze blast radius of a proposed change |
| `/sdd-health` | Aggregate metrics across all completed specs |
| `/sdd-update-domain` | Refresh domain documentation from codebase |

## Key Concepts

### Constitution

Immutable principles extracted from your project. Things like "all queries scoped by tenant_id" or "never hard delete". The agent checks compliance before implementing.

Includes an **ambiguity policy** with three levels:
- **Invariant risk**: Stop and ask. Never proceed.
- **Architectural decision**: Propose options with trade-offs.
- **Local and safe**: Proceed, but state the assumption.

### Domain Overviews

Living documentation of each domain:
- **Key Components**: files, classes, their responsibilities
- **Architecture Patterns**: how the domain is structured
- **Integrations**: how it connects to other domains
- **Extension Points**: what's designed to be extended
- **Design Constraints**: what must not change by design
- **Legacy Constraints**: what cannot change due to external dependencies
- **Assumptions**: things believed true but not formally verified
- **Data Model**: key entities and relationships
- **Event Catalog**: events dispatched and consumed

Updated every time a feature touching that domain is completed.

### Impact Analysis

Before any change, the agent reads domain overviews and existing specs to identify what could break. Produces:
- Affected domains with impact level
- At-risk acceptance criteria from existing specs
- Behaviors that must remain intact (invariants to preserve)
- Risk assessment with mitigation

### Traceability

Every requirement gets an ID: `SPC-NNN.R-NN`

Each requirement has acceptance criteria: `SPC-NNN.R-NN.AC-NN`

Each task declares what it implements: `implements: [SPC-NNN.R-01, SPC-NNN.R-02]`

A traceability matrix in tasks.md ensures every requirement maps to at least one task.

### Verify

After implementation, the agent traces each acceptance criterion through the actual code:
- **PASS**: Code satisfies the criterion
- **FAIL**: Code does not satisfy (explains why)
- **PARTIAL**: Partially implemented (explains what's missing)
- **UNTESTABLE**: Cannot verify from code alone

Also checks regression against acceptance criteria from other specs.

### Outcome Metrics

At completion, you and the agent record:
- AC hit rate (passed on first try)
- Rework cycles needed
- Regressions caused
- Ceremony level accuracy
- What worked, what to improve, learnings

The `/sdd-health` command aggregates these across all completed specs.
