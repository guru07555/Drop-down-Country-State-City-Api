import Image from "next/image";
import { AGE_GROUPS } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Six program cards in a 3-column grid (Toddlers → K2), each with a
 * rounded photo, circular age badge pinned to the corner, orange title
 * and a one-line description. A single Enquire CTA sits below the grid.
 */
export default function AgeGroups() {
  return (
    <section id="programs" className="section-pad bg-white">
      <div className="shell">
        <Reveal className="mb-12 text-center">
          <p className="font-script text-3xl font-semibold text-tangerine sm:text-4xl">
            Our Age Groups
          </p>
          <h2 className="mt-2 font-display text-display-md font-extrabold text-ink">
            Guiding Children through their formative years
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {AGE_GROUPS.map((group) => (
            <RevealItem key={group.title}>
              <article className="card-lift group relative" data-cursor="hover">
                <div className="img-zoom-wrap relative aspect-[4/3] overflow-hidden rounded-4xl shadow-card">
                  <Image
                    src={group.image}
                    alt={`${group.title} program`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw"
                  />
                </div>
                {/* Circular age badge */}
                <span className="absolute -top-4 right-4 grid h-16 w-16 place-items-center rounded-full border-4 border-white bg-brand text-center font-display text-[11px] font-extrabold leading-tight text-ink shadow-card">
                  {group.badge.replace(" Years", "")}
                  <span className="block text-[9px] font-bold uppercase">Yrs</span>
                </span>
                <div className="px-2 pt-5 text-center">
                  <h3 className="font-display text-xl font-extrabold text-tangerine">
                    {group.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-mute">{group.body}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 text-center" delay={0.1}>
          <MagneticButton href="#contact" className="btn-primary">
            Enquire Now
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
