/* ==============================================================
   SEDE QUIME: los datos de su página (index.html?sede=quime)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Cada dato de las secciones lleva
   su fuente (sedes-datos/contenido.json); las fotos son de Wikimedia Commons,
   con su autor y su licencia (sedes-datos/fotos.json).
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["quime"] = {

    municipio: "Quime",

    ubicacion: "Provincia Inquisivi, La Paz",

    lema: "Conoce Quime, en la provincia Inquisivi del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Quime, del CRU Patacamaya",

    fondo: "img/quime/cumbre-bolivia.jpg",

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
            "Está a 233 km de La Paz y a 3001 m de altura; el municipio tiene 10 887 habitantes según el censo de 2024 (Wikipedia).",
            "En su territorio está la cordillera Quimsa Cruz, con lagunas de deshielo como la laguna Huallatani (Wikipedia).",
            "En la plaza principal hay un monumento al cóndor (Wikimedia Commons)."
        ],
        cultura: [
            "En Todos Santos se celebra la wawasutia (Wikimedia Commons)."
        ],
        produccion: [],
        educacion: [],
        umsa: [
            "Sede Universitaria Local Quime, del CRU Patacamaya de la Universidad Mayor de San Andrés, región Altiplano Sur.",
            "Programa: Técnico Superior en Geología de Minas.",
            "Programa: Lic. Ingeniería Industrial.",
            "Fuente de los programas: folleto «Programas académicos» del IDR-DU."
        ]
    },

    galeria: [
        { archivo: "condor-plaza-de-quime.jpg", icono: "🏘️", leyenda: "El cóndor de la plaza de Quime", credito: "Agenda acuática, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Condor_Plaza_de_Quime.jpg" },
        { archivo: "view-of-quime-mountains-from-hummingbird-ranch.jpg", icono: "⛰️", leyenda: "La cordillera Quimsa Cruz", credito: "User: (WT-shared) Hummingbird at wts wikivoyage, Public domain", pagina: "https://commons.wikimedia.org/wiki/File:View_of_Quime_Mountains_from_Hummingbird_Ranch.jpg" },
        { archivo: "todos-santos-quime.jpg", icono: "🎭", leyenda: "La wawasutia en Todos Santos", credito: "Paosacero, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Todos_Santos_Quime.jpg" },
        { archivo: "vquime.jpg", icono: "🏘️", leyenda: "Vista de Quime", credito: "(WT-en) Hummingbird at English Wikivoyage, Public domain", pagina: "https://commons.wikimedia.org/wiki/File:VQuime.jpg" }
    ]
};
