# Taller · Análisis de redes para la investigación social

## Métodos, casos y herramientas en tiempos de inteligencia artificial

**Fecha:** Viernes 30 de octubre de 2026  
**Hora:** 10:00–12:00 h (Chile)  
**Institución anfitriona:** Facultad de Ciencias Sociales (FACSO), Universidad Alberto Hurtado  
**Modalidad:** Híbrida, presencial y en línea  
**Duración:** 2 horas  
**Público:** Docentes e investigadores de ciencias sociales  
**Requisitos:** No se necesitan conocimientos previos de programación; se recomienda computador y acceso a internet.

*Actividad coordinada con FACSO. Información logística sujeta a la confirmación institucional.*

[Volver al inicio](../README.md)

## Resumen para difusión

Muchas preguntas de las ciencias sociales involucran relaciones: entre personas, instituciones, territorios, ideas o prácticas culturales. El análisis de redes ofrece herramientas para representar y estudiar estas conexiones, identificar comunidades, reconocer actores relevantes y explorar estructuras que pueden resultar difíciles de observar mediante otros enfoques.

Este taller introduce los principales conceptos y aplicaciones del análisis de redes a partir de casos de investigación con encuestas, documentos, registros etnográficos y producción científica. Se abordará también cómo la inteligencia artificial puede facilitar la extracción, organización y exploración de información, junto con sus limitaciones metodológicas.

La actividad combinará explicaciones breves, estudios de caso y un ejercicio práctico de construcción y visualización de redes mediante herramientas gratuitas y accesibles. Está dirigida a docentes e investigadores de ciencias sociales y no requiere conocimientos previos de programación.

## Pregunta que organiza el taller

> ¿Qué podemos descubrir cuando estudiamos las **relaciones** entre personas, ideas, instituciones, lugares o documentos?

## Objetivos de aprendizaje

Al finalizar, los participantes podrán:

1. Reconocer nodos, vínculos y diferentes formas de construir redes a partir de materiales de investigación social.
2. Interpretar de manera inicial conceptos como centralidad, intermediación y comunidades.
3. Distinguir entre coaparición, interacción documentada y otros criterios de definición de vínculos.
4. Experimentar con un flujo sencillo: **fuente → extracción asistida → revisión → tabla → visualización → interpretación**.
5. Identificar oportunidades y riesgos al utilizar IA para la preparación de datos relacionales.

## Temario: 120 minutos

| Horario (Chile) | Bloque | Contenido |
|---|---|---|
| **10:00–10:10** | Introducción | Preguntas sociales que pueden analizarse relacionalmente. |
| **10:10–10:25** | Conceptos fundamentales | Nodos, vínculos, comunidades, centralidad e intermediación. Decisiones para convertir fuentes en redes. |
| **10:25–10:55** | Cuatro estudios de caso | Encuestas, etnografía y patrimonio, bibliometría y análisis de textos. |
| **10:55–11:05** | Demostración con IA | Extraer relaciones de un fragmento textual y revisar errores de identificación. |
| **11:05–11:40** | Práctica guiada | Abrir una red preparada, explorar sus vínculos, comparar decisiones de construcción. |
| **11:40–11:55** | Interpretación y discusión | ¿Qué cambia al definir de otra manera una relación? ¿Qué implica para las conclusiones? |
| **11:55–12:00** | Cierre | Recursos abiertos y posibles aplicaciones a proyectos de los participantes. |

## Estudios de caso

