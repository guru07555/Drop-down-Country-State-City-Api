import Image from "next/image";
import { INSTAGRAM } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Instagram feed: heading row with handle, tight 4-column grid of posts
 * (reel tiles carry a play glyph), follow CTA underneath.
 */
export default function Instagram() {
  return (
    <section className="section-pad bg-white">
      <div className="shell">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="flex items-center gap-3 font-display text-display-sm font-extrabold text-ink">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-tr from-tangerine via-berry-pop to-grape-pop text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </span>
            Yello on Instagram
          </h2>
          <span className="font-script text-4xl font-semibold text-brand-600">Yello</span>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-4" stagger={0.05}>
          {INSTAGRAM.map((post, i) => (
            <RevealItem key={post.image}>
              <a
                href="#"
                aria-label={`Instagram post ${i + 1}`}
                className="img-zoom-wrap group relative block aspect-square overflow-hidden rounded-2xl shadow-card"
                data-cursor="hover"
              >
                <Image
                  src={post.image}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 22vw, 45vw"
                />
                {post.reel && (
                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/45 text-white backdrop-blur-sm">
                    <svg className="ml-0.5 h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5.5v13l11-6.5-11-6.5z" />
                    </svg>
                  </span>
                )}
                <div className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors duration-400 group-hover:bg-ink/40">
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

        <Reveal className="mt-10 text-center" delay={0.1}>
          <MagneticButton href="#" className="btn-primary">
            Follow us on Instagram
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
