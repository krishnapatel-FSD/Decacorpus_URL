import React, { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';

export const ChapterDots = () => {
  const { currentRoute } = useApp();
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const chapters = [
    { id: 'bigger-picture', label: 'The bigger picture' },
    { id: 'made-around-you', label: 'What we build' },
    { id: 'selected-concept', label: 'Selected concept' },
    { id: 'phil', label: 'Our philosophy' },
    { id: 'process', label: 'How we get there' },
    { id: 'tech', label: 'Built on strong foundations' },
    { id: 'insights-preview', label: 'Ideas in progress' },
    { id: 'film', label: 'Studio film' }
  ];

  useEffect(() => {
    if (currentRoute !== '#/') {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY > 420);

      // Determine active section
      chapters.forEach((ch, idx) => {
        const el = document.getElementById(ch.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveIndex(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  if (currentRoute !== '#/' || !isVisible) return null;

  return (
    <div
      className="chn fixed right-[18px] top-1/2 -translate-y-1/2 z-[15] hidden xl:flex flex-col gap-3 items-end opacity-100 transition-opacity duration-400"
      id="chn"
      aria-label="Sections"
    >
      {chapters.map((ch, idx) => {
        const isActive = activeIndex === idx;
        return (
          <button
            key={ch.id}
            onClick={() => {
              const el = document.getElementById(ch.id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`group all-unset cursor-pointer flex gap-2.5 items-center text-[var(--mu)] text-[12px] tracking-[0.08em] uppercase ${
              isActive ? 'on' : ''
            }`}
          >
            <span
              className={`opacity-0 translate-x-2 transition-all duration-350 bg-[#121212cc] px-2.5 py-1 rounded-full group-hover:opacity-100 group-hover:translate-x-0 ${
                isActive ? '!opacity-100 !translate-x-0' : ''
              }`}
            >
              {ch.label}
            </span>
            <i
              className={`w-[7px] h-[7px] rounded-full bg-[#55534b] transition-all duration-300 group-hover:bg-[var(--lm)] group-hover:scale-[1.6] ${
                isActive ? '!bg-[var(--lm)] !scale-[1.6]' : ''
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
