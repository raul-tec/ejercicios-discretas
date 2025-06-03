const cuestionarioData = {
  titulo: "Cuestionario de Inducción Matemática",
  preguntas: [
    {
      id: 1,
      enunciado:
        "¿Cuál es el propósito del paso base (o caso base) en una demostración por inducción matemática?",
      respuestas: [
        {
          texto:
            "Asumir que la proposición $P(k)$ es verdadera para un entero arbitrario $k$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto describe la Hipótesis Inductiva, no el Paso Base. El Paso Base establece un punto de partida.",
        },
        {
          texto:
            "Demostrar que si $P(k)$ es verdadera, entonces $P(k+1)$ también lo es.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto describe el Paso Inductivo. El Paso Base es el primer eslabón de la cadena.",
        },
        {
          texto:
            "Establecer que la proposición $P(n_0)$ es verdadera para un valor inicial específico $n_0$.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. El Paso Base verifica que la proposición se cumple para el primer valor (usualmente $n=0$ o $n=1$), proporcionando el anclaje para la 'cadena de dominós' inductiva.",
        },
        {
          texto:
            "Concluir que la proposición $P(n)$ es verdadera para todos los enteros $n \\ge n_0$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esta es la conclusión general de la prueba por inducción, no el propósito del Paso Base en sí mismo.",
        },
      ],
    },
    {
      id: 2,
      enunciado:
        "En el paso inductivo de una prueba por inducción, ¿qué se asume y qué se debe demostrar?",
      respuestas: [
        {
          texto: "Se asume $P(k+1)$ y se demuestra $P(k)$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto es invertir la lógica de la inducción. Se asume para $k$ y se prueba para $k+1$.",
        },
        {
          texto:
            "Se asume $P(k)$ para algún entero $k \\ge n_0$ (Hipótesis Inductiva) y se debe demostrar $P(k+1)$.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. Esta es la esencia del Paso Inductivo: mostrar que la veracidad de la proposición para un caso $k$ implica su veracidad para el siguiente caso $k+1$.",
        },
        {
          texto: "Se asume $P(n_0)$ y se demuestra $P(k)$ para todo $k > n_0$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. $P(n_0)$ se establece en el Paso Base. El Paso Inductivo se enfoca en la transición de $k$ a $k+1$.",
        },
        {
          texto:
            "Se asume $P(k)$ para todo $k \\ge n_0$ y se demuestra que esto es útil.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. No se asume $P(k)$ para todo $k$ en la hipótesis inductiva (eso es lo que se quiere probar al final). Se asume para un $k$ arbitrario y se demuestra $P(k+1)$.",
        },
      ],
    },
    {
      id: 3,
      enunciado:
        "Si queremos probar por inducción que $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$ para todo $n \\ge 1$. ¿Cuál sería la formulación correcta de la hipótesis inductiva?",
      respuestas: [
        {
          texto:
            "Asumir que $\\sum_{i=1}^{k} i = \\frac{k(k+1)}{2}$ es verdadero para algún entero $k \\ge 1$.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. La Hipótesis Inductiva consiste en suponer que la propiedad $P(k)$ es cierta para un entero arbitrario $k$ (mayor o igual al valor del caso base).",
        },
        {
          texto:
            "Asumir que $\\sum_{i=1}^{1} i = \\frac{1(1+1)}{2}$ es verdadero.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto es parte del Paso Base (para $n=1$), no la Hipótesis Inductiva.",
        },
        {
          texto:
            "Asumir que $\\sum_{i=1}^{k+1} i = \\frac{(k+1)(k+2)}{2}$ es verdadero para algún entero $k \\ge 1$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto es lo que se debe demostrar en el Paso Inductivo (la tesis inductiva $P(k+1)$), no lo que se asume.",
        },
        {
          texto:
            "Asumir que $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$ es verdadero para todo entero $n \\ge 1$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto es lo que se intenta probar globalmente. La hipótesis inductiva es una suposición para un $k$ específico.",
        },
      ],
    },
    {
      id: 4,
      enunciado:
        "¿Cuál es una diferencia clave entre la inducción matemática estándar (o débil) y la inducción fuerte (o completa)?",
      respuestas: [
        {
          texto:
            "En la inducción fuerte, la Hipótesis Inductiva asume que $P(j)$ es verdadera para todos los enteros $j$ desde el caso base $n_0$ hasta $k$, para demostrar $P(k+1)$.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. En la inducción estándar se asume solo $P(k)$, mientras que en la fuerte se asume $P(n_0), P(n_0+1), \\dots, P(k)$ para probar $P(k+1)$.",
        },
        {
          texto: "La inducción fuerte no requiere un Paso Base.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Ambas formas de inducción requieren un Paso Base (o a veces múltiples casos base para la inducción fuerte).",
        },
        {
          texto:
            "La inducción estándar solo se usa para igualdades, y la fuerte para desigualdades.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Ambas pueden usarse para diversos tipos de proposiciones, incluyendo igualdades, desigualdades, propiedades de divisibilidad, etc.",
        },
        {
          texto:
            "La inducción fuerte es lógicamente más débil que la inducción estándar.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La inducción fuerte y la estándar son lógicamente equivalentes. La inducción fuerte parece 'más fuerte' porque la hipótesis es más amplia, pero se puede demostrar que cualquier prueba por una puede ser convertida a una prueba por la otra.",
        },
      ],
    },
    {
      id: 5,
      enunciado:
        "Al probar que $n^3 - n$ es divisible por 3 para todo $n \\ge 1$. En el paso inductivo, tras asumir que $k^3 - k$ es divisible por 3 (es decir, $k^3 - k = 3m$ para algún entero $m$), ¿qué expresión se debe analizar para $P(k+1)$?",
      respuestas: [
        {
          texto: "$(k+1)^3 - k$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La proposición $P(n)$ es '$n^3 - n$ es divisible por 3'. Para $P(k+1)$, debemos sustituir $n$ por $k+1$ en toda la expresión.",
        },
        {
          texto: "$k^3 - (k+1)$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Se debe sustituir $n$ por $k+1$ en ambas apariciones de $n$ en la expresión original $n^3 - n$.",
        },
        {
          texto: "$3(k+1)$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto sería el objetivo (mostrar que es un múltiplo de 3), pero no es la expresión inicial de $P(k+1)$ que se debe analizar.",
        },
        {
          texto: "$(k+1)^3 - (k+1)$",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. Para $P(k+1)$, sustituimos $n$ por $k+1$ en la expresión $n^3 - n$, obteniendo $(k+1)^3 - (k+1)$. Luego se manipula algebraicamente para usar la hipótesis inductiva.",
        },
      ],
    },
    {
      id: 6,
      enunciado:
        "¿Para qué tipo de conjuntos de números es principalmente aplicable el principio de inducción matemática?",
      respuestas: [
        {
          texto: "Números reales ($\\mathbb{R}$).",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La inducción se basa en la propiedad de buen orden y la estructura discreta de los naturales (o enteros a partir de un punto), no en la continuidad de los reales.",
        },
        {
          texto: "Números complejos ($\\mathbb{C}$).",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Al igual que con los reales, la estructura de los complejos no se presta directamente a la inducción estándar de la misma manera que los naturales.",
        },
        {
          texto:
            "Números naturales ($\\mathbb{N}$) o subconjuntos de enteros que tienen un elemento mínimo y una estructura sucesora bien definida (ej. $n \\ge n_0$).",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. La inducción matemática se fundamenta en las propiedades de los números naturales (o conjuntos isomorfos a ellos, como los enteros a partir de un $n_0$).",
        },
        {
          texto: "Números racionales ($\\mathbb{Q}$).",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Los números racionales son densos (entre dos racionales siempre hay otro), lo que no permite el 'salto' discreto de $k$ a $k+1$ de la inducción.",
        },
      ],
    },
    {
      id: 7,
      enunciado:
        "Si en una prueba por inducción se omite el Paso Base pero se demuestra correctamente el Paso Inductivo ($P(k) \\rightarrow P(k+1)$), ¿qué se puede concluir?",
      respuestas: [
        {
          texto: "La proposición $P(n)$ es verdadera para todo $n \\ge n_0$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Sin el Paso Base, la 'cadena de dominós' nunca comienza a caer. No se puede afirmar la veracidad de $P(n)$.",
        },
        {
          texto: "La proposición $P(n)$ es falsa para todo $n \\ge n_0$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. No se puede concluir que sea falsa; simplemente la prueba está incompleta.",
        },
        {
          texto:
            "Que si $P(n)$ fuera verdadera para algún $n_0$, entonces sería verdadera para todos los $n \\ge n_0$, pero no se ha establecido que sea verdadera para ningún $n_0$.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. El Paso Inductivo establece la conexión ('si un dominó cae, el siguiente también'), pero sin el Paso Base ('el primer dominó cae'), la secuencia no se inicia.",
        },
        {
          texto: "La proposición $P(n)$ es verdadera solo para $n=k+1$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. El Paso Inductivo es una implicación, no establece la veracidad de $P(k+1)$ por sí solo.",
        },
      ],
    },
    {
      id: 8,
      enunciado:
        "Al intentar probar que $2^n < n!$ para $n \\ge 4$. El Paso Base es verificar para $n=4$: $2^4 = 16 < 4! = 24$, lo cual es cierto. En el Paso Inductivo, se asume $2^k < k!$ para $k \\ge 4$. Se quiere probar $2^{k+1} < (k+1)!$. ¿Cuál es una manipulación algebraica clave?",
      respuestas: [
        {
          texto:
            "Escribir $2^{k+1} = 2 \\cdot 2^k$ y $(k+1)! = (k+1) \\cdot k!$.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. Se expresa $2^{k+1}$ como $2 \\cdot 2^k$. Usando la H.I. ($2^k < k!$), se tiene $2 \\cdot 2^k < 2 \\cdot k!$. Luego se compara $2 \\cdot k!$ con $(k+1)! = (k+1) \\cdot k!$. Como $k \\ge 4$, entonces $k+1 > 2$, por lo que $2 \\cdot k! < (k+1) \\cdot k!$.",
        },
        {
          texto:
            "Sumar 1 a ambos lados de $2^k < k!$, obteniendo $2^k+1 < k!+1$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Aunque es una manipulación válida, no lleva directamente a relacionar $2^{k+1}$ con $(k+1)!$ de la forma necesaria.",
        },
        {
          texto:
            "Asumir directamente que $2^{k+1} < (k+1)!$ sin usar la hipótesis inductiva.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto es un error común de razonamiento circular. Se debe derivar $P(k+1)$ a partir de $P(k)$.",
        },
        {
          texto: "Probar que $2 < k+1$ y luego multiplicar por $2^k < k!$.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. No se pueden multiplicar desigualdades de esa manera directamente para obtener el resultado deseado. La clave es usar la H.I. sobre $2^k$ y luego relacionar el factor 2 con $k+1$.",
        },
      ],
    },
    {
      id: 9,
      enunciado:
        "¿Qué error común se comete si, en el paso inductivo, se empieza con $P(k+1)$ y se manipula hasta llegar a $P(k)$ y se declara que como $P(k)$ es verdadera (por H.I.), entonces $P(k+1)$ también lo es?",
      respuestas: [
        {
          texto: "Ninguno, es una técnica válida llamada inducción inversa.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La inducción inversa (o descendente) es una técnica válida pero diferente. El error descrito es asumir lo que se quiere probar.",
        },
        {
          texto:
            "Se está asumiendo implícitamente la veracidad de $P(k+1)$ para demostrarla, lo cual es un razonamiento circular.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. Se debe partir de la Hipótesis Inductiva $P(k)$ y, mediante pasos lógicos y algebraicos, llegar a $P(k+1)$. Empezar con $P(k+1)$ y trabajar hacia atrás puede llevar a asumir lo que se quiere probar si no se tiene cuidado de que los pasos sean equivalencias o implicaciones en la dirección correcta.",
        },
        {
          texto:
            "Es un método correcto si todos los pasos algebraicos son reversibles (equivalencias).",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Aunque los pasos sean reversibles, la estructura lógica de la prueba inductiva es $P(k) \\rightarrow P(k+1)$. Empezar por $P(k+1)$ y llegar a una verdad (como $P(k)$ por H.I.) no prueba $P(k+1)$ a menos que se demuestre $P(k) \\leftrightarrow P(k+1)$, lo cual es más fuerte y no siempre el caso.",
        },
        {
          texto: "Este error solo invalida la prueba si $P(k)$ es falsa.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. El error es de estructura lógica, independientemente del valor de verdad de $P(k)$. La H.I. asume $P(k)$ verdadera para probar $P(k+1)$.",
        },
      ],
    },
    {
      id: 10,
      enunciado: "La inducción matemática es lógicamente equivalente a:",
      respuestas: [
        {
          texto: "El principio de contradicción.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. El principio de contradicción es un pilar de la lógica, pero no es equivalente a la inducción.",
        },
        {
          texto: "El Axioma de Elección.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. El Axioma de Elección es un principio de la teoría de conjuntos, más fuerte y con implicaciones diferentes a la inducción sobre los naturales.",
        },
        {
          texto:
            "El Principio del Buen Orden para los números naturales (todo subconjunto no vacío de $\\mathbb{N}$ tiene un elemento mínimo).",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. Se puede demostrar que el Principio de Inducción Matemática y el Principio del Buen Orden para los números naturales son lógicamente equivalentes. Uno puede derivarse del otro.",
        },
        {
          texto: "La completitud de los números reales.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La completitud de los reales (e.g., toda sucesión de Cauchy converge) es una propiedad de $\\mathbb{R}$, mientras que la inducción se aplica a $\\mathbb{N}$.",
        },
      ],
    },
  ],
};

export default cuestionarioData;
