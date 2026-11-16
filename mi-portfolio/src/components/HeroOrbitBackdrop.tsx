import React from 'react';

export const HeroOrbitBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 pt-24 pb-16 flex items-center justify-center overflow-hidden select-none"
    >
      {/* ==================== ÓRBITA EXTERIOR ELÍPTICA: DISPOSITIVOS SAMSUNG GALAXY ==================== */}
      <div className="relative w-[320px] h-[500px] sm:w-[600px] sm:h-[510px] md:w-[730px] lg:w-[950px] lg:h-[530px] xl:w-[1120px] xl:h-[580px] flex items-center justify-center opacity-30 sm:opacity-75 lg:opacity-95">
        {/* Anillo elíptico exterior */}
        <div className="absolute inset-0 rounded-[50%] border border-dashed border-emerald-500/25 dark:border-emerald-400/20">
          {/* Nodos decorativos en órbita */}
          <span
            style={{ animationDelay: '-5.5s', offsetDistance: '12.5%' }}
            className="hero-ellipse-cw w-2 h-2 rounded-full bg-emerald-400/75 shadow-[0_0_10px_#34d399]"
          />
          <span
            style={{ animationDelay: '-27.5s', offsetDistance: '62.5%' }}
            className="hero-ellipse-cw w-1.5 h-1.5 rounded-full bg-cyan-400/75 shadow-[0_0_10px_#38bdf8]"
          />

          {/* Dispositivo Samsung #1 (Galaxy S Ultra) */}
          <div
            style={{ animationDelay: '-22s', offsetDistance: '50%' }}
            className="hero-ellipse-cw flex flex-col items-center gap-1"
          >
            <div className="relative w-10 h-[72px] sm:w-12 sm:h-[84px] lg:w-14 lg:h-24 rounded-[12px] p-[2px] bg-gradient-to-b from-slate-400 via-slate-600 to-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_20px_rgba(16,185,129,0.28)] ring-1 ring-white/25">
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
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold tracking-wider bg-white/85 dark:bg-slate-900/85 text-slate-700 dark:text-emerald-300 border border-slate-200/80 dark:border-emerald-400/25 backdrop-blur-md shadow-sm whitespace-nowrap">
              Galaxy S Ultra
            </span>
          </div>

          {/* Dispositivo Samsung #2 (Galaxy Z Fold) */}
          <div
            style={{ animationDelay: '0s', offsetDistance: '0%' }}
            className="hero-ellipse-cw flex flex-col items-center gap-1"
          >
            <div className="relative w-14 h-12 sm:w-16 sm:h-14 lg:w-20 lg:h-16 rounded-[11px] p-[2px] bg-gradient-to-r from-slate-500 via-slate-700 to-slate-500 shadow-[0_10px_30px_rgba(0,0,0,0.45),0_0_20px_rgba(56,189,248,0.28)] ring-1 ring-white/25">
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
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold tracking-wider bg-white/85 dark:bg-slate-900/85 text-slate-700 dark:text-cyan-300 border border-slate-200/80 dark:border-cyan-400/25 backdrop-blur-md shadow-sm whitespace-nowrap">
              Galaxy Z Fold
            </span>
          </div>
        </div>
      </div>

      {/* ==================== ÓRBITA INTERIOR ELÍPTICA: ICONO ANDROID + ICONO KOTLIN ==================== */}
      <div className="absolute w-[265px] h-[430px] sm:w-[490px] sm:h-[435px] md:w-[600px] lg:w-[800px] lg:h-[455px] xl:w-[930px] xl:h-[495px] flex items-center justify-center opacity-35 sm:opacity-80 lg:opacity-95">
        <div className="relative w-full h-full rounded-[50%] border border-cyan-500/20 dark:border-cyan-400/15">
          {/* Icono de Android */}
          <div
            style={{ animationDelay: '-8s', offsetDistance: '75%' }}
            className="hero-ellipse-ccw flex flex-col items-center gap-1"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-emerald-500/35 shadow-[0_8px_25px_rgba(16,185,129,0.28)] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.523 15.341a.797.797 0 0 1-.797-.796.797.797 0 0 1 .797-.797.797.797 0 0 1 .796.797.797.797 0 0 1-.796.796m-11.046 0a.797.797 0 0 1-.796-.796.797.797 0 0 1 .796-.797.797.797 0 0 1 .797.797.797.797 0 0 1-.797.796m11.33-4.8 1.59-2.754a.332.332 0 0 0-.121-.453.332.332 0 0 0-.453.121l-1.61 2.789A9.62 9.62 0 0 0 12 8.76a9.62 9.62 0 0 0-5.213 1.484L5.177 7.455a.332.332 0 0 0-.453-.121.332.332 0 0 0-.121.453l1.59 2.754C3.317 12.111 1.387 15.05 1.15 18.5h21.7c-.237-3.45-2.167-6.389-5.043-7.959"
                  fill="#3DDC84"
                />
              </svg>
            </div>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-white/85 dark:bg-slate-900/85 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 backdrop-blur-md">
              Android
            </span>
          </div>

          {/* Icono de Kotlin */}
          <div
            style={{ animationDelay: '-24s', offsetDistance: '25%' }}
            className="hero-ellipse-ccw flex flex-col items-center gap-1"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-purple-500/35 shadow-[0_8px_25px_rgba(127,82,255,0.28)] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
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
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-white/85 dark:bg-slate-900/85 text-purple-700 dark:text-purple-300 border border-purple-500/25 backdrop-blur-md">
              Kotlin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
