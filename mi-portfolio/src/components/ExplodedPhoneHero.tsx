import React, { useState } from 'react';
import {
  Smartphone,
  ArrowUpRight,
  Cpu,
  Sparkles,
  ShieldCheck,
  Wrench,
  GitBranch,
  Camera,
  BatteryCharging,
  Wifi,
  CheckCircle2,
  RotateCcw,
} from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';

interface ExplodedPhoneHeroProps {
  currentPortfolioData: PortfolioDataType;
  currentDynamicPhraseIndex: number;
  language: 'es' | 'en';
  isXRay: boolean;
  onScrollToSection: (sectionId: string) => void;
}

type IsometricViewMode = 'assembled' | 'hardware' | 'software';

export const ExplodedPhoneHero: React.FC<ExplodedPhoneHeroProps> = ({
  currentPortfolioData,
  currentDynamicPhraseIndex,
  language,
  isXRay,
  onScrollToSection,
}) => {
  const isEs = language === 'es';

  // Modo interactivo controlado por clic (Sin Scroll-Stopping)
  const [viewMode, setViewMode] = useState<IsometricViewMode>('assembled');
  const [selectedHwIndex, setSelectedHwIndex] = useState<number>(0);
  const [selectedSwIndex, setSelectedSwIndex] = useState<number>(1);
  const [mouseTilt, setMouseTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x: ny * -10, y: nx * 12 });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  // ============================================================================
  // 1. DATOS DE HARDWARE: VISTA EXPLOTADA ISOMÉTRICA & DIAGRAMA DE DESPIECE
  // ============================================================================
  const hardwareParts = [
    {
      num: '01',
      code: isEs ? 'PIEZA [01] // PANTALLA & DIGITALIZADOR' : 'PART [01] // DISPLAY & DIGITIZER',
      title: isEs
        ? 'Panel AMOLED LTPO 120Hz & Cristal Gorilla'
        : '120Hz LTPO AMOLED Panel & Gorilla Glass',
      spec: isEs
        ? 'Cámara frontal punch-hole, matriz táctil capacitiva de 240Hz y lector ultrasónico de huella bajo pantalla.'
        : 'Punch-hole front camera, 240Hz capacitive touch matrix, and under-display ultrasonic fingerprint sensor.',
      schematicNotes: isEs
        ? ['Cámara Frontal Punch-Hole', 'Sensor Ultrasónico BiometricPrompt', 'Renderizado UI a 60/120 FPS']
        : ['Punch-Hole Front Camera', 'BiometricPrompt Ultrasonic Sensor', '60/120 FPS UI Rendering'],
      androidApis: ['Jetpack Compose UI', 'Material Design 3', 'WindowInsets', 'Biometric API'],
      color: 'from-emerald-500/35 to-teal-500/20 border-emerald-400/70',
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      icon: <Smartphone className="w-4 h-4 text-emerald-400" />,
    },
    {
      num: '02',
      code: isEs ? 'PIEZA [02] // PLACA BASE (PCB) & SoC' : 'PART [02] // LOGIC BOARD (PCB) & SoC',
      title: isEs
        ? 'Placa Base Multicapa, Procesador Octa-Core & NPU'
        : 'Multi-Layer Logic Board, Octa-Core SoC & NPU',
      spec: isEs
        ? 'Unidad de procesamiento neuronal (IA/LLMs), RAM LPDDR5X, módem 5G y buses de datos de alta velocidad.'
        : 'Neural Processing Unit (AI/LLMs), LPDDR5X RAM, 5G modem, and high-speed data buses.',
      schematicNotes: isEs
        ? ['SoC + NPU (Modelos LLM)', 'Hilos Asíncronos (Coroutines)', 'Módem 5G / Wi-Fi 7 & Bluetooth']
        : ['SoC + NPU (LLM Models)', 'Async Threads (Coroutines)', '5G / Wi-Fi 7 & Bluetooth Modem'],
      androidApis: ['Kotlin Coroutines', 'StateFlow', 'Clean Architecture', 'Dagger Hilt / Koin'],
      color: 'from-cyan-500/35 to-sky-500/20 border-cyan-400/70',
      badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
    },
    {
      num: '03',
      code: isEs ? 'PIEZA [03] // BATERÍA & BOBINA NFC' : 'PART [03] // BATTERY & NFC COIL',
      title: isEs
        ? 'Celda Li-Ion 5000 mAh, Bobina NFC & Gestión Térmica'
        : '5000 mAh Li-Ion Cell, NFC Coil & Thermal Chamber',
      spec: isEs
        ? 'Bobina de cobre por inducción para pagos móviles sin contacto (Contactless/Fintech) y almacenamiento seguro local.'
        : 'Copper induction coil for contactless mobile payments (Fintech) and encrypted local persistence.',
      schematicNotes: isEs
        ? ['Bobina de Inducción NFC / Pagos', 'Cámara de Vapor Disipadora', 'Persistencia Local Encriptada']
        : ['NFC Induction Coil / Payments', 'Vapor Chamber Heat Sink', 'Encrypted Local Persistence'],
      androidApis: ['Room Database', 'SQLite / SQL', 'WorkManager', 'DataStore / SharedPreferences'],
      color: 'from-amber-500/35 to-orange-500/20 border-amber-400/70',
      badge: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      icon: <BatteryCharging className="w-4 h-4 text-amber-400" />,
    },
    {
      num: '04',
      code: isEs ? 'PIEZA [04] // CARCASA, TORNILLOS & CAMERAX' : 'PART [04] // CHASSIS, SCREWS & CAMERAX',
      title: isEs
        ? 'Chasis Unibody, Tornillería Torx, Puerto USB-C & Módulo CameraX'
        : 'Unibody Chassis, Torx Screws, USB-C Port & CameraX Array',
      spec: isEs
        ? 'Esquema técnico con ubicación de 4 tornillos Torx, botones físicos laterales (Power/Volumen), puerto USB-C y triple lente óptico.'
        : 'Technical teardown showing 4 Torx screws, physical side buttons (Power/Volume), USB-C port, and triple optical lens.',
      schematicNotes: isEs
        ? ['4x Tornillos Torx T3 (⊕)', 'Botones Power / Volumen + Puerto USB-C', 'Triple Sensor Óptico CameraX']
        : ['4x Torx T3 Screws (⊕)', 'Power / Volume Keys + USB-C Port', 'Triple CameraX Optical Sensor'],
      androidApis: ['CameraX API', 'Retrofit / Ktor', 'Firebase / FCM', 'Hardware Sensors'],
      color: 'from-purple-500/35 to-indigo-500/20 border-purple-400/70',
      badge: 'bg-purple-500/20 text-purple-300 border-purple-400/40',
      icon: <Camera className="w-4 h-4 text-purple-400" />,
    },
  ];

  // ============================================================================
  // 2. DATOS DE SOFTWARE/UI: MOCKUP ISOMÉTRICO ANOTADO & FLUJO DE USUARIO (UI FLOW)
  // ============================================================================
  const softwareScreens = [
    {
      step: '01',
      route: 'AuthScreen()',
      title: isEs ? 'Autenticación & Biometría' : 'Authentication & Biometrics',
      role: isEs ? 'Paso 01 // Acceso Seguro' : 'Step 01 // Secure Entry',
      description: isEs
        ? 'Validación de identidad mediante huella/rostro, inyección de dependencias con Hilt/Koin y manejo de sesión segura.'
        : 'Identity validation via fingerprint/face, dependency injection with Hilt/Koin, and secure session handling.',
      annotations: [
        {
          tag: 'TopAppBar',
          text: isEs ? 'Cabecera Material 3 adaptativa' : 'Adaptive Material 3 Header',
        },
        {
          tag: 'BiometricPrompt',
          text: isEs ? 'Token criptográfico en Hardware Keystore' : 'Hardware Keystore crypto token',
        },
      ],
      techs: ['Jetpack Compose', 'Dagger Hilt', 'Coroutines', 'Security Crypto'],
      accent: 'border-emerald-400/80 from-emerald-500/25 to-slate-950/95',
    },
    {
      step: '02',
      route: 'DashboardScreen()',
      title: isEs ? 'Dashboard Reactivo (UDF)' : 'Reactive Dashboard (UDF)',
      role: isEs ? 'Paso 02 // Flujo de Estado MVVM' : 'Step 02 // MVVM StateFlow',
      description: isEs
        ? 'Interfaz declarativa a 60 FPS conectada a ViewModel mediante StateFlow. Cada acción del usuario emite eventos inmutables.'
        : '60 FPS declarative UI bound to ViewModel via StateFlow. Every user action dispatches immutable UI events.',
      annotations: [
        {
          tag: 'StateFlow<UiState>',
          text: isEs ? 'Actualización reactiva sin bloqueos' : 'Non-blocking reactive recomposition',
        },
        {
          tag: 'LazyColumn + M3',
          text: isEs ? 'Tarjetas dinámicas con animaciones' : 'Dynamic cards with fluid motion',
        },
      ],
      techs: ['MVVM', 'Kotlin Flows', 'Material Design 3', 'Navigation Compose'],
      accent: 'border-cyan-400/80 from-cyan-500/25 to-slate-950/95',
    },
    {
      step: '03',
      route: 'SyncDetailScreen()',
      title: isEs ? 'Sincronización Cloud & Persistencia' : 'Cloud Sync & Persistence',
      role: isEs ? 'Paso 03 // Red, API & Base de Datos' : 'Step 03 // Network, API & DB',
      description: isEs
        ? 'Ejecución de casos de uso (Clean Architecture), llamadas a APIs REST/GraphQL/Ktor y caché offline-first en Room DB.'
        : 'Clean Architecture use-cases, REST/GraphQL/Ktor API calls, and offline-first caching in Room DB.',
      annotations: [
        {
          tag: 'Repository Pattern',
          text: isEs ? 'Sincronización Retrofit / Ktor + Room' : 'Retrofit / Ktor + Room sync',
        },
        {
          tag: 'Push & Analytics',
          text: isEs ? 'Notificaciones FCM y reportes PDF/PNG' : 'FCM notifications & PDF/PNG reports',
        },
      ],
      techs: ['Clean Architecture', 'Retrofit / Ktor', 'Room DB', 'GraphQL / Firebase'],
      accent: 'border-purple-400/80 from-purple-500/25 to-slate-950/95',
    },
  ];

  const activeHw = hardwareParts[selectedHwIndex] || hardwareParts[0];
  const activeSw = softwareScreens[selectedSwIndex] || softwareScreens[1];

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      {/* Halo volumétrico ambiental */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] sm:w-[760px] sm:h-[760px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-cyan-500/12 to-purple-500/18 blur-[120px]" />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* ==================== COLUMNA IZQUIERDA (6 cols): IDENTIDAD + FICHA DE INGENIERÍA INTERACTIVA ==================== */}
        <div className="lg:col-span-6 text-center lg:text-left">
          {/* Pill de Estado / Rol */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/85 dark:bg-white/[0.07] backdrop-blur-xl border border-slate-200/80 dark:border-white/15 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-mono mb-5 shadow-[0_0_30px_rgba(16,185,129,0.18)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400" />
            </span>
            <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{currentPortfolioData.personal.titulo}</span>
            {isXRay && (
              <span className="ml-1 px-2 py-0.5 rounded bg-emerald-500/20 text-[10px] text-emerald-300 border border-emerald-400/30">
                {isEs ? 'RAYOS-X ACTIVO' : 'X-RAY ON'}
              </span>
            )}
          </div>

          {/* Nombre Monumental */}
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold font-hero-name tracking-tight bg-gradient-to-b from-slate-950 via-slate-800 to-slate-500 dark:from-white dark:via-white dark:to-slate-400 bg-clip-text text-transparent mb-4 drop-shadow-sm">
            {currentPortfolioData.personal.nombre}
          </h1>

          {/* Título Dinámico Cinético */}
          <div className="space-y-1.5 mb-6">
            <p className="text-base sm:text-lg md:text-xl font-hero-title text-slate-700 dark:text-slate-200/90 font-normal leading-relaxed">
              {currentPortfolioData.hero.staticHeroTitlePartOne}
            </p>

            <div className="h-11 sm:h-13 flex items-center justify-center lg:justify-start">
              <span
                key={currentDynamicPhraseIndex}
                className="inline-block px-4 py-1 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 dark:border-emerald-400/30 backdrop-blur-md text-lg sm:text-2xl md:text-3xl font-bold font-heading bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-300 dark:via-teal-200 dark:to-cyan-300 bg-clip-text text-transparent animate-fade-in-out-single"
              >
                {currentPortfolioData.hero.dynamicPhrases[currentDynamicPhraseIndex]}
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl font-hero-title text-slate-700 dark:text-slate-200/90 font-normal leading-relaxed">
              {currentPortfolioData.hero.staticHeroTitlePartTwo}
            </p>
          </div>

          {/* ==================== PANEL DE CONTROL DE LA INFOGRAFÍA ISOMÉTRICA ==================== */}
          <div className="mb-7 rounded-3xl p-5 bg-white/85 dark:bg-slate-900/75 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 shadow-xl text-left">
            {/* Selector de los 3 modos de vista */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-4 border-b border-slate-200/70 dark:border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {isEs
                  ? 'LABORATORIO ISOMÉTRICO INTERACTIVO'
                  : 'INTERACTIVE ISOMETRIC LAB'}
              </span>

              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setViewMode('assembled')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono font-semibold transition-all ${
                    viewMode === 'assembled'
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm'
                      : 'bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-white/10'
                  }`}
                >
                  <Smartphone className="w-3 h-3" />
                  <span>{isEs ? '1. Dispositivo' : '1. Device'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('hardware')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono font-semibold transition-all ${
                    viewMode === 'hardware'
                      ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                      : 'bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300 hover:bg-emerald-500/20'
                  }`}
                >
                  <Wrench className="w-3 h-3" />
                  <span>{isEs ? '2. Despiece Hardware' : '2. Hardware Teardown'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('software')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono font-semibold transition-all ${
                    viewMode === 'software'
                      ? 'bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                      : 'bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300 hover:bg-cyan-500/20'
                  }`}
                >
                  <GitBranch className="w-3 h-3" />
                  <span>{isEs ? '3. Flujo UI & Software' : '3. UI Flow & Software'}</span>
                </button>
              </div>
            </div>

            {/* Contenido dinámico del panel según el modo activo */}
            {viewMode === 'assembled' && (
              <div className="animate-fadeInUp space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {isEs
                    ? 'Interactúa con el modelo Android: presiona "Despiece Hardware" para ver la vista explotada isométrica con tornillos, sensores y placas internas, o "Flujo UI & Software" para inspeccionar el mockup isométrico anotado y el flujo de pantallas.'
                    : 'Interact with the Android model: click "Hardware Teardown" to inspect the isometric exploded view with screws, sensors, and internal boards, or "UI Flow & Software" to explore the annotated isometric mockup and screen flow.'}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setViewMode('hardware')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 transition-all"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>
                      {isEs
                        ? 'Explorar Vista Explotada (Hardware) →'
                        : 'Explore Exploded View (Hardware) →'}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('software')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 hover:bg-cyan-400 hover:text-slate-950 transition-all"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>
                      {isEs
                        ? 'Explorar Flujo UI Isométrico (Software) →'
                        : 'Explore Isometric UI Flow (Software) →'}
                    </span>
                  </button>
                </div>
              </div>
            )}

            {viewMode === 'hardware' && (
              <div key={activeHw.num} className="animate-fadeInUp space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {activeHw.icon}
                    {activeHw.code}
                  </span>
                  <div className="flex items-center gap-1">
                    {hardwareParts.map((part, i) => (
                      <button
                        key={part.num}
                        type="button"
                        onClick={() => setSelectedHwIndex(i)}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                          selectedHwIndex === i
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        [{part.num}]
                      </button>
                    ))}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold font-heading text-slate-900 dark:text-white">
                  {activeHw.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeHw.spec}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-1">
                  {activeHw.schematicNotes.map((note, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 text-[11px] font-mono text-slate-700 dark:text-slate-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                      <span className="truncate">{note}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[10px] font-mono text-slate-400 mr-1">
                    {isEs ? 'SDK / CONTROL:' : 'SDK / CONTROL:'}
                  </span>
                  {activeHw.androidApis.map((api, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25"
                    >
                      {api}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {viewMode === 'software' && (
              <div key={activeSw.step} className="animate-fadeInUp space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400">
                    {activeSw.role} — {activeSw.route}
                  </span>
                  <div className="flex items-center gap-1">
                    {softwareScreens.map((scr, i) => (
                      <button
                        key={scr.step}
                        type="button"
                        onClick={() => setSelectedSwIndex(i)}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                          selectedSwIndex === i
                            ? 'bg-cyan-400 text-slate-950'
                            : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        UI {scr.step}
                      </button>
                    ))}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold font-heading text-slate-900 dark:text-white">
                  {activeSw.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeSw.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {activeSw.annotations.map((ann, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-left"
                    >
                      <div className="text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-300">
                        ↗ {ann.tag}
                      </div>
                      <div className="text-[11px] text-slate-700 dark:text-slate-200">
                        {ann.text}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeSw.techs.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-white/[0.07] text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Botones de Acción Principales (CTAs) */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={() => onScrollToSection('proyectos')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.65)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>{currentPortfolioData.hero.buttonProjects}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={() => onScrollToSection('contacto')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-slate-800 dark:text-white bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 backdrop-blur-md border border-slate-300/80 dark:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>{currentPortfolioData.hero.buttonContact}</span>
            </button>
          </div>
        </div>

        {/* ==================== COLUMNA DERECHA (6 cols): MODELO ISOMÉTRICO INTERACTIVO ==================== */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center [perspective:1600px] min-h-[480px] sm:min-h-[540px] relative">
          {/* Barra flotante superior sobre el diagrama para alternar o resetear vista */}
          <div className="mb-4 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/85 dark:bg-slate-900/90 text-white backdrop-blur-xl border border-white/15 shadow-lg text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>
              {viewMode === 'assembled'
                ? isEs
                  ? 'HAZ CLIC EN EL TELÉFONO PARA DESARMARLO'
                  : 'CLICK PHONE TO INSPECT INTERNALS'
                : viewMode === 'hardware'
                ? isEs
                  ? 'VISTA EXPLOTADA ISOMÉTRICA // TOCA [01]-[04]'
                  : 'ISOMETRIC EXPLODED VIEW // TAP [01]-[04]'
                : isEs
                ? 'FLUJO DE USUARIO ISOMÉTRICO // TOCA PANTALLAS'
                : 'ISOMETRIC UI FLOW // TAP SCREENS'}
            </span>
            {viewMode !== 'assembled' && (
              <button
                type="button"
                onClick={() => setViewMode('assembled')}
                className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 hover:bg-emerald-500 hover:text-slate-950 transition-colors text-[10px]"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                <span>{isEs ? 'Ensamblar' : 'Assemble'}</span>
              </button>
            )}
          </div>

          {/* =====================================================================
              MODO 1: DISPOSITIVO ANDROID PROFESIONAL ENSAMBLADO
             ===================================================================== */}
          {viewMode === 'assembled' && (
            <div
              style={{
                transform: `rotateX(${(10 + mouseTilt.x * 0.6).toFixed(2)}deg) rotateY(${(-14 + mouseTilt.y * 0.7).toFixed(2)}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.2s ease-out',
              }}
              className="relative w-[285px] sm:w-[310px] h-[470px] sm:h-[495px] rounded-[44px] p-3 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 shadow-[0_35px_90px_rgba(0,0,0,0.65),0_0_50px_rgba(16,185,129,0.22)] ring-1 ring-white/25"
            >
              {/* Botones físicos laterales (Esquema de Hardware) */}
              <div
                title={isEs ? 'Botón Volumen +/-' : 'Volume +/- Button'}
                className="absolute -right-[4px] top-24 w-[4px] h-14 rounded-r bg-emerald-400/80 shadow-[0_0_8px_#34d399]"
              />
              <div
                title={isEs ? 'Botón de Encendido' : 'Power Button'}
                className="absolute -right-[4px] top-44 w-[4px] h-9 rounded-r bg-cyan-400/80 shadow-[0_0_8px_#22d3ee]"
              />

              {/* Pantalla AMOLED del Smartphone */}
              <div className="h-full w-full rounded-[34px] bg-slate-950 border border-white/15 p-5 flex flex-col justify-between text-left relative overflow-hidden">
                {/* Barra de estado + Cámara Punch-hole */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>ANUBIS // OS 15</span>
                  <div className="w-3 h-3 rounded-full bg-black ring-2 ring-emerald-400/50" />
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    <Wifi className="w-3 h-3" /> 5G
                  </span>
                </div>

                {/* Cuerpo de la pantalla con disparadores interactivos */}
                <div className="my-auto space-y-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-slate-950 shadow-lg">
                      <Smartphone className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                        ANDROID ARCHITECTURE
                      </div>
                      <div className="text-lg font-extrabold font-heading text-white leading-tight">
                        {currentPortfolioData.personal.nombre}
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {isEs
                      ? 'Selecciona una radiografía interactiva para inspeccionar el dispositivo por dentro:'
                      : 'Select an interactive blueprint below to inspect the device internals:'}
                  </p>

                  {/* Botón 1 dentro del teléfono: Vista Explotada de Hardware */}
                  <button
                    type="button"
                    onClick={() => setViewMode('hardware')}
                    className="w-full p-3 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/40 text-left transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-300 mb-0.5">
                      <span className="inline-flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5" />
                        {isEs ? 'VISTA EXPLOTADA (HARDWARE)' : 'EXPLODED VIEW (HARDWARE)'}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                    <div className="text-[10px] text-slate-300">
                      {isEs
                        ? 'Pantalla, Placa Base, Batería NFC, Tornillos & CameraX'
                        : 'Display, Logic Board, NFC Battery, Screws & CameraX'}
                    </div>
                  </button>

                  {/* Botón 2 dentro del teléfono: Mockup Anotado & Flujo UI */}
                  <button
                    type="button"
                    onClick={() => setViewMode('software')}
                    className="w-full p-3 rounded-2xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-left transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-300 mb-0.5">
                      <span className="inline-flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5" />
                        {isEs ? 'FLUJO UI ISOMÉTRICO (SOFTWARE)' : 'ISOMETRIC UI FLOW (SOFTWARE)'}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                    <div className="text-[10px] text-slate-300">
                      {isEs
                        ? 'Mockup anotado + Navegación Compose & MVVM'
                        : 'Annotated Mockup + Compose & MVVM Navigation'}
                    </div>
                  </button>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                      <div className="text-[9px] font-mono text-slate-400">
                        {isEs ? 'ACTUAL' : 'CURRENT'}
                      </div>
                      <div className="text-[11px] font-bold text-emerald-300 truncate">
                        MachBank - Bci
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                      <div className="text-[9px] font-mono text-slate-400">
                        {isEs ? 'ANTERIOR' : 'PREVIOUS'}
                      </div>
                      <div className="text-[11px] font-bold text-cyan-300 truncate">
                        Globant
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pie de pantalla + Indicador de puerto USB-C */}
                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-emerald-300">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 60 FPS • KOTLIN
                  </span>
                  <span className="text-slate-400">USB-C ▼</span>
                </div>
              </div>
            </div>
          )}

          {/* =====================================================================
              MODO 2: HARDWARE — VISTA EXPLOTADA ISOMÉTRICA & DIAGRAMA DE DESPIECE
             ===================================================================== */}
          {viewMode === 'hardware' && (
            <div className="relative w-full flex items-center justify-center py-6">
              <div
                style={{
                  transform: `rotateX(${(46 + mouseTilt.x * 0.4).toFixed(2)}deg) rotateY(${(-22 + mouseTilt.y * 0.5).toFixed(2)}deg) rotateZ(18deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.25s ease-out',
                }}
                className="relative w-[240px] sm:w-[265px] h-[390px] sm:h-[420px]"
              >
                {/* Ejes guía verticales de despiece que atraviesan las 4 esquinas (Tornillos Torx) */}
                <div className="pointer-events-none absolute inset-3 border-2 border-dashed border-emerald-400/40 rounded-[32px]" />

                {hardwareParts.map((part, idx) => {
                  // Separación vertical y en Z para vista explotada isométrica
                  const spread = 1.5 - idx;
                  const translateZ = spread * 68;
                  const translateY = spread * -42;
                  const isSelected = selectedHwIndex === idx;

                  return (
                    <div
                      key={part.num}
                      onClick={() => setSelectedHwIndex(idx)}
                      style={{
                        transform: `translate3d(0px, ${translateY.toFixed(1)}px, ${translateZ.toFixed(1)}px)`,
                        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease',
                      }}
                      className={`cursor-pointer absolute inset-0 rounded-[34px] p-3.5 backdrop-blur-xl bg-gradient-to-br ${
                        part.color
                      } border-2 ${
                        isSelected
                          ? 'ring-2 ring-emerald-300 shadow-[0_0_45px_rgba(16,185,129,0.55)]'
                          : 'opacity-85 hover:opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.65)]'
                      } flex flex-col justify-between`}
                    >
                      {/* Marcadores de Tornillos Torx (⊕) en las 4 esquinas del esquema de despiece */}
                      <span className="absolute top-2.5 left-3 text-[9px] font-mono text-white/60">⊕</span>
                      <span className="absolute top-2.5 right-3 text-[9px] font-mono text-white/60">⊕</span>
                      <span className="absolute bottom-2.5 left-3 text-[9px] font-mono text-white/60">⊕</span>
                      <span className="absolute bottom-2.5 right-3 text-[9px] font-mono text-white/60">⊕</span>

                      {/* Etiqueta de Número Flotante (Callout Pin [01]..[04]) */}
                      <div className="flex items-center justify-between px-2 pt-1">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-extrabold border ${part.badge}`}
                        >
                          [{part.num}]
                        </span>
                        <span className="text-[9px] font-mono text-white/90 uppercase tracking-wider truncate max-w-[140px]">
                          {part.code.split('//')[1]}
                        </span>
                      </div>

                      {/* Diagrama Técnico Interno en SVG específico para cada capa física */}
                      <div className="my-auto px-2">
                        {idx === 0 && (
                          /* [01] Esquema de Pantalla AMOLED + Sensor Huella + Punch-hole */
                          <div className="rounded-2xl bg-slate-950/90 border border-emerald-400/40 p-3 text-center space-y-2">
                            <div className="w-3 h-3 mx-auto rounded-full bg-emerald-400/30 border border-emerald-300" />
                            <div className="text-[11px] font-bold text-white">
                              AMOLED 120Hz + Compose UI
                            </div>
                            <div className="mx-auto w-9 h-9 rounded-full border border-dashed border-emerald-400 flex items-center justify-center text-[8px] font-mono text-emerald-300">
                              TOUCH
                            </div>
                          </div>
                        )}

                        {idx === 1 && (
                          /* [02] Esquema de Placa Base PCB + Procesador SoC + Buses */
                          <div className="rounded-2xl bg-slate-950/90 border border-cyan-400/40 p-3 flex flex-col items-center gap-2">
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/20 border-2 border-cyan-300 flex flex-col items-center justify-center font-mono">
                              <span className="text-[9px] text-cyan-200 font-bold">SoC + NPU</span>
                              <span className="text-[8px] text-white/80">KOTLIN VM</span>
                            </div>
                            <div className="text-[9px] font-mono text-cyan-300">
                              5G MODEM • LPDDR5X • HILT
                            </div>
                          </div>
                        )}

                        {idx === 2 && (
                          /* [03] Esquema de Batería Li-Ion + Bobina de Inducción NFC */
                          <div className="rounded-2xl bg-slate-950/90 border border-amber-400/40 p-3 flex flex-col items-center gap-1.5">
                            <div className="w-14 h-14 rounded-full border-2 border-dashed border-amber-400 flex items-center justify-center">
                              <div className="w-8 h-8 rounded-full border border-amber-300 flex items-center justify-center text-[8px] font-mono text-amber-200">
                                NFC
                              </div>
                            </div>
                            <div className="text-[10px] font-mono text-amber-300 font-bold">
                              5000 mAh • ROOM DB
                            </div>
                          </div>
                        )}

                        {idx === 3 && (
                          /* [04] Esquema de Carcasa, Lentes CameraX, Botones y Puerto USB-C */
                          <div className="rounded-2xl bg-slate-950/90 border border-purple-400/40 p-3 space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="flex gap-1 p-1.5 rounded-xl bg-purple-500/20 border border-purple-300/50">
                                <span className="w-3.5 h-3.5 rounded-full bg-purple-300/40 border border-purple-200" />
                                <span className="w-3.5 h-3.5 rounded-full bg-purple-300/40 border border-purple-200" />
                                <span className="w-3.5 h-3.5 rounded-full bg-purple-300/40 border border-purple-200" />
                              </div>
                              <span className="text-[9px] font-mono text-purple-200 font-bold">
                                CAMERAX
                              </span>
                            </div>
                            <div className="text-[9px] font-mono text-slate-300 flex justify-between">
                              <span>BTN: VOL/PWR</span>
                              <span>PORT: USB-C</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Pie de cota técnica */}
                      <div className="px-2 pb-1 flex items-center justify-between text-[9px] font-mono text-white/80">
                        <span>TORX T3 x4</span>
                        <span>
                          {isSelected
                            ? isEs
                              ? '● SELECCIONADO'
                              : '● SELECTED'
                            : isEs
                            ? 'TOCA PARA VER'
                            : 'TAP TO INSPECT'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* =====================================================================
              MODO 3: SOFTWARE / UI — MOCKUP ISOMÉTRICO ANOTADO & FLUJO DE USUARIO
             ===================================================================== */}
          {viewMode === 'software' && (
            <div className="relative w-full flex flex-col items-center justify-center py-4">
              {/* Flujo de 3 Pantallas de Celular en Perspectiva Isométrica conectadas por flechas */}
              <div
                style={{
                  transform: `rotateX(${(24 + mouseTilt.x * 0.35).toFixed(2)}deg) rotateY(${(-18 + mouseTilt.y * 0.45).toFixed(2)}deg) rotateZ(6deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.25s ease-out',
                }}
                className="relative grid grid-cols-3 gap-3 sm:gap-5 items-center max-w-lg w-full px-2"
              >
                {/* Líneas Vectoriales de Flujo de Navegación (Isometric UI Flow) */}
                <svg
                  viewBox="0 0 500 260"
                  className="pointer-events-none absolute inset-0 w-full h-full z-20 overflow-visible"
                >
                  <defs>
                    <linearGradient id="uiFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  {/* Flecha de Pantalla 01 -> Pantalla 02 */}
                  <path
                    d="M 145 130 C 175 95, 195 95, 220 130"
                    fill="none"
                    stroke="url(#uiFlowGrad)"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                  />
                  <circle cx="182" cy="105" r="4.5" fill="#34d399" />
                  {/* Flecha de Pantalla 02 -> Pantalla 03 */}
                  <path
                    d="M 305 130 C 335 165, 355 165, 380 130"
                    fill="none"
                    stroke="url(#uiFlowGrad)"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                  />
                  <circle cx="342" cy="155" r="4.5" fill="#22d3ee" />
                </svg>

                {softwareScreens.map((scr, idx) => {
                  const isSelected = selectedSwIndex === idx;
                  const zOffset = isSelected ? 38 : idx * 12;

                  return (
                    <div
                      key={scr.step}
                      onClick={() => setSelectedSwIndex(idx)}
                      style={{
                        transform: `translateZ(${zOffset}px)`,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      }}
                      className={`cursor-pointer relative rounded-[26px] p-3 bg-gradient-to-b ${
                        scr.accent
                      } border-2 ${
                        isSelected
                          ? 'ring-2 ring-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.5)]'
                          : 'opacity-80 hover:opacity-100 shadow-2xl'
                      } h-[290px] sm:h-[320px] flex flex-col justify-between text-left`}
                    >
                      {/* Anotación Flotante Superior (Annotated Isometric Mockup Callout) */}
                      <div className="-mt-7 mx-auto px-2 py-0.5 rounded-md bg-slate-950/95 border border-cyan-400/50 text-[9px] font-mono text-cyan-300 whitespace-nowrap shadow-md">
                        {scr.annotations[0].tag}
                      </div>

                      {/* Barra de estado mini */}
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-300 pt-1">
                        <span className="font-bold text-cyan-300">UI {scr.step}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>

                      {/* Wireframe interactivo de componentes Compose dentro de cada pantalla */}
                      <div className="my-auto space-y-2">
                        <div className="text-[11px] font-extrabold font-heading text-white leading-snug">
                          {scr.title}
                        </div>

                        <div className="p-2 rounded-xl bg-white/[0.06] border border-white/10 space-y-1.5">
                          <div className="h-2 w-2/3 rounded bg-emerald-400/60" />
                          <div className="h-1.5 w-full rounded bg-white/25" />
                          <div className="h-1.5 w-4/5 rounded bg-white/20" />
                        </div>

                        <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-[9px] font-mono text-cyan-200">
                          ↗ {scr.annotations[1].tag}
                        </div>
                      </div>

                      {/* Botón inferior Material 3 simulado */}
                      <div className="w-full py-1.5 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 text-center text-[9px] font-mono font-bold">
                        {scr.route}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Leyenda inferior del Flujo de Usuario Isométrico */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-300">
                <span>01. Auth & Hilt</span>
                <span className="text-emerald-400">➔</span>
                <span>02. Compose StateFlow</span>
                <span className="text-cyan-400">➔</span>
                <span>03. Retrofit / Ktor / Room</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
