import Image from "next/image";
import { EVENT } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { scaleIn } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";
import Parallax from "@/components/ui/Parallax";

/**
 * Upcoming-event banner: dark panel, image on the right, date chip and
 * primary CTA.
 */
export default function Events() {
  return (
    <section className="section-pad">
      <div className="shell">
        <Reveal variants={scaleIn}>
          <div className="relative grid items-center gap-10 overflow-hidden rounded-6xl bg-ink p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            {/* Decorative dotted ring */}
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-72 w-72 animate-spin-slow rounded-full border-4 border-dashed border-brand/30"
            />

            <div className="relative">
              <span className="mb-4 inline-block rounded-full bg-brand px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-ink">
                {EVENT.eyebrow}
              </span>
              <h2 className="text-balance font-display text-display-lg font-extrabold text-white">
                {EVENT.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
                {EVENT.body}
              </p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-display text-sm font-bold text-brand">
                📅 {EVENT.date}
              </p>
              <div className="mt-8">
                <MagneticButton href="#contact" className="btn-primary">
                  {EVENT.cta}
                </MagneticButton>
              </div>
            </div>

            <Parallax speed={25} className="relative">
              <div className="img-zoom-wrap relative aspect-[4/3] overflow-hidden rounded-4xl shadow-card" data-cursor="hover">
                <Image
                  src={EVENT.image}
                  alt={EVENT.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 34rem, 90vw"
                />
              </div>
            </Parallax>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
