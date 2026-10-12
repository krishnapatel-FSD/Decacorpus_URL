import React from 'react';
import { useApp } from '../../context/AppContext';

export const ServiceDrawer = () => {
  const { drawerService, closeDrawer } = useApp();

  if (!drawerService) return null;

  return (
    <>
      {/* Scrim Backdrop */}
      <div
        className="scrim fixed inset-0 z-[39] bg-[#000b] opacity-100 pointer-events-auto transition-opacity duration-400"
        id="scrim"
        onClick={closeDrawer}
      />

      {/* Drawer Panel */}
      <aside
        className="dr fixed top-0 right-0 h-full w-[min(580px,100%)] z-[40] bg-[#0f0f0e] border-l border-[var(--ln)] p-[92px_clamp(22px,3vw,40px)_48px] overflow-y-auto overscroll-contain transition-transform duration-[650ms] cubic-bezier(0.22,1.1,0.36,1) translate-x-0 pointer-events-auto"
        id="dr"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="x absolute top-[22px] right-[22px] bg-none border border-[#444] text-[var(--tx)] rounded-full py-[9px] px-[18px] font-[500] text-[14px] cursor-pointer hover:border-[var(--lm)] hover:text-[var(--lm)] transition-colors duration-250"
          id="dx"
          onClick={closeDrawer}
        >
          Close
        </button>

        <div id="dc">
          <small className="block text-[12px] tracking-[0.08em] uppercase text-[var(--mu)] mb-2">
            Service 0{drawerService.id + 1}
          </small>
          <h2 className="text-[clamp(34px,4.4vw,52px)] font-[600] font-[var(--d)] text-[var(--tx)] my-[8px]">
            {drawerService.name}
          </h2>
          <p className="text-[18px] font-[500] text-[#fff] leading-[1.3] font-[var(--d)] my-4 max-w-none">
            {drawerService.short_line}
          </p>

          <h4 className="font-[600] text-[20px] font-[var(--d)] tracking-[-0.01em] mt-[30px] mb-[10px] text-[var(--lm)]">
            Overview
          </h4>
          <p className="text-[16px] text-[#c9c6bd] leading-[1.65] max-w-none">
            {drawerService.overview}
          </p>

          {/* List 1 */}
          {drawerService.list_1_title && (
            <>
              <h4 className="font-[600] text-[20px] font-[var(--d)] tracking-[-0.01em] mt-[30px] mb-[10px] text-[var(--lm)]">
                {drawerService.list_1_title}
              </h4>
              <ul className="p-0 list-none">
                {drawerService.list_1_items.map((item, idx) => (
                  <li key={idx} className="py-[11px] border-t border-[var(--ln)] text-[#c9c6bd] text-[16px]">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* List 2 */}
          {drawerService.list_2_title && (
            <>
              <h4 className="font-[600] text-[20px] font-[var(--d)] tracking-[-0.01em] mt-[30px] mb-[10px] text-[var(--lm)]">
                {drawerService.list_2_title}
              </h4>
              <ul className="p-0 list-none">
                {drawerService.list_2_items.map((item, idx) => (
                  <li key={idx} className="py-[11px] border-t border-[var(--ln)] text-[#c9c6bd] text-[16px]">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Pull Quote */}
          {drawerService.pull_quote && (
            <div className="q font-[500] text-[20px] leading-[1.3] font-[var(--d)] text-white mt-[28px] p-4 bg-[#1a1a19] rounded-[12px] border-l-4 border-[var(--lm)]">
              "{drawerService.pull_quote}"
            </div>
          )}

          {/* Key Features */}
          {drawerService.key_features && (
            <>
              <h4 className="font-[600] text-[20px] font-[var(--d)] tracking-[-0.01em] mt-[30px] mb-[10px] text-[var(--lm)]">
                Key Features
              </h4>
              <div className="tg mt-2 flex gap-2 flex-wrap">
                {drawerService.key_features.map((feat, idx) => (
                  <span key={idx} className="text-[14px] border border-[var(--ln)] rounded-full px-3 py-1 text-[#c9c6bd]">
                    {feat}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* Technologies */}
          {drawerService.technologies && (
            <>
              <h4 className="font-[600] text-[20px] font-[var(--d)] tracking-[-0.01em] mt-[30px] mb-[10px] text-[var(--lm)]">
                Technologies
              </h4>
              <div className="tg mt-2 flex gap-2 flex-wrap mb-8">
                {drawerService.technologies.map((tech, idx) => (
                  <span key={idx} className="text-[14px] border border-[var(--ln)] rounded-full px-3 py-1 text-[var(--lm)]">
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}

          <a
            className="b w-full mt-6 flex justify-center text-decoration-none"
            href="#/contact"
            onClick={closeDrawer}
          >
            Start a Project
          </a>
        </div>
      </aside>
    </>
  );
};
