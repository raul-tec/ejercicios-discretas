import React from 'react';
import { vi } from 'vitest';

const MockMathJaxRenderer = vi.fn(({ content }) => {
  // console.log('MockMathJaxRenderer RENDERIZANDO con content:', content);
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