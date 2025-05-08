import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import ExercisePage from "./ExercisePage";

export default function Sidebar({ markdown }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [logicOpen, setLogicOpen] = useState(false);
  const [inductionOpen, setInductionOpen] = useState(false);

  // Detecta tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <a
          key={id}
          href={href}
          className={`block px-4 py-2 rounded transition-colors duration-200 ${isActive ? "bg-green-300 font-semibold" : "hover:bg-green-200"
            }`}
        >
          Ejercicio {id}
        </a>
      );
    });
  };

  return (
    <div className="flex h-screen bg-green-50 overflow-hidden relative">
      {/* Overlay para móviles */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 z-50 h-full bg-green-100 shadow-lg transform transition-transform duration-300 ease-in-out
          ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0 w-64"}
          ${isMobile ? "w-64" : ""}
        `}
      >
        <div className="p-4 flex flex-col h-full overflow-y-auto">
          {isMobile && (
            <div className="flex justify-end mb-6">
              <button onClick={toggleSidebar} className="hover:text-green-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          )}

          <nav className="flex-1 space-y-4 text-base text-black">


            <Link to="/" className="cursor-pointer w-full flex justify-between items-center px-4 py-2 rounded hover:bg-green-200">Página principal</Link>

            {/* Lógica */}
            <div>
              <button
                onClick={() => setLogicOpen(prev => !prev)}
                className="cursor-pointer w-full flex justify-between items-center px-4 py-2 rounded hover:bg-green-200"
              >
                <span>Ejercicios de lógica</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${logicOpen ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {logicOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {renderLinks("/ejercicios/logica-proposicional", 15)}
                </div>
              )}
            </div>

            {/* Inducción */}
            <div>
              <button
                onClick={() => setInductionOpen(prev => !prev)}
                className="cursor-pointer w-full flex justify-between items-center px-4 py-2 rounded hover:bg-green-200"
              >
                <span>Ejercicios de inducción matemática</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${inductionOpen ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {inductionOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {renderLinks("/ejercicios/induccion-matematica", 15)}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {isMobile && (<header className="bg-green-200 p-4 flex items-center">
          {isMobile && (
            <button onClick={toggleSidebar} className="hover:text-green-600 focus:outline-none md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </header>)}

        <main className="bg-white flex-1 p-6 overflow-y-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <ExercisePage markdown={markdown} />
          </div>
        </main>
      </div>
    </div>
  );
}
