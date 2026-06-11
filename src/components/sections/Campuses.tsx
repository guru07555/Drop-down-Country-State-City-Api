"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { CAMPUSES } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Campus showcase: pill tabs switch the active campus; the active panel
 * cross-fades in over a soft gradient backdrop.
 */
export default function Campuses() {
  const [active, setActive] = useState(0);
  const campus = CAMPUSES[active];

  return (
    <section id="campuses" className="section-pad overflow-hidden">
      <div className="shell">
        <SectionHeading
          eyebrow="Our Campuses"
          title="Six sunny campuses, one warm welcome"
          body="Every campus is purpose-built — open courtyards, soft floors and lots of light."
        />

        {/* Tabs */}
        <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
          {CAMPUSES.map((c, i) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setActive(i)}
              data-cursor="hover"
              className={clsx(
                "rounded-full px-6 py-2.5 font-display text-sm font-bold transition-all duration-300 ease-out-expo",
                active === i
                  ? "bg-ink text-white shadow-card"
                  : "bg-white text-ink-soft shadow-card hover:-translate-y-0.5"
              )}
            >
              {c.name}
            </button>
          ))}
        </Reveal>

        {/* Active campus panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={campus.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={clsx(
              "grid items-center gap-10 rounded-6xl bg-gradient-to-br p-8 sm:p-12 lg:grid-cols-2",
              campus.gradient
            )}
          >
            <div className="img-zoom-wrap relative aspect-[16/10] overflow-hidden rounded-4xl shadow-card" data-cursor="hover">
              <Image
                src={campus.image}
                alt={`${campus.name} campus`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 36rem, 90vw"
              />
            </div>
            <div>
              <span className="eyebrow mb-4">{campus.tag}</span>
              <h3 className="font-display text-display-md font-extrabold text-ink">
                {campus.name}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-mute">
                Sun-lit classrooms, a sensory garden, splash zone and a
                parent lounge — drop in any working day for a guided tour.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <MagneticButton href="#contact" className="btn-primary">
                  Visit This Campus
                </MagneticButton>
                <MagneticButton href="#contact" className="btn-light">
                  Get Directions
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
