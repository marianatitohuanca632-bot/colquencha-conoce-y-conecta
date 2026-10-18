/* ==============================================================
   SEDE SAPECHO: los datos de su página (index.html?sede=sapecho)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Lo que dice [COMPLETAR] lo
   escribe quien conozca el municipio, con información verificada.
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["sapecho"] = {

    municipio: "Sapecho",

    ubicacion: "Provincia Sud Yungas, La Paz",

    lema: "Conoce Sapecho, en la provincia Sud Yungas del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Sapecho, del CRU San Buenaventura",

    fondo: "img/sapecho/paisaje.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 198, y: 378 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 137, y: 383 } },
        Unduavi: { lat: -16.3112, lon: -67.9093, tipo: "cruce", detalle: "cruce de caminos a Nor y Sud Yungas", mapa: { x: 225, y: 322 } },
        Coroico: { lat: -16.1886, lon: -67.7275, tipo: "origen", detalle: "centro", mapa: { x: 280, y: 292 } },
        Caranavi: { lat: -15.834, lon: -67.5659, tipo: "origen", detalle: "centro", mapa: { x: 308, y: 212 } },
        "Palos Blancos": { lat: -15.5865, lon: -67.2502, tipo: "origen", detalle: "centro", mapa: { x: 401, y: 159 } },
        Yucumo: { lat: -15.1468, lon: -67.0338, tipo: "origen", detalle: "centro", mapa: { x: 432, y: 45 } },
        Sapecho: { lat: -15.5589, lon: -67.3347, tipo: "destino", detalle: "plaza principal", mapa: { x: 342, y: 139 } }
    },

    destino: "Sapecho",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "La Paz", hasta: "Unduavi", km: 43.6, min: 45, via: "la Ruta Nacional 3" },
        { desde: "Unduavi", hasta: "Coroico", km: 61.0, min: 68, via: "la Ruta Nacional 3 y el camino Yolosita-Coroico" },
        { desde: "Unduavi", hasta: "Caranavi", km: 120.3, min: 119, via: "la Ruta Nacional 3 y la Ruta Nacional 26" },
        { desde: "Coroico", hasta: "Caranavi", km: 77.9, min: 76, via: "la Ruta Nacional 3 y el camino Yolosita-Coroico" },
        { desde: "Coroico", hasta: "Sapecho", km: 143.4, min: 139, via: "la Ruta Nacional 3 y el camino Yolosita-Coroico" },
        { desde: "Caranavi", hasta: "Sapecho", km: 69.7, min: 67, via: "la Ruta Nacional 3 y la Ruta Nacional 26" },
        { desde: "Palos Blancos", hasta: "Sapecho", km: 10.8, min: 14, via: "Camino Sapecho-Palos Blancos" },
        { desde: "Yucumo", hasta: "Sapecho", km: 90.0, min: 85, via: "la Ruta Nacional 3" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por Unduavi y Caranavi", "233,6 km aprox."] },
        { desde: "Coroico", icono: "🚗", color: "verde", detalles: ["Camino directo", "143,4 km aprox."] },
        { desde: "Yucumo", icono: "🚙", color: "morado", detalles: ["Camino directo", "90,0 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Palos Blancos es una pequeña ciudad y un municipio de Bolivia, ubicado en la región subandina en la provincia de Sud Yungas en el departamento de La Paz. Tiene una superficie de 3430 km² y una población de 16 786 habitantes. (Wikipedia, «Palos Blancos (Bolivia)»)",
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
            "Sede Universitaria Local Sapecho, del CRU San Buenaventura de la Universidad Mayor de San Andrés, región Norte Amazónico.",
            "Programa: Lic. Ingeniería Forestal y Maderera.",
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
