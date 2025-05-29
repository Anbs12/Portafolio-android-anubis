import {
    Github, Smartphone, Database, Globe, FileText, GitBranch, Camera, Layers, Palette, 
    RefreshCw, ArrowRightCircle, LayoutGrid, Award, Plug, CheckCircle, Bot, FileQuestion, FileCode, Monitor, Image, Presentation} from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';


// Datos configurables en INGLÉS
export const portfolioDataEn: PortfolioDataType = {
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