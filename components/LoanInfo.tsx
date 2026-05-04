import { IconLock, IconScale, IconAdvisor } from "./Brand";

export default function LoanInfo() {
  return (
    <section
      id="info"
      className="relative isolate overflow-hidden bg-ink-950 py-20 text-white sm:py-28 lg:py-32"
    >
      {/* Subtle gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(900px 500px at 100% 0%, rgba(217,187,107,0.16), transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        {/* Section header — symmetrical */}
        <div className="grid gap-8 border-b border-white/10 pb-10 sm:gap-10 sm:pb-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker !text-gold-300">
              <span className="text-gold-300">03</span> Loan Information
            </p>
            <h2 className="mt-4 font-serif text-[28px] font-medium leading-[1.15] tracking-tightest sm:text-[36px] lg:text-[48px]">
              신용대출 정보
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.85] text-white/70 sm:text-[14.5px]">
              저신용 소액대출에 대한 상세 정보를 안내해드립니다. 금융감독 당국의
              엄격한 기준을 준수하며, 모든 거래는 투명하고 안전하게 처리됩니다.
            </p>
          </div>
        </div>

        {/* Info blocks - 12 col grid: 4/4/4 */}
        <div className="grid gap-x-10 gap-y-10 pt-12 sm:gap-y-12 sm:pt-16 lg:grid-cols-3">
          <Block
            kicker="Service"
            title="서비스 소개"
            body="신용점수가 낮은 고객을 위한 믿을 수 있는 대출 상담 서비스를 제공합니다. 저신용 상태에서도 개인의 상황에 맞는 최적의 상담을 받을 수 있습니다."
          />
          <Block
            kicker="Compliance"
            title="법규 준수"
            body="「대부업 등의 등록 및 금융이용자 보호에 관한 법률」에 따라 등록되어 운영되고 있습니다. 금융감독 당국의 엄격한 기준을 준수합니다."
          />
          <Block
            kicker="Privacy"
            title="개인정보 처리"
            body="입력하신 개인정보는 상담 진행을 위해서만 사용되며, 상담 종료 즉시 안전하게 파기됩니다."
          />
        </div>

        {/* Hero stat row — Terms summary */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-16 sm:grid-cols-3">
          <Stat label="대부이자율" value="20%" sub="연 20% 이내" />
          <Stat label="연체이자율" value="+3%p" sub="정상이율 + 최대 3%" />
          <Stat label="등록번호" value="2023" sub="2023-광주광산-0014" mono />
        </div>

        {/* Pillars */}
        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-3">
          <Pillar
            title="안전한 거래"
            body="개인정보 암호화 및 보안 체계를 통한 안전한 정보 관리"
            Icon={IconLock}
          />
          <Pillar
            title="투명한 금리"
            body="숨은 수수료 없는 명확한 금리 체계"
            Icon={IconScale}
          />
          <Pillar
            title="전문가 상담"
            body="경험 많은 금융 전문가의 맞춤형 상담"
            Icon={IconAdvisor}
          />
        </div>
      </div>
    </section>
  );
}

function Block({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold-300">
        {kicker}
      </p>
      <h3 className="mt-3 font-serif text-[22px] font-medium tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-4 text-[13.5px] leading-[1.85] text-white/70">{body}</p>
    </div>
  );
}

function Stat({
  label,
  value,
  sub,
  mono = false,
}: {
  label: string;
  value: string;
  sub: string;
  mono?: boolean;
}) {
  return (
    <div className="bg-ink-950 p-7 sm:p-8">
      <p className="text-[10.5px] uppercase tracking-[0.22em] text-white/50">
        {label}
      </p>
      <div className="mt-3 flex items-baseline gap-2">
        <span
          className={
            mono
              ? "font-serif text-[34px] font-medium tracking-tight text-white"
              : "font-serif text-[44px] font-medium leading-none tracking-tightest text-gradient-gold"
          }
        >
          {value}
        </span>
      </div>
      <p className="mt-3 text-[12.5px] text-white/55">{sub}</p>
    </div>
  );
}

function Pillar({
  title,
  body,
  Icon,
}: {
  title: string;
  body: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-gold-300/40 hover:bg-white/[0.04]">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-gold-300">
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <h4 className="text-[14.5px] font-semibold tracking-tight text-white">
          {title}
        </h4>
      </div>
      <p className="mt-3.5 text-[13px] leading-[1.75] text-white/65">{body}</p>
    </div>
  );
}
