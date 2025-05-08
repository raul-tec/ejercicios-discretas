## Ejercicio 1

### Planteamiento

Verificar las equivalencias lógicas. Da una razón para cada paso.

- $(p \land \neg q) \lor p \equiv p$
- $p \land (\neg q \lor p) \equiv p$
- $\neg (p \lor \neg q) \lor (\neg p \land \neg q) \equiv \neg p$
- $\neg ((\neg p \land q) \lor (\neg p \land \neg q)) \lor (p \land q) \equiv p$
- $(p \land (\neg p \lor q)) \lor (p \land q) \equiv p$

### Solución

**Verificación de la primera equivalencia: $(p \land \neg q) \lor p \equiv p$**

$$
\begin{aligned}
(p \land \neg q) \lor p &\equiv p \lor (p \land \neg q) && (\text{Ley Conmutativa para } \lor) \\
                       &\equiv p && (\text{Ley de Absorción})
\end{aligned}
$$

Por lo tanto, es equivalente

**Verificación de la segunda equivalencia: $p \land (\neg q \lor p) \equiv p$**

$$
\begin{aligned}
p \land (\neg q \lor p) &\equiv p \land (p \lor \neg q) && (\text{Ley Conmutativa para } \lor) \\
                       &\equiv p && (\text{Ley de Absorción})
\end{aligned}
$$

Por lo tanto, es equivalente

**Verificación de la tercera equivalencia: $\neg (p \lor \neg q) \lor (\neg p \land \neg q) \equiv \neg p$**

$$
\begin{aligned}
\neg (p \lor \neg q) \lor (\neg p \land \neg q) &\equiv (\neg p \land \neg (\neg q)) \lor (\neg p \land \neg q) && (\text{Ley de De Morgan}) \\
&\equiv (\neg p \land q) \lor (\neg p \land \neg q) && (\text{Ley de la Doble Negación}) \\
&\equiv \neg p \land (q \lor \neg q) && (\text{Ley Distributiva}) \\
&\equiv \neg p \land T && (\text{Ley de Negación}) \\
&\equiv \neg p && (\text{Ley de Identidad para } \land)
\end{aligned}
$$

Por lo tanto, es equivalente

**Verificación de la cuarta equivalencia: $\neg ((\neg p \land q) \lor (\neg p \land \neg q)) \lor (p \land q) \equiv p$**

$$
\begin{aligned}
\neg ((\neg p \land q) \lor (\neg p \land \neg q)) \lor (p \land q) &\equiv \neg (\neg p \land (q \lor \neg q)) \lor (p \land q) && (\text{Ley Distributiva}) \\
&\equiv \neg (\neg p \land T) \lor (p \land q) && (\text{Ley de Negación}) \\
&\equiv \neg (\neg p) \lor (p \land q) && (\text{Ley de Identidad para } \land) \\
&\equiv p \lor (p \land q) && (\text{Ley de la Doble Negación}) \\
&\equiv p && (\text{Ley de Absorción})
\end{aligned}
$$

Por lo tanto, es equivalente

**Verificación de la quinta equivalencia: $(p \land (\neg p \lor q)) \lor (p \land q) \equiv p$**

$$
\begin{aligned}
(p \land (\neg p \lor q)) \lor (p \land q) &\equiv ((p \land \neg p) \lor (p \land q)) \lor (p \land q) && (\text{Ley Distributiva}) \\
&\equiv (F \lor (p \land q)) \lor (p \land q) && (\text{Ley de Negación}) \\
&\equiv (p \land q) \lor (p \land q) && (\text{Ley de Identidad para } \lor) \\
&\equiv p \land q && (\text{Ley Idempotente para } \lor)
\end{aligned}
$$

La expresión $(p \land (\neg p \lor q)) \lor (p \land q)$ se simplifica a $p \land q$, no a $p$. Por lo tanto, la equivalencia propuesta originalmente es falsa.

## Ejercicio 2

### Planteamiento

Los siguientes son tres argumentos válidos. Establece la validez de cada uno mediante una tabla de verdad. En cada caso, determina qué filas de la tabla son cruciales para evaluar la validez del argumento y cuáles pueden ser ignoradas.

- $\left[ p \land (p \rightarrow q) \land r \right] \rightarrow \left[ (p \lor q) \rightarrow r \right]$
- $\left[ [(p \land q) \rightarrow r] \land \neg q \land (p \rightarrow \neg r) \right] \rightarrow (\neg p \lor \neg q)$
- $\left[ [p \lor (q \lor r)] \land \neg q \right] \rightarrow (p \lor r)$

### Solución

Para el primer argumento, $\left[ p \land (p \rightarrow q) \land r \right] \rightarrow \left[ (p \lor q) \rightarrow r \right]$, construimos la tabla de verdad con las columnas necesarias: $p$, $q$, $r$, $p \rightarrow q$, $p \land (p \rightarrow q)$, $H = [p \land (p \rightarrow q)] \land r$, $p \lor q$, $(p \lor q) \rightarrow r$, y finalmente $H \rightarrow C$.

$$
\begin{array}{| c | c | c || c | c | c || c | c || c |}
\hline
p & q & r & p \rightarrow q & H_1=p \land (p \rightarrow q) & \mathbf{H = H_1 \land r} & p \lor q & \mathbf{C = (p \lor q) \rightarrow r} & \mathbf{H \rightarrow C} \\
\hline
V & V & V & V & V & \mathbf{V} & V & \mathbf{V} & \mathbf{V} \\
V & V & F & V & V & \mathbf{F} & V & \mathbf{F} & \mathbf{V} \\
V & F & V & F & F & \mathbf{F} & V & \mathbf{V} & \mathbf{V} \\
V & F & F & F & F & \mathbf{F} & V & \mathbf{F} & \mathbf{V} \\
F & V & V & V & F & \mathbf{F} & V & \mathbf{V} & \mathbf{V} \\
F & V & F & V & F & \mathbf{F} & V & \mathbf{F} & \mathbf{V} \\
F & F & V & V & F & \mathbf{F} & F & \mathbf{V} & \mathbf{V} \\
F & F & F & V & F & \mathbf{F} & F & \mathbf{V} & \mathbf{V} \\
\hline
\end{array}
$$

Observamos que la columna final $H \rightarrow C$ es siempre verdadera, por lo que el argumento es válido. La única fila importante es aquella donde $H$ es verdadera, específicamente $(p, q, r) = (V, V, V)$, en la cual también se cumple que $C$ es verdadera.

En el segundo argumento, $\left[ [(p \land q) \rightarrow r] \land \neg q \land (p \rightarrow \neg r) \right] \rightarrow (\neg p \lor \neg q)$, procedemos de manera similar. Definimos $H$ como la conjunción de las tres partes internas y $C$ como $\neg p \lor \neg q$.

$$
\begin{array}{| c | c | c || c | c | c | c | c | c | c || c | c || c |}
\hline
p & q & r & p \land q & H_1=(p \land q) \to r & \neg q & \neg r & H_2=p \to \neg r & H_3=H_1 \land \neg q & \mathbf{H = H_3 \land H_2} & \neg p & \mathbf{C=\neg p \lor \neg q} & \mathbf{H \rightarrow C} \\
\hline
V & V & V & V & V & F & F & F & F & \mathbf{F} & F & \mathbf{F} & \mathbf{V} \\
V & V & F & V & F & F & V & V & F & \mathbf{F} & F & \mathbf{F} & \mathbf{V} \\
V & F & V & F & V & V & F & F & V & \mathbf{F} & F & \mathbf{V} & \mathbf{V} \\
V & F & F & F & V & V & V & V & V & \mathbf{V} & F & \mathbf{V} & \mathbf{V} \\
F & V & V & F & V & F & F & V & F & \mathbf{F} & V & \mathbf{V} & \mathbf{V} \\
F & V & F & F & V & F & V & V & F & \mathbf{F} & V & \mathbf{V} & \mathbf{V} \\
F & F & V & F & V & V & F & V & V & \mathbf{V} & V & \mathbf{V} & \mathbf{V} \\
F & F & F & F & V & V & V & V & V & \mathbf{V} & V & \mathbf{V} & \mathbf{V} \\
\hline
\end{array}
$$

La tabla muestra que $H \rightarrow C$ es verdadera en todas las combinaciones. Analizando las filas donde $H$ resulta verdadera (filas con $(p, q, r) = (V, F, F)$, $(F, F, V)$ y $(F, F, F)$), confirmamos que en cada caso la conclusión $C$ también es verdadera, por lo que el argumento es válido.

Para el tercer argumento, $\left[ [p \lor (q \lor r)] \land \neg q \right] \rightarrow (p \lor r)$, construimos la tabla de verdad correspondiente considerando las expresiones $q \lor r$, $p \lor (q \lor r)$, $\neg q$, $H = p \lor (q \lor r) \land \neg q $, $C = p \lor r$ y la implicación final.

