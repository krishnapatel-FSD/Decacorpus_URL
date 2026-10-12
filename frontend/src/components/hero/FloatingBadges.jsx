import React from 'react';

export const FloatingBadges = () => {
  return (
    <>
      {/* 1. Systems, not silos. speech bubble badge */}
      <div
        className="hidden lg:flex items-center justify-center absolute z-[12] font-[var(--b)] font-[600] text-[15px] bg-[#f2f0ea] text-[#0a0a0a] rounded-full px-5 py-2.5 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.8)] -rotate-[5deg] pointer-events-auto hover:scale-105 transition-transform duration-300"
        style={{ right: '27%', top: '33%' }}
      >
        Systems, not silos.
      </div>

      {/* 2. Top-right circular arrow button */}
      <a
        href="#/contact"
        className="hidden lg:flex items-center justify-center absolute z-[12] w-[56px] h-[56px] bg-[#f2f0ea] text-[#0a0a0a] rounded-full text-[20px] font-[600] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.8)] pointer-events-auto hover:scale-110 transition-transform duration-300"
        style={{ right: '6%', top: '19%' }}
        aria-label="Start a project"
      >
        ↗
      </a>

      {/* 3. Tech Pill 1: AI */}
      <span
        className="hidden lg:inline-flex items-center justify-center absolute z-[12] font-[var(--b)] font-[500] text-[13px] bg-[#141413] border border-[#3a3a37] text-[#c9c6bd] rounded-full px-3.5 py-1.5 hover:border-[#f2f0ea] hover:text-white transition-colors duration-200"
        style={{ right: '36%', top: '24%' }}
      >
        AI
      </span>

      {/* 4. Tech Pill 2: Web */}
      <span
        className="hidden lg:inline-flex items-center justify-center absolute z-[12] font-[var(--b)] font-[500] text-[13px] bg-[#141413] border border-[#3a3a37] text-[#c9c6bd] rounded-full px-3.5 py-1.5 hover:border-[#f2f0ea] hover:text-white transition-colors duration-200"
        style={{ right: '5.5%', top: '35%' }}
      >
        Web
      </span>

      {/* 5. Tech Pill 3: SaaS */}
      <span
        className="hidden lg:inline-flex items-center justify-center absolute z-[12] font-[var(--b)] font-[500] text-[13px] bg-[#141413] border border-[#3a3a37] text-[#c9c6bd] rounded-full px-3.5 py-1.5 hover:border-[#f2f0ea] hover:text-white transition-colors duration-200"
        style={{ right: '2%', top: '51%' }}
      >
        SaaS
      </span>
    </>
  );
};
