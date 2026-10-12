import React from 'react';
import { useApp } from '../../context/AppContext';

export const Footer = () => {
  const { openDrawer, servicesData } = useApp();

  return (
    <footer className="relative z-[1] pb-[36px] pt-0 border-t border-[#2a2a28]">
      <div className="w max-w-[1200px] margin-auto block px-[var(--pad)] pt-[56px]">
        {/* 4 Column Layout */}
        <div className="fcl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1.2fr_1fr] gap-[32px] items-start">
          {/* Column 1: Brand & Tagline */}
          <div>
            <a
              className="logo font-[600] text-[18px] text-[#f2f0ea] tracking-[-0.01em] text-decoration-none inline-flex items-center min-h-[44px]"
              href="#/"
            >
              DecaCorpus
            </a>
            <p className="mt-[12px] text-[16px] text-[#f2f0ea] max-w-[56ch]">
              DECACORPUS – Digital technology studio. Building products, systems & software for ambitious businesses.
            </p>
          </div>

          {/* Column 2: Studio Navigation */}
          <div>
            <small className="block text-[#9a968a] text-[12px] tracking-[0.08em] uppercase mb-[12px]">
              Studio
            </small>
            <div className="flex flex-col">
              <a href="#/work" className="flex items-center py-[6px] min-h-[44px] text-[#c9c6bd] text-decoration-none text-[14px] hover:text-[#f2f0ea] transition-colors duration-200">Work</a>
              <a href="#/services" className="flex items-center py-[6px] min-h-[44px] text-[#c9c6bd] text-decoration-none text-[14px] hover:text-[#f2f0ea] transition-colors duration-200">Services</a>
              <a href="#/studio" className="flex items-center py-[6px] min-h-[44px] text-[#c9c6bd] text-decoration-none text-[14px] hover:text-[#f2f0ea] transition-colors duration-200">Studio</a>
              <a href="#/insights" className="flex items-center py-[6px] min-h-[44px] text-[#c9c6bd] text-decoration-none text-[14px] hover:text-[#f2f0ea] transition-colors duration-200">Insights</a>
              <a href="#/careers" className="flex items-center py-[6px] min-h-[44px] text-[#c9c6bd] text-decoration-none text-[14px] hover:text-[#f2f0ea] transition-colors duration-200">Careers</a>
              <a href="#/contact" className="flex items-center py-[6px] min-h-[44px] text-[#c9c6bd] text-decoration-none text-[14px] hover:text-[#f2f0ea] transition-colors duration-200">Contact</a>
            </div>
          </div>

          {/* Column 3: Services Drawer Triggers */}
          <div>
            <small className="block text-[#9a968a] text-[12px] tracking-[0.08em] uppercase mb-[12px]">
              Services
            </small>
            <div className="flex flex-col">
              {servicesData.map((s) => (
                <button
                  key={s.id}
                  onClick={() => openDrawer(s)}
                  className="flex items-center text-left w-full py-[6px] min-h-[44px] text-[#c9c6bd] text-decoration-none text-[14px] hover:text-[#f2f0ea] bg-none border-0 cursor-pointer transition-colors duration-200"
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <small className="block text-[#9a968a] text-[12px] tracking-[0.08em] uppercase mb-[12px]">
              Reach us
            </small>
            <div className="flex flex-col">
              <a href="mailto:hello@decacorpus.com" className="flex items-center py-[6px] min-h-[44px] text-[#c9c6bd] text-decoration-none text-[14px] hover:text-[#f2f0ea] transition-colors duration-200">
                hello@decacorpus.com
              </a>
              <a href="mailto:careers@decacorpus.com" className="flex items-center py-[6px] min-h-[44px] text-[#c9c6bd] text-decoration-none text-[14px] hover:text-[#f2f0ea] transition-colors duration-200">
                careers@decacorpus.com
              </a>
              <a href="#" className="flex items-center py-[6px] min-h-[44px] text-[#c9c6bd] text-decoration-none text-[14px] hover:text-[#f2f0ea] transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="flex items-center py-[6px] min-h-[44px] text-[#c9c6bd] text-decoration-none text-[14px] hover:text-[#f2f0ea] transition-colors duration-200">
                X / Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar Row */}
        <div className="fb2 flex justify-between items-center w-full border-t border-[#2a2a28] mt-[28px] pt-[20px] text-[12px] tracking-[0.08em] uppercase text-[#9a968a] flex-wrap gap-4">
          <span>© 2026 DECACORPUS</span>
          <span className="lk2 flex gap-[26px] items-center flex-wrap">
            <a href="#" className="text-[#9a968a] hover:text-[#f2f0ea] text-decoration-none min-h-[44px] inline-flex items-center">Privacy</a>
            <a href="#" className="text-[#9a968a] hover:text-[#f2f0ea] text-decoration-none min-h-[44px] inline-flex items-center">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
};
