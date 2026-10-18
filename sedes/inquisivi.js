/* ==============================================================
   SEDE INQUISIVI: los datos de su página (index.html?sede=inquisivi)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Cada dato de las secciones lleva
   su fuente (sedes-datos/contenido.json); las fotos son de Wikimedia Commons,
   con su autor y su licencia (sedes-datos/fotos.json).
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["inquisivi"] = {

    municipio: "Inquisivi",

    ubicacion: "Provincia Inquisivi, La Paz",

    lema: "Conoce Inquisivi, en la provincia Inquisivi del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Inquisivi, del CRU Patacamaya",

    fondo: null,

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 221, y: 37 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 161, y: 54 } },
        Patacamaya: { lat: -17.2327, lon: -67.9203, tipo: "origen", detalle: "centro", mapa: { x: 240, y: 210 } },
        Konani: { lat: -17.439, lon: -67.5176, tipo: "origen", detalle: "centro", mapa: { x: 326, y: 256 } },
        Quime: { lat: -16.98, lon: -67.2157, tipo: "origen", detalle: "centro", mapa: { x: 377, y: 167 } },
        Oruro: { lat: -17.9698, lon: -67.1148, tipo: "origen", detalle: "centro", mapa: { x: 412, y: 375 } },
        Inquisivi: { lat: -16.9072, lon: -67.1378, tipo: "destino", detalle: "plaza principal", mapa: { x: 421, y: 124 } }
    },

    destino: "Inquisivi",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "El Alto", hasta: "Patacamaya", km: 91.3, min: 92, via: "la Ruta Nacional 1 y la Ruta Nacional 2" },
        { desde: "Patacamaya", hasta: "Konani", km: 49.9, min: 47, via: "la Ruta Nacional 1" },
        { desde: "Konani", hasta: "Quime", km: 85.8, min: 94, via: "la Ruta Nacional 62 y el camino Konani-Caxata" },
        { desde: "Konani", hasta: "Oruro", km: 78.0, min: 74, via: "la Ruta Nacional 1 y la Ruta Nacional 12" },
        { desde: "Quime", hasta: "Inquisivi", km: 20.6, min: 20, via: "la Ruta Nacional 62 y el camino Inquivisi-Quime" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por El Alto, Patacamaya, Konani y Quime", "255,1 km aprox."] },
        { desde: "Patacamaya", icono: "🚗", color: "verde", detalles: ["Por Konani y Quime", "156,3 km aprox."] },
        { desde: "Oruro", icono: "🚙", color: "morado", detalles: ["Por Konani y Quime", "184,4 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Capital de la provincia Inquisivi, a 262 km de La Paz y a 2760 m de altura, sobre el río Khalu y cerca de Quime; el municipio tiene 18 679 habitantes según el censo de 2024 (Wikipedia).",
            "Está en la vertiente oriental de la cordillera Quimsa Cruz; la temperatura media es de 10,5 °C (Wikipedia)."
        ],
        cultura: [
            "El 86,9 % de la población del municipio habla aimara (Wikipedia)."
        ],
        produccion: [],
        educacion: [],
        umsa: [
            "Sede Universitaria Local Inquisivi, del CRU Patacamaya de la Universidad Mayor de San Andrés, región Altiplano Sur.",
            "Programa: Lic. Administración de Empresas y Organizaciones Públicas.",
            "Fuente de los programas: folleto «Programas académicos» del IDR-DU."
        ]
    },

    galeria: []
};
