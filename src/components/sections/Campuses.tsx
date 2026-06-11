"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { NURSERY_TABS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "A Day at Yello" nursery explorer: pill tabs over one large rounded
 * group photo on the warm orange gradient band; switching tabs
 * cross-fades the photo.
 */
export default function Campuses() {
  const [active, setActive] = useState(0);
  const tab = NURSERY_TABS[active];

  return (
    <section
      id="schools"
      className="section-pad relative overflow-hidden bg-gradient-to-b from-brand-200 via-brand-100 to-cream-dark"
    >
      <div className="shell">
        <Reveal className="mb-10 text-center">
          <p className="font-script text-3xl font-semibold text-tangerine sm:text-4xl">
            A Day at Yello
          </p>
          <h2 className="mt-2 font-display text-display-md font-extrabold text-ink">
            Explore Our Nurseries
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-mute">
            Step inside and see what a morning here feels like — pick a zone
            to peek into.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
          {NURSERY_TABS.map((t, i) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setActive(i)}
              data-cursor="hover"
              className={clsx(
                "rounded-full px-6 py-2.5 font-display text-sm font-bold transition-all duration-300 ease-out-expo",
                active === i
                  ? "bg-tangerine text-white shadow-cta"
                  : "bg-white text-ink-soft shadow-card hover:-translate-y-0.5"
              )}
            >
              {t.label}
            </button>
          ))}
        </Reveal>

        {/* Photo panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.label}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="img-zoom-wrap relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-5xl border-4 border-white shadow-card sm:aspect-[16/8]"
            data-cursor="hover"
          >
            <Image
              src={tab.image}
              alt={tab.label}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 64rem, 95vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
