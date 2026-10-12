import React, { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';

export const FloatingNav = () => {
  const { currentRoute, isMenuOpen, setIsMenuOpen, scrollProgress, setScrollProgress } = useApp();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / totalHeight)) : 0;
      setScrollProgress(progress);
      setScrollPercentage(Math.round(progress * 100));
      setIsCollapsed(window.scrollY > 140);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollProgress]);

  const navLinks = [
    { label: 'Work', hash: '#/work' },
    { label: 'Services', hash: '#/services' },
    { label: 'Studio', hash: '#/studio' },
    { label: 'Insights', hash: '#/insights' },
    { label: 'Careers', hash: '#/careers' },
    { label: 'Contact', hash: '#/contact' }
  ];

  return (
    <nav className="fixed inset-[calc(env(safe-area-inset-top,0px)+14px)_0_auto] z-20 h-auto bg-none border-0 backdrop-blur-none pointer-events-none px-[var(--pad)] animate-[nv_.9s_cubic-bezier(.22,1.2,.36,1)_.3s_backwards]">
      <div className="w max-w-[1200px] xl:max-w-[1160px] margin-auto h-auto flex justify-center items-center">
        <div
          className={`pn pointer-events-auto relative overflow-hidden flex items-center gap-[6px] bg-[#121212f5] border border-[#ffffff1f] rounded-full p-[7px_7px_7px_20px] xl:p-[6px_6px_6px_18px] max-w-full shadow-[0_18px_50px_-20px_#000] transition-all duration-300 ${
            isCollapsed ? 'sm' : ''
          }`}
          id="pn"
        >
          {/* Brand Logo */}
          <a
            className="logo font-[600] text-[18px] xl:text-[16px] font-[var(--d)] tracking-[-0.01em] text-decoration-none flex items-center min-h-[44px] text-[#f2f0ea]"
            href="#/"
          >
            DecaCorpus
          </a>

          {/* Nav Links Group */}
          <div
            className={`lks hidden md:flex items-center gap-[2px] overflow-hidden whitespace-nowrap ml-[14px] transition-all duration-700 ${
              isCollapsed ? 'max-w-0 opacity-0 !ml-0' : 'max-w-[620px] opacity-100'
            } hover:max-w-[620px] hover:opacity-100 hover:!ml-[14px]`}
            id="lk"
          >
            {navLinks.map((link) => {
              const isActive = currentRoute === link.hash || (link.hash !== '#/' && currentRoute.startsWith(link.hash));
              return (
                <a
                  key={link.hash}
                  href={link.hash}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative overflow-hidden font-[var(--b)] font-[400] text-[14px] text-[#c9c6bd] text-decoration-none px-[14px] py-[9px] xl:px-[12px] xl:py-[8px] rounded-full min-h-[44px] flex items-center transition-colors duration-300 hover:bg-[#ffffff14] hover:text-white ${
                    isActive ? 'bg-[#ffffff14] !text-white font-[500]' : ''
                  }`}
                >
                  <span className="relative block overflow-hidden h-[20px] leading-[20px]">
                    <span className="block transition-transform duration-[550ms] cubic-bezier(0.16,1,0.3,1) group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    <span className="absolute top-full left-0 block transition-transform duration-[550ms] cubic-bezier(0.16,1,0.3,1) group-hover:-translate-y-full text-white font-[500]">
                      {link.label}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          {/* Scroll % Progress */}
          <span
            className={`pc hidden sm:flex items-center justify-center font-[var(--b)] font-[500] text-[12px] text-[#9a968a] tabular-nums min-w-[36px] min-h-[44px] text-center transition-all duration-400 ${
              isCollapsed ? 'max-w-0 opacity-0 !p-0 !m-0' : 'max-w-[120px] opacity-100'
            }`}
            id="pc"
          >
            {scrollPercentage}%
          </span>

          {/* Menu Button */}
          <button
            className="mbtn font-[var(--b)] bg-[#f2f0ea] text-[#0a0a0a] border-0 rounded-full py-[11px] px-[20px] xl:py-[10px] xl:px-[18px] xl:text-[12px] font-[600] text-[14px] cursor-pointer min-w-[78px] min-h-[44px] hover:scale-[1.06] hover:bg-white transition-all duration-300 flex items-center justify-center"
            id="mb"
            aria-expanded={isMenuOpen}
            aria-controls="mcard"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>

          {/* Pinned Scroll Progress Bar */}
          <div
            id="sp"
            className="absolute left-0 bottom-0 h-[2px] w-full bg-[#f2f0ea] origin-left transition-transform duration-150"
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>
      </div>
    </nav>
  );
};
