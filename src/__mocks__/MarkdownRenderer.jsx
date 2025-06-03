export const MathJaxContext = ({ children }) => <div data-testid="mathjax-context">{children}</div>;
export const MathJax = ({ children, inline }) => (
    <span data-testid={inline ? "mathjax-inline" : "mathjax-block"}>
        {typeof children === 'string' && !inline && (children.startsWith('$$') && children.endsWith('$$')) ?
            children.substring(2, children.length - 2) :
            children
        }
    </span>
);