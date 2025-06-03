import { createFileRoute } from '@tanstack/react-router'
import Sidebar from '../../../components/Sidebar'
import exercisesMd from '../../../soluciones/induccion_matematica.md?raw';

export const Route = createFileRoute('/ejercicios/induccion-matematica/$id')({
  component: Component,
  staleTime: 0,
  preloadStaleTime: 0,
  shouldReload: true
})

function Component() {
  return <>
    <Sidebar data={exercisesMd} />
  </>
}