import React, { useState, useEffect, useRef } from 'react';
import {
  Code,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Sparkles,
  ArrowUp,
  Compass,
  Eye,
  Search,
} from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';
import { portfolioDataEs } from '../data/portfolioDataEs';
import { portfolioDataEn } from '../data/portfolioDataEn';
import { ExplodedPhoneHero } from '../components/ExplodedPhoneHero';
import { TechScrollStage } from '../components/TechScrollStage';
import { ProjectScrollShowcase } from '../components/ProjectScrollShowcase';
import { HorizontalSubProjectsDeck } from '../components/HorizontalSubProjectsDeck';
import { ExecutiveBrandPillars } from '../components/ExecutiveBrandPillars';
import { CommandPaletteModal } from '../components/CommandPaletteModal';
import { ContactLaunchpad } from '../components/ContactLaunchpad';
import { ProjectCard } from '../components/ProjectCard';
import { EducationCard } from '../components/EducationCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { PersonalSkillCard } from '../components/PersonalSkillCard';
import { CertificationCard } from '../components/CertificationCard';
import { ScrollyCanvas } from '../components/ScrollyCanvas';
import { AndroidCoreGraphic } from '../components/AndroidCoreGraphic';
import { AndroidBootSplash } from '../components/AndroidBootSplash';
import { MagneticCursorHUD } from '../components/MagneticCursorHUD';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Nuevos estados para "Audience Lens (X-Ray)", Command Palette (Ctrl+K) y Rayos Láser de Timeline
  const [isXRay, setIsXRay] = useState<boolean>(false);
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);
  const [aboutLitProgress, setAboutLitProgress] = useState<number>(0);
  const [expBeamProgress, setExpBeamProgress] = useState<number>(0);
  const [eduBeamProgress, setEduBeamProgress] = useState<number>(0);

  // --- Lógica del modo oscuro (Oscuro por defecto para máximo contraste XDR) ---
  type Theme = 'light' | 'dark';
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme') as Theme;
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
      }
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Atajo global Ctrl+K / Cmd+K para abrir el Command Palette
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Referencias para cada sección
  const sectionRefs = {
    inicio: useRef<HTMLElement>(null),
    sobreMi: useRef<HTMLElement>(null),
    tecnologias: useRef<HTMLElement>(null),
    proyectos: useRef<HTMLElement>(null),
    subProyectos: useRef<HTMLElement>(null),
    experiencia: useRef<HTMLElement>(null),
    educacion: useRef<HTMLElement>(null),
    habilidadesPersonales: useRef<HTMLElement>(null),
    contacto: useRef<HTMLElement>(null),
  };

  const aboutTextRef = useRef<HTMLParagraphElement>(null);

  // --- Coreografía de Scrollytelling Global ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsScrolled(scrollTop > 30);

      // 1. Iluminación progresiva palabra por palabra en "Sobre Mí"
      if (aboutTextRef.current) {
        const rect = aboutTextRef.current.getBoundingClientRect();
        const startTrigger = windowHeight * 0.88;
        const endTrigger = windowHeight * 0.25;
        const rawProgress = (startTrigger - rect.top) / (startTrigger - endTrigger);
        setAboutLitProgress(Math.min(1, Math.max(0, rawProgress)));
      }

      // 2. Rayo láser de progreso para "Career Flight Recorder" (Experiencia)
      if (sectionRefs.experiencia.current) {
        const rect = sectionRefs.experiencia.current.getBoundingClientRect();
        const raw = (windowHeight * 0.7 - rect.top) / Math.max(1, rect.height * 0.85);
        setExpBeamProgress(Math.min(1, Math.max(0, raw)));
      }

      // 3. Rayo láser de progreso para "Educación y Certificaciones"
      if (sectionRefs.educacion.current) {
        const rect = sectionRefs.educacion.current.getBoundingClientRect();
        const raw = (windowHeight * 0.7 - rect.top) / Math.max(1, rect.height * 0.85);
        setEduBeamProgress(Math.min(1, Math.max(0, raw)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    inicio: true,
    sobreMi: false,
    tecnologias: false,
    proyectos: false,
    subProyectos: false,
    experiencia: false,
    educacion: false,
    habilidadesPersonales: false,
    contacto: false,
  });

  // Intersection Observer para animaciones de entrada y detección de capítulo activo
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const createObserver = (
      ref: React.RefObject<HTMLElement | null>,
      sectionKey: string,
      navId: string
    ) => {
      if (ref.current) {
        const revealObserver = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => ({ ...prev, [sectionKey]: true }));
              revealObserver.unobserve(entry.target);
            }
          },
          { threshold: 0.06 }
        );
        revealObserver.observe(ref.current);
        observers.push(revealObserver);

        const spyObserver = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(navId);
            }
          },
          { rootMargin: '-35% 0px -55% 0px' }
        );
        spyObserver.observe(ref.current);
        observers.push(spyObserver);
      }
    };

    createObserver(sectionRefs.inicio, 'inicio', 'inicio');
    createObserver(sectionRefs.sobreMi, 'sobreMi', 'sobre-mi');
    createObserver(sectionRefs.tecnologias, 'tecnologias', 'tecnologias');
    createObserver(sectionRefs.proyectos, 'proyectos', 'proyectos');
    createObserver(sectionRefs.subProyectos, 'subProyectos', 'proyectos');
    createObserver(sectionRefs.experiencia, 'experiencia', 'experiencia');
    createObserver(sectionRefs.educacion, 'educacion', 'educacion');
    createObserver(sectionRefs.habilidadesPersonales, 'habilidadesPersonales', 'habilidades-personales');
    createObserver(sectionRefs.contacto, 'contacto', 'contacto');

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const currentPortfolioData: PortfolioDataType = language === 'es' ? portfolioDataEs : portfolioDataEn;

  // --- Frases dinámicas del Hero ---
  const [currentDynamicPhraseIndex, setCurrentDynamicPhraseIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDynamicPhraseIndex(
        prevIndex => (prevIndex + 1) % currentPortfolioData.hero.dynamicPhrases.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentPortfolioData.hero.dynamicPhrases.length]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    setOpenMobileSubmenu(null);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getActiveSectionLabel = (): string => {
    for (const item of currentPortfolioData.navItems) {
      if (item.id === activeSection) return item.displayText;
      if (item.subItems) {
        const sub = item.subItems.find(s => s.id === activeSection);
        if (sub) return sub.displayText;
      }
    }
    return currentPortfolioData.navItems[0]?.displayText || '';
  };

  const aboutWords = currentPortfolioData.personal.descripcion.trim().split(/\s+/);

  const nonEmptyCategories = currentPortfolioData.tecnologiasCategorizadas.filter(
    cat => cat.items.length > 0
  );

  const scrollyChapters = [
    { id: 'inicio', code: '01' },
    { id: 'sobre-mi', code: '02' },
    { id: 'tecnologias', code: '03' },
    { id: 'proyectos', code: '04' },
    { id: 'experiencia', code: '05' },
    { id: 'educacion', code: '06' },
    { id: 'habilidades-personales', code: '07' },
    { id: 'contacto', code: '08' },
  ];

  return (
    <div
      className={`min-h-screen bg-slate-50 dark:bg-[#05080d] text-slate-900 dark:text-slate-100 font-inter selection:bg-emerald-500/30 selection:text-emerald-300 transition-colors duration-500 relative ${
        isXRay ? '[&_section]:outline-dashed [&_section]:outline-1 [&_section]:outline-emerald-500/30' : ''
      }`}
    >
      {/* Secuencia de Arranque Rápida (1.4s) estilo Android Kernel + Cursor Magnético HUD */}
      <AndroidBootSplash nombre={currentPortfolioData.personal.nombre} language={language} />
      <MagneticCursorHUD isXRay={isXRay} />

      {/* Motor 3D Procedural de Fondo (Canvas 100% propio) */}
      <ScrollyCanvas scrollProgress={scrollProgress} theme={theme} />

      {/* Malla arquitectónica sutil superpuesta (Se intensifica en modo Engineering X-Ray) */}
      <div
        className={`fixed inset-0 bg-grid-pattern pointer-events-none z-0 transition-opacity duration-500 ${
          isXRay ? 'opacity-100' : 'opacity-50 dark:opacity-90'
        }`}
      />

      {/* HUD Superior de Telemetría cuando el Modo Engineering X-Ray está activo */}
      {isXRay && (
        <div className="fixed top-20 right-6 z-40 hidden lg:flex flex-col gap-1.5 p-3.5 rounded-2xl bg-slate-950/90 text-emerald-400 border border-emerald-500/40 font-mono text-[10px] shadow-[0_0_30px_rgba(16,185,129,0.25)] pointer-events-none animate-fadeInUp">
          <div className="font-bold text-white flex items-center justify-between gap-4">
            <span>
              {language === 'es'
                ? 'INSPECTOR DE LAYOUT COMPOSE'
                : 'COMPOSE LAYOUT INSPECTOR'}
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <div>
            {language === 'es'
              ? 'MOTOR DE RENDER: 60 FPS • 0 JANKS'
              : 'RENDER ENGINE: 60 FPS • 0 JANKS'}
          </div>
          <div>
            {language === 'es' ? 'PROGRESO DE SCROLL:' : 'SCROLL PROGRESS:'}{' '}
            {scrollProgress.toFixed(1)}%
          </div>
          <div>
            {language === 'es' ? 'NODO ACTIVO:' : 'ACTIVE NODE:'} #{activeSection}
          </div>
          <div>
            {language === 'es'
              ? 'ARQ: CLEAN + MVVM + STATEFLOW'
              : 'ARCH: CLEAN + MVVM + STATEFLOW'}
          </div>
        </div>
      )}

      {/* Barra superior de progreso de lectura XDR */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 shadow-[0_0_14px_rgba(16,185,129,0.9)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Riel Lateral Izquierdo de Telemetría Scrollytelling (Desktop) */}
      <aside className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 pointer-events-auto">
        <div className="px-2 py-1 rounded-md bg-slate-900/60 dark:bg-white/[0.04] backdrop-blur-md border border-slate-300/40 dark:border-white/10 text-[10px] font-mono text-emerald-500 dark:text-emerald-400">
          {Math.round(scrollProgress)}%
        </div>
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-emerald-500/40 to-transparent" />
        <div className="flex flex-col gap-2.5">
          {scrollyChapters.map(ch => {
            const isCurrent = activeSection === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => scrollToSection(ch.id)}
                title={ch.id}
                className="group flex items-center gap-2 focus:outline-none"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isCurrent
                      ? 'w-2.5 h-6 bg-emerald-400 shadow-[0_0_12px_#34d399]'
                      : 'w-1.5 h-1.5 bg-slate-400/50 dark:bg-white/20 group-hover:bg-emerald-400/70 group-hover:scale-125'
                  }`}
                />
                <span
                  className={`text-[10px] font-mono transition-all duration-300 ${
                    isCurrent
                      ? 'opacity-100 text-emerald-500 dark:text-emerald-400 font-semibold translate-x-0'
                      : 'opacity-0 -translate-x-2 group-hover:opacity-75 group-hover:translate-x-0 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {ch.code}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* ////////////////////////// Floating Glass Navigation ////////////////////////// */}
      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
        <nav
          className={`pointer-events-auto max-w-6xl mx-auto rounded-2xl transition-all duration-500 ${
            isScrolled
              ? 'bg-white/85 dark:bg-slate-900/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.55)] border border-slate-200/80 dark:border-white/[0.09] py-2.5 px-4 sm:px-6'
              : 'bg-white/65 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 py-3 px-4 sm:px-6'
          }`}
        >
          <div className="flex justify-between items-center gap-2">
            {/* Logo y nombre */}
            <button
              onClick={() => scrollToSection('inicio')}
              className="flex items-center gap-2.5 group text-left focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-2 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.35)] group-hover:scale-105 transition-transform duration-300">
                <Code className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="text-sm sm:text-base font-bold font-heading tracking-tight text-slate-900 dark:text-white truncate">
                {currentPortfolioData.personal.nombre}
              </span>
            </button>

            {/* Menú Desktop */}
            <div className="hidden lg:flex items-center gap-0.5">
              {currentPortfolioData.navItems.map(item => {
                const isSubItemActive = item.subItems?.some(sub => sub.id === activeSection);
                const isActive = activeSection === item.id || isSubItemActive;

                return item.subItems ? (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => scrollToSection(item.subItems![0].id)}
                      className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                        isActive
                          ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.06]'
                      }`}
                    >
                      <span>{item.displayText}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    <div className="absolute left-0 mt-2 w-52 pt-1 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-20">
                      <div className="rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 shadow-2xl p-1.5">
                        {item.subItems.map(subItem => (
                          <button
                            key={subItem.id}
                            onClick={() => scrollToSection(subItem.id)}
                            className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                              activeSection === subItem.id
                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06]'
                            }`}
                          >
                            {subItem.displayText}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.06]'
                    }`}
                  >
                    {item.displayText}
                  </button>
                );
              })}
            </div>

            {/* Controles Superiores: Buscador Ctrl+K, Lente X-Ray, Idioma, Tema */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Botón Command Palette (Ctrl + K) */}
              <button
                type="button"
                onClick={() => setIsCommandOpen(true)}
                title="Command Palette (Ctrl + K)"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40 transition-all"
              >
                <Search className="w-3.5 h-3.5 text-emerald-500" />
                <span className="hidden sm:inline text-[11px] opacity-80">Ctrl+K</span>
              </button>

              {/* Selector de Lente: Product Keynote vs Engineering X-Ray */}
              <button
                type="button"
                onClick={() => setIsXRay(prev => !prev)}
                title={
                  language === 'es'
                    ? 'Alternar Inspector de Ingeniería Rayos-X'
                    : 'Toggle Engineering X-Ray Inspector'
                }
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono font-semibold border transition-all duration-300 ${
                  isXRay
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.5)]'
                    : 'bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden md:inline">
                  {isXRay
                    ? language === 'es'
                      ? 'RAYOS-X'
                      : 'X-RAY'
                    : language === 'es'
                    ? 'LENTE'
                    : 'LENS'}
                </span>
              </button>

              {/* Selector de Idioma */}
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="px-2.5 py-1.5 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase border bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40 transition-all duration-300"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>

              {/* Selector de Tema */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 rounded-xl border bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40 transition-all duration-300"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              <button
                className="lg:hidden p-2 rounded-xl border bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-white/10 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Menú Móvil Desplegable */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-slate-200/60 dark:border-white/10 space-y-1">
              {currentPortfolioData.navItems.map(item =>
                item.subItems ? (
                  <div key={item.id}>
                    <button
                      onClick={() =>
                        setOpenMobileSubmenu(openMobileSubmenu === item.id ? null : item.id)
                      }
                      className="flex w-full justify-between items-center px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                    >
                      <span>{item.displayText}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openMobileSubmenu === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openMobileSubmenu === item.id && (
                      <div className="pl-4 py-1 space-y-1">
                        {item.subItems.map(subItem => (
                          <button
                            key={subItem.id}
                            onClick={() => scrollToSection(subItem.id)}
                            className="block w-full text-left px-3.5 py-2 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-500"
                          >
                            {subItem.displayText}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                  >
                    {item.displayText}
                  </button>
                )
              )}
            </div>
          )}
        </nav>
      </header>

      {/* ////////////////////////// CHAPTER 01: Exploded 3D Android Phone Hero (Scroll-Stopping) ////////////////////////// */}
      <section id="inicio" ref={sectionRefs.inicio} className="relative z-10">
        <ExplodedPhoneHero
          currentPortfolioData={currentPortfolioData}
          currentDynamicPhraseIndex={currentDynamicPhraseIndex}
          language={language}
          isXRay={isXRay}
          onScrollToSection={scrollToSection}
        />
      </section>

      {/* ////////////////////////// CHAPTER 02: "Sobre mí" + Escultura SVG Android + Pilares Ejecutivos ////////////////////////// */}
      <section
        id="sobre-mi"
        ref={sectionRefs.sobreMi}
        className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div
          className={`max-w-6xl mx-auto ${
            visibleSections.sobreMi ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
              <Sparkles className="w-3 h-3" />{' '}
              {language === 'es'
                ? '02 // Perfil & Valor de Marca'
                : '02 // Profile & Brand Value'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.aboutMe.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.aboutMe.subtitle}
            </p>
          </div>

          <div className="relative rounded-[32px] p-8 sm:p-12 md:p-14 bg-white/80 dark:bg-slate-900/55 backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.09] shadow-[0_12px_40px_rgb(0,0,0,0.04)] dark:shadow-[0_25px_70px_rgb(0,0,0,0.45)] overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-3/5 text-center lg:text-left space-y-6">
                <div className="inline-block px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200/70 dark:border-white/10 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  {currentPortfolioData.personal.titulo}
                </div>

                {/* Párrafo con iluminación progresiva palabra por palabra al hacer scroll */}
                <p
                  ref={aboutTextRef}
                  className="text-lg sm:text-xl md:text-2xl leading-relaxed font-heading font-semibold tracking-tight flex flex-wrap justify-center lg:justify-start gap-x-[0.32em] gap-y-1"
                >
                  {aboutWords.map((word, index) => {
                    const wordThreshold = index / aboutWords.length;
                    const isLit = aboutLitProgress >= wordThreshold;
                    return (
                      <span
                        key={index}
                        className={`transition-all duration-300 ${
                          isLit
                            ? 'text-slate-900 dark:text-white opacity-100'
                            : 'text-slate-400 dark:text-slate-600 opacity-35'
                        }`}
                      >
                        {word}
                      </span>
                    );
                  })}
                </p>
              </div>

              {/* Escultura SVG Procedural Propia */}
              <div className="lg:w-2/5 flex justify-center items-center">
                <AndroidCoreGraphic
                  scrollProgress={scrollProgress}
                  altText={currentPortfolioData.aboutMe.androidSvgDescription}
                />
              </div>
            </div>
          </div>

          {/* Pilares de Valor de Marca para CEOs, POs, SEMs e Ingenieros */}
          <ExecutiveBrandPillars
            language={language}
            projectsCount={currentPortfolioData.proyectos.length}
            subProjectsCount={currentPortfolioData.subProyectos.length}
            techCount={nonEmptyCategories.reduce((acc, c) => acc + c.items.length, 0)}
          />
        </div>
      </section>

      {/* ////////////////////////// CHAPTER 03: Technologies Scroll-Stopping Section ////////////////////////// */}
      <section
        id="tecnologias"
        ref={sectionRefs.tecnologias}
        className="relative z-10 bg-slate-100/50 dark:bg-slate-950/55 backdrop-blur-sm border-y border-slate-200/60 dark:border-white/[0.05]"
      >
        <TechScrollStage
          title={currentPortfolioData.technologiesTitle.title}
          subtitle={currentPortfolioData.technologiesTitle.subtitle}
          categories={currentPortfolioData.tecnologiasCategorizadas}
          quantumItems={currentPortfolioData.quantumItems}
          language={language}
          onSkipNext={() => scrollToSection('proyectos')}
        />
      </section>

      {/* ////////////////////////// CHAPTER 04: Projects Scroll-Stopping Product Showcase ////////////////////////// */}
      <section id="proyectos" ref={sectionRefs.proyectos} className="relative z-10">
        <ProjectScrollShowcase
          proyectos={currentPortfolioData.proyectos}
          currentPortfolioData={currentPortfolioData}
          language={language}
          isXRay={isXRay}
        />

        {/* Galería Interactiva Completa con Quick Look debajo del Showcase Anclado */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 font-bold">
              {language === 'es'
                ? `TODOS LOS PROYECTOS DESTACADOS (${currentPortfolioData.proyectos.length})`
                : `ALL FEATURED RELEASES (${currentPortfolioData.proyectos.length})`}
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-300 dark:from-white/15 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
            {currentPortfolioData.proyectos.map(proyecto => (
              <ProjectCard
                key={proyecto.id}
                proyecto={proyecto}
                currentPortfolioData={currentPortfolioData}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ////////////////////////// CHAPTER 04.B: Subproyectos en Carrusel Horizontal Scroll-Stopping ////////////////////////// */}
      <section
        id="subProyectos"
        ref={sectionRefs.subProyectos}
        className="relative z-10 border-t border-slate-200/60 dark:border-white/[0.05]"
      >
        <HorizontalSubProjectsDeck
          subProyectos={currentPortfolioData.subProyectos}
          currentPortfolioData={currentPortfolioData}
          language={language}
          onSkipNext={() => scrollToSection('experiencia')}
        />
      </section>

      {/* ////////////////////////// CHAPTER 05: Experience Section ("Career Flight Recorder" con Rayo Láser de Scroll) ////////////////////////// */}
      <section
        id="experiencia"
        ref={sectionRefs.experiencia}
        className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-950/50 backdrop-blur-sm border-y border-slate-200/60 dark:border-white/[0.05]"
      >
        <div
          className={`max-w-4xl mx-auto ${
            visibleSections.experiencia ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
              {language === 'es'
                ? '05 // Trayectoria Profesional'
                : '05 // Career Flight Recorder'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.experienceTitle.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.experienceTitle.subtitle}
            </p>
          </div>

          <div className="relative ml-2 sm:ml-4">
            {/* Riel base + Haz de luz esmeralda que desciende según el scroll */}
            <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-slate-300/60 dark:bg-white/10" />
            <div
              style={{ height: `${Math.round(expBeamProgress * 100)}%` }}
              className="absolute left-0 top-3 w-[2px] bg-gradient-to-b from-emerald-400 via-cyan-400 to-emerald-500 shadow-[0_0_15px_#10b981] transition-all duration-150"
            />
            <div className="space-y-8">
              {currentPortfolioData.experiencia.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} language={language} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ////////////////////////// CHAPTER 06: Education & Certifications Section ////////////////////////// */}
      <section
        id="educacion"
        ref={sectionRefs.educacion}
        className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`max-w-4xl mx-auto ${
            visibleSections.educacion ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-4">
              {language === 'es' ? '06 // Formación Académica' : '06 // Academic'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.educationTitle.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.educationTitle.subtitle}
            </p>
          </div>

          <div className="relative ml-2 sm:ml-4 mb-24">
            <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-slate-300/60 dark:bg-white/10" />
            <div
              style={{ height: `${Math.min(100, Math.round(eduBeamProgress * 140))}%` }}
              className="absolute left-0 top-3 w-[2px] bg-gradient-to-b from-sky-400 to-cyan-500 shadow-[0_0_15px_#38bdf8] transition-all duration-150"
            />
            <div className="space-y-8">
              {currentPortfolioData.educationItems.map((edu, index) => (
                <EducationCard key={index} edu={edu} />
              ))}
            </div>
          </div>

          {/* Certificaciones */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-4">
              {language === 'es' ? '06.B // Certificaciones' : '06.B // Credentials'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.certificationTitle.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.certificationTitle.subtitle}
            </p>
          </div>

          <div className="relative ml-2 sm:ml-4">
            <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-slate-300/60 dark:bg-white/10" />
            <div
              style={{ height: `${Math.round(eduBeamProgress * 100)}%` }}
              className="absolute left-0 top-3 w-[2px] bg-gradient-to-b from-amber-400 to-orange-500 shadow-[0_0_15px_#f59e0b] transition-all duration-150"
            />
            <div className="space-y-8">
              {currentPortfolioData.certificationItems.map((cert, index) => (
                <CertificationCard key={index} cert={cert} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ////////////////////////// CHAPTER 07: Personal Skills Section ////////////////////////// */}
      <section
        id="habilidades-personales"
        ref={sectionRefs.habilidadesPersonales}
        className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-950/50 backdrop-blur-sm border-y border-slate-200/60 dark:border-white/[0.05]"
      >
        <div
          className={`max-w-6xl mx-auto ${
            visibleSections.habilidadesPersonales ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
              {language === 'es' ? '07 // Habilidades Humanas' : '07 // Human Edge'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.personalSkillsTitle.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.personalSkillsTitle.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {currentPortfolioData.personalSkillItem.map((skill, index) => (
              <PersonalSkillCard
                key={index}
                skill={skill}
                isVisible={visibleSections.habilidadesPersonales}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ////////////////////////// CHAPTER 08: Contact Launchpad Section ////////////////////////// */}
      <section
        id="contacto"
        ref={sectionRefs.contacto}
        className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div
          className={`max-w-4xl mx-auto text-center ${
            visibleSections.contacto ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
            {language === 'es' ? '08 // Contacto & Simulador' : '08 // Launchpad & Connect'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
            {currentPortfolioData.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-12">
            {currentPortfolioData.contact.subtitle}
          </p>

          <ContactLaunchpad
            currentPortfolioData={currentPortfolioData}
            language={language}
          />
        </div>
      </section>

      {/* ////////////////////////// Footer ////////////////////////// */}
      <footer className="relative z-10 border-t border-slate-200/70 dark:border-white/[0.06] bg-white/60 dark:bg-[#04060a]/80 backdrop-blur-xl py-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <Code className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="text-sm font-semibold font-heading text-slate-800 dark:text-slate-200">
              {currentPortfolioData.personal.nombre}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            © 2026 {currentPortfolioData.personal.nombre}. {currentPortfolioData.footer.text}
          </p>
        </div>
      </footer>

      {/* ////////////////////////// Apple Dynamic Island Action Bar (Flotante Inferior) ////////////////////////// */}
      <div
        className={`fixed bottom-5 inset-x-0 z-40 flex justify-center px-4 pointer-events-none transition-all duration-500 ${
          scrollProgress > 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="pointer-events-auto inline-flex items-center gap-2.5 sm:gap-3 px-4 py-2 rounded-full bg-slate-950/85 dark:bg-slate-900/90 text-white backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
          {/* Indicador de capítulo y sección actual */}
          <div className="flex items-center gap-2 pr-2 border-r border-white/15">
            <Compass
              className="w-3.5 h-3.5 text-emerald-400 animate-spin"
              style={{ animationDuration: '10s' }}
            />
            <span className="text-xs font-mono font-medium tracking-wide text-slate-200">
              {getActiveSectionLabel()}
            </span>
          </div>

          {/* Botón rápido a Command Palette */}
          <button
            type="button"
            onClick={() => setIsCommandOpen(true)}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-emerald-300 transition-colors"
          >
            <Search className="w-3 h-3" />
            <span>Ctrl+K</span>
          </button>

          {/* Botón rápido a Proyectos */}
          <button
            type="button"
            onClick={() => scrollToSection('proyectos')}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            {currentPortfolioData.hero.buttonProjects}
          </button>

          {/* Botón rápido a Contacto */}
          <button
            type="button"
            onClick={() => scrollToSection('contacto')}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
          >
            {currentPortfolioData.hero.buttonContact}
          </button>

          {/* Volver arriba */}
          <button
            type="button"
            onClick={() => scrollToSection('inicio')}
            aria-label="Volver arriba"
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Modal Command Palette (Ctrl + K) */}
      <CommandPaletteModal
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        currentPortfolioData={currentPortfolioData}
        language={language}
        onToggleLanguage={() => setLanguage(prev => (prev === 'es' ? 'en' : 'es'))}
        theme={theme}
        onToggleTheme={toggleTheme}
        isXRay={isXRay}
        onToggleXRay={() => setIsXRay(prev => !prev)}
        onScrollToSection={scrollToSection}
      />
    </div>
  );
};

export default Portfolio;
