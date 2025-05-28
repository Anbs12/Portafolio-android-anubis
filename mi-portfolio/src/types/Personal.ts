// Definición de datos personales y de contacto para un portafolio.

// Datos de contacto.
export interface ContactData {
  title: string;
  subtitle: string;
  linkedinText: string;
  githubText: string;
}

// interfaz de datos personales.
export interface PersonalData {
  nombre: string;
  titulo: string;
  descripcion: string;
  email: string;
  telefono: string;
  linkedin: string;
  github: string;
}

// Definición de tipos para la sección de Experiencia en un portafolio.
export interface ExperienceItem {
  empresa: string;
  cargo: string;
  periodo: string;
  descripcion: string;
}

// Definición de datos para la sección de Experiencia en un portafolio.
export interface ExperienceData {
  title: string;
  subtitle: string;
}