# Divy Digital Hub: AI Team (11 Claude Agents)

Yeh Divy Digital Hub (Ladwa) ki AI team hai: digital agency + training institute. Company details `work/agency-profile.md` mein hain, aur har agent wahi se padhta hai. Har agent ek specialist hai, aur Team Manager sabko kaam assign karke track karta hai.

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
| 9 | `content-writer` | Content Writer & Copywriter (English/Hindi/Hinglish) | SEO blogs, website content, ad copy, captions, video scripts, newsletters |
| 10 | `account-manager` | Proposal & Account Manager | Proposal/quotation, deal close, client onboarding, GST invoices, payment reminders, monthly client reports |
| 11 | `admissions-counselor` | Admissions Counselor (Training) | Students ko attract karna (seminars, demo class, ads), counselling, sahi course suggest karna, personal learning plan, follow-up, enrollment, batch tracking |

## Kaam ka flow

```
lead-researcher ─► outreach-specialist ─► Meeting ─► account-manager (proposal ─► deal close ─► onboarding)
                                                                     │
                                                                     ▼
                                                    team-manager (tasks assign)
        ┌──────────────┬──────────────┬──────────────┬───────────────┼──────────────┐
        ▼              ▼              ▼              ▼               ▼              ▼
  content-writer  web-developer  graphic-designer video-designer social-media   seo-expert
        └──────────────┴──────────────┴──────────────┴───────┬───────┴──────────────┘
                                                             ▼
                                   team-manager (quality check) ─► account-manager (report + invoice)
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

**Meeting ke baad proposal:**
```
/team Kal Sharma Sweets ke saath meeting hui: website + SEO chahiye, budget 40k. Proposal banao
```

**Invoice:**
```
account-manager se Sharma Sweets ka October retainer invoice banwao
```

**Training ke liye students:**
```
/team Agle mahine Digital Marketing batch ke liye Ladwa, Kurukshetra, Yamunanagar ke colleges mein free seminar plan karo aur demo class campaign banao
admissions-counselor: Rahul, 21, B.Com final year, freelancing karna chahta hai, roz 2 ghante. Iske liye course plan banao
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
├── agency-profile.md       ← ⚠️ Company details (website se bharein)
├── training/
│   ├── courses.md           ← ⚠️ Courses, fees, batches bharein
│   ├── students.csv         ← Enquiry se enrollment tak student pipeline
│   ├── plans/               ← Har student ka personal learning plan
│   ├── campaigns/           ← Seminar, demo class, ads plans
│   └── batches.md
├── accounts/
│   ├── billing-settings.md  ← ⚠️ GSTIN, bank/UPI, invoice prefix bharein
│   ├── invoices.csv         ← Saare invoices aur payment status
│   └── invoices/            ← Har invoice ki file
└── outreach/
    ├── offers.md            ← ⚠️ Apne services aur prices yahan bharein
    ├── settings.md          ← ⚠️ Agency naam, address, email, booking link bharein
    ├── campaigns/           ← Email sequences
    ├── log.csv              ← Kisko kab email gaya, kya reply aaya
    ├── meetings.md          ← Fix hui meetings
    └── do-not-contact.csv   ← Jo mana kar de, unhe dobara email nahi
```

`work/agency-profile.md` aur `work/training/courses.md` website se bhar diye gaye hain. Courses mein sirf installments aur batch timings baaki hain. Sirf **3 aur 6 month** wale courses beche jaate hain, 45 din wale nahi. Digital Marketing ka **6 month** course sabse pehle promote hota hai, uske baad 3 month.

**Shuru karne se pehle** yeh files bhar dijiye: `work/outreach/offers.md` (services aur prices), `work/outreach/settings.md` (agency details) aur `work/accounts/billing-settings.md` (GST aur bank details). Inke bina agents prices, details ya tax khud se nahi banayenge.

## Safety rules (team inhe follow karti hai)
- **Paisa:** Meta/Google Ads ka budget aapki "yes" ke bina launch nahi hoga.
- **Emails:** Leads ko pehla email bhejne se pehle aapko exact email aur list dikhayi jayegi.
- **Proposal / invoice:** client ko proposal, quote, discount ya invoice aapki approval ke baad hi jayega.
- **Students:** sirf unse contact jo khud enquiry karein ya form bharein. 18 saal se kam umar walon ke liye fees aur enrollment ki baat parents se, aur koi "100% job guarantee" jaisa jhootha dawa nahi.
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

## Aage aur roles (zaroorat pade to)
- **Analytics / Reporting Specialist:** GA4, ads aur SEO ka combined dashboard.
- **Mobile App Developer (Flutter):** agar app development bhi bechna ho.
- **HR / Recruiter:** jab insaani team badhani ho.

Naya agent chahiye to Claude se boliye: "<role> agent bhi banao".
