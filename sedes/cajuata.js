/* ==============================================================
   SEDE CAJUATA: los datos de su página (index.html?sede=cajuata)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Cada dato de las secciones lleva
   su fuente (sedes-datos/contenido.json); las fotos son de Wikimedia Commons,
   con su autor y su licencia (sedes-datos/fotos.json).
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["cajuata"] = {

    municipio: "Cajuata",

    ubicacion: "Provincia Inquisivi, La Paz",

    lema: "Conoce Cajuata, en la provincia Inquisivi del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Cajuata, del CRU Chulumani",

    fondo: null,

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 102, y: 130 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 42, y: 146 } },
        Unduavi: { lat: -16.3112, lon: -67.9093, tipo: "cruce", detalle: "cruce de caminos a Nor y Sud Yungas", mapa: { x: 185, y: 45 } },
        Chulumani: { lat: -16.4099, lon: -67.5256, tipo: "origen", detalle: "centro", mapa: { x: 359, y: 88 } },
        Irupana: { lat: -16.466, lon: -67.4549, tipo: "origen", detalle: "centro", mapa: { x: 407, y: 127 } },
        Quime: { lat: -16.98, lon: -67.2157, tipo: "origen", detalle: "centro", mapa: { x: 513, y: 375 } },
        Cajuata: { lat: -16.701, lon: -67.1692, tipo: "destino", detalle: "plaza principal", mapa: { x: 535, y: 237 } }
    },

    destino: "Cajuata",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "La Paz", hasta: "Unduavi", km: 43.6, min: 45, via: "la Ruta Nacional 3" },
        { desde: "El Alto", hasta: "Quime", km: 225.7, min: 228, via: "la Ruta Nacional 1 y el camino Konani-Caxata" },
        { desde: "Unduavi", hasta: "Chulumani", km: 73.1, min: 82, via: "la Ruta Nacional 25 y la Ruta Nacional 3" },
        { desde: "Unduavi", hasta: "Irupana", km: 100.7, min: 117, via: "la Ruta Nacional 25 y la Ruta Nacional 3" },
        { desde: "Chulumani", hasta: "Irupana", km: 30.3, min: 38, via: "la Ruta Nacional 25" },
        { desde: "Irupana", hasta: "Quime", km: 161.1, min: 305, via: "la Ruta Nacional 25 y la Ruta Nacional 62" },
        { desde: "Irupana", hasta: "Cajuata", km: 81.9, min: 143, via: "la Ruta Nacional 25 y el camino RN25 Agua Rica-Cajuata" },
        { desde: "Quime", hasta: "Cajuata", km: 90.8, min: 192, via: "la Ruta Nacional 62 y el camino RN25 Licoma-Suri-Cajuata" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por Unduavi y Irupana", "226,2 km aprox."] },
        { desde: "Chulumani", icono: "🚗", color: "verde", detalles: ["Por Irupana", "112,2 km aprox."] },
        { desde: "Quime", icono: "🚙", color: "morado", detalles: ["Camino directo", "90,8 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Está a 204 km de La Paz y a 1682 m de altura; el municipio tiene 15 565 habitantes según el censo de 2024 (Wikipedia).",
            "Se llega por Konani, Caxata, Quime, Inquisivi y Licoma Pampa, o por los Yungas, pasando por Chulumani e Irupana (Wikipedia)."
        ],
        cultura: [],
        produccion: [],
        educacion: [],
        umsa: [
            "Sede Universitaria Local Cajuata, del CRU Chulumani de la Universidad Mayor de San Andrés, región Yungas."
        ]
    },

    galeria: [
        { archivo: "flag-of-cajuata-bolivia.jpg", icono: "🚩", leyenda: "Bandera del municipio de Cajuata", credito: "Ingaviano, CC0", pagina: "https://commons.wikimedia.org/wiki/File:Flag_of_Cajuata,_Bolivia.svg" }
    ]
};
