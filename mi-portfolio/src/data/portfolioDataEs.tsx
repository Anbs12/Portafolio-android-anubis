import {
  Github, Smartphone, Database, Globe, FileText, GitBranch, Camera, Layers, Palette,
  RefreshCw, ArrowRightCircle, LayoutGrid, Award, Plug, CheckCircle, Bot, FileQuestion, FileCode, Monitor, Image, Presentation
} from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';


// Datos configurables en ESPAÑOL
export const portfolioDataEs: PortfolioDataType = {
  personal: {
    nombre: "Anubis Montero",
    titulo: "Desarrollador Android y Kotlin Jr.",
    descripcion: `Desarrollador Android Junior con experiencia en aplicaciones móviles nativas usando Kotlin, MVVM y Jetpack
 Compose. Especializado en implementación de APIs RESTful con Retrofit, desarrollo de interfaces con XML y 
Compose, y gestión de datos reactivos con Flows y Coroutines. Analista Programador titulado con capacidad para 
resolver problemas de forma autónoma y contribuir efectivamente en equipos de desarrollo.`,
    email: "tu@email.com",
    telefono: "+1234567890",
    linkedin: "anubism/",
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
      titulo: "App Prevencion",
      descripcion: "Aplicación de gestión de alertas realizada en mi practica profesional, con enfoque en la prevención de riesgos laborales gestion de perfiles, y mas.",
      tecnologias: ["Kotlin", "XML", "Microsoft SQL Server", "Coroutines"],
      imagen: "https://i.ytimg.com/vi/7P2PxyEzT0o/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4AdwEgAKACooCDAgAEAEYfyATKDAwDw==&rs=AOn4CLCPStVnJdLf1kRnOa5A6dcjzB2vcQ",
      github: null,
      youtube: "https://www.youtube.com/watch?v=7P2PxyEzT0o&list=PL-DzkWcV11qsjKc-UWFknNcKSprQBWAVW&index=5&pp=gAQBiAQB",
      estado: "Completado"
    },
    {
      id: 2,
      titulo: "appMovilAlertas",
      descripcion: "Aplicación de gestión de alertas V2 mejorada con enfoque en la prevención de riesgos laborales, gestion de perfiles, y mas.",
      tecnologias: ["Kotlin", "Jetpack Compose", "MVVM", "Kotlin Flows", "Coroutines",
        "Microsoft SQL Server", "XML", "CameraX", "Material Design", "JUnit", "Robolectric", "Mock"
      ],
      imagen: "https://i.ytimg.com/vi/cC5F1RxznQE/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYOSBMKHIwDw==&rs=AOn4CLDuMJijPuu_oBRIcjb4cqg-FWJ1PQ",
      github: "https://github.com/Anbs12/appMovilAlertas.git",
      youtube: "https://www.youtube.com/watch?v=cC5F1RxznQE&list=PL-DzkWcV11qsjKc-UWFknNcKSprQBWAVW&index=3&pp=gAQBiAQB0gcJCbAJAYcqIYzv",
      estado: "En desarrollo"
    },
    {
      id: 3,
      titulo: "Prc RickMorty",
      descripcion: "Aplicacion de gestión de personajes de Rick y Morty.",
      tecnologias: ["Kotlin", "MVVM", "Clean Architecture", "Kotlin Flows", "Coroutines",
        "Retrofit 2", "Coil", "Jetpack Compose", "Documentacion KDocs"
      ],
      imagen: "https://i.ytimg.com/vi/HEPNMiL9fDU/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYTSBdKGUwDw==&rs=AOn4CLAXdo5T4pjSB8Npgm2MVtX9gU2wOg",
      github: "https://github.com/tu-usuario/crypto-tracker",
      youtube: "https://www.youtube.com/watch?v=HEPNMiL9fDU&list=PL-DzkWcV11qsjKc-UWFknNcKSprQBWAVW&index=1&pp=gAQBiAQB",
      estado: "Completado"
    },
    {
      id: 4,
      titulo: "Prc NasaApp",
      descripcion: "Seguimiento de criptomonedas en tiempo real con WebSockets y gráficos interactivos.",
      tecnologias: ["Kotlin", "WebSocket", "MPAndroidChart", "Hilt"],
      imagen: "https://graffica.info/wp-content/uploads/2017/08/LogoNasaSpotB-1200x675.jpg",
      github: "https://github.com/tu-usuario/crypto-tracker",
      youtube: null,
      estado: "Completado"
    },
    {
      id: 5,
      titulo: "Prc MLTaks",
      descripcion: "Seguimiento de criptomonedas en tiempo real con WebSockets y gráficos interactivos.",
      tecnologias: ["Kotlin", "WebSocket", "MPAndroidChart", "Hilt"],
      imagen: "https://images.seeklogo.com/logo-png/34/1/google-ml-kit-logo-png_seeklogo-346610.png",
      github: "https://github.com/tu-usuario/crypto-tracker",
      youtube: null,
      estado: "En desarrollo"
    },
    {
      id: 6,
      titulo: "Prc eCommerceApp",
      descripcion: "Seguimiento de criptomonedas en tiempo real con WebSockets y gráficos interactivos.",
      tecnologias: ["Kotlin", "WebSocket", "MPAndroidChart", "Hilt"],
      imagen: "https://img.pikbest.com/png-images/ecommerce-logo-vector-graphics-element--e-commerce-logo-icon-design-online-store-logo-icon_1726010.png!sw800",
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