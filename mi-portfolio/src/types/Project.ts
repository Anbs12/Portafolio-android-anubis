// Seccion de Proyectos dentro de un portafolio.

// Importante: Asegúrate de que las rutas de importación sean correctas según tu estructura de carpetas.

// Definición de tipos para la sección de Proyectos en un portafolio.
export interface Project {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  imagen: string;
  github: string;
  youtube: string | null;
  estado: string;
}

// Definición de datos para la sección de Proyectos en un portafolio.
export interface ProjectsData {
  title: string;
  subtitle: string;
  buttonCode: string;
  buttonViewVideo: string;
  statusCompleted: string;
  statusInProgress: string;
}