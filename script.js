/* ==============================================================
   INTERACCIÓN DE LA PÁGINA
   Lee los datos (datos.js), llama a los algoritmos (algoritmos.js)
   y muestra el resultado. No necesita internet.
   ============================================================== */

const GRAFO = construirGrafo(TRAMOS);


/* ---------- 1. Lista de puntos de partida, desde los datos ---------- */
const selectOrigen = document.querySelector("#origen");
for (const nombre in LUGARES) {
    if (LUGARES[nombre].tipo !== "origen") continue;
    const opcion = document.createElement("option");
    opcion.value = nombre;
    opcion.textContent = nombre;
    selectOrigen.append(opcion);
}


/* ---------- 2. Calcular la ruta ---------- */
let ultimoResultado = null;

function calcularRuta() {
    const origen = selectOrigen.value;
    const algoritmo = document.querySelector("input[name='algoritmo']:checked").value;

    if (!origen) {
        document.querySelector("#rutaPasos").innerHTML = "<li>Primero selecciona tu punto de partida</li>";
        selectOrigen.focus();
        return;
    }

    let resultado;
    if (algoritmo === "dijkstra") resultado = dijkstra(GRAFO, origen, DESTINO);
    if (algoritmo === "bfs")      resultado = bfs(GRAFO, origen, DESTINO);
    if (algoritmo === "aestrella") resultado = aEstrella(GRAFO, LUGARES, origen, DESTINO);
    ultimoResultado = { ...resultado, algoritmo };

    mostrarResultado(origen, ultimoResultado);
    dibujarMapa(resultado.camino);
    document.querySelector("#detalleRuta").hidden = true;
}

const NOMBRES = { dijkstra: "Dijkstra", bfs: "BFS", aestrella: "A*" };

function mostrarResultado(origen, r) {
    document.querySelector("#textoOrigen").innerHTML = `📍 <b>Origen:</b> ${origen} (${LUGARES[origen].detalle})`;
    document.querySelector("#distancia").textContent = `${r.km} km`;
    document.querySelector("#tiempo").textContent = formatearTiempo(r.min);

    const pasos = document.querySelector("#rutaPasos");
    pasos.innerHTML = "";
    for (const t of r.tramos) {
        const li = document.createElement("li");
        li.innerHTML = `<span><b>${t.desde} → ${t.hasta}</b><br>${t.km} km, por ${t.via}</span>`;
        pasos.append(li);
    }

    const nota = r.algoritmo === "bfs"
        ? `${NOMBRES.bfs} buscó el camino con menos tramos (${r.tramos.length}), sin mirar los km.`
        : `${NOMBRES[r.algoritmo]} revisó ${r.explorados} lugares para asegurar la ruta más corta.`;
    document.querySelector("#notaAlgoritmo").textContent = nota;
}

function formatearTiempo(min) {
    const h = Math.floor(min / 60), m = min % 60;
    return h ? `${h} h ${m} min` : `${m} min`;
}


/* ---------- 3. "Ver detalles": los pasos del algoritmo ---------- */
document.querySelector(".detalles").addEventListener("click", () => {
    const caja = document.querySelector("#detalleRuta");
    if (!ultimoResultado) {
        caja.innerHTML = "<p>Calcula una ruta para ver cómo la encontró el algoritmo.</p>";
    } else {
        const filas = ultimoResultado.registro.map((p, i) => `
            <tr><td>${i + 1}</td><td>${p.visita}</td>
                <td>${p.costo === null ? "-" : p.costo + " km"}</td>
                <td>${p.cambios.join("<br>") || "-"}</td></tr>`).join("");
        caja.innerHTML = `
            <p><b>${NOMBRES[ultimoResultado.algoritmo]}, paso a paso</b></p>
            <table>
                <tr><th>#</th><th>Visita</th><th>Costo</th><th>Actualiza</th></tr>
                ${filas}
            </table>
            <p class="fuente">${FUENTE_RUTAS}</p>`;
    }
    caja.hidden = !caja.hidden;
});


/* ---------- 4. Mapa simplificado, dibujado sin internet ----------
   Cada lugar se dibuja en su posición del esquema (datos.js, "mapa").
   Los tramos de la ruta encontrada se pintan de azul. */
const SVG = "http://www.w3.org/2000/svg";

function crear(etiqueta, atributos, texto) {
    const el = document.createElementNS(SVG, etiqueta);
    for (const a in atributos) el.setAttribute(a, atributos[a]);
    if (texto) el.textContent = texto;
    return el;
}

