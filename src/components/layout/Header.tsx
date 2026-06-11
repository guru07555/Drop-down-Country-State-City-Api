"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { NAV_LINKS } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
        scrolled
          ? "bg-cream/90 py-2 shadow-header backdrop-blur-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="shell flex items-center justify-between">
        {/* Wordmark */}
        <a href="#top" className="flex items-center gap-2" data-cursor="hover">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-display text-xl font-extrabold text-ink shadow-card">
            y
          </span>
          <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
            yello<span className="text-tangerine">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative font-display text-sm font-bold text-ink transition-colors hover:text-tangerine"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-tangerine transition-all duration-300 ease-out-expo group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href="#contact" className="btn-primary">
            Enquire Now
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-card lg:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={clsx(
                "block h-0.5 w-5 rounded-full bg-ink transition-transform duration-300",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-5 rounded-full bg-ink transition-opacity duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-5 rounded-full bg-ink transition-transform duration-300",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <div className="shell flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-2xl px-4 py-3 font-display text-lg font-bold text-ink hover:bg-brand-100"
                >
                  {link.label}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4 self-start">
                Enquire Now
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
