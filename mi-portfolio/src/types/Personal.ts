import type { JSX } from "react";
// Definición de datos personales y de contacto para un portafolio.


// interfaz de datos personales.
// Contiene información básica como nombre, título profesional, descripción, email, teléfono, LinkedIn y GitHub.
// Esta información se utiliza para mostrar distintas secciones del portafolio.
export interface PersonalData {
  nombre: string;
  titulo: string;
  descripcion: string;
  email: string;
  telefono: string;
  linkedin: string;
  github: string;
}

// Nueva interfaz para la sección "Sobre Mí"
// Contiene un título, subtítulo y una descripción en formato SVG para Android.
export interface AboutMeData {
  title: string;
  subtitle: string;
  androidSvgDescription: string;
}

// Definición de datos para la sección de Experiencia en un portafolio.
// Contiene un título, subtítulo par a la seccion experiencia y una lista de experiencias laborales.
export interface ExperienceTitle {
  title: string;
  subtitle: string;
}

// Definición de tipos para item de Experiencia en un portafolio.
// Cada experiencia laboral incluye el nombre de la empresa, cargo, periodo y una breve descripción.
// Esta información se utiliza para mostrar la trayectoria profesional del usuario en el portafolio.
export interface ExperienceItem {
  empresa: string;
  cargo: string;
  periodo: string;
  descripcion: string;
}

// Nueva interfaz para los titulo y subtitulo de la sección de educación
// Contiene un título, subtítulo
// Esta información se utiliza para mostrar la formación académica del usuario en el portafolio.
export interface EducationTitle {
  title: string;
  subtitle: string;
}

// Nuevo objeto para un elemento de educación
// Contiene información sobre la institución, título obtenido, periodo de estudio y una breve descripción.
// Esta información se utiliza para mostrar la formación académica del usuario en el portafolio.
export interface EducationItem {
  institucion: string;
  titulo: string;
  periodo: string;
  descripcion: string;
  logo?: string; // Propiedad opcional para la URL del logo
}

export interface PersonalSkillsTitle {
  title: string;
  subtitle: string;
}

export interface PersonalSkillItem {
  name: string;
  icon: JSX.Element;
}


// Datos de contacto.
export interface ContactData {
  title: string;
  subtitle: string;
  linkedinText: string;
  githubText: string;
}