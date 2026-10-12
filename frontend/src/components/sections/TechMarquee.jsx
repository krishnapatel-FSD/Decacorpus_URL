import React from 'react';

export const TechMarquee = () => {
  const categories = [
    { title: 'Frontend', items: ['React', 'Next.js', 'Three.js', 'GSAP'] },
    { title: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'Prisma'] },
    { title: 'Infrastructure', items: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker'] },
    { title: 'Design', items: ['Figma', 'Blender', 'Cinema 4D'] }
  ];

  return (
    <section className="sec" id="tech">
      <div className="w max-w-[1200px] margin-auto">
        <div className="two grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[18px] lg:gap-[80px] items-end">
          <div>
            <p className="ey">06 / Built on strong foundations</p>
            <h2>The right tools. Not just the <em>latest.</em></h2>
          </div>
          <p className="text-[var(--mu)] text-[16px] max-w-[38ch]">
            We choose technology around the product, the people using it and the system it needs to become.
          </p>
        </div>

        {/* 4 Marquee Columns / Rows */}
        <div className="tl4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-[44px]">
          {categories.map((cat, colIdx) => (
            <div key={cat.title} className="border-t border-[var(--ln)] pt-[18px]">
              <small className="block text-[12px] tracking-[0.08em] uppercase text-[#9a968a] mb-[12px]">
                {cat.title}
              </small>
              <div className="vm h-[230px] overflow-hidden mask-gradient mb-[14px]">
                <div
                  className={`vt2 flex flex-col gap-2.5 animate-vm ${
                    colIdx % 2 === 1 ? 'direction-reverse' : ''
                  }`}
                  style={{ animation: 'vm 16s linear infinite' }}
                >
                  {[...cat.items, ...cat.items, ...cat.items, ...cat.items].map((item, idx) => (
                    <span
                      key={idx}
                      className="self-start border border-[var(--ln)] rounded-full py-[9px] px-[18px] text-[16px] text-[#c9c6bd] bg-[#121212] hover:bg-[var(--lm)] hover:text-[#0a0a0a] hover:border-[var(--lm)] hover:translate-x-1.5 transition-all duration-300 cursor-pointer"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
