import { IconPen, IconAdvisor, IconTarget, IconShield } from "./Brand";

const steps = [
  {
    no: "01",
    title: "정보 입력",
    body: "이름·연락처·나이·직장 등 기본 정보를 입력합니다. 30초면 충분합니다.",
    Icon: IconPen,
  },
  {
    no: "02",
    title: "전문가 상담",
    body: "경험 많은 금융 전문가가 1:1로 상황을 면밀히 검토합니다.",
    Icon: IconAdvisor,
  },
  {
    no: "03",
    title: "조건 안내",
    body: "신용점수 영향 없이 개인에게 맞는 조건을 안내받습니다.",
    Icon: IconTarget,
  },
  {
    no: "04",
    title: "진행 결정",
    body: "조건을 검토 후, 자유롭게 진행 여부를 결정하시면 됩니다.",
    Icon: IconShield,
  },
];

export default function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f3f1ea] py-20 sm:py-28 lg:py-32">
      {/* Decorative accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(800px 420px at 100% 0%, rgba(217,187,107,0.18), transparent 55%), radial-gradient(600px 380px at 0% 100%, rgba(10,16,32,0.04), transparent 55%)",
        }}
      />
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-5 sm:mb-16 sm:gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="kicker">
              <span>02</span> Process
            </p>
            <h2 className="mt-4 font-serif text-[28px] font-medium leading-[1.15] tracking-tightest text-ink-900 sm:text-[36px] lg:text-[44px]">
              네 단계로 끝나는 상담
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-[1.85] text-ink-700">
            처음부터 끝까지 평균 5분 이내. 복잡한 서류 없이 핵심 정보만으로 진행합니다.
          </p>
        </div>

        {/* Steps with connector */}
        <div className="relative">
          {/* Horizontal connector line - desktop */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[56px] hidden h-px lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 1000 2"
          >
            <line
              x1="120"
              y1="1"
              x2="880"
              y2="1"
              stroke="rgba(10,16,32,0.18)"
              strokeWidth="1"
              strokeDasharray="3 6"
            />
          </svg>

          <ol className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li
                key={s.no}
                className="group relative flex flex-col rounded-2xl border border-[rgba(10,16,32,0.08)] bg-white/80 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-ink-900/25 hover:bg-white hover:shadow-card sm:p-7"
              >
                {/* Top row: number + icon */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[14px] font-medium tracking-[0.2em] text-gold-500">
                    STEP {s.no}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-950 text-gold-300 transition group-hover:bg-gradient-to-br group-hover:from-ink-900 group-hover:to-[#1a2240]">
                    <s.Icon className="h-5 w-5" />
                  </span>
                </div>

                {/* Mini progress bar */}
                <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-ink-900/10">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600"
                    style={{ width: `${((i + 1) / steps.length) * 100}%` }}
                  />
                </div>

                <h3 className="mt-6 font-serif text-[19px] font-medium tracking-tight text-ink-900 sm:text-[21px]">
                  {s.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[13px] leading-[1.8] text-ink-700 sm:text-[13.5px]">
                  {s.body}
                </p>

                {/* Bottom hint */}
                <div className="mt-5 flex items-center gap-2 border-t border-[rgba(10,16,32,0.06)] pt-4 text-[11.5px] uppercase tracking-[0.16em] text-ink-700/60">
                  <span className="h-1 w-1 rounded-full bg-gold-500" />
                  {i === 0 && "30초 입력"}
                  {i === 1 && "1:1 전화"}
                  {i === 2 && "조건 안내"}
                  {i === 3 && "선택은 자유"}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
