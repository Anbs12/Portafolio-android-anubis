import React, { useEffect, useState } from 'react';

interface MagneticCursorHUDProps {
  isXRay: boolean;
}

interface RippleItem {
  id: number;
  x: number;
  y: number;
}

export const MagneticCursorHUD: React.FC<MagneticCursorHUDProps> = ({ isXRay }) => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState<boolean>(false);
  const [ripples, setRipples] = useState<RippleItem[]>([]);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    const updateEnabled = () => setEnabled(mq.matches);
    updateEnabled();
    mq.addEventListener('change', updateEnabled);
    return () => mq.removeEventListener('change', updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('button, a, input, [role="button"]');
      setIsHoveringInteractive(Boolean(interactive));
    };

    const handleMouseDown = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setRipples(prev => [...prev.slice(-4), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== id));
      }, 650);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[120] overflow-hidden">
      {/* Ondas hápticas visuales Material 3 al hacer clic */}
      {ripples.map(r => (
        <span
          key={r.id}
          style={{ left: r.x - 18, top: r.y - 18 }}
          className="absolute w-9 h-9 rounded-full border border-emerald-400/70 bg-emerald-400/20 animate-ripple"
        />
      ))}

      {/* Halo magnético del cursor */}
      <div
        style={{
          transform: `translate3d(${pos.x - (isHoveringInteractive ? 22 : 14)}px, ${
            pos.y - (isHoveringInteractive ? 22 : 14)
          }px, 0)`,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        }}
        className={`rounded-full border flex items-center justify-center ${
          isHoveringInteractive
            ? 'w-11 h-11 border-emerald-400/80 bg-emerald-400/10 shadow-[0_0_20px_rgba(16,185,129,0.35)]'
            : 'w-7 h-7 border-emerald-400/35 bg-transparent'
        }`}
      />

      {/* Coordenadas técnicas en vivo cuando el modo Engineering X-Ray está encendido */}
      {isXRay && pos.x > 0 && (
        <div
          style={{
            transform: `translate3d(${pos.x + 18}px, ${pos.y + 18}px, 0)`,
          }}
          className="px-2 py-0.5 rounded bg-slate-950/90 border border-emerald-500/40 text-[9px] font-mono text-emerald-300 whitespace-nowrap"
        >
          X:{pos.x} Y:{pos.y} {isHoveringInteractive ? '• HIT_TARGET' : ''}
        </div>
      )}
    </div>
  );
};
