import React from 'react';

interface AndroidCoreGraphicProps {
  scrollProgress: number;
  altText: string;
}

export const AndroidCoreGraphic: React.FC<AndroidCoreGraphicProps> = ({
  scrollProgress,
  altText,
}) => {
  const rotation = scrollProgress * 1.8;

  return (
    <div
      role="img"
      aria-label={altText}
      className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center select-none"
    >
      {/* Ambient volumetric aura */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-emerald-500/25 via-cyan-500/15 to-purple-500/20 blur-3xl animate-pulse-glow" />

      {/* Outer orbital telemetry ring */}
      <svg
        viewBox="0 0 320 320"
        className="w-full h-full overflow-visible drop-shadow-[0_0_25px_rgba(16,185,129,0.25)]"
      >
        <defs>
          <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <linearGradient id="coreGlass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="rgba(15,23,42,0.85)" />
          </linearGradient>

          <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="100%" stopColor="#10b981" />
          </radialGradient>
        </defs>

        {/* Scroll-driven outer precision dial */}
        <g
          style={{
            transform: `rotate(${rotation.toFixed(1)}deg)`,
            transformOrigin: '160px 160px',
          }}
        >
          <circle
            cx="160"
            cy="160"
            r="142"
            fill="none"
            stroke="url(#emeraldGrad)"
            strokeWidth="1.2"
            strokeDasharray="6 10"
            opacity="0.45"
          />
          <circle cx="160" cy="18" r="4" fill="#34d399" />
          <circle cx="302" cy="160" r="3" fill="#38bdf8" />
          <circle cx="18" cy="160" r="3" fill="#a855f7" />
        </g>

        {/* Counter-rotating inner architecture ring */}
        <g
          style={{
            transform: `rotate(${(-rotation * 1.4).toFixed(1)}deg)`,
            transformOrigin: '160px 160px',
          }}
        >
          <circle
            cx="160"
            cy="160"
            r="116"
            fill="none"
            stroke="url(#emeraldGrad)"
            strokeWidth="1.5"
            strokeDasharray="48 24 12 24"
            opacity="0.6"
          />
        </g>

        {/* Isometric Kotlin / Compose Layer Stack */}
        <g className="animate-float-slow">
          {/* Bottom Layer: Data / Room / Retrofit */}
          <path
            d="M160 225 L95 190 L160 155 L225 190 Z"
            fill="rgba(6, 182, 212, 0.14)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />

          {/* Middle Layer: Domain / Coroutines & Flows */}
          <path
            d="M160 198 L95 163 L160 128 L225 163 Z"
            fill="rgba(16, 185, 129, 0.16)"
            stroke="#34d399"
            strokeWidth="1.5"
          />

          {/* Top Layer: Android Jetpack Compose UI & Custom Android Bot */}
          <g transform="translate(0, -10)">
            {/* Antennae */}
            <line
              x1="132"
              y1="96"
              x2="118"
              y2="74"
              stroke="#34d399"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <line
              x1="188"
              y1="96"
              x2="202"
              y2="74"
              stroke="#34d399"
              strokeWidth="4.5"
              strokeLinecap="round"
            />

            {/* Sculpted Android Dome */}
            <path
              d="M112 136 A48 48 0 0 1 208 136 L208 144 Q208 150 202 150 L118 150 Q112 150 112 144 Z"
              fill="url(#coreGlass)"
              stroke="url(#emeraldGrad)"
              strokeWidth="2.2"
            />

            {/* Glowing XDR Eyes */}
            <circle cx="140" cy="122" r="5.5" fill="url(#eyeGlow)" />
            <circle cx="180" cy="122" r="5.5" fill="url(#eyeGlow)" />

            {/* Specular highlight arc */}
            <path
              d="M126 108 A36 36 0 0 1 194 108"
              fill="none"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Vertical telemetry beams connecting layers */}
          <line
            x1="115"
            y1="140"
            x2="115"
            y2="195"
            stroke="#34d399"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.6"
          />
          <line
            x1="205"
            y1="140"
            x2="205"
            y2="195"
            stroke="#38bdf8"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.6"
          />
        </g>

        {/* HUD labels */}
        <text
          x="160"
          y="265"
          textAnchor="middle"
          className="fill-emerald-400 font-mono text-[9px] tracking-[0.28em] uppercase"
        >
          KOTLIN • MVVM • COMPOSE
        </text>
      </svg>
    </div>
  );
};
