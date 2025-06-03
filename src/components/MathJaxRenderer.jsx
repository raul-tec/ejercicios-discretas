import { MathJax } from 'better-react-mathjax';

const MathJaxRenderer = ({ content }) => {
    if (typeof content !== 'string') {
        return null;
    }
    return (
        <MathJax hideUntilTypeset={"first"} inline dynamic>
            {content}
        </MathJax>
    );
};

export default MathJaxRenderer;