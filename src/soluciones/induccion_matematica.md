## Ejercicio 1

### Planteamiento

Demuestra que si $h > -1$, entonces $1 + nh \leq (1 + h)^n$ para todo entero no negativo $n$. Esto se llama la **desigualdad de Bernoulli**.

### Solución

Queremos demostrar por inducción que si $h > -1$, entonces para todo entero no negativo $n$, se cumple la desigualdad

$$
1 + nh \leq (1 + h)^n.
$$

Primero verificamos el caso base $n = 0$. Sustituyendo, obtenemos $1 + 0h = 1$ y $(1+h)^0 = 1$. Como $1 \leq 1$ es cierto, el caso base se cumple.

Ahora procedemos con el paso inductivo. Supongamos que para un cierto $k \geq 0$, la desigualdad

$$
1 + kh \leq (1 + h)^k
$$

es verdadera (hipótesis inductiva). Debemos demostrar que también lo es para $k+1$, es decir,

$$
1 + (k+1)h \leq (1+h)^{k+1}.
$$

Recordando que $(1+h)^{k+1} = (1+h)^k (1+h)$ y utilizando la hipótesis inductiva, tenemos

$$
(1+kh)(1+h) \leq (1+h)^k(1+h) = (1+h)^{k+1}.
$$

Expandimos el producto en el lado izquierdo:

$$
(1+kh)(1+h) = 1 + h + kh + kh^2 = 1 + (k+1)h + kh^2.
$$

Observamos que $kh^2 \geq 0$ porque $k \geq 0$ y $h^2 \geq 0$. Por tanto,

$$
1 + (k+1)h \leq 1 + (k+1)h + kh^2,
$$

y combinando con la desigualdad anterior, concluimos que

$$
1 + (k+1)h \leq (1+h)^{k+1}.
$$

Así, por el principio de inducción matemática, la desigualdad $1 + nh \leq (1+h)^n$ es verdadera para todo $n \geq 0$, siempre que $h > -1$.

## Ejercicio 2

### Planteamiento

Demuestra que para todo entero positivo $n$,

$$
1 + \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{3}} + \cdots + \frac{1}{\sqrt{n}} > 2(\sqrt{n+1} - 1).
$$

### Solución

Queremos demostrar que para todo entero positivo $n$, se cumple la desigualdad

$$
1 + \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{3}} + \cdots + \frac{1}{\sqrt{n}} > 2(\sqrt{n+1} - 1).
$$

Procederemos mediante inducción matemática.

Primero, verificamos el caso base $n=1$. El lado izquierdo es simplemente $1$, mientras que el lado derecho es $2(\sqrt{2} - 1) = 2\sqrt{2} - 2$. Comparando, queremos ver si $1 > 2\sqrt{2} - 2$. Sumando $2$ a ambos lados, obtenemos $3 > 2\sqrt{2}$. Elevando al cuadrado, $9 > 8$, lo cual es verdadero. Por tanto, el caso base queda verificado.

Para el paso inductivo, supongamos que para algún $k \geq 1$ se cumple

$$
1 + \frac{1}{\sqrt{2}} + \cdots + \frac{1}{\sqrt{k}} > 2(\sqrt{k+1} - 1).
$$

Queremos demostrar que entonces

$$
1 + \frac{1}{\sqrt{2}} + \cdots + \frac{1}{\sqrt{k}} + \frac{1}{\sqrt{k+1}} > 2(\sqrt{k+2} - 1).
$$

Añadiendo $\frac{1}{\sqrt{k+1}}$ a ambos lados de la hipótesis inductiva, tenemos

$$
\left(1 + \frac{1}{\sqrt{2}} + \cdots + \frac{1}{\sqrt{k}}\right) + \frac{1}{\sqrt{k+1}} > 2(\sqrt{k+1} - 1) + \frac{1}{\sqrt{k+1}}.
$$

Debemos ahora comparar $2(\sqrt{k+1} - 1) + \frac{1}{\sqrt{k+1}}$ con $2(\sqrt{k+2} - 1)$.

Desarrollando, el primer término es $2\sqrt{k+1} - 2 + \frac{1}{\sqrt{k+1}}$. Sumando 2 a ambos lados de la desigualdad que queremos probar, obtenemos

$$
2\sqrt{k+1} + \frac{1}{\sqrt{k+1}} > 2\sqrt{k+2}.
$$

Multiplicando ambos lados por $\sqrt{k+1}$, que es positivo, resulta

$$
2(k+1) + 1 > 2\sqrt{(k+1)(k+2)}.
$$

Simplificando, llegamos a

$$
2k + 3 > 2\sqrt{k^2 + 3k + 2}.
$$

Elevando al cuadrado ambos lados, obtenemos

$$
(2k+3)^2 > 4(k^2 + 3k + 2),
$$

es decir,

$$
4k^2 + 12k + 9 > 4k^2 + 12k + 8,
$$

lo que se reduce a $9 > 8$, una desigualdad verdadera.

Así, hemos demostrado que

$$
2(\sqrt{k+1} - 1) + \frac{1}{\sqrt{k+1}} > 2(\sqrt{k+2} - 1),
$$

lo cual implica, por transitividad, que

$$
1 + \frac{1}{\sqrt{2}} + \cdots + \frac{1}{\sqrt{k+1}} > 2(\sqrt{k+2} - 1).
$$

Esto completa el paso inductivo.

Por el principio de inducción matemática, concluimos que para todo entero positivo $n$,

$$
1 + \frac{1}{\sqrt{2}} + \cdots + \frac{1}{\sqrt{n}} > 2(\sqrt{n+1} - 1).
$$

queda demostrado.

## Ejercicio 3

### Planteamiento

Demuestra que $21$ divide $4^{n+1} + 5^{2n-1}$ siempre que $n$ sea un entero positivo.

### Solución

Queremos demostrar que $21$ divide a $4^{n+1} + 5^{2n-1}$ para todo entero positivo $n$, utilizando inducción matemática.

