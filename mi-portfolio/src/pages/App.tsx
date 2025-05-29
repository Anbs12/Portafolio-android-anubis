import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Code, Smartphone,
  Menu, X
} from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';
import { portfolioDataEs } from '../data/portfolioDataEs';
import { portfolioDataEn } from '../data/portfolioDataEn';
import { TechCard } from '../components/TechCard';
import { ProjectCard } from '../components/ProjectCard';

//-----------------------------------------------------------------------------------------------------------------------------------------------------

const Portfolio: React.FC = () => {
  // 2. Actualizar useState con tipos explícitos
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es'); // 'es' para español, 'en' para inglés

  // Referencias para cada sección para el Intersection Observer
  const sectionRefs = {
    inicio: useRef<HTMLElement>(null),
    tecnologias: useRef<HTMLElement>(null),
    proyectos: useRef<HTMLElement>(null),
    experiencia: useRef<HTMLElement>(null),
    contacto: useRef<HTMLElement>(null),
  };

  // Estado para controlar la visibilidad de cada sección
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    inicio: false,
    tecnologias: false,
    proyectos: false,
    experiencia: false,
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
          { threshold: 0.2 } // El 20% del elemento debe ser visible para activar
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    // Crear un observador para cada sección
    createObserver(sectionRefs.inicio, 'inicio');
    createObserver(sectionRefs.tecnologias, 'tecnologias');
    createObserver(sectionRefs.proyectos, 'proyectos');
    createObserver(sectionRefs.experiencia, 'experiencia');
    createObserver(sectionRefs.contacto, 'contacto');

    // Función de limpieza para desconectar los observadores
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  // Seleccionar los datos del portafolio según el idioma actual
  const currentPortfolioData: PortfolioDataType = language === 'es' ? portfolioDataEs : portfolioDataEn;

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-inter">

      {/* 
      //  ////////////////////////// Navigation ////////////////////////// 
      // 
      // */
      }
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg mr-3">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {currentPortfolioData.personal.nombre}
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {currentPortfolioData.navItems.map((item) => (
                <button
                  key={item.id} // Usar item.id como key
                  onClick={() => scrollToSection(item.id)} // Usar item.id para el scroll
                  className={`capitalize font-medium transition-colors hover:text-green-600 ${activeSection === item.id ? 'text-green-600' : 'text-gray-700'
                    }`}
                >
                  {item.displayText} {/* Mostrar displayText */}
                </button>
              ))}
            </div>

            {/* Botón de cambio de idioma */}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
            >
              {language === 'es' ? 'English' : 'Español'}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {currentPortfolioData.navItems.map((item) => (
                <button
                  key={item.id} // Usar item.id como key
                  onClick={() => scrollToSection(item.id)} // Usar item.id para el scroll
                  className="block w-full text-left py-2 capitalize font-medium text-gray-700 hover:text-green-600 px-4"
                >
                  {item.displayText} {/* Mostrar displayText */}
                </button>
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
        
        
        <div className={`relative z-10 max-w-6xl mx-auto text-white ${visibleSections.inicio ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <Smartphone className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-5xl font-bold mb-4 text-gray-700">
                {currentPortfolioData.personal.nombre}
              </h1>
              <h2 className="text-2xl mb-6 text-gray-700">
                {currentPortfolioData.personal.titulo}
              </h2>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90 text-gray-700">
                {currentPortfolioData.personal.descripcion}
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => scrollToSection('proyectos')}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {currentPortfolioData.hero.buttonProjects}
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
                {currentPortfolioData.hero.buttonContact}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 
      //  ////////////////////////// Technologies Section////////////////////////// 
      // 
      // */
      }
      <section id="tecnologias" ref={sectionRefs.tecnologias} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className={`max-w-6xl mx-auto ${visibleSections.tecnologias ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{currentPortfolioData.technologies.title}</h2>
            <p className="text-xl text-gray-600">{currentPortfolioData.technologies.subtitle}</p>
          </div>

          {/* Renderizado de tecnologías por categoría */}
          {currentPortfolioData.tecnologiasCategorizadas.map((categoryGroup, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-700 mb-8 text-center">{categoryGroup.category}</h3>
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
      <section id="proyectos" ref={sectionRefs.proyectos} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className={`max-w-6xl mx-auto ${visibleSections.proyectos ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{currentPortfolioData.projects.title}</h2>
            <p className="text-xl text-gray-600">{currentPortfolioData.projects.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPortfolioData.proyectos.map((proyecto) => (
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
      <section id="experiencia" ref={sectionRefs.experiencia} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 ${visibleSections.experiencia ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{currentPortfolioData.experience.title}</h2>
            <p className="text-xl text-gray-600">{currentPortfolioData.experience.subtitle}</p>
          </div>

          <div className="space-y-8">
            {currentPortfolioData.experiencia.map((exp, index) => (
              <div
                key={index}
                // Aplicar animación solo si la sección de experiencia es visible
                className={`bg-gray-50 rounded-2xl p-8 border-l-4 border-green-500 ${visibleSections.experiencia ? `animate-fadeInLeft animate-delay-${index * 100}` : 'opacity-0'}`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.cargo}</h3>
                    <p className="text-lg text-green-600 font-medium">{exp.empresa}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.periodo}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
      //  ////////////////////////// Contact Section ///////////////////////// 
      // 
      // */
      }
      <section id="contacto" ref={sectionRefs.contacto} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50" >
        <div className={`max-w-4xl mx-auto text-center ${visibleSections.contacto ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{currentPortfolioData.contact.title}</h2>
          <p className="text-xl text-gray-600 mb-12">{currentPortfolioData.contact.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mail  */}
            {/* <a
              href={`mailto:${currentPortfolioData.personal.email}`}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Mail className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">{currentPortfolioData.personal.email}</p>
            </a> */}

            <a
              href={`https://linkedin.com/in/${currentPortfolioData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Linkedin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">LinkedIn</h3>
              <p className="text-gray-600">{currentPortfolioData.contact.linkedinText}</p>
            </a>

            <a
              href={`https://github.com/${currentPortfolioData.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Github className="w-12 h-12 text-gray-800 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub</h3>
              <p className="text-gray-600">{currentPortfolioData.contact.githubText}</p>
            </a>
          </div>
        </div>
      </section>

      {/* 
      //  ////////////////////////// Footer ////////////////////////// 
      // 
      // */
      }
      <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300">
            © 2025 {currentPortfolioData.personal.nombre}. {currentPortfolioData.footer.text}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
