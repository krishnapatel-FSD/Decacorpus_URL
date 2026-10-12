import React from 'react';
import { HeroSlideshow } from '../components/hero/HeroSlideshow';
import { FloatingBadges } from '../components/hero/FloatingBadges';
import { MadeAroundYou } from '../components/sections/MadeAroundYou';
import { WhatWeBuild } from '../components/sections/WhatWeBuild';
import { CareOSDashboard } from '../components/sections/CareOSDashboard';
import { Philosophy } from '../components/sections/Philosophy';
import { ProcessPinned } from '../components/sections/ProcessPinned';
import { TechMarquee } from '../components/sections/TechMarquee';
import { StudioFilm } from '../components/sections/StudioFilm';
import { AccordionFAQ } from '../components/ui/AccordionFAQ';
import { PollWidget } from '../components/ui/PollWidget';
import { CtaBand } from '../components/sections/CtaBand';

export const Home = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero pt-[clamp(84px,11vh,120px)] pb-[clamp(20px,3.5vh,40px)] min-h-[560px] lg:h-[100svh] relative overflow-hidden flex flex-col">
        <FloatingBadges />
        <div className="w max-w-[1200px] margin-auto flex-1 min-h-0 flex flex-col w-full px-[var(--pad)]">
          <p className="ey">Deca Corpus / Digital technology studio</p>
          <h1 className="flex flex-wrap gap-x-[0.28em] font-[700] text-[clamp(38px,min(5.4vw,9.4vh),84px)] leading-none mb-4">
            <span className="text-[#f2f0ea]">Build</span>{' '}
            <span className="text-[#f2f0ea]">what’s</span>{' '}
            <span className="text-[#f2f0ea]">next.</span>
          </h1>

          <div className="hg flex-1 min-h-0 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-[clamp(24px,4vw,64px)] mt-[clamp(12px,2.6vh,32px)] items-stretch">
            {/* Left Column */}
            <div className="hl self-center">
              <p className="l font-[700] text-[clamp(20px,2vw,28px)] font-[var(--d)] tracking-[-0.02em] text-[#f2f0ea] max-w-[22ch] leading-[1.2]">
                We don’t just build websites. We build the systems behind businesses.
              </p>
              <p className="s mt-3.5 max-w-[38ch] text-[16px] text-[#9a968a] leading-[1.6]">
                We engineer digital products, software systems, SaaS platforms and business technology built for the real world.
              </p>
              <div className="bt flex gap-3 flex-wrap mt-6">
                <a className="b" href="#/contact">
                  Start a Project
                </a>
                <a className="b g" href="#/work">
                  See the concept
                </a>
              </div>
            </div>

            {/* Right Column (Hero Slideshow) */}
            <div className="sl-wrapper h-full min-h-[300px]">
              <HeroSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section 01: The Bigger Picture */}
      <section className="sec" id="bigger-picture">
        <div className="w max-w-[1200px] margin-auto">
          <div className="mp two bg-[#f2f0ea] text-[#0a0a0a] rounded-[20px] p-[clamp(32px,5vw,64px)] grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 items-center shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <div>
              <p className="ey text-[#4b4a44] before:!bg-[#0a0a0a]">01 / The bigger picture</p>
              <p className="text-[#3b3a36] text-[16px] font-[500]">Less fragmentation. More possibility.</p>
            </div>
            <div>
              <h2 className="text-[clamp(32px,4.5vw,58px)] font-[700] text-[#0a0a0a] leading-[1.05] mb-3">
                We build the systems behind businesses.
              </h2>
              <p className="text-[#3b3a36] text-[16px] max-w-none leading-[1.6]">
                A beautiful interface is only the beginning. We connect the product, the processes and the technology into one considered whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 02: What We Build */}
      <WhatWeBuild />

      {/* 4. Section 03: Made Around You */}
      <MadeAroundYou />

      {/* 5. Section 04: Our Philosophy */}
      <Philosophy />

      {/* 6. Healthcare CRM Concept */}
      <section className="sec" id="selected-concept">
        <div className="w max-w-[1200px] margin-auto">
          <div className="flex justify-between items-end mb-6 flex-wrap gap-4">
            <div>
              <p className="ey">Selected concept</p>
              <h2>Healthcare CRM</h2>
            </div>
            <a href="#/work" className="b g">
              Explore Healthcare CRM
            </a>
          </div>

          <CareOSDashboard />

          <p className="text-[12px] tracking-[0.08em] uppercase text-[#9a968a] text-center mt-4">
            CONCEPT PREVIEW • ALL INTERFACE DATA IS ILLUSTRATIVE
          </p>
        </div>
      </section>

      {/* 7. How We Get There (Pinned Process) */}
      <ProcessPinned />

      {/* 8. Tech Marquees */}
      <TechMarquee />

      {/* 9. Ideas In Progress (Perspectives & Poll) */}
      <section className="sec" id="insights-preview">
        <div className="w max-w-[1200px] margin-auto">
          <div className="flex justify-between items-end mb-6 flex-wrap gap-4">
            <div>
              <p className="ey">Ideas in progress</p>
              <h2>A different perspective.</h2>
            </div>
            <a href="#/insights" className="b g">
              Explore Insights
            </a>
          </div>

          <div className="cs grid grid-cols-1 md:grid-cols-2 gap-[clamp(18px,3vw,40px)]">
            <div className="cd bg-[#121212] border border-[#2a2a28] rounded-[16px] p-6 hover:border-[#6a6860] transition-all duration-300">
              <span className="text-[12px] tracking-[0.08em] uppercase text-[#9a968a]">Intelligence / in context</span>
              <h3 className="text-[clamp(24px,2.6vw,34px)] text-[#f2f0ea] my-3">Why Business Software Is Changing</h3>
              <p className="text-[#9a968a] text-[14px]">From rigid tools to adaptive systems: how AI can reshape the way business software understands context and supports decisions.</p>
            </div>
            <div className="cd bg-[#121212] border border-[#2a2a28] rounded-[16px] p-6 hover:border-[#6a6860] transition-all duration-300">
              <span className="text-[12px] tracking-[0.08em] uppercase text-[#9a968a]">Less noise / more signal</span>
              <h3 className="text-[clamp(24px,2.6vw,34px)] text-[#f2f0ea] my-3">The Death of the Dashboard</h3>
              <p className="text-[#9a968a] text-[14px]">More charts do not always mean more clarity. A look at interfaces that help people act, rather than simply watch.</p>
            </div>
          </div>

          <PollWidget />
        </div>
      </section>

      {/* 10. Studio Film */}
      <StudioFilm />

      {/* 11. FAQ */}
      <section className="sec">
        <div className="w max-w-[1200px] margin-auto">
          <div className="mp bg-[#f2f0ea] text-[#0a0a0a] rounded-[20px] p-[clamp(28px,4.5vw,64px)]">
            <AccordionFAQ />
          </div>
        </div>
      </section>

      {/* 12. CTA Band */}
      <CtaBand />
    </div>
  );
};