Primero, verificamos el caso base $n=1$. Sustituimos en la expresión:  
$$ 4^{1+1} + 5^{2(1)-1} = 4^2 + 5^1 = 16 + 5 = 21, $$  
que claramente es divisible por $21$. El caso base se cumple.

Para el paso inductivo, supongamos que para un cierto $k\geq1$ se cumple que $4^{k+1} + 5^{2k-1}$ es divisible por $21$, es decir, existe un entero $m$ tal que $4^{k+1} + 5^{2k-1} = 21m$. Queremos probar que también $4^{(k+1)+1} + 5^{2(k+1)-1} = 4^{k+2} + 5^{2k+1}$ es divisible por $21$.

Aplicando propiedades de los exponentes, tenemos:  
$$ 4^{k+2} = 4\cdot 4^{k+1}, \quad 5^{2k+1} = 25\cdot 5^{2k-1}. $$  
Así,  
$$ 4^{k+2} + 5^{2k+1} = 4\cdot 4^{k+1} + 25\cdot 5^{2k-1}. $$

Observamos que $25 = 4 + 21$, por lo que:  
$$ 25\cdot 5^{2k-1} = (4+21)\cdot 5^{2k-1} = 4\cdot 5^{2k-1} + 21\cdot 5^{2k-1}. $$  
Sustituyendo, se obtiene:  
$$ 4\cdot 4^{k+1} + 4\cdot 5^{2k-1} + 21\cdot 5^{2k-1} = 4(4^{k+1} + 5^{2k-1}) + 21\cdot 5^{2k-1}. $$

Usando la hipótesis inductiva $4^{k+1} + 5^{2k-1} = 21m$, tenemos:  
$$ 4(21m) + 21\cdot 5^{2k-1} = 21(4m + 5^{2k-1}). $$

Como $4m + 5^{2k-1}$ es un entero, concluimos que $4^{k+2} + 5^{2k+1}$ es divisible por $21$. Por el principio de inducción matemática, hemos demostrado que $21$ divide a $4^{n+1} + 5^{2n-1}$ para todo entero positivo $n$.

## Ejercicio 4

### Planteamiento

Demuestra que para todo entero positivo $n$,

$$
\sum_{k=1}^{n} k \cdot 2^k = (n - 1) \cdot 2^{n+1} + 2.
$$

### Solución

Comenzamos verificando el caso base $n=1$. Calculamos ambos lados de la ecuación: el lado izquierdo es $\sum\_{k=1}^{1} k \cdot 2^k = 1 \cdot 2^1 = 2$, y el lado derecho es $(1-1) \cdot 2^{1+1} + 2 = 0 \cdot 4 + 2 = 2$. Como ambos lados coinciden, el caso base es verdadero.

Ahora, realizamos el paso inductivo. Suponemos que la fórmula es válida para algún entero positivo $m$, es decir,

$$
\sum_{k=1}^{m} k \cdot 2^k = (m-1) \cdot 2^{m+1} + 2.
$$

Bajo esta hipótesis, queremos demostrar que también se cumple para $m+1$, es decir, que

$$
\sum_{k=1}^{m+1} k \cdot 2^k = m \cdot 2^{m+2} + 2.
$$

Partimos del lado izquierdo:

$$
\sum_{k=1}^{m+1} k \cdot 2^k = \left( \sum_{k=1}^{m} k \cdot 2^k \right) + (m+1) \cdot 2^{m+1}.
$$

Por la hipótesis inductiva, sustituimos la suma hasta $m$:

$$
\begin{align*}
&= \left( (m-1) \cdot 2^{m+1} + 2 \right) + (m+1) \cdot 2^{m+1} \\
&= \left( (m-1) + (m+1) \right) \cdot 2^{m+1} + 2 = (2m) \cdot 2^{m+1} + 2 \\
&= m \cdot 2^{m+2} + 2.
\end{align*}
$$

Esto coincide exactamente con el lado derecho de la proposición para $m+1$, completando así el paso inductivo.

## Ejercicio 5

### Planteamiento

a) Considera un tablero de ajedrez de $8 \times 8$. Contiene sesenta y cuatro cuadrados de $1 \times 1$ y un cuadrado de $8 \times 8$. ¿Cuántos cuadrados de $2 \times 2$ contiene? ¿Cuántos cuadrados de $3 \times 3$? ¿Cuántos cuadrados en total?

b) Ahora considera un tablero de ajedrez de $n \times n$ para algún $n \in \mathbb{Z}^+$. Para $1 \leq k \leq n$, ¿cuántos cuadrados de $k \times k$ hay en este tablero? ¿Cuántos cuadrados hay en total?

### Solución

**Parte (a)**

Comenzamos analizando el tablero de ajedrez estándar de $8 \times 8$. Queremos contar cuántos cuadrados de diferentes tamaños contiene.

Primero, consideremos los cuadrados de $2 \times 2$. Para visualizar dónde puede caber un cuadrado de $2 \times 2$, podemos pensar en la posición de su esquina superior izquierda. En la dirección horizontal, la esquina superior izquierda puede estar en cualquiera de las primeras $7$ columnas (columnas 1 a 7). Si estuviera en la columna 8, el cuadrado se saldría del tablero. Del mismo modo, en la dirección vertical, la esquina superior izquierda puede estar en cualquiera de las primeras $7$ filas (filas 1 a 7). Por lo tanto, hay $7$ opciones para la columna y $7$ opciones para la fila, lo que da un total de $7 \times 7 = 49$ posiciones posibles para la esquina superior izquierda. Cada posición define un único cuadrado de $2 \times 2$. Así, hay $49$ cuadrados de $2 \times 2$, lo cual es $7^2$.

Aplicamos el mismo razonamiento a los cuadrados de $3 \times 3$. La esquina superior izquierda de un cuadrado de $3 \times 3$ puede colocarse en las columnas $1$ a $6$ (ya que $6+3-1 = 8$) y en las filas $1$ a $6$. Esto nos da $6$ opciones horizontales y $6$ opciones verticales. Por lo tanto, hay $6 \times 6 = 36$ posiciones posibles para la esquina superior izquierda, lo que significa que hay $36$ cuadrados de $3 \times 3$, o $6^2$.

