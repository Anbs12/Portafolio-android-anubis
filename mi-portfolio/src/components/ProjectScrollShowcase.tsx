import React, { useEffect, useRef, useState } from 'react';
import type { ProjectItem } from '../types/Project';
import type { PortfolioDataType } from '../types/Portfolio';
import {
  Github,
  Play,
  CircleEllipsis,
  ArrowUpRight,
  Smartphone,
  Layers,
  Sparkles,
  Code2,
  Eye,
  Cpu,
} from 'lucide-react';

interface ProjectScrollShowcaseProps {
  proyectos: ProjectItem[];
  currentPortfolioData: PortfolioDataType;
  language: 'es' | 'en';
  isXRay?: boolean;
}

export const ProjectScrollShowcase: React.FC<ProjectScrollShowcaseProps> = ({
  proyectos,
  currentPortfolioData,
  language,
  isXRay = false,
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const totalProjects = proyectos.length;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [stageProgress, setStageProgress] = useState<number>(0);
  const [phoneScreenTab, setPhoneScreenTab] = useState<'ui' | 'arch' | 'code'>('ui');

  // Si el usuario activa el modo X-Ray global, cambiar automáticamente la pantalla del teléfono a Arquitectura
  useEffect(() => {
    setPhoneScreenTab(isXRay ? 'arch' : 'ui');
  }, [isXRay]);

  // Scroll-Stopping (Sticky Pinning) para la galería de proyectos principales
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current || totalProjects === 0) return;
      const rect = trackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDistance = rect.height - windowHeight;

      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const rawRatio = Math.min(1, Math.max(0, scrolled / scrollableDistance));
      setStageProgress(rawRatio);

      const idx = Math.min(
        totalProjects - 1,
        Math.max(0, Math.floor(rawRatio * totalProjects))
      );
      setActiveIndex(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalProjects]);

  const jumpToProject = (index: number) => {
    setActiveIndex(index);
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const absoluteTrackTop = window.scrollY + rect.top;
    const scrollableDistance = rect.height - window.innerHeight;
    const targetScrollY =
      absoluteTrackTop + ((index + 0.35) / totalProjects) * scrollableDistance;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  const activeProject = proyectos[activeIndex] || proyectos[0];
  if (!activeProject) return null;

  const isCompleted =
    activeProject.estado === currentPortfolioData.projectsSettings.statusCompleted;
  const isInProgress =
    activeProject.estado === currentPortfolioData.projectsSettings.statusInProgress;

  const youtubeLinks = activeProject.youtube
    ? activeProject.youtube.trim().split(/\s+/).filter(Boolean)
    : [];

  // Ángulo 3D dinámico del dispositivo Android al hacer scroll
  const localStepProgress = (stageProgress * totalProjects) % 1;
  const phoneRotateY = -10 + Math.sin(localStepProgress * Math.PI * 2) * 7;
  const phoneRotateX = 4 - Math.cos(localStepProgress * Math.PI * 2) * 3.5;

  // Clasificación automática de las tecnologías del proyecto actual en capas para el diagrama del teléfono
  const uiTechs = activeProject.tecnologias.filter(t =>
    /compose|xml|material|coil|glide|navigation|recyclerview|camera/i.test(t)
  );
  const domainTechs = activeProject.tecnologias.filter(t =>
    /kotlin|mvvm|clean|flow|coroutine|livedata|hilt|koin|junit|mock|robolectric|kdoc/i.test(t)
  );
  const dataTechs = activeProject.tecnologias.filter(t =>
    /retrofit|room|sql|firebase|firestore|graphql|okhttp|ktor|exposed|postgres|gson|shared|api|fcm/i.test(t)
  );

  return (
    <div ref={trackRef} className="relative min-h-[280vh] w-full">
      <div className="sticky top-0 min-h-screen flex flex-col justify-center py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Halo de luz detrás del dispositivo */}
        <div
          style={{
            transform: `translate3d(${(0.5 - stageProgress) * 140}px, 0, 0)`,
          }}
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-gradient-to-tr from-emerald-500/15 via-cyan-500/12 to-blue-500/15 blur-[120px] transition-transform duration-300"
        />

        <div className="relative z-10 max-w-6xl w-full mx-auto">
          {/* Encabezado de la sección */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
                <Sparkles className="w-3 h-3" />{' '}
                {language === 'es'
                  ? '04 // VITRINA INTERACTIVA DE PRODUCTOS'
                  : '04 // SCROLL-STOPPING PRODUCT SHOWCASE'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                {currentPortfolioData.projectsSettings.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
                {currentPortfolioData.projectsSettings.subtitle}
              </p>
            </div>

            {/* Selector rápido de proyectos (01 a 07) */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {proyectos.map((p, idx) => {
                const isCurrent = idx === activeIndex;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => jumpToProject(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 ${
                      isCurrent
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.45)] scale-105'
                        : 'bg-white/70 dark:bg-slate-900/70 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Escenario Principal: Dispositivo Android 3D Interactivo (Izquierda) + Especificaciones (Derecha) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Columna Izquierda (5 cols): Chasis 3D de Smartphone Android Interactivo */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center [perspective:1400px]">
              <div
                style={{
                  transform: `rotateY(${phoneRotateY.toFixed(2)}deg) rotateX(${phoneRotateX.toFixed(2)}deg)`,
                  transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                className="relative w-full max-w-[350px] sm:max-w-[380px] rounded-[42px] p-3 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 shadow-[0_30px_90px_rgba(0,0,0,0.65),0_0_40px_rgba(16,185,129,0.22)] ring-1 ring-white/25"
              >
                {/* Botones físicos laterales del chasis Android */}
                <div className="absolute -right-[3px] top-24 w-[3px] h-12 rounded-r bg-slate-600" />
                <div className="absolute -right-[3px] top-40 w-[3px] h-8 rounded-r bg-slate-600" />

                {/* Pantalla AMOLED interna con Pestañas Interactivas */}
                <div className="relative rounded-[32px] overflow-hidden bg-slate-950 border border-white/10 aspect-[4/3.4] flex flex-col">
                  {/* Barra de estado Android + Cámara Punch-hole */}
                  <div className="relative z-20 flex items-center justify-between px-5 py-2 bg-slate-950/90 text-[10px] font-mono text-slate-300 border-b border-white/10">
                    <span>Android 15 • {phoneScreenTab.toUpperCase()}</span>
                    <div className="w-2.5 h-2.5 rounded-full bg-black ring-1 ring-white/20" />
                    <span className="text-emerald-400">60 FPS</span>
                  </div>

                  {/* Contenido dinámico dentro de la pantalla del dispositivo */}
                  <div className="relative flex-1 w-full overflow-hidden bg-slate-900 flex flex-col">
                    {phoneScreenTab === 'ui' && (
                      <div className="relative w-full h-full">
                        <img
                          key={activeProject.id}
                          src={activeProject.imagen}
                          alt={activeProject.titulo}
                          className="w-full h-full object-cover object-center animate-fadeInUp"
                        />
                        {isXRay && (
                          <div className="absolute inset-2 border border-dashed border-emerald-400/80 rounded-xl pointer-events-none flex items-end p-2">
                            <span className="px-2 py-0.5 rounded bg-slate-950/90 text-[9px] font-mono text-emerald-300">
                              Composable: {activeProject.titulo.replace(/\s+/g, '')}Screen()
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {phoneScreenTab === 'arch' && (
                      <div className="p-4 h-full flex flex-col justify-between bg-[#060a12] text-left animate-fadeInUp overflow-y-auto">
                        <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                          {language === 'es'
                            ? 'ESQUEMA DE ARQUITECTURA EN VIVO'
                            : 'LIVE ARCHITECTURE BLUEPRINT'}
                        </div>

                        <div className="space-y-2 my-auto">
                          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                            <div className="text-[9px] font-mono text-emerald-300 font-bold">
                              {language === 'es'
                                ? 'CAPA UI (PRESENTACIÓN)'
                                : 'UI LAYER (PRESENTATION)'}
                            </div>
                            <div className="text-[11px] text-white font-mono truncate">
                              {uiTechs.length > 0 ? uiTechs.join(' • ') : 'Jetpack Compose / XML'}
                            </div>
                          </div>

                          <div className="flex justify-center text-emerald-400 text-[10px] font-mono">
                            ↓ StateFlow / Events ↑
                          </div>

                          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                            <div className="text-[9px] font-mono text-cyan-300 font-bold">
                              {language === 'es'
                                ? 'DOMINIO & ARQUITECTURA'
                                : 'DOMAIN & ARCHITECTURE'}
                            </div>
                            <div className="text-[11px] text-white font-mono truncate">
                              {domainTechs.length > 0 ? domainTechs.join(' • ') : 'Kotlin • MVVM'}
                            </div>
                          </div>

                          <div className="flex justify-center text-cyan-400 text-[10px] font-mono">
                            ↓ Suspend / Repository ↑
                          </div>

                          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30">
                            <div className="text-[9px] font-mono text-purple-300 font-bold">
                              {language === 'es'
                                ? 'DATOS & INFRAESTRUCTURA'
                                : 'DATA & INFRASTRUCTURE'}
                            </div>
                            <div className="text-[11px] text-white font-mono truncate">
                              {dataTechs.length > 0
                                ? dataTechs.join(' • ')
                                : activeProject.tecnologias.slice(0, 3).join(' • ')}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {phoneScreenTab === 'code' && (
                      <div className="p-4 h-full flex flex-col justify-between bg-[#05080f] text-left font-mono text-[11px] animate-fadeInUp overflow-y-auto">
                        <div className="text-[10px] text-cyan-400">
                          // {activeProject.titulo.replace(/\s+/g, '')}ViewModel.kt
                        </div>
                        <pre className="text-slate-200 leading-relaxed whitespace-pre-wrap text-[10px]">
{`@HiltViewModel
class ${activeProject.titulo.replace(/[^a-zA-Z0-9]/g, '')}VM @Inject constructor(
  private val repo: Repository
) : ViewModel() {

  val uiState = repo.observeData()
    .stateIn(
      scope = viewModelScope,
      started = SharingStarted.WhileSubscribed(5000),
      initialValue = UiState.Loading
    )
}`}
                        </pre>
                        <div className="text-[9px] text-emerald-400">
                          {language === 'es'
                            ? `✓ Compilado con Kotlin • ${activeProject.tecnologias.length} módulos`
                            : `✓ Compiled with Kotlin • ${activeProject.tecnologias.length} modules`}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Barra Interactiva de Navegación interna del Teléfono (Permite cambiar de vista dentro del mockup) */}
                  <div className="bg-slate-950/95 px-3 py-2 border-t border-white/10 flex items-center justify-around">
                    <button
                      type="button"
                      onClick={() => setPhoneScreenTab('ui')}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono transition-colors ${
                        phoneScreenTab === 'ui'
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Eye className="w-3 h-3" />
                      <span>{language === 'es' ? 'Vista App' : 'App UI'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPhoneScreenTab('arch')}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono transition-colors ${
                        phoneScreenTab === 'arch'
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Cpu className="w-3 h-3" />
                      <span>{language === 'es' ? 'Arq' : 'Arch'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPhoneScreenTab('code')}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono transition-colors ${
                        phoneScreenTab === 'code'
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Code2 className="w-3 h-3" />
                      <span>Kotlin</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Pie de telemetría del dispositivo */}
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
                <span>
                  {language === 'es'
                    ? 'TOCA LOS BOTONES DEL TELÉFONO O HAZ SCROLL ↓'
                    : 'TAP PHONE BUTTONS OR SCROLL TO INSPECT ↓'}
                </span>
              </div>
            </div>

            {/* Columna Derecha (7 cols): Ficha de Producto para CEOs, POs, SEMs e Ingenieros */}
            <div className="lg:col-span-7">
              <div
                key={activeProject.id}
                className="animate-fadeInUp rounded-[32px] p-6 sm:p-9 bg-white/85 dark:bg-slate-900/65 backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.09] shadow-[0_16px_50px_rgb(0,0,0,0.06)] dark:shadow-[0_25px_70px_rgb(0,0,0,0.5)] relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

                {/* Cabecera del proyecto */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
                    {language === 'es'
                      ? `LANZAMIENTO DE PRODUCTO // 0${activeIndex + 1}`
                      : `PRODUCT RELEASE // 0${activeIndex + 1}`}
                  </span>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-medium border ${
                      isCompleted
                        ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                        : isInProgress
                        ? 'bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30'
                        : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isCompleted
                          ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]'
                          : 'bg-amber-400 shadow-[0_0_8px_#fbbf24]'
                      }`}
                    />
                    {activeProject.estado}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-4">
                  {activeProject.titulo}
                </h3>

                {/* Impacto de Producto / Valor de Negocio (Para POs, SEMs y CEOs) */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-100/80 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.06]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1.5">
                    {language === 'es'
                      ? 'VALOR DE PRODUCTO & SOLUCIÓN'
                      : 'PRODUCT VALUE & SOLUTION'}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                    {activeProject.descripcion}
                  </p>
                </div>

                {/* Arquitectura e Ingeniería (Para Tech Leads, SEMs e Ingenieros) */}
                <div className="mb-7">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                    <Layers className="w-3.5 h-3.5 text-emerald-500" />
                    <span>
                      {language === 'es'
                        ? `ARQUITECTURA & STACK (${activeProject.tecnologias.length} TECNOLOGÍAS)`
                        : `ARCHITECTURE & STACK (${activeProject.tecnologias.length} TECHNOLOGIES)`}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tecnologias.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-white dark:bg-slate-950/80 text-slate-800 dark:text-slate-200 border border-slate-200/90 dark:border-white/10 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Acciones Directas (Código / Demos en Video) */}
                <div className="pt-5 border-t border-slate-200/70 dark:border-white/10 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3 flex-wrap">
                    {activeProject.github && (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:opacity-90 transition-all shadow-md"
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)]"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>
                          {currentPortfolioData.projectsSettings.buttonViewVideo}
                          {youtubeLinks.length > 1 ? ` ${idx + 1}` : ''}
                        </span>
                      </a>
                    ))}

                    {activeProject.makingVideo && (
                      <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                        <CircleEllipsis className="w-4 h-4" />
                        {currentPortfolioData.projectsSettings.buttonViewMakingVideo}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span>
                      0{activeIndex + 1} / 0{totalProjects}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
