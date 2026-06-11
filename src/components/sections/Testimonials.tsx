"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TESTIMONIALS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Parent video-testimonial band on the warm yellow gradient with a giant
 * watermark wordmark, three photo cards with name ribbons and play
 * buttons, and a "view all" CTA below.
 */
export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-300 via-brand-200 to-brand-100 py-section">
      {/* Watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-6 font-display text-7xl font-extrabold text-white/40 sm:text-8xl"
      >
        Yello
      </span>

      <div className="shell relative">
        <Reveal className="mb-12 text-center">
          <p className="font-script text-3xl font-semibold text-tangerine sm:text-4xl">
            Real Stories, Real Experiences
          </p>
          <h2 className="mt-2 font-display text-display-md font-extrabold text-ink">
            What Parents Are Saying About Yello
          </h2>
        </Reveal>

        <Reveal>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1.15}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible !pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <figure className="card-lift group cursor-pointer" data-cursor="hover">
                  <div className="img-zoom-wrap relative aspect-[7/8] overflow-hidden rounded-4xl border-4 border-white shadow-card">
                    <Image
                      src={t.image}
                      alt={`Testimonial from ${t.name}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 24rem, 80vw"
                    />
                    {t.video && (
                      <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-tangerine text-white shadow-play transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:animate-pulse-ring">
                        <svg className="ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5.5v13l11-6.5-11-6.5z" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <figcaption className="-mt-5 flex justify-center">
                    <span className="relative rounded-full bg-tangerine px-5 py-2 font-display text-sm font-bold text-white shadow-card">
                      {t.name}
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

        <Reveal className="mt-8 text-center" delay={0.1}>
          <MagneticButton href="#" className="btn-dark !bg-ink">
            View All Testimonials
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
