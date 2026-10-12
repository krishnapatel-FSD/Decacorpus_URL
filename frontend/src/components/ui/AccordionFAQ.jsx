import React, { useState } from 'react';

export const AccordionFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      q: 'What does DecaCorpus build?',
      a: 'Websites, custom software, SaaS platforms, CRMs, AI automation, mobile apps and full digital products.'
    },
    {
      q: 'How does a project run?',
      a: 'In six steps: Idea, Structure, Design, Build, Launch and Evolve.'
    },
    {
      q: 'Why a custom CRM?',
      a: 'It matches your pipeline without bloat, you own your data with no vendor lock-in, and there are no per-user licence fees as teams grow.'
    },
    {
      q: 'Are you hiring?',
      a: 'This is an open invitation to connect, not a list of open roles. Write to careers@decacorpus.com.'
    }
  ];

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-[clamp(28px,5vw,72px)]">
      <div>
        <small className="ey text-[#4b4a44] before:!bg-[#0a0a0a]">FAQ</small>
        <h2 className="text-[#0a0a0a]">Questions, answered.</h2>
      </div>
      <div>
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`fq border-b border-[#0a0a0a24] ${isOpen ? 'open' : ''}`}>
              <button
                aria-expanded={isOpen}
                onClick={() => toggleItem(idx)}
                className="w-full text-left py-[24px] px-0 border-t border-[#0a0a0a24] font-[600] text-[clamp(19px,2vw,24px)] font-[var(--d)] tracking-[-0.02em] text-[#0a0a0a] flex justify-between items-center cursor-pointer hover:pl-[10px] transition-all duration-300"
              >
                <span>{item.q}</span>
                <span
                  className={`text-[28px] font-[300] font-[var(--b)] transition-transform duration-400 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-400 ease-out overflow-hidden ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-[24px] text-[#3b3a36] text-[16px] max-w-none">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
