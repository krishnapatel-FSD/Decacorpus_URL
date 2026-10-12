import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PollWidget } from '../components/ui/PollWidget';

export const Insights = () => {
  const { insightsData } = useApp();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredArticles = activeFilter === 'all'
    ? insightsData
    : insightsData.filter((a) => a.filter_key === activeFilter);

  return (
    <div className="insights-page sec pt-[clamp(104px,12vw,150px)]">
      <div className="w max-w-[1200px] margin-auto">
        <p className="ey">Ideas / Systems / New perspectives</p>

        {/* Hero Row: Heading Left & Subtext Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-end mb-8">
          <h1 className="text-[clamp(44px,7.5vw,108px)] font-[700] leading-[1.02] text-[#f2f0ea] m-0 font-[var(--d)]">
            Thinking out loud.
          </h1>
          <p className="lead font-[400] text-[clamp(17px,1.8vw,22px)] text-[#9a968a] leading-[1.6] m-0 max-w-[42ch]">
            Notes on the changing relationship between business, design and technology. A preview of the conversations we want to open.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="fl2 flex gap-3 flex-wrap items-center py-5 border-y border-[#2a2a28] mt-8 mb-8">
          <button
            aria-pressed={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
            className={`font-[500] text-[14px] px-4.5 py-2 rounded-full border cursor-pointer transition-colors duration-200 ${
              activeFilter === 'all'
                ? 'bg-[#ffffff] text-[#0a0a0a] border-[#ffffff]'
                : 'bg-transparent text-[#c9c6bd] border-[#2a2a28] hover:border-[#f2f0ea]'
            }`}
          >
            All perspectives
          </button>
          <button
            aria-pressed={activeFilter === 'ai'}
            onClick={() => setActiveFilter('ai')}
            className={`font-[500] text-[14px] px-4.5 py-2 rounded-full border cursor-pointer transition-colors duration-200 ${
              activeFilter === 'ai'
                ? 'bg-[#ffffff] text-[#0a0a0a] border-[#ffffff]'
                : 'bg-transparent text-[#c9c6bd] border-[#2a2a28] hover:border-[#f2f0ea]'
            }`}
          >
            AI
          </button>
          <button
            aria-pressed={activeFilter === 'design'}
            onClick={() => setActiveFilter('design')}
            className={`font-[500] text-[14px] px-4.5 py-2 rounded-full border cursor-pointer transition-colors duration-200 ${
              activeFilter === 'design'
                ? 'bg-[#ffffff] text-[#0a0a0a] border-[#ffffff]'
                : 'bg-transparent text-[#c9c6bd] border-[#2a2a28] hover:border-[#f2f0ea]'
            }`}
          >
            Design
          </button>

          <em className="not-italic text-[12px] tracking-[0.08em] uppercase text-[#9a968a] ml-auto font-[500]">
            02 EDITORIAL PREVIEWS / NO ARTICLES PUBLISHED YET
          </em>
        </div>

        {/* 2 White Article Cards Grid (Image 2) */}
        <div className="cs grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,3vw,36px)]">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="cd bg-[#ffffff] text-[#0a0a0a] border-0 rounded-[20px] p-[24px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] overflow-hidden hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
            >
              <div className="th aspect-[16/9] bg-[#141413] rounded-[14px] relative overflow-hidden mb-5">
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <small className="a absolute left-4 top-4 text-[11px] tracking-[0.08em] uppercase text-white font-[600] z-10 bg-[#0a0a0acc] backdrop-blur-md px-3 py-1 rounded-full">
                  {article.card_label}
                </small>
                <small className="c absolute right-4 top-4 text-[16px] text-white z-10 w-8 h-8 rounded-full bg-[#0a0a0acc] grid place-items-center backdrop-blur-md">
                  ↗
                </small>
              </div>

              <div className="px-1 pb-1">
                <div className="mt flex justify-between items-center mb-2 text-[12px] uppercase text-[#736f64] tracking-[0.08em] font-[500]">
                  <span>{article.meta}</span>
                </div>
                <h3 className="text-[clamp(24px,2.4vw,32px)] text-[#0a0a0a] font-[700] mb-2.5 font-[var(--d)] leading-[1.2]">
                  {article.title}
                </h3>
                <p className="text-[#4b4a44] text-[15px] leading-[1.6]">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Poll Widget (Image 3) */}
        <PollWidget />
      </div>
    </div>
  );
};