$$
\begin{array}{| c | c | c || c | c | c | c || c || c |}
\hline
p & q & r & q \lor r & H_1=p \lor (q \lor r) & \neg q & \mathbf{H = H_1 \land \neg q} & \mathbf{C = p \lor r} & \mathbf{H \rightarrow C} \\
\hline
V & V & V & V & V & F & \mathbf{F} & \mathbf{V} & \mathbf{V} \\
V & V & F & V & V & F & \mathbf{F} & \mathbf{V} & \mathbf{V} \\
V & F & V & V & V & V & \mathbf{V} & \mathbf{V} & \mathbf{V} \\
V & F & F & F & V & V & \mathbf{V} & \mathbf{V} & \mathbf{V} \\
F & V & V & V & V & F & \mathbf{F} & \mathbf{V} & \mathbf{V} \\
F & V & F & V & V & F & \mathbf{F} & \mathbf{F} & \mathbf{V} \\
F & F & V & V & V & V & \mathbf{V} & \mathbf{V} & \mathbf{V} \\
F & F & F & F & F & V & \mathbf{F} & \mathbf{F} & \mathbf{V} \\
\hline
\end{array}
$$

Nuevamente, la columna $H \rightarrow C$ es siempre verdadera. Al revisar las filas donde $H$ es verdadera ($(p, q, r) = (V, F, V)$, $(V, F, F)$ y $(F, F, V)$), observamos que en todas la conclusión $C$ también es verdadera, confirmando la validez del argumento.

En los tres casos el argumento es válido ya que $H \rightarrow C$ es una tautología. Las filas cruciales corresponden exclusivamente a aquellas donde la hipótesis $H$ es verdadera, y en todas ellas se verifica que la conclusión $C$ también lo es.

## Ejercicio 3

### Planteamiento

Demuestra que cada uno de los siguientes argumentos es inválido proporcionando un contraejemplo—es decir, una asignación de valores de verdad para las proposiciones primitivas $p$, $q$, $r$ y $s$ tal que todas las premisas sean verdaderas (tengan el valor de verdad 1) mientras que la conclusión sea falsa (tenga el valor de verdad 0).

a) $\left[(p \land \neg q) \land [p \rightarrow (q \rightarrow r)]\right] \rightarrow \neg r$

b) $\left[\left((p \land q) \rightarrow r\right) \land (\neg q \lor r)\right] \rightarrow p$

c)

$$
\begin{array}{l}
p \leftrightarrow q \\
q \rightarrow r \\
r \lor \neg s \\
\hline
\neg s \rightarrow q \\
\therefore s \\
\end{array}
$$

d)

$$
\begin{array}{l}
p \\
p \rightarrow r \\
p \rightarrow (q \lor \neg r) \\
\neg q \lor \neg s \\
\hline
\therefore s \\
\end{array}
$$

### Solución

Usaremos tablas de verdad.

**a) $\left[(p \land \neg q) \land [p \rightarrow (q \rightarrow r)]\right] \rightarrow \neg r$**

Llamemos $A = (p \land \neg q) \land [p \rightarrow (q \rightarrow r)]$ y $B = \neg r$. Buscamos filas donde $A=1$ y $B=0$.

$$
\begin{array}{| c | c | c || c | c | c | c | c | c || c |}
\hline
p & q & r & \neg q & p \land \neg q & q \rightarrow r & p \rightarrow (q \rightarrow r) & A & \neg r & A \rightarrow B \\
\hline
1 & 1 & 1 & 0 & 0 & 1 & 1 & 0 & 0 & 1 \\
1 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 1 \\
\mathbf{1} & \mathbf{0} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{0} & \mathbf{0} \\
1 & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
0 & 1 & 1 & 0 & 0 & 1 & 1 & 0 & 0 & 1 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 & 0 & 1 & 1 \\
0 & 0 & 1 & 1 & 0 & 1 & 1 & 0 & 0 & 1 \\
0 & 0 & 0 & 1 & 0 & 1 & 1 & 0 & 1 & 1 \\
\hline
\end{array}
$$

El contraejemplo ocurre cuando $p=1, q=0, r=1$.

**b) $\left[\left((p \land q) \rightarrow r\right) \land (\neg q \lor r)\right] \rightarrow p$**

Llamemos $A = \left((p \land q) \rightarrow r\right) \land (\neg q \lor r)$ y $B = p$. Buscamos filas donde $A=1$ y $B=0$.

$$
\begin{array}{| c | c | c || c | c | c | c | c | c || c |}
\hline
p & q & r & p \land q & (p \land q) \rightarrow r & \neg q & \neg q \lor r & A & p & A \rightarrow B \\
\hline
1 & 1 & 1 & 1 & 1 & 0 & 1 & 1 & 1 & 1 \\
1 & 1 & 0 & 1 & 0 & 0 & 0 & 0 & 1 & 1 \\
1 & 0 & 1 & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
1 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
\mathbf{0} & \mathbf{1} & \mathbf{1} & \mathbf{0} & \mathbf{1} & \mathbf{0} & \mathbf{1} & \mathbf{1} & \mathbf{0} & \mathbf{0} \\
0 & 1 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 1 \\
\mathbf{0} & \mathbf{0} & \mathbf{1} & \mathbf{0} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{0} & \mathbf{0} \\
\mathbf{0} & \mathbf{0} & \mathbf{0} & \mathbf{0} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{0} & \mathbf{0} \\
\hline
\end{array}
$$

Hay tres contraejemplos: $(p,q,r) = (0,1,1), (0,0,1), (0,0,0)$.

**c)** Premisas: $P_1 = p \leftrightarrow q$, $P_2 = q \rightarrow r$, $P_3 = r \lor \neg s$, $P_4 = \neg s \rightarrow q$. Conclusión: $C = s$.

Premisa general: $P = P_1 \land P_2 \land P_3 \land P_4$

Buscamos filas donde $P_1=1, P_2=1, P_3=1, P_4=1$ y $C=0$.

$$
\begin{array}{| c | c | c | c || c | c | c | c | c || c | c |}
\hline
p & q & r & s & P_1 = p \leftrightarrow q & P_2 = q \rightarrow r & \neg s & P_3 = r \lor \neg s & P_4 = \neg s \rightarrow q & P & C = s \\
\hline
1 & 1 & 1 & 1 & 1 & 1 & 0 & 1 & 1 & 1 & 1 \\
\mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{0} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{0} \\
1 & 1 & 0 & 1 & 1 & 0 & 0 & 0 & 1 & 0 & 1 \\
1 & 1 & 0 & 0 & 1 & 0 & 1 & 1 & 1 & 0 & 0 \\
1 & 0 & 1 & 1 & 0 & 1 & 0 & 1 & 1 & 0 & 1 \\
1 & 0 & 1 & 0 & 0 & 1 & 1 & 1 & 0 & 0 & 0 \\
1 & 0 & 0 & 1 & 0 & 1 & 0 & 0 & 1 & 0 & 1 \\
1 & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 0 & 0 & 0 \\
0 & 1 & 1 & 1 & 0 & 1 & 0 & 1 & 1 & 0 & 1 \\
0 & 1 & 1 & 0 & 0 & 1 & 1 & 1 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 & 0 & 0 & 0 & 0 & 1 & 0 & 1 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 0 & 0 \\
0 & 0 & 1 & 1 & 1 & 1 & 0 & 1 & 1 & 1 & 1 \\
0 & 0 & 1 & 0 & 1 & 1 & 1 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 1 & 1 & 0 & 0 & 1 & 0 & 1 \\
0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 0 & 0 & 0 \\
\hline
\end{array}
$$

El contraejemplo ocurre cuando $p=1, q=1, r=1, s=0$.

**d)** Premisas: $P_1 = p$, $P_2= p \rightarrow r$, $P_3= p \rightarrow (q \lor \neg r)$, $P_4= \neg q \lor \neg s$. Conclusión: $C = s$.

La premisa general es $P = P_1 \land P_2 \land P_3 \land P_4$

Buscamos filas donde $P = 1$ y $C=0$.

