# Yello-Style Preschool Homepage Recreation

A production-ready homepage that recreates the **layout structure, section
order, design system and motion language** of the iamyello.com reference.
All copy, imagery and logo marks here are **original placeholders** — swap
the SVGs in `public/images/` for licensed photography and the wordmark for
your own brand asset before going live.

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS 3.4** — full token system in `tailwind.config.ts`
- **Framer Motion** — reveals, staggering, magnetic buttons, custom cursor
- **GSAP + ScrollTrigger** — hero entrance timeline, stat count-ups
- **Lenis** — inertia smooth scrolling, synced with ScrollTrigger
- **SwiperJS** — testimonial video carousel

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project Structure

```
src/
├── app/                  # App Router: layout (fonts + SEO), page, globals
├── components/
│   ├── layout/           # Header (sticky/scroll states), Footer
│   ├── providers/        # Lenis + GSAP smooth-scroll provider
│   ├── sections/         # One component per homepage section, in order
│   └── ui/               # Reveal, MagneticButton, CursorFollower,
│                         # Parallax, SectionHeading, FloatingShapes
└── lib/
    ├── data.ts           # All page content in one place
    └── animations.ts     # Shared Framer Motion variants + easing
scripts/
└── generate-placeholders.mjs   # Regenerates placeholder imagery
```

## Design System

| Token | Value |
| --- | --- |
| Brand yellow | `#FFC907` |
| Tangerine (CTA / stats band) | `#FF7A1A` |
| Ink (text / footer) | `#243044` |
| Cream surface | `#FFFBF2` |
| Display font | Baloo 2 |
| Body font | Nunito |
| Buttons | Pill radius, magnet hover |
| Cards | 32–48px radius, soft floating shadows |
| Imagery | Blob / arch masks, zoom-on-hover |

## Animation System

- **Smooth scroll** — Lenis on the GSAP ticker; anchor links routed through Lenis
- **Reveals** — `Reveal` / `RevealGroup` fade-up + stagger on viewport entry
- **Hero** — GSAP timeline: eyebrow → masked heading lines → sub → CTAs → blob image pop
- **Stats** — ScrollTrigger count-up numbers
- **Mouse** — custom cursor dot + spring ring, magnetic CTA buttons
- **Parallax** — scroll-linked drift on all feature imagery
- **Hover** — card lift, image zoom, link arrow slide, underline grow

## Responsive Breakpoints

Designed and verified at 375 / 768 / 1440 / 1920 px. Mobile gets a
hamburger drawer, single-column sections, 2-col gallery/stats and a
1.1-slide peek carousel.
