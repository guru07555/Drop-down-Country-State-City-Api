"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BLOG_POSTS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Blog carousel: left-aligned heading with a "read all" CTA on the
 * right, then a horizontal swiper of photo cards with date badges.
 */
export default function Blog() {
  return (
    <section id="blog" className="section-pad overflow-hidden bg-white">
      <div className="shell">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-script text-3xl font-semibold text-tangerine sm:text-4xl">
              The Yello Blog
            </p>
            <h2 className="mt-2 font-display text-display-md font-extrabold text-ink">
              Insights into Child Development
            </h2>
          </div>
          <MagneticButton href="#blog" className="btn-outline shrink-0">
            Read All Posts
          </MagneticButton>
        </Reveal>

        <Reveal>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1.15}
            loop
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.2 },
            }}
            className="!overflow-visible !pb-12"
          >
            {BLOG_POSTS.map((post) => (
              <SwiperSlide key={post.title}>
                <article
                  className="card-lift group h-full cursor-pointer overflow-hidden rounded-4xl bg-cream-dark shadow-card"
                  data-cursor="hover"
                >
                  <div className="img-zoom-wrap relative aspect-[16/11]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 24rem, 85vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-tangerine px-3.5 py-1.5 font-display text-xs font-bold text-white shadow-card">
                      {post.date}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-tangerine">
                      {post.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 font-display text-sm font-bold text-tangerine transition-all duration-300 group-hover:gap-3.5">
                      Read More
                      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
