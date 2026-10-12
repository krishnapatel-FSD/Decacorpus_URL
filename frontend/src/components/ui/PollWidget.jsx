import React from 'react';
import { useApp } from '../../context/AppContext';

export const PollWidget = () => {
  const { pollVotedIndex, handleVote } = useApp();

  const options = [
    'Scaling architecture',
    'Legacy code debt',
    'Lack of AI expertise',
    'Slow release velocity'
  ];

  return (
    <div className="poll border border-[var(--ln)] rounded-[16px] p-[clamp(20px,3vw,34px)] mt-[36px] bg-[#121212]">
      <small className="block text-[12px] tracking-[0.08em] uppercase text-[var(--mu)] mb-2">
        Small poll
      </small>
      <h3 className="my-[10px] mb-[18px] text-[clamp(24px,2.6vw,34px)] text-[var(--tx)] font-[600] font-[var(--d)]">
        What is your biggest engineering bottleneck right now?
      </h3>
      <div className="po flex gap-[12px] flex-wrap">
        {options.map((option, idx) => {
          const isSelected = pollVotedIndex === idx;
          const isVoted = pollVotedIndex !== null;

          return (
            <button
              key={idx}
              disabled={isVoted}
              onClick={() => handleVote(idx)}
              className={`font-[500] text-[16px] font-[var(--b)] text-[var(--tx)] bg-[#1a1a19] border border-[var(--ln)] rounded-[16px] py-[16px] px-[22px] cursor-pointer transition-all duration-350 ${
                isSelected
                  ? '!bg-[var(--lm)] !text-[#0a0a0a] !border-[var(--lm)]'
                  : 'hover:border-[var(--lm)] hover:-translate-y-1'
              } ${isVoted && !isSelected ? 'opacity-45 cursor-default' : ''}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <p className="hint2 mt-[14px] text-[14px] text-[var(--mu)]">
        {pollVotedIndex === null
          ? 'Your vote stays in this browser. It is a demo, not a survey.'
          : 'Noted. We’ll weigh it when we start writing.'}
      </p>
    </div>
  );
};
