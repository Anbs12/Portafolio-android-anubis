import type { TechnologyItem } from './Technologies';
import type { PortfolioDataType } from "./Portfolio";
import type { Project } from './Project';

//Tipar los props de ProjectCard de la sección de proyectos
// Definición de propiedades para el componente ProjectCard.
// Este componente recibe un proyecto y los datos del portafolio actual.
// Se utiliza para mostrar información detallada de un proyecto específico en el portafolio.
export interface ProjectCardProps {
  proyecto: Project;
  currentPortfolioData: PortfolioDataType;
}

//Tipar los props de TechCard de la sección de tecnologías
// Definición de propiedades para el componente TechCard.
// Este componente recibe un elemento de tecnología y se utiliza para mostrar información sobre una tecnología específica en el portafolio.
export interface TechCardProps {
    tech: TechnologyItem;
}