"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/lib/data";
import FloatingShapes from "@/components/ui/FloatingShapes";

gsap.registerPlugin(ScrollTrigger);

/**
 * Orange stats band with scroll-triggered count-up numbers.
 */
export default function Stats() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(counter.value).toLocaleString("en-IN");
          },
        });
      });

      gsap.from("[data-stat]", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-tangerine">
      <FloatingShapes variant="warm" />
      <div className="shell relative grid grid-cols-2 gap-x-6 gap-y-12 py-16 sm:py-20 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} data-stat className="text-center">
            <p className="font-display text-5xl font-extrabold text-white sm:text-6xl">
              <span data-count={stat.value}>0</span>
              {stat.suffix}
            </p>
            <p className="mx-auto mt-3 max-w-[12rem] font-display text-sm font-bold text-white/85">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
