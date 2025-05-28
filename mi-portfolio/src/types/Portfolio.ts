import type { ContactData, PersonalData, ExperienceItem, ExperienceData } from './Personal';
import type { TechnologiesData, TechnologyItem, TechnologyCategory } from './Technologies';
import type { ProjectsData, Project } from './Project';

// 1. Definición de interfaces para los datos del portafolio
export interface NavItem {
  id: string;
  displayText: string;
}

// Definicion de datos para las seccion "Hero" del portafolio.
export interface HeroData {
  buttonProjects: string;
  buttonContact: string;
}

// Definición de datos para el Footer del portfolio.
export interface FooterData {
  text: string;
}

// Definición de datos para todo el portafolio.
export interface PortfolioDataType {
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