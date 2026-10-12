import React from 'react';

export const Wordmark = () => {
  return (
    <div className="wm relative z-[1] overflow-hidden mt-[clamp(16px,3vw,40px)] pt-[clamp(24px,4vw,56px)] select-none pointer-events-none">
      <b
        id="wm"
        className="block text-center whitespace-nowrap font-[600] text-[clamp(40px,10vw,160px)] leading-[0.86] font-[var(--d)] tracking-[-0.05em] pb-[0.06em]"
        style={{
          color: 'transparent',
          backgroundColor: '#fff',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextStroke: '0',
          WebkitMaskImage: 'linear-gradient(#000 38%, transparent 96%)',
          maskImage: 'linear-gradient(#000 38%, transparent 96%)'
        }}
      >
        DECACORPUS
      </b>
    </div>
  );
};
