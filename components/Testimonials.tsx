const items = [
  {
    name: "김 ○ ○ 님",
    region: "광주 광산구",
    quote:
      "다른 곳에서는 거절당했는데, 여기서는 차분하게 제 상황을 들어주셨어요. 결과적으로 가능한 조건을 안내받아 큰 도움이 됐습니다.",
    tag: "신용점수 낮음",
  },
  {
    name: "박 ○ ○ 님",
    region: "전남 화순",
    quote:
      "전화로 한참 설명만 듣다가 끊는 곳이 많아서 지쳤었는데, 1:1로 정확하게 안내해주셔서 안심됐습니다.",
    tag: "프리랜서",
  },
  {
    name: "이 ○ ○ 님",
    region: "광주 북구",
    quote:
      "상담만 받고 안 해도 된다고 미리 말씀해주셔서 부담 없이 진행했어요. 강요 없는 절차가 가장 좋았습니다.",
    tag: "직장인",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#fafaf7] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <div className="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <p className="kicker">
              <span>05</span> Voices
            </p>
            <h2 className="mt-4 font-serif text-[28px] font-medium leading-[1.15] tracking-tightest text-ink-900 sm:text-[36px] lg:text-[44px]">
              실제 상담 후기
            </h2>
          </div>
          <p className="text-[14px] leading-[1.85] text-ink-700 lg:col-span-5">
            상담을 받으신 분들이 직접 남긴 이야기입니다. 개인정보 보호를 위해
            성함은 일부 표기로 게시했습니다.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map((it, i) => (
            <article
              key={i}
              className="relative flex h-full flex-col rounded-2xl border border-[rgba(10,16,32,0.08)] bg-white p-6 transition hover:border-ink-900/25 hover:shadow-card sm:p-7"
            >
              <svg
                viewBox="0 0 28 22"
                aria-hidden
                className="h-6 w-6 text-gold-400"
                fill="currentColor"
              >
                <path d="M0 22V13C0 7 3 2 9 0L11 3C7 5 5 8 5 11H10V22H0ZM17 22V13C17 7 20 2 26 0L28 3C24 5 22 8 22 11H27V22H17Z" />
              </svg>
              <p className="mt-4 flex-1 text-[14px] leading-[1.85] text-ink-800 sm:text-[14.5px]">
                {it.quote}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-[rgba(10,16,32,0.06)] pt-4">
                <div>
                  <p className="text-[13.5px] font-medium text-ink-900">
                    {it.name}
                  </p>
                  <p className="mt-0.5 text-[11.5px] text-ink-700/65">
                    {it.region}
                  </p>
                </div>
                <span className="rounded-full border border-gold-300/50 bg-[#fbf7ec] px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-wider text-gold-600">
                  {it.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
