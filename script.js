/* ==============================================================
   LA PÁGINA (index.html)
   Sin nada más en la dirección, es la página de Colquencha.
   Desde la pestaña "Otras sedes", la misma página muestra otra sede:
   index.html?sede=quime
   Lee la lista de sedes (sedes.js) y los datos de la sede elegida
   (sedes/<id>.js), llama a los algoritmos (algoritmos.js) y muestra
   el resultado. No necesita internet.
   ============================================================== */


/* ---------- 1. ¿Qué sede? Colquencha, salvo que la dirección diga otra ---------- */
const ID = new URLSearchParams(location.search).get("sede") || "colquencha";
const SEDE = SEDES.find(s => s.id === ID) || SEDES.find(s => s.id === "colquencha");
const DATOS = DATOS_SEDE[SEDE.id];
const TIPO = { CRU: "Centro Regional Universitario", SUL: "Sede Universitaria Local" };
const ES_COLQUENCHA = SEDE.id === "colquencha";

for (const el of document.querySelectorAll(".nombre-sede")) el.textContent = SEDE.nombre;

// En otra sede: título propio, la barra de sedes, "Volver a otras sedes" marcado,
// y "Nosotros" lleva a la página de Colquencha
if (!ES_COLQUENCHA) {
    document.title = `${SEDE.nombre} - Otras sedes - Colquencha: Conoce y Conecta`;
    document.querySelector("#sedesBarra").hidden = false;
    document.querySelector("#volverSedes").hidden = false;
    document.querySelector(".pestana-sedes").classList.add("menu-activo");
    document.querySelector("#enlaceNosotros").href = "index.html#nosotros";
    document.querySelector("#nosotros").remove();
}


/* ---------- 2. La barra de sedes: un enlace a la página de cada una ---------- */
const barra = document.querySelector("#sedesBarra");
for (const sede of SEDES) {
    const enlace = document.createElement("a");
    enlace.href = sede.id === "colquencha" ? "index.html" : `index.html?sede=${sede.id}`;
    enlace.textContent = sede.nombre;
    if (sede.activa) enlace.classList.add("activa");
    if (sede.id === SEDE.id) enlace.setAttribute("aria-current", "page");
    barra.append(enlace);
}
const actual = barra.querySelector("[aria-current]");
if (!barra.hidden) barra.scrollLeft = actual.offsetLeft - (barra.clientWidth - actual.offsetWidth) / 2;


/* ---------- 3. Si la sede todavía no tiene datos: solo el aviso "próximamente" ---------- */
if (DATOS) {
    mostrarSede();
} else {
    document.querySelector("#contenidoSede").remove();
    document.querySelector("#proximamente").hidden = false;
    document.querySelector("#proximamenteTexto").textContent =
        `${TIPO[SEDE.tipo]}, región ${SEDE.region}. Próximamente: sus rutas de acceso y la información del municipio.`;
    if (SEDE.programas.length) {
        document.querySelector("#proximamenteProgramas").innerHTML =
            "<h3>Programas que ofrece</h3><ul>" + SEDE.programas.map(p => `<li>${p}</li>`).join("") + "</ul>";
    }
    document.querySelector("#ubicacion").textContent = "La Paz";
    for (const a of document.querySelectorAll(".sidebar nav a[href^='#']")) a.remove();
}


