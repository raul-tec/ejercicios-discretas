// QuizComponent.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MathJaxContext } from 'better-react-mathjax';
import QuizComponent from './QuizComponent'; // Ajusta la ruta

// Mock de MathJaxRenderer
// Asegúrate de que esté en src/__mocks__/MathJaxRenderer.jsx
// o en src/components/__mocks__/MathJaxRenderer.jsx si el original está en src/components
vi.mock('./MathJaxRenderer'); // Descomenta y ajusta si el mock no se carga automáticamente

const mockCuestionarioData = {
  titulo: "Cuestionario de Prueba con Estilos",
  preguntas: [
    {
      id: 1,
      enunciado: "Pregunta 1: ¿Cuál es la fórmula del agua?",
      respuestas: [
        { texto: "CO2", esCorrecta: false, retroalimentacion: "Eso es dióxido de carbono." },
        { texto: "H2O", esCorrecta: true, retroalimentacion: "¡Correcto, es H2O!" },
        { texto: "O2", esCorrecta: false, retroalimentacion: "Eso es oxígeno." },
      ],
    },
    {
      id: 2,
      enunciado: "Pregunta 2: Planeta más cercano al Sol",
      respuestas: [
        { texto: "Venus", esCorrecta: false, retroalimentacion: "Venus es el segundo." },
        { texto: "Mercurio", esCorrecta: true, retroalimentacion: "¡Sí, Mercurio!" },
      ],
    },
  ],
};

const mathJaxConfig = {
  tex: {
    inlineMath: [['$', '$']],
    displayMath: [['$$', '$$']],
  },
  startup: {
    ready: () => {
      // Forzar que MathJax piense que está listo, aunque no haga el typeset completo.
      // Esto es un poco un hack para el comportamiento de ocultación.
      if (window.MathJax && window.MathJax.startup) {
        window.MathJax.startup.promise = Promise.resolve();
      }
    }
  }
};

global.alert = vi.fn();

const renderWithContext = (ui, options) => {
  return render(
    <MathJaxContext config={mathJaxConfig}>
      {ui}
    </MathJaxContext>,
    options
  );
};

