import Image from "next/image";
import { LEARNING_HUB } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { scaleIn } from "@/lib/animations";
import Parallax from "@/components/ui/Parallax";
import MagneticButton from "@/components/ui/MagneticButton";

export default function LearningHub() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Visual: arch-masked image with circular decorations */}
        <Reveal variants={scaleIn} className="relative order-2 mx-auto w-full max-w-lg lg:order-1">
          <Parallax speed={35}>
            <div className="img-zoom-wrap mask-arch relative aspect-[4/5] shadow-card" data-cursor="hover">
              <Image
                src={LEARNING_HUB.image}
                alt="Inside the learning hub"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 32rem, 90vw"
              />
            </div>
          </Parallax>
          {/* Circular design elements */}
          <div aria-hidden className="absolute -left-8 top-10 h-24 w-24 rounded-full border-[10px] border-brand/60" />
          <div aria-hidden className="absolute -right-6 bottom-16 h-16 w-16 animate-float rounded-full bg-teal-pop/30" />
          <div aria-hidden className="absolute -bottom-6 left-10 h-10 w-10 animate-float-delay rounded-full bg-berry-pop/40" />
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow mb-5">{LEARNING_HUB.eyebrow}</span>
            <h2 className="text-balance font-display text-display-lg font-extrabold text-ink">
              {LEARNING_HUB.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-mute sm:text-lg">
              {LEARNING_HUB.body}
            </p>
          </Reveal>

          <RevealGroup className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.1}>
            {LEARNING_HUB.points.map((point) => (
              <RevealItem key={point.label}>
                <div className="card-lift flex items-center gap-4 rounded-3xl bg-white p-4 shadow-card" data-cursor="hover">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-100 text-2xl">
                    {point.icon}
                  </span>
                  <span className="font-display text-sm font-bold text-ink">
                    {point.label}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-9" delay={0.2}>
            <MagneticButton href="#programs" className="btn-dark">
              Discover the Curriculum
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
