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
import img_en_desarrollo_eng from '../assets/img_en_desarrollo_eng.png';
import android_icon from '../assets/android-studio-icon.svg';
import calculadoraPropinas_img from '../assets/img_calculadora_propina.jpg';
import toDoList_img from '../assets/img_toDo_list_eng.png';
import notasApp_img from '../assets/img_noteApp_eng.png';
import contactApp_img from '../assets/img_contactApp_eng.png';
import chatApp_img from '../assets/img_chatApp_eng.png';
import ml_kit_img from '../assets/ml_kit_img.png';
import weather_app_img from '../assets/img_weather_app_wallpaper.png';
import pet_walk_img from '../assets/img_pet_walk_app_wallpaper.png';


// Datos configurables en INGLÉS
export const portfolioDataEn: PortfolioDataType = {
    personal: {
        nombre: "Anubis Montero",
        titulo: "Android & Kotlin Jr. Developer",
        descripcion: `I´m a junior Android Developer with hands-on experience building native mobile applications using Kotlin, MVVM 
        architecture, and Jetpack Compose. Skilled in implementing RESTful APIs with Retrofit, developing interfaces with 
        both XML and Compose, and managing reactive data using Flows and Coroutines. Practical experience with CameraX, 
        Firebase, and unit testing (JUnit). Associate of Applied Science (AAS) in Computer Programming and Analysis
         with strong problem-solving abilities, team 
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
        statusPaused: "Paused",
        buttonViewMakingVideo: "Video in production"
    },
    subProjectsSettings: {
        title: "Other Projects",
        subtitle: "Sub projects and additional works",
        buttonCode: "Código",
        buttonViewVideo: "Ver Video",
        statusCompleted: "Completado",
        statusInProgress: "En desarrollo",
        statusPaused: "Paused",
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
    certificationTitle: {
        title: 'Certifications',
        subtitle: 'My achievements and certifications'
    },
    personalSkillsTitle: {
        title: "Personal Skills",
        subtitle: "The skills that make us a great team and more human" /* "Traits and qualities that define me as a professional" */
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
                { name: 'RESTful APIs with Retrofit', subtitle: 'Web service communication', icon: <Globe className="w-8 h-8 text-sky-700" /> },
                { name: 'Room Database', subtitle: 'Local database for Android', icon: <LucideDatabase className="w-8 h-8 text-orange-500" /> },
                { name: 'GraphQL', subtitle: 'Data query language for APIs', icon: <img src='https://graphql.org/_next/static/media/logo.ad338028.svg' alt="Kotlin Icon" className="w-8 h-8" /> },
                { name: 'Ktor', subtitle: 'Create asynchronous client and server applications', icon: <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTQ2IDQ4IiB3aWR0aD0iMTQ2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMSIgeDI9IjMxIiB5MT0iMTciIHkyPSI0NyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNmI1N2ZmIi8+PHN0b3Agb2Zmc2V0PSIuNDk5IiBzdG9wLWNvbG9yPSIjZmY0NWVkIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZGQxMjY1Ii8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtOTEuOTc3IDkuMDFoLTYuNGwtMTIuMzcgMTMuNTl2LTEzLjU5aC01LjJ2MjkuOTZoNS4ydi0xNC4zbDEyLjQ2IDE0LjNoNi41OWwtMTMuNDQtMTUuNTIgMTMuMTYtMTQuNDV6bTguMTQgMi42OWgtNC43MXYzLjU1YzAgLjUzLS4xNi45Ni0uNDkgMS4yOXMtLjc2LjUtMS4zMS41aC0yLjRsLS4wMiA0LjM5aDMuODVsLjAyIDExLjcxYzAgMS4xMS4yNiAyLjExLjc4IDMgLjUyLjg4IDEuMjUgMS41OCAyLjE4IDIuMDhzMS45OS43NSAzLjE2Ljc1aDQuNzN2LTQuMzloLTMuNzJjLS42IDAtMS4xLS4yLTEuNDktLjU5cy0uNTktLjg5LS41OS0xLjQ5bC0uMDItMTEuMDZoNS44MmwuMDItNC4zOWgtNS44MnYtNS4zNXptMjQuNTMgNi4zNGMtMS43NS0xLTMuNzEtMS41LTUuODYtMS41cy00LjEzLjUtNS45IDEuNWMtMS43NiAxLTMuMTQgMi4zNy00LjE0IDQuMTJzLTEuNSAzLjctMS41IDUuODUuNSA0LjExIDEuNTEgNS44NSAyLjM5IDMuMTIgNC4xNCA0LjEyIDMuNzEgMS41IDUuODYgMS41IDQuMTMtLjUgNS44OS0xLjVjMS43NS0xIDMuMTQtMi4zNyA0LjE0LTQuMTJzMS41MS0zLjcgMS41MS01Ljg1LS41LTQuMTEtMS41MS01Ljg1YTEwLjk5IDEwLjk5IDAgMCAwIC00LjE0LTQuMTJ6bS0uNCAxMy41OWMtLjUyIDEuMDYtMS4yNiAxLjg4LTIuMjEgMi40Ni0uOTYuNTgtMi4wNS44OC0zLjI3Ljg4cy0yLjMyLS4yOS0zLjI2LS44OC0xLjY4LTEuNDEtMi4yLTIuNDZjLS41Mi0xLjA2LS43OC0yLjI2LS43OC0zLjYycy4yNi0yLjU4Ljc4LTMuNjQgMS4yNi0xLjg4IDIuMi0yLjQ2Yy45NS0uNTggMi4wNC0uODggMy4yNi0uODhzMi4zMS4zIDMuMjYuODkgMS42OSAxLjQxIDIuMjEgMi40NmMuNTMgMS4wNS43OSAyLjI2Ljc5IDMuNjNzLS4yNiAyLjU2LS43OCAzLjYyem0yMC44OS0xNC43M2MtMS41NiAwLTIuOTIuNC00LjA5IDEuMjEtLjgzLjU3LTEuNTMgMS4zMy0yLjEgMi4yNnYtMy4zMmgtNS4wMXYyMS45Mmg1LjA1di0xMS44M2MwLTEuMDYuMjItMS45Ny42Ny0yLjc0czEuMDktMS4zNiAxLjkzLTEuNzhjLjgzLS40MSAxLjgyLS42MiAyLjk0LS42MmgxLjQxdi01LjA5aC0uODF6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTQ4IDMxLjk5OC0xNi4wMDQgMTYuMDAyLTMxLjk5Ni0zMi4wMDQgMTYuMDAyLTE1Ljk5NiAzMS45OTcgMzEuOTk4eiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Im0zMi4wMSAxNS45OTZoLTE2LjAwMnYxNi4wMDJoMTYuMDAyeiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==" alt="Kotlin Icon" className="w-8 h-8" /> },
                { name: 'Postgresql ', subtitle: 'Advanced relational database', icon: <img src="https://www.svgrepo.com/show/439268/postgresql.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
                { name: 'Exposed', subtitle: 'A Kotlin SQL library', icon: <img src="https://plugins.jetbrains.com/files/24367/809208/icon/default.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
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
                { name: 'Docker', subtitle: 'Designed to help developers build, share, and run container applications', icon: <img src="https://www.svgrepo.com/show/452192/docker.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
            ]
        }, {
            category: "Possibly what could come...",
            items: [
                { name: 'Modelos TensorFlow Lite', subtitle: 'Intelligence models on Android devices', icon: <img src="https://www.svgrepo.com/show/354440/tensorflow.svg" alt="Kotlin Icon" className="w-8 h-8" /> },
                {
                    name: 'ML Kit', subtitle: 'Brings Google`s machine learning expertise to mobile developers in a powerful and easy-to-use package',
                    icon: <img src={ml_kit_img} alt="Kotlin Icon" className="w-8 h-8" />
                },
                { name: 'Koog', subtitle: 'Kotlin-based framework designed to build and run AI agents', icon: <img src='https://blog.jetbrains.com/wp-content/uploads/2024/10/IMG_2404.png' className="w-8 h-8" /> },
            ]
        }
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
            estado: "Paused"
        },
        {
            id: 3,
            titulo: "Prc RickMorty",
            descripcion: "Rick and Morty character management application.",
            tecnologias: ["Kotlin", "MVVM", "Clean Architecture", "Kotlin Flows", "Coroutines",
                "Retrofit", "Coil", "Jetpack Compose", "KDocs", "API Restful", "Navigation"],
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
                "Coroutines", "Kotlin Flows", "Retrofit", "Coil", "Material Design 3", "KDocs",
                "Navigation", "Room Database", "API Restful"],
            imagen: prc_ecommerceapp_img,
            github: "https://github.com/Anbs12/Prc_eCommerceApp.git",
            youtube: null,
            estado: "Paused",
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
            estado: "Paused",
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
            youtube: "https://youtu.be/PLkjAXPea8o",
            estado: "Completed"
        },
        {
            id: 2,
            titulo: "To-Do List App",
            descripcion: "An application that allows you to manage tasks with options to add, edit, and delete items.",
            tecnologias: ["Kotlin", "XML", "SharedPreferences", "RecyclerView"],
            imagen: toDoList_img,
            github: "https://github.com/Anbs12/DefLatam_ToDoList.git",
            youtube: "https://youtu.be/D93TVdCDsVw",
            estado: "Completed"
        },
        {
            id: 3,
            titulo: "Note Taking App",
            descripcion: "An application that allows users to create, edit, and delete notes, with options to categorize and search them.",
            tecnologias: ["Kotlin", "XML", "SharedPreferences"],
            imagen: notasApp_img,
            github: "https://github.com/Anbs12/DefLatam_NoteApp.git",
            youtube: "https://youtu.be/lXAQxpV3zrQ",
            estado: "Completed"
        },
        {
            id: 4,
            titulo: "Contact Management App",
            descripcion: "An application that allows users to manage contacts, with options to add, edit, and delete contact information.",
            tecnologias: ["Kotlin", "XML", "MVVM", "LiveData", "Room Database", "RecyclerView", "Coroutines", "Gson"],
            imagen: contactApp_img,
            github: "https://github.com/Anbs12/DefLatam_ContactApp.git",
            youtube: "https://youtu.be/9Ww536SO0I0",
            estado: "Completed"
        },
        {
            id: 5,
            titulo: "Chat App",
            descripcion: "A chat application that allows users to send and receive messages in real-time, with user authentication and message history.",
            tecnologias: ["Kotlin", "XML", "MVVM", "Room Database", "RecyclerView", "Coroutines", "Gson", "Firebase",
                "Firebase Authentication", "Firebase Analytics", "Cloud Firestore", "Retrofit 2", "Glide", "Dagger Hilt"],
            imagen: chatApp_img,
            github: "https://github.com/Anbs12/DefLatam_ChatApp.git",
            youtube: "https://youtu.be/Q1ueMCrlqto",
            estado: "Completed"
        },
        {
            id: 6,
            titulo: "Weather App",
            descripcion: `An application to view the current weather and extended forecast, using the OpenWeatherMap API to obtain 
            accurate and up-to-date meteorological data.`,
            tecnologias: ["Kotlin", "XML", "MVVM ", "Room Database", "RecyclerView", "Coroutines", "Retrofit", "Dagger Hilt"],
            imagen: weather_app_img,
            github: "https://github.com/Anbs12/WeatherApp.git",
            youtube: "https://youtu.be/bVmk6HBQJqU",
            estado: "Completed"
        },
        {
            id: 7,
            titulo: "Pet Walking App",
            descripcion: `An app built as a team effort, designed to manage and coordinate pet walks.`,
            tecnologias: ["Kotlin", "Jetpack Compose", "Room Database", "MVVM", "TeamWork"],
            imagen: pet_walk_img,
            github: "https://github.com/software-developments-cl/AppFinal_lat.git",
            youtube: "https://youtu.be/UZfhFzHumbs",
            estado: "Completed"
        }
    ],
    experiencia: [
        {
            empresa: "Globant",
            cargo: "Kotlin and Java Trainee Developer",
            periodo: "08/2025 - 10/2025",
            descripcion: `I integrated a large language model(LLM) with natural language processing that allows conversational queries 
on stored data, implementing both local solutions and external APIs to optimize resources. I also implemented automated generation of 
reports in PDF format and PNG visualization with statistical graphs that 
provide insights into development activity, and I created a web platform that supports 
everything as part of a team.`,
            logo: 'https://cdn.brandfetch.io/ide8CeiHjg/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1753072558221'
        },
        {
            empresa: "Freelance",
            cargo: "Junior Android Developer",
            periodo: "08/2024 - Present",
            descripcion: `Solid experience in implementing scalable architectures like MVVM, utilizing Kotlin Flows for real-time reactive data. 
            Proficient in developing user interfaces with both XML 
            and Jetpack Compose, and integrating third-party APIs and libraries to enhance application functionality, including CameraX for optimized photo capture across multiple devices 
            and Retrofit 2 for consuming RESTful APIs like "Rick and Morty." Possessing comprehensive knowledge of the mobile development lifecycle, 
            capable of addressing challenges at each phase and creating custom native solutions, ensuring API compatibility and thorough code documentation with Kotlin KDocs.`,
            logo: 'https://www.svgrepo.com/show/274862/programmer.svg'
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
            institucion: "Santo Tomás Professional Institute",
            titulo: "Associate of Applied Science (AAS) in Computer Programming and Analysis",
            periodo: "2022 - 2024",
            descripcion: `Associate Degree in Computer Programming and Analysis with a solid background in software analysis and design.
            Skilled in data structures, databases, and operating systems.
            Developed projects in Java, Python, .NET, Android, web applications, and IoT.
            Completed a professional internship where I applied my knowledge in a real-world setting.`,
            logo: Logo_UST
        }
    ],
    certificationItems: [
        {
            institucion: "Udemy",
            titulo: "Kotlin Multiplatform Masterclass - KMP, KMM - Android, IOS",
            periodo: "September/2025",
            descripcion: `Certificate in Kotlin Multiplatform development, covering everything from the fundamentals of KMP and KMM
      to the creation of native applications for Android and iOS. This achievement reflects my commitment to excellence
      and learning to increase my development skills.`,
            logo: 'https://freelogopng.com/images/all_img/1683006778udemy-logo-png.png',
            url: "https://www.udemy.com/certificate/UC-a96cf502-6726-444a-8ca8-c417799f5320/",
            urlText: "View Certificate",
            icon: <GraduationCap className="w-8 h-8 text-black dark:text-white" />
        },
        {
            institucion: "Desafío Latam",
            titulo: "Kotlin Development Specialization Program",
            periodo: "August/2025",
            descripcion: `Certification obtained after completing a series of specialized courses in mobile development with Android.
      The specialization covered everything from the fundamentals of Kotlin and user interface development to API integration.
      This achievement reflects my commitment to excellence and my ability to apply advanced knowledge to real-world projects.`,
            logo: 'https://ugc.production.linktr.ee/NULe9wg4R3SSCyLIDCFI_54hpaIhfZgx1wb1f?io=true&size=avatar-v3_0',
            url: "https://empieza.desafiolatam.com/v/gDNgvA5QXWNA9BWENq8EPTrX",
            urlText: "View Certificate",
            icon: <GraduationCap className="w-8 h-8 text-black dark:text-white" />
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