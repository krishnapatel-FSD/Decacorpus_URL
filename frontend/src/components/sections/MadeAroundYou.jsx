import React from 'react';
import { useApp } from '../../context/AppContext';

export const MadeAroundYou = () => {
  const { selectedPick, changePick, openDrawer, servicesData } = useApp();

  const currentService = servicesData[selectedPick] || servicesData[0];

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
    <section className="sec mau relative isolation-auto" id="made-around-you">
      <div className="w max-w-[1200px] margin-auto">
        <p className="ey">Made around you</p>
        <h2 className="font-[700] text-[clamp(36px,5vw,68px)] leading-none text-white mb-3">What are you building?</h2>
        <p className="mau-s text-[#9a968a] text-[16px] mb-8">
          Pick what you’re building — we’ll show how we’d shape it around you.
        </p>

        <div className="pz grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-[clamp(28px,5vw,72px)] items-start">
          {/* Chips Selector Grid */}
          <div className="chips grid grid-cols-1 sm:grid-cols-2 gap-3">
            {servicesData.map((s, idx) => {
              const isSelected = selectedPick === idx;
              return (
                <button
                  key={s.id}
                  aria-pressed={isSelected}
                  onClick={() => changePick(idx)}
                  className={`chip relative flex items-center gap-3.5 text-left p-[16px_20px] rounded-[16px] overflow-hidden cursor-pointer transition-all duration-300 ${
                    idx === servicesData.length - 1 ? 'sm:col-span-2' : ''
                  } ${
                    isSelected
                      ? '!bg-[#ffffff] !text-[#0a0a0a] !border-[#ffffff] shadow-[0_18px_40px_-22px_#fff]'
                      : 'bg-[#121212] text-[#f2f0ea] border border-[#2a2a28] hover:border-[#6a6860]'
                  }`}
                >
                  <svg
                    className={`w-5 h-5 flex-none ${isSelected ? 'text-[#0a0a0a]' : 'text-[#f2f0ea]'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    dangerouslySetInnerHTML={{ __html: svgIcons[idx] || '' }}
                  />
                  <span className="cl flex-1 font-[600] text-[16px] font-[var(--b)]">
                    {s.chip_label}
                  </span>
                  <em className={`font-[500] text-[12px] not-italic tracking-[0.08em] ${isSelected ? 'text-[#0a0a0a]' : 'text-[#9a968a]'}`}>
                    0{idx + 1}
                  </em>
                </button>
              );
            })}
          </div>

          {/* Dynamic Service Preview Card */}
          {currentService && (
            <div className="pp bg-[#ffffff] text-[#0a0a0a] border-0 rounded-[20px] p-[clamp(24px,3.2vw,42px)] shadow-[0_40px_80px_-40px_#000]">
              <div className="pph flex items-center justify-between mb-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="pbd w-[48px] h-[48px] rounded-[14px] bg-[#0a0a0a] grid place-items-center flex-none">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dangerouslySetInnerHTML={{ __html: svgIcons[selectedPick] || '' }}
                    />
                  </div>
                  <h3 className="m-0 font-[700] text-[clamp(24px,2.6vw,34px)] font-[var(--d)] text-[#0a0a0a] tracking-[-0.02em]">
                    {currentService.name}
                  </h3>
                </div>
                <small className="font-[500] text-[12px] tracking-[0.08em] text-[#736f64] whitespace-nowrap">
                  0{currentService.id + 1} / 07
                </small>
              </div>

              <p className="font-[400] text-[16px] text-[#3b3a36] leading-[1.55] mb-4 max-w-none">
                {currentService.short_line}
              </p>

              <ul className="pfl list-none p-0 my-4 flex flex-col gap-2.5">
                {currentService.key_features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 py-1.5 border-t border-[#e8e6df] text-[15px] font-[400] text-[#0a0a0a]">
                    <svg className="w-4 h-4 text-[#0a0a0a] flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="tg flex gap-2 flex-wrap mt-4 mb-6">
                {currentService.technologies.map((tech, idx) => (
                  <span key={idx} className="text-[13px] bg-[#f2f0ea] border border-[#dcd9cf] rounded-full px-3.5 py-1.5 text-[#0a0a0a] font-[500]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pbt flex gap-3 flex-wrap">
                <button
                  onClick={() => openDrawer(currentService)}
                  className="b !bg-[#0a0a0a] !text-white !border-[#0a0a0a]"
                >
                  Read the overview
                </button>
                <a
                  href="#/contact"
                  className="b g !bg-transparent !border-[#0a0a0a] !text-[#0a0a0a] hover:!bg-[#0a0a0a] hover:!text-white"
                >
                  Start a {currentService.chip_label.toLowerCase()} project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
