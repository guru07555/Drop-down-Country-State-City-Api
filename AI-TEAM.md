# AI IT Team: Claude Agents

Yeh aapki IT company ki AI delivery team hai. Har agent ek role hai, aur saare milkar client project ko requirement se deployment tak deliver karte hain.

## Team

| # | Agent | Role | Kya deliver karta hai |
|---|---|---|---|
| 1 | `project-manager` | Project Manager | Project plan, tasks, timeline, client handover note |
| 2 | `business-analyst` | Business Analyst | Requirements, user stories, acceptance criteria |
| 3 | `solution-architect` | Architect / Tech Lead | Tech stack, architecture, database design, API contract |
| 4 | `ui-ux-designer` | UI/UX Designer | User flows, design system, screen specs, HTML prototype |
| 5 | `frontend-developer` | Frontend Developer | Website/web app UI (React + TypeScript) aur tests |
| 6 | `backend-developer` | Backend Developer | APIs, database, login, payments/integrations aur tests |
| 7 | `code-reviewer` | Senior Code Reviewer | Har code change ka bug/security review (sirf report karta hai, code nahi badalta) |
| 8 | `qa-engineer` | QA / Tester | Test plan, automated tests, bug report, "Ready to ship" verdict |
| 9 | `devops-engineer` | DevOps Engineer | Docker, CI/CD, deployment, runbook |

Agent files `.claude/agents/` mein hain. Pura team workflow `.claude/skills/deliver/SKILL.md` mein hai.

## Kaam kaise chalta hai

```
Client brief
   │
   ▼
Project Manager ─► Business Analyst ─► Architect ─┬─► UI/UX Designer
                                                  │
                                    ┌─────────────┴─────────────┐
                                    ▼                           ▼
                           Backend Developer           Frontend Developer
                                    └─────────────┬─────────────┘
                                                  ▼
                                           Code Reviewer  ◄── fixes ──┐
                                                  ▼                   │
                                            QA Engineer  ─── bugs ────┘
                                                  ▼
                                          DevOps Engineer ─► Project Manager (handover)
```

Saare documents `docs/` folder mein bante hain (`requirements.md`, `architecture.md`, `api-contract.yaml`, `qa/test-report.md`, `handover.md`), taaki har agent pichhle agent ka kaam padh sake aur client ko bhi dikha sakein.

## Kaise use karein

**1. Pura project deliver karwana:** Claude Code mein yeh command chalayein:
```
/deliver Ek restaurant ke liye online ordering website banani hai: menu, cart, Razorpay payment, admin panel for orders.
```
Claude orchestrator ban kar saare agents ko sahi order mein chalayega, review/QA ke loops sambhalega, aur end mein status table plus handover dega.

**2. Kisi ek agent se kaam karwana:** bas naam lekar bolein:
```
business-analyst agent se is client email ke requirements banwao: ...
qa-engineer agent se login flow test karwao
code-reviewer se mera last commit review karwao
```

**3. Doosre projects mein use karna:**
- Sirf ek project ke liye: `.claude/` folder us project ke root mein copy karein.
- Apne computer par har project ke liye: `.claude/agents/*.md` ko `~/.claude/agents/` mein aur `.claude/skills/deliver` ko `~/.claude/skills/` mein copy karein.

## Customize karna

Har agent ek simple Markdown file hai:
- `description`: Claude isi ko padh kar decide karta hai ki kaam kis agent ko dena hai.
- `tools`: agent kaun se tools use kar sakta hai. Field hata dene par agent ko saare tools milte hain.
- `model`: `opus` sochne wale roles ke liye (PM, Architect, Reviewer), `sonnet` fast execution wale roles ke liye.
- Neeche ka text agent ke instructions hain. Aap apni company ka default tech stack, coding rules, client communication style ya pricing yahan likh sakte hain.

Naya role chahiye, jaise SEO Specialist, Content Writer ya Mobile (Flutter) Developer? Ek nayi `.md` file `.claude/agents/` mein banayein, ya Claude se bolein: "ek naya agent banao jo ...".
