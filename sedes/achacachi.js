/* ==============================================================
   SEDE ACHACACHI: los datos de su página (index.html?sede=achacachi)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Lo que dice [COMPLETAR] lo
   escribe quien conozca el municipio, con información verificada.
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["achacachi"] = {

    municipio: "Achacachi",

    ubicacion: "Provincia Omasuyos, La Paz",

    lema: "Conoce Achacachi, en la provincia Omasuyos del departamento de La Paz, y cómo llegar.",

    sede: "Centro Regional Universitario Achacachi",

    fondo: "img/achacachi/paisaje.jpg",

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
            "Achacachi es una ciudad intermedia y municipio de Bolivia, capital de la provincia de Omasuyos en el departamento de La Paz. Achacachi es también conocido como \"Chacha marka\". (Wikipedia, «Achacachi»)",
            "[COMPLETAR] Lugares para visitar: cada uno con una línea, cómo se llega y una foto."
        ],
        cultura: [
            "[COMPLETAR] Fiestas y fechas importantes: cuáles, cuándo y cómo se celebran.",
            "[COMPLETAR] Danzas, costumbres y comidas típicas."
        ],
        produccion: [
            "[COMPLETAR] Lo que produce el municipio: agricultura, ganadería, industria o recursos."
        ],
        educacion: [
            "[COMPLETAR] Unidades educativas del municipio y niveles que ofrecen.",
            "[COMPLETAR] Logros de sus estudiantes (olimpiadas, concursos), con el año y la fuente."
        ],
        umsa: [
            "Centro Regional Universitario Achacachi de la Universidad Mayor de San Andrés, región Altiplano Norte Lacustre.",
            "Programa: Lic. Administración de Empresas y Organizaciones Públicas.",
            "Fuente de los programas: folleto «Programas académicos» del IDR-DU."
        ]
    },

    galeria: [
        { archivo: "foto-plaza.jpg", icono: "🏘️", leyenda: "La plaza principal" },
        { archivo: "foto-lugar.jpg", icono: "⛰️", leyenda: "Un lugar para visitar" },
        { archivo: "foto-fiesta.jpg", icono: "🎭", leyenda: "Una fiesta del municipio" },
        { archivo: "foto-sede.jpg", icono: "🏛️", leyenda: "La sede de la UMSA" }
    ]
};
