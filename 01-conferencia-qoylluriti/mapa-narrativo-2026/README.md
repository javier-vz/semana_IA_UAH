# Mapa narrativo · Qoyllur Rit’i 2026

Mapa interactivo con rutas GPS simplificadas, paradas seleccionables y fotografías ampliables. **Versión de trabajo para revisión editorial y ética**, diseñada para apoyar la conferencia de la Semana de la IA en la Universidad Alberto Hurtado (miércoles 28 de octubre de 2026).

**Autoria del trabajo de investigación y enfoque:** Javier Vera y Dina Cornejo Meza, junto a las personas, equipos y comunidades involucradas. La autoría de fotografías específicas y los permisos se verificarán antes de publicar.

## Abrir y publicar

- Abrir `index.html` en un navegador con conexión a internet: el mapa usa Leaflet y teselas CARTO/OSM. Las fotos se cargan desde archivos locales.
- Para GitHub Pages, subir la carpeta `mapa-narrativo` conservando `assets/` y `data/`. Se puede acceder a `https://USUARIO.github.io/REPOSITORIO/01-conferencia-qoylluriti/mapa-narrativo/` una vez activado Pages en Settings → Pages, publicando desde la rama y carpeta correctas.
- **No publicar el prototipo sin confirmar las fotos, los créditos y sus permisos de difusión.**

## Editar los datos

- `data/paradas.js`: título, texto, fotos y ubicación aproximada de las ocho paradas. Puedes corregir qué foto aparece en cada parada moviendo objetos `photos` entre ellas y actualizando los textos.
- `data/rutas.js`: 12 trazas GPS simplificadas a partir del respaldo OsmAnd 2026, con fases editoriales: aproximación, altura y retorno.
- `assets/fotos/`: selección de 35 fotografías, renombradas según ID `foto-XX.jpg` y exportadas sin EXIF.
- `catalogo_fotografias.csv`: inventario de las 75 imágenes recibidas, con los IDs y la selección actual.

## Alcance y límites

- **Ninguna foto del ZIP contiene GPS EXIF.** La agrupación por etapas es una propuesta preliminar basada en contenido visual, no una geolocalización documentada de cada fotografía.
- **Los nombres y los puntos requieren comprobación.** La ubicación del sector Colque Punku y de lugares secundarios procede de extremos de trazas, no de delimitaciones oficiales. Las paradas intermedias pueden funcionar como referencias de recorrido, no como nuevos lugares rituales.
- Se omiten puntos favoritos privados, domicilios, marcas `PRE` y el GPX bruto. Los 12 recorridos publicados son geometrías simplificadas para una visualización exploratoria; no son indicaciones de senderismo ni un mapa etnográfico validado.
- Las fotografías pueden mostrar personas reconocibles; confirmar permisos de uso público, créditos y sensibilidad cultural antes de publicar GitHub Pages.
- **2025 y 2026 son capas diferentes**: el grafo RDF evaluado en el artículo se construyó desde el trabajo de campo de 2025; el mapa presenta material registrado/compartido en 2026 que podría orientar una ampliación posterior.

## Sugerencia para la conferencia

Demostración de 4–5 minutos: `Paucartambo → Mahuayani → Santuario → sector Colque Punku → tramo de retorno`. En cada parada, abrir una foto y explicar cómo representaríamos **lugar, tiempo, participantes, práctica y fuente** dentro del grafo. Cerrar con el enlace al [grafo interactivo de Qoyllur Rit’i](https://javier-vz.github.io/kg-llm/grafo_interactivo.html).
