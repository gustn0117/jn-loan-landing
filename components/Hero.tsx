import { Ornament } from "./Brand";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-28"
    >
      {/* Soft radial gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 85% -10%, rgba(217,187,107,0.14), transparent 55%), radial-gradient(700px 400px at 0% 20%, rgba(10,16,32,0.05), transparent 55%)",
        }}
      />
      {/* Faint grid mask only behind text column */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-1/2 opacity-30 lg:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,16,32,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,16,32,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to right, black 30%, transparent 95%)",
        }}
      />

      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        {/* Top hairline meta row */}
        <div className="reveal mb-12 flex items-center justify-between border-b border-[rgba(10,16,32,0.08)] pb-4 text-[11px] uppercase tracking-[0.22em] text-ink-700/65">
          <span className="flex items-center gap-2">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-gold-500" />
            JN Loan · Consultation
          </span>
          <span className="hidden sm:inline">Reg. 2023-광주광산-0014</span>
          <span>Est. 2023</span>
        </div>

        <div className="grid gap-x-12 gap-y-16 lg:grid-cols-12">
          {/* Headline column */}
          <div className="lg:col-span-7">
            <h1 className="reveal delay-1 font-serif text-[40px] font-medium leading-[1.1] tracking-tightest text-ink-900 sm:text-[52px] lg:text-[60px]">
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

            <p className="reveal delay-2 mt-10 max-w-[480px] text-[16px] leading-[1.85] text-ink-700">
              간편한 정보 입력으로 당신의 상황에 맞는 맞춤형 대출 상담을 받아보세요.
              빠르고, 간단하고, 투명합니다.
            </p>

            <div className="reveal delay-3 mt-10 flex flex-wrap items-center gap-5">
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
            <div className="reveal delay-4 mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[rgba(10,16,32,0.08)] pt-8 sm:grid-cols-4">
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

                <div className="px-8 pt-10">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-ink-700/70">
                    대부이자율 — 연
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-serif text-[88px] font-medium leading-none tracking-tightest text-gradient-gold">
                      20
                    </span>
                    <span className="font-serif text-[28px] text-ink-700">%</span>
                    <span className="ml-2 text-[12px] text-ink-700/70">
                      이내
                    </span>
                  </div>

                  <div className="mt-6">
                    <Ornament className="w-full" />
                  </div>
                </div>

                {/* 4 detail rows */}
                <div className="grid grid-cols-2 px-8 pt-6 pb-2">
                  <Detail label="연체이자율" value="정상이율 + 3%p" />
                  <Detail label="상담 방식" value="전문가 1:1" />
                  <Detail label="처리 절차" value="간편 정보 입력" border />
                  <Detail label="개인정보" value="상담 후 즉시 파기" border />
                </div>

                {/* Footer compliance */}
                <div className="mx-8 my-6 flex items-center justify-between rounded-2xl bg-ink-950 px-5 py-4 text-white">
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