Para encontrar el número total de cuadrados de _todos_ los tamaños en el tablero de $8 \times 8$, necesitamos sumar el número de cuadrados de cada tamaño posible, desde $1 \times 1$ hasta $8 \times 8$. Siguiendo el patrón:

- Cuadrados de $1 \times 1$: La esquina superior izquierda puede estar en $8 \times 8 = 64 = 8^2$ posiciones.
- Cuadrados de $2 \times 2$: Como encontramos, hay $7^2 = 49$.
- Cuadrados de $3 \times 3$: Como encontramos, hay $6^2 = 36$.
- ...
- Cuadrados de $8 \times 8$: La esquina superior izquierda solo puede estar en la posición $(1,1)$, por lo que hay $1^2 = 1$.

El número total de cuadrados es la suma de estas cantidades: $8^2 + 7^2 + 6^2 + 5^2 + 4^2 + 3^2 + 2^2 + 1^2$. Esto es la suma de los primeros 8 cuadrados perfectos. Podemos reescribir esto como $\sum_{i=1}^{8} i^2$. Existe una fórmula conocida para la suma de los primeros $n$ cuadrados: $\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$. Aplicando esta fórmula para $n=8$:

$$
\text{Total} = \frac{8(8+1)(2 \cdot 8 + 1)}{6} = \frac{8(9)(16+1)}{6} = \frac{8 \cdot 9 \cdot 17}{6} = \frac{1224}{6} = 204
$$

Por lo tanto, hay un total de $204$ cuadrados en un tablero de ajedrez de $8 \times 8$.

**Parte (b)**

Generalizamos ahora para un tablero de $n \times n$, donde $n$ es un entero positivo. El objetivo es determinar cuántos cuadrados de $k \times k$ hay, para cualquier $k$ tal que $1 \leq k \leq n$.

Podemos identificar cada cuadrado de $k \times k$ por la posición de su esquina superior izquierda. Denotemos las coordenadas de esta esquina como $(a, b)$, donde $a$ es el número de fila (contando desde arriba, $1 \leq a \leq n$) y $b$ es el número de columna (contando desde la izquierda, $1 \leq b \leq n$).

Para que un cuadrado de $k \times k$ cuya esquina superior izquierda está en $(a, b)$ quepa completamente dentro del tablero de $n \times n$, debe cumplir dos condiciones. Primero, la fila más baja del cuadrado debe estar dentro del tablero. Las filas que ocupa el cuadrado van desde $a$ hasta $a+k-1$. Por lo tanto, la fila más baja, $a+k-1$, debe ser menor o igual que $n$. Esto nos da la desigualdad:
$$ a + k - 1 \leq n $$
Resolviendo para $a$, obtenemos:
$$ a \leq n - k + 1 $$
Dado que la fila $a$ debe ser al menos 1, las posibles filas para la esquina superior izquierda son $1, 2, \dots, n-k+1$.

Además la columna más a la derecha del cuadrado debe estar dentro del tablero. Las columnas que ocupa el cuadrado van desde $b$ hasta $b+k-1$. Por lo tanto, la columna más a la derecha, $b+k-1$, debe ser menor o igual que $n$. Esto nos da la desigualdad:
$$ b + k - 1 \leq n $$
Resolviendo para $b$, obtenemos:
$$ b \leq n - k + 1 $$
Dado que la columna $b$ debe ser al menos 1, las posibles columnas para la esquina superior izquierda son $1, 2, \dots, n-k+1$.

Entonces el número total de posiciones posibles para la esquina superior izquierda se obtiene multiplicando el número de opciones para $a$ por el número de opciones para $b$. Eso quiere decir que el número total de cuadrados de $k \times k$ en un tablero de $n \times n$ es:
$$ (n-k+1) \times (n-k+1) = (n-k+1)^2 $$

Para encontrar el número total de cuadrados de _cualquier_ tamaño en el tablero de $n \times n$, necesitamos sumar el número de cuadrados para cada tamaño posible, desde $k=1$ hasta $k=n$. Calculamos el número de cuadrados para cada $k$:

- Para $k=1$: $(n-1+1)^2 = n^2$ cuadrados.
- Para $k=2$: $(n-2+1)^2 = (n-1)^2$ cuadrados.
- ...
- Para $k=n$: $(n-n+1)^2 = 1^2$ cuadrado.

El número total de cuadrados es la suma de estas cantidades:
$$ \text{Total} = n^2 + (n-1)^2 + (n-2)^2 + \dots + 2^2 + 1^2 $$
Esta suma es la suma de los primeros $n$ cuadrados perfectos, que se escribe comúnmente como $\sum_{i=1}^n i^2$.

La fórmula para esa suma es la siguiente y usaremos la inducción matemática para probar dicha fórmula para todo entero positivo $n$.

$$
S_n = \sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}
$$

Sea $P(n)$ la proposición $\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$.

**Paso Base:** Verificamos si $P(1)$ es verdadera.
Para $n=1$, el lado izquierdo (LHS) de la ecuación es $\sum_{i=1}^{1} i^2 = 1^2 = 1$.
El lado derecho (RHS) de la ecuación es $\frac{1(1+1)(2 \cdot 1 + 1)}{6} = \frac{1(2)(3)}{6} = \frac{6}{6} = 1$.
Como LHS = RHS, $P(1)$ es verdadera.

**Hipótesis Inductiva:** Asumimos que $P(m)$ es verdadera para algún entero positivo arbitrario $m \geq 1$. Es decir, asumimos que:

$$
\sum_{i=1}^{m} i^2 = \frac{m(m+1)(2m+1)}{6}
$$

**Paso Inductivo:** Debemos demostrar que $P(m+1)$ es verdadera, basándonos en la hipótesis inductiva. Queremos mostrar que:

