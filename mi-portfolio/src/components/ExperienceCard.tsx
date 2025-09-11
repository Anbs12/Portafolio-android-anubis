import type { ExperienceCardProps } from "../types/CardProps";



export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
    return (
        <div
            // Aplicar animación solo si la sección de experiencia es visible
            className={`bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 border-l-4 border-green-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
        >
            <div className="flex items-center justify-between mb-4">

                <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.cargo}</h3>
                    <p className="text-lg text-green-600 dark:text-green-400 font-medium">{exp.empresa}</p>
                    <span className="text-gray-500 dark:text-gray-300 font-medium mt-2 md:mt-0">{exp.periodo}</span>
                </div>
                <div className="mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                    {exp.logo && (
                        <div className="flex-shrink-0 ml-4"> {/* Contenedor del logo */}
                            <img
                                src={exp.logo}
                                alt={`${exp.empresa} Logo`}
                                className="w-16 h-16 object-contain rounded-full shadow-md" // Estilos para el logo
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/64x64/cccccc/333333?text=Logo'; }} // Fallback
                            />
                        </div>
                    )}
                </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.descripcion}</p>
        </div>
    );
};