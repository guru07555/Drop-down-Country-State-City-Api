import { Reveal } from "@/components/ui/Reveal";
import clsx from "clsx";

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal
      className={clsx(
        "mb-12 max-w-2xl lg:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2
        className={clsx(
          "text-balance font-display text-display-lg font-extrabold",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {body && (
        <p
          className={clsx(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-white/80" : "text-ink-mute"
          )}
        >
          {body}
        </p>
      )}
    </Reveal>
  );
}
