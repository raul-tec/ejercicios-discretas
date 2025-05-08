import { createRootRoute, Outlet } from '@tanstack/react-router'
import { MathJaxContext } from "better-react-mathjax";

export const Route = createRootRoute({
  component: () => (
    <MathJaxContext config={{
      tex: {
        inlineMath: [['$', '$']],
        displayMath: [['$$', '$$']]
      },
    }}>
      <Outlet />
    </MathJaxContext>
  ),
})