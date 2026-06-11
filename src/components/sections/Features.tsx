import Image from "next/image";
import clsx from "clsx";
import { CORNERS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { scaleIn } from "@/lib/animations";
import Parallax from "@/components/ui/Parallax";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * The two "Corner" feature rows: handwritten-style orange script name,
 * bold statement heading, paragraph and CTA beside a circular photo.
 * Rows alternate image side; the first sits on the warm tinted band.
 */
export default function Features() {
  return (
    <section id="activities">
      {CORNERS.map((corner) => (
        <div
          key={corner.script}
          className={clsx("section-pad", corner.tint ? "bg-cream-dark" : "bg-white")}
        >
          <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Copy */}
            <Reveal className={clsx("text-center lg:text-left", corner.flipped && "lg:order-2")}>
              <p className="font-script text-4xl font-semibold text-tangerine sm:text-5xl">
                {corner.script}
              </p>
              <h3 className="mt-3 text-balance font-display text-display-md font-extrabold text-ink">
                {corner.title}
              </h3>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-mute sm:text-lg lg:mx-0">
                {corner.body}
              </p>
              <div className="mt-8">
                <MagneticButton href="#contact" className="btn-primary">
                  {corner.cta}
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </MagneticButton>
              </div>
            </Reveal>

            {/* Circular photo */}
            <Reveal
              variants={scaleIn}
              className={clsx("relative mx-auto w-full max-w-md", corner.flipped && "lg:order-1")}
            >
              <Parallax speed={28}>
                <div
                  className={clsx(
                    "img-zoom-wrap relative aspect-square overflow-hidden shadow-card",
                    corner.flipped ? "mask-blob-alt" : "rounded-full"
                  )}
                  data-cursor="hover"
                >
                  <Image
                    src={corner.image}
                    alt={corner.script}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 28rem, 80vw"
                  />
                </div>
              </Parallax>
              <span
                aria-hidden
                className={clsx(
                  "absolute -bottom-4 h-12 w-12 animate-float rounded-full bg-brand/70",
                  corner.flipped ? "-right-2" : "-left-2"
                )}
              />
            </Reveal>
          </div>
        </div>
      ))}
    </section>
  );
}
