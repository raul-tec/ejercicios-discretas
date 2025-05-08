import { createFileRoute } from '@tanstack/react-router'
import QuizComponent from "../../QuizComponent";
import cuestionarioData from '../../datos_cuestionarios/prueba';

export const Route = createFileRoute('/cuestionarios/prueba')({
  component: Component,
})

// Tus datos del cuestionario

function Component() {
  return (
    <div>
      <QuizComponent cuestionario={cuestionarioData} />
    </div>
  );
}

export default Component;