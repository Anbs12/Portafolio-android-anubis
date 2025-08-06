import {
    Github, Smartphone, Database, Globe, FileText, Camera, Layers,
    RefreshCw, ArrowRightCircle, LayoutGrid, Plug, CheckCircle, FileQuestion, FileCode,
    Navigation, LucideDatabase,
    Lightbulb,
    Brain,
    Handshake,
    MessageSquare,
    Shield,
    TestTube,
    User,
    Users
} from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';
import Logo_UST from '../assets/Logo_UST.png';
import appprevencion_img from '../assets/img_appprevencion.png';
import appmovilalertas_img from '../assets/img_appmovilalerta.png';
import prc_rickmorty_img from '../assets/img_prc_rickmorty.png';
import prc_nasaapp_img from '../assets/img_prc_nasaapp.png';
import prc_ecommerceapp_img from '../assets/img_prc_ecommerceapp.png';
import img_en_desarrollo_eng from '../assets/img_en_desarrollo_eng.png';
import android_icon from '../assets/android-studio-icon.svg';
import calculadoraPropinas_img from '../assets/img_calculadora_propina.jpg';
import toDoList_img from '../assets/img_toDo_list_eng.png';
import notasApp_img from '../assets/img_noteApp_eng.png';
import contactApp_img from '../assets/img_contactApp_eng.png';
import chatApp_img from '../assets/img_chatApp_eng.png';


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
        {
            id: 'informacion',
            displayText: 'Information',
            subItems: [
                { id: 'sobre-mi', displayText: 'About Me' },
                { id: 'habilidades-personales', displayText: 'Personal Skills' },
            ]
        },
        { id: 'tecnologias', displayText: 'Technologies' },
        { id: 'proyectos', displayText: 'Projects' },
        { id: 'experiencia', displayText: 'Experience' },
        { id: 'educacion', displayText: 'Education' },
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
    aboutMe: {
        title: "About Me",
        subtitle: "My journey and what drives me",
        androidSvgDescription: "Abstract illustration of an Android robot, representing mobile development."
    },
    technologiesTitle: {
        title: "Technologies",
        subtitle: "Technology stack and tools I master"
    },
    projectsSettings: {
        title: "Projects",
        subtitle: "Some of my most notable works",
        buttonCode: "Code",
        buttonViewVideo: "Watch Video",
        statusCompleted: "Completed",
        statusInProgress: "In Development",
        buttonViewMakingVideo: "Video in production"
    },
    subProjectsSettings: {
        title: "Other Projects",
        subtitle: "Sub projects and additional works",
        buttonCode: "Código",
        buttonViewVideo: "Ver Video",
        statusCompleted: "Completado",
        statusInProgress: "En desarrollo",
        buttonViewMakingVideo: "Video en producción"

    },
    experienceTitle: {
        title: "Experience",
        subtitle: "My professional journey"
    },
    educationTitle: {
        title: "Education",
        subtitle: "My academic background",
    },
    personalSkillsTitle: {
        title: "Personal Skills",
        subtitle: "Traits and qualities that define me as a professional",
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
                { name: 'Kotlin', subtitle: 'Main programming language for Android', icon: <img src="https://www.svgrepo.com/show/303617/kotlin-1-logo.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
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
                { name: 'Firebase', subtitle: 'Google development platform', icon: <img src="https://www.svgrepo.com/show/373595/firebase.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
                { name: 'Microsoft SQL Server', subtitle: 'Relational database management', icon: <Database className="w-8 h-8 text-gray-700" /> },
                { name: 'RESTful APIs with Retrofit 2', subtitle: 'Web service communication', icon: <Globe className="w-8 h-8 text-sky-700" /> },
                { name: 'Room Database', subtitle: 'Local database for Android', icon: <LucideDatabase className="w-8 h-8 text-orange-500" /> },
                { name: 'GraphQL', subtitle: 'Data query language for APIs', icon: <img src='https://graphql.org/_next/static/media/logo.ad338028.svg' alt="Kotlin Icon" className="w-8 h-8" /> },
            ]
        },
        {
            category: "UI/UX and Design",
            items: [
                { name: 'Jetpack Compose', subtitle: 'Modern UI toolkit for Android', icon: <img src="https://avatars.githubusercontent.com/u/71742764?s=200&v=4" alt="Kotlin Icon" className="w-8 h-8" /> },
                { name: 'Google Material Design', subtitle: 'Design system for Android', icon: <img src="https://www.svgrepo.com/show/342017/material-design.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
                { name: 'Coil', subtitle: 'Image loading library for Android', icon: <img src="https://avatars.githubusercontent.com/u/52722434?s=200&v=4" alt="Kotlin Icon" className="w-8 h-8" /> },
                { name: 'Navigation', subtitle: 'Navigation with Jetpack Compose', icon: <Navigation className="w-8 h-8 text-blue-600" /> },
            ]
        },
        {
            category: "Testing",
            items: [
                { name: 'JUnit', subtitle: 'Unit testing framework', icon: <CheckCircle className="w-8 h-8 text-teal-600" /> },
                { name: 'Robolectric', subtitle: 'Unit testing framework for Android', icon: <img src="https://avatars.githubusercontent.com/u/3988212?s=200&v=4" alt="Kotlin Icon" className="w-8 h-8" /> },
                { name: 'Mock', subtitle: 'Object simulation for testing', icon: <FileQuestion className="w-8 h-8 text-amber-600" /> },
            ]
        },
        {
            category: "Tools and Productivity",
            items: [
                { name: 'Git Version Control', subtitle: 'Distributed version control system', icon: <img src="https://www.svgrepo.com/show/452210/git.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
                { name: 'GitHub', subtitle: 'Platform for version control', icon: <Github className="w-8 h-8 text-gray-800" /> },
                { name: 'Android Studio', subtitle: 'Official IDE for Android development', icon: <img src={android_icon} alt="Kotlin Icon" className="w-8 h-8" /> },
                { name: 'CameraX', subtitle: 'API for camera development in Android', icon: <Camera className="w-8 h-8 text-pink-600" /> },
                { name: 'KDocs Documentation', subtitle: 'Documentation generation in Kotlin', icon: <FileText className="w-8 h-8 text-cyan-600" /> },
                { name: 'Microsoft Word', subtitle: 'Word processor', icon: <img src="https://www.svgrepo.com/show/374187/word.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
                { name: 'Microsoft PowerPoint', subtitle: 'Presentation software', icon: <img src="https://www.svgrepo.com/show/373989/powerpoint.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
                { name: 'Jetbrains IntelliJ IDEA', subtitle: 'Integrated development environment for Java and Kotlin.', icon: <img src="https://www.svgrepo.com/show/353906/intellij-idea.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
            ]
        },
    ],
    proyectos: [
        {
            id: 1,
            titulo: "App Prevencion",
            descripcion: "Alert management application developed during my professional internship, with a focus on occupational risk prevention, profile management, and more.",
            tecnologias: ["Kotlin", "XML", "Microsoft SQL Server", "Coroutines"],
            imagen: appprevencion_img,
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
            imagen: appmovilalertas_img,
            github: "https://github.com/Anbs12/appMovilAlertas.git",
            youtube: "https://youtu.be/5mw4I_J1-eg",
            estado: "In development"
        },
        {
            id: 3,
            titulo: "Prc RickMorty",
            descripcion: "Rick and Morty character management application.",
            tecnologias: ["Kotlin", "MVVM", "Clean Architecture", "Kotlin Flows", "Coroutines",
                "Retrofit 2", "Coil", "Jetpack Compose", "KDocs", "API Restful", "Navigation"],
            imagen: prc_rickmorty_img,
            github: "https://github.com/Anbs12/Prc_RickMorty_Android.git",
            youtube: "https://youtu.be/SofuhP2qKIs",
            estado: "Completed"
        },
        {
            id: 4,
            titulo: "Prc NasaApp",
            descripcion: "NASA APOD mission tracking application, with information about the Astronomical Photo of the Day and Mars Rover images.",
            tecnologias: ["Kotlin", "Mockito", "MVVM", "Coroutines", "Navigation", "Retrofit", "Coil", "Dagger Hilt",
                "Jetpack Compose", "Material Design", "KDocs", "API Restful", "JUnit"],
            imagen: prc_nasaapp_img,
            github: "https://github.com/Anbs12/Prc_NasaApp.git",
            youtube: "https://youtu.be/_QikS0dC2fM",
            estado: "Completed",
            makingVideo: null
        },
        {
            id: 5,
            titulo: "Prc eCommerceApp",
            descripcion: "Product and order management application for a fictional eCommerce, with shopping cart functionalities and user management as a future implementation.",
            tecnologias: ["Kotlin", "Clean Architecture", "MVVM", "Dagger Hilt", "Jetpack Compose",
                "Coroutines", "Kotlin Flows", "Retrofit 2", "Coil", "Material Design 3", "KDocs",
                "Navigation", "Room Database", "API Restful"],
            imagen: prc_ecommerceapp_img,
            github: "https://github.com/Anbs12/Prc_eCommerceApp.git",
            youtube: null,
            estado: "In development",
            makingVideo: null
        },
        {
            id: 6,
            titulo: "Prc Animelist",
            descripcion: "Anime management application, with search, filtering and watchlist management functionalities.",
            tecnologias: ["Kotlin", "Clean Architecture", "MVVM", "Dagger Hilt", "Jetpack Compose",
                "Coroutines", "Kotlin Flows", "Coil", "Material Design 3", "KDocs",
                "Navigation", "Room Database", "GraphQL", "OkHttp"],
            imagen: img_en_desarrollo_eng,
            github: null,
            youtube: null,
            estado: "In development",
            makingVideo: null
        }
    ],
    subProyectos: [
        {
            id: 1,
            titulo: "Tip Calculator",
            descripcion: "An application that allows you to calculate tips based on the total amount of a bill, with options for different percentages.",
            tecnologias: ["Kotlin", "XML", "SharedPreferences"],
            imagen: calculadoraPropinas_img,
            github: "https://github.com/Anbs12/DefLatam_CalculadoraPropinas.git",
            youtube: null,
            estado: "Completed"
        },
        {
            id: 2,
            titulo: "To-Do List App",
            descripcion: "An application that allows you to manage tasks with options to add, edit, and delete items.",
            tecnologias: ["Kotlin", "XML", "SharedPreferences", "RecyclerView"],
            imagen: toDoList_img,
            github: "https://github.com/Anbs12/DefLatam_ToDoList.git",
            youtube: null,
            estado: "Completed"
        },
        {
            id: 3,
            titulo: "Note Taking App",
            descripcion: "An application that allows users to create, edit, and delete notes, with options to categorize and search them.",
            tecnologias: ["Kotlin", "XML", "SharedPreferences"],
            imagen: notasApp_img,
            github: "https://github.com/Anbs12/DefLatam_NoteApp.git",
            youtube: null,
            estado: "Completed"
        },
        {
            id: 4,
            titulo: "Contact Management App",
            descripcion: "An application that allows users to manage contacts, with options to add, edit, and delete contact information.",
            tecnologias: ["Kotlin", "XML", "ViewModel", "LiveData", "Room Database", "RecyclerView", "Coroutines", "Gson"],
            imagen: contactApp_img,
            github: "https://github.com/Anbs12/DefLatam_ContactApp.git",
            youtube: null,
            estado: "Completed"
        },
        {
            id: 5,
            titulo: "Chat App",
            descripcion: "A chat application that allows users to send and receive messages in real-time, with user authentication and message history.",
            tecnologias: ["Kotlin", "XML", "ViewModel", "Room Database", "RecyclerView", "Coroutines", "Gson", "Firebase",
                "Firebase Authentication", "Firebase Analytics", "Cloud Firestore", "Retrofit 2", "Glide", "Dagger Hilt"],
            imagen: chatApp_img,
            github: "https://github.com/Anbs12/DefLatam_ChatApp.git",
            youtube: null,
            estado: "Completed"
        },
    ],
    experiencia: [
        {
            empresa: "Freelance",
            cargo: "Junior Android Developer",
            periodo: "08/2024 - Present",
            descripcion: `Solid experience in implementing scalable architectures like MVVM, utilizing Kotlin Flows for real-time reactive data. 
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
    ],
    educationItems: [
        {
            institucion: "Professional Institute of Santo Tomás",
            titulo: "Associate Degree - Programmer Analyst",
            periodo: "2022 - 2024",
            descripcion: "Comprehensive training in software development, databases, networking and project management.",
            logo: Logo_UST
        }
    ],
    personalSkillItem: [
        { name: "Emotional Intelligence", icon: <Lightbulb className="w-8 h-8 text-yellow-500" /> },
        { name: "Assertive Communication", icon: <MessageSquare className="w-8 h-8 text-blue-500" /> },
        { name: "Effective Collaboration", icon: <Handshake className="w-8 h-8 text-teal-500" /> },
        { name: "Workplace Resilience", icon: <Shield className="w-8 h-8 text-gray-500" /> },
        { name: "Critical Thinking", icon: <Brain className="w-8 h-8 text-purple-500" /> },
        { name: "Professional Autonomy", icon: <User className="w-8 h-8 text-green-500" /> },
        { name: "Staff Training", icon: <Users className="w-8 h-8 text-indigo-500" /> },
        { name: "Diagnostic Ability", icon: <TestTube className="w-8 h-8 text-red-500" /> }
    ]
};