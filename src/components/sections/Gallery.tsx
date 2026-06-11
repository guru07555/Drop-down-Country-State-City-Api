import Image from "next/image";
import clsx from "clsx";
import { LIFE_GALLERY } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * "Life at Yello" photo collage: masonry columns of activity photos with
 * zoom + overlay on hover.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-cream-dark">
      <div className="shell">
        <Reveal className="mb-12 text-center">
          <p className="font-script text-3xl font-semibold text-tangerine sm:text-4xl">
            Life at Yello
          </p>
          <h2 className="mt-2 font-display text-display-md font-extrabold text-ink">
            Visual Story of Vibrant Child and Day Care Activities
          </h2>
        </Reveal>

        <RevealGroup className="columns-2 gap-4 sm:gap-5 lg:columns-4" stagger={0.06}>
          {LIFE_GALLERY.map((item, i) => (
            <RevealItem key={item.image} className="mb-4 break-inside-avoid sm:mb-5">
              <div
                className={clsx(
                  "img-zoom-wrap group relative w-full cursor-pointer overflow-hidden rounded-3xl shadow-card",
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                )}
                data-cursor="hover"
              >
                <Image
                  src={item.image}
                  alt={`Activity moment ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20rem, 45vw"
                />
                <div className="absolute inset-0 bg-tangerine/0 transition-colors duration-500 group-hover:bg-tangerine/25" />
                <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-50 place-items-center rounded-full bg-white text-tangerine opacity-0 transition-all duration-500 ease-out-expo group-hover:scale-100 group-hover:opacity-100">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
