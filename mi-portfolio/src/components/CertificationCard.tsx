import React from "react";
import type { CertificationCardProps } from "../types/CardProps";
import { ArrowUpRight } from "lucide-react";

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <div className="relative pl-8 sm:pl-10 group">
            {/* Nodo luminoso ámbar/dorado en la línea de tiempo */}
            <div className="absolute left-0 top-8 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-amber-500 dark:border-amber-400 group-hover:scale-125 group-hover:bg-amber-500 dark:group-hover:bg-amber-400 group-hover:shadow-[0_0_14px_#f59e0b] transition-all duration-300 z-10" />

            <div
                onMouseMove={handleMouseMove}
                className="spotlight-card rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-amber-500/40 dark:hover:border-amber-400/30 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_10px_35px_rgb(0,0,0,0.3)] transition-all duration-400 ease-out hover:-translate-y-1"
            >
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="space-y-1.5">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                            {cert.periodo}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white tracking-tight pt-1">
                            {cert.titulo}
                        </h3>
                        <p className="text-base font-semibold text-amber-600 dark:text-amber-400">
                            {cert.institucion}
                        </p>
                    </div>

                    {cert.logo && (
                        <div className="flex-shrink-0 self-start sm:self-center">
                            <div className="w-16 h-16 rounded-2xl bg-white p-2 shadow-md ring-1 ring-slate-200/80 dark:ring-white/10 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
                                <img
                                    src={cert.logo}
                                    alt={`${cert.institucion} Logo`}
                                    className="w-full h-full object-contain rounded-xl"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/64x64/f59e0b/ffffff?text=Logo";
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <p className="relative z-10 text-sm sm:text-base text-slate-600 dark:text-slate-300/90 leading-relaxed">
                    {cert.descripcion}
                </p>

                {cert.url && cert.urlText && cert.icon && (
                    <div className="relative z-10 mt-6 pt-4 border-t border-slate-200/60 dark:border-white/[0.06]">
                        <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 text-white dark:bg-white/[0.08] dark:text-white hover:bg-emerald-600 dark:hover:bg-emerald-500 dark:hover:text-slate-950 border border-transparent dark:border-white/10 transition-all duration-300 group/cert"
                        >
                            <span className="[&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-current">
                                {cert.icon}
                            </span>
                            <span>{cert.urlText}</span>
                            <ArrowUpRight className="w-4 h-4 opacity-70 transition-transform duration-300 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};
