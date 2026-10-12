import React from 'react';
import { useApp } from '../../context/AppContext';

export const MenuOverlay = () => {
  const { isMenuOpen, setIsMenuOpen } = useApp();

  if (!isMenuOpen) return null;

  const menuItems = [
    { index: '00', label: 'Home', hash: '#/' },
    { index: '01', label: 'Work', sup: '1', hash: '#/work' },
    { index: '02', label: 'Services', sup: '7', hash: '#/services' },
    { index: '03', label: 'Studio', hash: '#/studio' },
    { index: '04', label: 'Insights', sup: '2', hash: '#/insights' },
    { index: '05', label: 'Careers', hash: '#/careers' },
    { index: '06', label: 'Contact', hash: '#/contact' }
  ];

  const handleNavigate = (hash) => {
    setIsMenuOpen(false);
    window.location.hash = hash;
  };

  return (
    <>
      {/* Backdrop Scrim */}
      <div
        className="msc fixed inset-0 z-[18] bg-[#000a] backdrop-blur-[10px] opacity-100 pointer-events-auto transition-opacity duration-400"
        id="msc"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Card */}
      <div
        className="mcard fixed z-[19] top-[calc(env(safe-area-inset-top,0px)+82px)] left-1/2 -translate-x-1/2 w-[min(980px,calc(100%-2*var(--pad)))] max-h-[calc(100svh-108px)] overflow-auto bg-[#121212] border border-[#ffffff22] rounded-[16px] p-[clamp(20px,3vw,38px)] opacity-100 scale-100 pointer-events-auto transition-all duration-500"
        id="mcard"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="mg grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[24px]">
          {/* Nav Links */}
          <div className="ml2 flex flex-col">
            {menuItems.map((item) => (
              <a
                key={item.index}
                href={item.hash}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(item.hash);
                }}
                className="flex items-baseline gap-[16px] font-[var(--d)] font-[600] text-[clamp(34px,5vw,62px)] leading-[1.12] tracking-[-0.035em] text-[#f2f0ea] text-decoration-none py-[3px] transition-all duration-300 hover:text-white hover:pl-[10px]"
              >
                <span className="font-[var(--b)] font-[500] text-[12px] text-[#f2f0ea] tracking-[0.08em] min-w-[24px]">
                  {item.index}
                </span>
                {item.label}
                {item.sup && <sup className="text-[0.5em] text-[#f2f0ea] -ml-2">{item.sup}</sup>}
              </a>
            ))}
          </div>

          {/* Interactive Film Preview Tile (Desktop) */}
          <a
            className="mpv hidden md:grid relative place-items-center min-h-[260px] rounded-[16px] bg-[#0d0d0c] border border-[#2a2a28] overflow-hidden text-decoration-none hover:border-[#ffffff22] transition-colors duration-300"
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('#/');
              setTimeout(() => {
                const el = document.getElementById('film');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 1000);
            }}
          >
            <div className="hpv h-full w-full min-h-[260px] grid place-items-center">
              <svg className="w-[120px] h-[120px] text-[#f2f0ea] animate-spin opacity-40" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="180 60" />
              </svg>
            </div>
            <span className="pl2 absolute left-[14px] bottom-[14px] bg-[#f2f0ea] text-[#0a0a0a] font-[var(--b)] font-[600] text-[14px] py-[9px] px-[16px] rounded-full min-h-[44px] flex items-center">
              ▶ Studio film preview
            </span>
          </a>
        </div>

        {/* Footer Row */}
        <div className="mf flex justify-between items-center gap-[16px] border-t border-[#2a2a28] mt-[22px] pt-[16px] text-[14px] text-[#9a968a] flex-wrap">
          <span>Build what’s next.</span>
          <a
            className="mcta font-[var(--b)] bg-[#f2f0ea] text-[#0a0a0a] font-[600] py-[10px] px-[18px] rounded-full text-decoration-none min-h-[44px] inline-flex items-center hover:scale-[1.06] transition-transform duration-300"
            href="#/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('#/contact');
            }}
          >
            Start a Project ↗
          </a>
        </div>
      </div>
    </>
  );
};
