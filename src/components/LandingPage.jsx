import { Link } from '@tanstack/react-router';
// Iconos opcionales
// import { AcademicCapIcon, PencilSquareIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const LandingPage = () => {
  const cardGlassClasses = `
    bg-white/20 dark:bg-slate-900/30
    backdrop-blur-xl
    rounded-2xl
    shadow-xl dark:shadow-slate-900/50
    overflow-hidden
    border border-white/30 dark:border-slate-300/10
  `;

  const ctaButtonClasses = `
    inline-block text-lg sm:text-xl font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-lg
    bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700
    dark:from-green-600 dark:to-emerald-700 dark:hover:from-green-700 dark:hover:to-emerald-800
    text-white
    transition-all duration-300 ease-in-out transform hover:scale-[1.03]
    shadow-xl hover:shadow-emerald-500/40 dark:hover:shadow-emerald-400/30
    focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800
    backdrop-blur-sm
  `;

  const featureCardClasses = `
    bg-white/10 dark:bg-slate-800/20
    p-5 rounded-xl backdrop-blur-lg border border-white/20 dark:border-slate-700/30
    transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg
    flex flex-col items-center text-center md:items-start md:text-left 
  `; // Ajustado para mejor alineación en dos columnas

  const temarioLink = "http://ith.mx/documentos/reticulas/sistemas/Semestre%201/AE041%20Matematicas%20Discretas.pdf";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-emerald-300 to-teal-300/30 dark:from-slate-900 dark:via-gray-800 dark:to-slate-900 p-4 md:p-6 text-gray-800 dark:text-gray-200 transition-colors duration-500">

      <main className={`${cardGlassClasses} w-full max-w-6xl p-5 sm:p-6 md:p-10 text-center`}>
        {/* <AcademicCapIcon className="h-12 w-12 mx-auto mb-3 text-green-500 dark:text-green-400" /> */}

        <h1 className="text-3xl sm:text-5xl md:text-5xl font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-400 dark:to-teal-500">
            ¿Necesitas ayuda en la materia de Matemáticas Discretas?
          </span>
        </h1>

        <p className="text-md sm:text-lg mb-3 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Si eres estudiante de <strong className="text-green-700 dark:text-green-300">Ingeniería en Sistemas Computacionales</strong>, este recurso contiene ejercicios solucionados que buscan ser un apoyo para los siguientes dos temas del <a href={temarioLink} target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500 underline font-medium">temario oficial</a> de la materia de matemáticas discretas.
        </p>
        <p className="text-lg sm:text-xl font-semibold mb-8 text-emerald-800 dark:text-emerald-300 max-w-2xl mx-auto">
          <span className="block sm:inline">3.1 Lógica Proposicional</span> <span className="hidden sm:inline mx-2">•</span> <span className="block sm:inline">3.4 Inducción Matemática</span>
        </p>

        <Link
          to="/inicio"
          className={ctaButtonClasses}
        >
          Empezar a Practicar
        </Link>

        <div className="mt-3 pt-3 border-t border-green-300/30 dark:border-slate-700/50">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-green-800 dark:text-green-300">
            ¿Qué encontrarás para estudiar?
          </h2>
          <div className="grid md:grid-cols-2 gap-5 text-left"> {/* Cambiado a md:grid-cols-2 */}

            <div className={featureCardClasses}>
              {/* <PencilSquareIcon className="h-10 w-10 text-green-500 dark:text-green-400 mb-3" /> */}
              <h3 className="text-xl font-bold mb-2 text-green-700 dark:text-green-400">Ejercicios Explicados</h3>
              <p className="text-lg text-gray-800 dark:text-gray-400 mb-2">
                Práctica los conceptos mediante:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-800 dark:text-gray-400 space-y-1">
                <li><strong className="text-green-600 dark:text-green-300">15 ejercicios</strong> de Lógica Proposicional (Tema 3.1).</li>
                <li><strong className="text-teal-600 dark:text-teal-300">15 ejercicios</strong> de Inducción Matemática (Tema 3.4).</li>
              </ul>
            </div>

            <div className={featureCardClasses}>
              {/* <CheckCircleIcon className="h-10 w-10 text-emerald-500 dark:text-emerald-400 mb-3" /> */}
              <h3 className="text-xl font-bold mb-2 text-emerald-700 dark:text-emerald-400">Cuestionarios</h3>
              <p className="text-lg text-gray-800 dark:text-gray-400 mb-2">
                Repasa los conceptos mediante:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-800 dark:text-gray-400 space-y-1">
                <li>Un cuestionario para Lógica Proposicional.</li>
                <li>Un cuestionario para Inducción Matemática.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;