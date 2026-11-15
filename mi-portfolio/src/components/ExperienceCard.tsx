import React from "react";
import type { ExperienceCardProps } from "../types/CardProps";
import { CheckCircle2, Sparkles } from "lucide-react";

const TECH_KEYWORDS = [
    {
        pattern: /LLM|lenguaje natural|natural language/i,
        es: "Integración LLM & NLP",
        en: "LLM & NLP Integration",
    },
    {
        pattern: /PDF|PNG/i,
        es: "Reportes Automatizados PDF/PNG",
        en: "Automated PDF/PNG Analytics",
    },
    {
        pattern: /MVVM/i,
        es: "Arquitectura MVVM",
        en: "MVVM Architecture",
    },
    {
        pattern: /Flows|reactivos|reactive/i,
        es: "Flujos Reactivos (Kotlin Flows)",
        en: "Kotlin Flows",
    },
    {
        pattern: /Jetpack Compose/i,
        es: "Jetpack Compose",
        en: "Jetpack Compose",
    },
    {
        pattern: /XML/i,
        es: "Interfaces XML",
        en: "XML UI",
    },
    {
        pattern: /CameraX/i,
        es: "Hardware CameraX",
        en: "CameraX Hardware",
    },
    {
        pattern: /Retrofit|RESTful/i,
        es: "APIs RESTful & Retrofit",
        en: "RESTful APIs & Retrofit",
    },
    {
        pattern: /KDocs/i,
        es: "Documentación KDocs",
        en: "KDocs Documentation",
    },
    {
        pattern: /alertas|alerts|prevención|prevention/i,
        es: "Sistemas de Prevención de Riesgos",
        en: "Risk Prevention Systems",
    },
];

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, language = "es" }) => {
    const isEs = language === "es";

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    const isCurrentJob = /actualmente|present/i.test(exp.periodo);

    // Extraer chips de impacto verificados en el idioma seleccionado
    const extractedBadges = TECH_KEYWORDS.filter(
        (k) => k.pattern.test(exp.descripcion) || k.pattern.test(exp.cargo)
    ).map((k) => (isEs ? k.es : k.en));

    if (isCurrentJob && extractedBadges.length === 0) {
        if (isEs) {
            extractedBadges.push(
                "Banca Digital Empresarial",
                "Ingeniería Mobile Android",
                "Kotlin & Arquitectura Moderna"
            );
        } else {
            extractedBadges.push(
                "Enterprise Digital Banking",
                "Mobile Android Engineering",
                "Kotlin & Modern Architecture"
            );
        }
    }

    return (
        <div className="relative pl-8 sm:pl-10 group">
            {/* Nodo luminoso en la línea de tiempo */}
            <div
                className={`absolute left-0 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${
                    isCurrentJob
                        ? "bg-emerald-400 border-white dark:border-slate-950 shadow-[0_0_18px_#10b981] scale-110"
                        : "bg-slate-200 dark:bg-slate-800 border-emerald-500 dark:border-emerald-400 group-hover:scale-125 group-hover:bg-emerald-500 dark:group-hover:bg-emerald-400 group-hover:shadow-[0_0_14px_#10b981]"
                }`}
            />

            <div
                onMouseMove={handleMouseMove}
                className="spotlight-card rounded-3xl p-6 sm:p-8 bg-white/85 dark:bg-slate-900/60 backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.09] hover:border-emerald-500/45 dark:hover:border-emerald-400/35 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_14px_40px_rgb(0,0,0,0.35)] transition-all duration-400 ease-out hover:-translate-y-1"
            >
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                                {exp.periodo}
                            </span>
                            {isCurrentJob && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                                    <Sparkles className="w-3 h-3" />
                                    {isEs ? "ROL ACTUAL" : "ACTIVE ROLE"}
                                </span>
                            )}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight pt-1">
                            {exp.cargo}
                        </h3>
                        <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400">
                            {exp.empresa}
                        </p>
                    </div>

                    {exp.logo && (
                        <div className="flex-shrink-0 self-start sm:self-center">
                            <div className="w-16 h-16 rounded-2xl bg-white p-2 shadow-md ring-1 ring-slate-200/80 dark:ring-white/10 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
                                <img
                                    src={exp.logo}
                                    alt={`${exp.empresa} Logo`}
                                    className="w-full h-full object-contain rounded-xl"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/64x64/10b981/ffffff?text=Logo";
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {exp.descripcion && (
                    <p className="relative z-10 text-sm sm:text-base text-slate-600 dark:text-slate-300/90 leading-relaxed mb-5">
                        {exp.descripcion}
                    </p>
                )}

                {/* Chips de Impacto y Ecosistema Técnico extraídos automáticamente */}
                {extractedBadges.length > 0 && (
                    <div className="relative z-10 pt-4 border-t border-slate-200/60 dark:border-white/[0.06] flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mr-1">
                            {isEs ? "IMPACTO CLAVE:" : "KEY IMPACT:"}
                        </span>
                        {extractedBadges.map((badge, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-white/10"
                            >
                                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                {badge}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