$$
\begin{array}{| c | c | c | c || c | c | c | c | c | c | c | c || c | c |}
\hline
p & q & r & s & P_1 = p & P_2 = p \rightarrow r & \neg r & q \lor \neg r & P_3 = p \rightarrow (q \lor \neg r) & \neg q & \neg s & P_4 = \neg q \lor \neg s & P=1 & C = s \\
\hline
1 & 1 & 1 & 1 & 1 & 1 & 0 & 1 & 1 & 0 & 0 & 0 & 0 & 1 \\
\mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{0} & \mathbf{1} & \mathbf{1} & \mathbf{0} & \mathbf{1} & \mathbf{1} & \mathbf{0} & \mathbf{1} & \mathbf{1} & \mathbf{1} & \mathbf{0} \\
1 & 1 & 0 & 1 & 1 & 0 & 1 & 1 & 1 & 0 & 0 & 0 & 0 & 1 \\
1 & 1 & 0 & 0 & 1 & 0 & 1 & 1 & 1 & 0 & 1 & 1 & 0 & 0 \\
1 & 0 & 1 & 1 & 1 & 1 & 0 & 0 & 0 & 1 & 0 & 1 & 0 & 1 \\
1 & 0 & 1 & 0 & 1 & 1 & 0 & 0 & 0 & 1 & 1 & 1 & 0 & 0 \\
1 & 0 & 0 & 1 & 1 & 0 & 1 & 1 & 1 & 1 & 0 & 1 & 0 & 1 \\
1 & 0 & 0 & 0 & 1 & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 0 & 0 \\
0 & 1 & 1 & 1 & 0 & 1 & 0 & 1 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 1 & 1 & 0 & 0 & 1 & 0 & 1 & 1 & 0 & 1 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 & 0 & 1 & 1 & 1 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 1 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 0 & 1 & 1 & 0 & 0 \\
0 & 0 & 1 & 1 & 0 & 1 & 0 & 0 & 1 & 1 & 0 & 1 & 0 & 1 \\
0 & 0 & 1 & 0 & 0 & 1 & 0 & 0 & 1 & 1 & 1 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 1 & 1 & 1 & 1 & 1 & 0 & 1 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 0 & 0 \\
\hline
\end{array}
$$

El contraejemplo ocurre cuando $p=1, q=1, r=1, s=0$.

## Ejercicio 4

### Planteamiento

Resuelve este famoso acertijo de lógica, atribuido a Albert Einstein y conocido como el Acertijo de la Cebra. Cinco hombres de diferentes nacionalidades y profesiones viven en cinco casas consecutivas en una calle, cada una pintada de un color distinto. Cada hombre tiene una mascota diferente y una bebida favorita distinta. Tu tarea es determinar quién tiene una cebra y quién prefiere el agua mineral. Estas son las pistas: El inglés vive en la casa roja. El español tiene un perro. El japonés es pintor. El italiano bebe té. El noruego vive en la primera casa a la izquierda. La casa verde está inmediatamente a la derecha de la blanca. El fotógrafo cría caracoles. El diplomático vive en la casa amarilla. En la casa del medio se bebe leche. El dueño de la casa verde bebe café. La casa del noruego está al lado de la azul. El violinista bebe jugo de naranja. El zorro está en una casa junto a la del médico. El caballo está en una casa junto a la del diplomático.

### Solución

Se presentan cinco casas consecutivas (numeradas 1 a 5 de izquierda a derecha), cada una con atributos únicos: Color ($C_i$), Nacionalidad ($N_i$), Profesión ($P_i$), Mascota ($M_i$) y Bebida ($D_i$), donde $i$ indica el número de la casa. Utilizaremos las 15 pistas proporcionadas como premisas para deducir lógicamente la configuración completa de las casas y sus habitantes. Para manejar las relaciones de vecindad, definimos un predicado de adyacencia: **`CasaJuntoA(i, j)`** es verdadero si y solo si la Casa `i` está inmediatamente al lado de la Casa `j` para $i, j \in \{1, 2, 3, 4, 5\}$).

Comenzamos con las pistas que proporcionan información más directa. La Pista 9 ("El noruego vive en la primera casa a la izquierda") establece directamente la nacionalidad del ocupante de la Casa 1. Entonces $N_1 = \text{Noruego}$. La Pista 10 ("En la casa del medio se bebe leche") identifica la bebida de la Casa 3 (la casa central). Por lo tanto $D_3 = \text{Leche}$.

Ahora consideramos la Pista 14 ("La casa del noruego está al lado de la azul"). Sabiendo que $N_1 = \text{Noruego}$, esta pista se traduce lógicamente como: existe una casa $k$ tal que $CasaJuntoA(1, k)$ y $C_k = \text{Azul}$. Aplicando el predicado `CasaJuntoA`, la única casa $k$ que cumple $CasaJuntoA(1, k)$ es la Casa 2. Por lo tanto, concluimos: $C_2 = \text{Azul}$.

La Pista 6 ("La casa verde está inmediatamente a la derecha de la blanca") establece una relación espacial estricta: debe existir una Casa $i$ tal que $C_i = \text{Blanca}$ y $C_{i+1} = \text{Verde}$. Analicemos las posibles ubicaciones para este par (Blanca, Verde). Sabemos que $C_2 = \text{Azul}$, por lo que el par no puede ser (1, 2) ni (2, 3). Las únicas posibilidades restantes son (3, 4) o (4, 5).

Además, la Pista 11 ("El dueño de la casa verde bebe café") asocia el color verde con la bebida café ($C_k = \text{Verde} \implies D_k = \text{Café}$). Sabemos que $D_3 = \text{Leche}$. Si la Casa 3 fuera Verde, su ocupante debería beber Café, lo cual contradice $D_3 = \text{Leche}$. Por la regla lógica de modus tollens, la Casa 3 no puede ser Verde.

Con $C_3 \neq \text{Verde}$, la única opción restante para el par (Blanca, Verde) es (4, 5). Por lo tanto, deducimos: $C_4 = \text{Blanca}$ y $C_5 = \text{Verde}$. De esta deducción y aplicando la Pista 11 ($C_5 = \text{Verde} \implies D_5 = \text{Café}$), inferimos $D_5 = \text{Café}$.

Con los colores Azul (C2), Blanca (C4) y Verde (C5) asignados, quedan los colores Amarillo y Rojo para las Casas 1 y 3. La Pista 2 ("El inglés vive en la casa roja") establece $N_k = \text{Inglés} \iff C_k = \text{Rojo}$. La Pista 8 ("El diplomático vive en la casa amarilla") establece $P_k = \text{Diplomático} \iff C_k = \text{Amarillo}$.

Sabemos que $N_1 = \text{Noruego}$. Como el Noruego no es el Inglés, la Casa 1 no puede ser Roja (por modus tollens en Pista 2). Dado que $C_1$ no puede ser Azul, Blanca, Verde ni Roja, por proceso de eliminación entre los cinco colores, concluimos que $C_1 = \text{Amarillo}$. Aplicando la Pista 8 ($C_1 = \text{Amarillo} \implies P_1 = \text{Diplomático}$), deducimos $P_1 = \text{Diplomático}$.

El único color restante para la Casa 3 es el Rojo. Por proceso de eliminación, $C_3 = \text{Rojo}$. Aplicando la Pista 2 ($C_3 = \text{Rojo} \implies N_3 = \text{Inglés}$), deducimos $N_3 = \text{Inglés}$.

Consideremos la Pista 15 ("El caballo está en una casa junto a la del diplomático"). Sabiendo que $P_1 = \text{Diplomático}$, esta pista implica que existe una casa $k$ tal que $CasaJuntoA(k, 1)$ y $M_k = \text{Caballo}$. La única casa $k$ que cumple $CasaJuntoA(k, 1)$ es la Casa 2. Por lo tanto, inferimos que $M_2 = \text{Caballo}$.

Ahora determinaremos quién bebe agua mineral. Las bebidas asignadas son $D_1=?$, $D_2=?$, $D_3=\text{Leche}$, $D_4=?$, $D_5=\text{Café}$. Las bebidas restantes son Té, Jugo de Naranja y Agua Mineral. La Pista 4 ("El italiano bebe té") implica $N_k = \text{Italiano} \implies D_k = \text{Té}$. La Pista 13 ("El violinista bebe jugo de naranja") implica $P_k = \text{Violinista} \implies D_k = \text{Jugo de Naranja}$. Consideremos al ocupante de la Casa 1: el Noruego Diplomático ($N_1=\text{Noruego}, P_1=\text{Diplomático}$). Él no es Italiano, así que no bebe Té (por modus tollens en Pista 4). Él no es Violinista, así que no bebe Jugo de Naranja (por modus tollens en Pista 13). Tampoco bebe Leche ($D_3$) ni Café ($D_5$). Por proceso de eliminación de las cinco bebidas posibles, la única opción restante para el Noruego es el Agua Mineral. Deducimos que $D_1 = \text{Agua Mineral}$.

Las bebidas restantes, Té y Jugo de Naranja, deben asignarse a las Casas 2 y 4. Si asumimos $D_2 = \text{Té}$ (siguiendo una hipótesis deductiva a verificar), entonces por la Pista 4 ($D_k = \text{Té} \implies N_k = \text{Italiano}$), debemos tener $N_2 = \text{Italiano}$. Esto deja $D_4 = \text{Jugo de Naranja}$.
Las nacionalidades restantes son Español y Japonés para las Casas 4 y 5. La Pista 3 ("El español tiene un perro") es $N_k = \text{Español} \implies M_k = \text{Perro}$. La Pista 5 ("El japonés es pintor") es $N_k = \text{Japonés} \implies P_k = \text{Pintor}$. Si asignamos $N_4 = \text{Español}$, entonces $M_4 = \text{Perro}$. Por eliminación, la nacionalidad restante para la Casa 5 es Japonés, es decir, $N_5 = \text{Japonés}$. Aplicando la Pista 5, deducimos $P_5 = \text{Pintor}$.

