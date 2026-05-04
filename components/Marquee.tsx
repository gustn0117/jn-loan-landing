const items = [
  "JN LOAN CONSULTATION",
  "TRUSTED · TRANSPARENT · FAST",
  "FREE CONSULTATION",
  "NO IMPACT ON CREDIT SCORE",
  "REG. 2023-광주광산-0014",
  "EST. 2023",
];

function Diamond() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="inline-block h-1.5 w-1.5 mx-6 align-middle text-gold-500"
      aria-hidden
    >
      <path
        d="M8 1 L15 8 L8 15 L1 8 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center whitespace-nowrap">
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-ink-700/70">
            {it}
          </span>
          <Diamond />
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-[rgba(10,16,32,0.08)] bg-[#f7f5ee]"
    >
      <div className="flex animate-marquee py-4">
        {row}
        {row}
      </div>
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f7f5ee] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f7f5ee] to-transparent" />
    </section>
  );
}
