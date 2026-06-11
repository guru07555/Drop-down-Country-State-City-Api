import Image from "next/image";
import { EVENT } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Upcoming-event banner: full-width photo with a left-anchored overlay
 * carrying the script eyebrow, headline, date chip and CTA.
 */
export default function Events() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[60vh] min-h-[420px] w-full">
        <Image
          src={EVENT.image}
          alt={EVENT.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

        <div className="shell absolute inset-0 flex items-center">
          <Reveal className="max-w-xl text-white">
            <p className="font-script text-3xl font-semibold text-brand sm:text-4xl">
              {EVENT.eyebrow}
            </p>
            <h2 className="mt-2 text-balance font-display text-display-md font-extrabold">
              {EVENT.title}
            </h2>
            <p className="mt-4 text-base text-white/85 sm:text-lg">{EVENT.body}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-display text-sm font-bold text-brand backdrop-blur-sm">
              📅 {EVENT.date}
            </p>
            <div className="mt-7">
              <MagneticButton href="#contact" className="btn-primary">
                {EVENT.cta}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
