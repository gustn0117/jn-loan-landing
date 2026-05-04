export default function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fafaf7] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-[rgba(10,16,32,0.08)] bg-ink-950 p-8 shadow-card sm:p-12 lg:p-16">
          {/* Layered backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(900px 460px at 100% 0%, rgba(217,187,107,0.32), transparent 55%), radial-gradient(700px 380px at 0% 100%, rgba(181,138,51,0.2), transparent 55%)",
            }}
          />
          {/* Gold orb */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(217,187,107,0.55) 0%, rgba(217,187,107,0) 70%)",
            }}
          />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-8">
              <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold-300">
                Ready to Start
              </p>
              <h2 className="mt-4 font-serif text-[28px] font-medium leading-[1.18] tracking-tightest text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">
                지금 바로 무료 상담을
                <br className="hidden sm:block" />{" "}
                <span className="text-gradient-gold">시작해보세요</span>
              </h2>
              <p className="mt-5 max-w-xl text-[14px] leading-[1.85] text-white/65 sm:mt-6 sm:text-[15px]">
                정보 입력 30초, 전문가 상담 5분. 신용점수에 영향 없이 가능한
                조건만 정확하게 안내해드립니다. 진행 여부는 본인의 자유로운
                선택입니다.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5">
                <a href="#apply" className="btn-luxe">
                  <span>무료 상담 신청</span>
                  <span className="btn-arrow">→</span>
                </a>
                <a
                  href="#info"
                  className="inline-flex items-center gap-2 text-[13.5px] font-medium text-white/75 transition hover:text-white"
                >
                  자세한 대출 정보
                  <span className="text-gold-300">↗</span>
                </a>
              </div>
            </div>

            {/* Right column — feature pills */}
            <div className="lg:col-span-4">
              <ul className="space-y-3">
                <Pill text="신용점수 영향 없음" />
                <Pill text="100% 무료 상담" />
                <Pill text="개인정보 즉시 파기" />
                <Pill text="전문가 1:1 안내" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur transition hover:border-gold-300/40 hover:bg-white/[0.08]">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold-300/40 bg-gold-300/10">
        <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
          <path
            d="M3.5 8.5 L6.5 11.5 L12.5 4.5"
            stroke="rgb(217, 187, 107)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-[13.5px] font-medium text-white/90">{text}</span>
    </li>
  );
}
