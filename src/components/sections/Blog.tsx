import Image from "next/image";
import { BLOG_POSTS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Three-up blog grid: 16/10 cover, category chip, lift + image zoom hover.
 */
export default function Blog() {
  return (
    <section id="blog" className="section-pad bg-white">
      <div className="shell">
        <SectionHeading
          eyebrow="From the Blog"
          title="Little reads for big parenting questions"
        />

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.12}>
          {BLOG_POSTS.map((post) => (
            <RevealItem key={post.title}>
              <article
                className="card-lift group flex h-full cursor-pointer flex-col overflow-hidden rounded-4xl bg-cream shadow-card"
                data-cursor="hover"
              >
                <div className="img-zoom-wrap relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 26rem, 90vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 font-display text-xs font-bold text-tangerine shadow-card">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-mute">
                    {post.date}
                  </p>
                  <h3 className="mt-3 flex-1 font-display text-lg font-extrabold leading-snug text-ink transition-colors duration-300 group-hover:text-tangerine">
                    {post.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold text-ink transition-all duration-300 group-hover:gap-3.5 group-hover:text-tangerine">
                    Read Article
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center" delay={0.1}>
          <MagneticButton href="#blog" className="btn-outline">
            View All Articles
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
