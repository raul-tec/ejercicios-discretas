const cuestionarioData = {
  titulo: "Cuestionario de Lógica Proposicional",
  preguntas: [
    {
      id: 1,
      enunciado:
        'Considera la afirmación: "Esta oración es falsa". ¿Es una proposición lógica válida?',
      respuestas: [
        {
          texto: "Sí, y es verdadera.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Si fuera verdadera, entonces lo que afirma ('Esta oración es falsa') sería cierto, lo que la haría falsa. Esto es una contradicción.",
        },
        {
          texto: "Sí, y es falsa.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Si fuera falsa, entonces lo que afirma ('Esta oración es falsa') sería falso, lo que significaría que la oración es en realidad verdadera. Esto es una contradicción.",
        },
        {
          texto:
            "No, porque es una paradoja y no se le puede asignar un valor de verdad consistente.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. Esta es la paradoja del mentiroso. No se le puede asignar un valor de verdad (verdadero o falso) sin incurrir en una contradicción, por lo que no se considera una proposición lógica bien formada en la lógica proposicional.",
        },
        {
          texto: "Sí, porque es una oración declarativa.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Aunque tiene forma declarativa, su naturaleza autorreferencial y contradictoria impide que se le asigne un valor de verdad de manera consistente, que es un requisito para ser una proposición lógica.",
        },
      ],
    },
    {
      id: 2,
      enunciado:
        'Sean $p$: "Llueve", $q$: "Hace frío" y $r$: "Llevo paraguas". ¿Cuál es la simbolización correcta de la frase: "Si llueve y hace frío, entonces llevo paraguas, pero si no llueve, no llevo paraguas"?',
      respuestas: [
        {
          texto:
            "$( (p \\wedge q) \\rightarrow r ) \\wedge (\\neg p \\rightarrow \\neg r)$",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. 'Si llueve y hace frío, entonces llevo paraguas' se traduce como $(p \\wedge q) \\rightarrow r$. 'Pero si no llueve, no llevo paraguas' se traduce como $(\\neg p \\rightarrow \\neg r)$. La palabra 'pero' actúa como una conjunción entre estas dos implicaciones.",
        },
        {
          texto:
            "$(p \\wedge q \\rightarrow r) \\vee (\\neg p \\rightarrow \\neg r)$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La palabra 'pero' generalmente indica una conjunción ($\\wedge$), no una disyunción ($\\vee$) entre las dos partes principales de la frase.",
        },
        {
          texto:
            "$(p \\vee q) \\rightarrow r \\wedge \\neg p \\rightarrow \\neg r$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. 'Llueve y hace frío' es una conjunción ($p \\wedge q$), no una disyunción ($p \\vee q$). Además, faltan paréntesis para agrupar correctamente las implicaciones y la conjunción principal.",
        },
        {
          texto:
            "$p \\wedge q \\rightarrow (r \\wedge (\\neg p \\rightarrow \\neg r))$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La estructura de la frase indica dos implicaciones separadas unidas por 'pero'. Esta opción anida incorrectamente la segunda implicación dentro del consecuente de la primera.",
        },
      ],
    },
    {
      id: 3,
      enunciado:
        "En lógica proposicional, ¿cuál es la equivalencia de $\\neg (p \\wedge q)$ según las Leyes de De Morgan?",
      respuestas: [
        {
          texto: "$\\neg p \\wedge \\neg q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Por las leyes de De Morgan, la negación de una conjunción, $\\neg (p \\wedge q)$, es equivalente a la disyunción de las negaciones: $\\neg p \\vee \\neg q$.",
        },
        {
          texto: "$\\neg p \\vee \\neg q$",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. Según las leyes de De Morgan, $\\neg (p \\wedge q)$ es lógicamente equivalente a $\\neg p \\vee \\neg q$.",
        },
        {
          texto: "$p \\vee q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La expresión $p \\vee q$ no es la negación de $p \\wedge q$. La negación correcta es $\\neg p \\vee \\neg q$.",
        },
        {
          texto: "$\\neg (p \\vee q)$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto sería $\\neg p \\wedge \\neg q$ por De Morgan, no la equivalencia de $\\neg (p \\wedge q)$.",
        },
      ],
    },
    {
      id: 4,
      enunciado:
        "¿En qué único caso la proposición condicional $p \\rightarrow q$ es falsa?",
      respuestas: [
        {
          texto: "Cuando $p$ es verdadera y $q$ es falsa.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. La implicación $p \\rightarrow q$ (léase 'si $p$, entonces $q$') es falsa únicamente cuando el antecedente $p$ es verdadero y el consecuente $q$ es falso.",
        },
        {
          texto: "Cuando $p$ es falsa y $q$ es verdadera.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Si el antecedente $p$ es falso, la implicación $p \\rightarrow q$ siempre es verdadera, independientemente del valor de $q$.",
        },
        {
          texto: "Cuando tanto $p$ como $q$ son falsas.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Si $p$ es falsa y $q$ es falsa, la implicación $p \\rightarrow q$ es verdadera.",
        },
        {
          texto: "Cuando tanto $p$ como $q$ son verdaderas.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Si $p$ es verdadera y $q$ es verdadera, la implicación $p \\rightarrow q$ es verdadera.",
        },
      ],
    },
    {
      id: 13,
      enunciado:
        "Si se sabe que $p \\vee q$ es verdadero y también se sabe que $\\neg p$ es verdadero, ¿qué se puede inferir usando la regla del Silogismo Disyuntivo?",
      respuestas: [
        {
          texto: "$p$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La premisa establece $\\neg p$, por lo que $p$ no puede ser la conclusión.",
        },
        {
          texto: "$\\neg q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Si $p \\vee q$ es V y $\\neg p$ es V (lo que significa que $p$ es F), entonces $q$ debe ser V para que la disyunción sea V.",
        },
        {
          texto: "$q$",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. El Silogismo Disyuntivo establece que si tenemos una disyunción $p \\vee q$ que es verdadera, y una de las proposiciones es falsa (en este caso, $\\neg p$ implica que $p$ es falsa), entonces la otra proposición debe ser verdadera ($q$).",
        },
        {
          texto: "$p \\leftrightarrow q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. No hay suficiente información para establecer una bicondicional entre $p$ y $q$.",
        },
      ],
    },
    {
      id: 6,
      enunciado:
        "¿Cuál es la contrapositiva de la implicación $p \\rightarrow q$?",
      respuestas: [
        {
          texto: "$q \\rightarrow p$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto se llama la recíproca (o conversa) de la implicación, no la contrapositiva.",
        },
        {
          texto: "$\\neg p \\rightarrow \\neg q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esto se llama la inversa de la implicación, no la contrapositiva.",
        },
        {
          texto: "$\\neg q \\rightarrow \\neg p$",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. La contrapositiva de $p \\rightarrow q$ se forma negando ambas proposiciones y cambiando el orden, resultando en $\\neg q \\rightarrow \\neg p$. Es lógicamente equivalente a la implicación original.",
        },
        {
          texto: "$p \\wedge \\neg q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esta es la negación de la implicación $p \\rightarrow q$.",
        },
      ],
    },
    {
      id: 7,
      enunciado:
        "La regla de inferencia Modus Ponens establece que si tenemos las premisas $p \\rightarrow q$ y $p$, podemos concluir:",
      respuestas: [
        {
          texto: "$\\neg q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Concluir $\\neg q$ a partir de $p \\rightarrow q$ y $p$ sería una falacia.",
        },
        {
          texto: "$q$",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. Modus Ponens (modo que afirmando afirma) permite concluir $q$ si se sabe que $p \\rightarrow q$ es verdadero y $p$ es verdadero.",
        },
        {
          texto: "$\\neg p$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. No se puede concluir $\\neg p$ con estas premisas usando Modus Ponens.",
        },
        {
          texto: "$p \\wedge q$",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Aunque $p$ y $q$ son verdaderos en este escenario, la conclusión directa del Modus Ponens es $q$.",
        },
      ],
    },
    {
      id: 8,
      enunciado:
        "Dado el argumento:\n1. Si estudio, aprobaré el examen ($p \\rightarrow q$).\n2. Estudié ($p$).\n¿Cuál es la conclusión válida según Modus Ponens?",
      respuestas: [
        {
          texto: "No estudié ($\\neg p$)",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. La premisa 2 afirma que 'Estudié' ($p$). La conclusión no puede ser su negación.",
        },
        {
          texto: "Aprobaré el examen ($q$)",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. Modus Ponens es una regla de inferencia válida que establece que si una implicación $p \\rightarrow q$ es verdadera y su antecedente $p$ es verdadero, entonces su consecuente $q$ debe ser verdadero.",
        },
        {
          texto: "No aprobaré el examen ($\\neg q$)",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Esta conclusión no se sigue lógicamente de las premisas dadas mediante Modus Ponens. Para concluir $\\neg q$, necesitaríamos Modus Tollens y la premisa $\\neg q$.",
        },
        {
          texto: "Si no apruebo, no estudié ($\\neg q \\rightarrow \\neg p$)",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Aunque $\\neg q \\rightarrow \\neg p$ es la contrapositiva de la premisa 1 y por lo tanto lógicamente equivalente a ella, no es la conclusión del argumento usando Modus Ponens con las premisas dadas.",
        },
      ],
    },
    {
      id: 9,
      enunciado:
        "¿Cuándo es verdadera la proposición bicondicional $p \\leftrightarrow q$?",
      respuestas: [
        {
          texto: "Cuando $p$ es verdadera y $q$ es falsa.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Si $p$ y $q$ tienen diferentes valores de verdad, la bicondicional $p \\leftrightarrow q$ es falsa.",
        },
        {
          texto: "Únicamente cuando $p$ es verdadera.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Si $p$ es verdadera pero $q$ es falsa, $p \\leftrightarrow q$ es falsa. El valor de $q$ también es crucial.",
        },
        {
          texto:
            "Cuando $p$ y $q$ tienen el mismo valor de verdad (ambas V o ambas F).",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. La bicondicional $p \\leftrightarrow q$ (léase '$p$ si y solo si $q$') es verdadera si $p$ y $q$ son ambas verdaderas, o si $p$ y $q$ son ambas falsas.",
        },
        {
          texto: "Únicamente cuando $q$ es verdadera.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Si $q$ es verdadera pero $p$ es falsa, $p \\leftrightarrow q$ es falsa. El valor de $p$ también es crucial.",
        },
      ],
    },
    {
      id: 10,
      enunciado:
        "La proposición $(p \\rightarrow q) \\wedge (\\neg p \\rightarrow r)$ es un ejemplo de:",
      respuestas: [
        {
          texto: "Una regla de inferencia simple como Modus Ponens.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Modus Ponens tiene una estructura diferente ($P \\rightarrow Q, P \\vdash Q$).",
        },
        {
          texto: "Una tautología.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. No es necesariamente siempre verdadera. Por ejemplo, si $p=V, q=F, r=F$, entonces $(V \\rightarrow F) \\wedge (F \\rightarrow F)$ es $F \\wedge V$, que es $F$.",
        },
        {
          texto: "Un dilema constructivo.",
          esCorrecta: false,
          retroalimentacion:
            "Incorrecto. Un dilema constructivo tiene la forma $(P \\rightarrow Q) \\wedge (R \\rightarrow S) \\wedge (P \\vee R) \\vdash (Q \\vee S)$. Esta proposición es solo la parte de las implicaciones.",
        },
        {
          texto:
            "Una proposición compuesta que podría ser la premisa de un argumento más complejo, como un dilema.",
          esCorrecta: true,
          retroalimentacion:
            "Correcto. Esta estructura, si se combina con $p \\vee \\neg p$ (que es una tautología), puede llevar a la conclusión $q \\vee r$ a través de un dilema constructivo (aunque aquí $\\neg p$ se usa en lugar de una variable independiente $s$). Representa un caso donde se consideran dos escenarios basados en $p$ o su negación.",
        },
      ],
    },
  ],
};

export default cuestionarioData;
