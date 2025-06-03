import { render, screen, cleanup } from '@testing-library/react';
import { it, expect, vi, afterEach } from 'vitest';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { MathJaxContext } from 'better-react-mathjax';

vi.mock('better-react-mathjax', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    MathJaxContext: ({ children }) => <div data-testid="mathjax-context">{children}</div>,
    MathJax: vi.fn(({ children, inline }) => (
      <span data-testid={inline ? "mathjax-inline-mock" : "mathjax-block-mock"}>
        {typeof children === 'string' && !inline && children.startsWith('$$') && children.endsWith('$$')
          ? children.slice(2, -2)
          : children}
      </span>
    )),
  };
});

const renderInMathJaxContext = (ui) => {
  return render(<MathJaxContext>{ui}</MathJaxContext>);
};

afterEach(() => {
  cleanup();
});

it('G.1.1. Debería representar los segmentos de texto correctamente', () => {
  const contentBlocks = [{ type: 'p', content: [{ type: 'text', value: 'Ejemplo' }] }];
  renderInMathJaxContext(<MarkdownRenderer contentBlocks={contentBlocks} />);

  const mathjaxInline = screen.getByTestId('mathjax-inline-mock');
  expect(mathjaxInline).toBeInTheDocument();
  expect(mathjaxInline).toHaveTextContent('Ejemplo');
  expect(mathjaxInline.closest('p')).toBeInTheDocument();
});

it('G.1.2. Debería representar segmentos de texto en negrito como elementos strong.', () => {
  const contentBlocks = [{
    type: 'p', content:
      [{ type: 'strong', value: 'Texto en Negrita' }]
  }];
  renderInMathJaxContext(<MarkdownRenderer contentBlocks={contentBlocks} />);

  const mathjaxInline = screen.getByTestId('mathjax-inline-mock');
  expect(mathjaxInline).toBeInTheDocument();

  const strongElement = screen.getByText('Texto en Negrita');
  expect(strongElement.tagName).toBe('STRONG');
  expect(mathjaxInline).toContainElement(strongElement);
  expect(mathjaxInline.closest('p')).toBeInTheDocument();
});

it('G.1.3. Debería representar texto mixto', () => {
  const contentBlocks = [{
    type: 'p',
    content: [
      { type: 'text', value: 'Normal ' },
      { type: 'strong', value: 'Negrita' },
      { type: 'text', value: ' Normal Otra Vez' },
    ],
  }];
  renderInMathJaxContext(<MarkdownRenderer contentBlocks={contentBlocks} />);

  const mathjaxInline = screen.getByTestId('mathjax-inline-mock');
  expect(mathjaxInline).toBeInTheDocument();
  expect(mathjaxInline).toHaveTextContent('Normal Negrita Normal Otra Vez');

  const strongElement = screen.getByText('Negrita');
  expect(strongElement.tagName).toBe('STRONG');
  expect(mathjaxInline).toContainElement(strongElement);
  expect(mathjaxInline.closest('p')).toBeInTheDocument();
});

it('H.1.1. Debería mostrar "Contenido no disponible" para bloques vacíos y nulos', () => {
  renderInMathJaxContext(<MarkdownRenderer contentBlocks={[]} />);
  expect(screen.getByText('Contenido no disponible.')).toBeInTheDocument();
  cleanup();

  renderInMathJaxContext(<MarkdownRenderer contentBlocks={null} />);
  expect(screen.getByText('Contenido no disponible.')).toBeInTheDocument();
});

it('H.1.2. Debería representar los encabezados h2', () => {
  const contentBlocks = [{ type: 'h2', content: [{ type: 'text', value: 'Mi Encabezado' }] }];
  renderInMathJaxContext(<MarkdownRenderer contentBlocks={contentBlocks} />);
  const headerTextElement = screen.getByText('Mi Encabezado');
  expect(headerTextElement.closest('h2')).toBeInTheDocument();
  expect(headerTextElement.closest('h2')).toContainElement(screen.getByTestId('mathjax-inline-mock'));
});

it('H.1.3. Debería representar párrafos', () => {
  const contentBlocks = [{ type: 'p', content: [{ type: 'text', value: 'Esto es un párrafo.' }] }];
  renderInMathJaxContext(<MarkdownRenderer contentBlocks={contentBlocks} />);
  expect(screen.getByText('Esto es un párrafo.').closest('p')).toBeInTheDocument();
});

it('H.1.4. Debería representar listas desordenadas', () => {
  const contentBlocks = [{
    type: 'ul',
    items: [
      { content: [{ type: 'text', value: 'Elemento 1' }] },
      { content: [{ type: 'strong', value: 'Elemento 2 en negrita' }] },
    ],
  }];
  renderInMathJaxContext(<MarkdownRenderer contentBlocks={contentBlocks} />);
  const ul = screen.getByRole('list');
  expect(ul).toBeInTheDocument();
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(2);

  const mathjaxItem1 = listItems[0].querySelector('[data-testid="mathjax-inline-mock"]');
  expect(mathjaxItem1).toHaveTextContent('Elemento 1');

  const mathjaxItem2 = listItems[1].querySelector('[data-testid="mathjax-inline-mock"]');
  expect(mathjaxItem2).toHaveTextContent('Elemento 2 en negrita');
  expect(mathjaxItem2.querySelector('strong')).toHaveTextContent('Elemento 2 en negrita');
});

it('H.1.5. Debería representar bloques matemáticos', () => {
  const latexContent = '\\sum_{i=0}^n i^2';
  const contentBlocks = [{ type: 'mathblock', latex: latexContent }];
  renderInMathJaxContext(<MarkdownRenderer contentBlocks={contentBlocks} />);

  const mathBlock = screen.getByTestId('mathjax-block-mock');
  expect(mathBlock).toBeInTheDocument();
  expect(mathBlock).toHaveTextContent(latexContent);
});

it('H.1.6. Debería representar correctamente los bloques de contenido mixto de texto y títulos', () => {
  const contentBlocks = [
    { type: 'h3', content: [{ type: 'text', value: 'Subtítulo Ejemplo' }] },
    { type: 'p', content: [{ type: 'text', value: 'Algo de texto debajo del subtítulo.' }] },
  ];
  renderInMathJaxContext(<MarkdownRenderer contentBlocks={contentBlocks} />);

  const subtitleTextElement = screen.getByText('Subtítulo Ejemplo');
  const h3Element = subtitleTextElement.closest('h3');
  expect(h3Element).toBeInTheDocument();
  expect(h3Element.tagName).toBe('H3');
  expect(h3Element).toContainElement(screen.getAllByTestId('mathjax-inline-mock')[0]);

  const paragraphTextElement = screen.getByText('Algo de texto debajo del subtítulo.');
  expect(paragraphTextElement.closest('p')).toBeInTheDocument();
  expect(paragraphTextElement.closest('p')).toContainElement(screen.getAllByTestId('mathjax-inline-mock')[1]);
});