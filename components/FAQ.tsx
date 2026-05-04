"use client";

import { useState } from "react";

const items = [
  {
    q: "신용점수가 낮아도 상담받을 수 있나요?",
    a: "네, 가능합니다. 다양한 신용 상황을 고려해 상담을 진행하며, 상담 자체는 신용점수에 영향을 주지 않습니다.",
  },
  {
    q: "상담 비용이 발생하나요?",
    a: "상담은 전 과정 100% 무료입니다. 상담 후 조건을 검토하고 진행 여부를 자유롭게 결정하시면 됩니다.",
  },
  {
    q: "이자율은 어떻게 되나요?",
    a: "법정 한도 내(연 20% 이내)로 운영되며, 연체 시에도 정상이율 + 최대 3%p 이내로 적용됩니다.",
  },
  {
    q: "상담 후 진행하지 않아도 되나요?",
    a: "네, 강요 없습니다. 상담을 통해 안내받은 조건을 검토 후, 본인이 결정하시면 됩니다.",
  },
  {
    q: "입력한 개인정보는 어떻게 처리되나요?",
    a: "상담 진행에 필요한 범위에서만 사용되며, 상담 종료 후 즉시 안전하게 파기됩니다.",
  },
  {
    q: "상담은 얼마나 걸리나요?",
    a: "정보 입력 30초, 전문가 상담은 평균 5분 이내로 진행됩니다.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-[#f3f1ea] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <div className="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <p className="kicker">
              <span>06</span> FAQ
            </p>
            <h2 className="mt-4 font-serif text-[28px] font-medium leading-[1.15] tracking-tightest text-ink-900 sm:text-[36px] lg:text-[44px]">
              자주 묻는 질문
            </h2>
          </div>
          <p className="text-[14px] leading-[1.85] text-ink-700 lg:col-span-5">
            상담 전 자주 받는 질문들을 정리했습니다. 추가로 궁금한 점은 신청
            시 자유롭게 물어보실 수 있습니다.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[rgba(10,16,32,0.08)] bg-white">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={i > 0 ? "border-t border-[rgba(10,16,32,0.06)]" : ""}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-[#fbfaf5] sm:px-7 sm:py-6"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-3 sm:gap-4">
                    <span className="font-serif text-[13px] tracking-wider text-gold-500 sm:text-[14px]">
                      Q{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14.5px] font-medium leading-[1.5] text-ink-900 sm:text-[15.5px]">
                      {it.q}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 text-[18px] text-ink-700/60 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 pl-12 text-[13.5px] leading-[1.85] text-ink-700 sm:px-7 sm:pb-7 sm:pl-[68px] sm:text-[14px]">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
