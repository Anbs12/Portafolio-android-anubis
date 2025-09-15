import {
  Github, Smartphone, Database, Globe, FileText, Camera, Layers,
  RefreshCw, ArrowRightCircle, LayoutGrid, Plug, CheckCircle, FileQuestion, FileCode, Navigation,
  LucideDatabase,
  Brain,
  Handshake,
  Lightbulb,
  MessageSquare,
  Shield,
  TestTube,
  User,
  Users,
  GraduationCap
} from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';
import Logo_UST from '../assets/Logo_UST.png';
import appprevencion_img from '../assets/img_appprevencion.png';
import appmovilalertas_img from '../assets/img_appmovilalerta.png';
import prc_rickmorty_img from '../assets/img_prc_rickmorty.png';
import prc_nasaapp_img from '../assets/img_prc_nasaapp.png';
import prc_ecommerceapp_img from '../assets/img_prc_ecommerceapp.png';
import img_en_desarrollo_esp from '../assets/img_en_desarrollo_esp.png';
import android_icon from '../assets/android-studio-icon.svg';
import calculadoraPropinas_img from '../assets/img_calculadora_propina_eng.png';
import toDoList_img from '../assets/img_toDo_list.png';
import appNotas_img from '../assets/img_noteApp.png';
import gestorContactos_img from '../assets/img_contactApp.png';
import chatApp_img from '../assets/img_chatApp.png';
import ml_kit_img from '../assets/ml_kit_img.png';
import weather_app_img from '../assets/img_weather_app_wallpaper.png';
import pet_walk_img from '../assets/img_pet_walk_app_wallpaper.png';

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
    {
      id: 'informacion',
      displayText: 'Información',
      subItems: [
        { id: 'sobre-mi', displayText: 'Sobre Mí' },
        { id: 'habilidades-personales', displayText: 'Habilidades Personales' },
      ]
    },
    { id: 'tecnologias', displayText: 'Tecnologías' },
    { id: 'proyectos', displayText: 'Proyectos' },
    { id: 'experiencia', displayText: 'Experiencia' },
    { id: 'educacion', displayText: 'Educación' },
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
  aboutMe: {
    title: "Sobre Mí",
    subtitle: "Mi trayectoria y lo que me impulsa",
    androidSvgDescription: "Ilustración abstracta de un robot Android, representando el desarrollo móvil."
  },
  technologiesTitle: {
    title: "Tecnologías",
    subtitle: "Stack tecnológico y herramientas que domino"
  },
  projectsSettings: {
    title: "Proyectos",
    subtitle: "Algunos de mis trabajos más destacados",
    buttonCode: "Código",
    buttonViewVideo: "Ver Video",
    statusCompleted: "Completado",
    statusInProgress: "En desarrollo",
    statusPaused: "En pausa",
    buttonViewMakingVideo: "Video en producción"

  },
  subProjectsSettings: {
    title: "Otros Proyectos",
    subtitle: "Sub proyectos y trabajos adicionales",
    buttonCode: "Código",
    buttonViewVideo: "Ver Video",
    statusCompleted: "Completado",
    statusInProgress: "En desarrollo",
    statusPaused: "En pausa",
    buttonViewMakingVideo: "Video en producción"

  },
  experienceTitle: {
    title: "Experiencia",
    subtitle: "Mi trayectoria profesional"
  },
  educationTitle: {
    title: "Educación",
    subtitle: "Mi formación académica",
  },
  certificationTitle: {
    title: 'Certificaciones',
    subtitle: 'Mis logros y certificaciones'
  },
  personalSkillsTitle: {
    title: "Habilidades Personales",
    subtitle: "Las habilidades que nos hacen un gran equipo y mas humanos" /* "Lo rasgos y cualidades que me definen como profesional" */
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
        { name: 'Kotlin', subtitle: 'Lenguaje de programación principal para Android', icon: <img src="https://www.svgrepo.com/show/303617/kotlin-1-logo.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
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
        { name: 'Firebase', subtitle: 'Plataforma de desarrollo de Google', icon: <img src="https://www.svgrepo.com/show/373595/firebase.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
        { name: 'Microsoft SQL Server', subtitle: 'Gestión de bases de datos relacionales', icon: <Database className="w-8 h-8 text-gray-700" /> },
        { name: 'APIs RESTful con Retrofit', subtitle: 'Comunicación con servicios web', icon: <Globe className="w-8 h-8 text-sky-700" /> },
        { name: 'Room Database', subtitle: 'Base de datos local para Android', icon: <LucideDatabase className="w-8 h-8 text-orange-500" /> },
        { name: 'GraphQL', subtitle: 'Lenguaje de consulta de datos para APIs', icon: <img src='https://graphql.org/_next/static/media/logo.ad338028.svg' alt="Kotlin Icon" className="w-8 h-8" /> },
        { name: 'Ktor', subtitle: 'Crear aplicaciones asíncronas de cliente y servidor', icon: <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTQ2IDQ4IiB3aWR0aD0iMTQ2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMSIgeDI9IjMxIiB5MT0iMTciIHkyPSI0NyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNmI1N2ZmIi8+PHN0b3Agb2Zmc2V0PSIuNDk5IiBzdG9wLWNvbG9yPSIjZmY0NWVkIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZGQxMjY1Ii8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtOTEuOTc3IDkuMDFoLTYuNGwtMTIuMzcgMTMuNTl2LTEzLjU5aC01LjJ2MjkuOTZoNS4ydi0xNC4zbDEyLjQ2IDE0LjNoNi41OWwtMTMuNDQtMTUuNTIgMTMuMTYtMTQuNDV6bTguMTQgMi42OWgtNC43MXYzLjU1YzAgLjUzLS4xNi45Ni0uNDkgMS4yOXMtLjc2LjUtMS4zMS41aC0yLjRsLS4wMiA0LjM5aDMuODVsLjAyIDExLjcxYzAgMS4xMS4yNiAyLjExLjc4IDMgLjUyLjg4IDEuMjUgMS41OCAyLjE4IDIuMDhzMS45OS43NSAzLjE2Ljc1aDQuNzN2LTQuMzloLTMuNzJjLS42IDAtMS4xLS4yLTEuNDktLjU5cy0uNTktLjg5LS41OS0xLjQ5bC0uMDItMTEuMDZoNS44MmwuMDItNC4zOWgtNS44MnYtNS4zNXptMjQuNTMgNi4zNGMtMS43NS0xLTMuNzEtMS41LTUuODYtMS41cy00LjEzLjUtNS45IDEuNWMtMS43NiAxLTMuMTQgMi4zNy00LjE0IDQuMTJzLTEuNSAzLjctMS41IDUuODUuNSA0LjExIDEuNTEgNS44NSAyLjM5IDMuMTIgNC4xNCA0LjEyIDMuNzEgMS41IDUuODYgMS41IDQuMTMtLjUgNS44OS0xLjVjMS43NS0xIDMuMTQtMi4zNyA0LjE0LTQuMTJzMS41MS0zLjcgMS41MS01Ljg1LS41LTQuMTEtMS41MS01Ljg1YTEwLjk5IDEwLjk5IDAgMCAwIC00LjE0LTQuMTJ6bS0uNCAxMy41OWMtLjUyIDEuMDYtMS4yNiAxLjg4LTIuMjEgMi40Ni0uOTYuNTgtMi4wNS44OC0zLjI3Ljg4cy0yLjMyLS4yOS0zLjI2LS44OC0xLjY4LTEuNDEtMi4yLTIuNDZjLS41Mi0xLjA2LS43OC0yLjI2LS43OC0zLjYycy4yNi0yLjU4Ljc4LTMuNjQgMS4yNi0xLjg4IDIuMi0yLjQ2Yy45NS0uNTggMi4wNC0uODggMy4yNi0uODhzMi4zMS4zIDMuMjYuODkgMS42OSAxLjQxIDIuMjEgMi40NmMuNTMgMS4wNS43OSAyLjI2Ljc5IDMuNjNzLS4yNiAyLjU2LS43OCAzLjYyem0yMC44OS0xNC43M2MtMS41NiAwLTIuOTIuNC00LjA5IDEuMjEtLjgzLjU3LTEuNTMgMS4zMy0yLjEgMi4yNnYtMy4zMmgtNS4wMXYyMS45Mmg1LjA1di0xMS44M2MwLTEuMDYuMjItMS45Ny42Ny0yLjc0czEuMDktMS4zNiAxLjkzLTEuNzhjLjgzLS40MSAxLjgyLS42MiAyLjk0LS42MmgxLjQxdi01LjA5aC0uODF6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTQ4IDMxLjk5OC0xNi4wMDQgMTYuMDAyLTMxLjk5Ni0zMi4wMDQgMTYuMDAyLTE1Ljk5NiAzMS45OTcgMzEuOTk4eiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Im0zMi4wMSAxNS45OTZoLTE2LjAwMnYxNi4wMDJoMTYuMDAyeiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==" alt="Kotlin Icon" className="w-8 h-8" /> },
        { name: 'Postgresql ', subtitle: 'Base de datos relacional avanzada', icon: <img src="https://www.svgrepo.com/show/439268/postgresql.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
        { name: 'Exposed', subtitle: 'Biblioteca SQL de Kotlin', icon: <img src="https://plugins.jetbrains.com/files/24367/809208/icon/default.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
      ]
    },
    {
      category: "UI/UX y Diseño",
      items: [
        { name: 'Jetpack Compose', subtitle: 'Toolkit moderno para UI de Android', icon: <img src="https://avatars.githubusercontent.com/u/71742764?s=200&v=4" alt="Kotlin Icon" className="w-8 h-8" /> },
        { name: 'Material Design de Google', subtitle: 'Sistema de diseño para Android', icon: <img src="https://www.svgrepo.com/show/342017/material-design.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
        { name: 'Coil', subtitle: 'Librería de carga de imágenes para Android', icon: <img src="https://avatars.githubusercontent.com/u/52722434?s=200&v=4" alt="Kotlin Icon" className="w-8 h-8" /> },
        { name: 'Navigation', subtitle: 'Navegacion con Jetpack Compose', icon: <Navigation className="w-8 h-8 text-blue-600" /> },
      ]
    },
    {
      category: "Testing",
      items: [
        { name: 'JUnit', subtitle: 'Framework para pruebas unitarias', icon: <CheckCircle className="w-8 h-8 text-teal-600" /> },
        { name: 'Robolectric', subtitle: 'Framework para pruebas unitarias de Android', icon: <img src="https://avatars.githubusercontent.com/u/3988212?s=200&v=4" alt="Kotlin Icon" className="w-8 h-8" /> },
        { name: 'Mock', subtitle: 'Simulación de objetos para pruebas', icon: <FileQuestion className="w-8 h-8 text-amber-600" /> },
      ]
    },
    {
      category: "Herramientas y Productividad",
      items: [
        { name: 'Control de versiones Git', subtitle: 'Sistema de control de versiones distribuido', icon: <img src="https://www.svgrepo.com/show/452210/git.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
        { name: 'GitHub', subtitle: 'Plataforma para control de versiones', icon: <Github className="w-8 h-8 text-gray-800" /> },
        { name: 'Android Studio', subtitle: 'IDE oficial para desarrollo Android', icon: <img src={android_icon} alt="Kotlin Icon" className="w-8 h-8" /> },
        { name: 'CameraX', subtitle: 'API para desarrollo de cámara en Android', icon: <Camera className="w-8 h-8 text-pink-600" /> },
        { name: 'Documentación KDocs', subtitle: 'Generación de documentación en Kotlin', icon: <FileText className="w-8 h-8 text-cyan-600" /> },
        { name: 'Microsoft Word', subtitle: 'Procesador de texto', icon: <img src="https://www.svgrepo.com/show/374187/word.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
        { name: 'Microsoft PowerPoint', subtitle: 'Software de presentaciones', icon: <img src="https://www.svgrepo.com/show/373989/powerpoint.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
        { name: 'Jetbrains IntelliJ IDEA', subtitle: 'Entorno de desarrollo integrado para Java y Kotlin', icon: <img src="https://www.svgrepo.com/show/353906/intellij-idea.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
      ]
    },
    {
      category: "Posiblemente lo que podria venir...",
      items: [
        { name: 'Modelos TensorFlow Lite', subtitle: 'Modelos de inteligencia en dispositivos Android', icon: <img src="https://www.svgrepo.com/show/354440/tensorflow.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
        {
          name: 'ML Kit', subtitle: 'Aporta la experiencia de Google en aprendizaje automático a los desarrolladores móviles en un paquete potente y fácil de usar.',
          icon: <img src={ml_kit_img} alt="Kotlin Icon" className="w-8 h-8" />
        },
        { name: 'Koog', subtitle: 'Framework en Kotlin diseñado para crear y ejecutar agentes de IA.', icon: <img src='https://blog.jetbrains.com/wp-content/uploads/2024/10/IMG_2404.png' className="w-8 h-8" /> },
      ]
    }
  ],
  proyectos: [
    {
      id: 1,
      titulo: "App Prevencion",
      descripcion: "Aplicación de gestión de alertas desarrollada en mi práctica profesional, centrada en la prevención de riesgos laborales, la gestión de perfiles, etc.",
      tecnologias: ["Kotlin", "XML", "Microsoft SQL Server", "Coroutines"],
      imagen: appprevencion_img,
      github: null,
      youtube: "https://www.youtube.com/watch?v=7P2PxyEzT0o&list=PL-DzkWcV11qsjKc-UWFknNcKSprQBWAVW&index=5&pp=gAQBiAQB",
      estado: "Completado",
      makingVideo: null
    },
    {
      id: 2,
      titulo: "appMovilAlertas",
      descripcion: "Aplicación mejorada de gestión de alertas V2 centrada en la prevención de riesgos laborales, la gestión de perfiles, etc.",
      tecnologias: ["Kotlin", "Jetpack Compose", "MVVM", "Kotlin Flows", "Coroutines",
        "Microsoft SQL Server", "XML", "CameraX", "Material Design", "JUnit", "Robolectric", "Mock"
      ],
      imagen: appmovilalertas_img,
      github: "https://github.com/Anbs12/appMovilAlertas.git",
      youtube: "https://youtu.be/cC5F1RxznQE",
      estado: "En pausa",
      makingVideo: null
    },
    {
      id: 3,
      titulo: "Prc RickMorty",
      descripcion: "Aplicación de gestión de personajes de Rick y Morty.",
      tecnologias: ["Kotlin", "MVVM", "Clean Architecture", "Kotlin Flows", "Coroutines",
        "Retrofit", "Coil", "Jetpack Compose", "KDocs", "API Restful", "Navigation"],
      imagen: prc_rickmorty_img,
      github: "https://github.com/Anbs12/Prc_RickMorty_Android.git",
      youtube: "https://youtu.be/HEPNMiL9fDU",
      estado: "Completado",
      makingVideo: null
    },
    {
      id: 4,
      titulo: "Prc NasaApp",
      descripcion: "Aplicación de seguimiento de la mision APOD de la NASA, con información sobre la foto astronomica del dia y imágenes del Mars Rover.",
      tecnologias: ["Kotlin", "Mockito", "MVVM", "Coroutines", "Navigation", "Retrofit", "Coil", "Dagger Hilt",
        "Jetpack Compose", "Material Design", "KDocs", "API Restful", "JUnit"],
      imagen: prc_nasaapp_img,
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
        "Coroutines", "Kotlin Flows", "Retrofit", "Coil", "Material Design 3", "KDocs",
        "Navigation", "Room Database", "API Restful"],
      imagen: prc_ecommerceapp_img,
      github: "https://github.com/Anbs12/Prc_eCommerceApp.git",
      youtube: null,
      estado: "En pausa",
      makingVideo: null
    },
    {
      id: 6,
      titulo: "Prc Animelist",
      descripcion: "Aplicación de gestión de animes, con funcionalidades de búsqueda, filtrado y gestión de listas de seguimiento.",
      tecnologias: ["Kotlin", "Clean Architecture", "MVVM", "Dagger Hilt", "Jetpack Compose",
        "Coroutines", "Kotlin Flows", "Coil", "Material Design 3", "KDocs",
        "Navigation", "Room Database", "GraphQL", "OkHttp"],
      imagen: img_en_desarrollo_esp,
      github: null,
      youtube: null,
      estado: "En pausa",
      makingVideo: null
    }
  ],
  subProyectos: [
    {
      id: 1,
      titulo: "Calculadora de Propinas",
      descripcion: "Una aplicación simple y elegante para Android que calcula propinas de forma rápida y sencilla, construida con Kotlin.",
      tecnologias: ["Kotlin", "XML", "SharedPreferences"],
      imagen: calculadoraPropinas_img,
      github: "https://github.com/Anbs12/DefLatam_CalculadoraPropinas.git",
      youtube: null,
      estado: "Completado"
    },
    {
      id: 2,
      titulo: "Lista de Tareas (To-Do List)",
      descripcion: "Una aplicación intuitiva y eficiente para gestionar tus tareas diarias en Android, desarrollada con Kotlin.",
      tecnologias: ["Kotlin", "XML", "SharedPreferences", "RecyclerView"],
      imagen: toDoList_img,
      github: "https://github.com/Anbs12/DefLatam_ToDoList.git",
      youtube: null,
      estado: "Completado"
    },
    {
      id: 3,
      titulo: "Aplicación de Notas",
      descripcion: "Una aplicación de notas completa para Android, diseñada para ayudarte a organizar tus pensamientos y tareas con facilidad, construida con Kotlin.",
      tecnologias: ["Kotlin", "XML", "SharedPreferences"],
      imagen: appNotas_img,
      github: "https://github.com/Anbs12/DefLatam_NoteApp.git",
      youtube: null,
      estado: "Completado"
    },
    {
      id: 4,
      titulo: "Gestor de Contactos",
      descripcion: "Una aplicación robusta para Android diseñada para una gestión eficiente de tus contactos, implementando una arquitectura moderna y persistencia de datos fiable con Kotlin.",
      tecnologias: ["Kotlin", "XML", "MVVM", "LiveData", "Room Database", "RecyclerView", "Coroutines", "Gson"],
      imagen: gestorContactos_img,
      github: "https://github.com/Anbs12/DefLatam_ContactApp.git",
      youtube: null,
      estado: "Completado"
    },
    {
      id: 5,
      titulo: "Chat en Tiempo Real",
      descripcion: `Una aplicación de chat avanzada para Android que permite la comunicación en tiempo real a través de múltiples salas, 
      construida con Kotlin y diseñada con una arquitectura limpia y técnicas de desarrollo avanzadas.`,
      tecnologias: ["Kotlin", "XML", "MVVM", "Room Database", "RecyclerView", "Coroutines", "Gson", "Firebase",
        "Firebase Authentication", "Firebase Analytics", "Cloud Firestore", "Retrofit", "Glide", "Dagger Hilt"],
      imagen: chatApp_img,
      github: "https://github.com/Anbs12/DefLatam_ChatApp.git",
      youtube: null,
      estado: "Completado"
    },
    {
      id: 6,
      titulo: "Aplicación del Clima",
      descripcion: `Una aplicación para visualizar el clima actual y el pronóstico extendido, utilizando la API de 
      OpenWeatherMap para obtener datos meteorológicos precisos y actualizados.`,
      tecnologias: ["Kotlin", "XML", "MVVM ", "Room Database", "RecyclerView", "Coroutines", "Retrofit", "Glide", "Dagger Hilt"],
      imagen: weather_app_img,
      github: "https://github.com/Anbs12/WeatherApp.git",
      youtube: null,
      estado: "Completado"
    },
    {
      id: 7,
      titulo: "Control Paseo Mascotas",
      descripcion: `Una aplicación construida en equipo, diseñada para gestionar y coordinar los paseos de mascotas.`,
      tecnologias: ["Kotlin", "Jetpack Compose", "Room Database", "MVVM", "TeamWork"],
      imagen: pet_walk_img,
      github: "https://github.com/software-developments-cl/AppFinal_lat.git",
      youtube: null,
      estado: "Completado"
    }
  ],
  experiencia: [
    {
      empresa: "Globant",
      cargo: "Desarrollador Kotlin y Java Trainee",
      periodo: "08/2025 - Presente",
      descripcion: `Actualmente estoy recibiendo formación en desarrollo con Kotlin y Java, centrándome en la creación de aplicaciones escalables y eficientes.`,
      logo: 'https://cdn.brandfetch.io/ide8CeiHjg/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1753072558221'
    },
    {
      empresa: "Independiente",
      cargo: "Desarrollador Android Junior",
      periodo: "08/2024 - Presente",
      descripcion: `Sólida experiencia en la implementación de arquitecturas escalables como MVVM, 
      utilizando Kotlin Flows para datos reactivos en tiempo real. Experto en el desarrollo de interfaces de usuario tanto con XML como con Jetpack Compose, 
      y en la integración de APIs y bibliotecas de terceros para enriquecer la funcionalidad de las aplicaciones, incluyendo CameraX para optimización de imágenes y 
      Retrofit para consumo de APIs RESTful como la de "Rick and Morty". Amplio conocimiento del ciclo de vida de desarrollo móvil, capaz de abordar desafíos en cada fase y 
      crear soluciones nativas personalizadas, 
      asegurando la compatibilidad entre versiones de API y la documentación exhaustiva del código con Kotlin KDocs.`,
      logo: 'https://www.svgrepo.com/show/274862/programmer.svg'
    },
    {
      empresa: "Magistra Ingeniería - Hardmachine",
      cargo: "Desarrollador Android Practicante",
      periodo: "05/2024 - 07/2024",
      descripcion: "Creación de aplicación de gestión de alertas realizada, con enfoque en la prevención de riesgos laborales gestion de perfiles, y mas."
    }
  ],
  educationItems: [
    {
      institucion: "Instituto Profesional Santo Tomás",
      titulo: "Técnico Superior - Analista Programador",
      periodo: "2022 - 2024",
      descripcion: `Técnico Superior en Analista Programador con sólida formación en análisis, arquitectura de sistemas y diseño de software.
      Dominio de estructuras de datos, bases de datos y sistemas operativos.
      Desarrollo de proyectos en Java, Python, .NET, Android, aplicaciones web e IoT.
      La formación concluyó con una práctica profesional en la que apliqué mis conocimientos en un entorno real.`,
      logo: Logo_UST
    }
  ],
  certificationItems: [
    {
      institucion: "Udemy",
      titulo: "Kotlin Multiplatform Masterclass - KMP, KMM - Android, IOS",
      periodo: "Septiembre/2025",
      descripcion: `Certificado de desarrollo en Kotlin Multiplatform, abarcando desde los fundamentos de KMP y KMM,
      hasta la creación de aplicaciones nativas para Android e iOS. Este logro refleja mi compromiso con la excelencia
      y aprendizaje para aumentar mis habilidades en el desarrollo.`,
      logo: 'https://freelogopng.com/images/all_img/1683006778udemy-logo-png.png',
      url: "https://www.udemy.com/certificate/UC-a96cf502-6726-444a-8ca8-c417799f5320/",
      urlText: "Ver Certificado",
      icon: <GraduationCap className="w-8 h-8 text-black dark:text-white" />
    },
    {
      institucion: "Desafío Latam",
      titulo: "Programa de Especialización en Desarrollo con Kotlin",
      periodo: "Agosto/2025",
      descripcion: `Certificación obtenida tras completar una serie de cursos especializados en desarrollo móvil con Android.
      La especialización abarcó desde los fundamentos de Kotlin y el desarrollo de interfaces de usuario, hasta la integración de APIs.
      Este logro refleja mi compromiso con la excelencia y mi capacidad para aplicar conocimientos avanzados en proyectos reales.`,
      logo: 'https://ugc.production.linktr.ee/NULe9wg4R3SSCyLIDCFI_54hpaIhfZgx1wb1f?io=true&size=avatar-v3_0',
      url: "https://empieza.desafiolatam.com/v/gDNgvA5QXWNA9BWENq8EPTrX",
      urlText: "Ver Certificado",
      icon: <GraduationCap className="w-8 h-8 text-black dark:text-white" />
    }
  ],
  personalSkillItem: [
    { name: "Inteligencia Emocional", icon: <Lightbulb className="w-8 h-8 text-yellow-500" /> },
    { name: "Comunicación Asertiva", icon: <MessageSquare className="w-8 h-8 text-blue-500" /> },
    { name: "Colaboración Efectiva", icon: <Handshake className="w-8 h-8 text-teal-500" /> },
    { name: "Resiliencia en el lugar de trabajo", icon: <Shield className="w-8 h-8 text-gray-500" /> },
    { name: "Pensamiento Crítico", icon: <Brain className="w-8 h-8 text-purple-500" /> },
    { name: "Autonomía Profesional", icon: <User className="w-8 h-8 text-green-500" /> },
    { name: "Capacitación del Personal", icon: <Users className="w-8 h-8 text-indigo-500" /> },
    { name: "Capacidad Diagnóstica", icon: <TestTube className="w-8 h-8 text-red-500" /> }
  ]
};