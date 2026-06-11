import { LOGOS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Infinite horizontal marquee of partner logos. The track is duplicated
 * and translated -50% on loop; pauses on hover.
 */
export default function LogoStrip() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className="border-y border-ink/5 bg-white py-10">
      <Reveal>
        <p className="mb-7 text-center font-display text-xs font-bold uppercase tracking-[0.24em] text-ink-mute">
          Trusted by parents working at
        </p>
      </Reveal>
      <div className="group relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-8 [animation-play-state:running] group-hover:[animation-play-state:paused]">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-xl font-extrabold text-ink/30 transition-colors duration-300 hover:text-ink"
            >
              {name}
            </span>
          ))}
        </div>
        {/* Edge fades */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
