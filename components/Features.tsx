import { IconPen, IconTarget, IconFree, IconShield } from "./Brand";

const items = [
  {
    no: "01",
    title: "간편 정보 입력 후 상담 진행",
    body: "복잡한 절차 없이 기본 정보만 입력하면 전문가 상담을 시작합니다.",
    Icon: IconPen,
  },
  {
    no: "02",
    title: "개인 상황에 맞는 조건 안내",
    body: "상담을 통해 다양한 신용 상황에 적합한 조건을 확인할 수 있습니다.",
    Icon: IconTarget,
  },
  {
    no: "03",
    title: "상담은 무료로 제공",
    body: "모든 상담은 무료입니다. 상담 후 진행 여부는 자유롭게 결정하세요.",
    Icon: IconFree,
  },
  {
    no: "04",
    title: "신용점수 영향 없음",
    body: "신용점수에 영향이 없는 범위 내에서만 조회를 진행합니다.",
    Icon: IconShield,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-[#fafaf7] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        {/* Section label row */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-14 sm:gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="kicker">
              <span>01</span> Why Us
            </p>
            <h2 className="mt-4 font-serif text-[28px] font-medium leading-[1.15] tracking-tightest text-ink-900 sm:text-[36px] lg:text-[44px]">
              왜 저희를 선택하나요?
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-[1.85] text-ink-700 sm:mt-5 sm:text-[15px]">
              투명하고 신뢰할 수 있는 대출 상담 서비스. 고객의 상황을 최우선으로
              고려하는 정직한 절차를 약속합니다.
            </p>
          </div>
          <p className="text-[12px] text-ink-700/70 sm:text-[12.5px]">
            신뢰 · 투명 · 신속
          </p>
        </div>

        {/* Feature grid - 4 equal cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <FeatureCard key={it.no} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  no,
  title,
  body,
  Icon,
}: {
  no: string;
  title: string;
  body: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(10,16,32,0.08)] bg-white p-6 transition hover:border-ink-900/30 hover:shadow-card sm:p-7">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f7f4ea] text-ink-900 transition group-hover:bg-ink-950 group-hover:text-gold-300">
        <Icon className="h-6 w-6" />
      </div>

      {/* Title + body */}
      <h3 className="mt-7 text-[16px] font-semibold leading-[1.45] tracking-tight text-ink-900">
        {title}
      </h3>
      <p className="mt-2.5 flex-1 text-[13.5px] leading-[1.75] text-ink-700">
        {body}
      </p>

      {/* Bottom row: number + arrow */}
      <div className="mt-8 flex items-center justify-between border-t border-[rgba(10,16,32,0.06)] pt-4">
        <span className="font-serif text-[13px] tracking-[0.18em] text-gold-500">
          {no}
        </span>
        <span className="text-[14px] text-ink-700/50 transition group-hover:translate-x-0.5 group-hover:text-ink-900">
          →
        </span>
      </div>
    </article>
  );
}
