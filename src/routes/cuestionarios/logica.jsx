import { createFileRoute } from '@tanstack/react-router'
import cuestionarioData from '../../datos_cuestionarios/logica';
import Sidebar from '../../components/Sidebar'

export const Route = createFileRoute('/cuestionarios/logica')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Sidebar data={cuestionarioData} isQuestionnaire={true} />
}
