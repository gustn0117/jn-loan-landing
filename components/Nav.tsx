"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(250,250,247,0.78)] border-b border-[rgba(10,16,32,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <a
          href="#top"
          className="text-[15px] font-semibold tracking-tight text-ink-900 sm:text-[16px]"
        >
          제이앤대부{" "}
          <span className="text-gradient-gold font-bold">소액대출</span>
        </a>

        <nav className="hidden items-center gap-8 text-[13.5px] text-ink-700 md:flex">
          <a href="#features" className="transition hover:text-ink-900">
            서비스
          </a>
          <a href="#info" className="transition hover:text-ink-900">
            대출 정보
          </a>
          <a href="#apply" className="transition hover:text-ink-900">
            신청하기
          </a>
        </nav>

        <a href="#apply" className="btn-luxe btn-luxe-sm">
          <span>상담 신청</span>
          <span className="btn-arrow">→</span>
        </a>
      </div>
    </header>
  );
}
