import Image from "next/image";
import clsx from "clsx";
import { GALLERY } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * Masonry gallery (CSS columns) with image scale-on-hover and a soft
 * overlay that fades in.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="section-pad">
      <div className="shell">
        <SectionHeading
          eyebrow="Life at School"
          title="Tiny moments, giant smiles"
        />

        <RevealGroup className="columns-2 gap-4 sm:gap-5 lg:columns-3" stagger={0.08}>
          {GALLERY.map((item, i) => (
            <RevealItem key={item.image} className="mb-4 break-inside-avoid sm:mb-5">
              <div
                className={clsx(
                  "img-zoom-wrap group relative w-full cursor-pointer overflow-hidden rounded-3xl shadow-card",
                  item.tall ? "aspect-[3/4]" : "aspect-square"
                )}
                data-cursor="hover"
              >
                <Image
                  src={item.image}
                  alt={`Gallery moment ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 26rem, 45vw"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
                <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-50 place-items-center rounded-full bg-white text-ink opacity-0 transition-all duration-500 ease-out-expo group-hover:scale-100 group-hover:opacity-100">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                    <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" transform="translate(1 1)" />
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
