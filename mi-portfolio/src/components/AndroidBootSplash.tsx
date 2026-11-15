import React, { useEffect, useState } from 'react';
import { Code, ShieldCheck } from 'lucide-react';

interface AndroidBootSplashProps {
  nombre: string;
  language?: 'es' | 'en';
}

export const AndroidBootSplash: React.FC<AndroidBootSplashProps> = ({
  nombre,
  language = 'es',
}) => {
  const [visible, setVisible] = useState<boolean>(true);
  const [fadingOut, setFadingOut] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const isEs = language === 'es';

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 260);
    const t2 = setTimeout(() => setStep(2), 580);
    const t3 = setTimeout(() => setStep(3), 900);
    const t4 = setTimeout(() => setFadingOut(true), 1250);
    const t5 = setTimeout(() => setVisible(false), 1650);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => setVisible(false)}
      className={`fixed inset-0 z-[150] bg-[#04070d] text-white flex flex-col items-center justify-center p-6 transition-all duration-500 cursor-pointer select-none ${
        fadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Halo de energía central */}
      <div className="pointer-events-none absolute w-80 h-80 rounded-full bg-emerald-500/20 blur-[100px]" />

      <div className="relative z-10 max-w-md w-full space-y-6 text-center">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,0.5)]">
          <Code className="w-7 h-7 text-slate-950 stroke-[2.5]" />
        </div>

        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-emerald-400 mb-1">
            ANUBIS // ANDROID OS KERNEL
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight">
            {nombre}
          </h2>
        </div>

        {/* Barra de arranque de alta velocidad */}
        <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div
            style={{ width: `${Math.min(100, (step + 1) * 28)}%` }}
            className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 transition-all duration-300"
          />
        </div>

        {/* Logs de inicialización de módulos */}
        <div className="rounded-2xl p-4 bg-white/[0.03] border border-white/10 text-left font-mono text-[11px] space-y-1.5 text-slate-300">
          <div className="flex items-center justify-between">
            <span>[OK] Kotlin 2.0 & Coroutines Engine</span>
            <span className="text-emerald-400">{isEs ? 'LISTO' : 'READY'}</span>
          </div>
          {step >= 1 && (
            <div className="flex items-center justify-between">
              <span>[OK] Jetpack Compose 60fps Renderer</span>
              <span className="text-emerald-400">{isEs ? 'MONTADO' : 'MOUNTED'}</span>
            </div>
          )}
          {step >= 2 && (
            <div className="flex items-center justify-between">
              <span>[OK] Clean Architecture & MVVM Graph</span>
              <span className="text-cyan-400">{isEs ? 'VERIFICADO' : 'VERIFIED'}</span>
            </div>
          )}
          {step >= 3 && (
            <div className="flex items-center justify-between text-emerald-300 font-bold">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>
                  {isEs
                    ? 'Iniciando Portafolio Interactivo...'
                    : 'Launching Interactive Keynote...'}
                </span>
              </span>
              <span>100%</span>
            </div>
          )}
        </div>

        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          {isEs ? 'HAZ CLIC EN CUALQUIER LUGAR PARA OMITIR' : 'CLICK ANYWHERE TO SKIP'}
        </div>
      </div>
    </div>
  );
};
