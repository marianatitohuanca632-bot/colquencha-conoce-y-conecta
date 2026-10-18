/* ==============================================================
   ALGORITMOS DE BÚSQUEDA DE RUTAS
   Funciones puras: reciben el grafo y devuelven el resultado, sin
   tocar la página. Por eso se pueden probar solas (ver pruebas/).

   Los tres devuelven lo mismo:
     { camino: ["Río Seco", "Viacha", "Colquencha"],
       km, min,          totales del camino encontrado
       explorados,       cuántos nodos tuvo que visitar para decidir
       registro }        los pasos, para el botón "Ver detalles"
   ============================================================== */


/* El grafo como lista de adyacencia: para cada lugar, sus vecinos.
   Cada tramo se agrega en los dos sentidos. */
function construirGrafo(tramos) {
    const grafo = {};
    for (const t of tramos) {
        if (!grafo[t.desde]) grafo[t.desde] = [];
        if (!grafo[t.hasta]) grafo[t.hasta] = [];
        grafo[t.desde].push({ vecino: t.hasta, km: t.km, min: t.min, via: t.via });
        grafo[t.hasta].push({ vecino: t.desde, km: t.km, min: t.min, via: t.via });
    }
    return grafo;
}


/* Sigue hacia atrás el nodo "anterior" de cada uno, desde el destino
   hasta el origen, y suma los km y minutos de cada tramo. */
function reconstruir(grafo, anterior, origen, destino) {
    if (origen !== destino && !(destino in anterior)) return null;
    const camino = [destino];
    while (camino[0] !== origen) camino.unshift(anterior[camino[0]]);
    let km = 0, min = 0;
    const tramos = [];
    for (let i = 0; i < camino.length - 1; i++) {
        const t = grafo[camino[i]].find(v => v.vecino === camino[i + 1]);
        km += t.km;
        min += t.min;
        tramos.push({ desde: camino[i], hasta: camino[i + 1], km: t.km, min: t.min, via: t.via });
    }
    return { camino, tramos, km: Math.round(km * 10) / 10, min };
}


/* DIJKSTRA: la ruta de menor distancia total.
   1. El origen cuesta 0 y todos los demás, infinito.
   2. Se visita el nodo no visitado más barato.
   3. Para cada vecino: si llegar por aquí cuesta menos, se actualiza.
   4. Se repite hasta visitar el destino. */
function dijkstra(grafo, origen, destino) {
    const costo = {}, anterior = {}, visitado = new Set(), registro = [];
    for (const nodo in grafo) costo[nodo] = Infinity;
    costo[origen] = 0;

    while (visitado.size < Object.keys(grafo).length) {
        // El nodo no visitado de menor costo acumulado
        let actual = null;
        for (const nodo in grafo) {
            if (!visitado.has(nodo) && (actual === null || costo[nodo] < costo[actual])) actual = nodo;
        }
        if (actual === null || costo[actual] === Infinity) break;
        visitado.add(actual);

        const cambios = [];
        if (actual !== destino) {
            for (const { vecino, km } of grafo[actual]) {
                const nuevo = costo[actual] + km;
                if (!visitado.has(vecino) && nuevo < costo[vecino]) {
                    costo[vecino] = nuevo;
                    anterior[vecino] = actual;
                    cambios.push(`${vecino}: ${redondear(nuevo)} km`);
                }
            }
        }
        registro.push({ visita: actual, costo: redondear(costo[actual]), cambios });
        if (actual === destino) break;
    }
    const ruta = reconstruir(grafo, anterior, origen, destino);
    return ruta && { ...ruta, explorados: visitado.size, registro };
}


/* BFS (búsqueda en anchura): la ruta con MENOS TRAMOS.
   No mira los km: recorre el grafo por niveles, como ondas en el agua.
   Por eso puede devolver un camino más largo que Dijkstra. */
function bfs(grafo, origen, destino) {
    const anterior = {}, visitado = new Set([origen]), cola = [origen], registro = [];
    while (cola.length) {
        const actual = cola.shift();
        const nuevos = [];
        if (actual !== destino) {
            for (const { vecino } of grafo[actual]) {
                if (!visitado.has(vecino)) {
                    visitado.add(vecino);
                    anterior[vecino] = actual;
                    cola.push(vecino);
                    nuevos.push(vecino);
                }
            }
        }
        registro.push({ visita: actual, costo: null, cambios: nuevos.map(n => `${n} entra a la cola`) });
        if (actual === destino) break;
    }
    const ruta = reconstruir(grafo, anterior, origen, destino);
    return ruta && { ...ruta, explorados: registro.length, registro };
}


/* Distancia en línea recta entre dos coordenadas (fórmula de haversine), en km. */
function lineaRecta(a, b) {
    const rad = g => g * Math.PI / 180;
    const dLat = rad(b.lat - a.lat), dLon = rad(b.lon - a.lon);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
    return 2 * 6371 * Math.asin(Math.sqrt(h));
}


/* A* (A estrella): Dijkstra con una pista.
   Ordena por  costo recorrido + línea recta hasta el destino.
   Como ningún camino es más corto que la línea recta, encuentra la
   MISMA ruta que Dijkstra, pero suele visitar menos nodos. */
function aEstrella(grafo, lugares, origen, destino) {
    const g = {}, anterior = {}, visitado = new Set(), registro = [];
    const h = nodo => lineaRecta(lugares[nodo], lugares[destino]);
    for (const nodo in grafo) g[nodo] = Infinity;
    g[origen] = 0;

    while (true) {
        let actual = null;
        for (const nodo in grafo) {
            if (visitado.has(nodo) || g[nodo] === Infinity) continue;
            if (actual === null || g[nodo] + h(nodo) < g[actual] + h(actual)) actual = nodo;
        }
        if (actual === null) break;
        visitado.add(actual);

        const cambios = [];
        if (actual !== destino) {
            for (const { vecino, km } of grafo[actual]) {
                const nuevo = g[actual] + km;
                if (!visitado.has(vecino) && nuevo < g[vecino]) {
                    g[vecino] = nuevo;
                    anterior[vecino] = actual;
                    cambios.push(`${vecino}: ${redondear(nuevo)} + ${redondear(h(vecino))} km`);
                }
            }
        }
        registro.push({ visita: actual, costo: redondear(g[actual]), cambios });
        if (actual === destino) break;
    }
    const ruta = reconstruir(grafo, anterior, origen, destino);
    return ruta && { ...ruta, explorados: visitado.size, registro };
}


function redondear(x) {
    return Math.round(x * 10) / 10;
}


// Para poder probar estas funciones con Node, fuera del navegador
if (typeof module !== "undefined") {
    module.exports = { construirGrafo, dijkstra, bfs, aEstrella, lineaRecta };
}
