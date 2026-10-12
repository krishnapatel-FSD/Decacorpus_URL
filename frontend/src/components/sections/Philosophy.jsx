import React from 'react';

export const Philosophy = () => {
  return (
    <section className="sec" id="phil">
      <div className="w max-w-[1200px] margin-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[clamp(32px,5vw,80px)] items-center">
          {/* Left Column */}
          <div>
            <p className="ey">04 / Our philosophy</p>
            <h2 className="tm font-[700] text-[clamp(40px,min(6vw,10.5vh),84px)] leading-none mb-6 text-white">
              Technology should feel <em className="sf italic font-[400] text-[#f2f0ea]">simple.</em>
            </h2>
            <p className="ph text-[clamp(20px,min(2.2vw,3.4vh),28px)] text-[#f2f0ea] font-[600] leading-[1.25] mb-4">
              Behind every interface is a system. <span className="text-[#9a968a]">Behind every system is a business. We design both.</span>
            </p>
            <p className="phs text-[#9a968a] text-[16px] leading-[1.65] mb-8 max-w-[46ch]">
              DecaCorpus is a digital technology studio focused on engineering complex systems with premium design execution.
            </p>
            <a href="#/studio" className="b g">
              Meet the studio
            </a>
          </div>

          {/* Right Column: 3-Tier System Card */}
          <div className="bx grid gap-0 mt-6 lg:mt-0 max-w-[480px] w-full border border-[#2a2a28] rounded-[16px] overflow-hidden bg-[#121212]">
            <div className="grid grid-cols-[46px_1fr] gap-x-3 gap-y-1 items-center p-6 border-b border-[#2a2a28] hover:bg-[#1a1a19] hover:pl-8 transition-all duration-300">
              <b className="row-span-2 font-[500] text-[12px] tracking-[0.08em] text-[#9a968a]">01</b>
              <i className="font-[600] text-[clamp(20px,2vw,24px)] font-[var(--d)] not-italic text-[#f2f0ea]">Business</i>
              <em className="not-italic text-[14px] text-[#9a968a]">Goals, logic and growth</em>
            </div>

            <div className="grid grid-cols-[46px_1fr] gap-x-3 gap-y-1 items-center p-6 border-b border-[#2a2a28] hover:bg-[#1a1a19] hover:pl-8 transition-all duration-300">
              <b className="row-span-2 font-[500] text-[12px] tracking-[0.08em] text-[#9a968a]">02</b>
              <i className="font-[600] text-[clamp(20px,2vw,24px)] font-[var(--d)] not-italic text-[#f2f0ea]">System</i>
              <em className="not-italic text-[14px] text-[#9a968a]">Architecture, data and scale</em>
            </div>

            <div className="grid grid-cols-[46px_1fr_auto] gap-x-3 gap-y-1 items-center p-6 hover:bg-[#1a1a19] hover:pl-8 transition-all duration-300">
              <b className="row-span-2 font-[500] text-[12px] tracking-[0.08em] text-[#9a968a]">03</b>
              <i className="font-[600] text-[clamp(20px,2vw,24px)] font-[var(--d)] not-italic text-[#f2f0ea]">Interface</i>
              <em className="not-italic text-[14px] text-[#9a968a] col-start-2">Experience and design</em>
              <span className="w-3 h-3 rounded-full bg-white row-span-2 shadow-[0_0_12px_#fff]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
