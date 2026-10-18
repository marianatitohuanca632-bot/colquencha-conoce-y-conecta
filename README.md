# Conoce y Conecta: Sedes UMSA - la plataforma

Rutas de acceso y promoción de los municipios con sede universitaria de la UMSA. Tiene un **inicio con todas
las sedes** y una **página por sede**. La primera sede completa es Colquencha; las demás muestran "próximamente".

## Cómo abrirla

Doble clic en `index.html`. Funciona **sin internet** y sin instalar nada: todo está en esta carpeta.

## Qué hay en la carpeta

| Archivo | Qué hace |
|---|---|
| `index.html` + `inicio.js` | el inicio: todas las sedes por región, con un buscador |
| `sede.html` + `script.js` | la página de una sede: `sede.html?sede=colquencha` |
| `estilo.css` | los estilos (el diseño del grupo, con las secciones 17 a 19 nuevas al final) |
| `sedes.js` | **la lista de las sedes**: nombre, región, tipo y si ya está activa |
| `sedes/colquencha.js` | **los datos de Colquencha**: lugares, tramos, accesos, información de cada sección y galería |
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
3. **La lista de sedes**, en `sedes.js`: confirmarla con el IDR-DU.

## Cómo se agrega una sede (por ejemplo, Quime)

1. Copiar `sedes/colquencha.js` como `sedes/quime.js`, cambiar la primera línea a `DATOS_SEDE.quime = {` y
   poner sus datos: lugares (con latitud y longitud de openstreetmap.org), tramos con sus km y minutos
   (la herramienta de rutas de openstreetmap.org), accesos, secciones y galería.
2. En `sede.html`, junto a la de Colquencha, agregar `<script src="sedes/quime.js"></script>`.
3. En `sedes.js`, ponerle `activa: true` a Quime.
4. Correr las pruebas: `node pruebas/probar.js`.

No hay que tocar `script.js` ni `algoritmos.js`: la página, el mapa y los cálculos salen de los datos.

## Cómo correr las pruebas

Con Node.js instalado, desde esta carpeta:

```
node pruebas/probar.js
```

Revisa la lista de sedes (que cada sede activa tenga su archivo y que `sede.html` lo cargue) y, para cada sede,
compara cada resultado de Dijkstra con **todos** los caminos posibles. Si agregan un tramo y una prueba falla,
el dato está mal (por ejemplo, un tramo más corto que la línea recta entre sus dos puntos).
