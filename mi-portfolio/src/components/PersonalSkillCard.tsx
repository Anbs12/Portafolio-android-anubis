import React from "react";
import type { PersonalSkillCardProps } from "../types/CardProps";

export const PersonalSkillCard: React.FC<PersonalSkillCardProps> = ({ skill }) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="spotlight-card group relative rounded-2xl p-5 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-emerald-500/40 dark:hover:border-emerald-400/30 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-all duration-400 ease-out hover:-translate-y-1 flex items-center gap-4"
        >
            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100/90 dark:bg-white/[0.06] ring-1 ring-slate-200/70 dark:ring-white/10 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3">
                {skill.icon}
            </div>
            <h3 className="relative z-10 font-semibold font-heading text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {skill.name}
            </h3>
        </div>
    );
};
