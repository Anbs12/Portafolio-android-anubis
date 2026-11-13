import React, { useRef, useState, useEffect } from "react";
import type { QuantumMisteryCardProps } from "../types/CardProps";
import { Pause, Play } from "lucide-react";

export const QuantumMisteryCard: React.FC<QuantumMisteryCardProps> = ({ tech }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [scrollScale, setScrollScale] = useState(0.92);

    // Efecto de expansión progresiva estilo pantalla Apple PROLED XDR al entrar en el viewport
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const visibleRatio = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));
            const targetScale = 0.9 + Math.min(1, visibleRatio * 1.15) * 0.1;
            setScrollScale(Number(targetScale.toFixed(3)));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const togglePlayback = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div
            ref={containerRef}
            style={{
                transform: `scale(${scrollScale})`,
                transition: "transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className="relative w-full max-w-5xl rounded-[32px] p-[1.5px] overflow-hidden shadow-[0_25px_80px_-15px_rgba(16,185,129,0.3)] group"
        >
            {/* Haz de luz perimetral en rotación estilo chip Apple Silicon M5 */}
            <div className="pointer-events-none absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#10b981_320deg,#38bdf8_345deg,#a855f7_360deg)] silicon-beam-spin opacity-80" />

            <div className="relative w-full aspect-video rounded-[30.5px] overflow-hidden bg-slate-950 ring-1 ring-white/15">
                {tech.video ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    >
                        <source src={tech.video} type="video/mp4" />
                        Tu navegador no soporta videos HTML5.
                    </video>
                ) : (
                    <div
                        role="img"
                        aria-label={tech.name}
                        className="absolute inset-0 w-full h-full flex items-center justify-center transition-transform duration-1000 ease-out group-hover:scale-105 [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>svg]:w-full [&>svg]:h-full"
                    >
                        {tech.icon}
                    </div>
                )}

                {/* Atmósfera XDR de alto rango dinámico */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* Badge superior con el ícono del gato de Schrödinger y nombre */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-xl border border-white/15 text-white/95 text-xs font-mono tracking-wider uppercase shadow-lg">
                        <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-white/10">
                            {tech.icon}
                        </span>
                        <span>{tech.name}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                    </div>
                </div>

                {/* Subtítulo y control de reproducción estilo Apple en la parte inferior */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex items-end justify-between gap-4 z-10">
                    <p className="text-white/95 text-base sm:text-xl md:text-2xl font-light font-heading tracking-wide leading-relaxed max-w-2xl drop-shadow-md">
                        “{tech.subtitle}”
                    </p>

                    {tech.video && (
                        <button
                            type="button"
                            onClick={togglePlayback}
                            aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                            className="flex-shrink-0 w-11 h-11 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-xl"
                        >
                            {isPlaying ? (
                                <Pause className="w-4 h-4 fill-current" />
                            ) : (
                                <Play className="w-4 h-4 fill-current ml-0.5" />
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
