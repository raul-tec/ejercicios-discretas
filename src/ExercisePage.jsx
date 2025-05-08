import parseExercisesMarkdown from './util/parseExercisesMarkdown';
import MarkdownRenderer from './MarkdownRenderer';
import { useMemo } from "react";
import { useParams } from '@tanstack/react-router';

export default function ExercisePage({ markdown }) {
  const { id: exerciseNumber } = useParams({ strict: false });

  const allExercises = useMemo(() => parseExercisesMarkdown(markdown), [markdown]);

  const exerciseKey = `ejercicio${exerciseNumber}`;
  const currentExercise = allExercises[exerciseKey];

  if (!currentExercise) {
    return <div>Ejercicio {exerciseNumber} no encontrado.</div>;
  }

  console.log(currentExercise);

  return (
    <div>
      <h2>Ejercicio {exerciseNumber}</h2>

      <h3>Planteamiento</h3>
      <MarkdownRenderer contentBlocks={currentExercise.planteamiento} />

      <hr style={{ margin: '2em 0' }} />

      <h3>Solución</h3>
      <MarkdownRenderer contentBlocks={currentExercise.solucion} />
    </div>
  );
};