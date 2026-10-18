/* ==============================================================
   SEDE CHULUMANI: los datos de su página (index.html?sede=chulumani)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Cada dato de las secciones lleva
   su fuente (sedes-datos/contenido.json); las fotos son de Wikimedia Commons,
   con su autor y su licencia (sedes-datos/fotos.json).
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["chulumani"] = {

    municipio: "Chulumani",

    ubicacion: "Provincia Sud Yungas, La Paz",

    lema: "Conoce Chulumani, en la provincia Sud Yungas del departamento de La Paz, y cómo llegar.",

    sede: "Centro Regional Universitario Chulumani",

    fondo: "img/chulumani/244-chulumani-main-square.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 104, y: 308 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 45, y: 325 } },
        Unduavi: { lat: -16.3112, lon: -67.9093, tipo: "cruce", detalle: "cruce de caminos a Nor y Sud Yungas", mapa: { x: 233, y: 186 } },
        Coroico: { lat: -16.1886, lon: -67.7275, tipo: "origen", detalle: "centro", mapa: { x: 354, y: 101 } },
        Coripata: { lat: -16.3132, lon: -67.6036, tipo: "origen", detalle: "centro", mapa: { x: 436, y: 187 } },
        Irupana: { lat: -16.466, lon: -67.4549, tipo: "origen", detalle: "centro", mapa: { x: 535, y: 293 } },
        Chulumani: { lat: -16.4099, lon: -67.5256, tipo: "destino", detalle: "plaza principal", mapa: { x: 488, y: 254 } }
    },

    destino: "Chulumani",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "La Paz", hasta: "Unduavi", km: 43.6, min: 45, via: "la Ruta Nacional 3" },
        { desde: "Unduavi", hasta: "Coroico", km: 61.0, min: 68, via: "la Ruta Nacional 3 y el camino Yolosita-Coroico" },
        { desde: "Unduavi", hasta: "Coripata", km: 69.9, min: 81, via: "la Ruta Nacional 25 y la Ruta Nacional 40" },
        { desde: "Unduavi", hasta: "Irupana", km: 100.7, min: 117, via: "la Ruta Nacional 25 y la Ruta Nacional 3" },
        { desde: "Unduavi", hasta: "Chulumani", km: 73.1, min: 82, via: "la Ruta Nacional 25 y la Ruta Nacional 3" },
        { desde: "Coroico", hasta: "Coripata", km: 33.4, min: 43, via: "la Ruta Nacional 40" },
        { desde: "Coripata", hasta: "Irupana", km: 56.8, min: 78, via: "la Ruta Nacional 25 y el camino NorEste Coripata-Arapata" },
        { desde: "Coripata", hasta: "Chulumani", km: 29.2, min: 43, via: "la Ruta Nacional 25 y el camino NorEste Coripata-Arapata" },
        { desde: "Irupana", hasta: "Chulumani", km: 30.3, min: 38, via: "la Ruta Nacional 25" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por Unduavi", "116,7 km aprox."] },
        { desde: "Coroico", icono: "🚗", color: "verde", detalles: ["Por Coripata", "62,6 km aprox."] },
        { desde: "Irupana", icono: "🚙", color: "morado", detalles: ["Camino directo", "30,3 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Capital de la provincia Sud Yungas, a 123 km de La Paz y a 1740 m de altura; su nombre significa «manantial del puma» (Wikipedia).",
            "Es conocida como destino turístico por sus atractivos naturales; el municipio tiene 18 303 habitantes según el censo de 2024 (Wikipedia)."
        ],
        cultura: [
            "Su iglesia está dedicada al Tata Bartolo, cuya imagen está en el altar (Wikimedia Commons).",
            "En Corpus Christi se hacen dibujos religiosos sobre el piso de las calles (Wikimedia Commons)."
        ],
        produccion: [
            "Produce coca, naranja y café (Wikipedia)."
        ],
        educacion: [],
        umsa: [
            "Centro Regional Universitario Chulumani de la Universidad Mayor de San Andrés, región Yungas.",
            "Programa: Lic. Administración de Empresas y Organizaciones Públicas.",
            "Programa: Técnico Superior Contador General.",
            "Fuente de los programas: folleto «Programas académicos» del IDR-DU."
        ]
    },

    galeria: [
        { archivo: "244-chulumani-main-square.jpg", icono: "🏘️", leyenda: "La plaza principal", credito: "Aurimaz, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:244_-_Chulumani_main_square.jpg" },
        { archivo: "fachada-de-la-iglesia-de-chulumani.jpg", icono: "⛪", leyenda: "La iglesia del Tata Bartolo", credito: "Carlillasa, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Fachada_de_la_iglesia_de_Chulumani.jpg" },
        { archivo: "puesto-de-venta-de-jawitas-en-chulumani.jpg", icono: "🍞", leyenda: "Venta de jawitas", credito: "Carlillasa, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Puesto_de_venta_de_jawitas_en_Chulumani.jpg" }
    ]
};
