import React from 'react';
import { Briefcase, Users, Cpu, CheckCircle2 } from 'lucide-react';

interface ExecutiveBrandPillarsProps {
  language: 'es' | 'en';
  projectsCount: number;
  subProjectsCount: number;
  techCount: number;
}

export const ExecutiveBrandPillars: React.FC<ExecutiveBrandPillarsProps> = ({
  language,
  projectsCount,
  subProjectsCount,
  techCount,
}) => {
  const isEs = language === 'es';

  const pillars = [
    {
      roleTag: 'FOR CEOs & FOUNDERS',
      title: isEs ? 'Impacto de Negocio & Fiabilidad' : 'Business Impact & Reliability',
      description: isEs
        ? 'Experiencia en banca digital (MachBank - Bci) y consultoría global (Globant), transformando requerimientos complejos en productos móviles listos para producción.'
        : 'Experience in digital banking (MachBank - Bci) and global consulting (Globant), turning complex requirements into production-ready mobile products.',
      metric: `${projectsCount + subProjectsCount}+ Apps & Labs`,
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      accent: 'from-emerald-500/20 to-teal-500/5 border-emerald-500/30',
    },
    {
      roleTag: 'FOR POs & AGILE TEAMS',
      title: isEs ? 'Entrega Autónoma & Colaboración' : 'Autonomous Delivery & Collaboration',
      description: isEs
        ? 'Comunicación asertiva, pensamiento crítico y foco en la experiencia del usuario final con interfaces fluidas en Jetpack Compose y Material Design 3.'
        : 'Assertive communication, critical thinking, and end-user focus with fluid interfaces built in Jetpack Compose and Material Design 3.',
      metric: 'End-to-End UX/UI',
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      accent: 'from-cyan-500/20 to-sky-500/5 border-cyan-500/30',
    },
    {
      roleTag: 'FOR SEMs & TECH LEADS',
      title: isEs ? 'Arquitectura Limpia & Escalable' : 'Clean & Scalable Architecture',
      description: isEs
        ? 'Código mantenible, desacoplado y documentado (KDocs) con Kotlin, MVVM, Clean Architecture, Coroutines, Flows, Inyección de Dependencias (Hilt/Koin) y Unit Testing.'
        : 'Maintainable, decoupled, and documented (KDocs) code using Kotlin, MVVM, Clean Architecture, Coroutines, Flows, DI (Hilt/Koin), and Unit Testing.',
      metric: `${techCount}+ Core Techs`,
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      accent: 'from-purple-500/20 to-indigo-500/5 border-purple-500/30',
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
      {pillars.map((p, idx) => (
        <div
          key={idx}
          className="spotlight-card group relative rounded-3xl p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300">
                {p.roleTag}
              </span>
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.accent} border flex items-center justify-center`}
              >
                {p.icon}
              </div>
            </div>

            <h3 className="text-lg font-extrabold font-heading text-slate-900 dark:text-white mb-2">
              {p.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed mb-5">
              {p.description}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-200/60 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-emerald-600 dark:text-emerald-400">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {p.metric}
            </span>
            <span className="opacity-60">VERIFIED</span>
          </div>
        </div>
      ))}
    </div>
  );
};
