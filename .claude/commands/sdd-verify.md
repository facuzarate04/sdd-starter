# SDD: Verify Implementation Against Spec

You are verifying that the current implementation satisfies the acceptance
criteria defined in a spec. This is the quality gate between implementation
and completion.

## Step 1: Identify Spec

Look in `specs/active/` for the spec to verify.
If multiple active specs exist, ask which one.
Read the spec's `status` — it should be `implementing` or `approved`.

## Step 2: Load Acceptance Criteria

Read `specs/active/NNN-feature/spec.md` and extract:
- ALL acceptance criteria (SPC-NNN.R-NN.AC-NN)
- ALL non-functional requirements (SPC-NNN.NFR-NN)
- The "Unchanged Behavior" or "Impact Analysis > Affected Specs" section

## Step 3: Verify Each Acceptance Criterion

For each AC, follow the Gherkin scenario and verify against the actual code:

1. **Read the relevant source files** that implement this requirement
   (reference tasks.md to know which files map to which requirement)
2. **Trace the Given/When/Then** through the code:
   - Does the code handle the "Given" precondition?
   - Does the code respond to the "When" trigger correctly?
   - Does the code produce the "Then" outcome?
3. **Check edge cases** described in exception flows and alternative flows
4. **Mark each AC** as:
   - **PASS**: Code clearly satisfies the criterion
   - **FAIL**: Code does not satisfy the criterion (explain why)
   - **PARTIAL**: Partially implemented (explain what's missing)
   - **UNTESTABLE**: Cannot verify from code alone (needs manual test)

## Step 4: Verify Non-Functional Requirements

For each NFR:
- Check if the constraint is met (e.g., response time, file size, coverage)
- Some NFRs may need to be verified by running commands (e.g., test coverage)
  — ask the user before running any commands

## Step 5: Verify Unchanged Behavior (Impact Analysis)

Read the "Affected Specs" section from the spec's Impact Analysis.
For each referenced spec:
1. Read the referenced acceptance criteria from the completed spec
2. Check that the current implementation does NOT break those criteria
3. Look for regressions: did the new code modify any file that those
   ACs depend on? If so, trace through the change to verify.

Also check the "Unchanged Behavior" section (in bug reports) if applicable.

## Step 6: Produce Verification Report

Present the report to the user:

```markdown
# Verification Report: SPC-NNN

## Acceptance Criteria

| ID | Criteria | Status | Notes |
|----|----------|--------|-------|
| SPC-NNN.R-01.AC-01 | [short description] | PASS/FAIL/PARTIAL | [details] |
| SPC-NNN.R-01.AC-02 | [short description] | PASS | |
| SPC-NNN.R-02.AC-01 | [short description] | FAIL | [what's wrong] |

## Non-Functional Requirements

| ID | Requirement | Status | Notes |
|----|-------------|--------|-------|
| SPC-NNN.NFR-01 | [description] | PASS/FAIL | [details] |

## Impact Analysis / Regression Check

| Spec | Criteria | Status | Notes |
|------|----------|--------|-------|
| SPC-XXX.R-01.AC-01 | [description] | SAFE/AT-RISK | [details] |

## Summary

- AC Pass Rate: N/N (%)
- NFR Pass Rate: N/N (%)
- Regressions Found: N
- Overall: READY FOR COMPLETION / NEEDS FIXES
```

## Step 7: Next Steps

Based on the report:

### If all PASS:
- Tell the user the spec is ready for `/sdd-complete`
- The AC pass rate from this report feeds directly into the Outcome metrics

### If any FAIL:
- List the specific failures with file paths and what needs to change
- Ask the user if they want to fix now
- After fixes, re-run `/sdd-verify` to confirm

### If any PARTIAL:
- Explain what's implemented and what's missing
- Ask the user if the partial implementation is acceptable or needs completion

## Important Notes

- Read the ACTUAL code, not just file names. Trace the logic.
- Do not assume a test passing means the AC is met — verify the implementation itself.
- If a criterion references behavior you cannot verify by reading code
  (e.g., "response time under 200ms"), mark it UNTESTABLE and note that
  it needs manual or automated testing.
- This command can be run multiple times during implementation, not just at the end.
  Use it as a progress check.
