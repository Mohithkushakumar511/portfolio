import React, { useEffect, useRef } from 'react';

export const AmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width  = (canvas.width  = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const count = Math.min(Math.floor((width * height) / 24000), 50);
    const particles: {
      x: number; y: number; radius: number;
      vx: number; vy: number;
      alpha: number; alphaSpeed: number;
      color: string;
    }[] = [];

    for (let i = 0; i < count; i++) {
      const isBlue = Math.random() < 0.28;
      particles.push({
        x:          Math.random() * width,
        y:          Math.random() * height,
        radius:     Math.random() * 1.3 + 0.5,
        vx:         (Math.random() - 0.5) * 0.2,
        vy:         (Math.random() - 0.5) * 0.2,
        alpha:      Math.random() * 0.4 + 0.1,
        alphaSpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        color:      isBlue ? '75, 139, 255' : '220, 227, 234',
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    const handleMouse = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    window.addEventListener('mousemove', handleMouse);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;  if (p.x > width)  p.x = 0;
        if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;

        p.alpha += p.alphaSpeed;
        if (p.alpha > 0.5 || p.alpha < 0.08) p.alphaSpeed = -p.alphaSpeed;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x, dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(220, 227, 234, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      const grad = ctx.createRadialGradient(mouseX, mouseY, 10, mouseX, mouseY, 380);
      grad.addColorStop(0, 'rgba(75, 139, 255, 0.025)');
      grad.addColorStop(1, 'rgba(16, 24, 39, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      animId = requestAnimationFrame(render);
    };

    render();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
