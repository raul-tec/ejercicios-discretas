Muy bien, ahora solo me falta agregar un componente que me va a ser para preguntas de opción múltiple. Serán varias preguntas con varias respuestas disponibles. Se podrá seleccionar una respuesta y luego habrá dos botones, uno de "Verificar" y "Ver solución". Cuando se de verificar se marcará si la respuesta es correcta o no con retroalimentación para cada respuesta u opción disponible, es decir, habrá n opciones y 1 de ellas será la correcta pero cada una tendrá un retroalimentación, en el caso de ser correcta pues habría un texto que muestre por qué es la correcta y para las otras incorrectas pues deberá haber un texto mostrado de por qué no es la correcta. El componente podrá tener varias preguntas y se podrá navegar entre ellas (habrá botones de siguiente pregunta o pregunta anterior) y también se podrá seleccionar una pregunta específica (como una navegación sencilla entre las preguntas). Las preguntas se proporcionan en un objeto JavaScript como el siguiente

```js
const cuestionario = {
  titulo: "Cuestionario de Lógica Proposicional e Inducción Matemática",
  preguntas: [
    {
      id: 1,
      enunciado: "¿Cuál es la negación de la proposición $p \\rightarrow q$?",
      respuestas: [
        {
          texto: "$\\neg p \\rightarrow \\neg q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La negación de $p \\rightarrow q$ no es $\\neg p \\rightarrow \\neg q$. Recuerda que $p \\rightarrow q$ es equivalente a $\\neg p \\vee q$, por lo que su negación es $p \\wedge \\neg q$.",
        },
        {
          texto: "$p \\wedge \\neg q$",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. La proposición $p \\rightarrow q$ es equivalente a $\\neg p \\vee q$. Su negación es $\\neg(\\neg p \\vee q)$, que por las leyes de De Morgan se convierte en $p \\wedge \\neg q$.",
        },
        {
          texto: "$\\neg p \\vee q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La expresión $\\neg p \\vee q$ es equivalente a $p \\rightarrow q$, no su negación. La negación correcta es $p \\wedge \\neg q$.",
        },
        {
          texto: "$\\neg p \\wedge q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La negación de $p \\rightarrow q$ debe invalidar la implicación, lo que ocurre cuando $p$ es verdadero y $q$ es falso, es decir, $p \\wedge \\neg q$. La expresión $\\neg p \\wedge q$ no cumple este criterio.",
        },
      ],
    },
    {
      id: 2,
      enunciado:
        "En lógica proposicional, ¿cuál es la equivalencia de $\\neg (p \\wedge q)$?",
      respuestas: [
        {
          texto: "$\\neg p \\wedge \\neg q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Por las leyes de De Morgan, la negación de una conjunción, $\\neg (p \\wedge q)$, es equivalente a $\\neg p \\vee \\neg q$, no a $\\neg p \\wedge \\neg q$.",
        },
        {
          texto: "$\\neg p \\vee \\neg q$",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. Según las leyes de De Morgan, $\\neg (p \\wedge q)$ es equivalente a $\\neg p \\vee \\neg q$. Esto se deriva porque la negación de una conjunción distribuye la negación a cada proposición con un cambio de operador a disyunción.",
        },
        {
          texto: "$p \\vee q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La expresión $p \\vee q$ no es la negación de $p \\wedge q$. La negación correcta es $\\neg p \\vee \\neg q$.",
        },
        {
          texto: "$\\neg p \\rightarrow q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La expresión $\\neg p \\rightarrow q$ no es equivalente a $\\neg (p \\wedge q)$. La equivalencia correcta es $\\neg p \\vee \\neg q$.",
        },
      ],
    },
    {
      id: 3,
      enunciado:
        "Usando inducción matemática, demuestra que $1 + 3 + 5 + \\dots + (2n-1) = n^2$ para todo $n \\geq 1$. ¿Cuál es el paso base?",
      respuestas: [
        {
          texto: "Verificar que para $n=0$, $0 = 0^2$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La proposición es válida para $n \\geq 1$, por lo que $n=0$ no es un caso base válido. El caso base correcto es $n=1$, donde $1 = 1^2$.",
        },
        {
          texto: "Verificar que para $n=1$, $1 = 1^2$.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. En inducción matemática, el paso base consiste en verificar la proposición para el menor valor de $n$. Aquí, para $n=1$, la suma es $1$, y $1^2 = 1$, por lo que se cumple.",
        },
        {
          texto: "Verificar que para $n=2$, $1 + 3 = 2^2$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Aunque el caso $n=2$ es válido ($1 + 3 = 4 = 2^2$), el paso base debe ser el menor valor de $n$, que es $n=1$.",
        },
        {
          texto: "No se necesita un paso base.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. En una demostración por inducción matemática, siempre se requiere un paso base para establecer que la proposición es verdadera para el valor inicial, en este caso $n=1$.",
        },
      ],
    },
  ],
};
```

Como se observa se pueden tener sintaxis de ecuaciones matemáticas ($...$) dentro del enunciado, texto y retroalimentación y estos se deben mostrar de forma correcta en la página.