$$
\sum_{i=1}^{m+1} i^2 = \frac{(m+1)((m+1)+1)(2(m+1)+1)}{6} = \frac{(m+1)(m+2)(2m+3)}{6}
$$

Comenzamos con el lado izquierdo de la ecuación para $P(m+1)$ y usamos la definición de sumatoria:

$$
\sum_{i=1}^{m+1} i^2 = \left( \sum_{i=1}^{m} i^2 \right) + (m+1)^2
$$

Ahora aplicamos la Hipótesis Inductiva para reemplazar la suma hasta $m$:

$$
= \frac{m(m+1)(2m+1)}{6} + (m+1)^2
$$

$$
= \frac{m(m+1)(2m+1)}{6} + \frac{6(m+1)^2}{6}
$$

$$
= \frac{m(m+1)(2m+1) + 6(m+1)^2}{6}
$$

$$
= \frac{(m+1) [m(2m+1) + 6(m+1)]}{6}
$$

$$
= \frac{(m+1) [2m^2 + m + 6m + 6]}{6}
$$

$$
= \frac{(m+1) (2m^2 + 7m + 6)}{6}
$$

Ahora factorizamos la expresión cuadrática $2m^2 + 7m + 6$. Buscamos dos números que multipliquen a $2 \times 6 = 12$ y sumen $7$. Esos números son $3$ y $4$. Entonces, $2m^2 + 7m + 6 = 2m^2 + 3m + 4m + 6 = m(2m+3) + 2(2m+3) = (m+2)(2m+3)$.
Sustituimos esto de nuevo en nuestra expresión:

$$
= \frac{(m+1)(m+2)(2m+3)}{6}
$$

Este resultado es exactamente el lado derecho de la ecuación para $P(m+1)$. Por lo tanto, hemos demostrado que si $P(m)$ es verdadera, entonces $P(m+1)$ también es verdadera. Por el principio de inducción matemática, la fórmula $P(n): \sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$ es verdadera para todos los enteros positivos $n$.

Por lo tanto, el tablero de ajedrez de $n \times n$ tiene en total $\frac{1}{6} n(n+1)(2n+1)$ cuadrados

## Ejercicio 6

### Planteamiento

Demuestra que para todo entero $n \geq 1$,

$$
1 + 2 + \cdots + n = \frac{n(n+1)}{2}.
$$

### Solución

Queremos demostrar por inducción matemática que para todo entero $n \geq 1$ se cumple la fórmula $1 + 2 + \cdots + n = \frac{n(n+1)}{2}$.

Primero verificamos el caso base $n=1$. En este caso, el lado izquierdo de la ecuación es simplemente $1$, y el lado derecho al evaluar $n=1$ da $\frac{1(1+1)}{2} = 1$. Como ambos lados coinciden, el caso base es verdadero.

Para el paso inductivo, asumimos que la proposición es cierta para algún $k \geq 1$, es decir, que $1 + 2 + \cdots + k = \frac{k(k+1)}{2}$ (esta suposición es nuestra hipótesis inductiva). Queremos demostrar que bajo esta suposición también se cumple para $k+1$, es decir, que

$$
1 + 2 + \cdots + k + (k+1) = \frac{(k+1)(k+2)}{2}
$$

Utilizando la hipótesis inductiva, tenemos que $1 + 2 + \cdots + k + (k+1) = \frac{k(k+1)}{2} + (k+1)$. Sumando los términos, obtenemos:

$$
\frac{k(k+1)}{2} + (k+1) = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k+2)}{2},
$$

que es exactamente la expresión que queríamos probar.

Por lo tanto, por el principio de inducción matemática, concluimos que la fórmula $1 + 2 + \cdots + n = \frac{n(n+1)}{2}$ es verdadera para todo entero $n \geq 1$.

## Ejercicio 7

### Planteamiento

Demuestra por inducción que si $m$ y $n$ son cualquier par de enteros positivos y $m$ es impar, entonces $\sum_{k=0}^{m-1} (n+k)$ es divisible por $m$. ¿Se mantiene la conclusión si $m$ es par? Justifica tu respuesta.

### Solución

Primero, establecemos el caso base. El menor entero impar positivo es $m=1$. Para $m=1$, la suma es $\sum_{k=0}^{1-1} (n+k) = \sum_{k=0}^{0} (n+k) = n+0 = n$. Como cualquier entero $n$ es divisible por $1$, la proposición $P(1)$ es verdadera.

A continuación, formulamos la hipótesis de inducción. Asumimos que $P(j)$ es verdadera para algún entero impar positivo $j \ge 1$. Esto significa que para cualquier entero positivo $n'$, la suma $\sum_{k=0}^{j-1} (n'+k)$ es divisible por $j$.

Ahora, debemos probar el paso inductivo, es decir, que $P(j+2)$ es verdadera, asumiendo que $P(j)$ es verdadera. $j+2$ es el siguiente entero impar después de $j$. Debemos demostrar que para cualquier entero positivo $n$, la suma $\sum_{k=0}^{(j+2)-1} (n+k) = \sum_{k=0}^{j+1} (n+k)$ es divisible por $j+2$.
Consideremos la suma $S = \sum_{k=0}^{j+1} (n+k)$. Esta es la suma de una progresión aritmética con $j+2$ términos, cuyo primer término es $n$ y último término es $n+j+1$. La fórmula para la suma de una progresión aritmética es $\frac{\text{número de términos}}{2} \times (\text{primer término} + \text{último término})$.
Aplicando esta fórmula, obtenemos:

$$
S = \frac{j+2}{2} (n + (n+j+1)) = \frac{j+2}{2} (2n + j + 1)
$$

Para demostrar que $S$ es divisible por $j+2$, necesitamos demostrar que $\frac{S}{j+2} = \frac{1}{2} (2n + j + 1)$ es un entero. Esto requiere que $2n + j + 1$ sea un número par.
Sabemos que $j$ es un entero impar por la hipótesis de inducción (y el paso base). Un entero impar puede escribirse como $j = 2p+1$ para algún entero $p \ge 0$. Sustituyendo esto en la expresión $2n + j + 1$, obtenemos:

