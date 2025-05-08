import React from 'react';
import { MathJax } from 'better-react-mathjax';

// Componente para contenido inline con MathJax
const InlineContentRenderer = ({ content }) => {

  if (!content || content.length === 0) return null;

  return (
    <MathJax hideUntilTypeset="first" dynamic>
      {content.map((segment, index) => {
        if (segment.type === 'strong') {
          return segment.value ? <strong key={index}>{segment.value}</strong> : <React.Fragment key={index} />;
        } else {
          return segment.value ? <React.Fragment key={index}>{segment.value}</React.Fragment> : <React.Fragment key={index} />;
        }
      })}
    </MathJax>
  );
};

// Renderizado principal con estilos responsivos
const MarkdownRenderer = ({ contentBlocks }) => {
  if (!contentBlocks || contentBlocks.length === 0) {
    return <p><i>Contenido no disponible.</i></p>;
  }

  return (
    <div className="text-justify">
      {contentBlocks.map((item, index) => {
        switch (item.type) {
          case "h1":
            return <h1 key={index}><InlineContentRenderer content={item.content} /></h1>;
          case "h2":
            return <h2 key={index}><InlineContentRenderer content={item.content} /></h2>;
          case "h3":
            return <h3 key={index}><InlineContentRenderer content={item.content} /></h3>;
          case "h4":
            return <h4 key={index}><InlineContentRenderer content={item.content} /></h4>;
          case "h5":
            return <h5 key={index}><InlineContentRenderer content={item.content} /></h5>;
          case "h6":
            return <h6 key={index}><InlineContentRenderer content={item.content} /></h6>;

          case "p":
            return (
              <p key={index} className='overflow-y-visible overflow-x-auto md:overflow-y-auto md:overflow-x-visible'>
                <InlineContentRenderer content={item.content} />
              </p>
            );

          case "ul":
            return (
              <ul key={index} className="list-disc list-inside">
                {item.items.map((listItem, liIndex) => (
                  <li key={liIndex} className='overflow-y-visible overflow-x-auto md:overflow-y-auto md:overflow-x-visible'>
                    <InlineContentRenderer content={listItem.content} />
                  </li>
                ))}
              </ul>
            );

          case "mathblock":
            return (
              <div
                key={index}
                className="my-6 text-center overflow-y-visible overflow-x-auto md:overflow-y-auto md:overflow-x-visible"
              >
                <MathJax hideUntilTypeset="first" dynamic>{`$$${item.latex}$$`}</MathJax>
              </div>
            );
          default:
            console.warn("Unsupported block type in renderer:", item.type);
            return null;
        }
      })}
    </div>
  );
};

export default MarkdownRenderer;
