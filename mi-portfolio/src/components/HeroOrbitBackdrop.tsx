import React from 'react';

export const HeroOrbitBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
    >
      {/* ==================== ÓRBITA EXTERIOR: DISPOSITIVOS SAMSUNG GALAXY ==================== */}
      <div className="relative w-[340px] h-[340px] sm:w-[560px] sm:h-[560px] lg:w-[740px] lg:h-[740px] flex items-center justify-center opacity-45 sm:opacity-80 lg:opacity-95">
        {/* Anillo orbital exterior */}
        <div className="hero-orbit-cw absolute inset-0 rounded-full border border-dashed border-emerald-500/25 dark:border-emerald-400/20">
          {/* Nodos decorativos del anillo */}
          <span className="absolute top-[14.6%] right-[14.6%] w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/70 shadow-[0_0_10px_#34d399]" />
          <span className="absolute bottom-[14.6%] left-[14.6%] w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/70 shadow-[0_0_10px_#38bdf8]" />

          {/* Dispositivo Samsung #1 (Arriba — Galaxy S Ultra) */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <div className="hero-orbit-cw-counter flex flex-col items-center gap-1">
              <div className="relative w-11 h-20 sm:w-14 sm:h-24 rounded-[12px] p-[2px] bg-gradient-to-b from-slate-400 via-slate-600 to-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_20px_rgba(16,185,129,0.28)] ring-1 ring-white/25">
                {/* Botones laterales Galaxy */}
                <span className="absolute -right-[2px] top-5 w-[2px] h-3 rounded-r bg-emerald-400/80" />
                <span className="absolute -right-[2px] top-9 w-[2px] h-2 rounded-r bg-slate-300/70" />
                {/* Pantalla Dynamic AMOLED */}
                <div className="w-full h-full rounded-[10px] bg-slate-950 p-1.5 flex flex-col justify-between overflow-hidden relative">
                  <div className="w-1.5 h-1.5 mx-auto rounded-full bg-black ring-1 ring-white/20" />
                  <div className="space-y-1 my-auto">
                    <div className="h-2.5 rounded bg-gradient-to-r from-emerald-400/80 to-cyan-400/80" />
                    <div className="h-1.5 w-3/4 rounded bg-white/20" />
                    <div className="grid grid-cols-2 gap-1">
                      <div className="h-3 rounded bg-emerald-500/25 border border-emerald-400/40" />
                      <div className="h-3 rounded bg-cyan-500/25 border border-cyan-400/40" />
                    </div>
                  </div>
                  <div className="h-1 w-5 mx-auto rounded-full bg-white/30" />
                </div>
              </div>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold tracking-wider bg-white/80 dark:bg-slate-900/85 text-slate-700 dark:text-emerald-300 border border-slate-200/80 dark:border-emerald-400/25 backdrop-blur-md shadow-sm">
                Galaxy S Ultra
              </span>
            </div>
          </div>

          {/* Dispositivo Samsung #2 (Abajo — Galaxy Z Fold) */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
            <div className="hero-orbit-cw-counter flex flex-col items-center gap-1">
              <div className="relative w-16 h-14 sm:w-20 sm:h-16 rounded-[11px] p-[2px] bg-gradient-to-r from-slate-500 via-slate-700 to-slate-500 shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_20px_rgba(56,189,248,0.28)] ring-1 ring-white/25">
                {/* Bisagra central Fold */}
                <div className="w-full h-full rounded-[9px] bg-slate-950 p-1.5 grid grid-cols-2 gap-1 relative overflow-hidden">
                  <div className="rounded bg-gradient-to-br from-cyan-500/30 to-slate-900 border border-cyan-400/35 p-1 flex flex-col justify-between">
                    <div className="h-1.5 w-3/4 rounded bg-cyan-300/80" />
                    <div className="h-3 rounded bg-white/10" />
                  </div>
                  <div className="rounded bg-gradient-to-br from-purple-500/25 to-slate-900 border border-purple-400/35 p-1 flex flex-col justify-between">
                    <div className="h-1.5 w-2/3 rounded bg-emerald-300/80" />
                    <div className="h-3 rounded bg-emerald-400/20" />
                  </div>
                </div>
              </div>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold tracking-wider bg-white/80 dark:bg-slate-900/85 text-slate-700 dark:text-cyan-300 border border-slate-200/80 dark:border-cyan-400/25 backdrop-blur-md shadow-sm">
                Galaxy Z Fold
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== ÓRBITA INTERIOR: ICONO ANDROID + ICONO KOTLIN ==================== */}
      <div className="absolute w-[250px] h-[250px] sm:w-[410px] sm:h-[410px] lg:w-[530px] lg:h-[530px] flex items-center justify-center opacity-50 sm:opacity-85 lg:opacity-95">
        <div className="hero-orbit-ccw absolute inset-0 rounded-full border border-cyan-500/20 dark:border-cyan-400/15">
          {/* Icono de Android (Izquierda) */}
          <div className="absolute top-1/2 -left-6 sm:-left-7 -translate-y-1/2">
            <div className="hero-orbit-ccw-counter flex flex-col items-center gap-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-emerald-500/35 shadow-[0_8px_25px_rgba(16,185,129,0.28)] flex items-center justify-center">
                {/* SVG oficial Android Head */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 sm:w-8 sm:h-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.523 15.341a.797.797 0 0 1-.797-.796.797.797 0 0 1 .797-.797.797.797 0 0 1 .796.797.797.797 0 0 1-.796.796m-11.046 0a.797.797 0 0 1-.796-.796.797.797 0 0 1 .796-.797.797.797 0 0 1 .797.797.797.797 0 0 1-.797.796m11.33-4.8 1.59-2.754a.332.332 0 0 0-.121-.453.332.332 0 0 0-.453.121l-1.61 2.789A9.62 9.62 0 0 0 12 8.76a9.62 9.62 0 0 0-5.213 1.484L5.177 7.455a.332.332 0 0 0-.453-.121.332.332 0 0 0-.121.453l1.59 2.754C3.317 12.111 1.387 15.05 1.15 18.5h21.7c-.237-3.45-2.167-6.389-5.043-7.959"
                    fill="#3DDC84"
                  />
                </svg>
              </div>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-white/80 dark:bg-slate-900/85 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 backdrop-blur-md">
                Android
              </span>
            </div>
          </div>

          {/* Icono de Kotlin (Derecha) */}
          <div className="absolute top-1/2 -right-6 sm:-right-7 -translate-y-1/2">
            <div className="hero-orbit-ccw-counter flex flex-col items-center gap-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-purple-500/35 shadow-[0_8px_25px_rgba(127,82,255,0.28)] flex items-center justify-center">
                {/* SVG oficial Kotlin Ribbon */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="heroKotlinGrad"
                      x1="99.9%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#E44857" />
                      <stop offset="47%" stopColor="#C711E1" />
                      <stop offset="100%" stopColor="#7F52FF" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M22 22H2V2h20L12 12l10 10z"
                    fill="url(#heroKotlinGrad)"
                  />
                </svg>
              </div>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-white/80 dark:bg-slate-900/85 text-purple-700 dark:text-purple-300 border border-purple-500/25 backdrop-blur-md">
                Kotlin
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
