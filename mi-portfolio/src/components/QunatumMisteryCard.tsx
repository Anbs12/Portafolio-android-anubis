import type { QuantumMisteryCardProps } from "../types/CardProps";


export const QuantumMisteryCard: React.FC<QuantumMisteryCardProps> = ({ tech }) => {
  return (
    <div className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden shadow-2xl group">

      {/* Condicional: Muestra el video si tech.video existe, de lo contrario muestra el contenedor con la imagen */}
      {tech.video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        >
          <source src={tech.video} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      ) : (
        <div
          role="img"
          aria-label={tech.name}
          className="absolute inset-0 w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110 
                     [&>img]:w-full [&>img]:h-full [&>img]:object-cover 
                     [&>svg]:w-full [&>svg]:h-full">
          {tech.icon || <img src={tech.icon} alt={tech.name} className="w-full h-full object-cover" />}
        </div>
      )}
      
      {/* Capa de degradado para dar contraste y asegurar que el texto sea legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6 md:p-10">
        {/* Descripción (Subtítulo) */}
        <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed drop-shadow-lg">
          {tech.subtitle}
        </p>
        
      </div>
      
    </div>
  );
};