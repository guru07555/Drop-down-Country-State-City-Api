import clsx from "clsx";

/**
 * Decorative floating shapes (sun, squiggle, dots, star) scattered behind
 * sections, animated with the CSS float keyframes.
 */
export default function FloatingShapes({ variant = "default" }: { variant?: "default" | "warm" }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={clsx(
          "absolute left-[6%] top-[12%] h-10 w-10 animate-float rounded-full",
          variant === "warm" ? "bg-white/20" : "bg-brand/40"
        )}
      />
      <svg
        className="absolute right-[8%] top-[18%] h-12 w-12 animate-float-delay text-tangerine/50"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M4 24c5-8 10-8 15 0s10 8 15 0 10-8 10-8"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute bottom-[14%] left-[10%] h-9 w-9 animate-float-delay text-berry-pop/50"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l2.6 6.8L22 9.3l-5.4 4.7 1.7 7L12 17l-6.3 4 1.7-7L2 9.3l7.4-.5L12 2z" />
      </svg>
      <div
        className={clsx(
          "absolute bottom-[20%] right-[12%] h-6 w-6 animate-float rounded-full",
          variant === "warm" ? "bg-white/25" : "bg-teal-pop/40"
        )}
      />
      <div className="absolute left-[45%] top-[6%] grid grid-cols-3 gap-1.5 opacity-30">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-ink" />
        ))}
      </div>
    </div>
  );
}
