/* ==============================================================
   EL INICIO (index.html): todas las sedes, agrupadas por región,
   con un buscador. Lee la lista de sedes.js; cada sede enlaza a su
   página: sede.html?sede=<id>
   ============================================================== */


/* ---------- 1. Una caja por región, con un enlace por sede ---------- */
const cajaRegiones = document.querySelector("#sedesRegiones");
const regiones = {};
for (const sede of SEDES) (regiones[sede.region] ||= []).push(sede);

for (const region in regiones) {
    const bloque = document.createElement("section");
    const items = regiones[region].map(s => `
        <li data-buscar="${(s.nombre + " " + region).toLowerCase()}">
            <a href="sede.html?sede=${s.id}" class="${s.activa ? "activa" : ""}">
                ${s.activa ? "✓" : "○"} ${s.nombre}
                <small>${s.tipo}${s.activa ? ", con rutas" : ", próximamente"}</small>
            </a>
        </li>`).join("");
    bloque.innerHTML = `<h3>${region}</h3><ul>${items}</ul>`;
    cajaRegiones.append(bloque);
}


/* ---------- 2. El buscador: deja visibles las sedes que coinciden ----------
   Busca sin distinguir mayúsculas ni tildes: "san buena" encuentra San Buenaventura,
   "norte" encuentra todas las de las regiones del norte. */
const sinTildes = texto => texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

document.querySelector("#buscarSede").addEventListener("input", evento => {
    const buscado = sinTildes(evento.target.value.trim());
    let visibles = 0;
    for (const bloque of cajaRegiones.children) {
        let enRegion = 0;
        for (const li of bloque.querySelectorAll("li")) {
            const coincide = sinTildes(li.dataset.buscar).includes(buscado);
            li.hidden = !coincide;
            if (coincide) enRegion++;
        }
        bloque.hidden = enRegion === 0;
        visibles += enRegion;
    }
    document.querySelector("#sinResultados").hidden = visibles > 0;
});


/* ---------- 3. Menú lateral: marca la sección que se está viendo ---------- */
const enlaces = document.querySelectorAll(".sidebar nav a");
const observador = new IntersectionObserver(entradas => {
    for (const e of entradas) {
        if (!e.isIntersecting) continue;
        // Arriba de todo, siempre "Inicio" (el inicio es más bajo que la pantalla)
        const id = window.scrollY < 80 ? "inicio" : e.target.id;
        enlaces.forEach(a => a.classList.toggle("menu-activo", a.getAttribute("href") === "#" + id));
    }
}, { rootMargin: "-40% 0px -55% 0px" });
enlaces.forEach(a => observador.observe(document.querySelector(a.getAttribute("href"))));
