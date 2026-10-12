import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let isVisible = false;
    let animId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        if (cursorRef.current) {
          cursorRef.current.style.opacity = '1';
        }
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      currentX += (targetX - currentX) * 0.3;
      currentY += (targetY - currentY) * 0.3;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cur fixed left-0 top-0 z-[99] pointer-events-none transition-opacity duration-200 opacity-0"
      style={{
        transform: 'translate3d(-100px, -100px, 0)'
      }}
    >
      <i
        className="absolute w-[20px] h-[20px] -mt-[3px] -ml-[3px] bg-[var(--lm)] rounded-[50%_50%_50%_0] -rotate-45"
        style={{
          boxShadow: '0 0 0 1.5px #0a0a0a'
        }}
      />
    </div>
  );
};
