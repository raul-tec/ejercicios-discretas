import { Link } from '@tanstack/react-router';

const App = () => {
  const logicaProposicional = Array.from({ length: 15 }, (_, i) => i + 1);
  const induccionMatematica = Array.from({ length: 15 }, (_, i) => i + 1);

  // Clases para el efecto Glassmorphism en las tarjetas
  // - bg-white/10: Fondo blanco con 10% de opacidad (ajusta según necesites)
  // - dark:bg-slate-800/60: Fondo oscuro con 60% opacidad para modo oscuro
  // - backdrop-blur-lg: Efecto de desenfoque del fondo
  // - border border-white/20: Borde blanco sutil con 20% opacidad
  // - dark:border-slate-300/20: Borde claro sutil para modo oscuro
  const cardGlassClasses = `
    bg-white/20 dark:bg-slate-900/30
    backdrop-blur-lg
    rounded-xl
    shadow-lg dark:shadow-slate-900/50
    overflow-hidden
    transform transition-all duration-300 ease-in-out
    hover:shadow-2xl hover:scale-[1.02]
    border border-white/30 dark:border-slate-300/10
  `;

  const sectionTitleClasses = "text-3xl font-bold mb-6 flex items-center";
  const buttonClasses = `
    font-semibold py-3 px-4 rounded-lg text-center
    transition-all duration-300 ease-in-out transform
    hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-75
    shadow-md hover:shadow-lg
  `;

  return (
    // Fondo más vibrante para que el efecto glass destaque
    <div className="bg-gradient-to-br from-green-200 via-emerald-300 to-teal-200 min-h-screen p-6 md:p-10 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900">
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
                  className={`${buttonClasses} bg-green-500 hover:bg-green-600 text-white focus:ring-green-400`}
                >
                  Ejercicio {n}
                </Link>
              ))}
              <Link
                to={`/cuestionarios/logica`}
                className={`${buttonClasses} bg-green-500 hover:bg-green-600 text-white focus:ring-green-400`}
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
                  className={`${buttonClasses} bg-emerald-500 hover:bg-emerald-600 text-white focus:ring-emerald-400`}
                >
                  Ejercicio {n}
                </Link>
              ))}
              <Link
                to={`/cuestionarios/induccion-matematica`}
                className={`${buttonClasses} bg-emerald-500 hover:bg-emerald-600 text-white focus:ring-emerald-400`}
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