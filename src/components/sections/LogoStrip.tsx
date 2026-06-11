import { LOGOS } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * "Corporate Tie-ups" strip: centered heading and a static row of
 * partner marks (generic placeholders — swap for licensed logo assets).
 */
export default function LogoStrip() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="shell">
        <Reveal>
          <h2 className="mb-9 text-center font-display text-xl font-bold text-ink sm:text-2xl">
            Corporate Tie-ups with <span className="text-tangerine">Yello</span>
          </h2>
        </Reveal>
        <RevealGroup
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16"
          stagger={0.08}
        >
          {LOGOS.map((name) => (
            <RevealItem key={name}>
              <span
                className="font-display text-lg font-extrabold tracking-tight text-ink/35 grayscale transition-all duration-300 hover:text-ink hover:grayscale-0 sm:text-xl"
                data-cursor="hover"
              >
                {name}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
