/* ==============================================================
   SEDE SICA SICA: los datos de su página (index.html?sede=sica-sica)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Cada dato de las secciones lleva
   su fuente (sedes-datos/contenido.json); las fotos son de Wikimedia Commons,
   con su autor y su licencia (sedes-datos/fotos.json).
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["sica-sica"] = {

    municipio: "Sica Sica",

    ubicacion: "Provincia Aroma, La Paz",

    lema: "Conoce Sica Sica, en la provincia Aroma del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Sica Sica, del CRU Patacamaya",

    fondo: "img/sica-sica/campanario-templo-de-sica-sica.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 221, y: 37 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 161, y: 54 } },
        Calamarca: { lat: -16.9058, lon: -68.1155, tipo: "origen", detalle: "centro", mapa: { x: 198, y: 137 } },
        Patacamaya: { lat: -17.2327, lon: -67.9203, tipo: "origen", detalle: "centro", mapa: { x: 227, y: 203 } },
        Konani: { lat: -17.439, lon: -67.5176, tipo: "origen", detalle: "centro", mapa: { x: 336, y: 261 } },
        Caracollo: { lat: -17.6491, lon: -67.2085, tipo: "origen", detalle: "centro", mapa: { x: 392, y: 303 } },
        Oruro: { lat: -17.9698, lon: -67.1148, tipo: "origen", detalle: "centro", mapa: { x: 412, y: 375 } },
        "Sica Sica": { lat: -17.3329, lon: -67.7389, tipo: "destino", detalle: "plaza principal", mapa: { x: 280, y: 235 } }
    },

    destino: "Sica Sica",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "La Paz", hasta: "Calamarca", km: 55.7, min: 58, via: "la Ruta Nacional 1 y la Ruta Nacional 2" },
        { desde: "El Alto", hasta: "Calamarca", km: 49.5, min: 52, via: "la Ruta Nacional 1 y la Ruta Nacional 2" },
        { desde: "Calamarca", hasta: "Patacamaya", km: 44.3, min: 46, via: "la Ruta Nacional 1" },
        { desde: "Patacamaya", hasta: "Konani", km: 49.9, min: 47, via: "la Ruta Nacional 1" },
        { desde: "Patacamaya", hasta: "Sica Sica", km: 25.9, min: 27, via: "la Ruta Nacional 1" },
        { desde: "Konani", hasta: "Caracollo", km: 41.4, min: 41, via: "la Ruta Nacional 1" },
        { desde: "Konani", hasta: "Sica Sica", km: 28.1, min: 27, via: "la Ruta Nacional 1" },
        { desde: "Caracollo", hasta: "Oruro", km: 37.8, min: 37, via: "la Ruta Nacional 1 y la Ruta Nacional 12" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por Calamarca y Patacamaya", "125,9 km aprox."] },
        { desde: "Patacamaya", icono: "🚗", color: "verde", detalles: ["Camino directo", "25,9 km aprox."] },
        { desde: "Oruro", icono: "🚙", color: "morado", detalles: ["Por Caracollo y Konani", "107,3 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Capital de la provincia Aroma, a 124 km de La Paz y a unos 3850 m de altura; el municipio tiene 33 885 habitantes según el censo de 2024 (Wikipedia).",
            "Su templo, dedicado a San Juan Bautista, está registrado como monumento protegido (Wikimedia Commons)."
        ],
        cultura: [],
        produccion: [
            "Agricultura: papa, oca, quinua, qañawa y cebada (Wikipedia).",
            "Ganadería: vacunos criollos, llamas, alpacas y ovinos (Wikipedia).",
            "Artesanía textil: ponchos y frazadas (Wikipedia)."
        ],
        educacion: [],
        umsa: [
            "Sede Universitaria Local Sica Sica, del CRU Patacamaya de la Universidad Mayor de San Andrés, región Altiplano Sur.",
            "Programa: Lic. Administración de Empresas y Organizaciones Públicas.",
            "Fuente de los programas: folleto «Programas académicos» del IDR-DU."
        ]
    },

    galeria: [
        { archivo: "templo-de-sica-sica.jpg", icono: "⛪", leyenda: "El templo de Sica Sica, monumento nacional", credito: "Alex chipana, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Templo_de_Sica_Sica.jpg" },
        { archivo: "iglesia-de-sica-sica-en-el-departamento-de-la-paz-.jpg", icono: "⛪", leyenda: "La iglesia de San Juan Bautista", credito: "Lajlectora, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Iglesia_de_Sica_Sica_en_el_departamento_de_La_Paz_-_Aroma.jpg" },
        { archivo: "campanario-templo-de-sica-sica.jpg", icono: "🔔", leyenda: "El campanario del templo", credito: "Jose Ramon Loria, CC BY-SA 3.0", pagina: "https://commons.wikimedia.org/wiki/File:Campanario_Templo_de_Sica_Sica.jpg" }
    ]
};
