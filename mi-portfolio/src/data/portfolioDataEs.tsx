import {
  Github, Smartphone, Database, Globe, FileText, GitBranch, Camera, Layers, Palette,
  RefreshCw, ArrowRightCircle, LayoutGrid, Award, Plug, CheckCircle, Bot, FileQuestion, FileCode, Monitor, Image, Presentation, Navigation,
  LucideDatabase
} from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';


// Datos configurables en ESPAÑOL
export const portfolioDataEs: PortfolioDataType = {
  personal: {
    nombre: "Anubis Montero",
    titulo: "Desarrollador Android y Kotlin Jr.",
    descripcion: `Soy desarrollador Android Junior con experiencia en aplicaciones móviles nativas usando Kotlin, MVVM y Jetpack
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
    { id: 'sobre-mi', displayText: 'Sobre Mí' },
    { id: 'tecnologias', displayText: 'Tecnologías' },
    { id: 'proyectos', displayText: 'Proyectos' },
    { id: 'experiencia', displayText: 'Experiencia' },
    { id: 'contacto', displayText: 'Contacto' }
  ],
  hero: {
    buttonProjects: "Ver Proyectos",
    buttonContact: "Contactar",
    staticHeroTitlePartOne: "Llevando tus conceptos a la vida: Experiencias Android ", // Parte 1 estática del título
    dynamicPhrases: ["Innovadoras",
      "Funcionales",
      "Intuitivas",
      "Creativas",
      "Avanzadas",
      "Transformadoras",
      "Atractivas",
      "Eficientes",
      "Excepcionales",
      "Modernas",
      "Pioneras",
      "Únicas"],
    staticHeroTitlePartTwo: " para el mundo digital." // Parte 2 estática del título
  },
  aboutMe: { // New section data
    title: "Sobre Mí",
    subtitle: "Mi trayectoria y lo que me impulsa",
    androidSvgDescription: "Ilustración abstracta de un robot Android, representando el desarrollo móvil."
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
    statusInProgress: "En desarrollo",
    buttonViewMakingVideo: "Video en producción"

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
        { name: 'Room Database', subtitle: 'Base de datos local para Android', icon: <LucideDatabase className="w-8 h-8 text-orange-500" /> },
      ]
    },
    {
      category: "UI/UX y Diseño",
      items: [
        { name: 'Jetpack Compose', subtitle: 'Toolkit moderno para UI de Android', icon: <LayoutGrid className="w-8 h-8 text-sky-600" /> },
        { name: 'Material Design de Google', subtitle: 'Sistema de diseño para Android', icon: <Palette className="w-8 h-8 text-violet-600" /> },
        { name: 'Coil', subtitle: 'Librería de carga de imágenes para Android', icon: <Image className="w-8 h-8 text-violet-500" /> },
        { name: 'Navigation', subtitle: 'Navegacion con Jetpack Compose', icon: <Navigation className="w-8 h-8 text-blue-600" /> },
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
      estado: "Completado",
      makingVideo: null
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
      youtube: "https://youtu.be/cC5F1RxznQE",
      estado: "En desarrollo",
      makingVideo: null
    },
    {
      id: 3,
      titulo: "Prc RickMorty",
      descripcion: "Aplicacion de gestión de personajes de Rick y Morty.",
      tecnologias: ["Kotlin", "MVVM", "Clean Architecture", "Kotlin Flows", "Coroutines",
        "Retrofit 2", "Coil", "Jetpack Compose", "KDocs", "API Restful", "Navigation"],
      imagen: "https://i.ytimg.com/vi/HEPNMiL9fDU/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYTSBdKGUwDw==&rs=AOn4CLAXdo5T4pjSB8Npgm2MVtX9gU2wOg",
      github: "https://github.com/Anbs12/Prc_RickMorty_Android.git",
      youtube: "https://youtu.be/HEPNMiL9fDU",
      estado: "Completado",
      makingVideo: null
    },
    {
      id: 4,
      titulo: "Prc NasaApp",
      descripcion: "Aplicacion de seguimiento de la mision APOD de la NASA, con información sobre la foto astronomica del dia y imágenes del Mars Rover.",
      tecnologias: ["Kotlin", "Mockito", "MVVM", "Coroutines", "Navigation", "Retrofit", "Coil", "Dagger Hilt",
        "Jetpack Compose", "Material Design", "KDocs", "API Restful", "JUnit"],
      imagen: "https://graffica.info/wp-content/uploads/2017/08/LogoNasaSpotB-1200x675.jpg",
      github: "https://github.com/Anbs12/Prc_NasaApp.git",
      youtube: "https://youtu.be/YVVXdYj48k4",
      estado: "Completado",
      makingVideo: null
    },
    {
      id: 5,
      titulo: "Prc eCommerceApp",
      descripcion: "Aplicación de gestión de productos y pedidos para un eCommerce ficticio, con funcionalidades de carrito de compras y gestión de usuarios como futura implementación.",
      tecnologias: ["Kotlin", "Clean Architecture", "MVVM", "Dagger Hilt", "Jetpack Compose",
        "Coroutines", "Kotlin Flows", "Retrofit 2", "Coil", "Material Design 3", "KDocs",
        "Navigation", "Room Database", "API Restful"],
      imagen: "https://img.pikbest.com/png-images/ecommerce-logo-vector-graphics-element--e-commerce-logo-icon-design-online-store-logo-icon_1726010.png!sw800",
      github: "https://github.com/Anbs12/Prc_eCommerceApp.git",
      youtube: null,
      estado: "En desarrollo",
      makingVideo: null
    }
  ],
  experiencia: [
    {
      empresa: "Independiente",
      cargo: "Desarrollador Android Junior",
      periodo: "08/2024 - Presente",
      descripcion: `Sólida experiencia en la implementación de arquitecturas escalables como MVVM, 
      utilizando Kotlin Flows para datos reactivos en tiempo real. Experto en el desarrollo de interfaces de usuario tanto con XML como con Jetpack Compose, 
      y en la integración de APIs y bibliotecas de terceros para enriquecer la funcionalidad de las aplicaciones, incluyendo CameraX para optimización de imágenes y 
      Retrofit 2 para consumo de APIs RESTful como la de "Rick and Morty". Amplio conocimiento del ciclo de vida de desarrollo móvil, capaz de abordar desafíos en cada fase y 
      crear soluciones nativas personalizadas, 
      asegurando la compatibilidad entre versiones de API y la documentación exhaustiva del código con Kotlin KDocs.`
    },
    {
      empresa: "Magistra Ingeniería - Hardmachine",
      cargo: "Desarrollador Android Practicante",
      periodo: "05/2024 - 07/2024",
      descripcion: "Creación de aplicación de gestión de alertas realizada, con enfoque en la prevención de riesgos laborales gestion de perfiles, y mas."
    }
  ]
};