const items = [
  "100% 무료 상담",
  "신용점수 영향 없음",
  "전문가 1:1 안내",
  "법정 한도 내 안전한 운영",
  "개인정보 즉시 파기",
  "광주 광산구 등록 대부업체",
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
          <span className="text-[12px] font-medium tracking-[0.04em] text-ink-700/75">
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
