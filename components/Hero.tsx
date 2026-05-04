import { Ornament } from "./Brand";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      {/* Layered gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 620px at 88% -8%, rgba(217,187,107,0.32), transparent 55%), radial-gradient(800px 460px at -5% 20%, rgba(181,138,51,0.12), transparent 55%), radial-gradient(600px 360px at 50% 100%, rgba(10,16,32,0.06), transparent 60%)",
        }}
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,16,32,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,16,32,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(900px 600px at 30% 40%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(900px 600px at 30% 40%, black 30%, transparent 80%)",
        }}
      />
      {/* Floating gold orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full opacity-60 blur-3xl sm:right-0 sm:h-96 sm:w-96"
        style={{
          background:
            "radial-gradient(circle, rgba(217,187,107,0.45) 0%, rgba(217,187,107,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-12 -z-10 h-72 w-72 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(181,138,51,0.28) 0%, rgba(181,138,51,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        {/* Top hairline meta row */}
        <div className="reveal mb-10 flex items-center justify-between gap-3 border-b border-[rgba(10,16,32,0.08)] pb-4 text-[10px] uppercase tracking-[0.18em] text-ink-700/65 sm:mb-12 sm:text-[11px] sm:tracking-[0.22em]">
          <span className="flex items-center gap-2">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-gold-500" />
            <span className="hidden sm:inline">JN Loan · Consultation</span>
            <span className="sm:hidden">JN Loan</span>
          </span>
          <span className="hidden sm:inline">Reg. 2023-광주광산-0014</span>
          <span>Est. 2023</span>
        </div>

        <div className="grid gap-x-12 gap-y-12 sm:gap-y-14 lg:grid-cols-12 lg:gap-y-16">
          {/* Headline column */}
          <div className="lg:col-span-7">
            {/* Trust badge above headline */}
            <div className="reveal mb-5 inline-flex items-center gap-2.5 rounded-full border border-gold-300/60 bg-white/80 px-3.5 py-1.5 shadow-[0_2px_12px_-4px_rgba(181,138,51,0.25)] backdrop-blur sm:mb-7 sm:gap-3 sm:px-4 sm:py-2">
              <span className="flex -space-x-0.5 text-[12px] text-gold-500 sm:text-[13px]">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </span>
              <span className="text-[11.5px] font-medium text-ink-900 sm:text-[12.5px]">
                평균 만족도 <span className="text-gradient-gold font-semibold">4.9/5</span>
              </span>
              <span className="hidden h-3 w-px bg-ink-900/15 sm:block" />
              <span className="hidden text-[11px] text-ink-700/70 sm:inline">
                실제 상담 후기 기반
              </span>
            </div>

            <h1 className="reveal delay-1 font-serif text-[36px] font-medium leading-[1.08] tracking-tightest text-ink-900 sm:text-[48px] md:text-[58px] lg:text-[68px]">
              <span className="block">다양한 신용 상황에서도,</span>
              <span className="relative inline-block">
                <span className="relative z-10">
                  상담은 <span className="text-gradient-gold">가능합니다</span>
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 360 14"
                  preserveAspectRatio="none"
                  className="absolute inset-x-0 -bottom-1.5 z-0 h-3 w-full text-gold-400"
                >
                  <path
                    d="M2 9 C 60 1 130 14 200 6 C 270 -1 330 11 358 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    className="draw-path"
                  />
                </svg>
              </span>
            </h1>

            <p className="reveal delay-2 mt-8 max-w-[480px] text-[15px] leading-[1.85] text-ink-700 sm:mt-10 sm:text-[16px]">
              간편한 정보 입력으로 당신의 상황에 맞는 맞춤형 대출 상담을 받아보세요.
              빠르고, 간단하고, 투명합니다.
            </p>

            <div className="reveal delay-3 mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5">
              <a href="#apply" className="btn-luxe">
                <span>지금 상담받기</span>
                <span className="btn-arrow">→</span>
              </a>
              <a
                href="#info"
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-ink-700 transition hover:text-ink-900"
              >
                대출 정보 살펴보기
                <span className="text-gold-500">↓</span>
              </a>
            </div>

            {/* Trust grid — 4 columns, equal weight */}
            <div className="reveal delay-4 mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[rgba(10,16,32,0.08)] pt-7 sm:mt-16 sm:gap-x-8 sm:gap-y-6 sm:pt-8 sm:grid-cols-4">
              <Stat label="상담 비용" value="무료" sub="100% 무료 상담" />
              <Stat label="신용점수" value="영향 없음" sub="조회 영향 X" />
              <Stat label="이자율" value="연 20% 이내" sub="법정 한도 준수" />
              <Stat label="개인정보" value="즉시 파기" sub="상담 직후" />
            </div>
          </div>

          {/* Visual column — single, more substantial card */}
          <div className="reveal delay-2 lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-br from-gold-100/55 via-transparent to-transparent blur-2xl" />
              <article className="relative overflow-hidden rounded-3xl border border-[rgba(10,16,32,0.08)] bg-white shadow-card">
                {/* Card header bar */}
                <header className="flex items-center justify-between border-b border-[rgba(10,16,32,0.06)] bg-[#fbfaf5] px-8 py-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-ink-700/70">
                    Loan Summary
                  </p>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/60 bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-gold-600">
                    <span className="h-1 w-1 rounded-full bg-gold-500" />
                    Verified
                  </span>
                </header>

                <div className="px-6 pt-8 sm:px-8 sm:pt-10">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-ink-700/70">
                    대부이자율 — 연
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-serif text-[68px] font-medium leading-none tracking-tightest text-gradient-gold sm:text-[88px]">
                      20
                    </span>
                    <span className="font-serif text-[24px] text-ink-700 sm:text-[28px]">%</span>
                    <span className="ml-2 text-[12px] text-ink-700/70">
                      이내
                    </span>
                  </div>

                  <div className="mt-6">
                    <Ornament className="w-full" />
                  </div>
                </div>

                {/* 4 detail rows */}
                <div className="grid grid-cols-2 gap-x-3 px-6 pt-6 pb-2 sm:px-8">
                  <Detail label="연체이자율" value="정상이율 + 3%p" />
                  <Detail label="상담 방식" value="전문가 1:1" />
                  <Detail label="처리 절차" value="간편 정보 입력" border />
                  <Detail label="개인정보" value="상담 후 즉시 파기" border />
                </div>

                {/* Footer compliance */}
                <div className="mx-6 my-5 flex items-center justify-between rounded-2xl bg-ink-950 px-5 py-4 text-white sm:mx-8 sm:my-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold-300">
                      Compliance
                    </p>
                    <p className="mt-1 text-[13px] font-medium">
                      대부업법 등록 정식 운영
                    </p>
                  </div>
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden
                    className="h-9 w-9 text-gold-300"
                  >
                    <path
                      d="M16 2 L28 7 L28 17 C28 23 22 28 16 30 C10 28 4 23 4 17 L4 7 Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M11 16 L14.5 19.5 L21 12.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div>
      <p className="text-[10.5px] uppercase tracking-[0.18em] text-ink-700/65">
        {label}
      </p>
      <p className="mt-1.5 font-serif text-[20px] font-medium leading-none tracking-tightest text-ink-900">
        {value}
      </p>
      {sub && (
        <p className="mt-1.5 text-[11.5px] text-ink-700/65">{sub}</p>
      )}
    </div>
  );
}

function Detail({
  label,
  value,
  border = false,
}: {
  label: string;
  value: string;
  border?: boolean;
}) {
  return (
    <div
      className={`px-1 py-4 ${border ? "border-t border-[rgba(10,16,32,0.06)]" : ""}`}
    >
      <p className="text-[10.5px] uppercase tracking-[0.16em] text-ink-700/65">
        {label}
      </p>
      <p className="mt-1.5 text-[13.5px] font-medium text-ink-900">{value}</p>
    </div>
  );
}
