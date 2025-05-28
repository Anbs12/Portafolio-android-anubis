import {
  ChevronDown, Github, ExternalLink, Mail, Linkedin, Phone, Code, Smartphone, Database, Globe, Server, Zap, FileText, TestTube, GitBranch, Camera, Settings, Layers, Terminal, Palette, Play,
  RefreshCw, ArrowRightCircle, LayoutGrid, Award, Plug, CheckCircle, Bot, FileQuestion, FileCode, Monitor, Image, Presentation, Menu, X
} from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';


// Datos configurables en ESPAÑOL
export const portfolioDataEs: PortfolioDataType = {
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