$$
2n + j + 1 = 2n + (2p+1) + 1 = 2n + 2p + 2 = 2(n+p+1)
$$

Como $n$ y $p$ son enteros, $n+p+1$ también es un entero. Por lo tanto, $2n + j + 1$ es siempre un número par, ya que es $2$ multiplicado por un entero.
Entonces, $\frac{S}{j+2} = \frac{1}{2} (2(n+p+1)) = n+p+1$, que es un entero.
Esto demuestra que $S = \sum_{k=0}^{j+1} (n+k)$ es divisible por $j+2$. Así, $P(j+2)$ es verdadera.
Por el principio de inducción matemática, la proposición $P(m)$ es verdadera para todos los enteros impares positivos $m$.

**Caso par**

Ahora, consideremos si la conclusión se mantiene si $m$ es par. Tomemos un contraejemplo simple. Sea $m=2$ (par) y $n=1$. La suma es:

$$
\sum_{k=0}^{2-1} (1+k) = \sum_{k=0}^{1} (1+k) = (1+0) + (1+1) = 1 + 2 = 3
$$

¿Es la suma $3$ divisible por $m=2$? No, $3$ no es divisible por $2$. Por lo tanto, la conclusión no se mantiene si $m$ es par.

Podemos justificar esto de manera general usando la fórmula de la suma que derivamos: $S = \frac{m}{2} (2n + m - 1)$. Para que $S$ sea divisible por $m$, la expresión $\frac{S}{m} = \frac{1}{2} (2n + m - 1)$ debe ser un entero. Esto significa que $2n + m - 1$ debe ser un número par.
Si $m$ es par, podemos escribir $m=2p$ para algún entero positivo $p$. Sustituyendo esto en la expresión:

$$
2n + m - 1 = 2n + 2p - 1 = 2(n+p) - 1
$$

Como $n$ y $p$ son enteros, $n+p$ es un entero. Entonces $2(n+p)$ es un número par. Restarle $1$ a un número par siempre resulta en un número impar.
Dado que $2n + m - 1$ es impar cuando $m$ es par, la expresión $\frac{1}{2} (2n + m - 1)$ no puede ser un entero. Por lo tanto, la suma $S = \sum_{k=0}^{m-1} (n+k)$ no es divisible por $m$ cuando $m$ es par.

## Ejercicio 8

### Planteamiento

Prueba que $n^2 - 7n + 12$ es no negativo siempre que $n$ sea un número entero tal que $n \geq 3$.

### Solución

La afirmación a probar es $P(n)$, que dice que $n^2 - 7n + 12 \geq 0$. Utilizaremos inducción matemática para demostrarlo.

**Caso Base:**

Comenzamos verificando el caso base, es decir, para $n = 3$. Sustituyendo en la expresión:

$$
P(3): 3^2 - 7(3) + 12 = 9 - 21 + 12 = 0
$$

Esto cumple con $P(3) \geq 0$, por lo que el caso base se verifica.

**Paso Inductivo:**

Supongamos que $P(k)$ es verdadera para algún $k \geq 3$, es decir, asumimos que $k^2 - 7k + 12 \geq 0$. Ahora, debemos probar que $P(k+1)$ también es verdadera, es decir, que $(k+1)^2 - 7(k+1) + 12 \geq 0$.

Primero, expandimos y simplificamos la expresión para $P(k+1)$:

$$
(k+1)^2 - 7(k+1) + 12 = k^2 + 2k + 1 - 7k - 7 + 12 = (k^2 - 7k + 12) + (2k - 6)
$$

Por hipótesis inductiva, sabemos que $k^2 - 7k + 12 \geq 0$. Además, para $k \geq 3$, podemos verificar que $2k - 6 \geq 0$ ya que:

$$
2k - 6 \geq 2(3) - 6 = 6 - 6 = 0
$$

Por lo tanto, la suma de $(k^2 - 7k + 12)$ y $(2k - 6)$ es no negativa:

$$
(k^2 - 7k + 12) + (2k - 6) \geq 0
$$

Esto muestra que $(k+1)^2 - 7(k+1) + 12 \geq 0$, por lo que $P(k+1)$ es verdadera.

Por inducción matemática, hemos demostrado que $n^2 - 7n + 12 \geq 0$ para todos los enteros $n \geq 3$.

## Ejercicio 9

### Planteamiento

Prueba que $n^2 - 1$ es divisible por $8$ siempre que $n$ sea un número entero positivo impar.

### Solución

**Paso 1: Caso Base**

Comenzamos verificando el caso base, $n = 1$. Calculamos $1^2 - 1 = 0$, que claramente es divisible por 8. Por lo tanto, el caso base es verdadero.

**Paso 2: Hipótesis Inductiva**

Asumimos que la afirmación es cierta para un número impar arbitrario $k$, es decir, que $k^2 - 1$ es divisible por 8. Esto implica que existe un entero $m$ tal que $k^2 - 1 = 8m$.

**Paso 3: Paso Inductivo**

Ahora, debemos demostrar que si la afirmación es cierta para $k$, también lo es para $k+2$. Consideramos la expresión $(k+2)^2 - 1$:

$$
(k+2)^2 - 1 = k^2 + 4k + 3.
$$

Sustituyendo la hipótesis inductiva, $k^2 = 8m + 1$, obtenemos:

$$
(k+2)^2 - 1 = (8m + 1) + 4k + 3 = 8m + 4k + 4.
$$

Ahora, debemos demostrar que $4k + 4$ es divisible por 8. Dado que $k$ es impar, lo podemos escribir como $k = 2j + 1$, donde $j$ es un entero. Sustituyendo, obtenemos:

$$
4k + 4 = 4(2j+1) + 4 = 8j + 8 = 8(j + 1),
$$

lo que es claramente divisible por 8. Por lo tanto, $(k+2)^2 - 1 = 8(m + j + 1)$, que es divisible por 8.

## Ejercicio 10

### Planteamiento

