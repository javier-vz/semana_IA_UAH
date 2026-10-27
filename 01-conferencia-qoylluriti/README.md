# Conferencia UAH 2026 · HTML revisado

**Un grafo construido entre muchos: inteligencia artificial y conocimiento situado en Qoyllur Rit’i**  
II Semana de la Inteligencia Artificial · Universidad Alberto Hurtado · 28 de octubre de 2026.

Este paquete **amplía el apunte UNESCO original** a un recurso web de siete partes. No utiliza las diapositivas PPTX criticadas.

## Contenido

- `index.html`: documento principal, con navegación, figuras ampliables, modo lectura y modo exposición. Funciona localmente, sin instalar paquetes.
- `apunte_UNESCO_original.html`: copia intacta del apunte original compartido por el autor.
- `assets/`: fotografías y figuras extraídas del apunte, mapas aportados y gráficos de artículos, con créditos en la página.
- `mapa-narrativo-2026/index.html`: mapa interactivo aportado del recorrido 2026, con sus datos y fotografías.
- `puntos_referencia_2026.gpx`: favoritos/puntos de referencia; **no** representan la ruta GPS completa.

## Integración a GitHub

Este ZIP está organizado para **fusionarse con** `javier-vz/semana_IA_UAH`, sin borrar el taller `02-taller-analisis-redes` ni otros archivos. Copiar la carpeta `01-conferencia-qoylluriti/` a la raíz del repositorio y conservar las demás carpetas. En GitHub Pages, abrir:

`https://javier-vz.github.io/semana_IA_UAH/01-conferencia-qoylluriti/`

Si aún no está activo Pages, en GitHub usar Settings → Pages → Deploy from a branch → `main` / `(root)`.

## Fuentes y decisiones de integridad

1. Artículo UNESCO DOI `10.1038/s40494-026-02400-2`: coocurrencia de metadatos, Louvain, entropía. Sus datos y figuras se reproducen desde el apunte original.
2. Artículo Wikidata DOI `10.1057/s41599-026-08715-6`: muestra de 228 nodos, 495 aristas; **no** se confunde ausencia en la muestra con ausencia cultural.
3. Manuscrito *Situated Knowledge in Knowledge Graphs*, 19 de octubre 2026: describe el grafo situado construido a partir de trabajo de campo de **2025**, con límites de cobertura y 16 consultas evaluadas. El manuscrito no se presenta como publicación revisada por pares.
4. Rutas y fotografía de **2026**: documentación complementaria, **no** validación retrospectiva del grafo 2025.
5. Google Scholar de Dina Cornejo Meza incorporado: `https://scholar.google.com/citations?user=jEJ18MwAAAAJ&hl=es`.

No publicar automáticamente todo bajo una licencia abierta sin comprobar antes derechos editoriales de las figuras, consentimiento de personas fotografiadas y sensibilidad de algunos recorridos rituales.


## Actualización: visualizaciones y herramientas (27/10/2026)

La sección de introducción a grafos ahora usa **las figuras empíricas originales de los artículos** en vez de los diagramas ilustrativos de tres y dos nodos. Muestra por separado la red UNESCO (220 descriptores primarios, 1.026 conexiones) y la figura del grafo situado del manuscrito (87 individuos en el modelo, 15 clases); la última figura representa un conjunto de relaciones, no todo el grafo completo. Ambas imágenes se pueden ampliar.

Accesos visibles al comienzo y junto a las redes:

- Grafo interactivo: https://javier-vz.github.io/kg-llm/grafo_interactivo.html
- App experimental Qoyllur Rit’i Explorer: https://qoyllurity.streamlit.app/

La app está enlazada pero su disponibilidad online depende de Streamlit.


## Actualización de 27 de octubre de 2026

- `index.html`: mantiene la explicación inicial de grafos con una red esquemática independiente de los resultados; integra la distinción entre Wikipedia, Wikidata y SPARQL; reemplaza la figura de la sección Wikidata por `assets/grafo-unificado-proporcionado.png`, facilitada por los autores, sin confundir los totales de extracción con el subgrafo visualizado.
- `mapa-narrativo-2026/index.html`: reemplaza las teselas `cartocdn.com` que requerían clave API por teselas públicas de OpenStreetMap, conservando trazas GPS, marcadores, fotos, filtros y etapas. La capa base precisa conexión a internet.
- No se han alterado los archivos `data/rutas.js`, `data/paradas.js` ni las fotografías.

Para GitHub Pages: el contenido de `01-conferencia-qoylluriti/` debe estar en exactamente esa carpeta en la raíz del repositorio `semana_IA_UAH`. Subir los archivos no activa automáticamente la publicación si Pages no está configurado; revisar `Settings > Pages`.
