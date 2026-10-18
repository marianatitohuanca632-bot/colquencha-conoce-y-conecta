# Colquencha: Conoce y Conecta - la plataforma

## Cómo abrirla

Doble clic en `index.html`. Funciona **sin internet** y sin instalar nada: todo está en esta carpeta.

## Qué hay en la carpeta

| Archivo | Qué hace |
|---|---|
| `index.html` | la página (el diseño del grupo) |
| `estilo.css` | los estilos (el diseño del grupo, con un bloque nuevo al final, la sección 17) |
| `datos.js` | **lo que se edita:** lugares, tramos de camino e información de cada sección |
| `algoritmos.js` | Dijkstra, BFS y A* |
| `script.js` | conecta los datos y los algoritmos con la página |
| `pruebas/probar.js` | las pruebas de los algoritmos |

## Lo que falta poner

1. **Las tres imágenes** que usa la página, en esta misma carpeta y con estos nombres exactos:
   `paisaje_colquencha.png` (el fondo del inicio), `imapro.webp` y `imgpro2.webp`.
   Mientras no estén, la página muestra un fondo de color en su lugar.
2. **La información de Turismo, Cultura, Producción y Educación**, en `SECCIONES` de `datos.js`. Lo que dice
   `[COMPLETAR]` se ve resaltado en amarillo en la página: escriban el dato y borren la marca. Solo información verificada.
3. **Las fotos de la galería**, con estos nombres: `foto-calvario.jpg`, `foto-iglesia.jpg`, `foto-fiesta.jpg`,
   `foto-produccion.jpg`, `foto-colegio.jpg` y `foto-sede.jpg`. Mientras falten, se ve un ícono con su leyenda.
4. **La lista de sedes de la UMSA**, en `SEDES` de `datos.js`: confirmarla con el IDR-DU. La barra de sedes y la
   sección "Sedes UMSA" salen de ahí.

## Cómo agregar un lugar o un tramo

En `datos.js`:

- Un lugar nuevo va en `LUGARES`, con su latitud y longitud (búsquenlo en openstreetmap.org: clic derecho,
  "Mostrar dirección") y su posición en el esquema del mapa (`x` de 0 a 600, `y` de 0 a 420).
- Un tramo nuevo va en `TRAMOS`, con sus km y minutos. Midan la distancia en openstreetmap.org con la
  herramienta de rutas (el ícono de las flechas, junto al buscador).

No hay que tocar `script.js` ni `algoritmos.js`: la lista de partida, el mapa y los cálculos salen de los datos.

## Cómo correr las pruebas

Con Node.js instalado, desde esta carpeta:

```
node pruebas/probar.js
```

Compara cada resultado de Dijkstra con **todos** los caminos posibles. Si agregan un tramo y una prueba falla,
el dato está mal (por ejemplo, un tramo más corto que la línea recta entre sus dos puntos).
