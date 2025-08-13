import type { TechnologyItem } from './Technologies';
import type { PortfolioDataType } from "./Portfolio";
import type { ProjectItem } from './Project';
import type { CertificationItem, EducationItem, ExperienceItem, PersonalSkillItem } from './Personal';

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

export interface CertificationCardProps {
  cert: CertificationItem;
}

export interface ExperienceCardProps {
  exp: ExperienceItem;
}

export interface PersonalSkillCardProps {
  skill: PersonalSkillItem;
  isVisible: boolean;
}