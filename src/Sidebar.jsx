import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import ExercisePage from "./ExercisePage";
import QuizComponent from "./QuizComponent";

export default function Sidebar({ data, isQuestionnaire = false }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Sidebar abierto por defecto en desktop
  const [logicOpen, setLogicOpen] = useState(false);
  const [inductionOpen, setInductionOpen] = useState(false);

  // Detecta tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      if (mobile) {
        setIsOpen(false); // Cerrado por defecto en móvil
      } else {
        setIsOpen(true); // Abierto por defecto en desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Abre la sección correspondiente a la ruta actual
  useEffect(() => {
    setLogicOpen(currentPath.startsWith("/ejercicios/logica-proposicional"));
    setInductionOpen(currentPath.startsWith("/ejercicios/induccion-matematica"));
  }, [currentPath]);

  const toggleSidebar = () => setIsOpen(prev => !prev);

  const renderLinks = (basePath, count) => {
    return Array.from({ length: count }, (_, i) => {
      const id = i + 1;
      const href = `${basePath}/${id}`;
      const isActive = currentPath === href;
      return (
        // Idealmente, estos serían <Link> de TanStack Router también
        <Link
          key={id}
          to={href}
          className={`
            block px-4 py-2.5 rounded-md transition-colors duration-200
            text-sm
            ${isActive
              ? "bg-emerald-500/80 dark:bg-emerald-600/80 text-white font-semibold shadow-md"
              : "text-slate-700 dark:text-slate-300 hover:bg-emerald-500/10 dark:hover:bg-emerald-400/20 hover:text-emerald-700 dark:hover:text-emerald-300"
            }
          `}
        >
          Ejercicio {id}
        </Link>
      );
    });
  };

  // Clases base para los items principales del Nav (Página Principal, Lógica, Inducción)
  const navItemClasses = `
    cursor-pointer w-full flex justify-between items-center px-4 py-3
    text-slate-800 dark:text-slate-100
    hover:bg-emerald-500/20 dark:hover:bg-emerald-400/30
    hover:text-emerald-800 dark:hover:text-emerald-200
    rounded-lg transition-colors duration-200 text-left
  `;

  return (
    // Fondo general de la aplicación con gradiente
    <div className="flex h-screen bg-gradient-to-br from-green-300 via-emerald-400 to-teal-500 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 overflow-hidden relative">
      {/* Overlay para móviles cuando el sidebar está abierto */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar con efecto glass */}
      <div
        className={`
          fixed md:static top-0 left-0 z-50 h-full
          bg-white/60 dark:bg-slate-800/70
          backdrop-blur-xl shadow-2xl
          border-r border-white/30 dark:border-slate-700/50
          transform transition-transform duration-300 ease-in-out
          w-72  // Ancho del sidebar
          ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
        `}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6 min-h-[40px]"> {/* Espacio para el título o logo y botón de cerrar */}
            <Link to="/" className="text-xl font-semibold text-emerald-700 dark:text-emerald-300 hover:opacity-80">
              Ejercicios explicados {/* Logo */}
            </Link>
            {isMobile && (
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Cerrar menú"
              >
                {/* Icono de "X" para cerrar */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto pr-1"> {/* pr-1 para espacio scrollbar */}
            <Link to="/" className={navItemClasses}>
              Página principal
            </Link>

            {/* Lógica Proposicional */}
            <div>
              <button
                onClick={() => setLogicOpen(prev => !prev)}
                className={navItemClasses}
                aria-expanded={logicOpen}
              >
                <span>Lógica Proposicional</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 text-slate-500 dark:text-slate-400 ${logicOpen ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {logicOpen && (
                <div className="pl-4 pr-2 mt-2 space-y-1.5">
                  {renderLinks("/ejercicios/logica-proposicional", 15)}
                </div>
              )}
            </div>

            {/* Inducción Matemática */}
            <div>
              <button
                onClick={() => setInductionOpen(prev => !prev)}
                className={navItemClasses}
                aria-expanded={inductionOpen}
              >
                <span>Inducción Matemática</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 text-slate-500 dark:text-slate-400 ${inductionOpen ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {inductionOpen && (
                <div className="pl-4 pr-2 mt-2 space-y-1.5">
                  {renderLinks("/ejercicios/induccion-matematica", 15)}
                </div>
              )}
            </div>

            {/*  */}
            <Link to="/cuestionarios/logica" className={navItemClasses}>
              Cuestionario de lógica
            </Link>

            <Link to="/cuestionarios/induccion-matematica" className={navItemClasses}>
              Cuestionario de inducción matemática
            </Link>
          </nav>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header para móvil con botón de abrir menú */}
        {isMobile && (
          <header className="bg-white/20 dark:bg-slate-800/30 backdrop-blur-md p-3 shadow-sm flex items-center sticky top-0 z-30">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:hidden"
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <span className="ml-3 font-semibold text-slate-800 dark:text-slate-200">
              Ejercicios
            </span>
          </header>
        )}

        {/* Contenedor del ejercicio con efecto glass */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="bg-white/90 dark:bg-slate-800/60 backdrop-blur-lg rounded-xl shadow-xl p-6 md:p-8 border border-white/20 dark:border-slate-700/30 min-h-full">
            {isQuestionnaire ?
              <QuizComponent cuestionario={data} /> : <ExercisePage markdown={data} />}
          </div>
        </main>
      </div>
    </div>
  );
}