import React from 'react';
import { CareOSDashboard } from '../components/sections/CareOSDashboard';
import { CtaBand } from '../components/sections/CtaBand';


export const Work = () => {
  return (
    <div className="work-page">
      <section className="pgw min-h-[100svh] flex items-center pt-[clamp(100px,14vh,136px)] pb-[clamp(32px,5vh,64px)]">
        <div className="w max-w-[1200px] xl:max-w-[1160px] margin-auto w-full px-[var(--pad)]">
          <div className="pgw-g grid grid-cols-1 lg:grid-cols-[0.85fr_1.25fr] gap-[clamp(28px,4vw,64px)] items-center">
            {/* Left Info Column */}
            <div className="pgw-l flex flex-col justify-center">
              {/* Eyebrow with small white dot */}
              <p className="ey flex items-center gap-2 text-[12px] tracking-[0.08em] uppercase text-[#9a968a] mb-4 font-[var(--b)]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#f2f0ea]"></span>
                WORK / CONCEPT PREVIEW
              </p>

              {/* H1 Heading - Pure White Solid Inter Font */}
              <h1 className="text-[clamp(44px,5.4vw,82px)] font-[700] leading-[1.02] text-[#f2f0ea] tracking-[-0.02em] font-[var(--d)] mb-5">
                Healthcare<br />CRM
              </h1>

              {/* Paragraph Lead */}
              <p className="lead text-[clamp(16px,1.25vw,19px)] text-[#c9c6bd] font-[var(--b)] font-[400] leading-[1.5] max-w-[34ch] mb-7">
                A connected system for the care journey, bringing patient relationships, workflows and analytics together.
              </p>

              {/* Tag Pills */}
              <div className="tgs flex gap-2 flex-wrap mb-8">
                <span className="text-[12px] font-[500] border border-[#2a2a28] rounded-full px-3.5 py-1.5 text-[#c9c6bd] bg-[#121212]">
                  Custom CRM
                </span>
                <span className="text-[12px] font-[500] border border-[#2a2a28] rounded-full px-3.5 py-1.5 text-[#c9c6bd] bg-[#121212]">
                  Automation
                </span>
                <span className="text-[12px] font-[500] border border-[#2a2a28] rounded-full px-3.5 py-1.5 text-[#c9c6bd] bg-[#121212]">
                  Analytics
                </span>
              </div>

              {/* Bottom Note */}
              <em className="pgw-n block not-italic text-[11px] tracking-[0.08em] uppercase text-[#9a968a] font-[var(--b)]">
                ILLUSTRATIVE CONCEPT • NOT A DELIVERED CASE STUDY
              </em>
            </div>

            {/* Right Dashboard Column */}
            <div>
              <CareOSDashboard isCompact />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
};

