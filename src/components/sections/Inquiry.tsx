import { Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Slim pre-booking question strip: single line of copy and one CTA on
 * the warm tinted band.
 */
export default function Inquiry() {
  return (
    <section className="bg-cream-dark">
      <div className="shell flex flex-col items-center gap-6 py-14 text-center sm:py-16">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance font-display text-display-sm font-extrabold text-ink">
            Still have questions before booking your tour?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-ink-mute">
            We&apos;re happy to help! Reach out and our team will get back to
            you within a working day.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <MagneticButton href="#contact" className="btn-primary">
            Talk to an Expert
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
