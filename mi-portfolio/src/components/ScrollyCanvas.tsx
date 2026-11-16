import React, { useEffect, useRef } from 'react';

interface ScrollyCanvasProps {
  scrollProgress: number; // 0 to 100
  theme: 'light' | 'dark';
}

interface Node3D {
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  hue: number;
  speed: number;
  phase: number;
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ scrollProgress, theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressRef = useRef<number>(scrollProgress);
  const themeRef = useRef<'light' | 'dark'>(theme);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    progressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isPaused = document.visibilityState === 'hidden';
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleVisibilityChange = () => {
      isPaused = document.visibilityState === 'hidden';
      cancelAnimationFrame(animationFrameId);
      if (!isPaused && !prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Adaptive node count: lighter on mobile for 60fps & battery efficiency
    const NODE_COUNT = window.innerWidth < 768 ? 65 : 135;
    const nodes: Node3D[] = Array.from({ length: NODE_COUNT }, (_, i) => {
      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);

      return {
        baseX: Math.cos(theta) * Math.sin(phi),
        baseY: Math.sin(theta) * Math.sin(phi),
        baseZ: Math.cos(phi),
        size: 1.3 + (i % 4) * 0.65,
        hue: i % 3 === 0 ? 160 : i % 3 === 1 ? 192 : 265, // Emerald, Cyan, Quantum Violet
        speed: 0.4 + (i % 7) * 0.12,
        phase: i * 0.25,
      };
    });

    let smoothScroll = 0;
    let smoothMouseX = 0;
    let smoothMouseY = 0;
    let time = 0;

    const render = () => {
      time += 0.012;
      const targetScroll = progressRef.current / 100; // 0 to 1
      smoothScroll += (targetScroll - smoothScroll) * 0.06;

      smoothMouseX += (mouseRef.current.x - smoothMouseX) * 0.05;
      smoothMouseY += (mouseRef.current.y - smoothMouseY) * 0.05;

      const isDark = themeRef.current === 'dark';

      ctx.clearRect(0, 0, width, height);

      // Subtle atmospheric core glow that shifts with scroll chapter
      const centerX = width * 0.5 + smoothMouseX * 45;
      const centerY = height * 0.5 + smoothMouseY * 35;
      const radius = Math.min(width, height) * (0.34 + Math.sin(smoothScroll * Math.PI) * 0.12);

      const coreGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        radius * 1.45
      );

      if (isDark) {
        coreGlow.addColorStop(0, 'rgba(16, 185, 129, 0.11)');
        coreGlow.addColorStop(0.45, 'rgba(6, 182, 212, 0.05)');
        coreGlow.addColorStop(1, 'rgba(5, 8, 13, 0)');
      } else {
        coreGlow.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
        coreGlow.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
        coreGlow.addColorStop(1, 'rgba(248, 250, 252, 0)');
      }

      ctx.fillStyle = coreGlow;
      ctx.fillRect(0, 0, width, height);

      // Rotation angles driven by scroll progress + mouse parallax + time
      const rotY = time * 0.22 + smoothScroll * Math.PI * 3.2 + smoothMouseX * 0.45;
      const rotX = Math.sin(time * 0.15) * 0.25 + smoothScroll * Math.PI * 1.4 - smoothMouseY * 0.35;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Morphing geometry across scroll chapters:
      // 0.0 - 0.3: Fibonacci Sphere (Hero / Profile)
      // 0.3 - 0.65: Toroidal / Double Helix Matrix (Tech & Projects)
      // 0.65 - 1.0: Quantum Wave Lattice (Experience & Contact)
      const morphTorus = Math.sin(Math.min(1, Math.max(0, (smoothScroll - 0.15) * 2.2)) * Math.PI);
      const morphLattice = Math.min(1, Math.max(0, (smoothScroll - 0.55) * 2.2));

      const projected: {
        x: number;
        y: number;
        z: number;
        scale: number;
        size: number;
        hue: number;
        alpha: number;
      }[] = [];

      const fov = 560;

      for (let i = 0; i < NODE_COUNT; i++) {
        const n = nodes[i];
        const pulse = Math.sin(time * n.speed + n.phase) * 0.08;

        // Base sphere coordinates
        let x = n.baseX * (1 + pulse);
        let y = n.baseY * (1 + pulse);
        let z = n.baseZ * (1 + pulse);

        // Morph towards architectural ring/torus in middle chapters
        if (morphTorus > 0.01) {
          const angle = (i / NODE_COUNT) * Math.PI * 8 + time * 0.3;
          const ringRadius = 1.15 + 0.35 * Math.cos(angle * 2);
          const tx = Math.cos(angle) * ringRadius;
          const ty = Math.sin(angle * 1.5) * 0.55;
          const tz = Math.sin(angle) * ringRadius;

          x = x * (1 - morphTorus) + tx * morphTorus;
          y = y * (1 - morphTorus) + ty * morphTorus;
          z = z * (1 - morphTorus) + tz * morphTorus;
        }

        // Morph towards wide quantum wave horizon in final chapters
        if (morphLattice > 0.01) {
          const gx = ((i % 15) / 14 - 0.5) * 3.0;
          const gz = (Math.floor(i / 15) / 9 - 0.5) * 2.4;
          const gy = Math.sin(gx * 2.2 + time * 1.4) * 0.35 + Math.cos(gz * 2.2 + time) * 0.25;

          x = x * (1 - morphLattice) + gx * morphLattice;
          y = y * (1 - morphLattice) + gy * morphLattice;
          z = z * (1 - morphLattice) + gz * morphLattice;
        }

        // Scale to viewport
        x *= radius;
        y *= radius;
        z *= radius;

        // 3D Rotation Y
        const rx1 = x * cosY - z * sinY;
        const rz1 = z * cosY + x * sinY;

        // 3D Rotation X
        const ry2 = y * cosX - rz1 * sinX;
        const rz2 = rz1 * cosX + y * sinX;

        const depth = fov + rz2 + radius * 0.6;
        if (depth <= 10) continue;

        const scale = fov / depth;
        const screenX = centerX + rx1 * scale;
        const screenY = centerY + ry2 * scale;

        const depthAlpha = Math.max(0.08, Math.min(0.85, (rz2 + radius) / (2 * radius)));

        projected.push({
          x: screenX,
          y: screenY,
          z: rz2,
          scale,
          size: n.size * scale,
          hue: n.hue,
          alpha: depthAlpha,
        });
      }

      // Draw neural / reactive flow filaments between nearby 3D nodes
      const maxDist = Math.min(width, height) * 0.14;
      const maxDistSq = maxDist * maxDist;

      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        let connections = 0;
        for (let j = i + 1; j < projected.length; j++) {
          if (connections >= 3) break;
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            connections++;
            const distRatio = 1 - distSq / maxDistSq;
            const lineAlpha = distRatio * Math.min(p1.alpha, p2.alpha) * (isDark ? 0.26 : 0.18);
            ctx.strokeStyle = `hsla(${p1.hue}, 85%, ${isDark ? 60 : 42}%, ${lineAlpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.fillStyle = `hsla(${p.hue}, 90%, ${isDark ? 68 : 45}%, ${(p.alpha * (isDark ? 0.9 : 0.65)).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, p.size), 0, Math.PI * 2);
        ctx.fill();
      }

      if (!isPaused && !prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (!isPaused) {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
