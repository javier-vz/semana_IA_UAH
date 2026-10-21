# Práctica guiada · Del texto a la red

Esta práctica está pensada para participantes de ciencias sociales y humanidades sin experiencia previa en programación. Se usará durante el taller del viernes 30 de octubre de 2026.

## Objetivo

Construir e interpretar una red pequeña y mostrar cómo las reglas de codificación influyen en sus resultados.

## Secuencia para el taller

1. **Leer** un fragmento corto y definir qué cuenta como relación.
2. **Extraer** una tabla preliminar con ayuda de un modelo de IA. Usar el [prompt orientativo](prompts/extraccion-relaciones.md).
3. **Revisar** los personajes, las variantes de nombre y la evidencia textual de cada vínculo.
4. **Abrir** en [Gephi Lite](https://gephi.org/gephi-lite/) un archivo GEXF preparado como respaldo.
5. **Explorar** grupos de nodos, conexiones y posibles intermediarios.
6. **Comparar** cómo se modifica la red bajo un criterio alternativo de vínculos.
7. **Interpretar** los resultados con cautela: son propiedades de una codificación concreta.

## Material disponible desde ahora

El subdirectorio [`datos/`](datos/) contiene una red **totalmente ficticia** de ocho personas y diez relaciones, creada solo para comprobar la visualización. No corresponde a *Martín Rivas*, Qoyllur Rit'i ni a una encuesta.

| Archivo | Contenido |
|---|---|
| `datos/ejemplo_nodos.csv` | Identificador, etiqueta y grupo ficticio de cada nodo |
| `datos/ejemplo_aristas.csv` | Origen, destino, tipo y peso de cada relación |
| `resultados/ejemplo_red.gexf` | El mismo ejemplo, listo para abrir en Gephi Lite |
| `scripts/csv_a_gexf.py` | Conversor sencillo, sin dependencias externas |

### Prueba rápida

1. Entrar a [Gephi Lite](https://gephi.org/gephi-lite/).
2. Seleccionar la opción para abrir/importar un archivo de grafo.
3. Cargar [`resultados/ejemplo_red.gexf`](resultados/ejemplo_red.gexf).
4. Aplicar una disposición de nodos y explorar sus enlaces.

### Regenerar el archivo GEXF (opcional)

Desde la raíz del repositorio:

```bash
python 02-taller-analisis-redes/practica/scripts/csv_a_gexf.py \
  --nodos 02-taller-analisis-redes/practica/datos/ejemplo_nodos.csv \
  --aristas 02-taller-analisis-redes/practica/datos/ejemplo_aristas.csv \
  --salida 02-taller-analisis-redes/practica/resultados/ejemplo_red.gexf
```

No se requieren instalaciones adicionales: el conversor usa solo la biblioteca estándar de Python 3.

## Archivos que se incorporarán

- Texto breve seleccionado de *Martín Rivas* (o enlace a la edición).
- Tabla de relaciones **revisada** contra el texto.
- Dos versiones comparables del grafo, con criterios explícitos de construcción.
- Capturas de respaldo para participantes remotos o problemas de conectividad.

## Para quien facilita

Priorizar una demostración colectiva y asegurar que el resultado principal sea reproducible. Evitar que el éxito de la práctica dependa de que todos tengan una cuenta de IA o ejecuten código en sus computadores. La interpretación debe incluir las decisiones que generan cada arista.