| Caso | Pregunta social | Tipo de fuente | Concepto destacado | Material |
|---|---|---|---|---|
| **1. Opiniones sobre la ciencia** | ¿Cómo se relacionan diferentes expectativas, reservas y actitudes frente a la ciencia? | Encuesta sobre percepción de ciencia y tecnología en Perú | Redes de asociación; comunidades de respuestas | [Ficha](casos/01-encuesta-ciencia.md) |
| **2. Qoyllur Rit'i** | ¿Cómo se articulan lugares, actores, prácticas y fuentes? | Registros y textos sobre la festividad | Grafo de conocimiento; modelado de relaciones | [Ficha](casos/02-qoylluriti.md) |
| **3. Patrimonio y producción científica** | ¿Quién investiga qué temas y desde qué instituciones o territorios? | Publicaciones y metadatos bibliográficos | Redes de colaboración y temas | [Ficha](casos/03-bibliometria-patrimonio.md) |
| **4. *Martín Rivas*** | ¿Qué relaciones entre personajes y mundos sociales pueden identificarse en un texto? | Fragmento de la novela de Alberto Blest Gana | Extracción de relaciones; coaparición frente a interacción | [Ficha](casos/04-martin-rivas.md) |

Los casos 1 y 2 se apoyan en líneas de investigación ya desarrolladas. El caso bibliométrico se presentará con resultados que puedan verificarse; el ejemplo literario es una **propuesta didáctica** y sus comunidades deberán comprobarse en la red construida, en lugar de presuponerse.

## Práctica principal

**Ejercicio:** partir de un breve fragmento textual y construir una representación de relaciones entre personajes, seguida de una comparación con una red ya preparada.

```text
Fragmento textual
      ↓
Extracción asistida por IA
      ↓
Verificación de nombres, vínculos y evidencias
      ↓
Tabla de relaciones (origen, destino, tipo, evidencia)
      ↓
Visualización de un grafo
      ↓
Interpretación y discusión metodológica
```

La actividad en vivo tendrá **un recorrido principal** y un archivo de respaldo: de este modo, quienes se conecten a distancia o tengan problemas con el chat de IA podrán continuar con los mismos datos. El ejemplo de prueba incluido en este repositorio es **ficticio** y sirve para verificar Gephi Lite y la conversión de formatos; el fragmento real de *Martín Rivas* se incorporará tras seleccionar y comprobar el pasaje.

**Pregunta metodológica central:** ¿qué cambia si consideramos que dos personajes se relacionan por aparecer en el mismo fragmento, frente a exigir que interactúen explícitamente?

[Acceder a la guía de la práctica →](practica/README.md)

## Herramientas previstas

- **Un asistente de IA:** proponer entidades y relaciones a partir de texto, conservando evidencia verificable.
- **[Gephi Lite](https://gephi.org/gephi-lite/):** abrir, visualizar y explorar una red desde el navegador.
- **[Google Colab](https://colab.research.google.com/)** *(complementario, no obligatorio durante el taller)*: procesar tablas, calcular métricas y repetir la experiencia después.
- **[OpenAlex](https://openalex.org/)** *(caso bibliográfico)*: consultar metadatos de producción científica.

## Qué se espera que se lleven los participantes

- Un vocabulario básico para discutir redes con criterio metodológico.
- Un archivo de ejemplo que puedan abrir y explorar.
- Un procedimiento simple para convertir textos o registros en relaciones explícitas.
- Preguntas críticas para evaluar la extracción asistida por IA y la interpretación de los resultados.

## Organización de los materiales

- [`casos/`](casos/): cuatro fichas metodológicas breves.
- [`practica/`](practica/): guía, prompt, datos ficticios y conversor a GEXF.
- `diapositivas/`: presentación final del taller, pendiente.
- `figuras/`: visualizaciones definitivas, pendientes.

## Criterios de trabajo

- **La pregunta de investigación guía la construcción del grafo.**
- Cada relación debería poder rastrearse hasta un criterio de codificación o una evidencia.
- Una medida de centralidad es una propiedad del grafo construido; su interpretación sustantiva requiere contexto.
- La IA puede equivocarse al identificar entidades, unificar nombres o inferir vínculos. Las salidas se revisarán.
- Se utilizarán fuentes abiertas o autorizadas; no se compartirán datos personales sensibles de participantes.
