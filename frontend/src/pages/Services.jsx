import React from 'react';
import { WhatWeBuild } from '../components/sections/WhatWeBuild';
import { CtaBand } from '../components/sections/CtaBand';

export const Services = () => {
  return (
    <div className="services-page">
      {/* 1. Hero & 8-Card Grid Section (Image 1) */}
      <section className="svp pt-[clamp(92px,12vh,124px)] pb-[clamp(24px,4vh,44px)] min-h-[100svh] flex flex-col">
        <div className="w max-w-[1200px] margin-auto w-full flex-1 flex flex-col px-[var(--pad)]">
          <p className="ey">Services / 01–07</p>
          <h1 className="text-[clamp(44px,7.5vw,108px)] font-[700] leading-[1.02] m-0 text-[#f2f0ea] font-[var(--d)]">
            Systems for what’s next.
          </h1>

          <div className="flex-1 mt-6">
            <WhatWeBuild />
          </div>
        </div>
      </section>

      {/* 2. Section: One Connected Engagement (Image 2) */}
      <section className="svp2 py-16 bg-[#0a0a0a] border-t border-[#2a2a28]">
        <div className="w max-w-[1200px] margin-auto px-[var(--pad)]">
          <p className="ey">One connected engagement</p>
          <h2 className="text-[clamp(38px,6vw,76px)] font-[700] text-[#f2f0ea] leading-[1.05] max-w-[640px] font-[var(--d)] mb-10">
            Not seven silos. One system.
          </h2>

          <ol className="stp4 list-none p-0 mt-[clamp(32px,5vh,56px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <li className="relative border-t border-[#2a2a28] pt-5 hover:border-[#f2f0ea] transition-colors duration-300">
              <small className="block font-[500] text-[12px] font-[var(--d)] tracking-[0.08em] text-[#9a968a] mb-6">
                01
              </small>
              <h3 className="font-[700] text-[clamp(22px,2.2vw,28px)] font-[var(--d)] tracking-[-0.02em] mb-2 text-[#f2f0ea]">
                Discover
              </h3>
              <p className="text-[15px] text-[#9a968a] leading-[1.6] max-w-[22ch]">
                Define the problem and the goal.
              </p>
            </li>

            <li className="relative border-t border-[#2a2a28] pt-5 hover:border-[#f2f0ea] transition-colors duration-300">
              <small className="block font-[500] text-[12px] font-[var(--d)] tracking-[0.08em] text-[#9a968a] mb-6">
                02
              </small>
              <h3 className="font-[700] text-[clamp(22px,2.2vw,28px)] font-[var(--d)] tracking-[-0.02em] mb-2 text-[#f2f0ea]">
                Shape
              </h3>
              <p className="text-[15px] text-[#9a968a] leading-[1.6] max-w-[22ch]">
                Map the scope and architecture.
              </p>
            </li>

            <li className="relative border-t border-[#2a2a28] pt-5 hover:border-[#f2f0ea] transition-colors duration-300">
              <small className="block font-[500] text-[12px] font-[var(--d)] tracking-[0.08em] text-[#9a968a] mb-6">
                03
              </small>
              <h3 className="font-[700] text-[clamp(22px,2.2vw,28px)] font-[var(--d)] tracking-[-0.02em] mb-2 text-[#f2f0ea]">
                Deliver
              </h3>
              <p className="text-[15px] text-[#9a968a] leading-[1.6] max-w-[22ch]">
                Build, integrate and test.
              </p>
            </li>

            <li className="relative border-t border-[#2a2a28] pt-5 hover:border-[#f2f0ea] transition-colors duration-300 flex flex-col justify-between">
              <div>
                <small className="block font-[500] text-[12px] font-[var(--d)] tracking-[0.08em] text-[#9a968a] mb-6">
                  04
                </small>
                <h3 className="font-[700] text-[clamp(22px,2.2vw,28px)] font-[var(--d)] tracking-[-0.02em] mb-2 text-[#f2f0ea]">
                  Improve
                </h3>
                <p className="text-[15px] text-[#9a968a] leading-[1.6] max-w-[22ch]">
                  Learn from use and refine.
                </p>
              </div>
              <span className="w-3.5 h-3.5 rounded-full bg-white self-end shadow-[0_0_14px_#fff] mt-4" />
            </li>
          </ol>
        </div>
      </section>

      {/* 3. White Closing CTA Band (Image 3) */}
      <CtaBand />
    </div>
  );
};
