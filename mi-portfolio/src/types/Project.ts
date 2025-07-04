// Seccion de Proyectos dentro de un portafolio.

// Importante: Asegúrate de que las rutas de importación sean correctas según tu estructura de carpetas.

// Definición de datos un item de la sección de Proyectos en un portafolio.
// Contiene un título, subtítulo, botones para código y video, y estados de proyectos completados e in progreso.
// Estos datos se utilizan para mostrar información general sobre los proyectos en el portafolio.
export interface ProjectSettings {
  title: string;
  subtitle: string;
  buttonCode: string;
  buttonViewVideo: string;
  statusCompleted: string;
  statusInProgress: string;
  buttonViewMakingVideo: string;
}

// Definición de tipos para la sección de Proyectos en un portafolio.
// Cada proyecto tiene un id, título, descripción, tecnologías utilizadas, imagen, enlace a GitHub y enlace a YouTube (opcional).
// Además, cada proyecto tiene un estado que indica si está completado o en progreso.
export interface ProjectItem {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  imagen: string;
  github: string | null;
  youtube: string | null;
  estado: string;
  makingVideo?: string | null; // Indica si se está desarrollando un video para este proyecto
}