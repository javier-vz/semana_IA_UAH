# Consulta de un grafo: generación con evidencias

La recuperación debe preceder a la respuesta. El modelo solo recibe las relaciones encontradas y una instrucción de no inventar.

```text
Responde únicamente a partir de las relaciones del grafo que aparecen más abajo.
Cita los identificadores de evidencia [T1], [T2], etc. en cada afirmación.
No confundas relaciones del grafo local con afirmaciones de Wikidata.
Si no aparece evidencia suficiente, responde «No puedo establecerlo con este grafo».

Pregunta: {pregunta}

Relaciones recuperadas:
{relaciones_con_identificadores_y_procedencia}
```

**Evaluación**: una respuesta es verificable si cada hecho importante puede vincularse con una relación realmente presente; la fluidez del texto no demuestra exactitud.

**Nota técnica**: un sistema de recuperación por similitud textual de relaciones no es automáticamente un GraphRAG avanzado. El notebook de esta carpeta ofrece una introducción explícita: recuperación de triples y generación opcional con un modelo local pequeño.
