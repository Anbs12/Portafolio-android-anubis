import type { EducationCardProps } from "../types/CardProps";

export const EducationCard: React.FC<EducationCardProps> = ({ edu }) => {
    return (
        <div
            className={`bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 border-l-4 border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
        >
            <div className="flex items-center justify-between mb-4"> {/* Flex para alinear contenido y logo */}
                <div className="flex-1 pr-4"> {/* Contenido principal */}
                    <h3 className="text-xl font-bold font-body text-gray-800 dark:text-gray-100">{edu.titulo}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium font-body">{edu.institucion}</p>
                    <span className="text-gray-500 dark:text-gray-300 font-medium font-body block mt-1">{edu.periodo}</span>
                </div>
                {edu.logo && (
                    <div className="flex-shrink-0 ml-4"> {/* Contenedor del logo */}
                        <img
                            src={edu.logo}
                            alt={`${edu.institucion} Logo`}
                            className="w-16 h-16 object-contain rounded-full shadow-md" // Estilos para el logo
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/64x64/cccccc/333333?text=Logo'; }} // Fallback
                        />
                    </div>
                )}
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-body">{edu.descripcion}</p>
        </div>
    );
};