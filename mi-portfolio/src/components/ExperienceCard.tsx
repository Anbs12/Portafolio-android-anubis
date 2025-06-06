import type { ExperienceCardProps } from "../types/CardProps";



export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
    return (
        <div
            // Aplicar animación solo si la sección de experiencia es visible
            className={`bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 border-l-4 border-green-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
        >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.cargo}</h3>
                    <p className="text-lg text-green-600 dark:text-green-400 font-medium">{exp.empresa}</p>
                </div>
                <span className="text-gray-500 dark:text-gray-300 font-medium mt-2 md:mt-0">{exp.periodo}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.descripcion}</p>
        </div>
    );
};