import React from 'react';

export const CtaBand = () => {
  return (
    <section className="sec cta2 lm bg-[#ffffff] text-[#0a0a0a] relative z-[1] py-[clamp(48px,8vw,96px)] px-[var(--pad)]">
      <div className="w max-w-[1200px] xl:max-w-[1160px] margin-auto">
        <p className="ey flex items-center gap-2 text-[12px] tracking-[0.08em] uppercase text-[#4b4a44] font-[var(--b)] mb-4">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0a0a0a]"></span>
          LET'S BUILD WHAT'S NEXT
        </p>
        <h2 className="text-[clamp(38px,6.5vw,84px)] font-[700] text-[#0a0a0a] my-4 mb-8 leading-[1.05] tracking-[-0.03em] font-[var(--d)] max-w-[22ch]">
          Have something to build?<br />
          Let’s make it real.
        </h2>
        <div className="cr flex gap-6 items-center flex-wrap">
          <a
            className="b group !bg-[#0a0a0a] !text-[#ffffff] px-7 py-3.5 text-[15px] rounded-full inline-flex items-center gap-2 font-medium font-[var(--b)] text-decoration-none hover:bg-[#1a1a1a] transition-all duration-300"
            href="#/contact"
          >

            <span>Start a Project</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            className="ml text-[clamp(18px,2vw,22px)] text-[#0a0a0a] text-decoration-none border-b border-[#0a0a0a] hover:opacity-60 transition-opacity duration-200 font-[500] font-[var(--b)]"
            href="mailto:hello@decacorpus.com"
          >
            hello@decacorpus.com
          </a>
        </div>
      </div>
    </section>
  );
};

