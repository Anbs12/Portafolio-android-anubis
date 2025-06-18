import type { ContactData, PersonalData, ExperienceItem, AboutMeData, ExperienceTitle, 
  EducationTitle, EducationItem, PersonalSkillsTitle, PersonalSkillItem } from './Personal';
import type { TechnologiesTitle, TechnologyCategory } from './Technologies';
import type { ProjectItem, ProjectSettings } from './Project';

// 1. Definición de interfaces para los datos del portafolio
// Estas interfaces definen la estructura de los datos que se utilizarán en el portafolio.
// PersonalData contiene información personal del propietario del portafolio.
// NavItem define los elementos de navegación del portafolio.
// HeroData define los botones de la sección "Hero" del portafolio.
// FooterData define el texto del pie de página del portafolio.
// PortfolioDataType es la interfaz principal que agrupa todos los datos del portafolio,
// incluyendo secciones como personal, navegación, héroe, tecnologías, proyectos, experiencia, contacto y pie de página.



// Navitems para la navegación del portafolio.
// Cada elemento de navegación tiene un id y un texto para mostrar.
export interface NavItem {
  id: string;
  displayText: string;
}

// Definicion de datos para las seccion "Hero" del portafolio.
// Contiene botones para navegar a proyectos y contacto.
export interface HeroData {
  buttonProjects: string;
  buttonContact: string;
  dynamicPhrases: string[]; // Frases dinámicas que se mostrarán en la sección "Hero"
  staticHeroTitlePartOne: string;
  staticHeroTitlePartTwo: string;
}

// Definición de datos para el Footer del portfolio.
// Contiene un texto que se mostrará en el pie de página.
export interface FooterData {
  text: string;
}

// Definición de datos para todo el portafolio.
// Contiene secciones como personal, navegación, héroe, tecnologías, proyectos, experiencia, contacto y pie de página.
// Además, incluye categorías de tecnologías y proyectos, así como elementos de experiencia.
// Para cada sección, se define un tipo específico de datos.
export interface PortfolioDataType {
  personal: PersonalData;
  navItems: NavItem[];
  hero: HeroData;
  aboutMe: AboutMeData;
  technologiesTitle: TechnologiesTitle;   //TItulo y subtitulo de la seccion tecnologias
  projectsSettings: ProjectSettings;              // Titulo y subtitulo de la seccion proyectos
  experienceTitle: ExperienceTitle;       // Titulo y subtitulo de la seccion experiencia
  educationTitle: EducationTitle;
  personalSkillsTitle: PersonalSkillsTitle;
  contact: ContactData;
  footer: FooterData;
  tecnologiasCategorizadas: TechnologyCategory[];
  proyectos: ProjectItem[];
  experiencia: ExperienceItem[];
  educationItems: EducationItem[];
  personalSkillItem: PersonalSkillItem[];
}