Las profesiones restantes son Fotógrafo, Médico y Violinista, para las Casas 2, 3 y 4. Sabemos $D_4 = \text{Jugo de Naranja}$. Por la Pista 13 ($D_k = \text{Jugo de Naranja} \implies P_k = \text{Violinista}$), deducimos $P_4 = \text{Violinista}$.
La Pista 7 ("El fotógrafo cría caracoles") es $P_k = \text{Fotógrafo} \implies M_k = \text{Caracoles}$. Sabemos $M_2 = \text{Caballo}$. Como la mascota de la Casa 2 no son caracoles ($M_2 \neq \text{Caracoles}$), el ocupante de la Casa 2 no puede ser el Fotógrafo (por modus tollens en Pista 7). Las profesiones restantes para las Casas 2 y 3 son Médico y Fotógrafo. Dado que $P_2 \neq \text{Fotógrafo}$, por eliminación, $P_2 = \text{Médico}$. Esto deja la profesión de Fotógrafo para la Casa 3: $P_3 = \text{Fotógrafo}$. Aplicando la Pista 7 ($P_3 = \text{Fotógrafo} \implies M_3 = \text{Caracoles}$), deducimos $M_3 = \text{Caracoles}$.

Las mascotas asignadas son $M_1=?$, $M_2=\text{Caballo}$, $M_3=\text{Caracoles}$, $M_4=\text{Perro}$, $M_5=?$. Las mascotas restantes son Zorro y Cebra. La Pista 12 ("El zorro está en una casa junto a la del médico") es crucial. Sabemos que $P_2 = \text{Médico}$. La pista indica que existe una casa $k$ tal que $CasaJuntoA(k, 2)$ y $M_k = \text{Zorro}$. Las casas $k$ que satisfacen $CasaJuntoA(k, 2)$ son la Casa 1 y la Casa 3. Por lo tanto, la pista implica la disyunción lógica: $M_1 = \text{Zorro} \lor M_3 = \text{Zorro}$. Previamente dedujimos que $M_3 = \text{Caracoles}$, lo cual significa que la proposición $M_3 = \text{Zorro}$ es falsa. Aplicando la regla de inferencia del Silogismo Disyuntivo, concluimos necesariamente que $M_1 = \text{Zorro}$.

Finalmente, la única mascota que queda por asignar es la Cebra, y la única casa sin mascota asignada es la Casa 5. Por proceso de eliminación, concluimos $M_5 = \text{Cebra}$.

Así, ahora podemos responder las preguntas del acertijo. La Cebra se encuentra en la Casa 5 ($M_5 = \text{Cebra}$), y el ocupante de la Casa 5 es el Japonés ($N_5 = \text{Japonés}$). El Agua Mineral se bebe en la Casa 1 ($D_1 = \text{Agua Mineral}$), y el ocupante de la Casa 1 es el Noruego ($N_1 = \text{Noruego}$).

**Respuesta**. El japonés es quien tiene la cebra, y el noruego es quien bebe agua mineral.

## Ejercicio 5

### Planteamiento

Freedonia tiene 50 senadores. Cada senador es honesto o corrupto. Sabes que al menos uno de los senadores de Freedonia es honesto y que, dados cualesquiera dos senadores, al menos uno de ellos es corrupto. Con base en estos hechos, ¿puedes determinar cuántos senadores son honestos y cuántos son corruptos? Si es así, ¿cuál es la respuesta?

### Solución

Sea $H(s_i)$ la proposición "el senador $s_i$ es honesto", para cada $i$ de $1$ a $50$. Cada senador es honesto o corrupto, y ser corrupto equivale a $\neg H(s_i)$. Los hechos dados son: (1) al menos un senador es honesto, es decir,

$$
H(s_1) \lor H(s_2) \lor \dots \lor H(s_{50}),
$$

y (2) para cualquier par de senadores distintos $s_i$ y $s_j$, al menos uno es corrupto, lo cual se expresa como

$$
\neg H(s_i) \lor \neg H(s_j).
$$

Usando una ley de De Morgan, esto último es equivalente a

$$
\neg(H(s_i) \land H(s_j)),
$$

indicando que no pueden existir dos senadores distintos ambos honestos.

El primer hecho establece que el número de senadores honestos es al menos uno. El segundo hecho implica que no puede haber dos senadores honestos simultáneamente, pues para cualquier par de senadores $i \neq j$, $H(s_i) \land H(s_j)$ debe ser falso. De manera lógica, si suponemos que hubiera dos (o más) senadores honestos, entonces elijamos a dos de ellos, digamos $a$ y $b$. Entonces llegaríamos a una contradicción, ya que tendríamos $H(s_a) \land H(s_b)$ verdadero para $a \neq b$, lo cual viola $\neg(H(s_a) \land H(s_b))$.

Por lo tanto, la única posibilidad es que haya exactamente un senador honesto. Dado que hay 50 senadores en total, esto significa que los otros 49 senadores son corruptos.

Por lo tanto, determinamos que en Freedonia hay exactamente **1 senador honesto y 49 senadores corruptos**.

## Ejercicio 6

### Planteamiento

Los siguientes enunciados se refieren a habitantes de la isla de caballeros y bribones creada por Smullyan, donde los caballeros siempre dicen la verdad y los bribones siempre mienten. Te encuentras con dos personas, $A$ y $B$. Determina, si es posible, qué son $A$ y $B$ si te hablan de las maneras descritas. Si no puedes determinar qué son estas dos personas, ¿puedes sacar alguna conclusión?

- $A$ dice "Al menos uno de nosotros es un bribón" y $B$ no dice nada.
- $A$ dice "Los dos somos caballeros" y $B$ dice "$A$ es un bribón".
- $A$ dice "Soy un bribón o $B$ es un caballero" y $B$ no dice nada.
- Tanto $A$ como $B$ dicen "Soy un caballero."
- $A$ dice "Ambos somos bribones" y $B$ no dice nada.

### Solución

Sea $P_A$ la proposición "A es un caballero" y $P_B$ "B es un caballero". La regla del problema es que un caballero dice siempre la verdad y un bribón siempre miente. Por tanto, si un individuo X hace una afirmación S, se cumple $P_X \iff S$; es decir, X es caballero si y solo si su afirmación S es verdadera. Esta equivalencia lógica servirá en todos los razonamientos de los casos.

**Caso 1:** A dice "Al menos uno de nosotros es un bribón" ($\neg P_A \lor \neg P_B$) y B guarda silencio. Aplicando la regla fundamental, tenemos $P_A \iff (\neg P_A \lor \neg P_B)$. Si $P_A$ fuera verdadero, la afirmación también lo sería, lo cual implica que como $\neg P_A$ es falso, $\neg P_B$ debe ser verdadero; es decir, $P_B$ es falso y B es un bribón. En cambio, si $P_A$ fuera falso, su afirmación debería ser falsa, pero $\neg P_A$ sería verdadero, forzando la disyunción a ser verdadera, contradicción. Por tanto, A es un caballero y B un bribón.

**Caso 2:** A dice "Los dos somos caballeros" ($P_A \land P_B$) y B dice "A es un bribón" ($\neg P_A$). De las reglas, tenemos $P_A \iff (P_A \land P_B)$ y $P_B \iff \neg P_A$. Observamos que $P_B$ es el complemento lógico de $P_A$: uno es verdadero si y solo si el otro es falso. Si A fuera caballero, $P_A$ sería verdadero, lo que requeriría que $P_B$ también lo fuera, contradiciendo $P_B \iff \neg P_A$. Por lo tanto, A es un bribón ($P_A$ falso) y B un caballero ($P_B$ verdadero).

**Caso 3:** A dice "Soy un bribón o B es un caballero" ($\neg P_A \lor P_B$) y B no habla. Aplicamos $P_A \iff (\neg P_A \lor P_B)$. Si $P_A$ fuera verdadero, $\neg P_A$ sería falso y sería necesario que $P_B$ fuera verdadero para que la disyunción fuera verdadera. Por tanto, A y B serían ambos caballeros. Si A fuera un bribón, entonces $\neg P_A$ sería verdadero y la disyunción también, pero la afirmación debería ser falsa para un bribón, contradicción. Así que A y B son caballeros.

**Caso 4:** A y B afirman individualmente "Soy un caballero" ($P_A$ y $P_B$). Aquí, $P_A \iff P_A$ y $P_B \iff P_B$ son tautologías triviales: un caballero dice la verdad, un bribón miente. Sin embargo, no hay interdependencia entre las afirmaciones, así que no podemos concluir nada concreto sobre los tipos de A o B; ambos podrían ser caballeros o bribones independientemente.

