import { createFileRoute } from '@tanstack/react-router'
import Sidebar from '../../../Sidebar'
import exercisesMd from '../../../soluciones/induccion_matematica.md?raw';

export const Route = createFileRoute('/ejercicios/induccion-matematica/$id')({
  component: Component,
})

function Component() {
  return <>
    <Sidebar markdown={exercisesMd} />
  </>
}