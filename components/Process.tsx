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
    <section className="relative bg-[#f3f1ea] py-20 sm:py-28 lg:py-32">
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

          <ol className="grid gap-9 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((s) => (
              <li key={s.no} className="relative">
                {/* Big circle with icon */}
                <div className="relative inline-flex">
                  <div className="relative grid h-[96px] w-[96px] place-items-center rounded-full border border-[rgba(10,16,32,0.18)] bg-[#f3f1ea] sm:h-[112px] sm:w-[112px]">
                    <s.Icon className="h-7 w-7 text-ink-900 sm:h-8 sm:w-8" />
                  </div>
                  <span className="absolute -top-1 -right-1 grid h-9 w-9 place-items-center rounded-full bg-ink-900 font-serif text-[13px] font-medium tracking-tight text-gold-300 shadow-card">
                    {s.no}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-[20px] font-medium tracking-tight text-ink-900 sm:mt-7 sm:text-[22px]">
                  {s.title}
                </h3>
                <p className="mt-2.5 max-w-[280px] text-[13px] leading-[1.8] text-ink-700 sm:mt-3 sm:text-[13.5px]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
