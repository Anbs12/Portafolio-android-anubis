import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Code, Smartphone,
  Menu, X, Sun, Moon,
  ChevronDown
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

//-----------------------------------------------------------------------------------------------------------------------------------------------------

const Portfolio: React.FC = () => {
  // Actualizar useState con tipos explícitos
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es'); // 'es' para español, 'en' para inglés
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null); // State for mobile submenu

  // --- Logica del modo oscuro ---
  type Theme = 'light' | 'dark';
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme') as Theme;
      if (storedTheme) {
        return storedTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
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
  // --- Fin logica del modo oscuro ---

  // Referencias para cada sección para el Intersection Observer
  const sectionRefs = {
    inicio: useRef<HTMLElement>(null),
    sobreMi: useRef<HTMLElement>(null),
    tecnologias: useRef<HTMLElement>(null),
    proyectos: useRef<HTMLElement>(null),
    experiencia: useRef<HTMLElement>(null),
    educacion: useRef<HTMLElement>(null),
    habilidadesPersonales: useRef<HTMLElement>(null),
    contacto: useRef<HTMLElement>(null),
  };

  // Estado para controlar la visibilidad de cada sección
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    inicio: false,
    sobreMi: false,
    tecnologias: false,
    proyectos: false,
    experiencia: false,
    educacion: false,
    habilidadesPersonales: false,
    contacto: false,
  });

  // Efecto para configurar los Intersection Observers
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const createObserver = (ref: React.RefObject<HTMLElement | null>, sectionName: string) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => ({ ...prev, [sectionName]: true }));
              // Opcional: Desobservar el elemento una vez que ha sido visible
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.09 } // El 20% del elemento debe ser visible para activar
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    // Crear un observador para cada sección
    createObserver(sectionRefs.inicio, 'inicio');
    createObserver(sectionRefs.sobreMi, 'sobreMi');
    createObserver(sectionRefs.tecnologias, 'tecnologias');
    createObserver(sectionRefs.proyectos, 'proyectos');
    createObserver(sectionRefs.experiencia, 'experiencia');
    createObserver(sectionRefs.educacion, 'educacion');
    createObserver(sectionRefs.habilidadesPersonales, 'habilidadesPersonales');
    createObserver(sectionRefs.contacto, 'contacto');

    // Función de limpieza para desconectar los observadores
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  // Seleccionar los datos del portafolio según el idioma actual
  const currentPortfolioData: PortfolioDataType = language === 'es' ? portfolioDataEs : portfolioDataEn;

  // --- Dynamic Text Animation Logic ---
  const [currentDynamicPhraseIndex, setCurrentDynamicPhraseIndex] = useState(0);
  useEffect(() => {
    // This interval will trigger the phrase change
    const interval = setInterval(() => {
      setCurrentDynamicPhraseIndex(
        (prevIndex) => (prevIndex + 1) % currentPortfolioData.hero.dynamicPhrases.length
      );
    }, 3000); // Changed to 8 seconds, matching animation duration

    return () => clearInterval(interval);
  }, [currentPortfolioData.hero.dynamicPhrases.length]); // Re-run if phrases change (e.g., language switch)
  // --- End Dynamic Text Animation Logic ---

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false); // Close mobile menu when a section is clicked
    setOpenMobileSubmenu(null); // Close any open mobile submenus
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 text-gray-900 dark:text-white font-inter transition-colors duration-300">

      {/* 
      //  ////////////////////////// Navigation ////////////////////////// 
      // 
      // */
      }
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg z-50 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">

            {/* Logo y nombre */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg mr-3">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {currentPortfolioData.personal.nombre}
              </span>
            </div>

            {/* Menú de navegación Desktop*/}
            <div className="hidden lg:flex items-center space-x-7">
              {currentPortfolioData.navItems.map((item) => (
                item.subItems ? (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => scrollToSection(item.id)} // Added onClick to parent for scrolling
                      className="capitalize font-semibold transition-colors hover:text-green-600 text-gray-700 dark:text-gray-300 font-body flex items-center"
                    >
                      {item.displayText} <ChevronDown className="inline w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out z-10">
                      {item.subItems.map(subItem => (
                        <button
                          key={subItem.id}
                          onClick={() => scrollToSection(subItem.id)}
                          className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-body"
                        >
                          {subItem.displayText}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`capitalize font-semibold transition-colors hover:text-green-600 ${activeSection === item.id ? 'text-green-600' : 'text-gray-700 dark:text-gray-300'
                      } font-body`}
                  >
                    {item.displayText}
                  </button>
                )
              ))}
            </div>

            {/* Botones de idioma y modo oscuro */}
            <div className="flex items-center gap-4 ">
              {/* Botón de cambio de idioma */}
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {language === 'es' ? 'English' : 'Español'}
              </button>

              {/* Botón de Modo Oscuro/Claro */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 
                           hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300
                           focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <Sun className="w-6 h-6" /> // Icono de sol para modo claro
                ) : (
                  <Moon className="w-6 h-6" /> // Icono de luna para modo oscuro
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 dark:border-gray-700">
              {currentPortfolioData.navItems.map((item) => (
                item.subItems ? (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => {
                        // For mobile, this button only toggles the submenu visibility
                        setOpenMobileSubmenu(openMobileSubmenu === item.id ? null : item.id);
                      }}
                      className="flex w-full text-left py-2 capitalize font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 px-4 font-body  justify-between items-center"
                    >
                      {item.displayText}
                      <ChevronDown className={`w-5 h-5 transition-transform ${openMobileSubmenu === item.id ? 'rotate-180' : ''}`} />
                    </button>
                    {openMobileSubmenu === item.id && (
                      <div className="pl-6 pt-2 pb-2 space-y-2"> {/* Indent submenu */}
                        {item.subItems.map(subItem => (
                          <button
                            key={subItem.id}
                            onClick={() => scrollToSection(subItem.id)} // Submenu items scroll to section
                            className="block w-full text-left py-2 capitalize font-medium text-gray-600 dark:text-gray-400 hover:text-green-500 font-body"
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
                    className="block w-full text-left py-2 capitalize font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 px-4 font-body"
                  >
                    {item.displayText}
                  </button>
                )
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* 
      //  ////////////////////////// Hero Section ////////////////////////// 
      // 
      // */
      }
      <section id="inicio" ref={sectionRefs.inicio} className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        {/* Contenedor del video de fondo */}

        <div className={`relative z-10 max-w-6xl mx-auto text-white ${visibleSections.inicio ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center">
            <div className="mb-8">

              {/* Icono smartphone */}
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <Smartphone className="w-16 h-16 text-white" />
              </div>

              <h1 className="text-7xl font-bold font-hero-name mb-4 text-gray-900 dark:text-gray-100">
                {currentPortfolioData.personal.nombre}
              </h1>

              {/* Título dinámico */}
              <h2 className="text-4xl font-hero-title mb-6 text-gray-900 dark:text-gray-100">
                {currentPortfolioData.hero.staticHeroTitlePartOne}
              </h2>
              <h2 className="text-5xl font-hero-title mb-6 text-gray-900 dark:text-gray-100">
                <span key={currentDynamicPhraseIndex} className="inline-block whitespace-nowrap animate-fade-in-out-single text-green-600 dark:text-green-400">
                  {currentPortfolioData.hero.dynamicPhrases[currentDynamicPhraseIndex]}
                </span>
              </h2>
              <h2 className="text-4xl font-hero-title mb-6 text-gray-900 dark:text-gray-100">
                {currentPortfolioData.hero.staticHeroTitlePartTwo}
              </h2>

            </div>

            {/* Botones */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => scrollToSection('proyectos')}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 dark:from-gray-800 dark:to-gray-900"
              >
                {currentPortfolioData.hero.buttonProjects}
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                {currentPortfolioData.hero.buttonContact}
              </button>
            </div>

          </div>
        </div>

      </section>


      {/* 
      //  ////////////////////////// "Sobre mi" Section ////////////////////////// 
      // 
      // */
      }
      <section id="sobre-mi" ref={sectionRefs.sobreMi} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className={`max-w-6xl mx-auto ${visibleSections.sobreMi ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-gray-800 dark:text-gray-100 mb-4">{currentPortfolioData.aboutMe.title}</h2>
            <p className="text-xl font-body text-gray-600 dark:text-gray-300">{currentPortfolioData.aboutMe.subtitle}</p>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-body">
                {currentPortfolioData.personal.descripcion}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center p-4">
              {/* Abstract Android Shape (SVG) */}
              <img
                src="https://developer.android.com/images/cluster-illustrations/mad-hero.svg" // URL de imagen de ejemplo
                alt={currentPortfolioData.aboutMe.androidSvgDescription} // Usamos la misma descripción para accesibilidad
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain rounded-full shadow-lg" // Estilos para la imagen
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x300/4CAF50/white?text=Error+Loading+Image'; }} // Fallback en caso de error
              />
            </div>
          </div>
        </div>
      </section>

      {/* 
      //  ////////////////////////// Technologies Section////////////////////////// 
      // 
      // */
      }
      <section id="tecnologias" ref={sectionRefs.tecnologias} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
        <div className={`max-w-6xl mx-auto ${visibleSections.tecnologias ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">{currentPortfolioData.technologiesTitle.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{currentPortfolioData.technologiesTitle.subtitle}</p>
          </div>

          {/* Renderizado de tecnologías por categoría */}
          {currentPortfolioData.tecnologiasCategorizadas.map((categoryGroup, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-8 text-center">{categoryGroup.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                {categoryGroup.items.map((tech, techIndex) => (
                  <TechCard key={techIndex} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 
      //  ////////////////////////// Projects Section ////////////////////////// 
      // 
      // */
      }
      <section id="proyectos" ref={sectionRefs.proyectos} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">

        <div className={`max-w-6xl mx-auto ${visibleSections.proyectos ? 'animate-fadeInUp' : 'opacity-0'}`}>

          {/*Titulo y subtitulo de la sección*/}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">{currentPortfolioData.projectsSettings.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{currentPortfolioData.projectsSettings.subtitle}</p>
          </div>

          {/*Renderizado de tarjetas de proyectos*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPortfolioData.proyectos.map((proyecto) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} currentPortfolioData={currentPortfolioData} />
            ))}
          </div>
        </div>

        {/* Subproyectos abajo ⬇️⬇️⬇️⬇️*/}

        <div className={`py-20 max-w-6xl mx-auto ${visibleSections.proyectos ? 'animate-fadeInUp' : 'opacity-0'}`}>

          {/*Titulo y subtitulo de la sección*/}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">{currentPortfolioData.subProjectsSettings.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{currentPortfolioData.subProjectsSettings.subtitle}</p>
          </div>

          {/*Renderizado de tarjetas de proyectos*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPortfolioData.subProyectos.map((proyecto) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} currentPortfolioData={currentPortfolioData} />
            ))}
          </div>
        </div>

      </section>

      {/* 
      //  ////////////////////////// Experience Section ////////////////////////// 
      // 
      // */
      }
      <section id="experiencia" ref={sectionRefs.experiencia} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
        <div className={`max-w-4xl mx-auto ${visibleSections.experiencia ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className={`text-center mb-16`}>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">{currentPortfolioData.experienceTitle.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{currentPortfolioData.experienceTitle.subtitle}</p>
          </div>

          <div className="space-y-8">
            {currentPortfolioData.experiencia.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* 
      //  ////////////////////////// Education Section ///////////////////////// 
      // 
      // */
      }
      <section id="educacion" ref={sectionRefs.educacion} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className={`max-w-4xl mx-auto ${visibleSections.educacion ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">{currentPortfolioData.educationTitle.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{currentPortfolioData.educationTitle.subtitle}</p>
          </div>

          <div className="space-y-8">
            {currentPortfolioData.educationItems.map((edu, index) => (
              <EducationCard key={index} edu={edu} />
            ))}
          </div>
        </div>

        {/* Certificaciones abajo ⬇️ */}

        <div className={`py-20 max-w-4xl mx-auto ${visibleSections.educacion ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">{currentPortfolioData.certificationTitle.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{currentPortfolioData.certificationTitle.subtitle}</p>
          </div>

          <div className="space-y-8">
            {currentPortfolioData.certificationItems.map((cert, index) => (
              <CertificationCard key={index} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* 
      
        ////////////////////////// Personal Skills Section ////////////////////////// 
        // 
        // */}
      <section id="habilidades-personales" ref={sectionRefs.habilidadesPersonales} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
        <div className={`max-w-6xl mx-auto ${visibleSections.habilidadesPersonales ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-gray-800 dark:text-gray-100 mb-4">{currentPortfolioData.personalSkillsTitle.title}</h2>
            <p className="text-xl font-body text-gray-600 dark:text-gray-300">{currentPortfolioData.personalSkillsTitle.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {currentPortfolioData.personalSkillItem.map((skill, index) => (
              <PersonalSkillCard key={index} skill={skill} isVisible={visibleSections.habilidadesPersonales} />
            ))}
          </div>
        </div>
      </section>

      {/* 
      //  ////////////////////////// Contact Section ///////////////////////// 
      // 
      // */
      }
      <section id="contacto" ref={sectionRefs.contacto} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
        <div className={`max-w-4xl mx-auto text-center ${visibleSections.contacto ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">{currentPortfolioData.contact.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">{currentPortfolioData.contact.subtitle}</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* <a
              href={`mailto:${currentPortfolioData.personal.email}`}
              className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Mail className="w-12 h-12 text-green-500 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">{currentPortfolioData.personal.email}</p>
            </a> */}

            <a
              href={`https://linkedin.com/in/${currentPortfolioData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 p-8 px-24 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Linkedin className="w-12 h-12 text-blue-500 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-300">{currentPortfolioData.contact.linkedinText}</p>
            </a>

            <a
              href={`https://github.com/${currentPortfolioData.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 p-8 px-24 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Github className="w-12 h-12 text-gray-800 dark:text-gray-100 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-300">{currentPortfolioData.contact.githubText}</p>
            </a>
          </div>
        </div>

      </section>

      {/* 
      //  ////////////////////////// Footer ////////////////////////// 
      // 
      // */
      }
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300 dark:text-gray-400">
            © 2025 {currentPortfolioData.personal.nombre}. {currentPortfolioData.footer.text}
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;
