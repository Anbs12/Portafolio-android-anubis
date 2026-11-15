import React, { useEffect, useRef, useState } from 'react';
import type { ProjectItem } from '../types/Project';
import type { PortfolioDataType } from '../types/Portfolio';
import { ProjectCard } from './ProjectCard';
import { Sparkles, Layers, ArrowDown } from 'lucide-react';

interface HorizontalSubProjectsDeckProps {
  subProyectos: ProjectItem[];
  currentPortfolioData: PortfolioDataType;
  language: 'es' | 'en';
  onSkipNext?: () => void;
}

export const HorizontalSubProjectsDeck: React.FC<HorizontalSubProjectsDeckProps> = ({
  subProyectos,
  currentPortfolioData,
  language,
  onSkipNext,
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const [deckProgress, setDeckProgress] = useState<number>(0); // 0 to 1
  const [maxScrollPx, setMaxScrollPx] = useState<number>(0);
  const [showGrid, setShowGrid] = useState<boolean>(false);

  // Medición exacta en píxeles (scrollWidth - clientWidth) para que en cualquier pantalla
  // (móvil de 375px o monitor 4K) el 100% del scroll muestre hasta la última tarjeta sin cortar ninguna.
  useEffect(() => {
    const updateWidths = () => {
      if (!stripRef.current) return;
      const totalWidth = stripRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const paddingAllowance = viewportWidth < 640 ? 32 : 160;
      setMaxScrollPx(Math.max(0, totalWidth - viewportWidth + paddingAllowance));
    };

    updateWidths();
    window.addEventListener('resize', updateWidths, { passive: true });
    return () => window.removeEventListener('resize', updateWidths);
  }, [subProyectos.length, showGrid]);

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current || showGrid) return;
      const rect = trackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollable = rect.height - windowHeight;
      if (scrollable <= 0) return;

      const raw = -rect.top / scrollable;
      setDeckProgress(Math.min(1, Math.max(0, raw)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showGrid]);

  const currentTranslatePx = -(deckProgress * maxScrollPx);

  return (
    <div
      ref={trackRef}
      className={showGrid ? 'relative py-20' : 'relative min-h-[230vh] w-full'}
    >
      <div
        className={
          showGrid
            ? 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'
            : 'sticky top-0 min-h-screen flex flex-col justify-center py-20 overflow-hidden'
        }
      >
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
              <Sparkles className="w-3 h-3" />{' '}
              {language === 'es'
                ? '04.B // CARRUSEL HORIZONTAL DE APPS'
                : '04.B // HORIZONTAL APP SWITCHER DECK'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              {currentPortfolioData.subProjectsSettings.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
              {currentPortfolioData.subProjectsSettings.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {!showGrid && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 text-xs font-mono text-cyan-600 dark:text-cyan-400">
                <span>
                  {language === 'es' ? 'CARRUSEL' : 'DECK'}{' '}
                  {Math.round(deckProgress * 100)}%
                </span>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowGrid(prev => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border border-slate-300/80 dark:border-white/15 hover:border-cyan-500/50 transition-all shadow-sm"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-500" />
              <span>
                {showGrid
                  ? language === 'es'
                    ? 'Modo Carrusel 3D'
                    : '3D Deck Mode'
                  : language === 'es'
                  ? 'Ver en Cuadrícula'
                  : 'Grid View'}
              </span>
            </button>

            {onSkipNext && !showGrid && (
              <button
                type="button"
                onClick={onSkipNext}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-200/60 dark:bg-white/[0.06] hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"
              >
                <span>{language === 'es' ? 'Saltar ↓' : 'Skip ↓'}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {!showGrid ? (
          /* Carrusel Horizontal Cinético impulsado por medición exacta en píxeles */
          <div className="w-full overflow-visible px-4 sm:px-12 lg:px-20">
            <div
              ref={stripRef}
              style={{
                transform: `translate3d(${currentTranslatePx.toFixed(1)}px, 0, 0)`,
                transition: 'transform 0.12s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              className="flex items-stretch gap-6 sm:gap-7 w-max"
            >
              {subProyectos.map((proyecto, idx) => (
                <div
                  key={proyecto.id}
                  className="w-[82vw] sm:w-[360px] md:w-[385px] flex-shrink-0"
                >
                  <div className="mb-2 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                    <span>
                      LAB // 0{idx + 1} {language === 'es' ? 'DE' : 'OF'} 0
                      {subProyectos.length}
                    </span>
                    <span>ANDROID KOTLIN</span>
                  </div>
                  <ProjectCard
                    proyecto={proyecto}
                    currentPortfolioData={currentPortfolioData}
                  />
                </div>
              ))}
            </div>

            {/* Barra de progreso horizontal del carrusel */}
            <div className="max-w-md mx-auto mt-8 h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
              <div
                style={{ width: `${Math.max(10, deckProgress * 100)}%` }}
                className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-150"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch animate-fadeInUp">
            {subProyectos.map(proyecto => (
              <ProjectCard
                key={proyecto.id}
                proyecto={proyecto}
                currentPortfolioData={currentPortfolioData}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