describe('QuizComponent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // A. Pruebas de Renderizado Inicial
  it('A.1.1: debería renderizar el título del cuestionario', () => {
    renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
    expect(screen.getByText(mockCuestionarioData.titulo)).toBeInTheDocument();
  });

  it('A.1.2: debería renderizar el enunciado de la primera pregunta', () => {
    renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
    expect(screen.getByText(mockCuestionarioData.preguntas[0].enunciado)).toBeInTheDocument();
  });

  it('A.1.3: debería renderizar las opciones de respuesta de la primera pregunta', () => {
    renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
    mockCuestionarioData.preguntas[0].respuestas.forEach(respuesta => {
      expect(screen.getByText(respuesta.texto)).toBeInTheDocument();
    });
  });

  it('A.1.7: el botón "Anterior" debería estar deshabilitado en la primera pregunta', () => {
    renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
    expect(screen.getByRole('button', { name: /anterior/i })).toBeDisabled();
  });

  it('A.2.1: debería mostrar mensaje si no hay cuestionario', () => {
    renderWithContext(<QuizComponent cuestionario={null} />);
    expect(screen.getByText(/no hay preguntas disponibles/i)).toBeInTheDocument();
  });


  // B. Pruebas de Selección de Respuesta
  it('B.1.1: seleccionar una respuesta debería aplicar estilo de selección', async () => {
    const user = userEvent.setup();
    renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
    const primeraRespuestaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');

    await user.click(primeraRespuestaBoton);

    // Clases específicas para selección (ajusta si es necesario)
    expect(primeraRespuestaBoton).toHaveClass('border-blue-500');
    expect(primeraRespuestaBoton).toHaveClass('ring-blue-500');
  });

  // C. Pruebas del Flujo de "Verificar"
  it('C.1.1: verificar una respuesta correcta debería mostrar feedback positivo y el botón para ocultar/mostrar retroalimentación', async () => {
    const user = userEvent.setup();
    renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
    const respuestaCorrectaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[1].texto).closest('button'); // "H2O"

    await user.click(respuestaCorrectaBoton);
    await user.click(screen.getByRole('button', { name: /verificar/i }));

    expect(respuestaCorrectaBoton).toHaveClass('border-green-500');
    expect(screen.getByRole('button', { name: /verificar/i })).toBeDisabled();

    const otraRespuestaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');
    expect(otraRespuestaBoton).toBeDisabled();
    expect(respuestaCorrectaBoton).toBeDisabled();

    // 1. Verificar que la retroalimentación es visible y el botón dice "Ocultar"
    const feedbackTextCorrecta = mockCuestionarioData.preguntas[0].respuestas[1].retroalimentacion;

    //screen.debug(undefined, Infinity); // Imprime todo el DOM de la prueba
    
    const feedbackElement = await screen.findByText(feedbackTextCorrecta, {}, { timeout: 3000 });
    expect(feedbackElement).toBeVisible(); // Esta debería pasar si el mock funciona y no oculta

    const toggleFeedbackButtonCorrecta = screen.getByRole('button', { name: /ocultar retroalimentación/i });
    expect(toggleFeedbackButtonCorrecta).toBeInTheDocument();

    // 2. Hacer clic para ocultar
    await user.click(toggleFeedbackButtonCorrecta);
    expect(screen.queryByText(feedbackTextCorrecta)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ver retroalimentación/i })).toBeInTheDocument(); // Ahora el botón debe decir "Ver"

    // 3. Hacer clic para mostrar de nuevo
    await user.click(screen.getByRole('button', { name: /ver retroalimentación/i }));
    expect(screen.getByText(feedbackTextCorrecta)).toBeVisible();
    expect(screen.getByRole('button', { name: /ocultar retroalimentación/i })).toBeInTheDocument();
  });

  it('C.2.1: verificar una respuesta incorrecta debería mostrar feedback negativo y el botón para ocultar/mostrar retroalimentación', async () => {
    const user = userEvent.setup();
    renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
    const respuestaIncorrectaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button'); // "CO2"
    const respuestaCorrectaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[1].texto).closest('button');

    await user.click(respuestaIncorrectaBoton);
    await user.click(screen.getByRole('button', { name: /verificar/i }));

    expect(respuestaIncorrectaBoton).toHaveClass('border-red-500');
    expect(respuestaIncorrectaBoton).toBeDisabled();
    expect(respuestaCorrectaBoton).toBeEnabled(); // Aún se puede intentar la correcta

    // 1. Verificar que la retroalimentación es visible y el botón dice "Ocultar"
    const feedbackTextIncorrecta = mockCuestionarioData.preguntas[0].respuestas[0].retroalimentacion;
    expect(screen.getByText(feedbackTextIncorrecta)).toBeVisible();
    const toggleFeedbackButtonIncorrecta = screen.getByRole('button', { name: /ocultar retroalimentación/i });
    expect(toggleFeedbackButtonIncorrecta).toBeInTheDocument();

    // 2. Hacer clic para ocultar
    await user.click(toggleFeedbackButtonIncorrecta);
    expect(screen.queryByText(feedbackTextIncorrecta)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ver retroalimentación/i })).toBeInTheDocument();
    // 3. Hacer clic para mostrar de nuevo
    await user.click(screen.getByRole('button', { name: /ver retroalimentación/i }));
    expect(screen.getByText(feedbackTextIncorrecta)).toBeVisible();
    expect(screen.getByRole('button', { name: /ocultar retroalimentación/i })).toBeInTheDocument();
  });


  // D. Pruebas del Flujo de "Ver Solución"
  it('D.1.1: mostrar solución debería resaltar la respuesta correcta y atenuar incorrectas', async () => {
    const user = userEvent.setup();
    renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);

    await user.click(screen.getByRole('button', { name: /ver solución/i }));

    const respuestaCorrectaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[1].texto).closest('button');
    const respuestaIncorrectaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');

    expect(respuestaCorrectaBoton).toHaveClass('border-green-500');
    expect(respuestaIncorrectaBoton).toHaveClass('opacity-60'); // Clase de atenuación
    expect(respuestaIncorrectaBoton).toBeDisabled(); // Las opciones se deshabilitan
    expect(respuestaCorrectaBoton).toBeDisabled();

    expect(screen.getByRole('button', { name: /verificar/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /ver solución/i })).toBeDisabled();
  });

  // E. Pruebas del Botón "Limpiar"
  it('E.2.1: limpiar después de verificar una respuesta incorrecta debería resetear todo', async () => {
    const user = userEvent.setup();
    renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
    const respuestaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');

    await user.click(respuestaBoton);
    await user.click(screen.getByRole('button', { name: /verificar/i })); // Verificar (incorrecta)

    expect(respuestaBoton).toHaveClass('border-red-500'); // Estilo de incorrecta

    await user.click(screen.getByRole('button', { name: /limpiar/i }));

    expect(respuestaBoton).not.toHaveClass('border-red-500');
    expect(respuestaBoton).not.toHaveClass('border-blue-500'); // No seleccionada
    expect(respuestaBoton).toBeEnabled(); // Debería estar habilitada de nuevo
    expect(screen.getByRole('button', { name: /verificar/i })).toBeDisabled(); // Deshabilitado porque no hay selección
    expect(screen.getByRole('button', { name: /ver solución/i })).toBeEnabled();
  });

  // F. Pruebas de Navegación
  it('F.1.1: hacer clic en "Siguiente" debería mostrar la siguiente pregunta', async () => {
    const user = userEvent.setup();
    renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
    
    expect(screen.getByText(mockCuestionarioData.preguntas[0].enunciado)).toBeInTheDocument();
    
    const siguienteButton = screen.getByRole('button', { name: /siguiente/i });
    await user.click(siguienteButton);

    expect(screen.getByText(mockCuestionarioData.preguntas[1].enunciado)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /anterior/i })).toBeEnabled();
    expect(siguienteButton).toBeDisabled(); // Es la última pregunta en mockCuestionarioData
  });

  it('F.4.1: el estado de selección (no verificado) debe persistir al navegar', async () => {
    const user = userEvent.setup();
    renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
    const primeraRespuestaP1Boton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');

    await user.click(primeraRespuestaP1Boton);
    expect(primeraRespuestaP1Boton).toHaveClass('border-blue-500');

    await user.click(screen.getByRole('button', { name: /siguiente/i }));
    expect(screen.getByText(mockCuestionarioData.preguntas[1].enunciado)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /anterior/i }));
    expect(screen.getByText(mockCuestionarioData.preguntas[0].enunciado)).toBeInTheDocument();

    // Re-obtener el botón porque el DOM puede haber cambiado
    const reFetchedPrimeraRespuestaP1Boton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');
    expect(reFetchedPrimeraRespuestaP1Boton).toHaveClass('border-blue-500');
  });

  it('F.4.2: el estado de respuesta verificada incorrecta debe persistir al navegar', async () => {
    const user = userEvent.setup();
    renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
    const respuestaIncorrectaP1Boton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');

    // 1. Seleccionar y verificar incorrecta en Pregunta 1
    await user.click(respuestaIncorrectaP1Boton);
    await user.click(screen.getByRole('button', { name: /verificar/i }));
    expect(respuestaIncorrectaP1Boton).toHaveClass('border-red-500');
    expect(respuestaIncorrectaP1Boton).toBeDisabled();

    // 2. Navegar a Pregunta 2
    await user.click(screen.getByRole('button', { name: /siguiente/i }));
    expect(screen.getByText(mockCuestionarioData.preguntas[1].enunciado)).toBeInTheDocument();

    // 3. Volver a Pregunta 1
    await user.click(screen.getByRole('button', { name: /anterior/i }));
    expect(screen.getByText(mockCuestionarioData.preguntas[0].enunciado)).toBeInTheDocument();

    // 4. Verificar que el estado de "intentada e incorrecta" en Pregunta 1 persiste
    const reFetchedRespuestaIncorrectaP1Boton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');
    expect(reFetchedRespuestaIncorrectaP1Boton).toHaveClass('border-red-500');
    expect(reFetchedRespuestaIncorrectaP1Boton).toBeDisabled(); // Sigue deshabilitada
  });
});