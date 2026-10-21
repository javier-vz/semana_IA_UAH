# Redes, conocimiento situado e inteligencia artificial

**Dos actividades en la II Semana de la Inteligencia Artificial de la Universidad Alberto Hurtado (UAH), Chile — 26 al 30 de octubre de 2026.**

Este repositorio reúne las presentaciones, ejemplos, materiales metodológicos y recursos de dos actividades complementarias sobre grafos de conocimiento, análisis de redes e inteligencia artificial en investigación social.

La idea que articula ambas propuestas es sencilla: **estudiar las relaciones permite formular preguntas nuevas sobre el conocimiento, los textos, los territorios y las prácticas sociales**. La inteligencia artificial puede asistir en la organización y exploración de la información, mientras que las decisiones de investigación y la interpretación de los resultados permanecen explícitas y sujetas a revisión.

**Expositor:** Javier Vera, Universidad Tecnológica del Perú (UTP).  
**Colaboración en las investigaciones y materiales:** Dina Cornejo Meza y Javier Vera, en diálogo con los equipos y comunidades vinculados a cada proyecto.  
**Evento:** [II Semana de la Inteligencia Artificial UAH](https://www.uahurtado.cl/semana-de-la-ia-2026/).

## Un trabajo compartido

Las dos actividades y los materiales de este repositorio se desarrollan **en colaboración con Dina Cornejo Meza**. Las preguntas de investigación, las ideas, los enfoques y las herramientas que aquí compartimos son el resultado de **procesos colectivos de trabajo, discusión y aprendizaje**.

Esta perspectiva también atraviesa los proyectos presentados: el conocimiento se construye con otras personas, equipos y comunidades. Por eso procuramos hacer visibles las contribuciones y reconocer las autorías y colaboraciones específicas de cada investigación. **Que Javier Vera esté a cargo de las presentaciones no significa que las ideas o los resultados sean individuales.**

## Actividades

| Fecha | Actividad | Modalidad y público | Materiales |
|---|---|---|---|
| **Miércoles 28 de octubre, 10:00–11:00 h (Chile)** | **Un grafo construido entre muchos: inteligencia artificial y conocimiento situado en Qoyllur Rit’i** | Conferencia, programación general de la Semana de la IA | [01 · Conferencia](01-conferencia-qoylluriti/README.md) |
| **Viernes 30 de octubre, 10:00–12:00 h (Chile)** | **Análisis de redes para la investigación social: métodos, casos y herramientas en tiempos de inteligencia artificial** | Taller FACSO; modalidad híbrida (presencial y en línea), según coordinación con la facultad | [02 · Taller](02-taller-analisis-redes/README.md) |

> La conferencia del miércoles figura en el programa público de la UAH. Los datos del taller del viernes corresponden a la coordinación con FACSO y pueden actualizarse si cambia su difusión institucional.

## Dos actividades conectadas

### 01. Conferencia: un grafo construido entre muchos

La conferencia explora cómo representar relaciones entre actores, lugares, prácticas, fuentes y saberes vinculados a la festividad del Señor de Qoyllur Rit'i. Interesa especialmente la construcción situada del conocimiento: de qué fuentes procede la información, quién interviene en su organización y qué puede —y qué no puede— aportar la inteligencia artificial.

[Ver presentación y organización de contenidos →](01-conferencia-qoylluriti/README.md)

### 02. Taller: análisis de redes para la investigación social

El taller está dirigido a docentes e investigadores de ciencias sociales. Combina una introducción accesible a las redes, cuatro casos de estudio y una práctica guiada para pasar de una fuente textual a una tabla de relaciones y a una visualización. **No requiere conocimientos previos de programación.**

Casos que se trabajarán:

1. **Encuestas:** asociaciones entre respuestas y actitudes hacia la ciencia.
2. **Etnografía y patrimonio:** relaciones en el grafo de Qoyllur Rit'i.
3. **Bibliometría:** conexiones en la producción de conocimiento sobre patrimonio cultural.
4. **Textos literarios:** identificación de relaciones sociales en *Martín Rivas*.

[Ver resumen de difusión, temario y práctica →](02-taller-analisis-redes/README.md)

## Organización del repositorio

```text
semana-ia-uah-2026/
├── README.md
├── 01-conferencia-qoylluriti/
│   ├── README.md                 # Concepto, preguntas y guion sugerido
│   ├── diapositivas/             # Presentación de la conferencia (por incorporar)
│   ├── figuras/                  # Imágenes, grafos y mapas (por incorporar)
│   └── demo/README.md           # Enlaces al explorador y repositorios del proyecto
├── 02-taller-analisis-redes/
│   ├── README.md                 # Resumen de difusión, objetivos, agenda y casos
│   ├── diapositivas/             # Presentación del taller (por incorporar)
│   ├── figuras/                  # Figuras y capturas del taller (por incorporar)
│   ├── casos/                    # Fichas metodológicas de los cuatro casos
│   └── practica/
│       ├── README.md             # Instrucciones para la actividad
│       ├── prompts/              # Ejemplos para extracción asistida por IA
│       ├── datos/                # Red ficticia de prueba; datos reales, pendientes
│       ├── scripts/              # Conversión de tablas a GEXF
│       └── resultados/           # Grafo de prueba para Gephi Lite
└── recursos/
    ├── herramientas.md          # Recursos abiertos y enlaces
    ├── plan-de-trabajo.md        # Lista de tareas previas a ambos eventos
    └── etica-y-reutilizacion.md  # Uso responsable, procedencia y licencias
```

Las carpetas de diapositivas y figuras están inicialmente vacías. Los archivos de ejemplo de la práctica son **sintéticos y únicamente demostrativos**; no contienen observaciones de los proyectos de investigación.

## Cómo usar los materiales

- **Para asistir a la conferencia:** comenzar por [la presentación del proyecto Qoyllur Rit'i](01-conferencia-qoylluriti/README.md) y acceder a los enlaces de la demostración.
- **Para participar en el taller:** leer [la guía del taller](02-taller-analisis-redes/README.md), seguir [la práctica](02-taller-analisis-redes/practica/README.md) y abrir el archivo GEXF de prueba en [Gephi Lite](https://gephi.org/gephi-lite/).
- **Para reutilizar el ejercicio:** consultar el [prompt orientativo](02-taller-analisis-redes/practica/prompts/extraccion-relaciones.md) y las indicaciones sobre calidad de datos y atribución.

## Alcance y estado

Repositorio preparado inicialmente como **estructura de trabajo**. El contenido conceptual, la propuesta de taller y una red sintética de prueba ya están incluidos. Las diapositivas definitivas, visualizaciones de investigación y datos autorizados se incorporarán progresivamente.

## Referencias y proyectos vinculados

- [Programa de la II Semana de la IA — UAH](https://www.uahurtado.cl/semana-de-la-ia-2026/)
- [Repositorio del grafo de Qoyllur Rit'i](https://github.com/javier-vz/qoyllurity)
- [Repositorio de rutas Qoyllur Rit'i](https://github.com/javier-vz/rutas_qoyllurity)
- [Qoyllur Rit'i Explorer](https://qoyllurity.streamlit.app/)

## Créditos y reutilización

**Colaboración transversal:** Dina Cornejo Meza y Javier Vera. El contenido de este repositorio se nutre de ideas y trabajos colectivos, con aportes específicos que serán reconocidos en los materiales y proyectos correspondientes.

Los materiales deberán citar las investigaciones, fuentes, conjuntos de datos y autorías que correspondan. La publicación abierta del repositorio **no implica que todos sus archivos sean de libre reutilización**. Antes de agregar una licencia para el conjunto se revisarán los permisos de imágenes, textos, datos y material de terceros; véase [ética y reutilización](recursos/etica-y-reutilizacion.md).
