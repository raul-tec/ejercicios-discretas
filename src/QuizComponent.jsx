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
    return <p className="text-center text-gray-600">No hay preguntas disponibles.</p>;
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

  const baseButtonClass = "px-4 py-2 rounded-md font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm sm:text-base";
  const primaryButtonClass = `${baseButtonClass} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`;
  const secondaryButtonClass = `${baseButtonClass} bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400`;
  const tertiaryButtonClass = `${baseButtonClass} bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400 px-3 py-1.5 text-xs sm:text-sm`;
  const disabledButtonClass = "disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed";

  return (
    /* <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-xl my-8"> */
    <div className="max-w-4xl mx-auto p-4 sm:p-6 rounded-lg my-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6">
        <MathJaxRenderer content={cuestionario.titulo} />
      </h2>

      <div className="flex justify-center space-x-2 mb-6">
        {cuestionario.preguntas.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`w-3 h-3 rounded-full transition-all duration-200 ease-in-out
                        ${index === currentQuestionIndex ? 'bg-blue-600 scale-125 ring-2 ring-blue-600 ring-offset-1' : 'bg-blue-300 hover:bg-blue-400'}`}
            onClick={() => goToQuestion(index)}
            aria-label={`Ir a la pregunta ${index + 1}`}
          />
        ))}
      </div>

      <div className="bg-gray-50 p-5 sm:p-6 rounded-md shadow-md mb-6">
        <h3 className="text-sm text-gray-500 text-right mb-2">
          Pregunta {currentQuestionIndex + 1} de {cuestionario.preguntas.length}
        </h3>
        <div className="text-lg text-gray-800 leading-relaxed mb-6">
          <MathJaxRenderer content={currentQuestion.enunciado} />
        </div>

        <div className="space-y-3">
          {currentQuestion.respuestas.map((respuesta, index) => {
            const isSelectedNow = selectedAnswerIndex === index;
            const isAttemptedIncorrect = attemptedIncorrectAnswers[questionId]?.[index];
            const shouldShowThisIndividualFeedback = showIndividualFeedback[questionId]?.[index];

            let answerClasses = `w-full text-left p-3 rounded-md border-2 transition-all duration-150
                                 focus:outline-none focus:ring-2 focus:ring-offset-1`;

            const isDisabledForSelection = solutionVisible || isCorrectlyAnswered || isAttemptedIncorrect;

            if (solutionVisible) {
              if (respuesta.esCorrecta) {
                answerClasses += ' bg-green-100 border-green-500 text-green-800 font-bold ring-green-500';
              } else {
                answerClasses += ' bg-gray-100 border-gray-300 text-gray-700 opacity-60 cursor-default';
              }
            } else if (isCorrectlyAnswered) {
              if (isSelectedNow && respuesta.esCorrecta) {
                answerClasses += ' bg-green-100 border-green-500 text-green-800 ring-green-500';
              } else if (isAttemptedIncorrect) {
                answerClasses += ' bg-red-100 border-red-400 text-red-700 opacity-70 cursor-not-allowed';
              } else {
                answerClasses += ' bg-gray-100 border-gray-300 text-gray-700 cursor-not-allowed opacity-70';
              }
            } else if (feedbackGlobalVisible) {
              if (isSelectedNow) { // Si es la seleccionada y se acaba de verificar (y no es correcta)
                answerClasses += ' bg-red-100 border-red-500 text-red-800 ring-red-500 cursor-not-allowed';
              } else if (isAttemptedIncorrect) {
                answerClasses += ' bg-red-100 border-red-400 text-red-700 opacity-70 cursor-not-allowed';
              } else {
                answerClasses += ' bg-gray-100 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400';
              }
            } else if (isSelectedNow) {
              answerClasses += ' bg-blue-50 border-blue-500 ring-blue-500 font-semibold text-blue-800';
            } else {
              if (isAttemptedIncorrect) {
                answerClasses += ' bg-red-50 border-red-300 text-red-600 opacity-70 cursor-not-allowed';
              } else {
                answerClasses += ' bg-gray-100 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400';
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
                      className={`text-xs underline mt-1 ml-3 self-start ${respuesta.esCorrecta ? 'text-green-600 hover:text-green-800' : 'text-blue-600 hover:text-blue-800'}`}
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
                      className={`mt-1 p-3 rounded-md text-sm
                                ${respuesta.esCorrecta
                          ? 'bg-green-50 border-l-4 border-green-500 text-green-700'
                          : 'bg-red-50 border-l-4 border-red-500 text-red-700'
                        }`}
                    >
                      <MathJaxRenderer content={respuesta.retroalimentacion} />
                    </div>
                  )}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 items-center">
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

      <div className="flex justify-between mt-6">
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className={`${primaryButtonClass} ${disabledButtonClass}`}
        >
          Anterior
        </button>
        <button
          onClick={goToNextQuestion}
          disabled={currentQuestionIndex === cuestionario.preguntas.length - 1}
          className={`${primaryButtonClass} ${disabledButtonClass}`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;