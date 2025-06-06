import type { TechnologyItem } from './Technologies';
import type { PortfolioDataType } from "./Portfolio";
import type { ProjectItem } from './Project';
import type { EducationItem, ExperienceItem } from './Personal';

//Tipar los props de cada Card.

export interface ProjectCardProps {
  proyecto: ProjectItem;
  currentPortfolioData: PortfolioDataType;
}

export interface TechCardProps {
  tech: TechnologyItem;
}

export interface EducationCardProps {
  edu: EducationItem;
}

export interface ExperienceCardProps {
  exp: ExperienceItem;
}