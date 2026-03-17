# SDD Starter

A lightweight Spec Driven Development framework for AI coding agents. Combines classical requirements engineering (use cases, acceptance criteria, traceability, impact analysis) with modern spec-driven workflows.

Built for [Claude Code](https://claude.ai/claude-code). Tested on real production projects.

## Three Layers of Context

```mermaid
block-beta
  columns 1
  block:system["🏗️ SYSTEM LEVEL"]
    columns 3
    product["product.md\nWhat the product does"]
    tech["tech.md\nStack & constraints"]
    structure["structure.md\nCode organization"]
  end
  space
  block:domain["🔷 DOMAIN LEVEL"]
    columns 2
    overview["overview.md\nComponents, patterns,\nextension points, constraints"]
    decisions["decisions.md\nArchitecture Decision Records"]
  end
  space
  block:feature["🎯 FEATURE LEVEL"]
    columns 3
    spec["spec.md\nUse cases, requirements,\nacceptance criteria,\nimpact analysis"]
    plan["plan.md\nTechnical design,\nADRs, file list"]
    tasks["tasks.md\nOrdered tasks,\ntraceability matrix"]
  end

  system --> domain
  domain --> feature

  style system fill:#1a1a2e,color:#e0e0e0,stroke:#16213e
  style domain fill:#16213e,color:#e0e0e0,stroke:#0f3460
  style feature fill:#0f3460,color:#e0e0e0,stroke:#533483
```

## Ceremony Scales With Complexity

```mermaid
graph TD
    Q{"What's the change?"}
    Q -->|"Typo, config"| H["⚡ Hotfix\nJust code it"]
    Q -->|"Known defect"| B["🐛 Bug\n/sdd-new-bug"]
    Q -->|"1-2 files"| S["📝 Small\n/sdd-new-improvement"]
    Q -->|"Multi-file"| M["📋 Medium\n/sdd-new-feature"]
    Q -->|"Cross-domain"| C["🏗️ Complex\n/sdd-new-feature"]

    H -.->|"No artifacts"| done["Done"]
    B -.->|"Bug report + impact analysis"| done
    S -.->|"Mini-spec only"| done
    M -.->|"Spec + Plan + Tasks"| done
    C -.->|"Discovery + Full SDD + ADRs"| done

    style Q fill:#2d2d3d,color:#e0e0e0,stroke:#4a4a5a
    style H fill:#4a4a5a,color:#e0e0e0,stroke:#6a6a7a
    style B fill:#4a4a5a,color:#e0e0e0,stroke:#6a6a7a
    style S fill:#4a4a5a,color:#e0e0e0,stroke:#6a6a7a
    style M fill:#4a4a5a,color:#e0e0e0,stroke:#6a6a7a
    style C fill:#4a4a5a,color:#e0e0e0,stroke:#6a6a7a
    style done fill:#2d5a3d,color:#e0e0e0,stroke:#3d7a5d
```

## The Full Cycle

```mermaid
graph LR
    S[SPEC] -->|"/sdd-advance"| P[PLAN]
    P -->|"/sdd-advance"| T[TASKS]
    T -->|"/sdd-advance"| I[IMPLEMENT]
    I -->|"/sdd-verify"| V[VERIFY]
    V -->|"/sdd-complete"| C[COMPLETE]

    style S fill:#4a9eff,color:#fff,stroke:#2d7cd6
    style P fill:#7c5cbf,color:#fff,stroke:#5a3d9e
    style T fill:#e06c9f,color:#fff,stroke:#b8527e
    style I fill:#e0a030,color:#fff,stroke:#c08820
    style V fill:#50b87a,color:#fff,stroke:#3a9660
    style C fill:#40a0a0,color:#fff,stroke:#2d8080
```

## Quick Start

```bash
# Clone and install into your project
git clone https://github.com/facuzarate04/sdd-starter.git
./sdd-starter/init.sh /path/to/your/project

# Open Claude Code in your project, then:
/sdd-bootstrap          # One-time: agent reads codebase, fills docs and domains
/sdd-new-feature        # Start a feature spec
/sdd-advance            # Move to next phase (plan → tasks → implement)
/sdd-verify             # Validate code against acceptance criteria
/sdd-complete           # Archive, collect metrics, update domains
```

Safe to run multiple times. Never overwrites existing files. Use `--update` to sync latest templates.

For detailed documentation, see the [full guide](docs/guide.md).

## License

MIT
