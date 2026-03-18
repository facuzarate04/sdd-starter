# SDD: Bootstrap Project

You are initializing the SDD framework for an existing project.
Your job is to read the codebase and existing documentation, then fill in
the system-level docs, constitution, and domain overviews.

This command should be run ONCE when SDD is first installed in a project.

---

## Phase 1: Gather Context

Read everything available about the project. Do NOT ask the user to explain
the project -- discover it yourself first, then validate with them.

### Read existing documentation
1. `README.md` -- project overview, setup instructions
2. `CLAUDE.md` -- existing rules, conventions, architecture (BEFORE the SDD section)
3. Any files in `docs/` that are NOT SDD templates (e.g., `PRODUCT_DEFINITION.md`, architecture docs, ADRs)
4. Any `.claude/skills/` files -- they contain domain knowledge
5. Any `AGENTS.md`, `CONTRIBUTING.md`, or similar files

### Read codebase structure
1. List the top-level directory structure
2. Identify the main source directories (e.g., `app/`, `src/`, `services/`)
3. For each major directory, list its contents to understand organization
4. Identify the framework/stack from config files:
   - `composer.json` / `package.json` / `pyproject.toml` / `Cargo.toml`
   - Framework config: `artisan` (Laravel), `next.config.*` (Next.js), etc.
   - `docker-compose.yml`, `Dockerfile`, CI/CD configs
5. Read database migrations or schema files to understand data models
6. Read route files to understand API surface

### Identify domains
Look for natural domain boundaries in the codebase:
- Separate service directories (e.g., `services/payments/`, `services/auth/`)
- Controller groups or route groups
- Model clusters that belong together
- Module/package boundaries
- Any existing documentation that names domains or bounded contexts

---

## Phase 2: Fill System-Level Documents

### `.sdd/config.md`
- Set `project` to the actual project name
- Keep counters at 0 (no specs created yet)

### `docs/product.md`
Fill from README, CLAUDE.md, and any product definition docs:
- **Purpose**: What the product does (2-3 sentences)
- **Target Users**: Who uses it and what they need
- **Core Value Proposition**: Why it exists
- **Key Features**: Major feature areas
- **Business Rules**: Cross-cutting rules found in CLAUDE.md or docs (e.g., "soft delete only", "multi-tenant scoped by organization_id")
- **Out of Scope**: What the product explicitly doesn't do

### `docs/tech.md`
Fill from package managers, config files, and CLAUDE.md:
- **Core Stack**: Language, framework, database, cache, queue (with versions)
- **Key Packages**: Important dependencies from lock files
- **Infrastructure**: Hosting, CI/CD, environments
- **Technical Constraints**: Hard constraints found in docs or configs
- **Standards & Patterns**: Coding patterns documented in CLAUDE.md or visible in code
- **Testing**: Framework, strategy, coverage requirements

### `docs/structure.md`
Fill from actual directory listing and naming patterns:
- **Directory Layout**: Annotated tree of the actual project structure
- **Naming Conventions**: Infer from existing files (controller naming, model naming, etc.)
- **Module Organization**: How code is grouped
- **Key Entry Points**: Route files, main configs, bootstrap files

### `.sdd/constitution.md`
Extract immutable principles from CLAUDE.md and existing docs:
- **Core Principles**: Design principles (SOLID, DRY, KISS, etc.) if documented
- **Architectural Boundaries**: Separation concerns (e.g., "frontend never talks to DB directly")
- **Non-Negotiable Constraints**: Hard rules (e.g., "all queries scoped by org_id", "never hard delete")

Look specifically for:
- Rules prefixed with "NEVER", "ALWAYS", "MUST"
- Architectural decisions marked as permanent
- Security requirements
- Data integrity rules

---

## Phase 3: Create Domain Overviews

For each domain identified in Phase 1:

### Create `domains/<domain-name>/overview.md`
Fill by reading the actual code in that domain:

- **Purpose**: What this domain handles
- **Key Components**: List actual files/classes with their paths and responsibilities.
  Read the source files to understand what they do, don't guess from names alone.
- **Architecture Patterns**: What patterns are used (repository, strategy, observer, etc.)
  Look at the code structure, interfaces, and class relationships.
- **Integrations**: How this domain connects to others.
  Look for imports across domain boundaries, events, API calls.
- **Extension Points**: Parts designed to be extended.
  Look for interfaces, abstract classes, plugin registries, config-driven behavior.
- **Constraints**: Parts that should not change.
  Look for comments like "DO NOT MODIFY", interfaces marked as contracts,
  and rules in CLAUDE.md about this domain.
- **Data Model Summary**: Key entities from migrations/models.
- **Event Catalog**: Events dispatched/consumed (if applicable).
- **Related specs**: Leave empty (no specs exist yet).

### Create `domains/<domain-name>/decisions.md`
If existing ADRs or documented decisions exist for this domain, migrate them.
Otherwise create the file with the template header and no decisions yet.

---

## Phase 4: Validate with User

Present a summary of everything you filled in:

```
=== SDD Bootstrap Summary ===

Project: [name]

System Docs:
  - product.md:    [brief summary of what you wrote]
  - tech.md:       [stack summary]
  - structure.md:  [structure summary]

Constitution:
  - [N] Core Principles
  - [N] Architectural Boundaries
  - [N] Non-Negotiable Constraints

Domains Created:
  - [domain-1]: [purpose, N components, N integrations]
  - [domain-2]: [purpose, N components, N integrations]
  - [domain-N]: [purpose, N components, N integrations]

Questions / Gaps:
  - [Anything you couldn't determine from the codebase]
  - [Areas where documentation was contradictory]
  - [Domains where boundaries were unclear]
```

Ask the user to review and flag anything that needs correction.

---

## Phase 5: Deduplication Check

After bootstrap, check for redundancy between:
- `docs/product.md` vs existing `README.md` or product docs
- `docs/tech.md` vs existing tech documentation
- `docs/structure.md` vs existing architecture docs
- `.sdd/constitution.md` vs rules already in CLAUDE.md

Flag any significant overlap and ask the user if they want to:
1. Keep both (SDD docs are agent-optimized, existing docs are human-oriented)
2. Reference existing docs from SDD docs instead of duplicating
3. Consolidate into SDD docs and remove originals

---

## Important Notes

- Do NOT delete or modify any existing documentation
- Do NOT modify the existing CLAUDE.md content (only the SDD section was appended by init)
- If information conflicts between sources, flag it for the user
- Prefer being accurate over being complete -- leave sections empty with a
  `[TODO: Could not determine from codebase]` note rather than guessing
- This is a one-time setup. Future updates happen via `/sdd-complete` and `/sdd-update-domain`
