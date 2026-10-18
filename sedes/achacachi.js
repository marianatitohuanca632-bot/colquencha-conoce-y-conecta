/* ==============================================================
   SEDE ACHACACHI: los datos de su página (index.html?sede=achacachi)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Cada dato de las secciones lleva
   su fuente (sedes-datos/contenido.json); las fotos son de Wikimedia Commons,
   con su autor y su licencia (sedes-datos/fotos.json).
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["achacachi"] = {

    municipio: "Achacachi",

    ubicacion: "Provincia Omasuyos, La Paz",

    lema: "Conoce Achacachi, en la provincia Omasuyos del departamento de La Paz, y cómo llegar.",

    sede: "Centro Regional Universitario Achacachi",

    fondo: "img/achacachi/plaza-de-achacachi-bolivia.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 512, y: 365 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 452, y: 382 } },
        Batallas: { lat: -16.2993, lon: -68.5317, tipo: "origen", detalle: "centro", mapa: { x: 341, y: 301 } },
        Huarina: { lat: -16.1907, lon: -68.601, tipo: "origen", detalle: "centro", mapa: { x: 309, y: 248 } },
        Ancoraimes: { lat: -15.8975, lon: -68.9056, tipo: "origen", detalle: "centro", mapa: { x: 197, y: 138 } },
        Escoma: { lat: -15.6614, lon: -69.129, tipo: "origen", detalle: "centro", mapa: { x: 113, y: 45 } },
        Achacachi: { lat: -16.0439, lon: -68.685, tipo: "destino", detalle: "plaza principal", mapa: { x: 279, y: 193 } }
    },

    destino: "Achacachi",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "El Alto", hasta: "Batallas", km: 49.4, min: 46, via: "la Ruta Nacional 2" },
        { desde: "Batallas", hasta: "Huarina", km: 15.0, min: 16, via: "la Ruta Nacional 2" },
        { desde: "Huarina", hasta: "Achacachi", km: 19.8, min: 20, via: "la Ruta Nacional 16" },
        { desde: "Ancoraimes", hasta: "Escoma", km: 39.1, min: 41, via: "la Ruta Nacional 16" },
        { desde: "Ancoraimes", hasta: "Achacachi", km: 35.9, min: 31, via: "la Ruta Nacional 16" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por El Alto, Batallas y Huarina", "91,7 km aprox."] },
        { desde: "Escoma", icono: "🚗", color: "verde", detalles: ["Por Ancoraimes", "75,0 km aprox."] },
        { desde: "Ancoraimes", icono: "🚙", color: "morado", detalles: ["Camino directo", "35,9 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Capital de la provincia Omasuyos, a 97 km de La Paz y a 3840 m de altura; fue capital del señorío aimara Umasuyus (Wikipedia).",
            "Su nombre viene del aimara jach'a k'achi, «peñasco grande y puntiagudo» (Wikipedia)."
        ],
        cultura: [
            "Sus tres fiestas principales son San Pedro y San Pablo, Corpus Christi y la Exaltación (Wikipedia).",
            "En la fiesta de la Exaltación del Señor (18 de noviembre) se bailan Incas, Diablada, Kullawada, Mok'ok'aras, Potolos, Llamerada y Morenada (Wikipedia)."
        ],
        produccion: [
            "Los fines de semana hay feria en una de sus calles (Wikimedia Commons)."
        ],
        educacion: [
            "La localidad tiene 7 centros educativos fiscales y 1 particular, entre ellos el Colegio Nacional Mixto Omasuyos y el Colegio Mariscal Santa Cruz (Wikipedia)."
        ],
        umsa: [
            "Centro Regional Universitario Achacachi de la Universidad Mayor de San Andrés, región Altiplano Norte Lacustre.",
            "Programa: Lic. Administración de Empresas y Organizaciones Públicas.",
            "Fuente de los programas: folleto «Programas académicos» del IDR-DU."
        ]
    },

    galeria: [
        { archivo: "plaza-de-achacachi-bolivia.jpg", icono: "🏘️", leyenda: "La plaza principal", credito: "Carlillasa, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Plaza_de_Achacachi,_Bolivia.jpg" },
        { archivo: "colegio-omasuyos-en-achacachi-la-paz-bolivia.jpg", icono: "🏫", leyenda: "El colegio Omasuyos", credito: "Julitatwa, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Colegio_Omasuyos,_en_Achacachi,_La_Paz_Bolivia.jpg" },
        { archivo: "mercado-de-achacachi.jpg", icono: "🧺", leyenda: "La feria de fin de semana", credito: "Julitatwa, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Mercado_de_Achacachi.jpg" },
        { archivo: "todos-santos-en-achacachi-02.jpg", icono: "🎭", leyenda: "Todos Santos", credito: "LAGATANDINA, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Todos_Santos_en_Achacachi_02.jpg" }
    ]
};