**Caso 5:** A dice "Ambos somos bribones" ($\neg P_A \land \neg P_B$) y B no dice nada. Según la regla, $P_A \iff (\neg P_A \land \neg P_B)$. Si A fuera caballero ($P_A$ verdadero), entonces $\neg P_A$ debería ser verdadero, lo cual es contradictorio. Por tanto, A es un bribón ($P_A$ falso). Su afirmación, entonces, debe ser falsa: $\neg P_A$ sería verdadero, así que $\neg P_B$ debe ser falso, es decir, $P_B$ debe ser verdadero. Así, A es un bribón y B es un caballero.

## Ejercicio 7

### Planteamiento

Los siguientes enunciados se refieren a habitantes de una isla en la que hay tres tipos de personas: caballeros, que siempre dicen la verdad; bribones, que siempre mienten; y espías (llamados "normales" por Smullyan), que pueden mentir o decir la verdad. Te encuentras con tres personas: A, B y C. Sabes que una de estas personas es un caballero, una es un bribón y una es un espía. Cada una de las tres personas conoce el tipo de persona que son las otras dos. Para cada una de las siguientes situaciones, si es posible, determina si hay una solución única e identifica quién es el caballero, el bribón y el espía. Cuando no haya una solución única, enumera todas las posibles soluciones o indica que no hay ninguna solución.

- A dice: "C es el bribón", B dice: "A es el caballero" y C dice: "Yo soy el espía".
- A dice: "Yo soy el caballero", B dice: "Yo soy el bribón" y C dice: "B es el caballero".
- A dice: "Yo soy el bribón", B dice: "Yo soy el bribón" y C dice: "Yo soy el bribón".
- A dice: "Yo soy el caballero", B dice: "A dice la verdad" y C dice: "Yo soy el espía".
- A dice: "Yo soy el caballero", B dice: "A no es el bribón" y C dice: "B no es el bribón".
- A dice: "Yo soy el caballero", B dice: "Yo soy el caballero" y C dice: "Yo soy el caballero".
- A dice: "No soy el espía", B dice: "No soy el espía" y C dice: "A es el espía".
- A dice: "No soy el espía", B dice: "No soy el espía" y C dice: "No soy el espía".

### Solución

En la **primera situación**, A afirma "C es el bribón", B dice "A es el caballero" y C sostiene "Yo soy el espía". Si asumimos que A es el Caballero, su declaración implica que C es efectivamente el Bribón. La afirmación de C, "Yo soy el espía", sería entonces falsa, lo cual es consistente con ser un Bribón que siempre miente. Esto deja a B como el Espía. La declaración de B, "A es el caballero", es verdadera, y un Espía puede decir la verdad. Por lo tanto, la asignación A=Caballero, B=Espía, C=Bribón es la única solución coherente, ya que otras suposiciones iniciales (como B o C siendo Caballero) conducen a contradicciones lógicas con las reglas establecidas.

Para la **segunda situación**, donde A dice "Yo soy el caballero", B dice "Yo soy el bribón" y C dice "B es el caballero", la declaración de B es crucial. Ni un Caballero (que no puede mentir) ni un Bribón (que no puede decir la verdad sobre su propia naturaleza) pueden afirmar "Yo soy el bribón". Únicamente el Espía puede hacer esta afirmación, mintiendo. Así, B debe ser el Espía. Con B identificado, A y C deben ser el Caballero y el Bribón. Si A es el Caballero, su afirmación "Yo soy el caballero" es verdadera. C sería entonces el Bribón, y su afirmación "B es el caballero" (cuando B es el Espía) es falsa, lo cual es propio de un Bribón. Esta configuración A=Caballero, B=Espía, C=Bribón es la única que funciona, pues la alternativa (C=Caballero) requeriría que C dijera la verdad, pero su afirmación es falsa.

En la **tercera situación**, A, B y C declaran todos "Yo soy el bribón". Como se estableció en el caso anterior, solo un Espía puede hacer esta afirmación (mintiendo). Si los tres lo dicen, implicaría que los tres son Espías. Esto viola la condición fundamental de que hay exactamente un Caballero, un Bribón y un Espía. Por lo tanto, esta situación no tiene una solución posible.

La **cuarta situación** presenta a A diciendo "Yo soy el caballero", B diciendo "A dice la verdad" y C diciendo "Yo soy el espía". La declaración de B está directamente ligada a la de A. Si A fuera el Caballero, su afirmación sería verdadera. La afirmación de B "A dice la verdad" también sería verdadera. Si B es el Espía, puede decir la verdad. Esto deja a C como el Bribón. La afirmación de C "Yo soy el espía" sería falsa (ya que es el Bribón), lo cual es requerido para un Bribón. La asignación A=Caballero, B=Espía, C=Bribón es consistente y única, ya que otras hipótesis iniciales fallan.

En la **quinta situación**, A dice "Yo soy el caballero", B dice "A no es el bribón" y C dice "B no es el bribón". Consideremos la posibilidad de que C sea el Caballero. Su afirmación "B no es el bribón" sería verdadera, implicando que B es Caballero o Espía. Como C es el Caballero, B debe ser el Espía. Esto deja a A como el Bribón. Verificamos: A (Bribón) miente al decir "Yo soy el caballero". B (Espía) dice "A no es el bribón"; como A es el Bribón, esta afirmación es falsa, lo cual es posible para un Espía. C (Caballero) dice "B no es el bribón"; como B es el Espía, esto es verdad, lo cual es requerido para un Caballero. La solución única es A=Bribón, B=Espía, C=Caballero.

Para la **sexta situación**, A, B y C afirman todos "Yo soy el caballero". Sabemos que solo hay un Caballero, así que al menos dos de ellos mienten. Un Caballero diría verazmente "Yo soy el caballero". Un Bribón, al decir "Yo soy el caballero", estaría mintiendo (lo cual es consistente). Un Espía, al decir "Yo soy el caballero", también estaría mintiendo (lo cual es posible). Esto significa que el Caballero debe hacer esta afirmación verdadera, mientras que el Bribón y el Espía deben hacer la misma afirmación falsa. Cualquier permutación de los roles (K, N, S) entre A, B y C es válida siempre que la persona asignada como Caballero haga la afirmación veraz y las otras dos hagan la afirmación falsa. Por lo tanto, no hay una solución única; las seis posibles asignaciones (A=K, B=N, C=S; A=K, B=S, C=N; A=N, B=K, C=S; etc.) son soluciones válidas.

En la **séptima situación**, A dice "No soy el espía", B dice "No soy el espía" y C dice "A es el espía". Analicemos a A. No puede ser Bribón, pues "No soy el espía" sería verdad para un Bribón, pero debe mentir. Tampoco puede ser Espía, porque si lo fuera, la afirmación de C "A es el espía" sería verdadera, haciendo a C el Caballero; esto dejaría a B como Bribón, pero la afirmación de B "No soy el espía" sería verdadera, contradiciendo su naturaleza de Bribón. Por lo tanto, A debe ser el Caballero. Su afirmación "No soy el espía" es verdadera. La afirmación de C "A es el espía" es falsa, por lo que C debe ser el Bribón. Esto deja a B como el Espía. La afirmación de B "No soy el espía" es falsa (ya que B es el Espía), lo cual es permitido para un Espía. La solución única es A=Caballero, B=Espía, C=Bribón.

Finalmente, en la **octava situación**, A, B y C dicen todos "No soy el espía". Un Caballero diría esto verazmente. Un Espía podría decirlo mintiendo. Sin embargo, un Bribón no puede decir "No soy el espía", porque para un Bribón (que no es el Espía), esta afirmación sería verdadera, y un Bribón debe mentir. Como los tres hacen esta afirmación, ninguno de ellos puede ser el Bribón. Esto contradice la regla de que debe haber un Bribón presente. Por consiguiente, esta situación es lógicamente imposible y no tiene solución.

## Ejercicio 8

### Planteamiento

Determina si cada una de estas proposiciones compuestas es satisfacible.

- $(p \vee q \vee \neg r) \land (p \vee \neg q \vee \neg s) \land (p \vee \neg r \vee \neg s) \land (\neg p \vee \neg q \vee \neg s) \land (p \vee q \vee \neg s)$
- $(\neg p \vee \neg q \vee r) \land (\neg p \vee q \vee \neg s) \land (p \vee \neg q \vee \neg s) \land (\neg p \vee \neg r \vee \neg s) \land (p \vee q \vee r)$

### Solución

El problema pide determinar si las siguientes proposiciones compuestas son **satisfacibles**, es decir, si existe alguna asignación de valores de verdad para las variables ($p$, $q$, $r$, $s$) que haga verdadera toda la expresión. Cada proposición es una conjunción de cláusulas, y una cláusula es verdadera si al menos uno de sus literales es verdadero.

