import React, { useEffect, useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';

export const PageTransitionCurtain = () => {
  const { currentRoute } = useApp();
  const [transitionState, setTransitionState] = useState('hidden');
  const [routeName, setRouteName] = useState('');
  const isFirstRender = useRef(true);

  const routeTitles = {
    '#/': 'Home',
    '#/services': 'Services',
    '#/work': 'Work',
    '#/studio': 'Studio',
    '#/insights': 'Insights',
    '#/careers': 'Careers',
    '#/contact': 'Contact'
  };

  useEffect(() => {
    const title = routeTitles[currentRoute] || 'Home';
    setRouteName(title);

    // Skip initial page load curtain transition
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Trigger curtain transition animation sequence (0.58s in, 0.65s out)
    setTransitionState('in');
    const timerIn = setTimeout(() => {
      setTransitionState('out');
    }, 580);

    const timerOut = setTimeout(() => {
      setTransitionState('hidden');
    }, 1230);

    return () => {
      clearTimeout(timerIn);
      clearTimeout(timerOut);
    };
  }, [currentRoute]);

  if (transitionState === 'hidden') return null;

  return (
    <div
      className={`vt fixed inset-0 z-[90] bg-[var(--lm)] grid place-items-center font-[600] text-[clamp(40px,9vw,140px)] font-[var(--d)] text-[#0a0a0a] tracking-[-0.045em] pointer-events-none transition-transform duration-[650ms] ${
        transitionState === 'in'
          ? 'translate-y-0 cubic-bezier(0.7,0,0.2,1)'
          : '-translate-y-full cubic-bezier(0.7,0,0.2,1)'
      }`}
      id="vt"
    >
      {routeName}
    </div>
  );
};
