import { Link } from '@tanstack/react-router';

const App = () => {
  const logicaProposicional = Array.from({ length: 15 }, (_, i) => i + 1);
  const induccionMatematica = Array.from({ length: 15 }, (_, i) => i + 1);

  const cardGlassClasses = `
    bg-white/20 dark:bg-slate-900/30
    backdrop-blur-lg
    rounded-xl
    shadow-lg dark:shadow-slate-900/50
    overflow-hidden
    transform transition-all duration-300 ease-in-out
    hover:shadow-2xl hover:scale-[1.01]
    border border-white/30 dark:border-slate-300/10
  `;

  const sectionTitleClasses = "text-3xl font-bold mb-6 flex items-center";

  const logicButtonClasses = `
    font-bold py-3 px-4 rounded-lg text-center
    bg-green-100 dark:bg-green-900/20
    backdrop-blur-md
    border border-green-300/40 dark:border-green-400/30
    text-green-900 dark:text-green-200
    transition-all duration-300 ease-in-out transform
    hover:scale-105 hover:bg-green-200/40 dark:hover:bg-green-900/30
    hover:border-green-300/60 dark:hover:border-green-400/50
    focus:outline-none focus:ring-2 focus:ring-green-300/50 focus:ring-opacity-75
    shadow-lg hover:shadow-xl
    hover:backdrop-blur-lg
  `;

  const mathButtonClasses = `
    font-bold py-3 px-4 rounded-lg text-center
    bg-teal-100/50 dark:bg-teal-900/20
    backdrop-blur-md
    border border-teal-300/40 dark:border-teal-400/30
    text-teal-900 dark:text-teal-200
    transition-all duration-300 ease-in-out transform
    hover:scale-105 hover:bg-teal-200/40 dark:hover:bg-teal-900/30
    hover:border-teal-300/60 dark:hover:border-teal-400/50
    focus:outline-none focus:ring-2 focus:ring-teal-300/50 focus:ring-opacity-75
    shadow-lg hover:shadow-xl
    hover:backdrop-blur-lg
  `;

  const logicQuizButtonClasses = `
    font-bold py-3 px-4 rounded-lg text-center
    bg-green-100/40 dark:bg-green-800/30
    backdrop-blur-lg
    border-2 border-green-400/60 dark:border-green-300/40
    text-green-900 dark:text-green-100
    transition-all duration-300 ease-in-out transform
    hover:scale-105 hover:bg-green-300/50 dark:hover:bg-green-800/40
    hover:border-green-400/80 dark:hover:border-green-300/60
    focus:outline-none focus:ring-2 focus:ring-green-400/70 focus:ring-opacity-75
    shadow-xl hover:shadow-2xl
    hover:backdrop-blur-xl
  `;

  const mathQuizButtonClasses = `
    font-bold py-3 px-4 rounded-lg text-center
    bg-teal-100/40 dark:bg-teal-800/30
    backdrop-blur-lg
    border-2 border-teal-400/60 dark:border-teal-300/40
    text-teal-900 dark:text-teal-100
    transition-all duration-300 ease-in-out transform
    hover:scale-105 hover:bg-teal-300/50 dark:hover:bg-teal-800/40
    hover:border-teal-400/80 dark:hover:border-teal-300/60
    focus:outline-none focus:ring-2 focus:ring-teal-400/70 focus:ring-opacity-75
    shadow-xl hover:shadow-2xl
    hover:backdrop-blur-xl
  `;

  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-200 to-teal-500/10 min-h-screen p-6 md:p-10 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-green-600 ">
            Ejercicios Explicados
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explora ejercicios detallados de lógica proposicional e inducción matemática para fortalecer tu comprensión y habilidades. Además, puedes acceder a dos cuestionarios para repasar ambos temas.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {/* Sección Lógica Proposicional */}
          <div className={`${cardGlassClasses} p-6 md:p-8`}>
            <h2 className={`${sectionTitleClasses} text-green-800 dark:text-green-300`}>
              Lógica Proposicional
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {logicaProposicional.map((n) => (
                <Link
                  key={`lp-${n}`}
                  to={`/ejercicios/logica-proposicional/${n}`}
                  className={logicButtonClasses}
                >
                  Ejercicio {n}
                </Link>
              ))}
              <Link
                to={`/cuestionarios/logica`}
                className={logicQuizButtonClasses}
              >
                Cuestionario
              </Link>
            </div>
          </div>

          {/* Sección Inducción Matemática */}
          <div className={`${cardGlassClasses} p-6 md:p-8`}>
            <h2 className={`${sectionTitleClasses} text-emerald-800 dark:text-emerald-300`}>
              Inducción Matemática
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {induccionMatematica.map((n) => (
                <Link
                  key={`im-${n}`}
                  to={`/ejercicios/induccion-matematica/${n}`}
                  className={mathButtonClasses}
                >
                  Ejercicio {n}
                </Link>
              ))}
              <Link
                to={`/cuestionarios/induccion-matematica`}
                className={mathQuizButtonClasses}
              >
                Cuestionario
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;