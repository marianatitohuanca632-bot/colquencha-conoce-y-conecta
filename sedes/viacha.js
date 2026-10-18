/* ==============================================================
   SEDE VIACHA: los datos de su página (index.html?sede=viacha)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Cada dato de las secciones lleva
   su fuente (sedes-datos/contenido.json); las fotos son de Wikimedia Commons,
   con su autor y su licencia (sedes-datos/fotos.json).
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["viacha"] = {

    municipio: "Viacha",

    ubicacion: "Provincia Ingavi, La Paz",

    lema: "Conoce Viacha, en la provincia Ingavi del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Viacha, del CRU Achacachi",

    fondo: "img/viacha/estatua-ecuestre-de-la-plaza-de-viacha-la-paz-boli.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 527, y: 42 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 470, y: 66 } },
        "Río Seco": { lat: -16.4899, lon: -68.2097, tipo: "origen", detalle: "estación del teleférico, Av. Juan Pablo II", mapa: { x: 419, y: 30 } },
        Senkata: { lat: -16.583, lon: -68.1845, tipo: "origen", detalle: "salida a la carretera La Paz - Oruro", mapa: { x: 456, y: 126 } },
        Laja: { lat: -16.5366, lon: -68.3852, tipo: "origen", detalle: "centro", mapa: { x: 316, y: 80 } },
        Tiwanaku: { lat: -16.5531, lon: -68.6816, tipo: "origen", detalle: "centro", mapa: { x: 104, y: 92 } },
        Colquencha: { lat: -16.9326, lon: -68.2494, tipo: "origen", detalle: "plaza principal", mapa: { x: 413, y: 375 } },
        Viacha: { lat: -16.6533, lon: -68.3015, tipo: "destino", detalle: "plaza principal", mapa: { x: 376, y: 167 } }
    },

    destino: "Viacha",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "La Paz", hasta: "Río Seco", km: 11.9, min: 15, via: "Avenida Juan Pablo II" },
        { desde: "La Paz", hasta: "Senkata", km: 17.1, min: 20, via: "la Ruta Nacional 2" },
        { desde: "El Alto", hasta: "Río Seco", km: 6.1, min: 6, via: "la Ruta Nacional 2" },
        { desde: "El Alto", hasta: "Senkata", km: 11.0, min: 14, via: "la Ruta Nacional 2" },
        { desde: "El Alto", hasta: "Viacha", km: 22.9, min: 24, via: "la Ruta Nacional 19 y la Ruta Nacional 2" },
        { desde: "Río Seco", hasta: "Senkata", km: 15.1, min: 16, via: "Avenida Litoral" },
        { desde: "Río Seco", hasta: "Laja", km: 19.9, min: 20, via: "la Ruta Nacional 1" },
        { desde: "Río Seco", hasta: "Viacha", km: 23.9, min: 23, via: "la Ruta Nacional 19 y la Ruta Nacional 42" },
        { desde: "Senkata", hasta: "Laja", km: 29.4, min: 30, via: "la Ruta Nacional 1 y la Ruta Nacional 42" },
        { desde: "Senkata", hasta: "Colquencha", km: 45.8, min: 54, via: "la Ruta Nacional 1" },
        { desde: "Senkata", hasta: "Viacha", km: 18.4, min: 18, via: "la Ruta Nacional 19 y la Ruta Nacional 42" },
        { desde: "Laja", hasta: "Tiwanaku", km: 37.3, min: 37, via: "la Ruta Nacional 1" },
        { desde: "Laja", hasta: "Viacha", km: 16.9, min: 22, via: "Camino Laja-Viacha" },
        { desde: "Colquencha", hasta: "Viacha", km: 34.8, min: 47, via: "la Ruta Nacional 19" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por El Alto", "30,4 km aprox."] },
        { desde: "Tiwanaku", icono: "🚗", color: "verde", detalles: ["Por Laja", "54,2 km aprox."] },
        { desde: "Colquencha", icono: "🚙", color: "morado", detalles: ["Camino directo", "34,8 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Capital de la provincia Ingavi, a 22 km de La Paz y a 3860 m de altura; el municipio tiene 113 554 habitantes según el censo de 2024 (Wikipedia).",
            "El tren La Paz - Guaqui volvió a pasar por Viacha a fines de 2008 (Wikipedia)."
        ],
        cultura: [
            "Feria de la Natividad: venta de aguayos, canastas, lana de camélidos y artesanía de totora (Wikimedia Commons)."
        ],
        produccion: [
            "Unas 100 fábricas de cerámica aprovechan sus yacimientos de arcilla (Wikipedia).",
            "Allí está la fábrica de cemento más grande de Bolivia (Wikipedia).",
            "Es líder departamental en cebada; también produce papa, quinua, tarwi y haba, y leche para el área metropolitana de La Paz (Wikipedia)."
        ],
        educacion: [],
        umsa: [
            "Sede Universitaria Local Viacha, del CRU Achacachi de la Universidad Mayor de San Andrés, región Altiplano Norte Lacustre.",
            "Programa: Técnico Superior en Producción Láctea (en proceso de titulación).",
            "Fuente de los programas: folleto «Programas académicos» del IDR-DU."
        ]
    },

    galeria: [
        { archivo: "iglesia-de-viacha.jpg", icono: "⛪", leyenda: "La iglesia, en la Feria de la Natividad", credito: "Olga Lidia Paredes Alcoreza, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Iglesia_de_Viacha.jpg" },
        { archivo: "ferrocarril-en-viacha.jpg", icono: "🚆", leyenda: "El tren Viacha - Guaqui", credito: "Caleidoscopic, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Ferrocarril_en_Viacha_.jpg" },
        { archivo: "fabrica-de-cemento-viacha-soboce.jpg", icono: "🏭", leyenda: "La fábrica de cemento", credito: "Caleidoscopic, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:F%C3%A1brica_de_cemento_Viacha_SOBOCE.jpg" },
        { archivo: "venta-de-canastas-feria-de-la-natividad-en-viacha.jpg", icono: "🧺", leyenda: "Feria de la Natividad", credito: "Carlillasa, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Venta_de_canastas,_Feria_de_la_Natividad_en_Viacha.jpg" }
    ]
};
