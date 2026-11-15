import React, { useState } from 'react';
import { Github, Linkedin, ArrowUpRight, Shield, Smartphone, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';

interface ContactLaunchpadProps {
  currentPortfolioData: PortfolioDataType;
  language: 'es' | 'en';
}

export const ContactLaunchpad: React.FC<ContactLaunchpadProps> = ({
  currentPortfolioData,
  language,
}) => {
  const [selectedMission, setSelectedMission] = useState<number>(0);
  const isEs = language === 'es';

  const missions = [
    {
      id: 'fintech',
      label: isEs ? 'Banca & Fintech' : 'Banking & Fintech',
      icon: <Shield className="w-4 h-4" />,
      headline: isEs
        ? 'Ingeniería móvil segura y escalable para productos financieros.'
        : 'Secure, scalable mobile engineering for financial products.',
      highlights: isEs
        ? [
            'Experiencia actual como Software Engineer Mobile Android en MachBank - Banco Bci',
            'Arquitectura MVVM + Clean Architecture + flujos reactivos en tiempo real',
            'Integración segura de APIs RESTful, autenticación y pruebas unitarias',
          ]
        : [
            'Current experience as Mobile Android Software Engineer at MachBank - Banco Bci',
            'MVVM + Clean Architecture + real-time reactive StateFlows',
            'Secure RESTful API integration, authentication, and unit testing',
          ],
    },
    {
      id: 'native',
      label: isEs ? 'Apps Nativas Compose' : 'Native Compose Apps',
      icon: <Smartphone className="w-4 h-4" />,
      headline: isEs
        ? 'Experiencias Android de nueva generación con Jetpack Compose y Material 3.'
        : 'Next-gen Android experiences built with Jetpack Compose and Material 3.',
      highlights: isEs
        ? [
            'Dominio dual de Jetpack Compose moderno y vistas XML tradicionales',
            'Inyección de dependencias con Dagger Hilt y Koin',
            'Integración de cámara avanzada (CameraX), mapas, notificaciones push (FCM) y Room DB',
          ]
        : [
            'Dual mastery of modern Jetpack Compose and legacy XML views',
            'Dependency injection with Dagger Hilt and Koin',
            'Advanced camera (CameraX), push notifications (FCM), and local Room DB',
          ],
    },
    {
      id: 'kmp-ai',
      label: isEs ? 'Full-Stack Kotlin, KMP & IA' : 'Full-Stack Kotlin, KMP & AI',
      icon: <Cpu className="w-4 h-4" />,
      headline: isEs
        ? 'Más allá de Android: Kotlin Multiplatform, Backend Ktor e Inteligencia Artificial.'
        : 'Beyond Android: Kotlin Multiplatform, Ktor Backend, and Artificial Intelligence.',
      highlights: isEs
        ? [
            'Certificado en Kotlin Multiplatform (KMP / KMM) para Android e iOS',
            'Experiencia en Globant integrando LLMs y generación automatizada de reportes',
            'Desarrollo de backends asíncronos con Ktor, Exposed y PostgreSQL',
          ]
        : [
            'Certified in Kotlin Multiplatform (KMP / KMM) for Android & iOS',
            'Globant experience integrating LLMs and automated analytics reporting',
            'Asynchronous backend development with Ktor, Exposed, and PostgreSQL',
          ],
    },
  ];

  const activeMission = missions[selectedMission];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Selector Interactivo de Misión para Reclutadores, POs, SEMs y CEOs */}
      <div className="mb-10 rounded-[32px] p-6 sm:p-8 bg-white/80 dark:bg-slate-900/60 backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.09] shadow-xl text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-200/70 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {isEs
                  ? 'SIMULADOR DE IMPACTO // ¿QUÉ BUSCAS CONSTRUIR?'
                  : 'IMPACT SIMULATOR // WHAT ARE YOU BUILDING?'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {isEs
                ? 'Selecciona tu escenario para ver cómo aporto valor inmediato a tu equipo:'
                : 'Select your scenario to see how I bring immediate value to your team:'}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {missions.map((m, idx) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedMission(idx)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  selectedMission === idx
                    ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                    : 'bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-white/10'
                }`}
              >
                {m.icon}
                <span>{m.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div key={activeMission.id} className="animate-fadeInUp space-y-4">
          <h3 className="text-lg sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
            {activeMission.headline}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeMission.highlights.map((h, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-slate-100/80 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.06] flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tarjetas Magnéticas de Conexión Directa (LinkedIn y GitHub originales) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <a
          href={`https://linkedin.com/in/${currentPortfolioData.personal.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="spotlight-card group relative flex items-center justify-between p-7 rounded-3xl bg-white/85 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.09] hover:border-sky-500/50 dark:hover:border-sky-400/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_15px_45px_rgb(0,0,0,0.4)] transition-all duration-400 hover:-translate-y-1.5 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500 dark:text-sky-400 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                LinkedIn
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {currentPortfolioData.contact.linkedinText}
              </p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>

        <a
          href={`https://github.com/${currentPortfolioData.personal.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="spotlight-card group relative flex items-center justify-between p-7 rounded-3xl bg-white/85 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.09] hover:border-emerald-500/50 dark:hover:border-emerald-400/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_15px_45px_rgb(0,0,0,0.4)] transition-all duration-400 hover:-translate-y-1.5 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-slate-800 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <Github className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                GitHub
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {currentPortfolioData.contact.githubText}
              </p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>
    </div>
  );
};
