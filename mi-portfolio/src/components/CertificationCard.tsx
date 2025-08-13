import type { CertificationCardProps } from "../types/CardProps";

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
    return (
        <div
            className={`bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 border-l-4 border-yellow-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
        >
            <div className="flex items-center justify-between mb-4"> {/* Flex para alinear contenido y logo */}
                <div className="flex-1 pr-4"> {/* Contenido principal */}
                    <h3 className="text-xl font-bold font-body text-gray-800 dark:text-gray-100">{cert.titulo}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium font-body">{cert.institucion}</p>
                    <span className="text-gray-500 dark:text-gray-300 font-medium font-body block mt-1">{cert.periodo}</span>
                </div>
                {cert.logo && (
                    <div className="flex-shrink-0 ml-4"> {/* Contenedor del logo */}
                        <img
                            src={cert.logo}
                            alt={`${cert.institucion} Logo`}
                            className="w-16 h-16 object-contain rounded-full shadow-md" // Estilos para el logo
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/64x64/cccccc/333333?text=Logo'; }} // Fallback
                        />
                    </div>
                )}
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-body">{cert.descripcion}</p>

            {cert.url && cert.urlText && cert.icon &&
                <a
                    href={cert.url}
                    target="_blank"
                    rel=""
                    className="mt-4 inline-flex p-2 px-8 items-center text-blue-600 dark:text-blue-400 font-medium font-body bg-white dark:bg-gray-600 rounded-md hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors duration-300"
                >
                    <span className="flex items-center">
                        <span>
                            {cert.urlText}
                        </span>
                        <span className="ml-2">{cert.icon}</span>
                    </span>
                </a>
            }

        </div>
    );
};