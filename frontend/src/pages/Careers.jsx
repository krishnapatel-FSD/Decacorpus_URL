import React from 'react';

export const Careers = () => {
  const roles = [
    {
      title: 'Engineering',
      desc: 'Front-end, back-end, full-stack, mobile.',
      icon: '<path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m13.5 6-3 12"/>',
      emailSubject: 'Interest%20in%20Engineering'
    },
    {
      title: 'Design',
      desc: 'UI/UX, product design, motion.',
      icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      emailSubject: 'Interest%20in%20Design'
    },
    {
      title: 'Strategy and delivery',
      desc: 'Product strategy, project leadership.',
      icon: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
      emailSubject: 'Interest%20in%20Strategy%20and%20delivery'
    },
    {
      title: 'AI and automation',
      desc: 'Workflow and LLM integration.',
      icon: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m12 8 1.6 2.4L16 12l-2.4 1.6L12 16l-1.6-2.4L8 12l2.4-1.6z"/>',
      emailSubject: 'Interest%20in%20AI%20and%20automation'
    }
  ];

  return (
    <div className="careers-page">
      {/* 1. Hero Section (Image 2) */}
      <section className="pgk min-h-[100svh] flex items-center pt-[clamp(104px,12vw,150px)] pb-[clamp(40px,8vh,96px)]">
        <div className="w max-w-[1200px] margin-auto w-full px-[var(--pad)]">
          <p className="ey">Careers</p>
          <h1 className="text-[clamp(46px,7.5vw,112px)] font-[700] leading-[1.02] text-[#f2f0ea] mb-6">
            Good minds. Shared ambition.
          </h1>
          <div className="it flex justify-between items-end gap-8 flex-wrap mt-[clamp(20px,3.4vh,40px)]">
            <p className="lead font-[400] text-[clamp(18px,1.8vw,24px)] text-[#9a968a] max-w-[48ch] leading-[1.6]">
              We’re engineers, designers and strategists building the systems behind ambitious businesses. If that sounds like you, we’d like to know you.
            </p>
            <div className="pgk-a flex gap-3 flex-wrap">
              <a className="b" href="mailto:careers@decacorpus.com">
                Write to us
              </a>
              <a className="b g" href="mailto:careers@decacorpus.com?subject=Introduction">
                Introduce yourself
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section 01: Why DecaCorpus (Image 3) */}
      <section className="sec border-t border-[#2a2a28]">
        <div className="w max-w-[1200px] margin-auto">
          <p className="ey">01 / Why DecaCorpus</p>
          <h2 className="text-[clamp(34px,5vw,68px)] font-[700] text-[#f2f0ea] leading-none mb-8">
            What it’s like to work here.
          </h2>

          <div className="kg grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2vw,24px)] mt-8">
            <div className="kc flex flex-col justify-between p-[clamp(24px,2.8vw,36px)] bg-[#121212] border border-[#2a2a28] rounded-[16px] min-h-[220px]">
              <div>
                <span className="text-[12px] tracking-[0.08em] uppercase text-[#9a968a] font-[500] block mb-4">01</span>
                <h3 className="text-[clamp(20px,1.9vw,26px)] font-[700] text-[#f2f0ea] mb-3 leading-[1.25]">
                  Real systems, not just screens
                </h3>
                <p className="text-[#9a968a] text-[15px] leading-[1.6]">
                  You’ll work on software, SaaS, CRM, AI and mobile products, from first idea to launch.
                </p>
              </div>
            </div>

            <div className="kc flex flex-col justify-between p-[clamp(24px,2.8vw,36px)] bg-[#121212] border border-[#2a2a28] rounded-[16px] min-h-[220px]">
              <div>
                <span className="text-[12px] tracking-[0.08em] uppercase text-[#9a968a] font-[500] block mb-4">02</span>
                <h3 className="text-[clamp(20px,1.9vw,26px)] font-[700] text-[#f2f0ea] mb-3 leading-[1.25]">
                  Design and engineering side by side
                </h3>
                <p className="text-[#9a968a] text-[15px] leading-[1.6]">
                  No handoff walls, and both get equal care.
                </p>
              </div>
            </div>

            <div className="kc flex flex-col justify-between p-[clamp(24px,2.8vw,36px)] bg-[#121212] border border-[#2a2a28] rounded-[16px] min-h-[220px]">
              <div>
                <span className="text-[12px] tracking-[0.08em] uppercase text-[#9a968a] font-[500] block mb-4">03</span>
                <h3 className="text-[clamp(20px,1.9vw,26px)] font-[700] text-[#f2f0ea] mb-3 leading-[1.25]">
                  Open by default
                </h3>
                <p className="text-[#9a968a] text-[15px] leading-[1.6]">
                  Architecture, trade-offs and decisions are visible to everyone on the team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 02: Areas We Hire In (Image 4) */}
      <section className="sec border-t border-[#2a2a28]">
        <div className="w max-w-[1200px] margin-auto">
          <p className="ey">02 / Areas we hire in</p>
          <h2 className="text-[clamp(34px,5vw,68px)] font-[700] text-[#f2f0ea] leading-none mb-3">
            Where you could fit
          </h2>
          <p className="nt3 text-[14px] tracking-[0.04em] text-[#9a968a] mb-8">
            Demo roles, shown as placeholders until real openings exist.
          </p>

          <div className="k2 grid grid-cols-1 md:grid-cols-2 gap-5">
            {roles.map((role) => (
              <div key={role.title} className="kc flex justify-between items-center gap-6 p-[28px_32px] bg-[#121212] border border-[#2a2a28] rounded-[16px] min-h-[160px] hover:border-[#6a6860] transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-[12px] bg-[#1a1a19] border border-[#2a2a28] grid place-items-center flex-none text-[#f2f0ea]">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dangerouslySetInnerHTML={{ __html: role.icon }}
                    />
                  </div>
                  <div>
                    <h3 className="text-[clamp(20px,1.9vw,24px)] font-[700] text-[#f2f0ea] mb-1.5 leading-[1.2]">
                      {role.title}
                    </h3>
                    <p className="text-[#9a968a] text-[15px] leading-[1.5]">
                      {role.desc}
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:careers@decacorpus.com?subject=${role.emailSubject}`}
                  className="ap b !bg-[#ffffff] !text-[#0a0a0a] flex-none text-[14px] py-[10px] px-[20px] hover:!bg-[#f2f0ea]"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. White Closing Card (Image 5) */}
      <section className="sec">
        <div className="w max-w-[1200px] margin-auto">
          <div className="mp bg-[#ffffff] text-[#0a0a0a] rounded-[20px] p-[clamp(32px,5vw,64px)] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <div className="cl3 flex items-center justify-between gap-[clamp(24px,4vw,64px)] flex-wrap">
              <div>
                <h2 className="text-[#0a0a0a] text-[clamp(32px,4.5vw,58px)] font-[700] leading-[1.08] m-0 max-w-[16ch]">
                  Don’t see your role? Write to us anyway.
                </h2>
                <p className="smn text-[#4b4a44] text-[15px] mt-4 max-w-[46ch] leading-[1.6]">
                  This is an open invitation to connect, not a list of confirmed open roles.
                </p>
              </div>
              <a
                href="mailto:careers@decacorpus.com"
                className="b !bg-[#0a0a0a] !text-[#ffffff] px-7 py-3 text.decoration-none font-[600]"
              >
                careers@decacorpus.com ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