Un grupo de personas se ubica de forma que la distancia entre dos personas cualesquiera sea diferente de la distancia entre otras dos. Supongamos que el grupo tiene un número impar de personas y que cada una envía un mensaje a su vecino más cercano. Utilice la inducción matemática para demostrar que al menos una persona no recibe ningún mensaje de nadie.

### Solución

Queremos demostrar la afirmación $P(n)$: si hay $2n + 1$ personas con todas las distancias distintas entre pares, y cada una envía un mensaje a su vecino más cercano, entonces al menos una persona no recibe mensaje de nadie. Procedemos por inducción matemática.

**Caso base:** Para $n = 1$, hay 3 personas. Como las distancias entre ellas son distintas, existe un único par de personas, digamos $A$ y $B$, cuya distancia es la mínima. Por lo tanto, $A$ y $B$ se envían mensajes mutuamente. La tercera persona, $C$, al estar más alejada de ambos, elegirá a uno como su vecino más cercano y le enviará un mensaje. Sin embargo, ni $A$ ni $B$ podrán enviarle un mensaje, ya que están más cerca entre sí que de $C$. Así, $C$ no recibe mensaje de nadie. Por lo tanto, $P(1)$ es verdadero.

**Paso inductivo:** Supongamos que $P(k)$ es verdadero para algún $k \geq 1$, es decir, que si hay $2k + 1$ personas con distancias distintas, al menos una persona no recibe mensaje. Queremos demostrar que $P(k+1)$ también es cierto.

Consideremos un grupo de $2(k + 1) + 1 = 2k + 3$ personas. Existen dos personas, digamos $A$ y $B$, cuya distancia es la mínima. Estos dos se envían mensajes mutuamente. Al eliminar a $A$ y $B$, quedan $2k + 1$ personas, para las cuales, por hipótesis inductiva, al menos una no recibe mensaje. Esta persona no recibirá mensaje de nadie ni en el grupo original, ya que $A$ y $B$ solo se enviaban mensajes entre sí, y su eliminación no afecta la situación de los otros miembros del grupo. Por lo tanto, al menos una persona no recibe mensaje en el conjunto completo de $2k + 3$ personas.

Así, se ha demostrado que, bajo las condiciones del problema, al menos una persona no recibe mensaje de nadie.

## Ejercicio 11

### Planteamiento

a) Encuentra una fórmula para

$$
\frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \cdots + \frac{1}{n(n+1)}
$$

examinando los valores de esta expresión para pequeños valores de $n$.

b) Demuestra la fórmula que encontraste en el apartado (a).

### Solución

**Parte (a): Encontrar la fórmula**

Primero, observamos los valores de la suma para diferentes valores de $n$. Para $n=1$, obtenemos:

$$
S_1 = \frac{1}{1 \cdot 2} = \frac{1}{2}
$$

Para $n=2$, sumamos los primeros dos términos:

$$
S_2 = \frac{1}{2} + \frac{1}{6} = \frac{4}{6} = \frac{2}{3}
$$

Para $n=3$:

$$
S_3 = \frac{2}{3} + \frac{1}{12} = \frac{9}{12} = \frac{3}{4}
$$

Para $n=4$:

$$
S_4 = \frac{3}{4} + \frac{1}{20} = \frac{16}{20} = \frac{4}{5}
$$

Con estos resultados, notamos que el patrón parece ser:

$$
S_n = \frac{n}{n+1}
$$

Por lo tanto, la fórmula general para la suma es:

$$
\sum_{i=1}^{n} \frac{1}{i(i+1)} = \frac{n}{n+1}
$$

**Parte (b): Demostración por Inducción**

**Caso base ($n=1$):**  
Verificamos que la fórmula es verdadera para $n=1$:

$$
\sum_{i=1}^{1} \frac{1}{i(i+1)} = \frac{1}{1 \cdot 2} = \frac{1}{2}, \quad \frac{1}{1+1} = \frac{1}{2}
$$

El caso base se cumple.

**Hipótesis inductiva:**  
Supongamos que la fórmula es verdadera para un $n=k$, es decir:

$$
\sum_{i=1}^{k} \frac{1}{i(i+1)} = \frac{k}{k+1}
$$

**Paso inductivo:**  
Queremos demostrar que la fórmula es válida para $n=k+1$. Consideramos la suma hasta $k+1$:

$$
\sum_{i=1}^{k+1} \frac{1}{i(i+1)} = \left( \sum_{i=1}^{k} \frac{1}{i(i+1)} \right) + \frac{1}{(k+1)(k+2)}
$$

Por la hipótesis inductiva, la primera parte es igual a $\frac{k}{k+1}$, por lo que tenemos:

$$
\text{LHS} = \frac{k}{k+1} + \frac{1}{(k+1)(k+2)}
$$

Sumamos estas fracciones con el denominador común $(k+1)(k+2)$:

$$
\text{LHS} = \frac{k(k+2) + 1}{(k+1)(k+2)} = \frac{(k+1)^2}{(k+1)(k+2)}
$$

Simplificando, obtenemos:

$$
\text{LHS} = \frac{k+1}{k+2}
$$

Este es el lado derecho de la fórmula para $n=k+1$. Por lo tanto, la fórmula es válida para $n=k+1$. Entonces, por inducción, es válido para todos los números enteros positivos.

## Ejercicio 12

### Planteamiento

Utilice la inducción matemática para demostrar que cualquier cantidad de dinero de al menos 14¢ se puede crear utilizando monedas de 3¢ y 8¢.

### Solución

Definimos la proposición $P(n)$ como la afirmación de que se puede formar $n$ céntimos usando monedas de 3¢ y 8¢. Nuestro objetivo es probar que $P(n)$ es verdadera para todo $n \geq 14$.

Comenzamos verificando los casos base para $n = 14$, $n = 15$ y $n = 16$. Esto es necesario porque al demostrar que podemos formar estas tres cantidades, se garantiza que el paso inductivo funcionará, ya que en el paso inductivo necesitamos recurrir a $k-2$, y al menos uno de los casos base puede ser el punto de partida.

