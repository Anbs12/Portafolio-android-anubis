import React from "react";
import type { ExperienceCardProps } from "../types/CardProps";

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <div className="relative pl-8 sm:pl-10 group">
            {/* Nodo luminoso en la línea de tiempo */}
            <div className="absolute left-0 top-8 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-emerald-500 dark:border-emerald-400 group-hover:scale-125 group-hover:bg-emerald-500 dark:group-hover:bg-emerald-400 group-hover:shadow-[0_0_14px_#10b981] transition-all duration-300 z-10" />

            <div
                onMouseMove={handleMouseMove}
                className="spotlight-card rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-emerald-500/40 dark:hover:border-emerald-400/30 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_10px_35px_rgb(0,0,0,0.3)] transition-all duration-400 ease-out hover:-translate-y-1"
            >
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="space-y-1.5">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                            {exp.periodo}
                        </span>
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
                    <p className="relative z-10 text-sm sm:text-base text-slate-600 dark:text-slate-300/90 leading-relaxed">
                        {exp.descripcion}
                    </p>
                )}
            </div>
        </div>
    );
};
