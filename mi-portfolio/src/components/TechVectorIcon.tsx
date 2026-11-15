import React from 'react';

interface TechVectorIconProps {
  name: string;
}

export const TechVectorIcon: React.FC<TechVectorIconProps> = ({ name }) => {
  const n = name.toLowerCase();

  // 1. Kotlin
  if (n.includes('kotlin') && !n.includes('coroutine') && !n.includes('flow')) {
    return (
      <svg viewBox="0 0 36 36" className="w-7 h-7 overflow-visible">
        <defs>
          <linearGradient id="ktGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <polygon points="6,6 30,6 18,18 30,30 6,30" fill="url(#ktGrad)" opacity="0.9" />
        <polygon points="6,6 18,6 6,18" fill="#a7f3d0" opacity="0.7" />
      </svg>
    );
  }

  // 2. Coroutines
  if (n.includes('coroutine')) {
    return (
      <svg viewBox="0 0 36 36" className="w-7 h-7 overflow-visible">
        <circle cx="18" cy="18" r="12" fill="none" stroke="#34d399" strokeWidth="2" strokeDasharray="16 8" />
        <path d="M18 6 L22 10 L18 14" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 30 L14 26 L18 22" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="18" r="3.5" fill="#38bdf8" />
      </svg>
    );
  }

  // 3. Flows
  if (n.includes('flow')) {
    return (
      <svg viewBox="0 0 36 36" className="w-7 h-7 overflow-visible">
        <path d="M4 12 C12 4, 24 20, 32 12" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M4 18 C12 10, 24 26, 32 18" fill="none" stroke="#34d399" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M4 24 C12 16, 24 32, 32 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <circle cx="28" cy="15" r="2.2" fill="#a7f3d0" />
        <circle cx="10" cy="21" r="2.2" fill="#38bdf8" />
      </svg>
    );
  }

  // 4. Jetpack Compose
  if (n.includes('compose')) {
    return (
      <svg viewBox="0 0 36 36" className="w-7 h-7 overflow-visible">
        <polygon points="18,4 31,11.5 31,24.5 18,32 5,24.5 5,11.5" fill="rgba(16,185,129,0.15)" stroke="#34d399" strokeWidth="2" />
        <polygon points="18,10 26,14.5 26,21.5 18,26 10,21.5 10,14.5" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" strokeWidth="1.6" />
        <circle cx="18" cy="18" r="3" fill="#a7f3d0" />
      </svg>
    );
  }

  // 5. MVVM / Clean Architecture
  if (n.includes('mvvm') || n.includes('clean') || n.includes('architecture')) {
    return (
      <svg viewBox="0 0 36 36" className="w-7 h-7 overflow-visible">
        <path d="M18 6 L32 13 L18 20 L4 13 Z" fill="rgba(52,211,153,0.25)" stroke="#34d399" strokeWidth="1.8" />
        <path d="M4 19 L18 26 L32 19" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 25 L18 32 L32 25" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 6. Hilt / Koin (Dependency Injection)
  if (n.includes('hilt') || n.includes('koin')) {
    return (
      <svg viewBox="0 0 36 36" className="w-7 h-7 overflow-visible">
        <circle cx="10" cy="10" r="4" fill="none" stroke="#34d399" strokeWidth="2" />
        <circle cx="26" cy="10" r="4" fill="none" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="18" cy="26" r="5" fill="rgba(16,185,129,0.25)" stroke="#34d399" strokeWidth="2" />
        <line x1="13" y1="13" x2="16" y2="21" stroke="#34d399" strokeWidth="1.8" />
        <line x1="23" y1="13" x2="20" y2="21" stroke="#38bdf8" strokeWidth="1.8" />
      </svg>
    );
  }

  // 7. Databases (Firebase, SQL, Room, Postgres, Exposed)
  if (
    n.includes('sql') ||
    n.includes('room') ||
    n.includes('firebase') ||
    n.includes('exposed') ||
    n.includes('database')
  ) {
    return (
      <svg viewBox="0 0 36 36" className="w-7 h-7 overflow-visible">
        <ellipse cx="18" cy="9" rx="11" ry="4.5" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="1.8" />
        <path d="M7 9 V18 C7 20.5 12 22.5 18 22.5 C24 22.5 29 20.5 29 18 V9" fill="none" stroke="#34d399" strokeWidth="1.8" />
        <path d="M7 18 V27 C7 29.5 12 31.5 18 31.5 C24 31.5 29 29.5 29 27 V18" fill="none" stroke="#38bdf8" strokeWidth="1.8" />
      </svg>
    );
  }

  // 8. Networking & Backend (Retrofit, GraphQL, Ktor, API)
  if (n.includes('retrofit') || n.includes('graphql') || n.includes('ktor') || n.includes('api')) {
    return (
      <svg viewBox="0 0 36 36" className="w-7 h-7 overflow-visible">
        <polygon points="18,4 30,11 30,25 18,32 6,25 6,11" fill="none" stroke="#38bdf8" strokeWidth="1.6" strokeDasharray="4 3" />
        <circle cx="18" cy="6" r="2.8" fill="#34d399" />
        <circle cx="29" cy="24" r="2.8" fill="#38bdf8" />
        <circle cx="7" cy="24" r="2.8" fill="#a855f7" />
        <polygon points="18,6 29,24 7,24" fill="rgba(16,185,129,0.12)" stroke="#34d399" strokeWidth="1.5" />
      </svg>
    );
  }

  // 9. Testing (JUnit, Robolectric, Mock)
  if (n.includes('junit') || n.includes('robolectric') || n.includes('mock')) {
    return (
      <svg viewBox="0 0 36 36" className="w-7 h-7 overflow-visible">
        <path d="M18 4 L30 9 V18 C30 25.5 24.8 30.5 18 33 C11.2 30.5 6 25.5 6 18 V9 Z" fill="rgba(16,185,129,0.14)" stroke="#34d399" strokeWidth="1.8" />
        <path d="M13 18.5 L16.5 22 L24 14" fill="none" stroke="#a7f3d0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 10. AI / ML (TensorFlow, ML Kit, Koog)
  if (n.includes('tensor') || n.includes('ml') || n.includes('koog')) {
    return (
      <svg viewBox="0 0 36 36" className="w-7 h-7 overflow-visible">
        <circle cx="18" cy="18" r="5" fill="rgba(168,85,247,0.25)" stroke="#a855f7" strokeWidth="2" />
        <circle cx="8" cy="10" r="2.5" fill="#34d399" />
        <circle cx="28" cy="10" r="2.5" fill="#38bdf8" />
        <circle cx="8" cy="26" r="2.5" fill="#38bdf8" />
        <circle cx="28" cy="26" r="2.5" fill="#34d399" />
        <line x1="10" y1="12" x2="14" y2="15" stroke="#34d399" strokeWidth="1.5" />
        <line x1="26" y1="12" x2="22" y2="15" stroke="#38bdf8" strokeWidth="1.5" />
        <line x1="10" y1="24" x2="14" y2="21" stroke="#38bdf8" strokeWidth="1.5" />
        <line x1="26" y1="24" x2="22" y2="21" stroke="#34d399" strokeWidth="1.5" />
      </svg>
    );
  }

  // Default precision chip schematic
  return (
    <svg viewBox="0 0 36 36" className="w-7 h-7 overflow-visible">
      <rect x="9" y="9" width="18" height="18" rx="4" fill="rgba(16,185,129,0.15)" stroke="#34d399" strokeWidth="1.8" />
      <rect x="14" y="14" width="8" height="8" rx="1.5" fill="#38bdf8" opacity="0.85" />
      <line x1="14" y1="4" x2="14" y2="9" stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="22" y1="4" x2="22" y2="9" stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="14" y1="27" x2="14" y2="32" stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="22" y1="27" x2="22" y2="32" stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="4" y1="14" x2="9" y2="14" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="4" y1="22" x2="9" y2="22" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="27" y1="14" x2="32" y2="14" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="27" y1="22" x2="32" y2="22" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
};
