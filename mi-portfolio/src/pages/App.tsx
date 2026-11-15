import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Code, Smartphone,
  Menu, X, Sun, Moon,
  ChevronDown, ArrowUpRight, Sparkles, ArrowUp, Layers, Cpu, Compass
} from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';
import { portfolioDataEs } from '../data/portfolioDataEs';
import { portfolioDataEn } from '../data/portfolioDataEn';
import { TechCard } from '../components/TechCard';
import { ProjectCard } from '../components/ProjectCard';
import { EducationCard } from '../components/EducationCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { PersonalSkillCard } from '../components/PersonalSkillCard';
import { CertificationCard } from '../components/CertificationCard';
import { QuantumMisteryCard } from '../components/QunatumMisteryCard';
import { ScrollyCanvas } from '../components/ScrollyCanvas';
import { AndroidCoreGraphic } from '../components/AndroidCoreGraphic';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [selectedTechCategory, setSelectedTechCategory] = useState<number>(-1); // -1 = Todas

  // Estados para las coreografías de Scrollytelling
  const [heroScrollRatio, setHeroScrollRatio] = useState<number>(0);
  const [aboutLitProgress, setAboutLitProgress] = useState<number>(0);
  const [heroTilt, setHeroTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

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

  // --- Coreografía de Scrollytelling (Hero XDR Recede + Scroll-Lit Text + 3D Canvas Drive) ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsScrolled(scrollTop > 30);

      // 1. Ratio de contracción espacial del Hero (0 a 1 en los primeros 700px)
      const heroRatio = Math.min(1, Math.max(0, scrollTop / 700));
      setHeroScrollRatio(heroRatio);

      // 2. Iluminación progresiva palabra por palabra en "Sobre Mí"
      if (aboutTextRef.current) {
        const rect = aboutTextRef.current.getBoundingClientRect();
        const startTrigger = windowHeight * 0.88;
        const endTrigger = windowHeight * 0.25;
        const rawProgress = (startTrigger - rect.top) / (startTrigger - endTrigger);
        setAboutLitProgress(Math.min(1, Math.max(0, rawProgress)));
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
          { threshold: 0.08 }
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

  // Interacción 3D del Hero con el cursor
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroTilt({ x: ny * -8, y: nx * 10 });
  };

  const handleHeroMouseLeave = () => {
    setHeroTilt({ x: 0, y: 0 });
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

  // Transformaciones físicas para el Hero Scrollytelling Stage
  const heroScale = 1 - heroScrollRatio * 0.09;
  const heroBorderRadius = Math.round(heroScrollRatio * 44);
  const heroRotateX = heroScrollRatio * 8 + heroTilt.x * 0.4;
  const heroContentTranslateY = heroScrollRatio * -55;
  const heroContentOpacity = 1 - heroScrollRatio * 0.8;

  // Capítulos para el riel lateral de Scrollytelling
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#05080d] text-slate-900 dark:text-slate-100 font-inter selection:bg-emerald-500/30 selection:text-emerald-300 transition-colors duration-500 relative">

      {/* Motor 3D Procedural de Fondo (Canvas 100% propio sin imágenes/videos externos) */}
      <ScrollyCanvas scrollProgress={scrollProgress} theme={theme} />

      {/* Malla arquitectónica sutil superpuesta */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-60 dark:opacity-100" />

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
              ? 'bg-white/80 dark:bg-slate-900/75 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.55)] border border-slate-200/80 dark:border-white/[0.09] py-3 px-4 sm:px-6'
              : 'bg-white/60 dark:bg-slate-900/45 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 py-3.5 px-4 sm:px-6'
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo y nombre */}
            <button
              onClick={() => scrollToSection('inicio')}
              className="flex items-center gap-3 group text-left focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-2 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.35)] group-hover:scale-105 transition-transform duration-300">
                <Code className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <span className="text-base sm:text-lg font-bold font-heading tracking-tight text-slate-900 dark:text-white">
                {currentPortfolioData.personal.nombre}
              </span>
            </button>

            {/* Menú Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {currentPortfolioData.navItems.map(item => {
                const isSubItemActive = item.subItems?.some(sub => sub.id === activeSection);
                const isActive = activeSection === item.id || isSubItemActive;

                return item.subItems ? (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => scrollToSection(item.subItems![0].id)}
                      className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
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
                    className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
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

            {/* Controles de Idioma, Tema y Menú Móvil */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase border bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40 transition-all duration-300"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>

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

      {/* ////////////////////////// CHAPTER 01: Hero Scrollytelling Stage (100% Procedural CSS/SVG/3D) ////////////////////////// */}
      <section
        id="inicio"
        ref={sectionRefs.inicio}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative min-h-screen flex items-center justify-center overflow-hidden [perspective:1400px]"
      >
        <div
          style={{
            transform: `scale(${heroScale.toFixed(4)}) rotateX(${heroRotateX.toFixed(2)}deg) rotateY(${(heroTilt.y * 0.35).toFixed(2)}deg)`,
            borderRadius: `${heroBorderRadius}px`,
          }}
          className={`relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-24 overflow-hidden transition-[box-shadow,border-color] duration-300 ${
            heroScrollRatio > 0.04
              ? 'ring-1 ring-emerald-500/30 dark:ring-white/20 shadow-[0_35px_120px_rgba(16,185,129,0.22)] bg-white/40 dark:bg-slate-950/55 backdrop-blur-xl'
              : ''
          }`}
        >
          {/* Escena Holográfica Procedural (Reemplaza cualquier video externo con arte generativo propio) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Auroras volumétricas dinámicas */}
            <div
              style={{
                transform: `translate3d(${(heroTilt.y * -4).toFixed(1)}px, ${(heroTilt.x * -4).toFixed(1)}px, 0)`,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] sm:w-[760px] sm:h-[760px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-cyan-500/12 to-purple-500/15 blur-[110px]"
            />

            {/* Anillos orbitales SVG de precisión en perspectiva */}
            <svg
              viewBox="0 0 1000 1000"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] sm:w-[1150px] sm:h-[1150px] opacity-35 dark:opacity-45"
            >
              <defs>
                <linearGradient id="heroOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <g
                style={{
                  transform: `rotate(${(scrollProgress * 2.5).toFixed(1)}deg)`,
                  transformOrigin: '500px 500px',
                }}
              >
                <circle
                  cx="500"
                  cy="500"
                  r="340"
                  fill="none"
                  stroke="url(#heroOrbitGrad)"
                  strokeWidth="1"
                  strokeDasharray="10 18"
                />
                <circle
                  cx="500"
                  cy="500"
                  r="430"
                  fill="none"
                  stroke="url(#heroOrbitGrad)"
                  strokeWidth="1.2"
                  strokeDasharray="80 140"
                />
                <circle cx="500" cy="160" r="4" fill="#34d399" />
                <circle cx="840" cy="500" r="3.5" fill="#38bdf8" />
                <circle cx="160" cy="500" r="3.5" fill="#a855f7" />
              </g>
            </svg>

            {/* Bisel especular superior XDR */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
          </div>

          {/* Tarjetas Flotantes de Telemetría 3D en las esquinas del Hero (Desktop) */}
          <div
            style={{
              transform: `translate3d(${(heroTilt.y * 2.2).toFixed(1)}px, ${(heroTilt.x * 2.2 - heroScrollRatio * 80).toFixed(1)}px, 40px)`,
            }}
            className="hidden xl:flex absolute left-12 top-36 z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 dark:bg-slate-900/65 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-2xl"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
              <Layers className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                Architecture
              </div>
              <div className="text-xs font-bold font-heading text-slate-800 dark:text-slate-100">
                Kotlin • MVVM • Clean
              </div>
            </div>
          </div>

          <div
            style={{
              transform: `translate3d(${(heroTilt.y * -2.2).toFixed(1)}px, ${(heroTilt.x * -2.2 - heroScrollRatio * 90).toFixed(1)}px, 40px)`,
            }}
            className="hidden xl:flex absolute right-12 bottom-32 z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 dark:bg-slate-900/65 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-2xl"
          >
            <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                UI Engine
              </div>
              <div className="text-xs font-bold font-heading text-slate-800 dark:text-slate-100">
                Jetpack Compose • Coroutines
              </div>
            </div>
          </div>

          {/* Contenido central del Hero */}
          <div
            style={{
              transform: `translateY(${heroContentTranslateY.toFixed(1)}px)`,
              opacity: Math.max(0.12, heroContentOpacity),
            }}
            className={`relative z-10 max-w-5xl mx-auto text-center ${
              visibleSections.inicio ? 'animate-fadeInUp' : 'opacity-0'
            }`}
          >
            {/* Badge de rol con indicador vivo */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 dark:bg-white/[0.07] backdrop-blur-xl border border-slate-200/80 dark:border-white/15 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-mono mb-8 shadow-[0_0_30px_rgba(16,185,129,0.18)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400" />
              </span>
              <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{currentPortfolioData.personal.titulo}</span>
            </div>

            {/* Nombre monumental con acabado metálico XDR */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-hero-name tracking-tight bg-gradient-to-b from-slate-950 via-slate-800 to-slate-500 dark:from-white dark:via-white dark:to-slate-400 bg-clip-text text-transparent mb-6 drop-shadow-sm">
              {currentPortfolioData.personal.nombre}
            </h1>

            {/* Frase dinámica cinética */}
            <div className="max-w-3xl mx-auto space-y-2.5 mb-12">
              <p className="text-lg sm:text-2xl md:text-3xl font-hero-title text-slate-700 dark:text-slate-200/90 font-normal leading-relaxed">
                {currentPortfolioData.hero.staticHeroTitlePartOne}
              </p>

              <div className="h-14 sm:h-16 flex items-center justify-center">
                <span
                  key={currentDynamicPhraseIndex}
                  className="inline-block px-5 py-1.5 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 dark:border-emerald-400/30 backdrop-blur-md text-2xl sm:text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-300 dark:via-teal-200 dark:to-cyan-300 bg-clip-text text-transparent animate-fade-in-out-single"
                >
                  {currentPortfolioData.hero.dynamicPhrases[currentDynamicPhraseIndex]}
                </span>
              </div>

              <p className="text-lg sm:text-2xl md:text-3xl font-hero-title text-slate-700 dark:text-slate-200/90 font-normal leading-relaxed">
                {currentPortfolioData.hero.staticHeroTitlePartTwo}
              </p>
            </div>

            {/* Botones de acción (CTAs) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('proyectos')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.65)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{currentPortfolioData.hero.buttonProjects}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={() => scrollToSection('contacto')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-slate-800 dark:text-white bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 backdrop-blur-md border border-slate-300/80 dark:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{currentPortfolioData.hero.buttonContact}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ////////////////////////// CHAPTER 02: "Sobre mí" + Escultura SVG Android Procedural ////////////////////////// */}
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
              <Sparkles className="w-3 h-3" /> 02 // Profile
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

              {/* Escultura SVG Procedural Propia (Sin usar URL externa de developer.android.com) */}
              <div className="lg:w-2/5 flex justify-center items-center">
                <AndroidCoreGraphic
                  scrollProgress={scrollProgress}
                  altText={currentPortfolioData.aboutMe.androidSvgDescription}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ////////////////////////// CHAPTER 03: Technologies Section ////////////////////////// */}
      <section
        id="tecnologias"
        ref={sectionRefs.tecnologias}
        className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-950/50 backdrop-blur-sm border-y border-slate-200/60 dark:border-white/[0.05]"
      >
        <div
          className={`max-w-6xl mx-auto ${
            visibleSections.tecnologias ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
              03 // Tech Stack
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.technologiesTitle.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.technologiesTitle.subtitle}
            </p>
          </div>

          {/* Barra de Píldoras Interactiva estilo Apple */}
          <div className="flex justify-center mb-14">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg overflow-x-auto no-scrollbar max-w-full">
              <button
                type="button"
                onClick={() => setSelectedTechCategory(-1)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedTechCategory === -1
                    ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06]'
                }`}
              >
                {language === 'es' ? 'Todas' : 'All'}
              </button>

              {nonEmptyCategories.map((categoryGroup, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedTechCategory(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedTechCategory === idx
                      ? 'bg-emerald-500 text-slate-950 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06]'
                  }`}
                >
                  {categoryGroup.category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-14">
            {currentPortfolioData.tecnologiasCategorizadas.map((categoryGroup, index) => {
              const nonEmptyIdx = nonEmptyCategories.indexOf(categoryGroup);
              if (
                selectedTechCategory !== -1 &&
                categoryGroup.items.length > 0 &&
                nonEmptyIdx !== selectedTechCategory
              ) {
                return null;
              }

              return (
                <div key={index} className="animate-fadeInUp">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-800 dark:text-slate-200">
                      {categoryGroup.category}
                    </h3>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-300 dark:from-white/15 to-transparent" />
                  </div>

                  {categoryGroup.items.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {categoryGroup.items.map((tech, techIndex) => (
                        <TechCard key={techIndex} tech={tech} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {currentPortfolioData.quantumItems && (
            <div className="mt-14 flex flex-col items-center">
              {currentPortfolioData.quantumItems.map((tech, techIndex) => (
                <QuantumMisteryCard key={techIndex} tech={tech} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ////////////////////////// CHAPTER 04: Projects Section ////////////////////////// */}
      <section
        id="proyectos"
        ref={sectionRefs.proyectos}
        className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`max-w-6xl mx-auto ${
            visibleSections.proyectos ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
              04 // Featured Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.projectsSettings.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.projectsSettings.subtitle}
            </p>
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

      {/* ////////////////////////// Subproyectos Section ////////////////////////// */}
      <section
        id="subProyectos"
        ref={sectionRefs.subProyectos}
        className="relative z-10 pb-24 sm:pb-32 pt-8 px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`max-w-6xl mx-auto ${
            visibleSections.subProyectos ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-4">
              04.B // Additional Labs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.subProjectsSettings.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.subProjectsSettings.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
            {currentPortfolioData.subProyectos.map(proyecto => (
              <ProjectCard
                key={proyecto.id}
                proyecto={proyecto}
                currentPortfolioData={currentPortfolioData}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ////////////////////////// CHAPTER 05: Experience Section ////////////////////////// */}
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
              05 // Career Path
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.experienceTitle.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.experienceTitle.subtitle}
            </p>
          </div>

          <div className="relative ml-2 sm:ml-4">
            <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-emerald-500/60 via-cyan-500/30 to-transparent" />
            <div className="space-y-8">
              {currentPortfolioData.experiencia.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
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
              06 // Academic
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.educationTitle.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.educationTitle.subtitle}
            </p>
          </div>

          <div className="relative ml-2 sm:ml-4 mb-24">
            <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-sky-500/60 to-transparent" />
            <div className="space-y-8">
              {currentPortfolioData.educationItems.map((edu, index) => (
                <EducationCard key={index} edu={edu} />
              ))}
            </div>
          </div>

          {/* Certificaciones */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-4">
              06.B // Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.certificationTitle.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.certificationTitle.subtitle}
            </p>
          </div>

          <div className="relative ml-2 sm:ml-4">
            <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-amber-500/60 to-transparent" />
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
              07 // Human Edge
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

      {/* ////////////////////////// CHAPTER 08: Contact Section ////////////////////////// */}
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
            08 // Connect
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
            {currentPortfolioData.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-14">
            {currentPortfolioData.contact.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href={`https://linkedin.com/in/${currentPortfolioData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="spotlight-card group relative flex items-center justify-between p-7 rounded-3xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-sky-500/40 dark:hover:border-sky-400/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgb(0,0,0,0.3)] transition-all duration-400 hover:-translate-y-1.5 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500 dark:text-sky-400 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                    LinkedIn
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {currentPortfolioData.contact.linkedinText}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href={`https://github.com/${currentPortfolioData.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="spotlight-card group relative flex items-center justify-between p-7 rounded-3xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-emerald-500/40 dark:hover:border-emerald-400/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgb(0,0,0,0.3)] transition-all duration-400 hover:-translate-y-1.5 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-slate-800 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                    GitHub
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {currentPortfolioData.contact.githubText}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
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
          heroScrollRatio > 0.45
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="pointer-events-auto inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-950/85 dark:bg-slate-900/90 text-white backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
          {/* Indicador de capítulo y sección actual */}
          <div className="flex items-center gap-2 pr-2 border-r border-white/15">
            <Compass className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span className="text-xs font-mono font-medium tracking-wide text-slate-200">
              {getActiveSectionLabel()}
            </span>
          </div>

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
    </div>
  );
};

export default Portfolio;
