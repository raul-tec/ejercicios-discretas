// QuizComponent.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MathJaxContext } from 'better-react-mathjax';
import { beforeEach, expect, it, vi } from 'vitest';
import QuizComponent from '../components/QuizComponent';

const mockCuestionarioData = {
  titulo: "Cuestionario de Prueba con Estilos",
  preguntas: [
    {
      id: 1,
      enunciado: "¿Cuál es el propósito del paso base (o caso base) en una demostración por inducción matemática?",
      respuestas: [
        {
          texto:
            "Asumir que la proposición $P(k)$ es verdadera para un entero arbitrario $k$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto describe la Hipótesis Inductiva, no el Paso Base. El Paso Base establece un punto de partida.",
        },
        {
          texto:
            "Establecer que la proposición $P(n_0)$ es verdadera para un valor inicial específico $n_0$.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. El Paso Base verifica que la proposición se cumple para el primer valor (usualmente $n=0$ o $n=1$), proporcionando el anclaje para la 'cadena de dominós' inductiva.",
        },
        {
          texto:
            "Demostrar que si $P(k)$ es verdadera, entonces $P(k+1)$ también lo es.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto describe el Paso Inductivo. El Paso Base es el primer eslabón de la cadena.",
        }
      ],
    },
    {
      id: 2,
      enunciado: "En el paso inductivo de una prueba por inducción, ¿qué se asume y qué se debe demostrar?",
      respuestas: [
        {
          texto: "Se asume $P(k+1)$ y se demuestra $P(k)$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto es invertir la lógica de la inducción. Se asume para $k$ y se prueba para $k+1$.",
        },
        {
          texto:
            "Se asume $P(k)$ para algún entero $k \\ge n_0$ (Hipótesis Inductiva) y se debe demostrar $P(k+1)$.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. Esta es la esencia del Paso Inductivo: mostrar que la veracidad de la proposición para un caso $k$ implica su veracidad para el siguiente caso $k+1$.",
        },
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
      if (window.MathJax && window.MathJax.startup) {
        window.MathJax.startup.promise = Promise.resolve();
      }
    }
  },

};

const renderWithContext = (ui, options) => {
  return render(
    <MathJaxContext config={mathJaxConfig}>
      {ui}
    </MathJaxContext>,
    options
  );
};

beforeEach(() => {
  vi.clearAllMocks();
});

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

it('A.1.4: el botón "Anterior" debería estar deshabilitado en la primera pregunta', () => {
  renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
  expect(screen.getByRole('button', { name: /anterior/i })).toBeDisabled();
});

it('B.1.1: seleccionar una respuesta debería aplicar estilo de selección', async () => {
  const user = userEvent.setup();
  renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
  const primeraRespuestaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');

  await user.click(primeraRespuestaBoton);

  expect(primeraRespuestaBoton).toHaveClass('border-blue-500');
  expect(primeraRespuestaBoton).toHaveClass('ring-blue-500');
});

it('C.1.1: verificar una respuesta correcta debería mostrar retroalimentación y el botón para ocultar/mostrar retroalimentación', async () => {
  const user = userEvent.setup();
  renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
  const respuestaCorrectaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[1].texto).closest('button');

  await user.click(respuestaCorrectaBoton);
  await user.click(screen.getByRole('button', { name: /verificar/i }));

  expect(respuestaCorrectaBoton).toHaveClass('border-green-500');
  expect(screen.getByRole('button', { name: /verificar/i })).toBeDisabled();

  const otraRespuestaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');
  expect(otraRespuestaBoton).toBeDisabled();
  expect(respuestaCorrectaBoton).toBeDisabled();

  const feedbackTextCorrecta = mockCuestionarioData.preguntas[0].respuestas[1].retroalimentacion;

  //await screen.findByText(feedbackTextCorrecta);
  expect(screen.getByText(feedbackTextCorrecta)).toBeInTheDocument();

  const toggleFeedbackButtonCorrecta = screen.getByRole('button', { name: /ocultar retroalimentación/i });
  expect(toggleFeedbackButtonCorrecta).toBeInTheDocument();

  await user.click(toggleFeedbackButtonCorrecta);
  expect(screen.queryByText(feedbackTextCorrecta)).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: /ver retroalimentación/i })).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /ver retroalimentación/i }));
  expect(screen.getByText(feedbackTextCorrecta)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /ocultar retroalimentación/i })).toBeInTheDocument();
});

