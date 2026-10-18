/* ==============================================================
   SEDE QUIME: los datos de su página (index.html?sede=quime)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Lo que dice [COMPLETAR] lo
   escribe quien conozca el municipio, con información verificada.
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["quime"] = {

    municipio: "Quime",

    ubicacion: "Provincia Inquisivi, La Paz",

    lema: "Conoce Quime, en la provincia Inquisivi del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Quime, del CRU Patacamaya",

    fondo: "img/quime/paisaje.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 221, y: 37 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 161, y: 54 } },
        Patacamaya: { lat: -17.2327, lon: -67.9203, tipo: "origen", detalle: "centro", mapa: { x: 240, y: 210 } },
        Konani: { lat: -17.439, lon: -67.5176, tipo: "origen", detalle: "centro", mapa: { x: 326, y: 256 } },
        Caracollo: { lat: -17.6491, lon: -67.2085, tipo: "origen", detalle: "centro", mapa: { x: 392, y: 303 } },
        Oruro: { lat: -17.9698, lon: -67.1148, tipo: "origen", detalle: "centro", mapa: { x: 412, y: 375 } },
        Inquisivi: { lat: -16.9072, lon: -67.1378, tipo: "origen", detalle: "centro", mapa: { x: 421, y: 124 } },
        Quime: { lat: -16.98, lon: -67.2157, tipo: "destino", detalle: "plaza principal", mapa: { x: 377, y: 167 } }
    },

    destino: "Quime",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "El Alto", hasta: "Patacamaya", km: 91.3, min: 92, via: "la Ruta Nacional 1 y la Ruta Nacional 2" },
        { desde: "Patacamaya", hasta: "Konani", km: 49.9, min: 47, via: "la Ruta Nacional 1" },
        { desde: "Konani", hasta: "Caracollo", km: 41.4, min: 41, via: "la Ruta Nacional 1" },
        { desde: "Konani", hasta: "Quime", km: 85.8, min: 94, via: "la Ruta Nacional 62 y el camino Konani-Caxata" },
        { desde: "Caracollo", hasta: "Oruro", km: 37.8, min: 37, via: "la Ruta Nacional 1 y la Ruta Nacional 12" },
        { desde: "Inquisivi", hasta: "Quime", km: 20.6, min: 20, via: "la Ruta Nacional 62 y el camino Inquivisi-Quime" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por El Alto, Patacamaya y Konani", "234,5 km aprox."] },
        { desde: "Patacamaya", icono: "🚗", color: "verde", detalles: ["Por Konani", "135,7 km aprox."] },
        { desde: "Oruro", icono: "🚙", color: "morado", detalles: ["Por Caracollo y Konani", "165,0 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Quime es una localidad y municipio de Bolivia, ubicado en los valles de la provincia de Inquisivi del departamento de La Paz. (Wikipedia, «Quime»)",
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
            "Sede Universitaria Local Quime, del CRU Patacamaya de la Universidad Mayor de San Andrés, región Altiplano Sur.",
            "Programa: Técnico Superior en Geología de Minas.",
            "Programa: Lic. Ingeniería Industrial.",
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
