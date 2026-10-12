import React, { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';

export const NextPageBar = () => {
  const { currentRoute } = useApp();
  const [fillProgress, setFillProgress] = useState(0);

  const routeOrder = [
    '#/',
    '#/services',
    '#/work',
    '#/studio',
    '#/insights',
    '#/careers',
    '#/contact'
  ];

  useEffect(() => {
    let accum = 0;

    const handleWheel = (e) => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20;

      if (isAtBottom && e.deltaY > 0) {
        accum = Math.min(900, accum + e.deltaY);
        const p = (accum / 900) * 100;
        setFillProgress(p);

        if (accum >= 900) {
          accum = 0;
          setFillProgress(0);

          const idx = routeOrder.indexOf(currentRoute);
          const nextIdx = (idx + 1) % routeOrder.length;
          window.location.hash = routeOrder[nextIdx];
        }
      } else {
        accum = Math.max(0, accum - 90);
        setFillProgress((accum / 900) * 100);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentRoute]);

  const idx = routeOrder.indexOf(currentRoute);
  const nextIdx = (idx + 1) % routeOrder.length;
  const nextRouteHash = routeOrder[nextIdx];

  return (
    <a
      className="nxp block relative overflow-hidden p-[clamp(40px,6vw,90px)_var(--pad)] border-y border-[var(--ln)] text-decoration-none text-[var(--tx)] z-[1]"
      id="nxp"
      href={nextRouteHash}
    >
      <small className="hidden text-[12px] tracking-[0.08em] uppercase text-[var(--mu)]">
        Keep scrolling
      </small>
      <b className="hidden font-[600] text-[clamp(40px,8vw,120px)] leading-none font-[var(--d)] tracking-[-0.04em] mt-[12px] hover:text-[var(--lm)] hover:translate-x-[20px] transition-all duration-300">
        Next: {nextRouteHash.replace('#/', '').toUpperCase() || 'HOME'}
      </b>
      <i
        className="absolute left-0 bottom-0 h-[4px] bg-[var(--lm)] transition-all duration-150"
        style={{ width: `${fillProgress}%` }}
      />
    </a>
  );
};
