import { createFileRoute } from '@tanstack/react-router'
import QuizComponent from "../../components/QuizComponent";
import cuestionarioData from '../../datos_cuestionarios/logica';

export const Route = createFileRoute('/cuestionarios/prueba')({
  component: Component,
})

function Component() {
  return (
    <div>
      <QuizComponent cuestionario={cuestionarioData} />
    </div>
  );
}

export default Component;