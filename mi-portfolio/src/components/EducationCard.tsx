import React from "react";
import type { EducationCardProps } from "../types/CardProps";

export const EducationCard: React.FC<EducationCardProps> = ({ edu }) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <div className="relative pl-8 sm:pl-10 group">
            {/* Nodo luminoso azul/cian en la línea de tiempo */}
            <div className="absolute left-0 top-8 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-sky-500 dark:border-sky-400 group-hover:scale-125 group-hover:bg-sky-500 dark:group-hover:bg-sky-400 group-hover:shadow-[0_0_14px_#38bdf8] transition-all duration-300 z-10" />

            <div
                onMouseMove={handleMouseMove}
                className="spotlight-card rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-sky-500/40 dark:hover:border-sky-400/30 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_10px_35px_rgb(0,0,0,0.3)] transition-all duration-400 ease-out hover:-translate-y-1"
            >
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="space-y-1.5">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20">
                            {edu.periodo}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight pt-1">
                            {edu.titulo}
                        </h3>
                        <p className="text-base font-semibold text-sky-600 dark:text-sky-400">
                            {edu.institucion}
                        </p>
                    </div>

                    {edu.logo && (
                        <div className="flex-shrink-0 self-start sm:self-center">
                            <div className="w-16 h-16 rounded-2xl bg-white p-2 shadow-md ring-1 ring-slate-200/80 dark:ring-white/10 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
                                <img
                                    src={edu.logo}
                                    alt={`${edu.institucion} Logo`}
                                    className="w-full h-full object-contain rounded-xl"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/64x64/0284c7/ffffff?text=Logo";
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <p className="relative z-10 text-sm sm:text-base text-slate-600 dark:text-slate-300/90 leading-relaxed">
                    {edu.descripcion}
                </p>
            </div>
        </div>
    );
};
