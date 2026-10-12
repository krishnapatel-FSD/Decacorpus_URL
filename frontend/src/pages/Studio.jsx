import React from 'react';
import { CtaBand } from '../components/sections/CtaBand';

export const Studio = () => {
  return (
    <div className="studio-page">
      {/* 1. Hero Section (Image 3) */}
      <section className="std pt-[clamp(92px,12vh,124px)] pb-[clamp(24px,5vh,56px)] min-h-[100svh] flex items-center">
        <div className="w max-w-[1200px] margin-auto w-full px-[var(--pad)]">
          <div className="stdg grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[clamp(32px,5vw,80px)] items-center">
            <div>
              <p className="ey">People / Perspective / Practice</p>
              <h1 className="text-[clamp(44px,7.5vw,108px)] font-[700] leading-[1.02] text-[#f2f0ea] m-0 mb-4 font-[var(--d)]">
                The Studio
              </h1>
              <p className="lead text-[clamp(17px,1.8vw,22px)] text-[#9a968a] leading-[1.65] max-w-[34ch] mb-8">
                We are a team of engineers, designers, and strategists obsessed with pushing the boundaries of what’s possible.
              </p>
              <a
                href="#/careers"
                className="b !bg-[#f2f0ea] !text-[#0a0a0a] !border-[#f2f0ea] hover:!bg-white"
              >
                Join the team →
              </a>
            </div>

            {/* Right Culture Tile Container */}
            <div className="tile relative aspect-[4/3] sm:aspect-square rounded-[20px] overflow-hidden bg-[#121212] border border-[#2a2a28] p-6 flex flex-col justify-between">
              <div className="w-full h-[calc(100%-36px)] relative grid place-items-center overflow-hidden">
                <img
                  src="/assets/images/studio-culture-tile.jpg"
                  alt="The DecaCorpus team at work."
                  className="w-full h-full object-contain filter invert mix-blend-screen opacity-90"
                />
              </div>
              <figcaption className="font-[500] text-[12px] font-[var(--b)] tracking-[0.08em] uppercase text-[#9a968a]">
                Culture
              </figcaption>
            </div>
          </div>
        </div>
      </section>

      {/* 2. White Philosophy Feature Panel (Image 3) */}
      <section className="std2 py-12">
        <div className="w max-w-[1200px] margin-auto px-[var(--pad)]">
          <div className="stdp2 bg-[#ffffff] text-[#0a0a0a] rounded-[20px] p-[clamp(32px,5vw,64px)] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[clamp(28px,4vw,64px)] items-center shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <div>
              <p className="ey text-[#4b4a44] before:!bg-[#0a0a0a]">Our philosophy</p>
              <h2 className="lead text-[clamp(28px,3.8vw,52px)] font-[700] leading-[1.12] text-[#0a0a0a] max-w-[22ch] mt-2 font-[var(--d)]">
                At DecaCorpus, we don’t just write code or design interfaces. We engineer holistic systems that scale.
              </h2>
            </div>
            <p className="sp text-[clamp(16px,1.4vw,19px)] text-[#3b3a36] leading-[1.65] max-w-[46ch]">
              True digital transformation needs a deep understanding of business logic, user psychology, and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How We Work 3-Card Grid (Image 2) */}
      <section className="sec border-t border-[#2a2a28]">
        <div className="w max-w-[1200px] margin-auto">
          <p className="ey">How we work</p>

          <div className="kg grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2vw,24px)] mt-6">
            <div className="kc flex flex-col justify-between p-[clamp(24px,2.8vw,36px)] bg-[#121212] border border-[#2a2a28] rounded-[16px] min-h-[220px] hover:border-[#6a6860] transition-colors">
              <div>
                <div className="kic w-12 h-12 rounded-[14px] border border-[#2a2a28] bg-[#1a1a19] grid place-items-center text-[#f2f0ea] mb-5">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                </div>
                <h3 className="text-[clamp(22px,2vw,28px)] font-[700] text-[#f2f0ea] mb-2 leading-[1.2] font-[var(--d)]">Iterative</h3>
                <p className="text-[#9a968a] text-[15px] leading-[1.6]">We ship early, learn fast, and refine.</p>
              </div>
            </div>

            <div className="kc flex flex-col justify-between p-[clamp(24px,2.8vw,36px)] bg-[#121212] border border-[#2a2a28] rounded-[16px] min-h-[220px] hover:border-[#6a6860] transition-colors">
              <div>
                <div className="kic w-12 h-12 rounded-[14px] border border-[#2a2a28] bg-[#1a1a19] grid place-items-center text-[#f2f0ea] mb-5">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 className="text-[clamp(22px,2vw,28px)] font-[700] text-[#f2f0ea] mb-2 leading-[1.2] font-[var(--d)]">Radically transparent</h3>
                <p className="text-[#9a968a] text-[15px] leading-[1.6]">You see the architecture, trade-offs, and progress.</p>
              </div>
            </div>

            <div className="kc flex flex-col justify-between p-[clamp(24px,2.8vw,36px)] bg-[#121212] border border-[#2a2a28] rounded-[16px] min-h-[220px] hover:border-[#6a6860] transition-colors">
              <div>
                <div className="kic w-12 h-12 rounded-[14px] border border-[#2a2a28] bg-[#1a1a19] grid place-items-center text-[#f2f0ea] mb-5">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <h3 className="text-[clamp(22px,2vw,28px)] font-[700] text-[#f2f0ea] mb-2 leading-[1.2] font-[var(--d)]">Uncompromising on quality</h3>
                <p className="text-[#9a968a] text-[15px] leading-[1.6]">Design and engineering get equal care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. White Closing CTA Band (Image 1) */}
      <CtaBand />
    </div>
  );
};
