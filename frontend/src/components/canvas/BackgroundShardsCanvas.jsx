import React, { useEffect, useRef } from 'react';

export const BackgroundShardsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Stars & 3D Shards configuration
    const starCount = 100;
    const shardCount = width < 700 ? 30 : 60;

    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.1 + 0.4,
      alpha: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.008 + 0.004
    }));

    const shards = Array.from({ length: shardCount }, () => {
      const z = Math.random() * 0.75 + 0.25;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        scaleX: Math.cos(Math.random() * Math.PI * 2),
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.008,
        speedY: Math.random() * 0.25 + 0.1,
        fillStyle: `rgba(215, 215, 215, ${(z * 0.08).toFixed(3)})`,
        strokeStyle: `rgba(255, 255, 255, ${(z * 0.25).toFixed(3)})`,
        points: [
          { x: -12, y: -18 },
          { x: 14, y: -6 },
          { x: 8, y: 16 },
          { x: -10, y: 12 }
        ]
      };
    });

    let glowLeft;
    const createGlowGradient = () => {
      glowLeft = ctx.createRadialGradient(
        0, height * 0.52, 0,
        0, height * 0.52, height * 0.7
      );
      glowLeft.addColorStop(0, 'rgba(242, 240, 234, 0.07)');
      glowLeft.addColorStop(1, 'transparent');
    };
    createGlowGradient();

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMX = mouseX;
    let targetMY = mouseY;

    const handleMouseMove = (e) => {
      targetMX = e.clientX;
      targetMY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createGlowGradient();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    const render = () => {
      mouseX += (targetMX - mouseX) * 0.04;
      mouseY += (targetMY - mouseY) * 0.04;

      ctx.fillStyle = '#030303';
      ctx.fillRect(0, 0, width, height);

      // Render Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.2) star.speed = -star.speed;
        ctx.fillStyle = `rgba(242, 240, 234, ${star.alpha.toFixed(2)})`;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      }

      // Render Cached Radial Glows
      if (glowLeft) {
        ctx.fillStyle = glowLeft;
        ctx.fillRect(0, 0, width, height);
      }

      // Render Shards
      const offsetX = (mouseX - width / 2) * 0.05;
      const offsetY = (mouseY - height / 2) * 0.03;

      for (let i = 0; i < shards.length; i++) {
        const s = shards[i];
        s.y -= s.speedY;
        if (s.y < -30) s.y = height + 30;
        s.rot += s.vRot;
        s.scaleX = Math.cos(s.rot);

        ctx.save();
        ctx.translate(s.x + offsetX * s.z, s.y + offsetY * s.z);
        ctx.scale(Math.abs(s.scaleX) < 0.12 ? 0.12 : s.scaleX, 1);

        ctx.beginPath();
        for (let j = 0; j < s.points.length; j++) {
          const pt = s.points[j];
          if (j === 0) ctx.moveTo(pt.x * s.z, pt.y * s.z);
          else ctx.lineTo(pt.x * s.z, pt.y * s.z);
        }
        ctx.closePath();

        ctx.fillStyle = s.fillStyle;
        ctx.fill();
        ctx.strokeStyle = s.strokeStyle;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030303]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, transparent 35%, #000000cc 100%)'
        }}
      />
      <i
        className="absolute inset-0 z-[1] opacity-[0.07] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px'
        }}
      />
    </div>
  );
};