Para la **Proposición 1**: $(p \vee q \vee \neg r) \land (p \vee \neg q \vee \neg s) \land (p \vee \neg r \vee \neg s) \land (\neg p \vee \neg q \vee \neg s) \land (p \vee q \vee \neg s)$, observamos que $p$ aparece positivamente en casi todas las cláusulas. Asignando $p = V$, todas las cláusulas donde aparece $p$ automáticamente son verdaderas. Solo queda verificar la cláusula $(\neg p \vee \neg q \vee \neg s)$, que se convierte en $(F \vee \neg q \vee \neg s)$, por lo que necesitamos que $\neg q$ o $\neg s$ sean verdaderos. Asignando $q=F$, esta cláusula se satisface independientemente de $s$. Así, una asignación que satisface toda la proposición es $p=V$, $q=F$, y cualquier valor para $r$ y $s$ (por ejemplo, $r=V$, $s=V$). Por tanto, la **Proposición 1 es satisfacible**.

En cuanto a la **Proposición 2**: $(\neg p \vee \neg q \vee r) \land (\neg p \vee q \vee \neg s) \land (p \vee \neg q \vee \neg s) \land (\neg p \vee \neg r \vee \neg s) \land (p \vee q \vee r)$, asignamos nuevamente $p = V$. Con esta asignación, las cláusulas $(p \vee \neg q \vee \neg s)$ y $(p \vee q \vee r)$ quedan automáticamente verdaderas. Las otras cláusulas exigen condiciones adicionales: $(\neg q \vee r)$, $(q \vee \neg s)$ y $(\neg r \vee \neg s)$ deben ser verdaderas. Si tomamos $q=V$, entonces $(q \vee \neg s)$ se satisface. Para $(\neg q \vee r)$, dado que $q=V$, necesitamos $r=V$. Finalmente, en $(\neg r \vee \neg s)$, con $r=V$, necesitamos que $s=F$. Así, una asignación que satisface toda la proposición es $p=V$, $q=V$, $r=V$, $s=F$. Por tanto, la **Proposición 2 también es satisfacible**.

Una verificación alternativa es construir la **tabla de verdad** de ambas proposiciones. Si se revisan todas las combinaciones de valores de verdad posibles, se observa que en ambas tablas la columna final tiene varias filas donde el valor es Verdadero.

Por ejmplo, la tabla para la **Proposición 1** es

$$
\begin{array}{| c | c | c | c || c | c | c | c | c || c |}
\hline
p & q & r & s & C_1 & C_2 & C_3 & C_4 & C_5 & P_1 \\
 & & & & (p \vee q \vee \neg r) & (p \vee \neg q \vee \neg s) & (p \vee \neg r \vee \neg s) & (\neg p \vee \neg q \vee \neg s) & (p \vee q \vee \neg s) & C_1 \land ... \land C_5 \\
\hline
V & V & V & V & V & V & V & F & V & F \\
V & V & V & F & V & V & V & V & V & \mathbf{V} \\
V & V & F & V & V & V & V & F & V & F \\
V & V & F & F & V & V & V & V & V & \mathbf{V} \\
V & F & V & V & V & V & V & V & V & \mathbf{V} \\
V & F & V & F & V & V & V & V & V & \mathbf{V} \\
V & F & F & V & V & V & V & V & V & \mathbf{V} \\
V & F & F & F & V & V & V & V & V & \mathbf{V} \\
F & V & V & V & V & F & F & V & V & F \\
F & V & V & F & V & V & V & V & V & \mathbf{V} \\
F & V & F & V & V & F & V & V & V & F \\
F & V & F & F & V & V & V & V & V & \mathbf{V} \\
F & F & V & V & F & V & F & V & F & F \\
F & F & V & F & F & V & V & V & V & F \\
F & F & F & V & V & V & V & V & F & F \\
F & F & F & F & V & V & V & V & V & \mathbf{V} \\
\hline
\end{array}
$$

Como se observa, la columna final $P_1$ contiene varios 'V'. Por lo tanto, la Proposición 1 es satisfacible.

## Ejercicio 9

### Planteamiento

Dada la siguiente información sobre un programa de computadora, encuentre el error en el programa:

a. Hay una variable no declarada o hay un error de sintaxis en las primeras cinco líneas.  
b. Si hay un error de sintaxis en las primeras cinco líneas, entonces falta un punto y coma o el nombre de una variable está mal escrito.  
c. No falta un punto y coma.  
d. No está mal escrito el nombre de una variable.

### Solución

Dado el planteamiento, comenzamos definiendo las siguientes proposiciones: sea $p$ la afirmación "Hay una variable no declarada", $q$ "Hay un error de sintaxis en las primeras cinco líneas", $r$ "Falta un punto y coma", y $s$ "El nombre de una variable está mal escrito". Con esto, las premisas del problema se traducen así: $p \lor q$ (premisa 1), $q \to (r \lor s)$ (premisa 2), $\neg r$ (premisa 3) y $\neg s$ (premisa 4).

Procedemos a realizar las deducciones correspondientes. A partir de $\neg r$ y $\neg s$, mediante la regla de conjunción, obtenemos $\neg r \land \neg s$. Aplicando las leyes de De Morgan, esta conjunción es equivalente a $\neg (r \lor s)$. Así, sabemos que $r \lor s$ es falso.

Ahora, utilizamos Modus Tollens sobre la premisa $q \to (r \lor s)$ y la negación $\neg (r \lor s)$ que acabamos de deducir, lo cual nos permite concluir $\neg q$; es decir, no hay error de sintaxis en las primeras cinco líneas. Luego, empleando el Silogismo Disyuntivo sobre $p \lor q$ y $\neg q$, inferimos que $p$ debe ser verdadero.

Finalmente, al recordar la definición de $p$, llegamos a la conclusión de que el error en el programa es que **hay una variable no declarada**.

## Ejercicio 10

### Planteamiento

El Problema Lógico, tomado de _WFF'N PROOF, The Game of Logic_, tiene las siguientes dos suposiciones:

1. "La lógica es difícil o no a muchos estudiantes les gusta la lógica."
2. "Si las matemáticas son fáciles, entonces la lógica no es difícil."

Al traducir estas suposiciones en enunciados que involucren variables proposicionales y conectivos lógicos, determina si cada una de las siguientes afirmaciones es una conclusión válida a partir de dichas suposiciones:

a) Que las matemáticas no son fáciles, si a muchos estudiantes les gusta la lógica.

b) Que no a muchos estudiantes les gusta la lógica, si las matemáticas no son fáciles.

c) Que las matemáticas no son fáciles o la lógica es difícil.

d) Que la lógica no es difícil o las matemáticas no son fáciles.

e) Que si no a muchos estudiantes les gusta la lógica, entonces o bien las matemáticas no son fáciles o la lógica no es difícil.

### Solución

Primero, definimos las proposiciones básicas. Sea $d$ la afirmación "La lógica es difícil", $l$ "A muchos estudiantes les gusta la lógica", y $m$ "Las matemáticas son fáciles". Las premisas dadas son entonces: $P_1: d \lor \neg l$ y $P_2: m \to \neg d$.

Reescribimos las premisas de manera útil: $P_1$ es equivalente a $l \to d$, mientras que $P_2$ es equivalente a su contrapositiva $d \to \neg m$. Esto nos permite aplicar deducción lógica de forma más directa.

Para analizar la conclusión (a), que es $C_a: l \to \neg m$, observamos que, dado $l \to d$ y $d \to \neg m$, aplicando el **silogismo hipotético** concluimos que $l \to \neg m$ es una consecuencia válida de las premisas.

Respecto a la conclusión (b), $C_b: \neg m \to \neg l$, a partir de las premisas podemos derivar $m \to \neg l$ mediante un silogismo, pero no su inversa. De hecho, un contraejemplo es cuando $m$ es falso, $l$ es verdadero y $d$ es verdadero, por lo que las premisas resultan verdaderas y la conclusión falsa. Así (b) **no es válida**.

Para el inciso (c), $C_c: \neg m \lor d$, que es lógicamente equivalente a $m \to d$, notamos que las premisas implican $m \to \neg d$ y no $m \to d$. Tomando $m$ verdadero, $d$ falso y $l$ falso, las premisas se satisfacen mientras que la conclusión es falsa. Por lo tanto, (c) **no es válida**.

Para la afirmación (d), $C_d: \neg d \lor \neg m$, observamos que es simplemente una reescritura de $P_2$ aplicando la equivalencia de la implicación y la ley conmutativa. Como se deriva directamente de una premisa, (d) es **válida**.

Finalmente, el inciso (e), $C_e: \neg l \to (\neg m \lor \neg d)$, ya que $\neg m \lor \neg d$ equivale a $P_2$ y sabemos que $P_2$ es verdadera por suposición, una implicación con consecuente verdadero es siempre verdadera, por lo que (e) también es **válida**.

## Ejercicio 11

### Planteamiento

Para la siguiente tabla, construya (a) una expresión booleana que tenga la tabla dada como su tabla de verdad y (b) un circuito que tenga la tabla dada como su tabla de entrada/salida.

