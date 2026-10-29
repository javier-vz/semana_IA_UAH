# De una pregunta social a un grafo consultable

**Taller metodológico para docentes e investigadores de Ciencias Sociales**  
**Facultad de Ciencias Sociales · Universidad Alberto Hurtado · Viernes 30 de octubre de 2026 · 10:00–12:00**  
**Javier Vera Zúñiga y Dina Cornejo Meza**

## ¿De qué trata este taller?

Las Ciencias Sociales estudian personas, instituciones, territorios, documentos y prácticas. Con frecuencia, parte importante de la explicación está en las **relaciones** que las conectan. El análisis de redes permite representar esas conexiones, analizar su estructura e identificar patrones que no siempre son evidentes al examinar cada elemento por separado.

En esta sesión seguiremos un caso pequeño, construido con datos reales de una investigación sobre Qoyllur Rit’i. Partiremos de una pregunta sencilla —**¿cómo se relaciona el Santuario con otros lugares y acontecimientos?**— y llegaremos a una representación consultable mediante inteligencia artificial.

La modalidad principal será una **demostración comentada**. Quienes quieran seguir los pasos en su computador podrán hacerlo, pero no es indispensable tener experiencia en programación.

### [Abrir el material del taller](index.html)

El documento web contiene las explicaciones, diagramas, tablas, enlaces y ejemplos necesarios para seguir la sesión y reutilizar después el procedimiento.

## Recorrido de dos horas

| Duración | Pregunta | Lo que aprenderemos |
|---|---|---|
| 10 min | ¿Por qué estudiar relaciones? | Distinguir preguntas individuales, estadísticas y relacionales. |
| 15 min | ¿Qué es un grafo? | Reconocer nodos, aristas, dirección y tipos de vínculos. |
| 20 min | ¿Cómo se construye? | Registrar nodos, relaciones, metadatos y procedencia en tablas. |
| 20 min | ¿Qué es Wikidata? | Leer entidades y propiedades, y consultar afirmaciones mediante SPARQL. |
| 20 min | ¿Qué es un grafo de conocimiento? | Leer triples RDF y comprender el formato Turtle (`.ttl`). |
| 25 min | ¿Cómo consultar el grafo con IA? | Cargar un grafo en Colab, recuperar evidencias y producir una respuesta opcional. |
| 10 min | ¿Qué podemos concluir? | Interpretar resultados y reconocer vacíos y sesgos de representación. |

## El caso de trabajo

El ejemplo utiliza cinco entidades vinculadas al Santuario del Señor de Qoyllur Rit’i:

- La festividad del Señor de Qoyllur Rit’i.
- El Santuario.
- Sinakara.
- Mamachapata.
- Ausangate.

Sus cuatro relaciones proceden de una **selección verificable del archivo de investigación RDF/Turtle**. El ejemplo no pretende representar toda la festividad. Nos interesa que sea pequeño, interpretable y reproducible.

A continuación consultaremos [Wikidata](https://www.wikidata.org/) como **otra fuente**. Allí la festividad tiene el identificador [Q2408955](https://www.wikidata.org/wiki/Q2408955). No la confundiremos con el Santuario, que es una entidad diferente en el grafo local.

## Laboratorio para continuar

El taller incluye un [cuaderno de Google Colab](practica/taller_redes_colab.ipynb) que permite cargar un grafo, examinar relaciones y formular preguntas basadas en sus datos. La búsqueda de evidencias funciona sin contratar un servicio de IA: transforma las relaciones del grafo en frases y utiliza similitud léxica TF–IDF para seleccionar las más pertinentes. No usa embeddings semánticos ni hace razonamiento por múltiples saltos. La respuesta generativa con un modelo pequeño es **opcional**.

Para usarlo después de la sesión:

1. Descargar el cuaderno `.ipynb`.
2. Abrir [Google Colab](https://colab.research.google.com/) y elegir **Archivo → Subir cuaderno**.
3. Ejecutar sus celdas en orden; el ejemplo del Santuario viene incluido.
4. Formular preguntas y comprobar qué relaciones fueron recuperadas.
5. Para estudiar otro caso, utilizar la celda de carga y seleccionar un archivo de grafo propio.

El cuaderno admite formatos habituales, como `.ttl`, GraphML, GEXF y un CSV de relaciones. No es necesario conocer esas extensiones antes del taller: se explican durante el recorrido.

## Fuentes y materiales

- [Material web del taller](index.html).
- [Laboratorio de Colab y archivos de ejemplo](practica/README.md).
- [Datos de nodos](practica/datos/nodos_santuario.csv) y [relaciones](practica/datos/relaciones_santuario.csv).
- [Grafo de ejemplo en Turtle](practica/datos/santuario_ejemplo.ttl).
- [Anatomía y seis consultas SPARQL comentadas](practica/consultas/ejemplos_sparql.md).
- [Consulta SPARQL preparada](practica/consultas/wikidata_qoylluriti.rq) y [datos públicos de respaldo](practica/datos/wikidata_respaldo.csv).
- [Conferencia del miércoles: *Un grafo construido entre muchos*](../01-conferencia-qoylluriti/).

**Sobre las fuentes.** La red del Santuario es una selección del grafo de investigación facilitado para el taller; las afirmaciones de Wikidata proceden de una base pública colaborativa cuyos contenidos pueden cambiar. Toda respuesta generada debe verificarse contra las relaciones y fuentes recuperadas. No se deben compartir en servicios externos archivos con datos personales o información que requiera resguardo.

**Créditos:** Javier Vera Zúñiga y Dina Cornejo Meza, en diálogo con los equipos y comunidades que participan en las investigaciones. Las fuentes patrimoniales y publicaciones conservan sus respectivas atribuciones y condiciones de uso.