Para $n = 14$, tenemos que $3(2) + 8(1) = 14$, por lo que $P(14)$ es verdadera. Para $n = 15$, $3(5) + 8(0) = 15$, por lo que $P(15)$ es verdadera. Finalmente, para $n = 16$, $3(0) + 8(2) = 16$, por lo que $P(16)$ es verdadera. Así, hemos verificado que los casos base $P(14)$, $P(15)$ y $P(16)$ son ciertos.

Ahora, asumimos la hipótesis inductiva de que $P(j)$ es verdadera para todos los enteros $j$ tales que $14 \leq j \leq k$, con $k \geq 16$. Esto significa que podemos formar cualquier cantidad de $j$ entre 14 y $k$ usando monedas de 3¢ y 8¢.

Para demostrar que $P(k+1)$ es verdadera, consideramos la cantidad $k+1$. Sabemos que $k+1 - 3 = k-2$, y por la hipótesis inductiva, $P(k-2)$ es verdadera. Es decir, $k-2$ puede expresarse como $3x' + 8y'$, donde $x'$ y $y'$ son enteros no negativos. Al sumar 3 a ambos lados de esta ecuación, obtenemos:

$$
k+1 = 3(x' + 1) + 8y'
$$

Definimos $x = x' + 1$ y $y = y'$, lo que garantiza que $x$ e $y$ son enteros no negativos. Por lo tanto, $k+1$ se puede expresar como una combinación de 3¢ y 8¢, lo que demuestra que $P(k+1)$ es verdadera.

Finalmente, como hemos demostrado que los casos base son ciertos y que si $P(j)$ es verdadera para $14 \leq j \leq k$, entonces $P(k+1)$ también es verdadera, concluimos que, por inducción matemática, $P(n)$ es verdadera para todos $n \geq 14$.

## Ejercicio 13

### Planteamiento

Unas estampillas se venden en paquetes que contienen ya sea 5 u 8 estampillas.

a) Demuestre que una persona puede obtener 5, 8, 10, 13, 15, 16, 20, 21, 24 o 25 estampillas comprando paquetes de 5 y 8 estampillas.

b) Utilice la inducción matemática para demostrar que se puede obtener cualquier cantidad de al menos 28 estampillas.

### Solución

**Parte a) Demostración de cantidades específicas**

Para demostrar que es posible obtener las cantidades 5, 8, 10, 13, 15, 16, 20, 21, 24 y 25 estampillas usando paquetes de 5 y 8 estampillas, buscamos combinaciones de los números 5 y 8 que sumen estas cantidades. Denotamos el número de paquetes de 5 como $x$ y el de paquetes de 8 como $y$, y resolvemos la ecuación $5x + 8y = N$, para cada $N$ dado.

Comprobamos cada caso:

- Para $N = 5$, podemos usar 1 paquete de 5 y 0 de 8.
- Para $N = 8$, 0 paquetes de 5 y 1 de 8.
- Para $N = 10$, 2 paquetes de 5 y 0 de 8.
- Para $N = 13$, 1 paquete de 5 y 1 de 8.
- Para $N = 15$, 3 paquetes de 5 y 0 de 8.
- Para $N = 16$, 0 paquetes de 5 y 2 de 8.
- Para $N = 20$, 4 paquetes de 5 y 0 de 8.
- Para $N = 21$, 1 paquete de 5 y 2 de 8.
- Para $N = 24$, 0 paquetes de 5 y 3 de 8.
- Para $N = 25$, 5 paquetes de 5 y 0 de 8.

En cada caso, hemos encontrado combinaciones de paquetes de 5 y 8 que suman las cantidades deseadas, completando la demostración para la parte (a).

**Parte b) Demostración por inducción matemática**

Queremos demostrar que es posible obtener cualquier cantidad de al menos 28 estampillas usando paquetes de 5 y 8 estampillas. Utilizaremos inducción fuerte.

**Casos base**: Como nuestro paso inductivo relacionará $k+1$ con $k-4$, necesitaremos establecer 5 casos base consecutivos para asegurarnos de que el argumento funcione para todos los $k$ necesarios. Entonces verificamos los primeros valores desde $n = 28$ hasta $n = 32$, mostrando que es posible obtener esas cantidades:

- Para $n = 28$, $28 = 5(4) + 8(1)$.
- Para $n = 29$, $29 = 5(1) + 8(3)$.
- Para $n = 30$, $30 = 5(6) + 8(0)$.
- Para $n = 31$, $31 = 5(3) + 8(2)$.
- Para $n = 32$, $32 = 5(0) + 8(4)$.

Por lo tanto, los casos base son verdaderos.

**Hipótesis inductiva**: Supongamos que para un $k \geq 32$, podemos obtener cualquier cantidad de estampillas desde 28 hasta $k$. Es decir, podemos escribir $j = 5x + 8y$ para cada $j$ en este rango.

**Paso inductivo**: Ahora, queremos mostrar que podemos obtener $k + 1$. Para esto, consideramos la cantidad $k + 1 - 5 = k - 4$. Sabemos que $k \geq 32$, por lo que $k - 4 \geq 28$, lo que significa que $k - 4$ está dentro del rango cubierto por nuestra hipótesis inductiva (es decir, ya podemos obtener $k - 4$ estampillas).

Según la hipótesis inductiva, existe una combinación de paquetes de 5 y 8 que suman $k - 4$. Es decir, existen $x'$ y $y'$ tal que:

$$
k - 4 = 5x' + 8y'
$$

Ahora, agregamos un paquete de 5 estampillas a esta combinación:

