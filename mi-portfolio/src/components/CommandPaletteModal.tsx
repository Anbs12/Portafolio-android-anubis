import React, { useEffect, useState } from 'react';
import {
  Search,
  X,
  Smartphone,
  Cpu,
  ArrowUpRight,
  Eye,
  Globe,
  Sun,
  Moon,
  Compass,
} from 'lucide-react';
import type { PortfolioDataType } from '../types/Portfolio';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPortfolioData: PortfolioDataType;
  language: 'es' | 'en';
  onToggleLanguage: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  isXRay: boolean;
  onToggleXRay: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  currentPortfolioData,
  language,
  onToggleLanguage,
  theme,
  onToggleTheme,
  isXRay,
  onToggleXRay,
  onScrollToSection,
}) => {
  const [query, setQuery] = useState('');
  const isEs = language === 'es';

  useEffect(() => {
    if (!isOpen) return;
    setQuery('');
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const allProjects = [
    ...currentPortfolioData.proyectos.map(p => ({ ...p, group: 'Featured' })),
    ...currentPortfolioData.subProyectos.map(p => ({ ...p, group: 'Lab' })),
  ].filter(
    p =>
      !q ||
      p.titulo.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q) ||
      p.tecnologias.some(t => t.toLowerCase().includes(q))
  );

  const allTechs = currentPortfolioData.tecnologiasCategorizadas
    .flatMap(c => c.items.map(item => ({ ...item, category: c.category })))
    .filter(
      t =>
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
    );

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={isEs ? 'Paleta de comandos' : 'Command Palette'}
      className="fixed inset-0 z-[110] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/75 backdrop-blur-2xl"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="animate-quicklook w-full max-w-2xl rounded-3xl bg-white dark:bg-[#0b101b] border border-slate-200/80 dark:border-white/15 shadow-[0_25px_90px_rgba(0,0,0,0.75)] overflow-hidden"
      >
        {/* Barra de búsqueda */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200/70 dark:border-white/10">
          <Search className="w-5 h-5 text-emerald-500" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={
              isEs
                ? 'Buscar proyectos, tecnologías (ej. Ktor, Compose, MVVM) o acciones...'
                : 'Search projects, technologies (e.g. Ktor, Compose, MVVM) or actions...'
            }
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Resultados y Comandos Rápidos */}
        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-6">
          {/* Acciones del Sistema */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-2 mb-2">
              {isEs ? 'COMANDOS DEL SISTEMA' : 'SYSTEM COMMANDS'}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => {
                  onToggleXRay();
                  onClose();
                }}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/80 dark:bg-white/[0.05] hover:bg-emerald-500/15 text-left text-xs font-mono text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-white/10 transition-colors"
              >
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>
                  {isXRay
                    ? isEs
                      ? 'Desactivar Lente Rayos-X'
                      : 'Disable X-Ray Lens'
                    : isEs
                    ? 'Activar Lente Rayos-X'
                    : 'Enable X-Ray Lens'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onToggleLanguage();
                  onClose();
                }}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/80 dark:bg-white/[0.05] hover:bg-emerald-500/15 text-left text-xs font-mono text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-white/10 transition-colors"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>{isEs ? 'Switch to English' : 'Cambiar a Español'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onToggleTheme();
                  onClose();
                }}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/80 dark:bg-white/[0.05] hover:bg-emerald-500/15 text-left text-xs font-mono text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-white/10 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-sky-400" />
                )}
                <span>
                  {theme === 'dark'
                    ? isEs
                      ? 'Modo Claro'
                      : 'Light Mode'
                    : isEs
                    ? 'Modo Oscuro XDR'
                    : 'Dark XDR Mode'}
                </span>
              </button>
            </div>
          </div>

          {/* Navegación rápida a secciones */}
          {!q && (
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-2 mb-2">
                {isEs ? 'IR A CAPÍTULO' : 'JUMP TO CHAPTER'}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentPortfolioData.navItems.map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      onScrollToSection(item.subItems ? item.subItems[0].id : item.id);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-white/[0.05] hover:bg-emerald-500 hover:text-slate-950 text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <Compass className="w-3 h-3" />
                    <span>{item.displayText}</span>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    onScrollToSection('dispositivo-isometrico');
                    onClose();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/15 hover:bg-emerald-500 hover:text-slate-950 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 transition-colors"
                >
                  <Smartphone className="w-3 h-3" />
                  <span>{isEs ? 'Laboratorio Isométrico' : 'Isometric Device Lab'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Proyectos filtrados */}
          {allProjects.length > 0 && (
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-2 mb-2">
                {isEs
                  ? `PROYECTOS (${allProjects.length})`
                  : `PROJECTS (${allProjects.length})`}
              </div>
              <div className="space-y-1.5">
                {(q ? allProjects : allProjects.slice(0, 6)).map(p => (
                  <button
                    key={`${p.group}-${p.id}`}
                    type="button"
                    onClick={() => {
                      onScrollToSection(p.group === 'Featured' ? 'proyectos' : 'subProyectos');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/[0.06] text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Smartphone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <div className="truncate">
                        <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors truncate">
                          {p.titulo}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 truncate">
                          {p.tecnologias.slice(0, 5).join(' • ')}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tecnologías filtradas */}
          {q && allTechs.length > 0 && (
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-2 mb-2">
                {isEs
                  ? `TECNOLOGÍAS (${allTechs.length})`
                  : `TECHNOLOGIES (${allTechs.length})`}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {allTechs.slice(0, 6).map((t, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      onScrollToSection('tecnologias');
                      onClose();
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.04] hover:bg-emerald-500/15 text-left transition-colors"
                  >
                    <Cpu className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {t.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 truncate">
                        {t.category}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pie de modal */}
        <div className="px-5 py-3 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200/70 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>{isEs ? 'ANUBIS // PALETA DE COMANDOS' : 'ANUBIS // COMMAND PALETTE'}</span>
          <span>{isEs ? 'ESC PARA CERRAR' : 'ESC TO CLOSE'}</span>
        </div>
      </div>
    </div>
  );
};
