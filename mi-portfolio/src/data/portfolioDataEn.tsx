import {
    Github, Smartphone, Database, Globe, FileText, GitBranch, Camera, Layers, Palette,
    RefreshCw, ArrowRightCircle, LayoutGrid, Award, Plug, CheckCircle, Bot, FileQuestion, FileCode, Monitor, Image, Presentation,
    Navigation, LucideDatabase
} from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';


// Datos configurables en INGLÉS
export const portfolioDataEn: PortfolioDataType = {
    personal: {
        nombre: "Anubis Montero",
        titulo: "Android & Kotlin Jr. Developer",
        descripcion: `I´m a junior Android Developer with hands-on experience building native mobile applications using Kotlin, MVVM 
        architecture, and Jetpack Compose. Skilled in implementing RESTful APIs with Retrofit, developing interfaces with 
        both XML and Compose, and managing reactive data using Flows and Coroutines. Practical experience with CameraX, 
        Firebase, and unit testing (JUnit). Associate Degree in Programming with strong problem-solving abilities, team 
        collaboration skills, and autonomy in development environments.`,
        email: "your@email.com",
        telefono: "+1234567890",
        linkedin: "anubism",
        github: "anbs12"
    },
    navItems: [
        { id: 'inicio', displayText: 'Home' },
        { id: 'sobre-mi', displayText: 'About Me' },
        { id: 'tecnologias', displayText: 'Technologies' },
        { id: 'proyectos', displayText: 'Projects' },
        { id: 'experiencia', displayText: 'Experience' },
        { id: 'contacto', displayText: 'Contact' }
    ],
    hero: {
        buttonProjects: "View Projects",
        buttonContact: "Contact Me",
        staticHeroTitlePartOne: "Bringing Your Concepts to Life: ",
        dynamicPhrases: ["Innovative",
            "Functional",
            "Intuitive",
            "Creative",
            "Cutting-edge",
            "Transformative",
            "Engaging",
            "Efficient",
            "Exceptional",
            "Modern",
            "Pioneering",
            "Unique"],
        staticHeroTitlePartTwo: " Android Experiences for the Digital World."
    },
    aboutMe: { // New section data
        title: "About Me",
        subtitle: "My journey and what drives me",
        androidSvgDescription: "Abstract illustration of an Android robot, representing mobile development."
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
        statusInProgress: "In Development",
        buttonViewMakingVideo: "Video in production"
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
                { name: 'Room Database', subtitle: 'Local database for Android', icon: <LucideDatabase className="w-8 h-8 text-orange-500" /> }
            ]
        },
        {
            category: "UI/UX and Design",
            items: [
                { name: 'Jetpack Compose', subtitle: 'Modern UI toolkit for Android', icon: <LayoutGrid className="w-8 h-8 text-sky-600" /> },
                { name: 'Google Material Design', subtitle: 'Design system for Android', icon: <Palette className="w-8 h-8 text-violet-600" /> },
                { name: 'Coil', subtitle: 'Image loading library for Android', icon: <Image className="w-8 h-8 text-violet-500" /> },
                { name: 'Navigation', subtitle: 'Navigation with Jetpack Compose', icon: <Navigation className="w-8 h-8 text-blue-600" /> },
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
            titulo: "App Prevencion",
            descripcion: "Alert management application developed during my professional internship, with a focus on occupational risk prevention, profile management, and more.",
            tecnologias: ["Kotlin", "XML", "Microsoft SQL Server", "Coroutines"],
            imagen: "https://i.ytimg.com/vi/7P2PxyEzT0o/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4AdwEgAKACooCDAgAEAEYfyATKDAwDw==&rs=AOn4CLCPStVnJdLf1kRnOa5A6dcjzB2vcQ",
            github: null,
            youtube: "https://www.youtube.com/watch?v=7P2PxyEzT0o&list=PL-DzkWcV11qsjKc-UWFknNcKSprQBWAVW&index=5&pp=gAQBiAQB",
            estado: "Completed"
        },
        {
            id: 2,
            titulo: "appMovilAlertas",
            descripcion: "Alert management application V2 improved with a focus on occupational risk prevention, profile management, and more.",
            tecnologias: ["Kotlin", "Jetpack Compose", "MVVM", "Kotlin Flows", "Coroutines",
                "Microsoft SQL Server", "XML", "CameraX", "Material Design", "JUnit", "Robolectric", "Mock"
            ],
            imagen: "https://i.ytimg.com/vi/cC5F1RxznQE/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYOSBMKHIwDw==&rs=AOn4CLDuMJijPuu_oBRIcjb4cqg-FWJ1PQ",
            github: "https://github.com/Anbs12/appMovilAlertas.git",
            youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            estado: "In development"
        },
        {
            id: 3,
            titulo: "Prc RickMorty",
            descripcion: "Rick and Morty character management application.",
            tecnologias: ["Kotlin", "MVVM", "Clean Architecture", "Kotlin Flows", "Coroutines",
                "Retrofit 2", "Coil", "Jetpack Compose", "KDocs", "API Restful", "Navigation"],
            imagen: "https://i.ytimg.com/vi/HEPNMiL9fDU/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYTSBdKGUwDw==&rs=AOn4CLAXdo5T4pjSB8Npgm2MVtX9gU2wOg",
            github: "https://github.com/Anbs12/Prc_RickMorty_Android.git",
            youtube: "https://www.youtube.com/watch?v=HEPNMiL9fDU&list=PL-DzkWcV11qsjKc-UWFknNcKSprQBWAVW&index=1&pp=gAQBiAQB",
            estado: "Completed"
        },
        {
            id: 4,
            titulo: "Prc NasaApp",
            descripcion: "NASA APOD mission tracking application, with information about the Astronomical Photo of the Day and Mars Rover images.",
            tecnologias: ["Kotlin", "Mockito", "MVVM", "Coroutines", "Navigation", "Retrofit", "Coil", "Dagger Hilt",
                "Jetpack Compose", "Material Design", "KDocs", "API Restful"],
            imagen: "https://graffica.info/wp-content/uploads/2017/08/LogoNasaSpotB-1200x675.jpg",
            github: "https://github.com/Anbs12/Prc_NasaApp.git",
            youtube: null,
            estado: "Completed",
            makingVideo: "In dev"
        },
        {
            id: 5,
            titulo: "Prc eCommerceApp",
            descripcion: "Product and order management application for a fictional eCommerce, with shopping cart functionalities and user management as a future implementation.",
            tecnologias: ["Kotlin", "Clean Architecture", "MVVM", "Dagger Hilt", "Jetpack Compose",
                "Coroutines", "Kotlin Flows", "Retrofit 2", "Coil", "Material Design 3", "KDocs",
                "Navigation", "Room Database", "API Restful"],
            imagen: "https://img.pikbest.com/png-images/ecommerce-logo-vector-graphics-element--e-commerce-logo-icon-design-online-store-logo-icon_1726010.png!sw800",
            github: "https://github.com/Anbs12/Prc_eCommerceApp.git",
            youtube: null,
            estado: "In development",
            makingVideo: null
        }
    ],
    experiencia: [
        {
            empresa: "Freelance",
            cargo: "Junior Android Developer",
            periodo: "08/2024 - Present",
            descripcion: `solid experience in implementing scalable architectures like MVVM, utilizing Kotlin Flows for real-time reactive data. 
            Proficient in developing user interfaces with both XML 
            and Jetpack Compose, and integrating third-party APIs and libraries to enhance application functionality, including CameraX for optimized photo capture across multiple devices 
            and Retrofit 2 for consuming RESTful APIs like "Rick and Morty." Possessing comprehensive knowledge of the mobile development lifecycle, 
            capable of addressing challenges at each phase and creating custom native solutions, ensuring API compatibility and thorough code documentation with Kotlin KDocs.
            `
        },
        {
            empresa: "Magistra Ingeniería - Hardmachine",
            cargo: "Intern Android Developer",
            periodo: "05/2024 - 07/2024",
            descripcion: "Developed an alert management application, focused on occupational risk prevention, profile management, and more."
        }
    ]
};