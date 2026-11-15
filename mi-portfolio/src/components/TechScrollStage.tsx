import React, { useEffect, useRef, useState } from 'react';
import type { TechnologyCategory, TechnologyItem } from '../types/Technologies';
import { TechCard } from './TechCard';
import { QuantumMisteryCard } from './QunatumMisteryCard';
import { Cpu, Layers, Sparkles, Play, ArrowDown, CheckCircle2 } from 'lucide-react';

interface TechScrollStageProps {
  title: string;
  subtitle: string;
  categories: TechnologyCategory[];
  quantumItems?: TechnologyItem[];
  language: 'es' | 'en';
  onSkipNext?: () => void;
}

export const TechScrollStage: React.FC<TechScrollStageProps> = ({
  title,
  subtitle,
  categories,
  quantumItems,
  language,
  onSkipNext,
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const nonEmptyCategories = categories.filter(cat => cat.items.length > 0);
  const totalSteps = nonEmptyCategories.length;

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [stageProgress, setStageProgress] = useState<number>(0);
  const [showAllGrid, setShowAllGrid] = useState<boolean>(false);

  // Simulador interactivo "Run Request Flow (UDF)"
  const [isSimulatingFlow, setIsSimulatingFlow] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(0);

  const allTechNames = nonEmptyCategories.flatMap(c => c.items.map(i => i.name));
  const isEs = language === 'es';

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current || showAllGrid) return;
      const rect = trackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDistance = rect.height - windowHeight;

      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const rawRatio = Math.min(1, Math.max(0, scrolled / scrollableDistance));
      setStageProgress(rawRatio);

      const calculatedIndex = Math.min(
        totalSteps - 1,
        Math.max(0, Math.floor(rawRatio * totalSteps))
      );
      setActiveIndex(calculatedIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSteps, showAllGrid]);

  // Ejecutar simulación de petición unidireccional (UDF) a través de las capas
  const triggerFlowSimulation = () => {
    if (isSimulatingFlow) return;
    setIsSimulatingFlow(true);
    setSimStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < totalSteps) {
        setSimStep(current);
        setActiveIndex(current);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsSimulatingFlow(false);
        }, 600);
      }
    }, 420);
  };

  const jumpToCategory = (index: number) => {
    setActiveIndex(index);
    if (!trackRef.current || showAllGrid) return;

    const rect = trackRef.current.getBoundingClientRect();
    const absoluteTrackTop = window.scrollY + rect.top;
    const scrollableDistance = rect.height - window.innerHeight;
    const targetScrollY =
      absoluteTrackTop + ((index + 0.35) / totalSteps) * scrollableDistance;

    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  const activeCategory = nonEmptyCategories[activeIndex] || nonEmptyCategories[0];

  return (
    <div className="w-full">
      {/* ==================== CONTENEDOR SCROLL-STOPPING CALIBRADO (260vh) ==================== */}
      <div
        ref={trackRef}
        className={showAllGrid ? 'relative py-20' : 'relative min-h-[260vh]'}
      >
        <div
          className={
            showAllGrid
              ? 'relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'
              : 'sticky top-0 min-h-screen flex flex-col justify-between py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden'
          }
        >
          {/* Luz ambiental reactiva */}
          <div
            style={{
              transform: `translate3d(${(stageProgress - 0.5) * 180}px, 0, 0)`,
            }}
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-emerald-500/12 via-cyan-500/10 to-purple-500/12 blur-[110px] transition-transform duration-300"
          />

          <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center">
            {/* Cabecera + Controles Interactivos (Simular Petición UDF / Expandir / Saltar) */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
                  <Sparkles className="w-3 h-3" />
                  <span>
                    {isEs
                      ? '03 // ARQUITECTURA INTERACTIVA'
                      : '03 // SCROLL-STOPPING ARCHITECTURE'}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                  {title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
                  {subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 self-start md:self-end">
                {/* Botón "Simular Petición UDF (Run Flow)" */}
                {!showAllGrid && (
                  <button
                    type="button"
                    onClick={triggerFlowSimulation}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow-md ${
                      isSimulatingFlow
                        ? 'bg-emerald-400 text-slate-950 animate-pulse shadow-[0_0_25px_#34d399]'
                        : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>
                      {isSimulatingFlow
                        ? isEs
                          ? `Ejecutando Capa 0${simStep + 1}...`
                          : `Running Layer 0${simStep + 1}...`
                        : isEs
                        ? 'Simular Flujo de App'
                        : 'Simulate App Flow'}
                    </span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setShowAllGrid(prev => !prev)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border border-slate-300/80 dark:border-white/15 hover:border-emerald-500/50 transition-all shadow-sm"
                >
                  <Layers className="w-3.5 h-3.5 text-emerald-500" />
                  <span>
                    {showAllGrid
                      ? isEs
                        ? 'Modo Scroll-Stopping'
                        : 'Scroll-Stopping Mode'
                      : isEs
                      ? 'Expandir Todo el Stack'
                      : 'Expand Full Stack'}
                  </span>
                </button>

                {onSkipNext && !showAllGrid && (
                  <button
                    type="button"
                    onClick={onSkipNext}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-200/60 dark:bg-white/[0.06] hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"
                  >
                    <span>{isEs ? 'Saltar ↓' : 'Skip ↓'}</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {!showAllGrid ? (
              /* ==================== ESCENARIO INTERACTIVO ANCLADO (SCROLL-STOPPING) ==================== */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Columna Izquierda (5 cols): El "Reactor de Arquitectura" SVG + Selector de Capas */}
                <div className="lg:col-span-5 flex flex-col gap-5">
                  <div className="relative rounded-3xl p-6 bg-white/80 dark:bg-slate-900/65 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 shadow-[0_12px_40px_rgb(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgb(0,0,0,0.45)] overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

                    {/* Indicador de progreso del pin */}
                    <div className="flex items-center justify-between text-xs font-mono mb-4">
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        {isEs ? 'CAPA' : 'LAYER'} 0{activeIndex + 1} / 0{totalSteps}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500">
                        {isSimulatingFlow ? (
                          <span className="text-emerald-400 font-bold">
                            {isEs
                              ? '⚡ PAQUETE UDF: 16.6ms (60FPS)'
                              : '⚡ UDF PACKET: 16.6ms (60FPS)'}
                          </span>
                        ) : (
                          <span>
                            {Math.round(stageProgress * 100)}%{' '}
                            {isEs ? 'SINCRONIZADO' : 'SYNCED'}
                          </span>
                        )}
                      </span>
                    </div>

                    {/* Visualizador Vectorial de Capas de Arquitectura */}
                    <div className="relative h-44 flex items-center justify-center my-1">
                      <svg
                        viewBox="0 0 360 180"
                        className="w-full h-full overflow-visible"
                      >
                        <defs>
                          <linearGradient id="stageBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
                            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.85" />
                          </linearGradient>
                        </defs>

                        {/* Anillo orbital que gira según el scroll */}
                        <g
                          style={{
                            transform: `rotate(${(stageProgress * 360).toFixed(1)}deg)`,
                            transformOrigin: '100px 90px',
                          }}
                        >
                          <circle
                            cx="100"
                            cy="90"
                            r="68"
                            fill="none"
                            stroke="url(#stageBeam)"
                            strokeWidth="1.4"
                            strokeDasharray="10 8"
                            opacity="0.65"
                          />
                          <circle cx="100" cy="22" r="4" fill="#34d399" />
                          <circle cx="100" cy="158" r="3.5" fill="#38bdf8" />
                        </g>

                        {/* Discos apilados representando cada categoría */}
                        {nonEmptyCategories.map((_, idx) => {
                          const isCurrent = idx === activeIndex;
                          const yPos = 26 + idx * 18;
                          return (
                            <g
                              key={idx}
                              onClick={() => jumpToCategory(idx)}
                              className="cursor-pointer transition-all duration-300"
                            >
                              <ellipse
                                cx="100"
                                cy={yPos}
                                rx={isCurrent ? 48 : 36}
                                ry={isCurrent ? 11 : 8}
                                fill={
                                  isCurrent
                                    ? 'rgba(16, 185, 129, 0.32)'
                                    : 'rgba(148, 163, 184, 0.08)'
                                }
                                stroke={isCurrent ? '#34d399' : 'rgba(148, 163, 184, 0.35)'}
                                strokeWidth={isCurrent ? '2.2' : '1'}
                              />
                              {isCurrent && (
                                <>
                                  <path
                                    d={`M 148 ${yPos} C 220 ${yPos}, 240 90, 345 90`}
                                    fill="none"
                                    stroke="url(#stageBeam)"
                                    strokeWidth="2.4"
                                    strokeDasharray="6 4"
                                  />
                                  <circle
                                    cx="345"
                                    cy="90"
                                    r={isSimulatingFlow ? '7' : '4.5'}
                                    fill="#34d399"
                                  />
                                </>
                              )}
                            </g>
                          );
                        })}
                      </svg>
                    </div>

                    {/* Lista rápida de categorías sincronizadas con el scroll */}
                    <div className="space-y-1.5 mt-2">
                      {nonEmptyCategories.map((cat, idx) => {
                        const isCurrent = idx === activeIndex;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => jumpToCategory(idx)}
                            className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-left text-xs font-mono transition-all duration-300 ${
                              isCurrent
                                ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.35)] translate-x-1'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.05]'
                            }`}
                          >
                            <span className="truncate pr-2">
                              0{idx + 1}. {cat.category}
                            </span>
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] ${
                                isCurrent
                                  ? 'bg-slate-950/20 text-slate-950'
                                  : 'bg-slate-200/70 dark:bg-white/[0.06] text-slate-500 dark:text-slate-400'
                              }`}
                            >
                              {cat.items.length}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Columna Derecha (7 cols): Módulos de la Categoría Activa */}
                <div className="lg:col-span-7">
                  <div
                    key={activeIndex}
                    className="animate-fadeInUp rounded-3xl p-6 sm:p-8 bg-white/60 dark:bg-slate-900/45 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] shadow-xl"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/70 dark:border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                            {isEs
                              ? `MÓDULO DE ARQUITECTURA ACTIVO // 0${activeIndex + 1}`
                              : `ACTIVE ARCHITECTURE MODULE // 0${activeIndex + 1}`}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                            {activeCategory.category}
                          </h3>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>
                          {isEs ? 'Desliza para cambiar capa ↓' : 'Scroll to switch layer ↓'}
                        </span>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeCategory.items.map((tech, techIndex) => (
                        <TechCard key={techIndex} tech={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ==================== MODO EXPANDIDO (TODAS LAS CATEGORÍAS) ==================== */
              <div className="space-y-12 animate-fadeInUp">
                {nonEmptyCategories.map((categoryGroup, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-4 mb-5">
                      <span className="text-xs font-mono text-emerald-500 font-bold">
                        0{index + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-800 dark:text-slate-200">
                        {categoryGroup.category}
                      </h3>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-300 dark:from-white/15 to-transparent" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {categoryGroup.items.map((tech, techIndex) => (
                        <TechCard key={techIndex} tech={tech} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cinta Cinética de Telemetría en la base del escenario Scroll-Stopping */}
          {!showAllGrid && (
            <div className="relative z-10 max-w-6xl w-full mx-auto mt-8 pt-4 border-t border-slate-200/60 dark:border-white/[0.06] overflow-hidden">
              <div
                style={{
                  transform: `translateX(${(-stageProgress * 420).toFixed(1)}px)`,
                }}
                className="flex items-center gap-6 whitespace-nowrap text-xs font-mono text-slate-400 dark:text-slate-500 transition-transform duration-150"
              >
                {[...allTechNames, ...allTechNames].map((tName, idx) => (
                  <span key={idx} className="inline-flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-emerald-500/60" />
                    <span>{tName}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ==================== VITRINA CUÁNTICA PROCEDURAL ==================== */}
      {quantumItems && quantumItems.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-6 flex flex-col items-center">
          {quantumItems.map((tech, techIndex) => (
            <QuantumMisteryCard key={techIndex} tech={tech} language={language} />
          ))}
        </div>
      )}
    </div>
  );
};
