import React, { useState, useEffect, useRef, type JSX } from 'react';
import {
  ChevronDown, Github, ExternalLink, Mail, Linkedin, Phone, Code, Smartphone, Database, Globe, Server, Zap, FileText, TestTube, GitBranch, Camera, Settings, Layers, Terminal, Palette, Play,
  RefreshCw, ArrowRightCircle, LayoutGrid, Award, Plug, CheckCircle, Bot, FileQuestion, FileCode, Monitor, Image, Presentation, Menu, X
} from 'lucide-react';

// 1. Definición de interfaces para los datos del portafolio
interface NavItem {
  id: string;
  displayText: string;
}

interface HeroData {
  buttonProjects: string;
  buttonContact: string;
}

interface TechnologiesData {
  title: string;
  subtitle: string;
}

interface Project {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  imagen: string;
  github: string;
  youtube: string | null;
  estado: string;
}

interface ProjectsData {
  title: string;
  subtitle: string;
  buttonCode: string;
  buttonViewVideo: string;
  statusCompleted: string;
  statusInProgress: string;
}

interface ExperienceItem {
  empresa: string;
  cargo: string;
  periodo: string;
  descripcion: string;
}

interface ExperienceData {
  title: string;
  subtitle: string;
}

interface ContactData {
  title: string;
  subtitle: string;
  linkedinText: string;
  githubText: string;
}

interface FooterData {
  text: string;
}

interface PersonalData {
  nombre: string;
  titulo: string;
  descripcion: string;
  email: string;
  telefono: string;
  linkedin: string;
  github: string;
}

interface TechnologyItem {
  name: string;
  subtitle: string;
  icon: JSX.Element; // Tipo para el componente de icono
}

interface TechnologyCategory {
  category: string;
  items: TechnologyItem[];
}

