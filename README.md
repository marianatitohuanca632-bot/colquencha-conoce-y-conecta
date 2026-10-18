# Colquencha: Conoce y Conecta - la plataforma

Rutas de acceso y promoción del municipio de Colquencha. La pestaña **«Otras sedes»** muestra además las demás
sedes universitarias de la UMSA, cada una con su página de rutas. En esas sedes, la información del municipio
está marcada `[COMPLETAR]`.

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
| `img/colquencha/` | las imágenes de Colquencha |
| `algoritmos.js` | Dijkstra, BFS y A* |
| `pruebas/probar.js` | las pruebas de los algoritmos y de los datos de cada sede |

## Lo que falta poner (Colquencha)

1. **Las imágenes**, en `img/colquencha/` y con estos nombres exactos: `paisaje_colquencha.png` (el fondo del
   inicio de la sede), `imapro.webp`, `imgpro2.webp`, y las seis de la galería: `foto-calvario.jpg`,
   `foto-iglesia.jpg`, `foto-fiesta.jpg`, `foto-produccion.jpg`, `foto-colegio.jpg` y `foto-sede.jpg`.
   Mientras falten, se ve un fondo de color o un ícono con su leyenda.
2. **La información de Turismo, Cultura, Producción y Educación**, en `secciones` de `sedes/colquencha.js`. Lo
   que dice `[COMPLETAR]` se ve resaltado en amarillo en la página: escriban el dato y borren la marca.
   Solo información verificada.
3. **La lista de sedes**, en `sedes.js`, sale del folleto del IDR-DU: falta una de las 14 sedes locales.

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
