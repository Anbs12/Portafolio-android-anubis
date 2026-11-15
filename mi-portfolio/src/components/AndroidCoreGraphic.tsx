import React, { useEffect, useRef, useState } from 'react';

interface AndroidCoreGraphicProps {
  scrollProgress: number;
  altText: string;
  language?: 'es' | 'en';
}

export const AndroidCoreGraphic: React.FC<AndroidCoreGraphicProps> = ({
  scrollProgress,
  altText,
  language = 'es',
}) => {
  const rotation = scrollProgress * 1.8;
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const [iframeSrc] = useState<string>(
    () => `${baseUrl}android-bot-cel.html?lang=${language}`
  );
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: 'SET_LANG', language },
      '*'
    );
  }, [language]);

  return (
    <div
      role="img"
      aria-label={altText}
      className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[340px] lg:h-[340px] flex items-center justify-center select-none"
    >
      {/* Ambient volumetric aura */}
      <div className="pointer-events-none absolute inset-4 rounded-full bg-gradient-to-tr from-emerald-500/25 via-cyan-500/15 to-purple-500/20 blur-3xl animate-pulse-glow" />

      {/* Outer orbital telemetry ring driven by scroll */}
      <svg
        viewBox="0 0 320 320"
        className="pointer-events-none absolute inset-0 w-full h-full overflow-visible opacity-75"
      >
        <defs>
          <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <g
          style={{
            transform: `rotate(${rotation.toFixed(1)}deg)`,
            transformOrigin: '160px 160px',
          }}
        >
          <circle
            cx="160"
            cy="160"
            r="150"
            fill="none"
            stroke="url(#emeraldGrad)"
            strokeWidth="1.2"
            strokeDasharray="6 10"
            opacity="0.45"
          />
          <circle cx="160" cy="10" r="4" fill="#34d399" />
          <circle cx="310" cy="160" r="3" fill="#38bdf8" />
          <circle cx="10" cy="160" r="3" fill="#a855f7" />
        </g>
      </svg>

      {/* Escena WebGL 3D interactiva Cel-Shader (Google Android Bot) */}
      <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden">
        {!isLoaded && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-400/30 border-t-emerald-400 animate-spin" />
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          onLoad={() => {
            setIsLoaded(true);
            iframeRef.current?.contentWindow?.postMessage(
              { type: 'SET_LANG', language },
              '*'
            );
          }}
          title={altText}
          className="w-full h-full border-0 bg-transparent block"
        />
      </div>
    </div>
  );
};
