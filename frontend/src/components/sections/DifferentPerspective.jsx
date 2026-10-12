import React from 'react';

export const DifferentPerspective = () => {
  return (
    <section className="sec" id="persp">
      <div className="w max-w-[1200px] margin-auto">
        <div className="two grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-[80px] items-end">
          <div>
            <p className="ey">01 / The bigger picture</p>
            <h2 className="mt-1.5 text-[clamp(34px,min(5vw,8.5vh),68px)]">
              A different perspective.
            </h2>
          </div>
          <p className="text-[var(--mu)] text-[16px] max-w-[48ch]">
            We build software systems that feel effortless to use and resilient under load. A beautiful interface is only the beginning.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="cs grid grid-cols-1 md:grid-cols-3 gap-6 mt-[clamp(24px,3.5vh,40px)]">
          {/* Card 1 */}
          <div className="cd bg-white border border-white rounded-[16px] p-6 flex flex-col justify-between hover:shadow-[0_30px_60px_-30px_#000] transition-all duration-300">
            <div>
              <span className="no text-[#0a0a0a] font-[600] text-[14px] font-[var(--d)]">01</span>
              <h3 className="text-[#0a0a0a] text-[clamp(20px,min(2vw,3.4vh),28px)] my-3">
                Business Software
              </h3>
              <p className="text-[#0a0a0a] opacity-80 text-[14px] leading-[1.65] max-w-none">
                Engineered for high-volume transactions, complex logic and long-term maintainability.
              </p>
            </div>
            <div className="mt text-[12px] uppercase text-[#0a0a0a] opacity-60 mt-6 pt-4 border-t border-[#0a0a0a1a]">
              <span>High availability · Core Workflows</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="cd bg-white border border-white rounded-[16px] p-6 flex flex-col justify-between hover:shadow-[0_30px_60px_-30px_#000] transition-all duration-300">
            <div>
              <span className="no text-[#0a0a0a] font-[600] text-[14px] font-[var(--d)]">02</span>
              <h3 className="text-[#0a0a0a] text-[clamp(20px,min(2vw,3.4vh),28px)] my-3">
                System Architecture
              </h3>
              <p className="text-[#0a0a0a] opacity-80 text-[14px] leading-[1.65] max-w-none">
                Cloud-native, scalable infrastructure designed around your operational rules.
              </p>
            </div>
            <div className="mt text-[12px] uppercase text-[#0a0a0a] opacity-60 mt-6 pt-4 border-t border-[#0a0a0a1a]">
              <span>Auto-scaling · Microservices</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="cd bg-white border border-white rounded-[16px] p-6 flex flex-col justify-between hover:shadow-[0_30px_60px_-30px_#000] transition-all duration-300">
            <div>
              <span className="no text-[#0a0a0a] font-[600] text-[14px] font-[var(--d)]">03</span>
              <h3 className="text-[#0a0a0a] text-[clamp(20px,min(2vw,3.4vh),28px)] my-3">
                Interface Craft
              </h3>
              <p className="text-[#0a0a0a] opacity-80 text-[14px] leading-[1.65] max-w-none">
                Considered UI/UX that drives adoption, engagement and conversion.
              </p>
            </div>
            <div className="mt text-[12px] uppercase text-[#0a0a0a] opacity-60 mt-6 pt-4 border-t border-[#0a0a0a1a]">
              <span>UI/UX · Motion System</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
