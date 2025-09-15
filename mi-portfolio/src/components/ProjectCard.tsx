import type { ProjectCardProps } from "../types/CardProps";
import { Github, Play, CircleEllipsis } from 'lucide-react'


// Card componente para mostrar cada proyecto de la seccion de Proyectos en un portafolio.
// Este componente recibe un proyecto y los datos del portafolio actual, y muestra la información del proyecto de manera estilizada.
// Utiliza Tailwind CSS para el estilo y Lucide Icons para los iconos de GitHub y YouTube.
export const ProjectCard: React.FC<ProjectCardProps> = ({ proyecto, currentPortfolioData }) => {
    
    // Definición de colores para los estados de los proyectos
    const colorStatusGreen = 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100'
    const colorStatusBlue = 'bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100'
    const colorStatusYellow = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100'

    return (
        <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            {/* Siempre muestra la imagen del proyecto */}
            <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{proyecto.titulo}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium 
                        ${proyecto.estado === currentPortfolioData.projectsSettings.statusCompleted ? colorStatusGreen :
                            proyecto.estado === currentPortfolioData.projectsSettings.statusInProgress ? colorStatusBlue :
                                proyecto.estado === currentPortfolioData.projectsSettings.statusPaused ? colorStatusYellow : ''}`}>
                        {proyecto.estado}
                    </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{proyecto.descripcion}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tecnologias.map((tech, index) => (
                        <span key={index} className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                    {/* Botón para ver el código en GitHub */}
                    {proyecto.github && (
                        <a
                            href={proyecto.github}
                            target="_blank" // Abrir en nueva pestaña
                            rel="noopener noreferrer" // Seguridad para target="_blank"
                            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            <Github className="w-4 h-4" /> {currentPortfolioData.projectsSettings.buttonCode}
                        </a>
                    )}
                    {/* Botón para ver el video de YouTube */}
                    {proyecto.youtube && (
                        <a
                            href={proyecto.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                        >
                            <Play className="w-4 h-4" /> {currentPortfolioData.projectsSettings.buttonViewVideo}
                        </a>
                    )}
                    {/* Botón para afirmar si se esta desarrollando un video para el proyecto */}
                    {proyecto.makingVideo && (
                        <span className="flex items-center gap-2 bg-yellow-200 text-yellow-800 px-4 py-2 rounded-lg">
                            <CircleEllipsis className="w-4 h-4" /> {currentPortfolioData.projectsSettings.buttonViewMakingVideo}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};