interface PortfolioDataType {
  personal: PersonalData;
  navItems: NavItem[];
  hero: HeroData;
  technologies: TechnologiesData;
  projects: ProjectsData;
  experience: ExperienceData;
  contact: ContactData;
  footer: FooterData;
  tecnologiasCategorizadas: TechnologyCategory[];
  proyectos: Project[];
  experiencia: ExperienceItem[];
}

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

  // Datos configurables en ESPAÑOL
  const portfolioDataEs: PortfolioDataType = {
    personal: {
      nombre: "Anubis Montero",
      titulo: "Desarrollador Android & Kotlin Jr.",
      descripcion: "Especializado en desarrollo móvil nativo con Kotlin y arquitecturas modernas como MVVM, Clean Architecture y Jetpack Compose.",
      email: "tu@email.com",
      telefono: "+1234567890",
      linkedin: "tu-linkedin",
      github: "Anbs12"
    },
    navItems: [
      { id: 'inicio', displayText: 'Inicio' },
      { id: 'tecnologias', displayText: 'Tecnologías' },
      { id: 'proyectos', displayText: 'Proyectos' },
      { id: 'experiencia', displayText: 'Experiencia' },
      { id: 'contacto', displayText: 'Contacto' }
    ],
    hero: {
      buttonProjects: "Ver Proyectos",
      buttonContact: "Contactar"
    },
    technologies: {
      title: "Tecnologías",
      subtitle: "Stack tecnológico y herramientas que domino"
    },
    projects: {
      title: "Proyectos",
      subtitle: "Algunos de mis trabajos más destacados",
      buttonCode: "Código",
      buttonViewVideo: "Ver Video",
      statusCompleted: "Completado",
      statusInProgress: "En desarrollo"
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional"
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
      linkedinText: "Conectemos",
      githubText: "Ver código"
    },
    footer: {
      text: "Desarrollado con React y mucho ☕"
    },
    tecnologiasCategorizadas: [
      {
        category: "Lenguajes y Fundamentos",
        items: [
          { name: 'Kotlin', subtitle: 'Lenguaje de programación principal para Android', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/640px-Kotlin_Icon.svg.png" alt="Kotlin Icon" className="w-8 h-8" /> },
          { name: 'XML', subtitle: 'Lenguaje de marcado para interfaces', icon: <FileCode className="w-8 h-8 text-lime-600" /> },
          { name: 'Android SDK', subtitle: 'Kit de desarrollo de software para Android', icon: <Smartphone className="w-8 h-8 text-emerald-600" /> },
          { name: 'Android Lifecycle', subtitle: 'Manejo de estados de componentes', icon: <RefreshCw className="w-8 h-8 text-emerald-500" /> },
        ]
      },
      {
        category: "Programación Asíncrona y Reactiva",
        items: [
          { name: 'Kotlin Coroutines', subtitle: 'Programación asíncrona y concurrente', icon: <RefreshCw className="w-8 h-8 text-orange-600" /> },
          { name: 'Kotlin Flows', subtitle: 'Streams reactivos asíncronos', icon: <ArrowRightCircle className="w-8 h-8 text-sky-600" /> },
        ]
      },
      {
        category: "Arquitectura y Patrones de Diseño",
        items: [
          { name: 'MVVM design patterns', subtitle: 'Arquitectura para apps Android', icon: <LayoutGrid className="w-8 h-8 text-violet-600" /> },
          { name: 'Clean Architecture', subtitle: 'Diseño de software escalable', icon: <Layers className="w-8 h-8 text-emerald-600" /> },
          { name: 'Dagger Hilt', subtitle: 'Inyección de dependencias para Android', icon: <Plug className="w-8 h-8 text-red-600" /> },
        ]
      },
      {
        category: "Bases de Datos y Backend",
        items: [
          { name: 'Firebase', subtitle: 'Plataforma de desarrollo de Google', icon: <Award className="w-8 h-8 text-yellow-600" /> },
          { name: 'Microsoft SQL Server', subtitle: 'Gestión de bases de datos relacionales', icon: <Database className="w-8 h-8 text-gray-700" /> },
          { name: 'APIs RESTful con Retrofit 2', subtitle: 'Comunicación con servicios web', icon: <Globe className="w-8 h-8 text-sky-700" /> },
        ]
      },
      {
        category: "UI/UX y Diseño",
        items: [
          { name: 'Jetpack Compose', subtitle: 'Toolkit moderno para UI de Android', icon: <LayoutGrid className="w-8 h-8 text-sky-600" /> },
          { name: 'Material Design de Google', subtitle: 'Sistema de diseño para Android', icon: <Palette className="w-8 h-8 text-violet-600" /> },
          { name: 'Coil', subtitle: 'Librería de carga de imágenes para Android', icon: <Image className="w-8 h-8 text-violet-500" /> },
        ]
      },
      {
        category: "Testing",
        items: [
          { name: 'JUnit', subtitle: 'Framework para pruebas unitarias', icon: <CheckCircle className="w-8 h-8 text-teal-600" /> },
          { name: 'Robolectric', subtitle: 'Framework para pruebas unitarias de Android', icon: <Bot className="w-8 h-8 text-emerald-600" /> },
          { name: 'Mock', subtitle: 'Simulación de objetos para pruebas', icon: <FileQuestion className="w-8 h-8 text-amber-600" /> },
        ]
      },
      {
        category: "Herramientas y Productividad",
        items: [
          { name: 'Control de versiones Git', subtitle: 'Sistema de control de versiones distribuido', icon: <GitBranch className="w-8 h-8 text-gray-800" /> },
          { name: 'GitHub', subtitle: 'Plataforma para control de versiones', icon: <Github className="w-8 h-8 text-gray-800" /> },
          { name: 'Android Studio', subtitle: 'IDE oficial para desarrollo Android', icon: <Monitor className="w-8 h-8 text-emerald-700" /> },
          { name: 'CameraX', subtitle: 'API para desarrollo de cámara', icon: <Camera className="w-8 h-8 text-pink-600" /> },
          { name: 'Documentación KDocs', subtitle: 'Generación de documentación en Kotlin', icon: <FileText className="w-8 h-8 text-cyan-600" /> },
          { name: 'Microsoft Word', subtitle: 'Procesador de texto', icon: <FileText className="w-8 h-8 text-blue-500" /> },
          { name: 'Microsoft PowerPoint', subtitle: 'Software de presentaciones', icon: <Presentation className="w-8 h-8 text-red-500" /> },
        ]
      },
    ],
    proyectos: [
      {
        id: 1,
        titulo: "TaskMaster Pro",
        descripcion: "Aplicación de gestión de tareas con arquitectura MVVM, Room Database y Material Design 3.",
        tecnologias: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
        imagen: "https://via.placeholder.com/400x250/4CAF50/white?text=TaskMaster+Pro",
        github: "https://github.com/tu-usuario/taskmaster",
        youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        estado: "Completado"
      },
      {
        id: 2,
        titulo: "Weather Kotlin",
        descripcion: "App del clima con consumo de APIs REST, arquitectura Clean y animaciones fluidas.",
        tecnologias: ["Kotlin", "Retrofit", "Clean Architecture", "Lottie"],
        imagen: "https://via.placeholder.com/400x250/2196F3/white?text=Weather+App",
        github: "https://github.com/tu-usuario/weather-kotlin",
        youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        estado: "Completado"
      },
      {
        id: 3,
        titulo: "Crypto Tracker",
        descripcion: "Seguimiento de criptomonedas en tiempo real con WebSockets y gráficos interactivos.",
        tecnologias: ["Kotlin", "WebSocket", "MPAndroidChart", "Hilt"],
        imagen: "https://via.placeholder.com/400x250/FF9800/white?text=Crypto+Tracker",
        github: "https://github.com/tu-usuario/crypto-tracker",
        youtube: null,
        estado: "En desarrollo"
      }
    ],
    experiencia: [
      {
        empresa: "Tech Solutions",
        cargo: "Desarrollador Android Senior",
        periodo: "2022 - Presente",
        descripcion: "Desarrollo de aplicaciones móviles para clientes corporativos usando Kotlin y arquitecturas modernas."
      },
      {
        empresa: "StartupMobile",
        cargo: "Desarrollador Kotlin",
        periodo: "2020 - 2022",
        descripcion: "Creación de apps desde cero con focus en UX/UI y optimización de rendimiento."
      }
    ]
  };

  // Datos configurables en INGLÉS
  const portfolioDataEn: PortfolioDataType = {
    personal: {
      nombre: "Your Name",
      titulo: "Android & Kotlin Developer",
      descripcion: "Specialized in native mobile development with Kotlin and modern architectures like MVVM, Clean Architecture, and Jetpack Compose.",
      email: "your@email.com",
      telefono: "+1234567890",
      linkedin: "your-linkedin",
      github: "your-github"
    },
    navItems: [
      { id: 'inicio', displayText: 'Home' },
      { id: 'tecnologias', displayText: 'Technologies' },
      { id: 'proyectos', displayText: 'Projects' },
      { id: 'experiencia', displayText: 'Experience' },
      { id: 'contacto', displayText: 'Contact' }
    ],
    hero: {
      buttonProjects: "View Projects",
      buttonContact: "Contact Me"
    },
    technologies: {
      title: "Technologies",
      subtitle: "Technology stack and tools I master"
    },
    projects: {
      title: "Projects",
      subtitle: "Some of my most notable works",
      buttonCode: "Code",
      buttonViewVideo: "Watch Video",
      statusCompleted: "Completed",
      statusInProgress: "In Development"
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey"
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk!",
      linkedinText: "Let's connect",
      githubText: "View code"
    },
    footer: {
      text: "Developed with React and a lot of ☕"
    },
    tecnologiasCategorizadas: [
      {
        category: "Languages and Fundamentals",
        items: [
          { name: 'Kotlin', subtitle: 'Main programming language for Android', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/640px-Kotlin_Icon.svg.png" alt="Kotlin Icon" className="w-8 h-8" /> },
          { name: 'XML', subtitle: 'Markup language for interfaces', icon: <FileCode className="w-8 h-8 text-lime-600" /> },
          { name: 'Android SDK', subtitle: 'Software Development Kit for Android', icon: <Smartphone className="w-8 h-8 text-emerald-600" /> },
          { name: 'Android Lifecycle', subtitle: 'Component lifecycle management', icon: <RefreshCw className="w-8 h-8 text-emerald-500" /> },
        ]
      },
      {
        category: "Asynchronous and Reactive Programming",
        items: [
          { name: 'Kotlin Coroutines', subtitle: 'Asynchronous and concurrent programming', icon: <RefreshCw className="w-8 h-8 text-orange-600" /> },
          { name: 'Kotlin Flows', subtitle: 'Asynchronous reactive streams', icon: <ArrowRightCircle className="w-8 h-8 text-sky-600" /> },
        ]
      },
      {
        category: "Architecture and Design Patterns",
        items: [
          { name: 'MVVM design patterns', subtitle: 'Architecture for Android apps', icon: <LayoutGrid className="w-8 h-8 text-violet-600" /> },
          { name: 'Clean Architecture', subtitle: 'Scalable software design', icon: <Layers className="w-8 h-8 text-emerald-600" /> },
          { name: 'Dagger Hilt', subtitle: 'Dependency Injection for Android', icon: <Plug className="w-8 h-8 text-red-600" /> },
        ]
      },
      {
        category: "Databases and Backend",
        items: [
          { name: 'Firebase', subtitle: 'Google development platform', icon: <Award className="w-8 h-8 text-yellow-600" /> },
          { name: 'Microsoft SQL Server', subtitle: 'Relational database management', icon: <Database className="w-8 h-8 text-gray-700" /> },
          { name: 'RESTful APIs with Retrofit 2', subtitle: 'Web service communication', icon: <Globe className="w-8 h-8 text-sky-700" /> },
        ]
      },
      {
        category: "UI/UX and Design",
        items: [
          { name: 'Jetpack Compose', subtitle: 'Modern UI toolkit for Android', icon: <LayoutGrid className="w-8 h-8 text-sky-600" /> },
          { name: 'Google Material Design', subtitle: 'Design system for Android', icon: <Palette className="w-8 h-8 text-violet-600" /> },
          { name: 'Coil', subtitle: 'Image loading library for Android', icon: <Image className="w-8 h-8 text-violet-500" /> },
        ]
      },
      {
        category: "Testing",
        items: [
          { name: 'JUnit', subtitle: 'Unit testing framework', icon: <CheckCircle className="w-8 h-8 text-teal-600" /> },
          { name: 'Robolectric', subtitle: 'Unit testing framework for Android', icon: <Bot className="w-8 h-8 text-emerald-600" /> },
          { name: 'Mock', subtitle: 'Object simulation for testing', icon: <FileQuestion className="w-8 h-8 text-amber-600" /> },
        ]
      },
      {
        category: "Tools and Productivity",
        items: [
          { name: 'Git Version Control', subtitle: 'Distributed version control system', icon: <GitBranch className="w-8 h-8 text-gray-800" /> },
          { name: 'GitHub', subtitle: 'Platform for version control', icon: <Github className="w-8 h-8 text-gray-800" /> },
          { name: 'Android Studio', subtitle: 'Official IDE for Android development', icon: <Monitor className="w-8 h-8 text-emerald-700" /> },
          { name: 'CameraX', subtitle: 'API for camera development', icon: <Camera className="w-8 h-8 text-pink-600" /> },
          { name: 'KDocs Documentation', subtitle: 'Documentation generation in Kotlin', icon: <FileText className="w-8 h-8 text-cyan-600" /> },
          { name: 'Microsoft Word', subtitle: 'Word processor', icon: <FileText className="w-8 h-8 text-blue-500" /> },
          { name: 'Microsoft PowerPoint', subtitle: 'Presentation software', icon: <Presentation className="w-8 h-8 text-red-500" /> },
        ]
      },
    ],
    proyectos: [
      {
        id: 1,
        titulo: "TaskMaster Pro",
        descripcion: "Task management application with MVVM architecture, Room Database, and Material Design 3.",
        tecnologias: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
        imagen: "https://via.placeholder.com/400x250/4CAF50/white?text=TaskMaster+Pro",
        github: "https://github.com/tu-usuario/taskmaster",
        youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        estado: "Completed"
      },
      {
        id: 2,
        titulo: "Weather Kotlin",
        descripcion: "Weather app with REST API consumption, Clean Architecture, and fluid animations.",
        tecnologias: ["Kotlin", "Retrofit", "Clean Architecture", "Lottie"],
        imagen: "https://via.placeholder.com/400x250/2196F3/white?text=Weather+App",
        github: "https://github.com/tu-usuario/weather-kotlin",
        youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        estado: "Completed"
      },
      {
        id: 3,
        titulo: "Crypto Tracker",
        descripcion: "Real-time cryptocurrency tracking with WebSockets and interactive charts.",
        tecnologias: ["Kotlin", "WebSocket", "MPAndroidChart", "Hilt"],
        imagen: "https://via.placeholder.com/400x250/FF9800/white?text=Crypto+Tracker",
        github: "https://github.com/tu-usuario/crypto-tracker",
        youtube: null,
        estado: "In Development"
      }
    ],
    experiencia: [
      {
        empresa: "Tech Solutions",
        cargo: "Senior Android Developer",
        periodo: "2022 - Present",
        descripcion: "Development of mobile applications for corporate clients using Kotlin and modern architectures."
      },
      {
        empresa: "StartupMobile",
        cargo: "Kotlin Developer",
        periodo: "2020 - 2022",
        descripcion: "Creation of apps from scratch with a focus on UX/UI and performance optimization."
      }
    ]
  };

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

  // 3. Tipar los props de TechCard
  interface TechCardProps {
    tech: TechnologyItem;
  }

  const TechCard: React.FC<TechCardProps> = ({ tech }) => {
    return (
      <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group aspect-square flex flex-col justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-3 rounded-full mb-3 group-hover:from-green-200 group-hover:to-blue-200 transition-all duration-300 flex items-center justify-center">
            {tech.icon}
          </div>
          <h3 className="font-bold text-gray-800 text-sm mb-1 leading-tight">{tech.name}</h3>
          <p className="text-xs text-gray-500 leading-relaxed">{tech.subtitle}</p>
        </div>
      </div>
    );
  };

  // 4. Tipar los props de ProjectCard
  interface ProjectCardProps {
    proyecto: Project;
  }

  const ProjectCard: React.FC<ProjectCardProps> = ({ proyecto }) => {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        {/* Siempre muestra la imagen del proyecto */}
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-800">{proyecto.titulo}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              proyecto.estado === currentPortfolioData.projects.statusCompleted ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
            }`}>
              {proyecto.estado}
            </span>
          </div>
          <p className="text-gray-600 mb-4">{proyecto.descripcion}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {proyecto.tecnologias.map((tech, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href={proyecto.github}
              target="_blank" // Abrir en nueva pestaña
              rel="noopener noreferrer" // Seguridad para target="_blank"
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github className="w-4 h-4" /> {currentPortfolioData.projects.buttonCode}
            </a>
            {/* Botón para ver el video de YouTube */}
            {proyecto.youtube && (
              <a
                href={proyecto.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Play className="w-4 h-4" /> {currentPortfolioData.projects.buttonViewVideo}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-inter">
      {/* Estilos CSS personalizados para animaciones */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        /* Clases para retrasos de animación */
        .animate-delay-0 { animation-delay: 0s; }
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-delay-500 { animation-delay: 0.5s; }
        .animate-delay-600 { animation-delay: 0.6s; }
        .animate-delay-700 { animation-delay: 0.7s; }
        .animate-delay-800 { animation-delay: 0.8s; }
        .animate-delay-900 { animation-delay: 0.9s; }
        .animate-delay-1000 { animation-delay: 1s; }

        /* Estilos para el video de fondo */
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1; /* Envía el video al fondo */
        }

        .video-background video {
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          object-fit: cover; /* Asegura que el video cubra todo el espacio */
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4); /* Capa semitransparente oscura */
          z-index: 0; /* Por encima del video, por debajo del contenido */
        }
        `}
      </style>

      {/* Navigation */}
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
                  className={`capitalize font-medium transition-colors hover:text-green-600 ${
                    activeSection === item.id ? 'text-green-600' : 'text-gray-700'
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

      {/* Hero Section (formerly Tittle Section) */}
      <section id="inicio" ref={sectionRefs.inicio} className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        {/* Contenedor del video de fondo */}
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            {/* Puedes reemplazar esta URL con tu propio video de fondo */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-code-and-programming-on-a-monitor-1088-large.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
          <div className="video-overlay"></div> {/* Capa de superposición para legibilidad */}
        </div>

        <div className={`relative z-10 max-w-6xl mx-auto text-white ${visibleSections.inicio ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <Smartphone className="w-16 h-16 text-teal-600" />
              </div>
              <h1 className="text-5xl font-bold mb-4">
                {currentPortfolioData.personal.nombre}
              </h1>
              <h2 className="text-2xl mb-6">
                {currentPortfolioData.personal.titulo}
              </h2>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
                {currentPortfolioData.personal.descripcion}
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => scrollToSection('proyectos')}
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {currentPortfolioData.hero.buttonProjects}
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-teal-600 transition-colors"
              >
                {currentPortfolioData.hero.buttonContact}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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

      {/* Projects Section */}
      <section id="proyectos" ref={sectionRefs.proyectos} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className={`max-w-6xl mx-auto ${visibleSections.proyectos ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{currentPortfolioData.projects.title}</h2>
            <p className="text-xl text-gray-600">{currentPortfolioData.projects.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPortfolioData.proyectos.map((proyecto) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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

      {/* Contact Section */}
      <section id="contacto" ref={sectionRefs.contacto} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className={`max-w-4xl mx-auto text-center ${visibleSections.contacto ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{currentPortfolioData.contact.title}</h2>
          <p className="text-xl text-gray-600 mb-12">{currentPortfolioData.contact.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href={`mailto:${currentPortfolioData.personal.email}`}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Mail className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">{currentPortfolioData.personal.email}</p>
            </a>

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

      {/* Footer */}
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
