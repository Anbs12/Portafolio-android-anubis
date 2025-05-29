//Seccion de Tecnologías dentro de un portafolio.

import type { JSX } from "react";

// Definición de tipos para la sección de Tecnologías en un portafolio.
// Cada tecnología tiene un título y un subtítulo que describen la sección de tecnologías en el portafolio.
// Estos datos se utilizan para mostrar información general sobre las tecnologías utilizadas en los proyectos del portafolio.
export interface TechnologiesData {
  title: string;
  subtitle: string;
}

// Definición de una categoría de tecnología que agrupa varios ítems.
// Cada categoría tiene un nombre y una lista de ítems de tecnología.
// Esta estructura permite organizar las tecnologías en diferentes grupos para una mejor presentación en el portafolio.
export interface TechnologyCategory {
  category: string;
  items: TechnologyItem[];
}

// Definición de un ítem de tecnología con nombre, subtítulo e icono.
// Cada ítem representa una tecnología específica utilizada en los proyectos del portafolio.
// El icono es un componente JSX que representa visualmente la tecnología.
// Esta estructura permite mostrar las tecnologías de manera estilizada en el portafolio.
export interface TechnologyItem {
  name: string;
  subtitle: string;
  icon: JSX.Element; // Tipo para el componente de icono
}

