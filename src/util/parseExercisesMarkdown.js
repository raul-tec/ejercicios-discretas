function escapeLatexBackslashes(text) {
  if (!text) return "";
  //return text.replace(/\\/g, "\\\\");
  return text;
}

/**
 * Parsea una línea de texto para identificar segmentos de texto normal y fuerte (**).
 * Aplica escape de barras invertidas de LaTeX a cada segmento.
 * @param {string} text - La línea de texto a parsear.
 * @returns {Array<{type: 'text'|'strong', value: string}>} - Array de segmentos.
 */
function parseInlineFormatting(text) {
  if (!text) return [];

  const segments = [];
  const parts = text.split("**"); // Divide el texto por el delimitador strong

  parts.forEach((part, index) => {
    const escapedPart = escapeLatexBackslashes(part); // Escapa LaTeX en cada parte
    if (index % 2 === 0) {
      // Partes en índices pares son texto normal (o vacías si empieza/termina con **)
      if (escapedPart) {
        // Evita añadir segmentos de texto vacíos innecesarios
        segments.push({ type: "text", value: escapedPart });
      }
    } else {
      // Partes en índices impares son texto fuerte
      // Incluso si está vacío (**), lo añadimos como strong vacío.
      segments.push({ type: "strong", value: escapedPart });
    }
  });

  // Optimización: Fusionar segmentos de texto adyacentes (puede ocurrir si había ****)
  const mergedSegments = [];
  let lastSegment = null;
  for (const segment of segments) {
    if (lastSegment && lastSegment.type === "text" && segment.type === "text") {
      lastSegment.value += segment.value; // Fusionar
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

// Función para parsear bloques (ya definida, la usaremos internamente)
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
      // Unir líneas, luego parsear formato inline
      const paragraphText = currentParagraph.join("\n").trim();
      if (paragraphText) {
        // *** CAMBIO CLAVE AQUÍ ***
        const content = parseInlineFormatting(paragraphText);
        if (content.length > 0) {
          result.push({ type: "p", content: content }); // Usar 'content' en lugar de 'text'
        }
      }
      currentParagraph = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    // Bloques Matemáticos ($$) - SIN CAMBIOS EN SU LÓGICA INTERNA
    if (line.trim() === "$$") {
      flushParagraph();
      const mathBlockLines = [];
      i++;
      while (i < lines.length && lines[i].trim() !== "$$") {
        mathBlockLines.push(lines[i]);
        i++;
      }
      // NO aplicar parseInlineFormatting aquí, es LaTeX puro
      const latexContent = escapeLatexBackslashes(mathBlockLines.join("\n"));
      result.push({ type: "mathblock", latex: latexContent });
      if (i < lines.length) i++;
      continue;
    }

    // Encabezados (#) - Se asume que no contienen ** (o se trataría como texto literal)
    const headingMatch = line.match(/^(#{1,6})\s+(.*)/);
    if (headingMatch) {
      flushParagraph();
      const level = headingMatch[1].length;
      // *** CAMBIO CLAVE AQUÍ *** (parsear inline también en encabezados)
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
          // *** CAMBIO CLAVE AQUÍ ***
          const content = parseInlineFormatting(itemText);
          if (content.length > 0) {
            // Cada item es ahora un objeto con su propio 'content' array
            items.push({ content: content });
          } else {
            items.push({ content: [] }); // Añadir item vacío si era '* '
          }
          i++;
        } else {
          break;
        }
      }
      if (items.length > 0) {
        // El tipo 'ul' ahora contiene un array de objetos item, no strings
        result.push({ type: "ul", items: items });
      }
      continue;
    }

    // Líneas en Blanco - SIN CAMBIOS
    if (line.trim() === "") {
      flushParagraph();
      i++;
      continue;
    }

    // Acumular líneas de Párrafo - SIN CAMBIOS
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
 *                     conteniendo un array de bloques parseados por markdownToStructuredJson.
 */
export default function parseExercisesMarkdown(markdownString) {
  if (!markdownString || typeof markdownString !== "string") {
    return {};
  }

  const lines = markdownString.trim().split("\n");
  const exercises = {};
  let currentExerciseKey = null;
  let currentSection = null; // 'planteamiento', 'solucion', or null
  let contentBuffer = [];

  // Regex para identificar los marcadores principales
  const exerciseHeaderRegex = /^##\s+Ejercicio\s+(\d+)\s*$/i;
  const statementHeaderRegex = /^###\s+Planteamiento\s*$/i;
  const solutionHeaderRegex = /^###\s+Solución\s*$/i;

  const processContentBuffer = () => {
    if (currentExerciseKey && currentSection && contentBuffer.length > 0) {
      const sectionContent = contentBuffer.join("\n");
      // Esta llamada usará la nueva versión que devuelve 'content' arrays
      exercises[currentExerciseKey][currentSection] =
        markdownToStructuredJson(sectionContent);
    }
    contentBuffer = []; // Limpiar buffer
  };

  for (const line of lines) {
    const exerciseMatch = line.match(exerciseHeaderRegex);
    const statementMatch = line.match(statementHeaderRegex);
    const solutionMatch = line.match(solutionHeaderRegex);

    if (exerciseMatch) {
      // Encontramos un nuevo ejercicio
      processContentBuffer(); // Procesar el contenido de la sección anterior (si existe)
      const exerciseNumber = exerciseMatch[1];
      currentExerciseKey = `ejercicio${exerciseNumber}`;
      exercises[currentExerciseKey] = { planteamiento: [], solucion: [] }; // Inicializar objeto para este ejercicio
      currentSection = null; // Resetea la sección actual
    } else if (statementMatch && currentExerciseKey) {
      // Encontramos el encabezado de Planteamiento
      processContentBuffer(); // Procesar el contenido anterior (si lo había, improbable aquí pero seguro)
      currentSection = "planteamiento";
    } else if (solutionMatch && currentExerciseKey) {
      // Encontramos el encabezado de Solución
      processContentBuffer(); // Procesar el contenido de la sección 'planteamiento'
      currentSection = "solucion";
    } else if (currentExerciseKey && currentSection) {
      // Si estamos dentro de un ejercicio y una sección, acumulamos la línea
      // Evitamos añadir líneas completamente vacías al inicio de una sección
      if (line.trim() !== "" || contentBuffer.length > 0) {
        contentBuffer.push(line);
      }
    }
    // Ignoramos líneas que no pertenezcan a ninguna sección de un ejercicio (ej. intro general)
  }

  // Procesar el contenido de la última sección del último ejercicio
  processContentBuffer();

  return exercises;
}