function dibujarMapa(camino = []) {
    const svg = document.querySelector("#mapaRuta");
    svg.innerHTML = "";
    const pos = {};
    for (const nombre in LUGARES) pos[nombre] = LUGARES[nombre].mapa;
    const enRuta = (a, b) => camino.some((n, i) => (n === a && camino[i + 1] === b) || (n === b && camino[i + 1] === a));

    for (const t of TRAMOS) {
        const a = pos[t.desde], b = pos[t.hasta];
        const activo = enRuta(t.desde, t.hasta);
        const lejos = t.km > 100;
        svg.append(crear("line", {
            x1: a.x, y1: a.y, x2: b.x, y2: b.y,
            class: "tramo" + (activo ? " activo" : "") + (lejos ? " lejos" : "")
        }));
        svg.append(crear("text", { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 - 4, class: "km" }, `${t.km}`));
    }
    for (const nombre in LUGARES) {
        const p = pos[nombre], tipo = LUGARES[nombre].tipo;
        const clase = "lugar " + tipo + (camino.includes(nombre) ? " activo" : "");
        svg.append(crear("circle", { cx: p.x, cy: p.y, r: tipo === "destino" ? 11 : 7, class: clase }));
        const derecha = p.x < 480;
        svg.append(crear("text", {
            x: p.x + (derecha ? 12 : -12), y: p.y + 4,
            "text-anchor": derecha ? "start" : "end", class: "nombre " + tipo
        }, nombre));
    }
}
dibujarMapa();


/* ---------- 5. Botones de las tarjetas: la información de cada sección ---------- */
for (const tarjeta of document.querySelectorAll(".categoria-card")) {
    const boton = tarjeta.querySelector("button");
    const caja = document.createElement("div");
    caja.className = "detalle-seccion";
    caja.hidden = true;
    const datos = SECCIONES[tarjeta.id] || [];
    caja.innerHTML = datos.length
        ? "<ul>" + datos.map(d => d.startsWith("[COMPLETAR")
            ? `<li class="completar">${d}</li>`
            : `<li>${d}</li>`).join("") + "</ul>"
        : "<p>Información en preparación.</p>";
    boton.after(caja);
    boton.addEventListener("click", () => { caja.hidden = !caja.hidden; });
}


/* ---------- 6. Botones del inicio ---------- */
function irARutas() {
    document.querySelector("#rutas").scrollIntoView();
}

function mostrarMensaje() {
    document.querySelector("#turismo").scrollIntoView();
}


/* ---------- 7. Menú lateral: marca la sección que se está viendo ---------- */
const enlaces = document.querySelectorAll(".sidebar nav a");
const observador = new IntersectionObserver(entradas => {
    for (const e of entradas) {
        if (!e.isIntersecting) continue;
        enlaces.forEach(a => a.classList.toggle("menu-activo", a.getAttribute("href") === "#" + e.target.id));
    }
}, { rootMargin: "-40% 0px -55% 0px" });
enlaces.forEach(a => {
    const destino = document.querySelector(a.getAttribute("href"));
    if (destino) observador.observe(destino);
});


/* ---------- 8. Las sedes de la UMSA (versión 2) ----------
   La barra de arriba y la sección "Sedes" salen de SEDES (datos.js).
   Solo la sede activa tiene rutas; las demás se agregan en la
   siguiente etapa del proyecto. */
const barra = document.querySelector("#sedesBarra");
const aviso = document.querySelector("#sedesAviso");
for (const sede of SEDES) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = sede.nombre;
    if (sede.activa) boton.className = "activa";
    boton.addEventListener("click", () => {
        if (sede.activa) {
            aviso.hidden = true;
            irARutas();
        } else {
            aviso.textContent = `${sede.nombre} (${sede.tipo === "CRU" ? "Centro Regional Universitario" : "Sede Universitaria Local"}, región ${sede.region}): `
                + "próximamente. Por ahora la plataforma tiene las rutas de Colquencha, nuestra sede.";
            aviso.hidden = false;
        }
    });
    barra.append(boton);
}

const regiones = {};
for (const sede of SEDES) (regiones[sede.region] ||= []).push(sede);
const cajaRegiones = document.querySelector("#sedesRegiones");
for (const region in regiones) {
    const bloque = document.createElement("section");
    const items = regiones[region].map(s => `
        <li class="${s.activa ? "activa" : ""}">${s.activa ? "✓" : "○"} ${s.nombre}
            <small>${s.tipo}${s.activa ? ", con rutas" : ", próximamente"}</small></li>`).join("");
    bloque.innerHTML = `<h3>${region}</h3><ul>${items}</ul>`;
    cajaRegiones.append(bloque);
}


/* ---------- 9. Imágenes que falten: se quitan para que se vea el fondo de color ---------- */
for (const img of document.querySelectorAll("img")) {
    if (img.complete && img.naturalWidth === 0) img.remove();
    else img.addEventListener("error", () => img.remove());
}
