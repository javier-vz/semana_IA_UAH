# Consultas SPARQL · seis ejemplos para Ciencias Sociales

El identificador `Q2408955` corresponde a la **festividad** de Qoyllur Rit’i en Wikidata, no al Santuario del grafo local.

**Estructura común:** `SELECT` determina columnas; `WHERE` describe el patrón sujeto–propiedad–objeto; `wd:` indica una entidad; `wdt:` una propiedad directa; `?` una variable; `SERVICE wikibase:label` añade nombres legibles; `LIMIT` limita filas.

Las consultas están pensadas para ejecutarse en https://query.wikidata.org/ . El servicio puede cambiar, devolver más/menos filas o estar temporalmente limitado.

## 01. ¿En qué país se registra Qoyllur Rit’i? — Lugar

Partimos de una entidad conocida y seguimos la propiedad P17 (país). El resultado es una entidad, no un texto generado.

```sparql
SELECT ?pais ?paisLabel WHERE {
  wd:Q2408955 wdt:P17 ?pais.
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "es,en".
  }
}
LIMIT 10
```

## 02. ¿Cómo está clasificada esta festividad? — Clasificación

P31 significa «instancia de». Una entidad puede pertenecer a más de una categoría: importa para el análisis de clasificaciones.

```sparql
SELECT ?tipo ?tipoLabel WHERE {
  wd:Q2408955 wdt:P31 ?tipo.
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "es,en".
  }
}
LIMIT 10
```

## 03. ¿Qué unidad administrativa indica Wikidata? — Territorio

P131 enlaza una entidad con un territorio administrativo. No equivale a una coordenada, una ruta ni una delimitación ritual.

```sparql
SELECT ?region ?regionLabel WHERE {
  wd:Q2408955 wdt:P131 ?region.
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "es,en".
  }
}
LIMIT 10
```

## 04. ¿Qué año figura como inicio en la ficha? — Tiempo

P571 es «fecha de fundación o creación». La ficha registra 2004: eso NO demuestra que la tradición comenzara entonces. Es un ejemplo de por qué verificar la procedencia y el significado del metadato.

```sparql
SELECT ?fecha WHERE {
  wd:Q2408955 wdt:P571 ?fecha.
}
LIMIT 10
```

## 05. ¿Qué obras están vinculadas a un autor? — Autoría y obras

Invertimos la dirección de la pregunta: buscamos obras (?obra) que tengan como autor (P50) a Arthur Conan Doyle (Q35610). Un ejemplo de historia intelectual y redes bibliográficas.

```sparql
SELECT ?obra ?obraLabel WHERE {
  ?obra wdt:P50 wd:Q35610.
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "es,en".
  }
}
LIMIT 10
```

## 06. ¿Cuántas propiedades directas distintas tiene la ficha? — Cobertura del registro

COUNT agrega los resultados; DISTINCT evita contar dos veces la misma propiedad. Mide la diversidad de campos registrados en Wikidata, NO la importancia cultural.

```sparql
SELECT (COUNT(DISTINCT ?propiedad) AS ?cantidad) WHERE {
  wd:Q2408955 ?propiedad ?valor.
  FILTER(STRSTARTS(
    STR(?propiedad),
    "http://www.wikidata.org/prop/direct/"
  ))
}
```

## Dos advertencias sobre el método

- El valor `P571` de Wikidata debe interpretarse como **un registro de la base**; no como prueba definitiva de la fecha en que comenzó la tradición ritual. Revisar las referencias y la historia del elemento.
- Las propiedades directas `wdt:` son cómodas para empezar, pero omiten detalles de las declaraciones completas, como calificadores y referencias; para investigarlos se requieren patrones SPARQL más avanzados.

Referencia: [Tutorial oficial de Wikidata SPARQL](https://www.wikidata.org/wiki/Wikidata:SPARQL_tutorial).
