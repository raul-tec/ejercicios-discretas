import { createFileRoute } from "@tanstack/react-router"
import Sidebar from "../../../Sidebar"
import exercisesMd from '../../../soluciones/logica_proposicional.md?raw';

export const Route = createFileRoute('/ejercicios/logica-proposicional/$id')({
  component: Component,
})

function Component() {
  return <>
    <Sidebar data={exercisesMd} />
  </>
}