$$
\begin{array}{|c|c|c|c|}
\hline
\mathbf{P} & \mathbf{Q} & \mathbf{R} & \mathbf{F} \\ \hline
1 & 1 & 1 & 0 \\ 1 & 1 & 0 & 1 \\ 1 & 0 & 1 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 1 & 1 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \\ \hline
\end{array}
$$

### Solución

**Parte (a): Expresión Booleana**

Las salidas $F=1$ ocurren en las combinaciones $(1,1,0)$, $(0,1,1)$ y $(0,1,0)$. La forma normal disyuntiva inicial es:

$$
F = (P \land Q \land \neg R) \lor (\neg P \land Q \land R) \lor (\neg P \land Q \land \neg R)
$$

Agrupamos y simplificamos:

$$
\begin{aligned}
(\neg P \land Q \land R) \lor (\neg P \land Q \land \neg R) &= (\neg P \land Q) \land (R \lor \neg R) && (\text{Distributiva}) \\
&= \neg P \land Q && (\text{Ley del Complemento})
\end{aligned}
$$

Sustituimos:

$$
F = (P \land Q \land \neg R) \lor (\neg P \land Q)
$$

Aplicamos ley distributiva a $Q$ y simplificamos

$$
\begin{aligned}
Q \land ((P \land \neg R) \lor \neg P) &= Q \land ((\neg P \lor P) \land (\neg P \lor \neg R)) && (\text{Distributiva}) \\
&= Q \land (T \land (\neg P \lor \neg R)) && (\text{Complemento}) \\
&= Q \land (\neg P \lor \neg R) && (\text{Identidad})
\end{aligned}
$$

Así, la expresión final es:

$$
F = Q \land (\neg P \lor \neg R)
$$

**Parte (b): Circuito Lógico**

El circuito consiste en invertir $P$ y $R$, pasar las salidas por una compuerta OR, y luego combinar el resultado con $Q$ en una compuerta AND para obtener $F$.

![Circuito](src/circuito_compuertas.jpg)

## Ejercicio 12

### Planteamiento

Estás en una isla habitada por dos tipos de personas: caballeros, que siempre dicen la verdad, y tramposos, que siempre mienten. Supón que tienes los siguientes encuentros con nativos.

a. Dos nativos, A y B, se dirigen a ti de la siguiente manera:  
A dice: Ambos somos caballeros.
B dice: A es un tramposo.
¿Qué son A y B?

b. Otros dos nativos, C y D, se te acercan, pero solo C habla.  
C dice: Ambos somos tramposos.
¿Qué son C y D?

c. Luego te encuentras con los nativos E y F.  
E dice: F es un tramposo.
F dice: E es un tramposo.  
¿Cuántos tramposos hay?

### Solución

En esta isla, cada habitante es un **caballero** (siempre dice la verdad) o un **tramposo** (siempre miente). Formalmente, si $K_X$ es la proposición "X es un caballero" y $P$ es lo que X dice, entonces siempre se cumple $K_X \iff P$.

**Parte (a): Encuentro con A y B**

Sean $K_A$ y $K_B$ las proposiciones "A es un caballero" y "B es un caballero", respectivamente.  
A dice: "Ambos somos caballeros", es decir, $P_A = K_A \land K_B$.  
B dice: "A es un tramposo", es decir, $P_B = \neg K_A$.

Aplicamos $K_A \iff P_A$ y $K_B \iff P_B$. Supongamos primero que $K_A$ es verdadera. Entonces $(K_A \land K_B)$ debe ser verdadera, implicando que $K_B$ es verdadera. Siendo B un caballero, su declaración $P_B$ también debe ser verdadera, por lo que $\neg K_A$ sería verdadera, contradiciendo que $K_A$ es verdadera. Así, A no puede ser un caballero.

Suponiendo ahora que $K_A$ es falsa (A es un tramposo), su declaración $P_A$ debe ser falsa, lo cual es coherente. Como A es tramposo, $K_B \iff \neg K_A$ implica que $K_B$ es verdadera, es decir, B es un caballero. Esto es consistente, ya que B afirmaría que A es un tramposo y estaría diciendo la verdad.

Por lo tanto, A es un tramposo y B es un caballero.

**Parte (b): Encuentro con C y D**

Sea $K_C$ la proposición "C es un caballero" y $K_D$ "D es un caballero". C dice: "Ambos somos tramposos", o sea, $P_C = \neg K_C \land \neg K_D$.

Aplicamos $K_C \iff P_C$. Si $K_C$ fuera verdadera (C caballero), entonces $(\neg K_C \land \neg K_D)$ tendría que ser verdadera. Pero $\neg K_C$ sería verdadera, lo que implicaría que $K_C$ es falsa, una contradicción. Así, $K_C$ debe ser falsa, es decir, C es un tramposo.

Como C es un tramposo, su declaración debe ser falsa. Sabemos que $\neg K_C$ ya es verdadera, por lo que para que la conjunción $(\neg K_C \land \neg K_D)$ sea falsa, debe ser que $\neg K_D$ es falsa, es decir, $K_D$ es verdadera. D es un caballero.

En consecuencia, C es un tramposo y D un caballero.

**Parte (c): Encuentro con E y F**

Sean $K_E$ y $K_F$ las proposiciones "E es un caballero" y "F es un caballero". E dice: "F es un tramposo", $P_E = \neg K_F$. F dice: "E es un tramposo", $P_F = \neg K_E$.

Aplicamos $K_E \iff P_E$ y $K_F \iff P_F$. La relación $K_E \iff \neg K_F$ indica que E es un caballero si y solo si F es un tramposo, y viceversa. Análogamente, $K_F \iff \neg K_E$ muestra que F es un caballero si y solo si E es un tramposo.

Ambas proposiciones nos indican que E y F son de tipos opuestos: uno caballero y el otro tramposo. Al no especificar cuál es cuál, podemos asegurar únicamente que hay exactamente un tramposo entre E y F.

## Ejercicio 13

### Planteamiento

Al fondo de un viejo armario descubres una nota firmada por un pirata famoso por su extraño sentido del humor y su amor por los acertijos lógicos. En la nota, escribió que había escondido un tesoro en algún lugar de la propiedad. Dio cinco afirmaciones verdaderas (mostradas a continuación) y desafió al lector a usarlas para descubrir la ubicación del tesoro.

a. Si esta casa está junto a un lago, entonces el tesoro no está en la cocina.
b. Si el árbol del jardín delantero es un olmo, entonces el tesoro está en la cocina.
c. Esta casa está junto a un lago.
d. El árbol del jardín delantero es un olmo o el tesoro está enterrado bajo el asta de la bandera.
e. Si el árbol del jardín trasero es un roble, entonces el tesoro está en el garaje.

¿Dónde está escondido el tesoro?

### Solución

Definimos las siguientes proposiciones para trabajar con lógica simbólica:

- $p$: "La casa está junto a un lago."
- $q$: "El tesoro está en la cocina."
- $r$: "El árbol del jardín delantero es un olmo."
- $s$: "El tesoro está enterrado bajo el asta de la bandera."
- $t$: "El árbol del jardín trasero es un roble."
- $u$: "El tesoro está en el garaje."

Las afirmaciones se traducen a notación lógica como sigue:

1. $p \to \neg q$ (Si la casa está junto a un lago, el tesoro no está en la cocina.)
2. $r \to q$ (Si el árbol delantero es un olmo, el tesoro está en la cocina.)
3. $p$ (La casa está junto a un lago.)
4. $r \lor s$ (El árbol delantero es un olmo o el tesoro está bajo el asta de la bandera.)
5. $t \to u$ (Si el árbol trasero es un roble, el tesoro está en el garaje.)

**Paso 1: Determinar $\neg q$**

Sabemos que $p$ es verdadero (premisa 3), y que $p \to \neg q$ (premisa 1). Aplicando **Modus Ponens**, concluimos que $\neg q$ es verdadero, lo que significa que el tesoro no está en la cocina.

**Paso 2: Determinar $\neg r$**

La premisa 2 establece que $r \to q$. Como hemos deducido que $\neg q$ es verdadero, aplicamos **Modus Tollens** para concluir que $\neg r$ también debe ser verdadero. Esto significa que el árbol del jardín delantero no es un olmo.

**Paso 3: Usar $r \lor s$**

Sabemos que $r \lor s$ es verdadero (premisa 4), y que $\neg r$ es verdadero. Por lo tanto, por **Silogismo Disyuntivo**, podemos concluir que $s$ es verdadero, es decir, el tesoro está enterrado bajo el asta de la bandera.

**Paso 4: Evaluar la premisa 5**

La premisa 5 no nos proporciona información adicional para cambiar nuestra conclusión, ya que no sabemos si $t$ es verdadero o falso. Por lo tanto, esta premisa no afecta nuestra deducción.

