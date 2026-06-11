import Image from "next/image";
import { INSTAGRAM } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * Six-up Instagram feed: tight square grid, heart overlay slides up on
 * hover with an image zoom underneath.
 */
export default function Instagram() {
  return (
    <section className="section-pad bg-cream-dark">
      <div className="shell">
        <SectionHeading
          eyebrow="@yello.preschool"
          title="Follow the fun on Instagram"
        />

        <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" stagger={0.06}>
          {INSTAGRAM.map((src, i) => (
            <RevealItem key={src}>
              <a
                href="#"
                aria-label={`Instagram post ${i + 1}`}
                className="img-zoom-wrap group relative block aspect-square overflow-hidden rounded-2xl shadow-card"
                data-cursor="hover"
              >
                <Image
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 13rem, (min-width: 640px) 30vw, 45vw"
                />
                <div className="absolute inset-0 grid place-items-center bg-tangerine/0 transition-colors duration-400 group-hover:bg-tangerine/70">
                  <svg
                    className="h-7 w-7 translate-y-3 text-white opacity-0 transition-all duration-400 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 21s-7.5-4.7-9.7-9C.7 8.7 2.3 5 5.6 5c2 0 3.3 1 4 2.2.3.5 1 .5 1.3 0C11.6 6 13 5 15 5c3.3 0 4.9 3.7 3.3 7-2.2 4.3-6.3 9-6.3 9z" />
                  </svg>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