it('C.2.1: verificar una respuesta incorrecta debería mostrar retroalimentación y el botón para ocultar/mostrar retroalimentación', async () => {
  const user = userEvent.setup();
  renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
  const respuestaIncorrectaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');
  const respuestaCorrectaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[1].texto).closest('button');

  await user.click(respuestaIncorrectaBoton);
  await user.click(screen.getByRole('button', { name: /verificar/i }));

  expect(respuestaIncorrectaBoton).toHaveClass('border-red-500');
  expect(respuestaIncorrectaBoton).toBeDisabled();
  expect(respuestaCorrectaBoton).toBeEnabled();

  const feedbackTextIncorrecta = mockCuestionarioData.preguntas[0].respuestas[0].retroalimentacion;
  await screen.findByText(feedbackTextIncorrecta);
  expect(screen.getByText(feedbackTextIncorrecta)).toBeInTheDocument();

  const toggleFeedbackButtonIncorrecta = screen.getByRole('button', { name: /ocultar retroalimentación/i });
  expect(toggleFeedbackButtonIncorrecta).toBeInTheDocument();
  await user.click(toggleFeedbackButtonIncorrecta);
  expect(screen.queryByText(feedbackTextIncorrecta)).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: /ver retroalimentación/i })).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /ver retroalimentación/i }));
  expect(screen.getByText(feedbackTextIncorrecta)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /ocultar retroalimentación/i })).toBeInTheDocument();
});

it('D.1.1: mostrar solución debería resaltar la respuesta correcta y atenuar incorrectas', async () => {
  const user = userEvent.setup();
  renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);

  await user.click(screen.getByRole('button', { name: /ver solución/i }));

  const respuestaCorrectaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[1].texto).closest('button');
  const respuestaIncorrectaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');

  expect(respuestaCorrectaBoton).toHaveClass('border-green-500');
  expect(respuestaIncorrectaBoton).toHaveClass('opacity-60');
  expect(respuestaIncorrectaBoton).toBeDisabled();
  expect(respuestaCorrectaBoton).toBeDisabled();

  expect(screen.getByRole('button', { name: /verificar/i })).toBeDisabled();
  expect(screen.getByRole('button', { name: /ver solución/i })).toBeDisabled();
});

it('E.2.1: limpiar después de verificar una respuesta incorrecta debería restablecer la selección de respuestas', async () => {
  const user = userEvent.setup();
  renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
  const respuestaBoton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');

  await user.click(respuestaBoton);
  await user.click(screen.getByRole('button', { name: /verificar/i }));

  expect(respuestaBoton).toHaveClass('border-red-500');

  await user.click(screen.getByRole('button', { name: /limpiar/i }));

  expect(respuestaBoton).not.toHaveClass('border-red-500');
  expect(respuestaBoton).not.toHaveClass('border-blue-500');
  expect(respuestaBoton).toBeEnabled();
  expect(screen.getByRole('button', { name: /verificar/i })).toBeDisabled();
  expect(screen.getByRole('button', { name: /ver solución/i })).toBeEnabled();
});

it('F.1.1: hacer clic en "Siguiente" debería mostrar la siguiente pregunta', async () => {
  const user = userEvent.setup();
  renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);

  expect(screen.getByText(mockCuestionarioData.preguntas[0].enunciado)).toBeInTheDocument();

  const siguienteButton = screen.getByRole('button', { name: /siguiente/i });
  await user.click(siguienteButton);

  expect(screen.getByText(mockCuestionarioData.preguntas[1].enunciado)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /anterior/i })).toBeEnabled();
  expect(siguienteButton).toBeDisabled();
});

it('F.4.1: el estado de selección debe persistir al navegar', async () => {
  const user = userEvent.setup();
  renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
  const primeraRespuestaP1Boton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');

  await user.click(primeraRespuestaP1Boton);
  expect(primeraRespuestaP1Boton).toHaveClass('border-blue-500');

  await user.click(screen.getByRole('button', { name: /siguiente/i }));
  expect(screen.getByText(mockCuestionarioData.preguntas[1].enunciado)).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /anterior/i }));
  expect(screen.getByText(mockCuestionarioData.preguntas[0].enunciado)).toBeInTheDocument();

  const reFetchedPrimeraRespuestaP1Boton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');
  expect(reFetchedPrimeraRespuestaP1Boton).toHaveClass('border-blue-500');
});

it('F.4.2: el estado de respuesta verificada incorrecta debe persistir al navegar', async () => {
  const user = userEvent.setup();
  renderWithContext(<QuizComponent cuestionario={mockCuestionarioData} />);
  const respuestaIncorrectaP1Boton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');

  await user.click(respuestaIncorrectaP1Boton);
  await user.click(screen.getByRole('button', { name: /verificar/i }));
  expect(respuestaIncorrectaP1Boton).toHaveClass('border-red-500');
  expect(respuestaIncorrectaP1Boton).toBeDisabled();

  await user.click(screen.getByRole('button', { name: /siguiente/i }));
  expect(screen.getByText(mockCuestionarioData.preguntas[1].enunciado)).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /anterior/i }));
  expect(screen.getByText(mockCuestionarioData.preguntas[0].enunciado)).toBeInTheDocument();

  const reFetchedRespuestaIncorrectaP1Boton = screen.getByText(mockCuestionarioData.preguntas[0].respuestas[0].texto).closest('button');
  expect(reFetchedRespuestaIncorrectaP1Boton).toHaveClass('border-red-500');
  expect(reFetchedRespuestaIncorrectaP1Boton).toBeDisabled();
});
