const stats = [
  { value: "5,000+", label: "누적 상담 건수", sub: "2023년 등록 이후" },
  { value: "5분", label: "평균 처리 시간", sub: "정보 입력부터 안내까지" },
  { value: "4.9", label: "고객 만족도", sub: "실제 후기 기반 / 5.0" },
  { value: "100%", label: "무료 상담", sub: "별도 비용 없음" },
];

export default function StatsBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-16 text-white sm:py-20">
      {/* Decorative backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            "radial-gradient(700px 320px at 80% 0%, rgba(217,187,107,0.22), transparent 60%), radial-gradient(500px 320px at 0% 100%, rgba(181,138,51,0.15), transparent 60%)",
        }}
      />
      {/* Top + bottom gold hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-300/35 to-transparent" />

      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-3 sm:mb-12 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold-300">
              By The Numbers
            </p>
            <h2 className="mt-3 font-serif text-[24px] font-medium leading-[1.2] tracking-tightest sm:text-[32px] lg:text-[36px]">
              숫자로 보는 제이앤대부
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-[1.85] text-white/55 sm:text-[14px]">
            정직한 운영의 흔적은 숫자로 남습니다. 빠르고, 공정하고, 따뜻하게.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group relative bg-ink-950 px-5 py-7 transition hover:bg-[#0d1429] sm:px-7 sm:py-9"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold-300/85">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-serif text-[34px] font-medium leading-none tracking-tightest text-gradient-gold sm:text-[44px] lg:text-[52px]">
                {s.value}
              </p>
              <p className="mt-3 text-[13px] font-medium text-white sm:text-[14px]">
                {s.label}
              </p>
              <p className="mt-1.5 text-[11.5px] text-white/45 sm:text-[12px]">
                {s.sub}
              </p>
              {/* Hover gold underline */}
              <span className="absolute inset-x-5 bottom-4 h-px origin-left scale-x-0 bg-gold-300/60 transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-7" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
