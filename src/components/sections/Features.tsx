import Image from "next/image";
import clsx from "clsx";
import { FEATURES } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { scaleIn } from "@/lib/animations";
import Parallax from "@/components/ui/Parallax";
import MagneticButton from "@/components/ui/MagneticButton";

const ACCENT_RING: Record<string, string> = {
  teal: "border-teal-pop/50",
  berry: "border-berry-pop/50",
  grape: "border-grape-pop/50",
};

/**
 * Alternating image/text feature rows with blob-masked imagery and
 * fade-up entrances.
 */
export default function Features() {
  return (
    <section className="section-pad">
      <div className="shell space-y-24 lg:space-y-32">
        {FEATURES.map((feature, i) => {
          const flipped = i % 2 === 1;
          return (
            <div
              key={feature.title}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              {/* Image */}
              <Reveal
                variants={scaleIn}
                className={clsx("relative mx-auto w-full max-w-lg", flipped && "lg:order-2")}
              >
                <Parallax speed={30}>
                  <div
                    className={clsx(
                      "img-zoom-wrap relative aspect-[5/4] shadow-card",
                      flipped ? "mask-blob-alt" : "mask-blob"
                    )}
                    data-cursor="hover"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 32rem, 90vw"
                    />
                  </div>
                </Parallax>
                <div
                  aria-hidden
                  className={clsx(
                    "absolute -bottom-5 h-20 w-20 animate-float rounded-full border-8",
                    ACCENT_RING[feature.accent],
                    flipped ? "-right-4" : "-left-4"
                  )}
                />
              </Reveal>

              {/* Copy */}
              <Reveal className={clsx(flipped && "lg:order-1")} delay={0.1}>
                <span className="eyebrow mb-5">{feature.eyebrow}</span>
                <h3 className="text-balance font-display text-display-md font-extrabold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-mute sm:text-lg">
                  {feature.body}
                </p>
                <div className="mt-8">
                  <MagneticButton href="#contact" className="btn-outline">
                    {feature.cta}
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
