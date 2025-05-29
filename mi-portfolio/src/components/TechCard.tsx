import type { TechCardProps } from "../types/CardProps";

// Card componente para un mostrar cada tecnología en la seccion Tecnologías de un portafolio.
export const TechCard: React.FC<TechCardProps> = ({ tech }) => {
    return (
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group aspect-square flex flex-col justify-center">
            <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 p-3 rounded-full mb-3 group-hover:from-green-200 group-hover:to-blue-200 transition-all duration-300 flex items-center justify-center">
                    {tech.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1 leading-tight">{tech.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{tech.subtitle}</p>
            </div>
        </div>
    );
};