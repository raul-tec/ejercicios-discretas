import { useState } from 'react';
import MathJaxRenderer from './MathJaxRenderer';

const QuizComponent = ({ cuestionario }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedbackGlobal, setShowFeedbackGlobal] = useState({});
  const [showSolution, setShowSolution] = useState({});
  const [attemptedIncorrectAnswers, setAttemptedIncorrectAnswers] = useState({});
  const [showIndividualFeedback, setShowIndividualFeedback] = useState({});

  if (!cuestionario || !cuestionario.preguntas || cuestionario.preguntas.length === 0) {
    return <p className="text-center text-gray-600 font-medium italic">No hay preguntas disponibles.</p>;
  }

  const currentQuestion = cuestionario.preguntas[currentQuestionIndex];
  const questionId = currentQuestion.id;

  const selectedAnswerIndex = selectedAnswers[questionId];
  const feedbackGlobalVisible = showFeedbackGlobal[questionId];
  const solutionVisible = showSolution[questionId];

  const isCorrectlyAnswered = feedbackGlobalVisible &&
    selectedAnswerIndex !== undefined &&
    currentQuestion.respuestas[selectedAnswerIndex]?.esCorrecta;

  const handleSelectAnswer = (qId, answerIndex) => {
    if (solutionVisible || isCorrectlyAnswered || attemptedIncorrectAnswers[qId]?.[answerIndex]) {
      return;
    }
    setSelectedAnswers((prev) => ({ ...prev, [qId]: answerIndex, }));
    if (feedbackGlobalVisible && !(currentQuestion.respuestas[selectedAnswers[qId]]?.esCorrecta)) {
      setShowFeedbackGlobal(prev => ({ ...prev, [qId]: false }));
    }
  };

  const handleVerify = (qId) => {
    if (selectedAnswers[qId] === undefined) {
      alert('Por favor, selecciona una respuesta primero.');
      return;
    }
    setShowFeedbackGlobal((prev) => ({ ...prev, [qId]: true }));
    setShowSolution((prev) => ({ ...prev, [qId]: false }));

    const isCurrentSelectionCorrect = currentQuestion.respuestas[selectedAnswers[qId]]?.esCorrecta;

    if (!isCurrentSelectionCorrect) {
      setAttemptedIncorrectAnswers(prev => ({
        ...prev,
        [qId]: { ...(prev[qId] || {}), [selectedAnswers[qId]]: true }
      }));
      setShowIndividualFeedback(prev => ({
        ...prev,
        [qId]: { ...(prev[qId] || {}), [selectedAnswers[qId]]: true }
      }));
    } else {
      setShowIndividualFeedback(prev => ({
        ...prev,
        [qId]: { ...(prev[qId] || {}), [selectedAnswers[qId]]: true }
      }));
    }
  };

  const handleShowSolution = (qId) => {
    setShowFeedbackGlobal((prev) => ({ ...prev, [qId]: true }));
    setShowSolution((prev) => ({ ...prev, [qId]: true }));
    setSelectedAnswers((prev) => {
      const newState = { ...prev };
      delete newState[qId];
      return newState;
    });

    const correctIndex = currentQuestion.respuestas.findIndex(r => r.esCorrecta);
    const newIndividualFeedbackState = {};
    currentQuestion.respuestas.forEach((_, index) => {
      newIndividualFeedbackState[index] = (index === correctIndex);
    });
    setShowIndividualFeedback(prev => ({ ...prev, [qId]: newIndividualFeedbackState }));
  };

  const handleCleanSelection = (qId) => {
    setSelectedAnswers((prev) => {
      const newState = { ...prev };
      delete newState[qId];
      return newState;
    });
    setShowFeedbackGlobal((prev) => ({ ...prev, [qId]: false }));
    setShowSolution((prev) => ({ ...prev, [qId]: false }));
    setAttemptedIncorrectAnswers(prev => ({ ...prev, [qId]: {} }));
    setShowIndividualFeedback(prev => ({ ...prev, [qId]: {} }));
  };

  const toggleIndividualFeedback = (qId, answerIndex) => {
    // Ya no se previene ocultar el feedback de la correcta en modo solución
    setShowIndividualFeedback(prev => ({
      ...prev,
      [qId]: {
        ...(prev[qId] || {}),
        [answerIndex]: !(prev[qId]?.[answerIndex] || false)
      }
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < cuestionario.preguntas.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  // Estilos de botones mejorados con efectos
  const baseButtonClass = "px-4 py-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm sm:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5";
  const primaryButtonClass = `${baseButtonClass} bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 focus:ring-blue-500`;
  const secondaryButtonClass = `${baseButtonClass} bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 focus:ring-gray-400`;
  const tertiaryButtonClass = `${baseButtonClass} bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 focus:ring-yellow-400 px-3 py-1.5 text-xs sm:text-sm`;
  const disabledButtonClass = "disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none disabled:hover:shadow-none disabled:hover:translate-y-0";

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 my-12 relative overflow-hidden">
      {/* Fondo con efecto glass */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-70 z-0"></div>
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30 rounded-2xl shadow-xl border border-white/40 z-10"></div>
      
      {/* Contenido principal */}
      <div className="relative z-20 p-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800 mb-8">
          <MathJaxRenderer content={cuestionario.titulo} />
        </h2>

        {/* Indicadores de preguntas (puntos) */}
        <div className="flex justify-center space-x-3 mb-8">
          {cuestionario.preguntas.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out
                          ${index === currentQuestionIndex 
                              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 scale-125 ring-2 ring-blue-200 ring-offset-2' 
                              : 'bg-blue-200 hover:bg-blue-300 transform hover:scale-110'}`}
              onClick={() => goToQuestion(index)}
              aria-label={`Ir a la pregunta ${index + 1}`}
            />
          ))}
        </div>

        {/* Tarjeta de pregunta */}
        <div className="relative backdrop-blur-md bg-white/60 rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50 mb-8 overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-100/50 blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-indigo-100/50 blur-2xl"></div>
          
          <h3 className="text-sm text-gray-500 text-right mb-3 font-medium">
            Pregunta {currentQuestionIndex + 1} de {cuestionario.preguntas.length}
          </h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-8 font-medium">
            <MathJaxRenderer content={currentQuestion.enunciado} />
          </div>

          <div className="space-y-4">
            {currentQuestion.respuestas.map((respuesta, index) => {
              const isSelectedNow = selectedAnswerIndex === index;
              const isAttemptedIncorrect = attemptedIncorrectAnswers[questionId]?.[index];
              const shouldShowThisIndividualFeedback = showIndividualFeedback[questionId]?.[index];

              let answerClasses = `w-full text-left p-4 rounded-xl border-2 transition-all duration-200 
                                   focus:outline-none shadow-sm hover:shadow-md transform`;

              const isDisabledForSelection = solutionVisible || isCorrectlyAnswered || isAttemptedIncorrect;

              if (solutionVisible) {
                if (respuesta.esCorrecta) {
                  answerClasses += ' bg-gradient-to-r from-green-50 to-green-100 border-green-500 text-green-800 font-bold ring-green-500';
                } else {
                  answerClasses += ' bg-gray-100/70 border-gray-300 text-gray-700 opacity-60 cursor-default';
                }
              } else if (isCorrectlyAnswered) {
                if (isSelectedNow && respuesta.esCorrecta) {
                  answerClasses += ' bg-gradient-to-r from-green-50 to-green-100 border-green-500 text-green-800 ring-green-500';
                } else if (isAttemptedIncorrect) {
                  answerClasses += ' bg-red-50/70 border-red-400 text-red-700 opacity-70 cursor-not-allowed';
                } else {
                  answerClasses += ' bg-gray-100/70 border-gray-300 text-gray-700 cursor-not-allowed opacity-70';
                }
              } else if (feedbackGlobalVisible) {
                if (isSelectedNow) { // Si es la seleccionada y se acaba de verificar (y no es correcta)
                  answerClasses += ' bg-gradient-to-r from-red-50 to-red-100 border-red-500 text-red-800 ring-red-500 cursor-not-allowed';
                } else if (isAttemptedIncorrect) {
                  answerClasses += ' bg-red-50/70 border-red-400 text-red-700 opacity-70 cursor-not-allowed';
                } else {
                  answerClasses += ' bg-white/80 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-blue-50/80 hover:border-blue-400 hover:-translate-y-0.5';
                }
              } else if (isSelectedNow) {
                answerClasses += ' bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-500 ring-blue-500 font-semibold text-blue-800 hover:-translate-y-0.5';
              } else {
                if (isAttemptedIncorrect) {
                  answerClasses += ' bg-red-50/70 border-red-300 text-red-600 opacity-70 cursor-not-allowed';
                } else {
                  answerClasses += ' bg-white/80 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-blue-50/80 hover:border-blue-400 hover:-translate-y-0.5';
                }
              }

              return (
                <div key={index} className="answer-item-wrapper">
                  <button
                    className={answerClasses}
                    onClick={() => handleSelectAnswer(questionId, index)}
                    disabled={isDisabledForSelection}
                  >
                    <MathJaxRenderer content={respuesta.texto} />
                  </button>

                  {((isAttemptedIncorrect && !respuesta.esCorrecta && !solutionVisible) ||
                    (respuesta.esCorrecta && isSelectedNow && isCorrectlyAnswered) ||
                    (respuesta.esCorrecta && solutionVisible)) && (
                      <button
                        onClick={() => toggleIndividualFeedback(questionId, index)}
                        className={`text-xs font-medium mt-2 ml-3 self-start transition-colors duration-150 py-1 px-2 rounded-md
                                   ${respuesta.esCorrecta 
                                       ? 'text-green-600 hover:text-green-800 bg-green-50 hover:bg-green-100' 
                                       : 'text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100'}`}
                        aria-label={shouldShowThisIndividualFeedback ? 'Ocultar retroalimentación' : 'Ver retroalimentación'}
                      >
                        {shouldShowThisIndividualFeedback ? 'Ocultar retroalimentación' : 'Ver retroalimentación'}
                      </button>
                    )}

                  {shouldShowThisIndividualFeedback && (
                    (solutionVisible && respuesta.esCorrecta) ||
                    (!solutionVisible && isCorrectlyAnswered && isSelectedNow && respuesta.esCorrecta) ||
                    (!solutionVisible && isAttemptedIncorrect && !respuesta.esCorrecta)
                  ) && (
                      <div
                        className={`mt-2 p-4 rounded-xl text-sm shadow-inner backdrop-blur-sm transition-all duration-300 animate-fadeIn
                                  ${respuesta.esCorrecta
                            ? 'bg-green-50/80 border-l-4 border-green-500 text-green-700'
                            : 'bg-red-50/80 border-l-4 border-red-500 text-red-700'
                          }`}
                      >
                        <MathJaxRenderer content={respuesta.retroalimentacion} />
                      </div>
                    )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 items-center">
            <button
              onClick={() => handleVerify(questionId)}
              disabled={selectedAnswerIndex === undefined || solutionVisible || isCorrectlyAnswered || attemptedIncorrectAnswers[questionId]?.[selectedAnswerIndex]}
              className={`${primaryButtonClass} ${disabledButtonClass} col-span-1`}
            >
              Verificar
            </button>
            <button
              onClick={() => handleShowSolution(questionId)}
              disabled={isCorrectlyAnswered || solutionVisible}
              className={`${secondaryButtonClass} ${disabledButtonClass} col-span-1`}
            >
              Ver Solución
            </button>
            <button
              onClick={() => handleCleanSelection(questionId)}
              disabled={selectedAnswerIndex === undefined && !feedbackGlobalVisible && !solutionVisible && Object.keys(attemptedIncorrectAnswers[questionId] || {}).length === 0}
              className={`${tertiaryButtonClass} ${disabledButtonClass} col-span-2 sm:col-span-1 justify-self-center sm:justify-self-auto mt-2 sm:mt-0`}
            >
              Limpiar
            </button>
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-between mt-8 px-2">
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`${primaryButtonClass} ${disabledButtonClass} flex items-center`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Anterior
          </button>
          <button
            onClick={goToNextQuestion}
            disabled={currentQuestionIndex === cuestionario.preguntas.length - 1}
            className={`${primaryButtonClass} ${disabledButtonClass} flex items-center`}
          >
            Siguiente
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;