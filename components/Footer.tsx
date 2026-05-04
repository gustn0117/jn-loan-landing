"use client";

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 pt-16 pb-8 text-white/80 sm:pt-20 sm:pb-10">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[18px] font-semibold tracking-tight text-white sm:text-[20px]">
              제이앤대부{" "}
              <span className="text-gold-300 font-bold">소액대출</span>
            </p>
            <p className="mt-6 max-w-md text-[13.5px] leading-[1.85] text-white/60">
              신용점수가 낮은 고객을 위한 믿을 수 있는 대출 상담 서비스. 투명하고
              안전한 절차로 고객의 상황에 맞는 최적의 상담을 제공합니다.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold-300">
              대출 정보
            </p>
            <ul className="mt-5 space-y-3 text-[13.5px] text-white/70">
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-white/55">대부이자율</span>
                <span className="text-white">연 20% 이내</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-white/55">연체이자율</span>
                <span className="text-white">정상이율 + 3%</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold-300">
              고객 지원
            </p>
            <ul className="mt-5 space-y-3 text-[13.5px] text-white/70">
              <li>
                <a href="#apply" className="transition hover:text-white">
                  상담 신청
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="transition hover:text-white"
                >
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-14 sm:pt-8">
          <div className="flex flex-col gap-4 text-[12px] text-white/55 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p>
                사업자명: (주)제이엔대부중개정당 · 등록번호: 2023-광주광산-0014 ·
                사업자등록번호: 564-88-02984
              </p>
              <p className="text-white/45">
                본 서비스는 「대부업 등의 등록 및 금융이용자 보호에 관한 법률」에
                따라 등록되어 운영되고 있습니다.
              </p>
            </div>
            <p className="shrink-0 text-white/40">
              © 2024 제이엔대부중개정당. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
