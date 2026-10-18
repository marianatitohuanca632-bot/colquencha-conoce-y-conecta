/* ==============================================================
   SEDE PATACAMAYA: los datos de su página (index.html?sede=patacamaya)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Cada dato de las secciones lleva
   su fuente (sedes-datos/contenido.json); las fotos son de Wikimedia Commons,
   con su autor y su licencia (sedes-datos/fotos.json).
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["patacamaya"] = {

    municipio: "Patacamaya",

    ubicacion: "Provincia Aroma, La Paz",

    lema: "Conoce Patacamaya, en la provincia Aroma del departamento de La Paz, y cómo llegar.",

    sede: "Centro Regional Universitario Patacamaya",

    fondo: null,

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 237, y: 25 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 176, y: 33 } },
        Senkata: { lat: -16.583, lon: -68.1845, tipo: "origen", detalle: "salida a la carretera La Paz - Oruro", mapa: { x: 178, y: 95 } },
        Calamarca: { lat: -16.9058, lon: -68.1155, tipo: "origen", detalle: "centro", mapa: { x: 226, y: 143 } },
        Colquencha: { lat: -16.9326, lon: -68.2494, tipo: "origen", detalle: "plaza principal", mapa: { x: 162, y: 155 } },
        "Sica Sica": { lat: -17.3329, lon: -67.7389, tipo: "origen", detalle: "centro", mapa: { x: 290, y: 235 } },
        Konani: { lat: -17.439, lon: -67.5176, tipo: "origen", detalle: "centro", mapa: { x: 346, y: 261 } },
        Oruro: { lat: -17.9698, lon: -67.1148, tipo: "origen", detalle: "centro", mapa: { x: 421, y: 375 } },
        Patacamaya: { lat: -17.2327, lon: -67.9203, tipo: "destino", detalle: "plaza principal", mapa: { x: 236, y: 204 } }
    },

    destino: "Patacamaya",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "La Paz", hasta: "Senkata", km: 17.1, min: 20, via: "la Ruta Nacional 2" },
        { desde: "El Alto", hasta: "Senkata", km: 11.0, min: 14, via: "la Ruta Nacional 2" },
        { desde: "Senkata", hasta: "Calamarca", km: 40.3, min: 41, via: "la Ruta Nacional 1 y la Ruta Nacional 42" },
        { desde: "Senkata", hasta: "Colquencha", km: 45.8, min: 54, via: "la Ruta Nacional 1" },
        { desde: "Calamarca", hasta: "Colquencha", km: 18.6, min: 29, via: "la Ruta Nacional 1" },
        { desde: "Calamarca", hasta: "Patacamaya", km: 44.3, min: 46, via: "la Ruta Nacional 1" },
        { desde: "Colquencha", hasta: "Patacamaya", km: 59.7, min: 69, via: "la Ruta Nacional 1" },
        { desde: "Sica Sica", hasta: "Konani", km: 27.8, min: 29, via: "la Ruta Nacional 1" },
        { desde: "Sica Sica", hasta: "Patacamaya", km: 23.7, min: 25, via: "la Ruta Nacional 1" },
        { desde: "Konani", hasta: "Oruro", km: 78.0, min: 74, via: "la Ruta Nacional 1 y la Ruta Nacional 12" },
        { desde: "Konani", hasta: "Patacamaya", km: 51.1, min: 50, via: "la Ruta Nacional 1" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por Senkata y Calamarca", "101,7 km aprox."] },
        { desde: "Oruro", icono: "🚗", color: "verde", detalles: ["Por Konani", "129,1 km aprox."] },
        { desde: "Senkata", icono: "🚙", color: "morado", detalles: ["Por Calamarca", "84,6 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Patacamaya es una pequeña ciudad de la provincia Aroma; según el censo de 2012, el municipio tenía 22 858 habitantes (Wikipedia).",
            "Sus principales atractivos son las aguas termales de Viscachani y los chullpares de Joko Pampa (Wikipedia)."
        ],
        cultura: [],
        produccion: [
            "Agricultura: papa, cebada y alfalfa, que se venden en las ferias locales (Wikipedia).",
            "Ganadería: crianza de camélidos, ovinos y vacunos (Wikipedia)."
        ],
        educacion: [],
        umsa: [
            "Centro Regional Universitario Patacamaya de la Universidad Mayor de San Andrés, región Altiplano Sur.",
            "Programa: Lic. Administración de Empresas y Organizaciones Públicas.",
            "Programa: Lic. Ingeniería Agronómica.",
            "Fuente de los programas: folleto «Programas académicos» del IDR-DU."
        ]
    },

    galeria: [
        { archivo: "flag-of-patacamaya-bolivia.jpg", icono: "🚩", leyenda: "Bandera del municipio de Patacamaya", credito: "Ingaviano, CC0", pagina: "https://commons.wikimedia.org/wiki/File:Flag_of_Patacamaya,_Bolivia.svg" }
    ]
};
