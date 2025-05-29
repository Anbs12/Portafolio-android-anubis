// Definición de datos personales y de contacto para un portafolio.

// Datos de contacto.
export interface ContactData {
  title: string;
  subtitle: string;
  linkedinText: string;
  githubText: string;
}

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

// Definición de tipos para la sección de Experiencia en un portafolio.
// Cada experiencia laboral incluye el nombre de la empresa, cargo, periodo y una breve descripción.
// Esta información se utiliza para mostrar la trayectoria profesional del usuario en el portafolio.
export interface ExperienceItem {
  empresa: string;
  cargo: string;
  periodo: string;
  descripcion: string;
}

// Definición de datos para la sección de Experiencia en un portafolio.
// Contiene un título, subtítulo par a la seccion experiencia y una lista de experiencias laborales.
export interface ExperienceData {
  title: string;
  subtitle: string;
}