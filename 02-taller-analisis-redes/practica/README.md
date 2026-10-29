# Laboratorio · del grafo pequeño a la consulta con evidencias

El cuaderno **[taller_redes_colab.ipynb](taller_redes_colab.ipynb)** reproduce las operaciones del taller utilizando datos basados en el TTL sobre Qoyllur Rit’i.

## Primera prueba

1. Abre [Google Colab](https://colab.research.google.com/).
2. Selecciona **Archivo → Subir cuaderno** y elige el archivo `.ipynb` de esta carpeta.
3. Ejecuta las celdas desde el principio. La demostración del grafo de ejemplo está **incluida** dentro del notebook.
4. Examina la red de cinco nodos y cuatro relaciones. Los CSV y el TTL de `datos/` están disponibles para leerlos o reutilizarlos en otros programas.
5. Prueba la consulta a Wikidata. Cuando no hay respuesta del servicio, aparece una **copia de respaldo identificada**, nunca una simulación presentada como resultado en vivo.
6. En la sección **Mini Graph-RAG**, cambia `PREGUNTA` y vuelve a ejecutar las celdas de recuperación y prompt.
7. Para subir un grafo distinto, ejecuta solo la celda **Subir otro grafo**. Las sesiones de Colab no se guardan para siempre: descarga cualquier resultado que quieras conservar.

## Datos disponibles

| Archivo | Qué contiene |
|---|---|
| [`datos/santuario_ejemplo.ttl`](datos/santuario_ejemplo.ttl) | 26 triples seleccionados del TTL compartido, incluidos cuatro vínculos analíticos y metadatos reales |
| [`datos/nodos_santuario.csv`](datos/nodos_santuario.csv) | Cinco nodos, tipo, etiquetas, breve descripción y procedencia |
| [`datos/relaciones_santuario.csv`](datos/relaciones_santuario.csv) | Cuatro relaciones con origen, destino, tipo y URI de evidencia |
| [`datos/wikidata_respaldo.csv`](datos/wikidata_respaldo.csv) | Cuatro relaciones comprobadas de la entidad Q2408955, con fecha y URL de procedencia |
| [`resultados/grafo_santuario.graphml`](resultados/grafo_santuario.graphml) | Red lista para usar en Gephi Lite y cargar en el notebook |
| [`resultados/grafo_santuario.gexf`](resultados/grafo_santuario.gexf) | Versión alternativa del mismo grafo (GEXF) |
| [`consultas/wikidata_qoylluriti.rq`](consultas/wikidata_qoylluriti.rq) | Consulta SPARQL para Q2408955 |

No se publican datos de campo completos ni se altera el archivo original. Los identificadores `example.org` son URI usados en el proyecto; **no deben interpretarse como URL que puedan abrirse en el navegador**.

## Trabajar con otros grafos

El notebook permite cargar `.ttl`, `.rdf`, `.nt`, `.jsonld`, `.graphml`, `.gexf`, y un `.csv` con columnas `origen,destino,tipo` (opcionales: `fuente,evidencia`). Para la lectura de RDF se muestran las conexiones **entre individuos** y se conservan descripciones y tipos como atributos; es una **proyección** del RDF, no una traducción exacta de toda la ontología a una red.

Si la red no contiene propiedades entre individuos, el notebook señalará que no hay aristas; en tal caso se debe revisar el archivo y el criterio de construcción. Una red diferente puede requerir nuevas reglas de limpieza o vinculación.

## Preguntas útiles

- «¿Dónde se encuentra el Santuario del Señor de Qoyllur Rit’i?»
- «¿Qué relación tiene el Santuario con Sinakara?»
- «¿Qué lugar contiene el Santuario?»
- «¿Quién construyó el Santuario?» — **pregunta de control**: el ejemplo no contiene esa información, por lo que no debe construirse una respuesta histórica a partir de esas cuatro aristas.

## Qué ocurre en un Graph-RAG

**Consulta → recuperar relaciones relevantes → construir un contexto con evidencias → generar una respuesta → comprobarla.** El cuaderno implementa de forma explícita las tres primeras etapas; dispone de una **cuarta etapa generativa opcional** con el pequeño modelo Qwen2.5-0.5B-Instruct, sin claves API. La fase de generación exige descargar el modelo y puede ser lenta en CPU.

No confundas la **similitud de texto** con una prueba de verdad: una consulta puede recuperar un triple relevante pero insuficiente. El criterio de validación es que las afirmaciones de la respuesta se correspondan con relaciones reales del grafo y tengan procedencia conocida.

## Anatomía de SPARQL y funcionamiento del RAG

Consultar [seis ejemplos comentados de SPARQL](consultas/ejemplos_sparql.md) para investigar clasificación, territorio, fechas, autoría y cantidad de propiedades. El notebook explica el proceso real del mini-RAG: triples del TTL → frases sobre las relaciones → TF–IDF de caracteres → similitud coseno → contexto con marcas [T1] → generación opcional. La recuperación no es búsqueda semántica avanzada ni consulta automáticamente caminos de varios saltos.
