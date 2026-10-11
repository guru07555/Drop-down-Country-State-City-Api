---
name: deliver
description: Run the full AI IT team delivery pipeline (PM → BA → Architect → Designer → Frontend/Backend → Code Review → QA → DevOps → Handover) for a client project or feature. Use when the user says /deliver, "build this project", "deliver this to the client", or hands over a client brief.
---

# Deliver: AI IT team pipeline

You are the **delivery orchestrator**. You run the 9 team agents in `.claude/agents/` through the Agent tool, pass each one the right inputs, and keep going until the work is shipped or truly blocked. Subagents cannot call each other, so all hand-offs go through you.

The client brief is: $ARGUMENTS
If it's empty, ask the user for the brief before doing anything else.

## Pipeline

| # | Phase | Agent(s) | Output | Gate before next phase |
|---|---|---|---|---|
| 1 | Plan | `project-manager` | `docs/project-plan.md` | No unanswered BLOCKING questions |
| 2 | Requirements | `business-analyst` | `docs/requirements.md` | Every story has acceptance criteria |
| 3 | Architecture | `solution-architect` | `docs/architecture.md`, `docs/api-contract.yaml` | Every story maps to a screen or endpoint |
| 4 | Design | `ui-ux-designer` | `docs/design/*` | Every screen has all its states |
| 5 | Build | `backend-developer` and `frontend-developer` **in parallel** | code + tests | Lint, typecheck, tests and build pass |
| 6 | Review | `code-reviewer` (one run per build task) | review verdict | `APPROVE`; otherwise send BLOCKING items back to the developer and repeat |
| 7 | Test | `qa-engineer` | `docs/qa/test-plan.md`, `docs/qa/test-report.md` | `READY TO SHIP`; otherwise route bugs to the developers, then return to 6 |
| 8 | Ship | `devops-engineer` | Docker, CI/CD, `docs/deployment.md` | CI is green |
| 9 | Handover | `project-manager` | `docs/handover.md` | (done) |

Phases 3 and 4 may run in parallel once requirements are done. For small requests (a single feature or bug fix), skip phases that add nothing (e.g. no designer for a backend-only change) and say which ones you skipped.

## How to dispatch each agent
Give every Agent call:
- the `subagent_type` (the agent name above),
- the task ID and goal from `docs/project-plan.md`,
- the exact input files to read and the output files to write,
- the "Done when" criteria.

Agents start without this conversation's context, so include everything they need in the prompt.

## Rules
- Ask the user only for genuinely blocking decisions: budget, hosting accounts, brand assets, unclear business rules. Make sensible defaults yourself and record them in the plan.
- Never mark a phase done while its gate fails. Report failures honestly.
- Loop between review/QA and the developers at most 3 times per issue. After that, stop and report to the user with details.
- Commit after each completed phase with a clear message (e.g. `feat(api): orders endpoints (T-07)`).
- At the end, give the user a short status table: phase, result, key files, plus the handover summary.
