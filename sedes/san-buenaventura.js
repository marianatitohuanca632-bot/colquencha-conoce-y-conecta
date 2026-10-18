/* ==============================================================
   SEDE SAN BUENAVENTURA: los datos de su página (index.html?sede=san-buenaventura)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Cada dato de las secciones lleva
   su fuente (sedes-datos/contenido.json); las fotos son de Wikimedia Commons,
   con su autor y su licencia (sedes-datos/fotos.json).
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["san-buenaventura"] = {

    municipio: "San Buenaventura",

    ubicacion: "Provincia Abel Iturralde, La Paz",

    lema: "Conoce San Buenaventura, en la provincia Abel Iturralde del departamento de La Paz, y cómo llegar.",

    sede: "Centro Regional Universitario San Buenaventura",

    fondo: "img/san-buenaventura/vista-del-rio-que-divide-rurrenabaque-de-san-buena.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 195, y: 395 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 238, y: 350 } },
        Unduavi: { lat: -16.3112, lon: -67.9093, tipo: "cruce", detalle: "cruce de caminos a Nor y Sud Yungas", mapa: { x: 300, y: 351 } },
        Caranavi: { lat: -15.834, lon: -67.5659, tipo: "origen", detalle: "centro", mapa: { x: 289, y: 290 } },
        Sapecho: { lat: -15.5589, lon: -67.3347, tipo: "origen", detalle: "centro", mapa: { x: 341, y: 257 } },
        Yucumo: { lat: -15.1468, lon: -67.0338, tipo: "origen", detalle: "centro", mapa: { x: 377, y: 206 } },
        Rurrenabaque: { lat: -14.4437, lon: -67.5313, tipo: "origen", detalle: "centro", mapa: { x: 341, y: 156 } },
        Tumupasa: { lat: -14.1475, lon: -67.8899, tipo: "origen", detalle: "centro", mapa: { x: 242, y: 89 } },
        Ixiamas: { lat: -13.7676, lon: -68.1259, tipo: "origen", detalle: "centro", mapa: { x: 232, y: 28 } },
        "San Buenaventura": { lat: -14.4387, lon: -67.5365, tipo: "destino", detalle: "plaza principal", mapa: { x: 300, y: 109 } }
    },

    destino: "San Buenaventura",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "La Paz", hasta: "Unduavi", km: 43.6, min: 45, via: "la Ruta Nacional 3" },
        { desde: "Unduavi", hasta: "Caranavi", km: 120.3, min: 119, via: "la Ruta Nacional 3 y la Ruta Nacional 26" },
        { desde: "Caranavi", hasta: "Sapecho", km: 69.7, min: 67, via: "la Ruta Nacional 3 y la Ruta Nacional 26" },
        { desde: "Sapecho", hasta: "Yucumo", km: 90.0, min: 85, via: "la Ruta Nacional 3" },
        { desde: "Yucumo", hasta: "Rurrenabaque", km: 103.7, min: 130, via: "la Ruta Nacional 8" },
        { desde: "Rurrenabaque", hasta: "San Buenaventura", km: 1.3, min: 2, via: "la Ruta Nacional 8" },
        { desde: "Tumupasa", hasta: "Ixiamas", km: 61.1, min: 64, via: "la Ruta Nacional 16" },
        { desde: "Tumupasa", hasta: "San Buenaventura", km: 53.7, min: 54, via: "la Ruta Nacional 8 y el rN16: Rurrenabaque-Ixiamas" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por Unduavi, Caranavi, Sapecho, Yucumo y Rurrenabaque", "428,6 km aprox."] },
        { desde: "Caranavi", icono: "🚗", color: "verde", detalles: ["Por Sapecho, Yucumo y Rurrenabaque", "264,7 km aprox."] },
        { desde: "Sapecho", icono: "🚙", color: "morado", detalles: ["Por Yucumo y Rurrenabaque", "195,0 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Está a orillas del río Beni, frente a Rurrenabaque, a unos 200 m de altura, y es una de las entradas al parque nacional Madidi (Wikipedia).",
            "Un puente une San Buenaventura con Rurrenabaque, en el Beni (Wikimedia Commons)."
        ],
        cultura: [
            "Nació en 1680 como una de las diez misiones franciscanas de la región, y fue refundada el 14 de julio de 1862 (Wikipedia).",
            "El keperi es una de sus comidas típicas (Wikimedia Commons)."
        ],
        produccion: [
            "Agricultura: arroz, maíz, yuca, plátano, cítricos, frijol, cacao y caña de azúcar (Wikipedia).",
            "Desde 2015 funciona el Ingenio Azucarero San Buenaventura, que procesa hasta 14 000 quintales de caña por día (Wikipedia).",
            "También ganadería, madera, pesca, apicultura y turismo (Wikipedia)."
        ],
        educacion: [],
        umsa: [
            "Centro Regional Universitario San Buenaventura de la Universidad Mayor de San Andrés, región Norte Amazónico.",
            "Programa: Lic. Ciencias de la Educación para el Desarrollo Sostenible.",
            "Programa: Lic. Arquitectura para la Amazonía.",
            "Programa: Lic. Administración de Empresas y Organizaciones Públicas.",
            "Programa: Lic. Ingeniería Industrial Amazónica.",
            "Fuente de los programas: folleto «Programas académicos» del IDR-DU."
        ]
    },

    galeria: [
        { archivo: "san-buenaventura-bolivia1.jpg", icono: "🏘️", leyenda: "La plaza principal", credito: "Grullab, CC BY-SA 3.0", pagina: "https://commons.wikimedia.org/wiki/File:San_Buenaventura,_Bolivia1.JPG" },
        { archivo: "puente-que-une-rurrenabaque-y-san-buenaventura.jpg", icono: "🌉", leyenda: "El puente a Rurrenabaque", credito: "LaCris, CC BY 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Puente_que_une_Rurrenabaque_y_San_Buenaventura.jpg" },
        { archivo: "san-buenaventura-beni-river-bolivia.jpg", icono: "🌊", leyenda: "El río Beni", credito: "Arthur Chapman, CC BY 2.0", pagina: "https://commons.wikimedia.org/wiki/File:San_Buenaventura,_Beni_River,_Bolivia.jpg" },
        { archivo: "keperi-de-san-buenaventura-la-paz-bolivia.jpg", icono: "🍲", leyenda: "El keperi, comida típica", credito: "N1ny4 t, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Keperi_de_San_Buenaventura,_La_Paz,_Bolivia.jpg" }
    ]
};