$$
k + 1 = (k - 4) + 5 = 5x' + 8y' + 5 = 5(x' + 1) + 8y'
$$

Definimos $x = x' + 1$ y $y = y'$, lo que asegura que $x$ y $y$ son enteros no negativos (ya que $x'$ y $y'$ lo son). De esta manera, hemos encontrado una combinación de paquetes de 5 y 8 que suman $k + 1$ estampillas.

Esto muestra que, si podemos obtener cualquier cantidad de estampillas entre 28 y $k$, también podemos obtener $k + 1$.

**Conclusión**: Como hemos demostrado que los casos base son ciertos y hemos establecido que si la afirmación es válida para todos los números hasta $k$, entonces también es válida para $k + 1$, por inducción fuerte concluimos que la afirmación es verdadera para todo $n \geq 28$.

## Ejercicio 14

### Planteamiento

Un conjunto $S$ consiste en cadenas obtenidas al yuxtaponer una o más copias de $1110$ y $0111$. Usa inducción matemática para demostrar que para todo entero $n \geq 1$, si una cadena $s$ en $S$ tiene longitud $4n$, entonces el número de unos en $s$ es un múltiplo de $3$.

### Solución

Queremos demostrar mediante inducción matemática la siguiente proposición $P(n)$: si una cadena $s$ pertenece al conjunto $S$ —formado por la yuxtaposición de uno o más bloques $1110$ o $0111$— y tiene longitud $4n$, entonces el número de unos en $s$ es un múltiplo de $3$, para todo entero $n \geq 1$.

**Paso base.** Consideremos primero el caso $n=1$. Una cadena $s$ de longitud $4$ debe ser exactamente uno de los bloques $1110$ o $0111$, ya que son las cadenas originales de $S$ y cada uno tiene longitud $4$. Al contar el número de unos en ambos casos, encontramos que tanto en $1110$ como en $0111$ hay exactamente $3$ unos. Dado que $3$ es un múltiplo de $3$, concluimos que la proposición $P(1)$ es verdadera.

**Paso inductivo.** Supongamos ahora que $P(k)$ es verdadera para algún $k \geq 1$; es decir, asumimos que toda cadena $s'$ en $S$ de longitud $4k$ tiene un número de unos divisible por $3$. Esta es nuestra hipótesis inductiva.

Queremos demostrar que bajo esta hipótesis, la proposición también es válida para $n = k+1$. Consideremos una cadena $s$ en $S$ de longitud $4(k+1)$. Podemos descomponer $s$ en dos partes: una subcadena inicial $s'$ de longitud $4k$ y un bloque final $b$ de longitud $4$, donde $b$ es necesariamente $1110$ o $0111$.

Por hipótesis inductiva, el número de unos en $s'$ es un múltiplo de $3$, es decir, $N_1(s') = 3m$ para algún entero $m$. Además, sabemos que tanto $1110$ como $0111$ contienen exactamente $3$ unos, por lo que $N_1(b) = 3$.

Así, el número total de unos en $s$ es la suma de los unos en $s'$ y los unos en $b$:

$$
N_1(s) = N_1(s') + N_1(b) = 3m + 3 = 3(m+1)
$$

Como $m+1$ es un entero, se concluye que $N_1(s)$ también es múltiplo de $3$.

Por lo tanto, hemos demostrado que si la proposición es verdadera para $n=k$, entonces también lo es para $n=k+1$. Aplicando el principio de inducción matemática, concluimos que $P(n)$ es verdadera para todo entero $n \geq 1$.

## Ejercicio 15

### Planteamiento

Usa inducción fuerte para demostrar que cada número entero positivo puede ser escrito como una suma de potencias distintas de dos, es decir, como una suma de un subconjunto de los enteros $2^0 = 1$, $2^1 = 2$, $2^2 = 4$, y así sucesivamente.

### Solución

Queremos demostrar, usando inducción fuerte, que **todo entero positivo** puede escribirse como **suma de potencias distintas de dos**, es decir, como suma de algunos números de la forma $2^k$

Comenzamos estableciendo el **paso base**. Para $n=1$, claramente $1 = 2^0$, donde $2^0$ es una potencia de dos. Además, esta suma utiliza potencias distintas (de hecho, solo una). Por lo tanto, la afirmación es verdadera para $n=1$.

Ahora formulamos la **hipótesis inductiva fuerte**: supondremos que para un cierto entero $k \geq 1$, todos los enteros $j$ tales que $1 \leq j \leq k$ pueden escribirse como suma de potencias distintas de dos. Bajo esta hipótesis, nuestro objetivo es demostrar que $k+1$ también puede representarse de esta manera.

Analizaremos dos casos, dependiendo de si $k+1$ es par o impar.

Si $k+1$ es **par**, entonces existe un entero $m$ tal que $k+1 = 2m$. Como $k+1 \geq 2$, se tiene que $m = (k+1)/2$ es al menos 1 y, además, como $k$ es al menos 1, $m$ cumple $1 \leq m \leq k$. Por la hipótesis inductiva, $m$ puede escribirse como suma de potencias distintas de dos. Sea esta representación $m = 2^{i_1} + 2^{i_2} + \dots + 2^{i_r}$, donde los exponentes $i_1, i_2, \dots, i_r$ son distintos. Multiplicando toda la expresión por 2 obtenemos $k+1 = 2^{i_1+1} + 2^{i_2+1} + \dots + 2^{i_r+1}$. Así, $k+1$ es también una suma de potencias de dos, y como a cada exponente se le suma 1, las potencias resultantes siguen siendo distintas entre sí.

Si $k+1$ es **impar**, entonces $k$ es par. Según la hipótesis inductiva, $k$ puede escribirse como suma de potencias distintas de dos. Además, como $k$ es par, su representación **no incluye** la potencia $2^0 = 1$, ya que incluir $1$ haría la suma impar. Por lo tanto, podemos escribir $k+1 = k + 2^0$, añadiendo la potencia $2^0$ a la representación de $k$ sin repetir ninguna potencia. Así, también en este caso, $k+1$ se puede escribir como una suma de potencias distintas de dos.

En ambos casos, hemos demostrado que si todos los enteros hasta $k$ pueden escribirse como suma de potencias distintas de dos, entonces $k+1$ también. Por el **principio de inducción fuerte**, concluimos que todo entero positivo puede expresarse como suma de potencias distintas de dos.
