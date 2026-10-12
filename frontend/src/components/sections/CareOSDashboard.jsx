import React, { useState } from 'react';

export const CareOSDashboard = ({ isCompact = false }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Overview', 'Patients', 'Appointments', 'Workflows', 'Analytics'];
  const barHeights = [35, 65, 45, 85, 95, 70, 40];
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div
      className={`cos rv bg-[#141413] border border-[var(--ln)] rounded-[16px] p-[clamp(16px,2.2vw,28px)] shadow-[0_40px_80px_-50px_#000] mt-[24px] grid ${
        isCompact ? 'grid-cols-1 lg:grid-cols-[138px_1fr]' : 'grid-cols-1 lg:grid-cols-[170px_1fr]'
      } gap-[22px]`}
      data-cur="Live view"
    >
      {/* Sidebar Navigation */}
      <aside className="flex flex-col gap-2 border-b lg:border-b-0 lg:border-r border-[var(--ln)] pb-4 lg:pb-0 lg:pr-4">
        <b className="font-[600] text-[20px] font-[var(--d)] text-[var(--tx)] mb-3">Care / OS</b>
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx)}
            className={`border rounded-[8px] py-[9px] px-[14px] text-left font-[500] text-[14px] cursor-pointer transition-all duration-200 ${
              activeTab === idx
                ? 'bg-[#f2f0ea] text-[#0a0a0a] border-[#f2f0ea] shadow-sm font-[600]'
                : 'bg-transparent text-[#9a968a] border-[var(--ln)] hover:border-[var(--lm)] hover:text-white hover:pl-4'
            }`}
          >
            {tab}
          </button>
        ))}
        <small className="text-[11px] tracking-[0.08em] uppercase text-[#736f64] mt-6 hidden lg:block">
          Concept workspace
        </small>
      </aside>

      {/* Main Workspace */}
      <div className="flex flex-col gap-4">
        {/* Workspace Header */}
        <div className="hd2 flex justify-between items-start border-b border-[var(--ln)] pb-[14px] flex-wrap gap-2">
          <div>
            <h4 className="font-[600] text-[clamp(24px,2.6vw,32px)] font-[var(--d)] tracking-[-0.02em] text-[var(--tx)]">
              Care, connected.
            </h4>
            <span className="mu text-[11px] tracking-[0.08em] uppercase text-[#9a968a]">
              Concept preview / sample data
            </span>
          </div>
          <span className="chip2 text-[12px] border border-[var(--ln)] rounded-full px-3 py-1 text-[#c9c6bd] bg-[#1d1d1c]">
            Demo workspace
          </span>
        </div>

        {/* 3 KPI Metric Cards */}
        <div className="k3 grid grid-cols-1 sm:grid-cols-3 gap-[10px]">
          <div className="bg-[#1d1d1c] border border-[var(--ln)] rounded-[8px] p-[16px_18px] text-[var(--mu)] text-[14px] hover:border-[#383734] transition-all duration-200">
            <b className="block font-[500] text-[clamp(32px,3.8vw,48px)] leading-[1.05] font-[var(--d)] text-[var(--tx)] tabular-nums mb-1">
              128
            </b>
            Active records
          </div>
          <div className="bg-[#1d1d1c] border border-[var(--ln)] rounded-[8px] p-[16px_18px] text-[var(--mu)] text-[14px] hover:border-[#383734] transition-all duration-200">
            <b className="block font-[500] text-[clamp(32px,3.8vw,48px)] leading-[1.05] font-[var(--d)] text-[var(--tx)] tabular-nums mb-1">
              24
            </b>
            Appointments
          </div>
          <div className="bg-[#1d1d1c] border border-[var(--ln)] rounded-[8px] p-[16px_18px] text-[var(--mu)] text-[14px] hover:border-[#383734] transition-all duration-200">
            <b className="block font-[500] text-[clamp(32px,3.8vw,48px)] leading-[1.05] font-[var(--d)] text-[var(--tx)] tabular-nums mb-1">
              08
            </b>
            Follow-ups
          </div>
        </div>

        {/* Middle Section: Care Activity Bar Chart & Workflow Status */}
        <div className="g2 grid grid-cols-1 md:grid-cols-[1.8fr_1fr] gap-[10px]">
          {/* Care Activity Bar Chart */}
          <div className="ca bg-[#1d1d1c] border border-[var(--ln)] rounded-[8px] p-[16px_18px] text-[14px] flex flex-col justify-between">
            <div className="flex justify-between items-center text-[#c9c6bd] mb-[12px]">
              <span className="font-[500] text-[14px]">Care activity</span>
              <span className="mu text-[11px] tracking-[0.08em] uppercase text-[#9a968a]">Sample week</span>
            </div>
            <div className="bc flex items-end gap-[10px] h-[115px] pt-2" id="bc">
              {days.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-2 text-[12px] text-[#9a968a]">
                  <i
                    className="block w-full rounded-[6px] bg-[#f2f0ea] opacity-90 transition-all duration-300 hover:opacity-100"
                    style={{ height: `${barHeights[i]}%` }}
                    title={`Day ${d}: ${barHeights[i]}%`}
                  />
                  <span className="font-[500]">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next in the Workflow */}
          <div className="nw bg-[#1d1d1c] border border-[var(--ln)] rounded-[8px] p-[16px_18px] text-[14px] flex flex-col justify-between">
            <div>
              <p className="mb-[12px] text-white font-[500]">Next in the workflow</p>
              <ul className="p-0 list-none flex flex-col gap-2">
                <li className="flex justify-between items-center text-[#c9c6bd] text-[13px]">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f2f0ea]" />
                    Appointment reminder
                  </span>
                  <span className="text-[#9a968a]">Ready</span>
                </li>
                <li className="flex justify-between items-center text-[#c9c6bd] text-[13px]">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f2f0ea]" />
                    Post-visit check-in
                  </span>
                  <span className="text-[#9a968a]">Ready</span>
                </li>
                <li className="flex justify-between items-center text-[#c9c6bd] text-[13px]">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f2f0ea]" />
                    Record review
                  </span>
                  <span className="text-[#9a968a]">Review</span>
                </li>
              </ul>
            </div>
            <p className="text-[11px] text-[#736f64] mt-3 italic">Illustrative workflow states</p>
          </div>
        </div>

        {/* Patient Workflow Table */}
        <div className="pw mt-1 text-[14px] bg-[#1d1d1c] border border-[var(--ln)] rounded-[8px] p-[16px_18px]">
          <p className="font-[600] mb-[10px] text-white">Patient workflow</p>
          <div className="h grid grid-cols-[1fr_1.6fr_0.7fr] p-[4px_4px] text-[#9a968a] text-[11px] tracking-[0.08em] uppercase border-b border-[var(--ln)] pb-2 mb-1">
            <span>Record</span>
            <span>Next action</span>
            <span>Status</span>
          </div>
          <div className="grid grid-cols-[1fr_1.6fr_0.7fr] p-[10px_4px] border-b border-[var(--ln)]/50 text-[#c9c6bd] text-[13px] hover:text-white transition-colors">
            <span className="font-[500]">Sample 01</span>
            <span>Intake review</span>
            <span className="text-[#f2f0ea] font-[500]">Review</span>
          </div>
          <div className="grid grid-cols-[1fr_1.6fr_0.7fr] p-[10px_4px] border-b border-[var(--ln)]/50 text-[#c9c6bd] text-[13px] hover:text-white transition-colors">
            <span className="font-[500]">Sample 02</span>
            <span>Visit reminder</span>
            <span className="text-[#9a968a]">Queued</span>
          </div>
          <div className="grid grid-cols-[1fr_1.6fr_0.7fr] p-[10px_4px] text-[#c9c6bd] text-[13px] hover:text-white transition-colors">
            <span className="font-[500]">Sample 03</span>
            <span>Care follow-up</span>
            <span className="text-[#9a968a]">Scheduled</span>
          </div>
        </div>
      </div>
    </div>
  );
};
