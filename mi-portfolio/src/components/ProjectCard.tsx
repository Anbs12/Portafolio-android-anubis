import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import type { ProjectCardProps } from "../types/CardProps";
import { Github, Play, CircleEllipsis, ArrowUpRight, Maximize2, X } from "lucide-react";

export const ProjectCard: React.FC<ProjectCardProps> = ({ proyecto, currentPortfolioData }) => {
    const [isQuickLookOpen, setIsQuickLookOpen] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Sutil inclinación física estilo Apple (máximo ±4.5 grados)
        const rotateX = ((y - centerY) / centerY) * -4.5;
        const rotateY = ((x - centerX) / centerX) * 4.5;

        e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
        e.currentTarget.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
        e.currentTarget.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.style.setProperty("--rx", "0deg");
        e.currentTarget.style.setProperty("--ry", "0deg");
    };

    useEffect(() => {
        if (!isQuickLookOpen) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsQuickLookOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isQuickLookOpen]);

    const isCompleted =
        proyecto.estado === currentPortfolioData.projectsSettings.statusCompleted ||
        proyecto.estado === currentPortfolioData.subProjectsSettings.statusCompleted;

    const isInProgress =
        proyecto.estado === currentPortfolioData.projectsSettings.statusInProgress ||
        proyecto.estado === currentPortfolioData.subProjectsSettings.statusInProgress;

    const isPaused =
        proyecto.estado === currentPortfolioData.projectsSettings.statusPaused ||
        proyecto.estado === currentPortfolioData.subProjectsSettings.statusPaused;

    const statusBadgeStyle = isCompleted
        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"
        : isInProgress
        ? "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30"
        : isPaused
        ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30"
        : "bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30";

    const statusDotStyle = isCompleted
        ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
        : isInProgress
        ? "bg-sky-400 shadow-[0_0_8px_#38bdf8]"
        : "bg-amber-400 shadow-[0_0_8px_#fbbf24]";

    const youtubeLinks = proyecto.youtube
        ? proyecto.youtube.trim().split(/\s+/).filter(Boolean)
        : [];

    return (
        <>
            <article
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="spotlight-card tilt-card-3d group relative flex flex-col h-full rounded-3xl bg-white/80 dark:bg-slate-900/55 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.09] hover:border-emerald-500/45 dark:hover:border-emerald-400/35 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_16px_45px_rgb(0,0,0,0.45)] overflow-hidden"
            >
                {/* Reflejo especular XDR que sigue el ángulo de inclinación */}
                <div className="xdr-glare pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                {/* Contenedor de imagen con botón Quick Look estilo Apple */}
                <div
                    onClick={() => setIsQuickLookOpen(true)}
                    className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-950 cursor-pointer"
                >
                    <img
                        src={proyecto.imagen}
                        alt={proyecto.titulo}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                    {/* Botón Apple "+" Quick Look en esquina superior izquierda */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsQuickLookOpen(true);
                        }}
                        aria-label={`Ampliar vista de ${proyecto.titulo}`}
                        className="absolute top-3.5 left-3.5 z-10 w-8 h-8 rounded-full bg-slate-950/65 hover:bg-slate-950/90 text-white/95 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-90 lg:opacity-0 lg:translate-y-1 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                    >
                        <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Badge de estado flotante estilo cristal */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                        <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-md border shadow-sm ${statusBadgeStyle}`}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full ${statusDotStyle}`} />
                            {proyecto.estado}
                        </span>
                    </div>
                </div>

                {/* Cuerpo de la tarjeta */}
                <div className="relative z-10 flex flex-col flex-1 p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                        <h3
                            onClick={() => setIsQuickLookOpen(true)}
                            className="text-xl font-bold font-heading text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 cursor-pointer"
                        >
                            {proyecto.titulo}
                        </h3>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed mb-6 line-clamp-4">
                        {proyecto.descripcion}
                    </p>

                    {/* Stack de tecnologías en formato técnico minimalista */}
                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                        {proyecto.tecnologias.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-slate-100/90 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-white/[0.07] group-hover:border-emerald-500/25 transition-colors duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Barra de acciones */}
                    {(proyecto.github || youtubeLinks.length > 0 || proyecto.makingVideo) && (
                        <div className="pt-4 border-t border-slate-200/60 dark:border-white/[0.06] flex items-center gap-2.5 flex-wrap">
                            {proyecto.github && (
                                <a
                                    href={proyecto.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white dark:bg-white/[0.08] dark:text-white hover:bg-slate-800 dark:hover:bg-white/[0.15] border border-transparent dark:border-white/10 transition-all duration-300 group/btn"
                                >
                                    <Github className="w-3.5 h-3.5" />
                                    <span>{currentPortfolioData.projectsSettings.buttonCode}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                </a>
                            )}

                            {youtubeLinks.map((videoUrl, idx) => (
                                <a
                                    key={idx}
                                    href={videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 border border-emerald-500/25 transition-all duration-300 group/vid"
                                >
                                    <Play className="w-3.5 h-3.5 fill-current" />
                                    <span>
                                        {currentPortfolioData.projectsSettings.buttonViewVideo}
                                        {youtubeLinks.length > 1 ? ` ${idx + 1}` : ""}
                                    </span>
                                </a>
                            ))}

                            {proyecto.makingVideo && (
                                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                                    <CircleEllipsis className="w-3.5 h-3.5" />
                                    {currentPortfolioData.projectsSettings.buttonViewMakingVideo}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </article>

            {/* Modal "Quick Look" estilo Apple macOS / iPadOS */}
            {isQuickLookOpen &&
                typeof document !== "undefined" &&
                createPortal(
                    <div
                        onClick={() => setIsQuickLookOpen(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-2xl"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="animate-quicklook relative w-full max-w-4xl rounded-[32px] bg-white dark:bg-[#0b101b] border border-slate-200/80 dark:border-white/15 shadow-[0_25px_90px_rgba(0,0,0,0.75)] overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Botón de cierre estilo Apple */}
                            <button
                                type="button"
                                onClick={() => setIsQuickLookOpen(false)}
                                aria-label="Cerrar vista previa"
                                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-transform duration-200 hover:scale-105"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Vitrina de imagen XDR sin recorte */}
                            <div className="relative w-full bg-slate-950 flex items-center justify-center max-h-[52vh] overflow-hidden border-b border-slate-200/60 dark:border-white/10">
                                <img
                                    src={proyecto.imagen}
                                    alt={proyecto.titulo}
                                    className="w-full h-full max-h-[52vh] object-contain"
                                />
                            </div>

                            {/* Detalles completos del proyecto */}
                            <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                                        {proyecto.titulo}
                                    </h3>
                                    <span
                                        className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-medium border ${statusBadgeStyle}`}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full ${statusDotStyle}`} />
                                        {proyecto.estado}
                                    </span>
                                </div>

                                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {proyecto.descripcion}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {proyecto.tecnologias.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {(proyecto.github || youtubeLinks.length > 0 || proyecto.makingVideo) && (
                                    <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 flex items-center gap-3 flex-wrap">
                                        {proyecto.github && (
                                            <a
                                                href={proyecto.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:opacity-90 transition-opacity"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>{currentPortfolioData.projectsSettings.buttonCode}</span>
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        )}

                                        {youtubeLinks.map((videoUrl, idx) => (
                                            <a
                                                key={idx}
                                                href={videoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
                                            >
                                                <Play className="w-4 h-4 fill-current" />
                                                <span>
                                                    {currentPortfolioData.projectsSettings.buttonViewVideo}
                                                    {youtubeLinks.length > 1 ? ` ${idx + 1}` : ""}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
};
