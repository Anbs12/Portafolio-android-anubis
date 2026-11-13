import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Code, Smartphone,
  Menu, X, Sun, Moon,
  ChevronDown, ArrowUpRight, Sparkles, ArrowUp
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
import video_background from '../assets/videos/Developer_Workspace_Night_Cityscape_Video.mp4';
import { QuantumMisteryCard } from '../components/QunatumMisteryCard';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [selectedTechCategory, setSelectedTechCategory] = useState<number>(-1); // -1 = Todas

  // Estados para las coreografías por scroll estilo Apple
  const [heroScrollRatio, setHeroScrollRatio] = useState<number>(0);
  const [aboutLitProgress, setAboutLitProgress] = useState<number>(0);

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

  // --- Coreografía de Scroll estilo Apple (Hero XDR Recede + Scroll-Lit Text) ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsScrolled(scrollTop > 30);

      // 1. Ratio de contracción de la pantalla Hero XDR (0 a 1 en los primeros 650px)
      const heroRatio = Math.min(1, Math.max(0, scrollTop / 650));
      setHeroScrollRatio(heroRatio);

      // 2. Iluminación progresiva palabra por palabra en "Sobre Mí"
      if (aboutTextRef.current) {
        const rect = aboutTextRef.current.getBoundingClientRect();
        const startTrigger = windowHeight * 0.85;
        const endTrigger = windowHeight * 0.28;
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

  // Intersection Observer para animaciones de entrada y detección de sección activa
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

  // Obtener etiqueta de la sección actual para la Dynamic Island inferior
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

  // Palabras de la descripción para el efecto "Scroll-Lit XDR Text"
  const aboutWords = currentPortfolioData.personal.descripcion.trim().split(/\s+/);

  // Categorías de tecnologías con elementos visibles
  const nonEmptyCategories = currentPortfolioData.tecnologiasCategorizadas.filter(
    cat => cat.items.length > 0
  );

  // Transformaciones físicas para el Hero estilo Apple MacBook Pro XDR
  const heroScale = 1 - heroScrollRatio * 0.085;
  const heroBorderRadius = Math.round(heroScrollRatio * 40);
  const heroContentTranslateY = heroScrollRatio * -45;
  const heroContentOpacity = 1 - heroScrollRatio * 0.75;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#05080d] text-slate-900 dark:text-slate-100 font-inter selection:bg-emerald-500/30 selection:text-emerald-300 transition-colors duration-500 relative">

      {/* Barra superior de progreso de lectura */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ////////////////////////// Floating Glass Navigation ////////////////////////// */}
      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
        <nav
          className={`pointer-events-auto max-w-6xl mx-auto rounded-2xl transition-all duration-500 ${
            isScrolled
              ? 'bg-white/80 dark:bg-slate-900/75 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-slate-200/80 dark:border-white/[0.08] py-3 px-4 sm:px-6'
              : 'bg-slate-950/35 dark:bg-slate-900/40 backdrop-blur-xl border border-white/10 py-3.5 px-4 sm:px-6'
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
              <span
                className={`text-base sm:text-lg font-bold font-heading tracking-tight transition-colors ${
                  isScrolled
                    ? 'text-slate-900 dark:text-white'
                    : 'text-white'
                }`}
              >
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
                          ? 'text-emerald-500 dark:text-emerald-400 bg-emerald-500/10'
                          : isScrolled
                          ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.06]'
                          : 'text-white/85 hover:text-white hover:bg-white/10'
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
                        ? 'text-emerald-500 dark:text-emerald-400 bg-emerald-500/10'
                        : isScrolled
                        ? 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.06]'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
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
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase border transition-all duration-300 ${
                  isScrolled
                    ? 'bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40'
                    : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                }`}
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>

              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className={`p-2 rounded-xl border transition-all duration-300 ${
                  isScrolled
                    ? 'bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40'
                    : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                }`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              <button
                className={`lg:hidden p-2 rounded-xl border transition-colors ${
                  isScrolled
                    ? 'bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-white/10'
                    : 'bg-white/10 text-white border-white/15'
                }`}
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

      {/* ////////////////////////// Hero Section con Efecto "Apple XDR Display Recede" ////////////////////////// */}
      <section
        id="inicio"
        ref={sectionRefs.inicio}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Marco XDR que se contrae y redondea suavemente al hacer scroll */}
        <div
          style={{
            transform: `scale(${heroScale.toFixed(4)})`,
            borderRadius: `${heroBorderRadius}px`,
          }}
          className={`relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-24 overflow-hidden transition-shadow duration-300 ${
            heroScrollRatio > 0.05
              ? 'ring-1 ring-white/20 shadow-[0_30px_100px_rgba(16,185,129,0.2)]'
              : ''
          }`}
        >
          {/* Video de fondo original */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-[1.02]"
            >
              <source src={video_background} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>

            {/* Reflejo especular superior de pantalla XDR */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />
            <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90" />
          </div>

          {/* Contenido principal del Hero con Parallax suave */}
          <div
            style={{
              transform: `translateY(${heroContentTranslateY.toFixed(1)}px)`,
              opacity: Math.max(0.15, heroContentOpacity),
            }}
            className={`relative z-10 max-w-5xl mx-auto text-center ${
              visibleSections.inicio ? 'animate-fadeInUp' : 'opacity-0'
            }`}
          >
            {/* Badge de rol con indicador vivo */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-emerald-300 text-xs sm:text-sm font-mono mb-8 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>{currentPortfolioData.personal.titulo}</span>
            </div>

            {/* Nombre monumental con acabado metálico tipo Apple Pro */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-hero-name tracking-tight bg-gradient-to-b from-white via-white to-slate-300 bg-clip-text text-transparent mb-6 drop-shadow-sm">
              {currentPortfolioData.personal.nombre}
            </h1>

            {/* Frase dinámica cinética */}
            <div className="max-w-3xl mx-auto space-y-2 mb-12">
              <p className="text-lg sm:text-2xl md:text-3xl font-hero-title text-slate-200/90 font-normal leading-relaxed">
                {currentPortfolioData.hero.staticHeroTitlePartOne}
              </p>

              <div className="h-14 sm:h-16 flex items-center justify-center">
                <span
                  key={currentDynamicPhraseIndex}
                  className="inline-block px-5 py-1.5 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 backdrop-blur-md text-2xl sm:text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent animate-fade-in-out-single"
                >
                  {currentPortfolioData.hero.dynamicPhrases[currentDynamicPhraseIndex]}
                </span>
              </div>

              <p className="text-lg sm:text-2xl md:text-3xl font-hero-title text-slate-200/90 font-normal leading-relaxed">
                {currentPortfolioData.hero.staticHeroTitlePartTwo}
              </p>
            </div>

            {/* Botones de acción (CTAs) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('proyectos')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_45px_rgba(16,185,129,0.7)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{currentPortfolioData.hero.buttonProjects}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={() => scrollToSection('contacto')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-white/35 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{currentPortfolioData.hero.buttonContact}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ////////////////////////// "Sobre mí" con Tipografía Iluminada por Scroll (Scroll-Lit XDR Text) ////////////////////////// */}
      <section
        id="sobre-mi"
        ref={sectionRefs.sobreMi}
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div
          className={`max-w-6xl mx-auto ${
            visibleSections.sobreMi ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
              <Sparkles className="w-3 h-3" /> Profile
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.aboutMe.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.aboutMe.subtitle}
            </p>
          </div>

          <div className="relative rounded-[32px] p-8 sm:p-12 md:p-14 bg-white/80 dark:bg-slate-900/55 backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.09] shadow-[0_12px_40px_rgb(0,0,0,0.04)] dark:shadow-[0_25px_70px_rgb(0,0,0,0.45)] overflow-hidden">
            {/* Bisel luminoso superior */}
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

              <div className="lg:w-2/5 flex justify-center items-center">
                <div className="relative group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/25 to-cyan-500/25 blur-2xl animate-pulse-glow" />
                  <img
                    src="https://developer.android.com/images/cluster-illustrations/mad-hero.svg"
                    alt={currentPortfolioData.aboutMe.androidSvgDescription}
                    className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 object-contain animate-float-slow drop-shadow-2xl"
                    onError={e => {
                      e.currentTarget.src =
                        'https://placehold.co/300x300/10b981/ffffff?text=Android';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ////////////////////////// Technologies Section con Selector Estilo Apple ////////////////////////// */}
      <section
        id="tecnologias"
        ref={sectionRefs.tecnologias}
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-950/60 border-y border-slate-200/60 dark:border-white/[0.05]"
      >
        <div
          className={`max-w-6xl mx-auto ${
            visibleSections.tecnologias ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.technologiesTitle.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.technologiesTitle.subtitle}
            </p>
          </div>

          {/* Barra de Píldoras Interactiva estilo Apple Highlights */}
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

      {/* ////////////////////////// Projects Section ////////////////////////// */}
      <section
        id="proyectos"
        ref={sectionRefs.proyectos}
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`max-w-6xl mx-auto ${
            visibleSections.proyectos ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
              Featured Work
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
        className="relative pb-24 sm:pb-32 pt-8 px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`max-w-6xl mx-auto ${
            visibleSections.subProyectos ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-4">
              Additional Labs
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

      {/* ////////////////////////// Experience Section ////////////////////////// */}
      <section
        id="experiencia"
        ref={sectionRefs.experiencia}
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-950/60 border-y border-slate-200/60 dark:border-white/[0.05]"
      >
        <div
          className={`max-w-4xl mx-auto ${
            visibleSections.experiencia ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
              Career Path
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
              {currentPortfolioData.experienceTitle.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {currentPortfolioData.experienceTitle.subtitle}
            </p>
          </div>

          {/* Línea de tiempo conectada */}
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

      {/* ////////////////////////// Education & Certifications Section ////////////////////////// */}
      <section
        id="educacion"
        ref={sectionRefs.educacion}
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`max-w-4xl mx-auto ${
            visibleSections.educacion ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-4">
              Academic
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
              Credentials
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

      {/* ////////////////////////// Personal Skills Section ////////////////////////// */}
      <section
        id="habilidades-personales"
        ref={sectionRefs.habilidadesPersonales}
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-950/60 border-y border-slate-200/60 dark:border-white/[0.05]"
      >
        <div
          className={`max-w-6xl mx-auto ${
            visibleSections.habilidadesPersonales ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
              Human Edge
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

      {/* ////////////////////////// Contact Section ////////////////////////// */}
      <section
        id="contacto"
        ref={sectionRefs.contacto}
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div
          className={`max-w-4xl mx-auto text-center ${
            visibleSections.contacto ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
            Connect
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
      <footer className="border-t border-slate-200/70 dark:border-white/[0.06] bg-white/50 dark:bg-[#04060a] py-12 pb-24 px-4 sm:px-6 lg:px-8">
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
        <div className="pointer-events-auto inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-950/80 dark:bg-slate-900/85 text-white backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Indicador de sección actual */}
          <div className="flex items-center gap-2 pr-2 border-r border-white/15">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
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
