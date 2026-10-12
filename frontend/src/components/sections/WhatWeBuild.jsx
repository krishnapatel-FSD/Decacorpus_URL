import React from 'react';
import { useApp } from '../../context/AppContext';

export const WhatWeBuild = () => {
  const { openDrawer, servicesData } = useApp();

  const svgIcons = [
    '<path d="M3 6h18v12H3z"/><path d="M3 10h18"/><path d="M7 8h.01M10 8h.01"/>',
    '<path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m13.5 6-3 12"/>',
    '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
    '<circle cx="12" cy="8" r="3"/><path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6"/>',
    '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m12 8 1.6 2.4L16 12l-2.4 1.6L12 16l-1.6-2.4L8 12l2.4-1.6z"/>',
    '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
    '<path d="M12 2.5 20 7v10l-8 4.5L4 17V7z"/><path d="M4 7l8 4.5L20 7M12 11.5v10"/>'
  ];

  return (
    <section className="sec" id="what">
      <div className="w max-w-[1200px] margin-auto">
        <p className="ey">02 / What we build</p>
        <h2 className="font-[700] text-[clamp(36px,5vw,68px)] leading-none text-white mb-3">
          Connected thinking. Complete delivery.
        </h2>
        <p className="text-[#9a968a] text-[16px] mb-8">
          From the first interface to the infrastructure beneath it.
        </p>

        {/* 8-Card Grid Layout */}
        <div className="sv7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {servicesData.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => openDrawer(s)}
              className="sv relative flex flex-col justify-between min-h-[220px] p-[24px] text-left font-inherit color-[#f2f0ea] text-decoration-none cursor-pointer bg-[#121212] border border-[#2a2a28] rounded-[16px] overflow-hidden hover:border-[#6a6860] hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <span className="sv-t flex items-center justify-between w-full">
                <svg
                  className="sv-ic w-7 h-7 text-[#f2f0ea] opacity-90 group-hover:-translate-y-1 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: svgIcons[idx] || '' }}
                />
                <span className="sv-no font-[500] text-[12px] tracking-[0.08em] text-[#9a968a]">
                  0{idx + 1}
                </span>
              </span>

              <span className="sv-b mt-4 flex-1 flex flex-col justify-end">
                <h3 className="font-[700] text-[clamp(20px,1.8vw,24px)] leading-[1.25] tracking-[-0.015em] mb-2 text-[#f2f0ea] max-w-none">
                  {s.name}
                </h3>
                <p className="font-[400] text-[14px] leading-[1.45] text-[#9a968a] max-w-none pr-8">
                  {s.short_line}
                </p>
              </span>

              <span className="sv-ar absolute right-[18px] bottom-[18px] w-[36px] h-[36px] rounded-full border border-[#3a3a37] grid place-items-center text-[16px] text-[#f2f0ea] group-hover:bg-[#f2f0ea] group-hover:text-[#0a0a0a] group-hover:border-[#f2f0ea] group-hover:rotate-45 transition-all duration-300">
                ↗
              </span>
            </button>
          ))}

          {/* 8th Cream Tile */}
          <a
            href="#/contact"
            className="sv sv-cta relative flex flex-col justify-between min-h-[220px] p-[24px] text-left font-inherit bg-[#f2f0ea] text-[#0a0a0a] border border-[#f2f0ea] rounded-[16px] overflow-hidden hover:bg-white hover:border-white transition-all duration-300 group"
          >
            <span className="sv-t flex items-center justify-between w-full">
              <span className="sv-no font-[500] text-[12px] tracking-[0.08em] text-[#736f64]">
                08
              </span>
            </span>

            <span className="sv-b mt-4 flex-1 flex flex-col justify-end">
              <h3 className="font-[700] text-[clamp(20px,1.8vw,24px)] leading-[1.25] tracking-[-0.015em] mb-2 text-[#0a0a0a] max-w-none">
                Not sure where to start?
              </h3>
              <p className="font-[400] text-[14px] leading-[1.45] text-[#4b4a44] max-w-none">
                Tell us what you’re building.
              </p>
            </span>

            <span className="sv-ar absolute right-[18px] bottom-[18px] w-[36px] h-[36px] rounded-full border border-[#0a0a0a] grid place-items-center text-[16px] text-[#0a0a0a] group-hover:bg-[#0a0a0a] group-hover:text-[#f2f0ea] transition-all duration-300">
              ↗
            </span>
          </a>
        </div>

        <div className="mt-8">
          <a href="#/services" className="b g">
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
};
