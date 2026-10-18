/* ==============================================================
   SEDE CORIPATA: los datos de su página (index.html?sede=coripata)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Lo que dice [COMPLETAR] lo
   escribe quien conozca el municipio, con información verificada.
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["coripata"] = {

    municipio: "Coripata",

    ubicacion: "Provincia Nor Yungas, La Paz",

    lema: "Conoce Coripata, en la provincia Nor Yungas del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Coripata, del CRU Chulumani",

    fondo: "img/coripata/paisaje.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 106, y: 320 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 46, y: 337 } },
        Unduavi: { lat: -16.3112, lon: -67.9093, tipo: "cruce", detalle: "cruce de caminos a Nor y Sud Yungas", mapa: { x: 252, y: 183 } },
        Coroico: { lat: -16.1886, lon: -67.7275, tipo: "origen", detalle: "centro", mapa: { x: 386, y: 89 } },
        Chulumani: { lat: -16.4099, lon: -67.5256, tipo: "origen", detalle: "centro", mapa: { x: 535, y: 259 } },
        Coripata: { lat: -16.3132, lon: -67.6036, tipo: "destino", detalle: "plaza principal", mapa: { x: 477, y: 185 } }
    },

    destino: "Coripata",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "La Paz", hasta: "Unduavi", km: 43.6, min: 45, via: "la Ruta Nacional 3" },
        { desde: "Unduavi", hasta: "Coroico", km: 61.0, min: 68, via: "la Ruta Nacional 3 y el camino Yolosita-Coroico" },
        { desde: "Unduavi", hasta: "Chulumani", km: 73.1, min: 82, via: "la Ruta Nacional 25 y la Ruta Nacional 3" },
        { desde: "Unduavi", hasta: "Coripata", km: 69.9, min: 81, via: "la Ruta Nacional 25 y la Ruta Nacional 40" },
        { desde: "Coroico", hasta: "Coripata", km: 33.4, min: 43, via: "la Ruta Nacional 40" },
        { desde: "Chulumani", hasta: "Coripata", km: 29.2, min: 43, via: "Camino NorEste Coripata-Arapata" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por Unduavi", "113,5 km aprox."] },
        { desde: "Chulumani", icono: "🚗", color: "verde", detalles: ["Camino directo", "29,2 km aprox."] },
        { desde: "Coroico", icono: "🚙", color: "morado", detalles: ["Camino directo", "33,4 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Coripata es una localidad y municipio de Bolivia, ubicado en la provincia de Nor Yungas del departamento de La Paz. (Wikipedia, «Coripata»)",
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
            "Sede Universitaria Local Coripata, del CRU Chulumani de la Universidad Mayor de San Andrés, región Yungas.",
            "Programa: Técnico Superior en Ciencias Químicas.",
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
