import React, { useState, useEffect } from 'react';

export const StudioFilm = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setSeconds((prev) => (prev >= 24 ? 0 : prev + 1));
      }, 1000);
    } else {
      setSeconds(0);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs} / 0:24`;
  };

  return (
    <section className="sec" id="film">
      <div className="w max-w-[1200px] margin-auto">
        <p className="ey">08 / Studio film</p>
        <h2>Studio film preview</h2>
        <p className="text-[var(--mu)] text-[16px] mt-2 mb-8">
          A closer look at how we think, design and build.
        </p>

        {/* Film Scene Frame */}
        <div className="fc border border-[var(--ln)] bg-[#121212] rounded-[16px] p-[clamp(14px,2vw,22px)] mt-[34px]">
          <div className={`film relative aspect-[16/7] bg-[#0d0d0c] border border-[var(--ln)] rounded-[16px] overflow-hidden m-0 transition-colors duration-300 hover:border-[var(--lm)] ${isPlaying ? 'on' : ''}`}>
            {/* Light Cone Sweep */}
            <div
              className={`lp absolute w-[55%] h-[150%] left-[6%] top-[-25%] bg-[radial-gradient(closest-side,#f2f0ea38,transparent)] ${
                isPlaying ? 'animate-sw' : ''
              }`}
            />
            {/* Figure Silhouette */}
            <div className="fg absolute right-[18%] bottom-0 w-[20%] h-[60%] bg-[linear-gradient(#24231e,#121211)] rounded-[50%_50%_0_0]" />
            {/* Scanline */}
            <div
              className={`sc absolute left-0 right-0 h-[2px] bg-[#f2f0ea55] ${
                isPlaying ? 'animate-sc' : ''
              }`}
            />

            {/* Central Play Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="pb absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] rounded-full border border-[#fff6] bg-[#0008] text-white text-[20px] cursor-pointer hover:bg-[var(--lm)] hover:text-[#0a0a0a] hover:border-[var(--lm)] transition-all duration-300 grid place-items-center z-10"
              aria-label={isPlaying ? 'Pause film preview' : 'Play studio film preview'}
            >
              {isPlaying ? '❚❚' : '▶'}
            </button>

            {/* Bottom Progress Line */}
            <div className="fb absolute left-[18px] right-[18px] bottom-[14px] h-[2px] bg-[#fff3]">
              <i
                className="block h-full bg-[var(--lm)] transition-all duration-1000"
                style={{ width: `${(seconds / 24) * 100}%` }}
              />
            </div>

            {/* Timestamp */}
            <span className="ts absolute left-[18px] bottom-[22px] text-[12px] tracking-[0.08em] text-[#c9c6bd] tabular-nums">
              {formatTime(seconds)}
            </span>
          </div>

          {/* Action Row */}
          <div className="bt3 flex justify-between items-center gap-4 flex-wrap mt-[18px]">
            <h3 className="text-[clamp(24px,2.6vw,34px)] font-[600] font-[var(--d)] text-[var(--tx)]">
              Video preview — footage pending.
            </h3>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="b g"
            >
              {isPlaying ? 'Pause preview' : 'Watch preview'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
