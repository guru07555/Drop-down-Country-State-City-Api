"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Video-testimonial carousel: rounded thumbnail cards with a pulsing play
 * button, image zoom on hover and Swiper autoplay/pagination.
 */
export default function Testimonials() {
  return (
    <section className="section-pad overflow-hidden bg-cream-dark">
      <div className="shell">
        <SectionHeading
          eyebrow="Parent Stories"
          title="Hear it from our families"
          body="Real parents, unscripted moments — the reviews that matter most."
        />

        <Reveal>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1.1}
            centeredSlides={false}
            loop
            autoplay={{ delay: 3800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.6 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible !pb-14"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <article className="card-lift group cursor-pointer" data-cursor="hover">
                  <div className="img-zoom-wrap relative aspect-[3/4] overflow-hidden rounded-4xl shadow-card">
                    <Image
                      src={t.thumb}
                      alt={`Video testimonial from ${t.name}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 24rem, 80vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

                    {/* Play button */}
                    <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-tangerine shadow-play transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:animate-pulse-ring">
                      <svg className="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5.5v13l11-6.5-11-6.5z" />
                      </svg>
                    </span>

                    {/* Caption */}
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <p className="font-display text-base font-bold leading-snug">
                        “{t.quote}”
                      </p>
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                        {t.name} · {t.role}
                      </p>
                    </div>
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
