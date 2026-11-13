import React from "react";
import type { TechCardProps } from "../types/CardProps";

export const TechCard: React.FC<TechCardProps> = ({ tech }) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="spotlight-card group relative rounded-2xl p-5 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-emerald-500/40 dark:hover:border-emerald-400/30 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-all duration-400 ease-out hover:-translate-y-1 flex flex-col justify-between"
        >
            <div className="relative z-10 flex items-start gap-4">
                {/* Pedestal de icono con contraste garantizado en modo claro y oscuro */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100/90 dark:bg-white/[0.08] ring-1 ring-slate-200/80 dark:ring-white/15 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:bg-emerald-500/10 dark:group-hover:bg-emerald-400/15">
                    {tech.icon}
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-bold font-heading text-slate-900 dark:text-white text-sm sm:text-base leading-snug mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {tech.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {tech.subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};