**Respuesta**: Con base en las deducciones lógicas realizadas a partir de las premisas, hemos concluido que el tesoro está enterrado bajo el asta de la bandera.

## Ejercicio 14

### Planteamiento

Verifica que cada uno de los siguientes enunciados es una implicación lógica mostrando que es imposible que la conclusión tenga el valor de verdad $0$ mientras la hipótesis tenga el valor de verdad $1$.

a) $(p \land q) \rightarrow p$

b) $p \rightarrow (p \lor q)$

c) $[(p \lor q) \land \neg p] \rightarrow q$

d) $[(p \rightarrow q) \land (r \rightarrow s) \land (p \lor r)] \rightarrow (q \lor s)$

### Solución

El objetivo es verificar que cada una de las implicaciones lógicas propuestas es verdadera, demostrando que no es posible que la conclusión sea falsa mientras la hipótesis sea verdadera. Esto se logra mediante prueba por contradicción, mostrando que si asumimos que la implicación es falsa, se llega a una contradicción. Dada una proposición $p$, denotaremos por $v(p)$ el valor de verdad de la misma (0 para falso, 1 para verdadero).

**a) Verificación de $(p \land q) \rightarrow p$**

La hipótesis es $H = (p \land q)$ y la conclusión es $C = p$. Supongamos que la implicación es falsa, es decir, $H = 1$ y $C = 0$. Esto implica que $v(p) = 0$ y que $p$ y $q$ deben ser verdaderos para que $(p \land q)$ sea verdadero. Sin embargo, esto es una contradicción, ya que no puede ser que $p$ sea falso y verdadero al mismo tiempo. Por lo tanto, la implicación es siempre verdadera.

**b) Verificación de $p \rightarrow (p \lor q)$**

En este caso, la hipótesis es $H = p$ y la conclusión es $C = (p \lor q)$. Supongamos que la implicación es falsa, es decir, $H = 1$ y $C = 0$. Esto implica que $v(p) = 1$ y $v(q) = 0$. Sin embargo, para que $(p \lor q)$ sea falso, ambas $p$ y $q$ deben ser falsas, lo cual es una contradicción porque ya sabemos que $p$ es verdadero. Por lo tanto, la implicación es siempre verdadera.

**c) Verificación de $[(p \lor q) \land \neg p] \rightarrow q$**

La hipótesis es $H = (p \lor q) \land \neg p$ y la conclusión es $C = q$. Supongamos que la implicación es falsa, es decir, $H = 1$ y $C = 0$. Esto implica que $v(q) = 0$ y que $(p \lor q) = 1$ y $\neg p = 1$. Si $p$ es falso, entonces $q$ debe ser falso, pero esto haría que la disyunción $(p \lor q)$ sea falsa, lo que es una contradicción. Por lo tanto, la implicación es siempre verdadera.

**d) Verificación de $[(p \rightarrow q) \land (r \rightarrow s) \land (p \lor r)] \rightarrow (q \lor s)$**

La hipótesis es $H = (p \rightarrow q) \land (r \rightarrow s) \land (p \lor r)$ y la conclusión es $C = (q \lor s)$. Supongamos que la implicación es falsa, es decir, $H = 1$ y $C = 0$. Esto implica que $v(q) = 0$ y $v(s) = 0$. Sin embargo, dado que $p$ y $r$ deben ser falsos para que las implicaciones $p \rightarrow q$ y $r \rightarrow s$ se mantengan, la disyunción $(p \lor r)$ también debe ser falsa, lo cual contradice la hipótesis de que $H = 1$. Por lo tanto, la implicación es siempre verdadera.

## Ejercicio 15

### Planteamiento

Para las siguientes afirmaciones, el universo comprende todos los enteros no nulos (es decir, aquellos que no son cero). Determina el valor de verdad de cada afirmación.

a) $\exists x \ \exists y \ [xy = 1]$

b) $\exists x \ \forall y \ [xy = 1]$

c) $\forall x \ \exists y \ [xy = 1]$

d) $\exists x \ \exists y \ [(2x + y = 5) \land (x - 3y = -8)]$

e) $\exists x \ \exists y \ [(3x - y = 7) \land (2x + 4y = 3)]$

Después responde este ejercicio para el universo de todos los números reales que no son cero

### Solución

**Inciso (a)**

Queremos response si existen $x, y \in \mathbb{Z} \setminus \{0\}$ tal que $xy = 1$. Buscamos enteros no nulos $x$ y $y$ tal que $xy = 1$.

Notamos que si $x = 1$, entonces $y = 1$ cumple $1 \times 1 = 1$. Así que existen tales enteros (basta con un solo ejemplo).

**Conclusión: Verdadero**.

**Inciso (b)**

Queremos saber si existe $x \in \mathbb{Z} \setminus \{0\}$ tal que para todo $y \in \mathbb{Z} \setminus \{0\}$ se cumpla $xy = 1$.

Supongamos que existe tal $x$. Entonces, para todo $y$, $xy = 1$.

En particular, tomemos $y = 2$. Entonces $x \cdot 2 = 1$, lo cual implica $x = 1/2$

Pero $1/2$ no es un entero no nulo. Por tanto, no existe tal $x$.

**Conclusión: Falso**.

**Inciso (c)**

Queremos si para todo $x \in \mathbb{Z} \setminus \{0\}$ existe $y \in \mathbb{Z} \setminus \{0\}$ tal que $xy = 1$.

Supongamos que tomamos $x = 2$. Veamos si existe un $y \in \mathbb{Z} \setminus \{0\}$ tal que $2y = 1$.

Despejando tenemos que $y = 1/2$, el cual no es un entero. Por tanto, no existe tal $y$ para $x=2$.

**Conclusión**: **Falso**.

**Inciso (d): $\exists x \ \exists y \ \left( (2x + y = 5) \land (x - 3y = -8) \right)$**

Queremos saber si existe $(x,y) \in (\mathbb{Z} \setminus \{0\})^2$ que satisfaga el sistema. El sistema es

$$
\begin{align}
2x + y &= 5 \\
x - 3y &= -8
\end{align}
$$

Resolviendo (por ejemplo usando sustitución) obtenemos la solución $(x,y) = (1,3)$, ambos enteros no nulos.

**Conclusión**: **Verdadero**.

**Inciso (e): $\exists x \ \exists y \ \left( (3x - y = 7) \land (2x + 4y = 3) \right)$**

Queremos saber si existe $(x,y) \in (\mathbb{Z} \setminus \{0\})^2$ que satisfaga el sistema.

El sistema es:

$$
\begin{align}
3x - y &= 7 \\
2x + 4y &= 3
\end{align}
$$

Resolviendo obtenemos la solución

$$
x = \frac{31}{14}, \quad y = -\frac{5}{14}
$$

Ninguno de ellos es entero, por lo que no hay soluciones en enteros no nulos.

**Conclusión**: **Falso**.

**Parte 2: Universo: **$\mathbb{R} \setminus \{0\}$** (reales no nulos)**

Las resoluciones son similares, pero ahora sí permitimos fracciones, porque estamos en $\mathbb{R} \setminus \{0\}$.

**Inciso (a)**

Existen $(x,y)$ reales no nulos tales que $xy=1$ (por ejemplo, $x=2$, $y=1/2$).

**Conclusión**: **Verdadero**.

**Inciso (b)**

Supongamos que existe $x$ tal que para **todo** $y$, $xy=1$.

Entonces tomando $y=2$, tendríamos $x \cdot 2 = 1 \quad \Rightarrow \quad x = 1/2$

Pero si tomamos $y=3$, tendríamos $1/2 \cdot 3 = 3/2 \neq 1$, que es una contradicción.

**Conclusión**: **Falso**.

**Inciso (c)**

Para **cada** $x \in \mathbb{R} \setminus \{0\}$, podemos tomar $y = 1/x$ y entonces $xy = x \cdot 1/x = 1$

**Conclusión**: **Verdadero**.

**Inciso (d)**

Ya vimos que el sistema tiene solución $(x,y) = (1,3)$, que son números reales no nulos.

**Conclusión**: **Verdadero**.

**Inciso (e)**

Aunque en los enteros no había solución, en $\mathbb{R}$ sí $(x,y) = \left(31/14, -5/14\right)$, ambos no nulos.

**Conclusión**: **Verdadero**.

**Tabla de respuestas**

$$
\begin{array}{|c|c|c|}
\hline
\textbf{Inciso} & \textbf{Universo: } \mathbb{Z} \setminus \{0\} & \textbf{Universo: } \mathbb{R} \setminus \{0\} \\ \hline
(a) & \text{Verdadero} & \text{Verdadero} \\ \hline
(b) & \text{Falso} & \text{Falso} \\ \hline
(c) & \text{Falso} & \text{Verdadero} \\ \hline
(d) & \text{Verdadero} & \text{Verdadero} \\ \hline
(e) & \text{Falso} & \text{Verdadero} \\ \hline
\end{array}
$$
