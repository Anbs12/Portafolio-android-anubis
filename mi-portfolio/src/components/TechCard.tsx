import React from "react";
import type { TechCardProps } from "../types/CardProps";

export const TechCard: React.FC<TechCardProps> = ({ tech }) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;

        e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
        e.currentTarget.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
        e.currentTarget.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.setProperty("--rx", "0deg");
        e.currentTarget.style.setProperty("--ry", "0deg");
    };

    const specCode = `MOD.${tech.name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 4).toUpperCase()}`;

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="spotlight-card tilt-card-3d group relative rounded-2xl p-5 bg-white/85 dark:bg-slate-900/65 backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.09] hover:border-emerald-500/50 dark:hover:border-emerald-400/45 shadow-[0_6px_25px_rgb(0,0,0,0.04)] dark:shadow-[0_14px_40px_rgb(0,0,0,0.45)] flex flex-col justify-between overflow-hidden"
        >
            {/* Destello especular XDR */}
            <div className="xdr-glare pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

            {/* Barra de telemetría superior */}
            <div className="relative z-10 flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-200/60 dark:border-white/[0.06]">
                <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {specCode}
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    ACTIVE
                </span>
            </div>

            {/* Contenido principal respetando el ícono original exacto de cada tecnología + corrección de contraste en modo oscuro */}
            <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.1] ring-1 ring-slate-200/90 dark:ring-white/15 group-hover:ring-emerald-400/50 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 shadow-inner [&_img]:w-7 [&_img]:h-7 [&_img]:object-contain [&_svg]:w-7 [&_svg]:h-7 dark:[&_svg.text-gray-800]:text-white dark:[&_svg.text-gray-700]:text-slate-200">
                    {tech.icon}
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-bold font-heading text-slate-900 dark:text-white text-sm sm:text-base leading-snug mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                        {tech.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {tech.subtitle}
                    </p>
                </div>
            </div>

            {/* Barra inferior de pulso de circuito */}
            <div className="relative z-10 mt-4 pt-2 flex items-center gap-2">
                <div className="h-[2px] flex-1 rounded-full bg-slate-200/70 dark:bg-white/[0.06] overflow-hidden">
                    <div className="h-full w-1/3 group-hover:w-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 transition-all duration-700 ease-out" />
                </div>
            </div>
        </div>
    );
};
