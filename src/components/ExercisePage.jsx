import parseExercisesMarkdown from '../util/parseExercisesMarkdown';
import MarkdownRenderer from './MarkdownRenderer';
import { useMemo } from "react";
import { useParams } from '@tanstack/react-router';

export default function ExercisePage({ markdown, isLogic }) {
  const { id: exerciseNumber } = useParams({ strict: false });

  const allExercises = useMemo(() => parseExercisesMarkdown(markdown), [markdown]);

  const exerciseKey = `ejercicio${exerciseNumber}`;
  const currentExercise = allExercises[exerciseKey];

  return (
    <div>
      {isLogic ?
        <h2>Ejercicio {exerciseNumber} - Lógica proposicional</h2> :
        <h2>Ejercicio {exerciseNumber} - Inducción matemática</h2>}

      <h3>Planteamiento</h3>
      <MarkdownRenderer contentBlocks={currentExercise.planteamiento} />

      <hr style={{ margin: '2em 0' }} />

      <h3>Solución</h3>
      <MarkdownRenderer contentBlocks={currentExercise.solucion} />
    </div>
  );
};
