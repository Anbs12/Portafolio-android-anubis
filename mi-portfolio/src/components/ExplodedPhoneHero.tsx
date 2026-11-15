import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, ArrowUpRight, Layers, Cpu, Database, Sparkles, ShieldCheck } from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';

interface ExplodedPhoneHeroProps {
  currentPortfolioData: PortfolioDataType;
  currentDynamicPhraseIndex: number;
  language: 'es' | 'en';
  isXRay: boolean;
  onScrollToSection: (sectionId: string) => void;
}

export const ExplodedPhoneHero: React.FC<ExplodedPhoneHeroProps> = ({
  currentPortfolioData,
  currentDynamicPhraseIndex,
  language,
  isXRay,
  onScrollToSection,
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [explodeProgress, setExplodeProgress] = useState<number>(0); // 0 (assembled) to 1 (fully exploded)
  const [mouseTilt, setMouseTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeLayerIndex, setActiveLayerIndex] = useState<number | null>(null);

  const isEs = language === 'es';

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollable = rect.height - windowHeight;
      if (scrollable <= 0) return;

      const raw = -rect.top / scrollable;
      const clamped = Math.min(1, Math.max(0, raw));
      setExplodeProgress(clamped);

      // Highlight individual layers as the user scrolls through the explosion
      if (clamped < 0.15) {
        setActiveLayerIndex(null);
      } else if (clamped < 0.38) {
        setActiveLayerIndex(0);
      } else if (clamped < 0.6) {
        setActiveLayerIndex(1);
      } else if (clamped < 0.82) {
        setActiveLayerIndex(2);
      } else {
        setActiveLayerIndex(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x: ny * -12, y: nx * 16 });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  const layers = [
    {
      id: 'L1',
      code: 'LAYER 01 // UI & PRESENTATION',
      title: 'Jetpack Compose & Material 3',
      subtitle: isEs
        ? 'Interfaces declarativas a 60fps, animaciones fluidas y diseño adaptativo.'
        : '60fps declarative UI, fluid animations, and adaptive Material 3 design.',
      techs: ['Jetpack Compose', 'XML', 'Material Design 3', 'Coil', 'Navigation'],
      color: 'from-emerald-400/30 to-teal-500/20 border-emerald-400/60',
      badgeColor: 'text-emerald-300 bg-emerald-500/20 border-emerald-400/40',
      icon: <Smartphone className="w-4 h-4 text-emerald-400" />,
    },
    {
      id: 'L2',
      code: 'LAYER 02 // STATE & REACTIVE STREAMS',
      title: 'ViewModel, StateFlow & Coroutines',
      subtitle: isEs
        ? 'Gestión de estado unidireccional (UDF) y concurrencia asíncrona sin bloqueos.'
        : 'Unidirectional Data Flow (UDF) and non-blocking asynchronous concurrency.',
      techs: ['Kotlin Coroutines', 'Kotlin Flows', 'MVVM', 'Android Lifecycle'],
      color: 'from-cyan-400/30 to-sky-500/20 border-cyan-400/60',
      badgeColor: 'text-cyan-300 bg-cyan-500/20 border-cyan-400/40',
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
    },
    {
      id: 'L3',
      code: 'LAYER 03 // DOMAIN & DEPENDENCY GRAPH',
      title: 'Clean Architecture & DI (Hilt / Koin)',
      subtitle: isEs
        ? 'Reglas de negocio puras, inyección de dependencias modular y pruebas unitarias.'
        : 'Pure business rules, modular dependency injection, and unit testing.',
      techs: ['Clean Architecture', 'Dagger Hilt', 'Koin', 'JUnit', 'Robolectric'],
      color: 'from-purple-400/30 to-indigo-500/20 border-purple-400/60',
      badgeColor: 'text-purple-300 bg-purple-500/20 border-purple-400/40',
      icon: <Layers className="w-4 h-4 text-purple-400" />,
    },
    {
      id: 'L4',
      code: 'LAYER 04 // DATA, NETWORK & HARDWARE CORE',
      title: 'Retrofit, Ktor, Room & SQL / AI',
      subtitle: isEs
        ? 'Persistencia local, APIs REST/GraphQL, backend Ktor y hardware CameraX / ML Kit.'
        : 'Local persistence, REST/GraphQL APIs, Ktor backend, and CameraX / ML Kit hardware.',
      techs: ['Retrofit', 'Ktor', 'Room DB', 'GraphQL', 'Firebase', 'CameraX'],
      color: 'from-amber-400/30 to-orange-500/20 border-amber-400/60',
      badgeColor: 'text-amber-300 bg-amber-500/20 border-amber-400/40',
      icon: <Database className="w-4 h-4 text-amber-400" />,
    },
  ];

  // Calculate 3D rotation of the entire stack as it explodes
  const baseRotateX = 12 + explodeProgress * 36 + mouseTilt.x * 0.5;
  const baseRotateY = -14 - explodeProgress * 18 + mouseTilt.y * 0.6;
  const baseRotateZ = explodeProgress * 8;

  return (
    <div ref={trackRef} className="relative min-h-[250vh] w-full">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="sticky top-0 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden"
      >
        {/* Ambient volumetric aura */}
        <div
          style={{
            transform: `scale(${(1 + explodeProgress * 0.35).toFixed(3)})`,
          }}
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] sm:w-[760px] sm:h-[760px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-cyan-500/12 to-purple-500/18 blur-[120px] transition-transform duration-300"
        />

        <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ==================== COLUMNA IZQUIERDA (7 cols): BRANDING MONUMENTAL + TELEMETRÍA ==================== */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill de Estado / Rol */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/85 dark:bg-white/[0.07] backdrop-blur-xl border border-slate-200/80 dark:border-white/15 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-mono mb-6 shadow-[0_0_30px_rgba(16,185,129,0.18)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400" />
              </span>
              <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{currentPortfolioData.personal.titulo}</span>
              {isXRay && (
                <span className="ml-1 px-2 py-0.5 rounded bg-emerald-500/20 text-[10px] text-emerald-300 border border-emerald-400/30">
                  X-RAY INSPECTOR ON
                </span>
              )}
            </div>

            {/* Nombre Monumental */}
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-extrabold font-hero-name tracking-tight bg-gradient-to-b from-slate-950 via-slate-800 to-slate-500 dark:from-white dark:via-white dark:to-slate-400 bg-clip-text text-transparent mb-5 drop-shadow-sm">
              {currentPortfolioData.personal.nombre}
            </h1>

            {/* Título Dinámico Cinético */}
            <div className="space-y-2 mb-8">
              <p className="text-base sm:text-xl md:text-2xl font-hero-title text-slate-700 dark:text-slate-200/90 font-normal leading-relaxed">
                {currentPortfolioData.hero.staticHeroTitlePartOne}
              </p>

              <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start">
                <span
                  key={currentDynamicPhraseIndex}
                  className="inline-block px-4 py-1 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 dark:border-emerald-400/30 backdrop-blur-md text-xl sm:text-3xl md:text-4xl font-bold font-heading bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-300 dark:via-teal-200 dark:to-cyan-300 bg-clip-text text-transparent animate-fade-in-out-single"
                >
                  {currentPortfolioData.hero.dynamicPhrases[currentDynamicPhraseIndex]}
                </span>
              </div>

              <p className="text-base sm:text-xl md:text-2xl font-hero-title text-slate-700 dark:text-slate-200/90 font-normal leading-relaxed">
                {currentPortfolioData.hero.staticHeroTitlePartTwo}
              </p>
            </div>

            {/* Panel Dinámico que cambia según la capa del teléfono que se está desensamblando */}
            <div className="mb-8 rounded-2xl p-4 sm:p-5 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg text-left transition-all duration-300">
              {activeLayerIndex === null ? (
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
                        {isEs
                          ? 'INTERACCIÓN SCROLL-STOPPING // DESLIZA HACIA ABAJO'
                          : 'SCROLL-STOPPING INTERACTION // SCROLL DOWN'}
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                        {isEs
                          ? 'Haz scroll para desensamblar el dispositivo Android en sus 4 capas de ingeniería.'
                          : 'Scroll down to disassemble the Android device into its 4 engineering layers.'}
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/[0.06] text-slate-500 dark:text-slate-300">
                    {Math.round(explodeProgress * 100)}%
                  </span>
                </div>
              ) : (
                <div className="animate-fadeInUp">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {layers[activeLayerIndex].icon}
                      {layers[activeLayerIndex].code}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      DECONSTRUCTED {Math.round(explodeProgress * 100)}%
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold font-heading text-slate-900 dark:text-white mb-1">
                    {layers[activeLayerIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3">
                    {layers[activeLayerIndex].subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {layers[activeLayerIndex].techs.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-white/[0.07] text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Botones de Acción (CTAs) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onScrollToSection('proyectos')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.65)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{currentPortfolioData.hero.buttonProjects}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={() => onScrollToSection('contacto')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-slate-800 dark:text-white bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 backdrop-blur-md border border-slate-300/80 dark:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{currentPortfolioData.hero.buttonContact}</span>
              </button>
            </div>
          </div>

          {/* ==================== COLUMNA DERECHA (5 cols): DISPOSITIVO ANDROID 3D EXPLODED VIEW ==================== */}
          <div className="lg:col-span-5 flex items-center justify-center [perspective:1600px] min-h-[420px] sm:min-h-[500px]">
            <div
              style={{
                transform: `rotateX(${baseRotateX.toFixed(2)}deg) rotateY(${baseRotateY.toFixed(2)}deg) rotateZ(${baseRotateZ.toFixed(2)}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-[260px] sm:w-[290px] h-[430px] sm:h-[460px]"
            >
              {/* Haces de luz verticales que conectan las 4 capas cuando se desensamblan */}
              {explodeProgress > 0.05 && (
                <div
                  style={{ opacity: Math.min(1, explodeProgress * 1.5) }}
                  className="pointer-events-none absolute inset-6 border-2 border-dashed border-emerald-400/35 rounded-[34px]"
                />
              )}

              {layers.map((layer, idx) => {
                // Separate each layer vertically and in Z-space as explodeProgress goes 0 -> 1
                const spreadFactor = (1.5 - idx) * explodeProgress;
                const translateZ = spreadFactor * 75;
                const translateY = spreadFactor * -48;
                const isSelected = activeLayerIndex === idx;

                return (
                  <div
                    key={layer.id}
                    onClick={() => setActiveLayerIndex(idx)}
                    style={{
                      transform: `translate3d(0px, ${translateY.toFixed(1)}px, ${translateZ.toFixed(1)}px)`,
                      transition: 'transform 0.18s ease-out, border-color 0.3s ease',
                    }}
                    className={`cursor-pointer absolute inset-0 rounded-[38px] p-4 backdrop-blur-xl bg-gradient-to-br ${
                      layer.color
                    } border-2 ${
                      isSelected
                        ? 'ring-2 ring-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.45)]'
                        : 'shadow-[0_20px_50px_rgba(0,0,0,0.55)]'
                    } flex flex-col justify-between overflow-hidden`}
                  >
                    {/* Si es la capa superior (L1) y el teléfono aún está ensamblado, mostrar la pantalla del sistema */}
                    {idx === 0 && explodeProgress < 0.18 ? (
                      <div className="h-full w-full rounded-[28px] bg-slate-950/95 border border-white/15 p-5 flex flex-col justify-between text-left relative overflow-hidden">
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span>ANUBIS // OS 15</span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                          <span>5G • 100%</span>
                        </div>

                        <div className="my-auto space-y-3">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-slate-950 shadow-lg">
                            <Smartphone className="w-6 h-6 stroke-[2.2]" />
                          </div>
                          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                            ANDROID ENGINEER
                          </div>
                          <div className="text-xl font-extrabold font-heading text-white leading-tight">
                            {currentPortfolioData.personal.nombre}
                          </div>
                          <div className="text-xs text-slate-300 leading-relaxed">
                            Kotlin • Jetpack Compose • Clean Architecture • MVVM
                          </div>

                          <div className="pt-2 grid grid-cols-2 gap-2">
                            <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10">
                              <div className="text-[9px] font-mono text-slate-400">CURRENT</div>
                              <div className="text-xs font-bold text-emerald-300 truncate">
                                MachBank - Bci
                              </div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10">
                              <div className="text-[9px] font-mono text-slate-400">PREVIOUS</div>
                              <div className="text-xs font-bold text-cyan-300 truncate">
                                Globant
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-emerald-300">
                          <span className="inline-flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5" /> PRODUCTION READY
                          </span>
                          <span>SCROLL ↓</span>
                        </div>
                      </div>
                    ) : (
                      /* Vista de Placa / Capa de Arquitectura Desensamblada */
                      <div className="h-full w-full rounded-[26px] bg-slate-950/85 border border-white/15 p-4 flex flex-col justify-between text-left">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${layer.badgeColor}`}
                          >
                            {layer.id}
                          </span>
                          <span className="text-[10px] font-mono text-slate-300 truncate">
                            {layer.code}
                          </span>
                        </div>

                        <div className="my-auto space-y-2">
                          <div className="flex items-center gap-2">
                            {layer.icon}
                            <h4 className="text-sm sm:text-base font-extrabold font-heading text-white">
                              {layer.title}
                            </h4>
                          </div>
                          <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
                            {layer.subtitle}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {layer.techs.map((t, ti) => (
                            <span
                              key={ti}
                              className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/10 text-white/90"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
