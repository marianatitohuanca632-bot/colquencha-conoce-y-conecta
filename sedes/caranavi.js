/* ==============================================================
   SEDE CARANAVI: los datos de su página (index.html?sede=caranavi)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Lo que dice [COMPLETAR] lo
   escribe quien conozca el municipio, con información verificada.
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["caranavi"] = {

    municipio: "Caranavi",

    ubicacion: "Provincia Caranavi, La Paz",

    lema: "Conoce Caranavi, en la provincia Caranavi del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Caranavi, del CRU Chulumani",

    fondo: "img/caranavi/paisaje.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 196, y: 365 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 136, y: 382 } },
        Unduavi: { lat: -16.3112, lon: -67.9093, tipo: "cruce", detalle: "cruce de caminos a Nor y Sud Yungas", mapa: { x: 246, y: 308 } },
        Coroico: { lat: -16.1886, lon: -67.7275, tipo: "origen", detalle: "centro", mapa: { x: 306, y: 264 } },
        Coripata: { lat: -16.3132, lon: -67.6036, tipo: "origen", detalle: "centro", mapa: { x: 349, y: 309 } },
        Sapecho: { lat: -15.5589, lon: -67.3347, tipo: "origen", detalle: "centro", mapa: { x: 439, y: 45 } },
        Caranavi: { lat: -15.834, lon: -67.5659, tipo: "destino", detalle: "plaza principal", mapa: { x: 361, y: 141 } }
    },

    destino: "Caranavi",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "La Paz", hasta: "Unduavi", km: 43.6, min: 45, via: "la Ruta Nacional 3" },
        { desde: "Unduavi", hasta: "Coroico", km: 61.0, min: 68, via: "la Ruta Nacional 3 y el camino Yolosita-Coroico" },
        { desde: "Unduavi", hasta: "Coripata", km: 69.9, min: 81, via: "la Ruta Nacional 25 y la Ruta Nacional 40" },
        { desde: "Unduavi", hasta: "Caranavi", km: 120.3, min: 119, via: "la Ruta Nacional 3 y la Ruta Nacional 26" },
        { desde: "Coroico", hasta: "Coripata", km: 33.4, min: 43, via: "la Ruta Nacional 40" },
        { desde: "Coroico", hasta: "Sapecho", km: 143.4, min: 139, via: "la Ruta Nacional 3 y el camino Yolosita-Coroico" },
        { desde: "Coroico", hasta: "Caranavi", km: 77.9, min: 76, via: "la Ruta Nacional 3 y el camino Yolosita-Coroico" },
        { desde: "Coripata", hasta: "Sapecho", km: 176.7, min: 181, via: "la Ruta Nacional 3 y la Ruta Nacional 40" },
        { desde: "Coripata", hasta: "Caranavi", km: 111.2, min: 118, via: "la Ruta Nacional 3 y la Ruta Nacional 40" },
        { desde: "Sapecho", hasta: "Caranavi", km: 69.7, min: 67, via: "la Ruta Nacional 3 y la Ruta Nacional 26" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por Unduavi", "163,9 km aprox."] },
        { desde: "Coripata", icono: "🚗", color: "verde", detalles: ["Camino directo", "111,2 km aprox."] },
        { desde: "Coroico", icono: "🚙", color: "morado", detalles: ["Camino directo", "77,9 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Caranavi es un municipio y una ciudad intermedia de Bolivia, capital de la provincia de Caranavi ubicado en el departamento de La Paz. La ciudad se encuentra distante a 150 km de la ciudad de La Paz. (Wikipedia, «Caranavi»)",
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
            "Sede Universitaria Local Caranavi, del CRU Chulumani de la Universidad Mayor de San Andrés, región Yungas.",
            "Programa: Lic. Ciencias de la Educación para el Desarrollo Sostenible.",
            "Programa: Lic. Administración de Empresas y Organizaciones Públicas.",
            "Programa: Técnico Superior Contador General.",
            "Programa: Lic. Ingeniería Industrial Amazónica.",
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
