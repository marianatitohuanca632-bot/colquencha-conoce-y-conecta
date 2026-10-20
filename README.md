# Colquencha: Conoce y Conecta - la plataforma

Rutas de acceso y promoción del municipio de Colquencha. La pestaña **«Otras sedes»** muestra además las demás
sedes universitarias de la UMSA, cada una con su página: rutas de acceso, los programas de la sede y su
galería de fotos (sin información de turismo ni del municipio). La información de Colquencha lleva su fuente entre paréntesis, y cada
foto su autor y su licencia.

## Cómo abrirla

Doble clic en `index.html`. Funciona **sin internet** y sin instalar nada: todo está en esta carpeta.

## Qué hay en la carpeta

| Archivo | Qué hace |
|---|---|
| `index.html` + `script.js` | **la página de Colquencha**. La misma página muestra otra sede si se le pide: `index.html?sede=quime` |
| `otras-sedes.html` + `otras-sedes.js` | la pestaña «Otras sedes»: todas las sedes por región, con un buscador |
| `estilo.css` | los estilos (el diseño del grupo, con las secciones 17 a 19 nuevas al final) |
| `sedes.js` | **la lista de las sedes**: nombre, región, tipo y si ya está activa |
| `sedes/colquencha.js` | **los datos de Colquencha**: lugares, tramos, accesos, información de cada sección y galería |
| `sedes/<sede>.js` | los datos de cada sede de la pestaña «Otras sedes», con el mismo formato (generados con OpenStreetMap y Wikipedia) |
| `lugaresturisticos.html`, `cultura.html`, `produccion.html`, `educacion.html`, `UMSACO.html` + `secciones.css` | las páginas de cada tarjeta de Colquencha (versión 2.1 del grupo): el botón de cada tarjeta lleva a la suya. En otra sede no se usan |
| `img/colquencha/` | las imágenes de Colquencha |
| `videos/colquencha/` | los videos de Colquencha (reducidos a 480p para que carguen con internet lento) |
| `algoritmos.js` | Dijkstra, BFS y A* |
| `pruebas/probar.js` | las pruebas de los algoritmos y de los datos de cada sede |

## Cómo se agrega información o una foto (Colquencha)

1. **Un dato** va en `secciones` de `sedes/colquencha.js`, con su fuente entre paréntesis. Solo información
   verificada. Una sección sin datos no se muestra.
2. **Una foto** va en `img/colquencha/` y se agrega a `galeria` con su leyenda y su crédito (autor y
   licencia).
3. **Las imágenes del diseño** están en `img/colquencha/`: el fondo del inicio es `fondo-colquencha.jpeg`
   (se cambia en `fondo` de `sedes/colquencha.js`) y las fotos de las tarjetas se cambian en `index.html`.
   Todavía falta `imapro.webp` (la de «¿Por qué visitar?»).
4. **La lista de sedes** está en `sedes.js` y sale del folleto del IDR-DU. Falta identificar una de las 14
   sedes locales.

## Cómo se agrega una sede (por ejemplo, la sede local que falta)

1. En `sedes.js`, agregarla a la lista con su `id` (sin tildes ni espacios, por ejemplo `nueva-sede`), región,
   tipo y programas.
2. Copiar `sedes/colquencha.js` como `sedes/nueva-sede.js`, cambiar la primera línea a
   `DATOS_SEDE["nueva-sede"] = {` y poner sus datos: lugares (con latitud y longitud de openstreetmap.org),
   tramos con sus km y minutos (la herramienta de rutas de openstreetmap.org), accesos, secciones y galería.
3. En `index.html`, junto a las demás, agregar `<script src="sedes/nueva-sede.js"></script>`.
4. En `sedes.js`, ponerle `activa: true`.
5. Correr las pruebas: `node pruebas/probar.js`.

No hay que tocar `script.js` ni `algoritmos.js`: la página, el mapa y los cálculos salen de los datos.

## Cómo correr las pruebas

Con Node.js instalado, desde esta carpeta:

```
node pruebas/probar.js
```

Revisa la lista de sedes (que cada sede activa tenga su archivo y que `index.html` lo cargue) y, para cada sede,
compara cada resultado de Dijkstra con **todos** los caminos posibles. Si agregan un tramo y una prueba falla,
el dato está mal (por ejemplo, un tramo más corto que la línea recta entre sus dos puntos).
