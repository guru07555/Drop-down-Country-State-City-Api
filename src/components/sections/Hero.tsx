"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { HERO } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import FloatingShapes from "@/components/ui/FloatingShapes";
import Parallax from "@/components/ui/Parallax";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  // Entrance timeline: eyebrow -> heading lines -> sub -> CTAs -> image pop.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from("[data-hero='eyebrow']", { y: 24, opacity: 0, duration: 0.8, delay: 0.2 })
        .from(
          "[data-hero='line']",
          { yPercent: 110, duration: 1, stagger: 0.12 },
          "-=0.5"
        )
        .from("[data-hero='sub']", { y: 24, opacity: 0, duration: 0.8 }, "-=0.6")
        .from("[data-hero='cta']", { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.5")
        .from(
          "[data-hero='visual']",
          { scale: 0.85, opacity: 0, duration: 1.2, ease: "expo.out" },
          "-=0.9"
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-cream pt-28 lg:pt-20"
    >
      <FloatingShapes />

      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Copy */}
        <div className="relative z-10 text-center lg:text-left">
          <span data-hero="eyebrow" className="eyebrow mb-6">
            ☀️ {HERO.eyebrow}
          </span>

          <h1 className="font-display text-display-xl font-extrabold text-ink">
            <span className="block overflow-hidden">
              <span data-hero="line" className="block">{HERO.titleA}</span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero="line" className="block">
                <span className="relative inline-block text-tangerine">
                  {HERO.titleHighlight}
                  <svg
                    aria-hidden
                    className="absolute -bottom-2 left-0 w-full text-brand"
                    viewBox="0 0 120 12"
                    fill="none"
                  >
                    <path
                      d="M3 9c30-7 84-7 114-2"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero="line" className="block">{HERO.titleB}</span>
            </span>
          </h1>

          <p data-hero="sub" className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-mute sm:text-lg lg:mx-0">
            {HERO.sub}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <span data-hero="cta">
              <MagneticButton href="#contact" className="btn-primary">
                {HERO.ctaPrimary}
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MagneticButton>
            </span>
            <span data-hero="cta">
              <MagneticButton href="#programs" className="btn-outline">
                {HERO.ctaSecondary}
              </MagneticButton>
            </span>
          </div>
        </div>

        {/* Visual */}
        <div data-hero="visual" className="relative mx-auto w-full max-w-xl">
          <Parallax speed={40}>
            <div className="img-zoom-wrap mask-blob relative aspect-square shadow-card" data-cursor="hover">
              <Image
                src={HERO.image}
                alt="Children playing and learning together"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 36rem, 90vw"
              />
            </div>
          </Parallax>

          {/* Orbiting badge */}
          <div className="absolute -bottom-4 -left-4 grid h-28 w-28 place-items-center sm:h-32 sm:w-32">
            <svg className="absolute inset-0 animate-spin-slow" viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-ink font-display text-[8.5px] font-bold uppercase tracking-[0.22em]">
                <textPath href="#circlePath">learn · play · grow · learn · play · grow ·</textPath>
              </text>
            </svg>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-xl shadow-card">
              ★
            </span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-ink-mute">
          Scroll
        </span>
        <span className="h-10 w-px animate-pulse bg-ink/30" />
      </div>
    </section>
  );
}
