/* PRUEBAS DE LOS ALGORITMOS. Se corren con Node, sin navegador:
       node pruebas/probar.js
   Cada prueba compara el resultado del programa con uno calculado de
   otra forma (a mano o probando TODOS los caminos posibles). */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { construirGrafo, dijkstra, bfs, aEstrella, lineaRecta } = require("../algoritmos.js");

const codigo = fs.readFileSync(path.join(__dirname, "..", "datos.js"), "utf8");
const { LUGARES, TRAMOS, DESTINO } = vm.runInNewContext(codigo + ";({ LUGARES, TRAMOS, DESTINO })");

let fallas = 0;
function verificar(nombre, ok, detalle = "") {
    console.log(`${ok ? "✓" : "✗"} ${nombre}${detalle ? "  (" + detalle + ")" : ""}`);
    if (!ok) fallas++;
}

// Todos los caminos simples (sin repetir nodos) entre dos lugares: la fuerza bruta
function todosLosCaminos(grafo, origen, destino, camino = [origen], km = 0, salida = []) {
    if (origen === destino) { salida.push({ camino: [...camino], km }); return salida; }
    for (const { vecino, km: k } of grafo[origen]) {
        if (!camino.includes(vecino)) {
            camino.push(vecino);
            todosLosCaminos(grafo, vecino, destino, camino, km + k, salida);
            camino.pop();
        }
    }
    return salida;
}
const r1 = x => Math.round(x * 10) / 10;

console.log("\n1. El grafo de ejemplo del documento (Figura 1)");
const ejemplo = construirGrafo([
    { desde: "P", hasta: "A", km: 2 }, { desde: "P", hasta: "B", km: 4 }, { desde: "A", hasta: "B", km: 1 },
    { desde: "A", hasta: "Colquencha", km: 10 }, { desde: "A", hasta: "C", km: 8 },
    { desde: "B", hasta: "C", km: 5 }, { desde: "C", hasta: "Colquencha", km: 3 }]);
const e = dijkstra(ejemplo, "P", "Colquencha");
verificar("Dijkstra encuentra P → A → B → C → Colquencha con costo 11",
          e.camino.join(" → ") === "P → A → B → C → Colquencha" && e.km === 11, `${e.camino.join(" → ")}, ${e.km}`);

console.log("\n2. Los datos");
const grafo = construirGrafo(TRAMOS);
verificar("cada tramo une dos lugares que existen", TRAMOS.every(t => t.desde in LUGARES && t.hasta in LUGARES));
const malos = TRAMOS.filter(t => lineaRecta(LUGARES[t.desde], LUGARES[t.hasta]) > t.km);
verificar("ningún tramo es más corto que la línea recta entre sus puntos", malos.length === 0,
          malos.map(t => `${t.desde}-${t.hasta}`).join(", "));
const origenes = Object.keys(LUGARES).filter(n => LUGARES[n].tipo === "origen");
verificar("desde cada punto de partida se llega a Colquencha",
          origenes.every(o => dijkstra(grafo, o, DESTINO)), `${origenes.length} puntos de partida`);

console.log("\n3. Cada punto de partida, contra la fuerza bruta");
const tabla = [];
for (const o of origenes) {
    const todos = todosLosCaminos(grafo, o, DESTINO);
    const mejorKm = Math.min(...todos.map(c => c.km));
    const menosTramos = Math.min(...todos.map(c => c.camino.length - 1));
    const d = dijkstra(grafo, o, DESTINO), a = aEstrella(grafo, LUGARES, o, DESTINO), b = bfs(grafo, o, DESTINO);
    verificar(`${o}: Dijkstra da el mínimo de ${todos.length} caminos posibles`, d.km === r1(mejorKm), `${d.km} km`);
    verificar(`${o}: A* da la misma distancia que Dijkstra`, a.km === d.km, `${a.km} km`);
    verificar(`${o}: BFS da el camino con menos tramos`, b.camino.length - 1 === menosTramos, `${menosTramos} tramos`);
    tabla.push({ origen: o, dijkstra: `${d.camino.join(" → ")}`, km: d.km, min: d.min,
                 exploraD: d.explorados, exploraA: a.explorados, bfs: `${b.camino.join(" → ")}`, kmBfs: b.km });
}

console.log("\n4. Resumen por punto de partida");
console.table(tabla);
fs.writeFileSync(path.join(__dirname, "resultados.json"), JSON.stringify(tabla, null, 2));

console.log(fallas ? `\n✗ ${fallas} pruebas fallaron` : "\n✓ todas las pruebas pasaron");
process.exit(fallas ? 1 : 0);
