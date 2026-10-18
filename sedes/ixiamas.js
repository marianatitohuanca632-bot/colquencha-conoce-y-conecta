/* ==============================================================
   SEDE IXIAMAS: los datos de su página (index.html?sede=ixiamas)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Lo que dice [COMPLETAR] lo
   escribe quien conozca el municipio, con información verificada.
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["ixiamas"] = {

    municipio: "Ixiamas",

    ubicacion: "Provincia Abel Iturralde, La Paz",

    lema: "Conoce Ixiamas, en la provincia Abel Iturralde del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Ixiamas, del CRU San Buenaventura",

    fondo: "img/ixiamas/paisaje.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 266, y: 366 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 206, y: 383 } },
        Caranavi: { lat: -15.834, lon: -67.5659, tipo: "origen", detalle: "centro", mapa: { x: 304, y: 294 } },
        Yucumo: { lat: -15.1468, lon: -67.0338, tipo: "origen", detalle: "centro", mapa: { x: 367, y: 213 } },
        Rurrenabaque: { lat: -14.4437, lon: -67.5313, tipo: "origen", detalle: "centro", mapa: { x: 338, y: 158 } },
        "San Buenaventura": { lat: -14.4387, lon: -67.5365, tipo: "origen", detalle: "centro", mapa: { x: 303, y: 107 } },
        Tumupasa: { lat: -14.1475, lon: -67.8899, tipo: "origen", detalle: "centro", mapa: { x: 243, y: 91 } },
        Ixiamas: { lat: -13.7676, lon: -68.1259, tipo: "destino", detalle: "plaza principal", mapa: { x: 234, y: 30 } }
    },

    destino: "Ixiamas",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "La Paz", hasta: "Caranavi", km: 164.0, min: 164, via: "la Ruta Nacional 3 y la Ruta Nacional 26" },
        { desde: "Caranavi", hasta: "Yucumo", km: 159.1, min: 151, via: "la Ruta Nacional 3 y la Ruta Nacional 26" },
        { desde: "Yucumo", hasta: "Rurrenabaque", km: 103.7, min: 130, via: "la Ruta Nacional 8" },
        { desde: "Rurrenabaque", hasta: "San Buenaventura", km: 1.3, min: 2, via: "la Ruta Nacional 8" },
        { desde: "San Buenaventura", hasta: "Tumupasa", km: 53.7, min: 54, via: "la Ruta Nacional 8 y la Ruta Nacional 16" },
        { desde: "Tumupasa", hasta: "Ixiamas", km: 61.1, min: 64, via: "la Ruta Nacional 16" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por Caranavi, Yucumo, Rurrenabaque, San Buenaventura y Tumupasa", "542,9 km aprox."] },
        { desde: "San Buenaventura", icono: "🚗", color: "verde", detalles: ["Por Tumupasa", "114,8 km aprox."] },
        { desde: "Caranavi", icono: "🚙", color: "morado", detalles: ["Por Yucumo, Rurrenabaque, San Buenaventura y Tumupasa", "378,9 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Ixiamas es una localidad y municipio de Bolivia, capital de la provincia de Iturralde en el departamento de La Paz. Se encuentra ubicado al norte del departamento de La Paz, en la región de la Amazonía boliviana. (Wikipedia, «Ixiamas»)",
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
            "Sede Universitaria Local Ixiamas, del CRU San Buenaventura de la Universidad Mayor de San Andrés, región Norte Amazónico.",
            "Programa: Lic. Ingeniería Agroforestal.",
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
