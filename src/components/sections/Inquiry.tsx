import { Reveal } from "@/components/ui/Reveal";
import FloatingShapes from "@/components/ui/FloatingShapes";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Full-width admissions call-to-action band on the brand yellow.
 */
export default function Inquiry() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <FloatingShapes variant="warm" />
      <div className="shell relative flex flex-col items-center gap-8 py-20 text-center sm:py-24">
        <Reveal>
          <span className="mb-4 inline-block rounded-full bg-ink px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Admissions Open 2026–27
          </span>
          <h2 className="mx-auto max-w-3xl text-balance font-display text-display-lg font-extrabold text-ink">
            Ready to give your child the happiest start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Seats fill fast — book a free campus visit and watch your little
            one fall in love with school.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-wrap justify-center gap-4">
          <MagneticButton href="#contact" className="btn-dark">
            Enquire Now
          </MagneticButton>
          <MagneticButton href="#campuses" className="btn-light">
            Find a Campus
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
