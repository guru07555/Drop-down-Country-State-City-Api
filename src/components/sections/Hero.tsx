"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { HERO_SLIDES } from "@/lib/data";

/**
 * Full-bleed photo hero: fading slideshow with a slow Ken Burns zoom on
 * each slide and the title banner anchored to the lower portion of the
 * image, mirroring the reference layout.
 */
export default function Hero() {
  return (
    <section id="top" className="relative h-[72vh] min-h-[480px] w-full overflow-hidden lg:h-[88vh]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1200}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full [--swiper-pagination-bottom:1.5rem]"
      >
        {HERO_SLIDES.map((slide, i) => (
          <SwiperSlide key={slide.title} className="relative h-full w-full">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: 9, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>

            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20" />

            {/* Title banner */}
            <div className="absolute inset-x-0 bottom-16 px-5 text-center sm:bottom-20">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto max-w-4xl font-display text-3xl font-extrabold uppercase tracking-wide text-white drop-shadow-lg sm:text-4xl lg:text-5xl"
              >
                <span className="text-brand">{slide.title.split(",")[0]}</span>
                {slide.title.includes(",") && (
                  <span>,{slide.title.split(",").slice(1).join(",")}</span>
                )}
              </motion.h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
