//Seccion de Tecnologías dentro de un portafolio.

import type { JSX } from "react";

// Definición de tipos para la sección de Tecnologías en un portafolio.
export interface TechnologiesData {
  title: string;
  subtitle: string;
}

// Definición de un ítem de tecnología con nombre, subtítulo e icono.
export interface TechnologyItem {
  name: string;
  subtitle: string;
  icon: JSX.Element; // Tipo para el componente de icono
}

// Definición de una categoría de tecnología que agrupa varios ítems.
export interface TechnologyCategory {
  category: string;
  items: TechnologyItem[];
}