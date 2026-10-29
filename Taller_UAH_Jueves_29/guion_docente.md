# Guion docente · 120 minutos

**Título:** Del texto y la imagen al archivo que conversa  
**Público:** profesoras y profesores de Humanidades  
**Dinámica:** parejas, sin programación, con materiales originales de Memoria Chilena  
**Tesis pedagógica:** la IA puede apoyar una operación intelectual, pero no resuelve por sí misma la procedencia, fidelidad ni interpretación de las fuentes.

## Antes de comenzar (5–10 minutos de preparación del docente, antes del taller)

Abrir el sitio `index.html` y comprobar que las cuatro tarjetas de imágenes muestren su miniatura o permitan acceder a la ficha original. Abrir el documento de 1914 desde el enlace de Memoria Chilena y tener preparada **una captura en PNG o JPG de una sola página impresa**. La que contiene «Sin descuidar la instrucción teórica» es una buena opción. Probar el botón OCR con una imagen pequeña y conexión estable. Abrir ChatGPT en otra pestaña. Imprimir `ficha_participantes.html` para cada pareja o dejar la ficha digital disponible.

## 00–05 · La pregunta que abre el taller

Preguntar: **«Cuando leo una fuente, ¿qué puedo delegar a una IA y qué tengo que comprobar yo?»**. No dar una definición extensa de inteligencia artificial; recoger dos opiniones y dejar una regla de trabajo: **volver siempre al documento**.

## 05–25 · Un texto de 1877, primero leído por nosotros

**Fuente:** «La mujer debe ser ilustrada: cualquiera sea el rol que se le señale en la sociedad», *La Mujer* (7 julio 1877). Abrir la [ficha](https://www.memoriachilena.gob.cl/602/w3-article-605867.html).

- **05–10:** Cada pareja escoge **3–4 líneas**, registra la página y escribe una observación literal y una interpretación propia.
- **10–15:** Copia el fragmento en ChatGPT y utiliza el prompt preparado en el laboratorio.
- **15–22:** Compara la interpretación del modelo con la propia: marcar una afirmación literal, una inferencia y un dato que requiere verificación.
- **22–25:** Cada pareja propone una pregunta para sus estudiantes que solo pueda responderse volviendo al facsímil.

**Pregunta de discusión:** ¿Cómo distinguimos un comentario histórico plausible de una afirmación sustentada por el documento?

## 25–55 · Cuatro imágenes, no una sola

**Fuentes:** primeras bachilleras (1911), sala de clases (1913), clase de química (hacia 1927) y una **ilustración de prensa** de 1911.

- **25–30:** Distribuir imágenes (una por pareja, repetidas si hay muchas parejas). Mostrar la ficha completa antes de comentar el contexto.
- **30–38:** Sin IA, completar: **3 cosas que veo, 2 inferencias, 1 cosa que no puedo saber**.
- **38–45:** Adjuntar la imagen al LLM visual y usar el prompt de la página. Contrastar qué afirmó el sistema con excesiva confianza.
- **45–52:** Comparar en plenario: fotografía de personas, fotografía de aula vacía, fotografía de actividad práctica e ilustración de prensa. Preguntar: «¿Qué tipos de evidencia ofrecen? ¿Qué tipos de pregunta no pueden responder?».
- **52–55:** Diseñar una actividad de 10 minutos para estudiantes que obligue a marcar por separado observación, metadatos e interpretación.

**Atención:** la cuarta pieza es **ilustración**, no fotografía. El año de la escena y el de la publicación que reproduce una foto pueden ser diferentes. El modelo no debe deducir nombres, motivaciones o biografías a partir de los rostros.

## 55–60 · Puente hacia la investigación

Una intervención por pareja: algo que la IA hizo útil y algo que fue necesario corregir. Cerrar con la pregunta **«¿Qué ocurre si el texto que damos a una IA ya contiene errores?»**.

## 60–65 · El documento impreso

Abrir el [*Prospecto general del Liceo de Señoritas José Miguel Infante* (1914)](https://www.memoriachilena.gob.cl/602/w3-article-61772.html). Explicar en una frase: **OCR convierte la imagen de letras impresas en texto editable**. No usaremos un manuscrito difícil.

Escoger una página sencilla con párrafos, preferiblemente la que comienza «Sin descuidar la instrucción teórica». En Windows, tomar una captura (Win + Mayús + S) y guardarla desde Paint como PNG. En Mac, usar la herramienta de captura disponible.

## 65–85 · OCR y revisión humana

- **65–70:** Seleccionar imagen PNG/JPG en el laboratorio y pulsar **Reconocer texto (español)**.
- **70–78:** Comparar la transcripción con la página impresa. Identificar y corregir **tres errores reales** (letras, separación de palabras, puntuación o cortes de línea).
- **78–85:** Pasar el texto corregido a «Documento A» y completar la referencia y página.

Si el OCR falla por conexión o navegador, que los participantes transcriban a mano 4–6 líneas del original. El aprendizaje es comprender la transformación del documento, no superar una dificultad técnica.

## 85–110 · Mini-RAG transparente y consulta a ChatGPT

- **85–90:** Pegar en «Documento B» el fragmento original de *La Mujer* utilizado en la primera hora. Registrar su referencia.
- **90–97:** Escribir una pregunta sobre los dos textos y pulsar **Recuperar fragmentos**. Ver qué pasajes salen y de cuál de los documentos proceden. Probar una segunda formulación de la pregunta para observar los límites de una búsqueda solo por palabras.
- **97–104:** Pulsar **Copiar prompt con fuentes** y pegar en ChatGPT. El prompt le pide responder solo a partir de los fragmentos visibles y reconocer las lagunas.
- **104–110:** Contrastar al menos una frase de la respuesta con el facsímil. Ensayar una pregunta sin respuesta documental, por ejemplo: «¿Cómo se llamaban todas las bachilleras retratadas?». Una respuesta responsable debe reconocer que los fragmentos no contienen esos nombres.

**Definición sencilla:** en un RAG se recuperan pasajes antes de pedirle al modelo que redacte. El laboratorio muestra cómo recuperar por coincidencia léxica; no reproduce todas las técnicas de un RAG profesional.

## 110–120 · Cierre

Cada pareja responde: **«¿Qué delegaría a una IA?»** y **«¿Qué mantendría bajo mi responsabilidad?»**. Resumir el circuito sin más teoría: documento → OCR → texto revisado → fragmentos → respuesta → comprobación.

## Plan B de 2 minutos

- No aparecen las imágenes: abrir la ficha de Memoria Chilena con el enlace de cada tarjeta.
- No hay acceso a un modelo visual: hacer la comparación colectivamente, sin IA, y discutir qué *habría que pedirle* al modelo.
- No carga el OCR: transcribir manualmente un párrafo y continuar con el mini-RAG.
- No funciona ChatGPT: redactar entre todos una respuesta corta a partir de los fragmentos recuperados; anotar qué documentación faltó.
- No hay tiempo para ambas fuentes en el mini-RAG: cargar únicamente el prospecto de 1914 y mostrar la recuperación de dos fragmentos del mismo documento.

## Resultado final esperado

Una interpretación crítica de un texto, una imagen analizada con criterios explícitos, un fragmento impreso transcrito y corregido, y una respuesta que pueda rastrearse hasta su evidencia original.
