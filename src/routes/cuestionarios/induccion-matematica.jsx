import { createFileRoute } from '@tanstack/react-router'
import cuestionarioData from '../../datos_cuestionarios/induccion-matematica';
import Sidebar from '../../components/Sidebar'

export const Route = createFileRoute('/cuestionarios/induccion-matematica')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Sidebar data={cuestionarioData} isQuestionnaire={true} />
}
