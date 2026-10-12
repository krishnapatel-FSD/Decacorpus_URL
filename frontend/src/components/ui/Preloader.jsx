import React, { useEffect, useState } from 'react';

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    let animId;

    const animate = (t) => {
      const p = Math.min(1, (t - startTime) / 1500);
      setProgress(Math.round(p * 100));

      if (p < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        finish();
      }
    };

    const finish = () => {
      setIsFading(true);
      document.body.classList.add('rd');
      setTimeout(() => {
        setIsDone(true);
      }, 600);
    };

    animId = requestAnimationFrame(animate);

    const failsafe = setTimeout(finish, 3200);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(failsafe);
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      className={`ld fixed inset-0 z-[100] bg-[#0a0a0a] grid place-items-center font-[500] text-[14px] tracking-[0.22em] text-[#9a968a] transition-opacity duration-[600ms] ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="lw w-[min(420px,80vw)]">
        <small className="block tracking-[0.22em] text-[#9a968a] text-[14px] mb-2 font-[500] font-[var(--b)]">
          INITIALIZING DIGITAL SYSTEM...
        </small>
        <b className="flex items-baseline gap-1.5 font-[600] text-[clamp(70px,16vw,150px)] leading-none tracking-[-0.05em] text-[#f2f0ea] font-[var(--d)]">
          <span>{String(progress).padStart(3, '0')}</span>
          <u className="no-underline text-[0.3em] text-[#f2f0ea]">%</u>
        </b>
        <i
          className="block h-[1px] bg-[#f2f0ea] mt-2 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