function mostrarSede() {

    /* ---------- 4. Los textos y las imágenes de la sede ---------- */
    document.querySelector("#ubicacion").textContent = DATOS.ubicacion;
    document.querySelector("#lema").textContent = DATOS.lema;
    // En Colquencha no hace falta: es la página del proyecto
    if (ES_COLQUENCHA) document.querySelector("#sedeUmsa").remove();
    else document.querySelector("#sedeUmsa").textContent = `${DATOS.sede}.`;
    // El fondo del inicio: la foto de la sede sobre el degradado del diseño
    document.querySelector(".hero").style.backgroundImage =
        `linear-gradient(90deg, #09273ce8, #103a4d99, #102b4230), url("${DATOS.fondo}")`;


    /* ---------- 5. Lista de puntos de partida, desde los datos ---------- */
    const GRAFO = construirGrafo(DATOS.tramos);
    const LUGARES = DATOS.lugares;
    const selectOrigen = document.querySelector("#origen");
    for (const nombre in LUGARES) {
        if (LUGARES[nombre].tipo !== "origen") continue;
        const opcion = document.createElement("option");
        opcion.value = nombre;
        opcion.textContent = nombre;
        selectOrigen.append(opcion);
    }


    /* ---------- 6. Calcular la ruta ---------- */
    let ultimoResultado = null;
    const NOMBRES = { dijkstra: "Dijkstra", bfs: "BFS", aestrella: "A*" };

    document.querySelector(".calcular").addEventListener("click", () => {
        const origen = selectOrigen.value;
        const algoritmo = document.querySelector("input[name='algoritmo']:checked").value;

        if (!origen) {
            document.querySelector("#rutaPasos").innerHTML = "<li>Primero selecciona tu punto de partida</li>";
            selectOrigen.focus();
            return;
        }

        let resultado;
        if (algoritmo === "dijkstra")  resultado = dijkstra(GRAFO, origen, DATOS.destino);
        if (algoritmo === "bfs")       resultado = bfs(GRAFO, origen, DATOS.destino);
        if (algoritmo === "aestrella") resultado = aEstrella(GRAFO, LUGARES, origen, DATOS.destino);
        ultimoResultado = { ...resultado, algoritmo };

        mostrarResultado(origen, ultimoResultado);
        dibujarMapa(resultado.camino);
        document.querySelector("#detalleRuta").hidden = true;
    });

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


    /* ---------- 7. "Ver detalles": los pasos del algoritmo ---------- */
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
                <p class="fuente">${DATOS.fuenteRutas}</p>`;
        }
        caja.hidden = !caja.hidden;
    });


    /* ---------- 8. Mapa simplificado, dibujado sin internet ----------
       Cada lugar se dibuja en su posición del esquema ("mapa" en los datos).
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

        for (const t of DATOS.tramos) {
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


    /* ---------- 9. Las tarjetas "Rutas de acceso" ---------- */
    const accesos = document.querySelector("#accesos");
    for (const a of DATOS.accesos) {
        const tarjeta = document.createElement("div");
        tarjeta.className = `acceso-card ${a.color}`;
        tarjeta.innerHTML = `<div class="acceso-icon">${a.icono}</div>
            <h3>Desde ${a.desde}</h3>
            ${a.detalles.map(d => `<p>• ${d}</p>`).join("")}
            <span>→</span>`;
        accesos.append(tarjeta);
    }


    /* ---------- 10. Botones de las tarjetas: la información de cada sección ---------- */
    for (const tarjeta of document.querySelectorAll(".categoria-card")) {
        const boton = tarjeta.querySelector("button");
        const caja = document.createElement("div");
        caja.className = "detalle-seccion";
        caja.hidden = true;
        const datos = DATOS.secciones[tarjeta.id] || [];
        caja.innerHTML = datos.length
            ? "<ul>" + datos.map(d => d.startsWith("[COMPLETAR")
                ? `<li class="completar">${d}</li>`
                : `<li>${d}</li>`).join("") + "</ul>"
            : "<p>Información en preparación.</p>";
        boton.after(caja);
        boton.addEventListener("click", () => { caja.hidden = !caja.hidden; });
    }


    /* ---------- 11. Galería: foto si está, ícono con su leyenda si falta ---------- */
    const galeria = document.querySelector("#galeria");
    for (const f of DATOS.galeria) {
        const figura = document.createElement("figure");
        figura.innerHTML = `<img src="img/${SEDE.id}/${f.archivo}" alt="${f.leyenda}"><span>${f.icono}</span>
            <figcaption>${f.leyenda} <i class="completar">[COMPLETAR img/${SEDE.id}/${f.archivo}]</i></figcaption>`;
        // Cuando la foto existe, la marca [COMPLETAR] sobra
        figura.querySelector("img").addEventListener("load", () => figura.querySelector("i").remove());
        galeria.append(figura);
    }


    /* ---------- 12. Botones del inicio ---------- */
    document.querySelector(".hero button").addEventListener("click", () => {
        document.querySelector("#rutas").scrollIntoView();
    });
    document.querySelector(".visitar button").addEventListener("click", () => {
        document.querySelector("#turismo").scrollIntoView();
    });


    /* ---------- 13. Menú lateral: marca la sección que se está viendo ---------- */
    const enlaces = document.querySelectorAll(".sidebar nav a[href^='#']");
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
}


/* ---------- 14. Imágenes que falten: se quitan para que se vea el fondo de color ---------- */
for (const img of document.querySelectorAll("img")) {
    if (img.complete && img.naturalWidth === 0) img.remove();
    else img.addEventListener("error", () => img.remove());
}
