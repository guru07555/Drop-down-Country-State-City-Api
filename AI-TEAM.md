# AI Agency Team: 8 Claude Agents

Yeh aapki IT / digital agency ki AI team hai. Har agent ek specialist hai, aur Team Manager sabko kaam assign karke track karta hai.

## Team

| # | Agent | Role | Kya karta hai |
|---|---|---|---|
| 1 | `graphic-designer` | Graphic Designer (10+ yrs: Photoshop, Illustrator, CorelDRAW, Canva) | Logo, branding, social posts, banners, flyers, brochures, visiting cards, thumbnails |
| 2 | `video-designer` | Video Editor & Motion Graphics (After Effects, Premiere Pro) | Reels, ads, explainer, animated logo, motion graphics, subtitles |
| 3 | `social-media-manager` | Social Media Manager + Ads | Content calendar, captions, posting, Meta Ads, Google Ads, monthly report |
| 4 | `seo-expert` | SEO Expert (10+ yrs) | On-page, off-page, technical SEO, local SEO, keyword research, SEO report |
| 5 | `lead-researcher` | Lead Generation | Clients dhoondhna, filter/score karna, lead list (CSV) banana |
| 6 | `outreach-specialist` | Email Outreach & Appointment Setter | Leads ko offer emails, follow-ups, replies ka jawab, meeting fix karna |
| 7 | `team-manager` | Team Manager | Task assign karna, deadlines, kya pura hua / kya baaki hai, quality check |
| 8 | `web-developer` | Website Designer & Developer (10+ yrs) | Har type ki website: business, e-commerce, WordPress, Shopify, landing page, custom |

## Kaam ka flow

```
lead-researcher ─► outreach-specialist ─► Meeting ─► Client mila
                                                        │
                                                        ▼
                                                 team-manager (tasks assign)
                     ┌──────────────┬──────────────┬────┴─────────┬──────────────┐
                     ▼              ▼              ▼              ▼              ▼
              web-developer   graphic-designer  video-designer  social-media   seo-expert
                     └──────────────┴──────────────┴──────┬───────┴──────────────┘
                                                          ▼
                                      team-manager (check karta hai, client report)
```

## Kaise use karein

**Naya client ya kaam:**
```
/team Sharma Sweets (Ladwa) ke liye website, logo aur 1 month ka social media + Diwali Meta ads
```

**Naye clients dhundhna aur email karna:**
```
/team Chandigarh aur Mohali ke 50 dental clinics dhoondo jinki website weak hai, aur unhe website + SEO offer email karo
```

**Status check:**
```
/team status batao, kya pura hua aur kya baaki hai
```

**Kisi ek agent se kaam:**
```
graphic-designer se Diwali ki 5 Instagram posts banwao
```

## Folder structure

```
work/
├── tasks.md                 ← Task board (Manager isko update karta hai)
├── clients/<client-name>/   ← brief.md, design/, video/, social/, ads/, seo/, website/
├── leads/                   ← Lead lists (CSV)
└── outreach/
    ├── offers.md            ← ⚠️ Apne services aur prices yahan bharein
    ├── settings.md          ← ⚠️ Agency naam, address, email, booking link bharein
    ├── campaigns/           ← Email sequences
    ├── log.csv              ← Kisko kab email gaya, kya reply aaya
    ├── meetings.md          ← Fix hui meetings
    └── do-not-contact.csv   ← Jo mana kar de, unhe dobara email nahi
```

**Shuru karne se pehle** `work/outreach/offers.md` aur `work/outreach/settings.md` bhar dijiye. Inke bina outreach agent prices ya details khud se nahi banayega.

## Safety rules (team inhe follow karti hai)
- **Paisa:** Meta/Google Ads ka budget aapki "yes" ke bina launch nahi hoga.
- **Emails:** Leads ko pehla email bhejne se pehle aapko exact email aur list dikhayi jayegi.
- **Website live:** Client ke domain par aapki approval ke baad hi.
- Emails mein unsubscribe/opt-out line hogi, aur sirf public business contact details use honge (anti-spam aur privacy laws ke hisaab se).

## Kya sach mein ho sakta hai? (zaroori)

| Kaam | Agent khud kar sakta hai | Iske liye aapko kya chahiye |
|---|---|---|
| Logo, posts, banners | SVG/PNG/PDF files banata hai (Illustrator/CorelDRAW mein khul jaati hain), aur Canva connector se editable designs | Photoshop ko khud chala nahi sakta |
| Video, motion graphics | Code se MP4 render karta hai (Remotion/GSAP + ffmpeg), After Effects ke liye scripts, script aur storyboard | Real shooting wali footage aapko deni hogi |
| Social posting, Meta/Google Ads | Calendar, captions, campaign plan, bulk-upload CSV | Auto-posting aur ads launch ke liye Meta/Google ka connector ya API access |
| Lead finding | Public web se research, scoring, CSV | — |
| Email bhejna, replies, meetings | Emails likhna, replies draft karna, log rakhna | Gmail/Calendar connector. Uske bina mail-merge CSV milegi |
| SEO, website | Pura kaam (audit, code, testing) | Search Console/GA4 access, hosting/domain login |

## Aur kis role ki zaroorat hai? (suggestion)
1. **Content Writer / Copywriter:** blogs, website content, captions, ad copy. SEO aur social dono ko roz content chahiye. Sabse zaroori addition hai.
2. **Proposal & Account Manager:** meeting ke baad proposal/quotation banana, client onboarding, invoices aur monthly client reports. Lead → meeting → **deal close** wala gap yeh bharta hai.
3. **Analytics / Reporting Specialist** (optional): GA4, ads aur SEO ka combined monthly dashboard.

Naya agent chahiye to Claude se boliye: "content-writer agent bhi banao".
