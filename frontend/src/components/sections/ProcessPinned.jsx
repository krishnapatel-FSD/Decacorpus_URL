import React, { useState, useEffect, useRef } from 'react';
import { PROCESS_STEPS } from '../../services/fallbackData';

export const ProcessPinned = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalDist = sectionRef.current.clientHeight - window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= window.innerHeight && totalDist > 0) {
        const progress = Math.min(1, Math.max(0, -rect.top / totalDist));
        const idx = Math.min(5, Math.floor(progress * 6));
        setActiveStep(idx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStepObj = PROCESS_STEPS[activeStep] || PROCESS_STEPS[0];

  const handleStepClick = (idx) => {
    setActiveStep(idx);
    setIsDropdownOpen(false);
    if (!sectionRef.current) return;

    const sectionTop = window.scrollY + sectionRef.current.getBoundingClientRect().top;
    const stepHeight = (sectionRef.current.clientHeight - window.innerHeight) / 6;
    const targetScroll = sectionTop + stepHeight * idx + stepHeight / 2;

    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="pr relative bg-[#0a0a0a8c] border-y border-[var(--ln)] h-[560vh] md:h-[560vh]"
      id="process"
    >
      <div className="ps sticky top-0 h-[100svh] flex items-center p-[80px_var(--pad)_0] pt-[120px] overflow-hidden">
        {/* Dropdown Selector Pill (Top Center) */}
        <div className="pill absolute top-[84px] left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex gap-3 items-center bg-[#1a1a19d9] backdrop-blur-[12px] border border-[var(--ln)] color-[var(--tx)] rounded-full py-2.5 px-4 font-[500] text-[14px] cursor-pointer hover:border-[var(--lm)] transition-colors duration-300"
          >
            <small className="text-[var(--mu)]">{currentStepObj.step}</small>
            <span>{currentStepObj.name}</span>
            <i className={`not-italic text-[var(--mu)] transition-transform duration-400 ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ▾
            </i>
          </button>

          {/* Dropdown List */}
          {isDropdownOpen && (
            <div
              className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[240px] list-none p-2 bg-[#161615f2] border border-[var(--ln)] rounded-[16px] shadow-2xl z-30"
              id="pilll"
            >
              {PROCESS_STEPS.map((s, idx) => (
                <button
                  key={s.step}
                  onClick={() => handleStepClick(idx)}
                  className="all-unset box-border flex gap-3.5 w-full p-[11px_12px] rounded-[8px] cursor-pointer text-[#c9c6bd] font-[500] text-[16px] hover:bg-[#242423] hover:text-white transition-colors duration-200"
                >
                  <small className="text-[var(--mu)] min-w-[20px]">{s.step}</small>
                  <span>{s.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Huge Background Ghost Word */}
        <div className="gw absolute left-[var(--pad)] bottom-[1vh] font-[600] text-[clamp(90px,19vw,280px)] leading-[0.9] font-[var(--d)] tracking-[-0.05em] text-[#f2f0ea14] pointer-events-none whitespace-nowrap select-none">
          {currentStepObj.name}
        </div>

        {/* Main Content Grid */}
        <div className="w max-w-[1200px] margin-auto w-full">
          <div className="pg grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-[clamp(24px,6vw,96px)] w-full items-center">
            {/* Stepper Rail (Left) */}
            <div className="relative">
              <p className="ey mb-4">05 / How we get there</p>
              <ul className="pl list-none p-0 relative">
                {/* Vertical Rail Line */}
                <div className="absolute left-[5px] top-[12px] bottom-[12px] w-[1px] bg-[var(--ln)]" />
                <div
                  className="absolute left-[5px] top-[12px] w-[1px] bg-[var(--lm)] transition-all duration-500 max-h-[calc(100%-24px)]"
                  style={{ height: `${(activeStep / 5) * 100}%` }}
                />

                {PROCESS_STEPS.map((s, idx) => {
                  const isActive = activeStep === idx;
                  const isPassed = activeStep > idx;

                  return (
                    <li key={s.step}>
                      <button
                        onClick={() => handleStepClick(idx)}
                        className={`all-unset flex gap-4.5 items-center py-2.5 px-0 font-[600] text-[clamp(18px,2vw,24px)] font-[var(--d)] cursor-pointer relative transition-all duration-300 ${
                          isActive
                            ? 'text-[var(--tx)] pl-2'
                            : isPassed
                            ? 'text-[#a9a69c]'
                            : 'text-[#5d5b55] hover:text-white'
                        }`}
                      >
                        <span
                          className={`w-[11px] h-[11px] rounded-full bg-[var(--bg)] border border-[#55534b] flex-none relative z-10 transition-colors duration-300 ${
                            isActive || isPassed ? '!bg-[var(--lm)] !border-[var(--lm)]' : ''
                          }`}
                        />
                        <span>{s.step}</span>
                        <span>{s.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Step Content Stage (Right) */}
            <div className="pd grid">
              <div className="on opacity-100 translate-y-0 transition-all duration-500">
                <small className="text-[var(--mu)] text-[14px]">
                  Step {currentStepObj.step} of 06
                </small>
                <h3 className="text-[clamp(52px,8vw,112px)] tracking-[-0.04em] my-[10px] mb-[18px] leading-none text-[var(--tx)]">
                  {currentStepObj.name}
                </h3>
                <div className="h font-[400] text-[clamp(20px,2.2vw,28px)] leading-[1.3] font-[var(--d)] text-[#c9c6bd] max-w-[24ch] mb-[18px]">
                  {currentStepObj.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
