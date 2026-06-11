import Image from "next/image";
import clsx from "clsx";
import { AGE_GROUPS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * Four-up age-group program grid: rounded cards, badge pinned over the
 * image, image zoom + card lift on hover.
 */
export default function AgeGroups() {
  return (
    <section id="programs" className="section-pad">
      <div className="shell">
        <SectionHeading
          eyebrow="Programs by Age"
          title="The right program for every little human"
          body="Each stage is crafted around developmental milestones — never one-size-fits-all."
        />

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {AGE_GROUPS.map((group) => (
            <RevealItem key={group.title}>
              <article
                className="card-lift group flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-card"
                data-cursor="hover"
              >
                <div className="img-zoom-wrap relative aspect-[4/3]">
                  <Image
                    src={group.image}
                    alt={`${group.title} program`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 90vw"
                  />
                  <span
                    className={clsx(
                      "absolute left-4 top-4 rounded-full px-3.5 py-1.5 font-display text-xs font-bold text-white shadow-card",
                      group.color
                    )}
                  >
                    {group.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-display-sm font-extrabold text-ink">
                    {group.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-mute">
                    {group.body}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold text-tangerine transition-all duration-300 group-hover:gap-3.5"
                  >
                    Know More
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
