// En la carpeta __mocks__ correcta:
// src/components/__mocks__/MathJaxRenderer.jsx (si el original está en src/components)
// O src/__mocks__/MathJaxRenderer.jsx (si el original está en src)
import React from 'react';
import { vi } from 'vitest';

console.log('--- MOCK MathJaxRenderer.jsx CARGADO ---'); // Para depuración

// eslint-disable-next-line react/prop-types
const MockMathJaxRenderer = vi.fn(({ content }) => {
  // console.log('MockMathJaxRenderer RENDERIZANDO con content:', content);
  // Renderiza el contenido directamente, sin usar el componente <MathJax> real
  let renderedContent;
  if (Array.isArray(content)) {
    renderedContent = content.map((segment, index) => {
      if (segment.type === 'strong') {
        return <strong key={index}>{segment.value}</strong>;
      }
      return <React.Fragment key={index}>{segment.value}</React.Fragment>;
    });
  } else {
    renderedContent = content;
  }
  return <div data-testid="mocked-renderer-output">{renderedContent}</div>;
});

export default MockMathJaxRenderer;