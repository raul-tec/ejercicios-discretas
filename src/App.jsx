import { Link } from '@tanstack/react-router';
import React from 'react';

const App = () => {
  const logicaProposicional = Array.from({ length: 15 }, (_, i) => i + 1);
  const induccionMatematica = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Ejercicios Explicados
        </h1>
        <p className="text-center mb-10">
          Aquí hay ejercicios explicados sobre lógica proposicional e inducción matemática útiles para reforzar la comprensión en estos temas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sección Lógica Proposicional */}
          <div className="bg-green-100 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Lógica Proposicional</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {logicaProposicional.map((n) => (
                <Link
                  key={n}
                  to={`/ejercicios/logica-proposicional/${n}`}
                  className="bg-green-200 hover:bg-green-300 font-medium py-2 px-4 rounded text-center transition duration-200"
                >
                  Ejercicio {n}
                </Link>
              ))}
            </div>
          </div>

          {/* Sección Inducción Matemática */}
          <div className="bg-green-100 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Inducción Matemática</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {induccionMatematica.map((n) => (
                <Link
                  key={n}
                  to={`/ejercicios/induccion-matematica/${n}`}
                  className="bg-green-200 hover:bg-green-300 font-medium py-2 px-4 rounded text-center transition duration-200"
                >
                  Ejercicio {n}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default App;