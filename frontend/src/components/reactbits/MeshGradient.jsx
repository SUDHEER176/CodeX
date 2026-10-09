import React, { useEffect, useRef } from 'react';

/**
 * MeshGradient
 * High-performance flowing multi-color mesh gradient with fine grain texture
 * Built for React Bits Pro Hero-22 style centered launch hero
 */
export default function MeshGradient({
  className = "",
  colors = ["#ff5500", "#ff3300", "#3b82f6", "#1e1b4b", "#000000"],
  speed = 0.003,
  grain = true,
  opacity = 0.65
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    resize();
    window.addEventListener('resize', resize);

    // Color nodes in the mesh
    const nodes = [
      { x: 0.25, y: 0.2, vx: 0.0008, vy: 0.0006, color: colors[0] || '#ff5500', r: 0.6 },
      { x: 0.75, y: 0.3, vx: -0.0007, vy: 0.0009, color: colors[1] || '#ff3300', r: 0.55 },
      { x: 0.5, y: 0.75, vx: 0.0009, vy: -0.0007, color: colors[2] || '#3b82f6', r: 0.65 },
      { x: 0.85, y: 0.8, vx: -0.0008, vy: -0.0008, color: colors[3] || '#1e1b4b', r: 0.7 },
      { x: 0.15, y: 0.7, vx: 0.0006, vy: 0.0008, color: colors[4] || '#ff8800', r: 0.5 }
    ];

    const render = () => {
      time += speed;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);

      // Draw flowing mesh radial gradients
      nodes.forEach((node, i) => {
        const cx = (node.x + Math.sin(time + i * 1.5) * 0.15) * w;
        const cy = (node.y + Math.cos(time + i * 1.2) * 0.15) * h;
        const radius = node.r * Math.max(w, h);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, node.color);
        grad.addColorStop(1, 'transparent');

        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, speed]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity }}
      />
      {grain && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}
        />
      )}
    </div>
  );
}
