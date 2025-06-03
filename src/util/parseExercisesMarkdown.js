function escapeLatexBackslashes(text) {
  if (!text) return "";
  return text;
}

/**
 * Parsea una línea de texto para identificar segmentos de texto normal
 * y fuerte (**). * Aplica escape de barras invertidas de LaTeX a cada segmento.
 * @param {string} text - La línea de texto a parsear.
 * @returns {Array<{type: 'text'|'strong', value: string}>} - Array de segmentos.
 */
function parseInlineFormatting(text) {
  if (!text) return [];

  const segments = [];
  const parts = text.split("**");

  parts.forEach((part, index) => {
    const escapedPart = escapeLatexBackslashes(part);
    if (index % 2 === 0) {
      if (escapedPart) {
        segments.push({ type: "text", value: escapedPart });
      }
    } else {
      segments.push({ type: "strong", value: escapedPart });
    }
  });

  const mergedSegments = [];
  let lastSegment = null;
  for (const segment of segments) {
    if (lastSegment && lastSegment.type === "text" && segment.type === "text") {
      lastSegment.value += segment.value;
    } else {
      if (lastSegment) {
        mergedSegments.push(lastSegment);
      }
      lastSegment = segment;
    }
  }
  if (lastSegment) {
    mergedSegments.push(lastSegment);
  }

  return mergedSegments;
}

function markdownToStructuredJson(markdownString) {
  if (!markdownString || typeof markdownString !== "string") {
    return [];
  }
  const lines = markdownString.trim().split("\n");
  const result = [];
  let i = 0;
  let currentParagraph = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const paragraphText = currentParagraph.join("\n").trim();
      if (paragraphText) {
        const content = parseInlineFormatting(paragraphText);
        if (content.length > 0) {
          result.push({ type: "p", content: content });
        }
      }
      currentParagraph = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "$$") {
      flushParagraph();
      const mathBlockLines = [];
      i++;
      while (i < lines.length && lines[i].trim() !== "$$") {
        mathBlockLines.push(lines[i]);
        i++;
      }
      const latexContent = escapeLatexBackslashes(mathBlockLines.join("\n"));
      result.push({ type: "mathblock", latex: latexContent });
      if (i < lines.length) i++;
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)/);
    if (headingMatch) {
      flushParagraph();
      const level = headingMatch[1].length;
      const headingText = headingMatch[2].trim();
      const content = parseInlineFormatting(headingText);
      if (content.length > 0) {
        result.push({ type: `h${level}`, content: content }); // Usar 'content'
      }
      i++;
      continue;
    }

    // Listas (* o -)
    const listItemMatch = line.match(/^(\*|-)\s+(.*)/);
    if (listItemMatch) {
      flushParagraph();
      const items = [];
      while (i < lines.length) {
        const currentLine = lines[i];
        const currentItemMatch = currentLine.match(/^(\*|-)\s+(.*)/);
        if (currentItemMatch) {
          const itemText = currentItemMatch[2].trim();
          const content = parseInlineFormatting(itemText);
          if (content.length > 0) {
            items.push({ content: content });
          } else {
            items.push({ content: [] });
          }
          i++;
        } else {
          break;
        }
      }
      if (items.length > 0) {
        result.push({ type: "ul", items: items });
      }
      continue;
    }

    if (line.trim() === "") {
      flushParagraph();
      i++;
      continue;
    }

    currentParagraph.push(line);
    i++;
  }

  flushParagraph();
  return result;
}

/**
 * Parsea un string Markdown que contiene múltiples ejercicios,
 * cada uno con formato "## Ejercicio n", "### Planteamiento", "### Solución".
 *
 * @param {string} markdownString - El string Markdown completo.
 * @returns {Object} - Un objeto donde cada clave es 'ejercicioN' y el valor
 *                     es un objeto con 'planteamiento' y 'solucion', cada uno
 *                     conteniendo un array de bloques procesados por
 *                     la función markdownToStructuredJson.
 */
export default function parseExercisesMarkdown(markdownString) {
  if (!markdownString || typeof markdownString !== "string") {
    return {};
  }

  const lines = markdownString.trim().split("\n");
  const exercises = {};
  let currentExerciseKey = null;
  let currentSection = null; // 'planteamiento' o 'solucion'
  let contentBuffer = [];

  const exerciseHeaderRegex = /^##\s+Ejercicio\s+(\d+)\s*$/i;
  const statementHeaderRegex = /^###\s+Planteamiento\s*$/i;
  const solutionHeaderRegex = /^###\s+Solución\s*$/i;

  const processContentBuffer = () => {
    if (currentExerciseKey && currentSection && contentBuffer.length > 0) {
      const sectionContent = contentBuffer.join("\n");
      exercises[currentExerciseKey][currentSection] =
        markdownToStructuredJson(sectionContent);
    }
    contentBuffer = [];
  };

  for (const line of lines) {
    const exerciseMatch = line.match(exerciseHeaderRegex);
    const statementMatch = line.match(statementHeaderRegex);
    const solutionMatch = line.match(solutionHeaderRegex);

    if (exerciseMatch) {
      processContentBuffer();
      const exerciseNumber = exerciseMatch[1];
      currentExerciseKey = `ejercicio${exerciseNumber}`;
      exercises[currentExerciseKey] = { planteamiento: [], solucion: [] };
      currentSection = null;
    } else if (statementMatch && currentExerciseKey) {
      processContentBuffer();
      currentSection = "planteamiento";
    } else if (solutionMatch && currentExerciseKey) {
      processContentBuffer();
      currentSection = "solucion";
    } else if (currentExerciseKey && currentSection) {
      if (line.trim() !== "" || contentBuffer.length > 0) {
        contentBuffer.push(line);
      }
    }
  }

  processContentBuffer();

  return exercises;
}
