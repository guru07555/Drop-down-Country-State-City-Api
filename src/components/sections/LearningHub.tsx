import Image from "next/image";
import { LEARNING_HUB } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { scaleIn } from "@/lib/animations";
import Parallax from "@/components/ui/Parallax";

/**
 * Learning Hub: circular photo on the left ringed by small accent dots,
 * orange display heading and a row of three circular icon badges.
 */
export default function LearningHub() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-cream-dark">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Circular visual */}
        <Reveal variants={scaleIn} className="relative mx-auto w-full max-w-md">
          <Parallax speed={30}>
            <div className="img-zoom-wrap relative aspect-square overflow-hidden rounded-full shadow-card" data-cursor="hover">
              <Image
                src={LEARNING_HUB.image}
                alt="Child exploring at the learning hub"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28rem, 80vw"
              />
            </div>
          </Parallax>
          {/* Accent dots arcing around the circle */}
          <span aria-hidden className="absolute -left-3 top-10 h-7 w-7 animate-float rounded-full bg-tangerine" />
          <span aria-hidden className="absolute -bottom-2 left-16 h-5 w-5 animate-float-delay rounded-full bg-brand" />
          <span aria-hidden className="absolute -right-2 bottom-20 h-9 w-9 animate-float rounded-full bg-sky-pop/70" />
          <span aria-hidden className="absolute right-8 -top-3 h-6 w-6 animate-float-delay rounded-full bg-leaf-pop/70" />
        </Reveal>

        {/* Copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-ink-soft">
              {LEARNING_HUB.eyebrowTop}
            </p>
            <h2 className="mt-1 font-display text-display-lg font-extrabold uppercase tracking-wide text-tangerine">
              {LEARNING_HUB.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-mute sm:text-lg lg:mx-0">
              {LEARNING_HUB.body}
            </p>
          </Reveal>

          {/* Circular icon badges */}
          <RevealGroup className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start" stagger={0.12}>
            {LEARNING_HUB.badges.map((badge) => (
              <RevealItem key={badge.label} className="w-32">
                <div className="flex flex-col items-center text-center" data-cursor="hover">
                  <span className="card-lift grid h-20 w-20 place-items-center rounded-full border-4 border-brand bg-white text-3xl shadow-card">
                    {badge.icon}
                  </span>
                  <span className="mt-3 font-display text-xs font-semibold leading-snug text-ink">
                    {badge.label}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
