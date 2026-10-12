import React, { useState, useEffect } from 'react';
import { CareOSDashboard } from '../sections/CareOSDashboard';

export const HeroSlideshow = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      label: 'Systems, not silos.',
      num: 'DC / 01',
      caption: 'Designed to connect.',
      img: '/assets/images/slide-1-systems.jpg',
      alt: 'Team working across connected desks'
    },
    {
      label: 'Healthcare CRM',
      num: 'DC / 02',
      caption: 'Custom CRM, Automation and Analytics.',
      isDashboard: true
    },
    {
      label: 'Web Development',
      num: 'DC / 03',
      caption: 'Modern websites engineered for performance, conversion and scale.',
      img: '/assets/images/slide-3-web.jpg',
      alt: 'Web design and development concept'
    },
    {
      label: 'SaaS Systems',
      num: 'DC / 04',
      caption: 'From MVP to scalable SaaS infrastructure.',
      img: '/assets/images/slide-4-saas.jpg',
      alt: 'SaaS cloud platform concept'
    },
    {
      label: 'AI & Automation',
      num: 'DC / 05',
      caption: 'Intelligent workflows that reduce repetitive work.',
      img: '/assets/images/slide-5-ai.jpg',
      alt: 'AI assistant helping a person at a laptop'
    }
  ];

  // 6s Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="sl relative aspect-[16/11] min-h-[380px] lg:min-h-[300px] h-full bg-[var(--s1)] border border-[var(--ln)] rounded-[16px] overflow-hidden touch-pan-y">
      {slides.map((slide, idx) => {
        const isActive = activeSlide === idx;
        return (
          <div
            key={idx}
            className={`sd absolute inset-0 transition-all duration-700 ${
              isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            {/* Top Labels */}
            <span className="tl absolute top-[18px] left-[22px] z-10 text-[12px] tracking-[0.08em] uppercase text-[#9a968a]">
              {slide.label}
            </span>
            <span className="tr absolute top-[18px] right-[22px] z-10 text-[12px] tracking-[0.08em] uppercase text-[#9a968a]">
              {slide.num}
            </span>

            {/* Visual Content */}
            <div className="vz absolute inset-0 p-[54px_24px_66px] grid place-items-center overflow-hidden">
              {slide.isDashboard ? (
                <div className="w-full scale-[0.65] origin-center -mt-6">
                  <CareOSDashboard isCompact />
                </div>
              ) : (
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="slimg absolute left-[24px] right-[24px] top-[70px] w-[calc(100%-48px)] h-[calc(100%-140px)] object-cover rounded-[12px] border border-[var(--ln)] block"
                />
              )}
            </div>

            {/* Bottom Caption */}
            <span className="bl absolute left-[22px] bottom-[20px] z-10 font-[500] text-[16px] text-[#c9c6bd] max-w-[70%]">
              {slide.caption}
            </span>
          </div>
        );
      })}

      {/* Progress Track & Arrow Navigation */}
      <div className="ct absolute left-[18px] right-[18px] top-[12px] bottom-auto flex gap-2 items-center z-20">
        {slides.map((_, idx) => {
          const isActive = activeSlide === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className="s flex-1 h-[16px] bg-none border-0 cursor-pointer flex items-center"
            >
              <u className="block w-full h-[3px] bg-[#ffffff26] rounded-[2px] overflow-hidden">
                <i
                  className={`block h-full bg-[var(--lm)] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </u>
            </button>
          );
        })}
      </div>

      <div className="cb absolute right-[18px] bottom-[14px] flex gap-2 z-20">
        <button
          onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="ar w-[36px] h-[36px] rounded-full border border-[#444] bg-[#0a0a0a99] text-[var(--tx)] cursor-pointer text-[16px] hover:border-[var(--lm)] hover:text-[var(--lm)] transition-colors duration-200"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
          className="ar w-[36px] h-[36px] rounded-full border border-[#444] bg-[#0a0a0a99] text-[var(--tx)] cursor-pointer text-[16px] hover:border-[var(--lm)] hover:text-[var(--lm)] transition-colors duration-200"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </div>
  );
};
