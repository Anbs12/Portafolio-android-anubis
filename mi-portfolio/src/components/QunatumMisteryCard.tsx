import React, { useRef, useState, useEffect } from "react";
import type { QuantumMisteryCardProps } from "../types/CardProps";
import { Sparkles, Atom } from "lucide-react";

export const QuantumMisteryCard: React.FC<QuantumMisteryCardProps> = ({
    tech,
    language = "es",
}) => {
    const isEs = language === "es";
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
        x: 0.5,
        y: 0.5,
        active: false,
    });
    const [collapsedSide, setCollapsedSide] = useState<"none" | "0" | "1">("none");

    const quantumStateText =
        collapsedSide === "none"
            ? "|Ψ⟩ = α|0⟩ + β|1⟩"
            : collapsedSide === "0"
            ? isEs
                ? "|0⟩ COLAPSADO"
                : "|0⟩ COLLAPSED"
            : isEs
            ? "|1⟩ COLAPSADO"
            : "|1⟩ COLLAPSED";

    // Simulador Cuántico Procedural en Canvas (100% código propio, cero videos externos)
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let width = (canvas.width = canvas.offsetWidth || 800);
        let height = (canvas.height = canvas.offsetHeight || 450);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = canvas.offsetWidth || 800;
            height = canvas.height = canvas.offsetHeight || 450;
        };

        window.addEventListener("resize", handleResize, { passive: true });

        const qubits = Array.from({ length: 48 }, (_, i) => ({
            angle: (i / 48) * Math.PI * 2,
            radius: 40 + (i % 5) * 28,
            speed: 0.008 + (i % 4) * 0.004,
            bit: i % 2 === 0 ? "0" : "1",
            hue: i % 2 === 0 ? 160 : 195,
        }));

        let t = 0;

        const draw = () => {
            t += 0.025;
            ctx.fillStyle = "rgba(5, 8, 15, 0.22)";
            ctx.fillRect(0, 0, width, height);

            const cx = width * 0.5 + (mouseRef.current.x - 0.5) * 60;
            const cy = height * 0.5 + (mouseRef.current.y - 0.5) * 40;

            // Dibujar ondas de interferencia cuántica (Superposición)
            for (let w = 0; w < 4; w++) {
                ctx.beginPath();
                const waveHue = w % 2 === 0 ? 160 : 195;
                ctx.strokeStyle = `hsla(${waveHue}, 90%, 60%, ${0.22 - w * 0.04})`;
                ctx.lineWidth = 1.6;

                for (let x = 0; x <= width; x += 8) {
                    const normX = x / width;
                    const envelope = Math.sin(normX * Math.PI);
                    const yOffset =
                        Math.sin(normX * 12 + t * (w + 1) * 0.6) *
                        Math.cos(normX * 6 - t * 0.8) *
                        (55 + w * 18) *
                        envelope;
                    const y = cy + yOffset;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            // Núcleo de superposición dual |0⟩ y |1⟩
            const sep = mouseRef.current.active ? 18 : 52 + Math.sin(t * 1.5) * 22;
            const leftX = cx - sep;
            const rightX = cx + sep;

            const grad0 = ctx.createRadialGradient(leftX, cy, 2, leftX, cy, 65);
            grad0.addColorStop(0, "rgba(52, 211, 153, 0.85)");
            grad0.addColorStop(0.5, "rgba(16, 185, 129, 0.2)");
            grad0.addColorStop(1, "rgba(16, 185, 129, 0)");
            ctx.fillStyle = grad0;
            ctx.beginPath();
            ctx.arc(leftX, cy, 65, 0, Math.PI * 2);
            ctx.fill();

            const grad1 = ctx.createRadialGradient(rightX, cy, 2, rightX, cy, 65);
            grad1.addColorStop(0, "rgba(56, 189, 248, 0.85)");
            grad1.addColorStop(0.5, "rgba(6, 182, 212, 0.2)");
            grad1.addColorStop(1, "rgba(6, 182, 212, 0)");
            ctx.fillStyle = grad1;
            ctx.beginPath();
            ctx.arc(rightX, cy, 65, 0, Math.PI * 2);
            ctx.fill();

            // Qubits orbitando en estado de superposición
            ctx.font = '600 10px "JetBrains Mono", monospace';
            qubits.forEach((q, idx) => {
                q.angle += q.speed * (mouseRef.current.active ? 2.2 : 1);
                const rx = Math.cos(q.angle + idx) * q.radius * 1.6;
                const ry = Math.sin(q.angle * 1.3) * q.radius * 0.75;
                const px = cx + rx;
                const py = cy + ry;

                ctx.fillStyle = `hsla(${q.hue}, 95%, 70%, 0.75)`;
                ctx.fillText(mouseRef.current.active ? q.bit : idx % 3 === 0 ? "Ψ" : q.bit, px, py);
            });

            animId = requestAnimationFrame(draw);
        };

        animId = requestAnimationFrame(draw);
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = (e.clientY - rect.top) / rect.height;
        mouseRef.current = { x: nx, y: ny, active: true };
        setCollapsedSide(nx < 0.5 ? "0" : "1");
    };

    const handleMouseLeave = () => {
        mouseRef.current = { x: 0.5, y: 0.5, active: false };
        setCollapsedSide("none");
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-5xl rounded-[32px] p-[1.5px] overflow-hidden shadow-[0_25px_80px_-15px_rgba(16,185,129,0.3)] group cursor-crosshair"
        >
            {/* Haz de luz perimetral en rotación continua */}
            <div className="pointer-events-none absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#10b981_320deg,#38bdf8_345deg,#a855f7_360deg)] silicon-beam-spin opacity-80" />

            <div className="relative w-full aspect-[16/8] sm:aspect-[21/9] rounded-[30.5px] overflow-hidden bg-[#05080f] ring-1 ring-white/15">
                {/* Simulador Cuántico Interactivo en Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full block"
                />

                {/* Viñeta y reflejo XDR */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* HUD Superior: Nombre + Estado Cuántico en vivo */}
                <div className="absolute top-4 inset-x-4 sm:top-6 sm:inset-x-6 flex flex-wrap items-center justify-between gap-2 z-10 pointer-events-none">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-xl border border-white/15 text-white/95 text-xs font-mono tracking-wider uppercase shadow-lg">
                        <Atom className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: "8s" }} />
                        <span>{tech.name}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 backdrop-blur-xl border border-emerald-400/30 text-emerald-300 text-xs font-mono">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{quantumStateText}</span>
                    </div>
                </div>

                {/* Subtítulo inferior */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
                    <p className="text-white/95 text-base sm:text-xl md:text-2xl font-light font-heading tracking-wide leading-relaxed max-w-2xl drop-shadow-md">
                        “{tech.subtitle}”
                    </p>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-300/80">
                        {isEs
                            ? "PASA EL CURSOR PARA COLAPSAR LA FUNCIÓN DE ONDA"
                            : "HOVER TO COLLAPSE WAVEFUNCTION"}
                    </span>
                </div>
            </div>
        </div>
    );
};
