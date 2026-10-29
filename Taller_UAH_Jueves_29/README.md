# Del texto y la imagen al archivo que conversa

**Taller práctico para docentes de Humanidades · Universidad Alberto Hurtado · Jueves 29 de octubre de 2026 · 120 minutos**

**Contenido listo para descargar y usar localmente.** No se necesita GitHub, programar ni instalar Python.

## Comenzar

1. Descomprime el archivo ZIP o conserva todos los archivos en la misma carpeta.
2. Haz doble clic en **`index.html`** para abrir el taller en Chrome, Edge o Firefox.
3. Si vas a utilizar el OCR, mantén conexión a Internet y abre en el navegador el **[prospecto impreso de 1914](https://www.memoriachilena.gob.cl/archivos2/pdfs/MC0058744.pdf)**.
4. Descarga o toma una **captura PNG/JPG** de una sola página de texto impreso. La página con «Sin descuidar la instrucción teórica» está aproximadamente en la página **7 del PDF** (contando desde 1; algunos visores difieren).
5. Mantén al lado el original para cotejar y corregir tres errores de OCR.

## Estructura

| Tiempo | Primera hora: docencia | Segunda hora: investigación |
|---|---|---|
| 00–25 | Lectura de prensa de 1877 | — |
| 25–60 | Comparación de cuatro imágenes históricas | — |
| 60–85 | — | Impreso de 1914 y OCR de una página |
| 85–110 | — | Mini-RAG de dos fragmentos y consulta a un LLM |
| 110–120 | — | Verificación y cierre |

El archivo `index.html` incluye imágenes con enlaces a sus fichas oficiales y dos herramientas funcionales:

- **OCR en español** de una imagen mediante Tesseract.js, que se descarga por CDN y ejecuta el reconocimiento en el navegador. No requiere cuenta. Si no se puede cargar el motor, es posible pegar una transcripción manual.
- **Mini-RAG didáctico:** recuperación *léxica* de fragmentos de texto que el participante ha pegado en los dos documentos de trabajo. Muestra lo recuperado y prepara una consulta que se copia manualmente a ChatGPT. No es un sistema vectorial ni un LLM integrado; la separación es intencional, para entender cómo funciona.

**Por qué estos materiales:** el taller conecta un texto periodístico, imágenes de época y un prospecto institucional impreso. El manuscrito de Gabriela Mistral queda excluido de la actividad obligatoria por su dificultad de lectura.

## Archivos

- **`index.html`** — página principal y laboratorio interactivo.
- **`ficha_participantes.html`** — ficha imprimible, diseñada para dos páginas A4.
- **`guion_docente.md`** — conducción minuto a minuto y plan de contingencia.
- **`fuentes.md`** — fuentes originales verificadas y enlaces.

## Aspectos a cuidar

- El enlace a la fuente bibliográfica o su pie de imagen es **metadato de catálogo**, distinto de aquello que puede observarse directamente.
- La salida del OCR debe cotejarse contra la página original.
- Un fragmento recuperado no es automáticamente pertinente ni implica que la respuesta que genere la IA sea correcta.
- Si una pregunta exige datos que no están en las fuentes, hay que responder que no hay evidencia suficiente.
- Si alguna imagen remota no se ve, utiliza el enlace **«Abrir ficha y fuente»** de esa tarjeta.

## Autoría y procedencia

Diseño y materiales de taller: **Javier Vera Zúñiga y Dina Cornejo Meza**. Fuentes patrimoniales: **Memoria Chilena, Biblioteca Nacional de Chile**. Al reutilizar las imágenes y documentos, mantener sus atribuciones originales.
