import { FOOTER } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

const SOCIALS = ["Instagram", "Facebook", "YouTube", "LinkedIn"];

/**
 * Yellow footer: link columns + admissions block with CTA, social icon
 * row, then a band of campus address cards and the copyright bar.
 */
export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-brand text-ink">
      <div className="shell pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand + socials */}
          <Reveal className="lg:col-span-3">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white font-display text-lg font-extrabold text-tangerine shadow-card">
                Y
              </span>
              <span className="font-display text-2xl font-extrabold tracking-tight text-tangerine">
                Yello
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              A play-first preschool and day-care where every child is seen,
              heard and celebrated.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white font-display text-xs font-bold text-tangerine shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-tangerine hover:text-white"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Link columns */}
          <RevealGroup className="grid grid-cols-2 gap-8 lg:col-span-5" stagger={0.08}>
            {[
              { heading: "About", links: FOOTER.about },
              { heading: "Learning", links: FOOTER.curriculum },
            ].map((col) => (
              <RevealItem key={col.heading}>
                <h4 className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-tangerine">
                  {col.heading}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm font-medium text-ink-soft transition-colors hover:text-tangerine"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Admissions block */}
          <Reveal className="lg:col-span-4" delay={0.15}>
            <div className="rounded-4xl bg-white/70 p-7 shadow-card backdrop-blur-sm">
              <h4 className="font-display text-lg font-extrabold text-ink">
                {FOOTER.admissions.heading}
              </h4>
              <ul className="mt-4 space-y-2 text-sm font-medium text-ink-soft">
                <li>📞 {FOOTER.admissions.phone}</li>
                <li>✉️ {FOOTER.admissions.email}</li>
              </ul>
              <div className="mt-6">
                <MagneticButton href="#contact" className="btn-primary">
                  Book a Free Tour
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Campus addresses */}
        <RevealGroup className="mt-14 grid gap-6 border-t border-ink/10 pt-10 sm:grid-cols-3" stagger={0.1}>
          {FOOTER.campuses.map((campus) => (
            <RevealItem key={campus.name}>
              <h5 className="font-display text-sm font-extrabold text-ink">
                {campus.name}
              </h5>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {campus.address}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/10 py-7 text-xs font-semibold text-ink-soft sm:flex-row">
          <p>© {new Date().getFullYear()} Yello Early Learning. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-tangerine">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-tangerine">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
