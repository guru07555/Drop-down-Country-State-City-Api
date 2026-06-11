import { FOOTER_COLUMNS } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const SOCIALS = ["Instagram", "Facebook", "YouTube", "LinkedIn"];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink text-white">
      {/* Scalloped top edge */}
      <div aria-hidden className="absolute inset-x-0 top-0 flex -translate-y-1/2 justify-center gap-2 opacity-0" />

      <div className="shell section-pad">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <Reveal className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-display text-xl font-extrabold text-ink">
                y
              </span>
              <span className="font-display text-2xl font-extrabold tracking-tight">
                yello<span className="text-brand">.</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              A play-first early learning school where every child is seen,
              heard and celebrated. Six campuses, one big happy family.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 font-display text-xs font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-ink"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Link columns */}
          <RevealGroup className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5" stagger={0.08}>
            {FOOTER_COLUMNS.map((col) => (
              <RevealItem key={col.heading}>
                <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand">
                  {col.heading}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Contact column */}
          <Reveal className="lg:col-span-3" delay={0.15}>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-brand">
              Say Hello
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>hello@yello.example</li>
              <li>+91 90000 00000</li>
              <li>Mon – Sat, 9am – 6pm</li>
            </ul>
            <a href="#" className="btn-primary mt-6">
              Book a Visit
            </a>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Yello Early Learning. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
