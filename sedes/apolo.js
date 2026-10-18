/* ==============================================================
   SEDE APOLO: los datos de su página (index.html?sede=apolo)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Cada dato de las secciones lleva
   su fuente (sedes-datos/contenido.json); las fotos son de Wikimedia Commons,
   con su autor y su licencia (sedes-datos/fotos.json).
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["apolo"] = {

    municipio: "Apolo",

    ubicacion: "Provincia Franz Tamayo, La Paz",

    lema: "Conoce Apolo, en la provincia Franz Tamayo del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Apolo, del CRU San Buenaventura",

    fondo: "img/apolo/santos-pariamo-de-lejos.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 416, y: 366 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 356, y: 383 } },
        Huarina: { lat: -16.1907, lon: -68.601, tipo: "origen", detalle: "centro", mapa: { x: 313, y: 331 } },
        Achacachi: { lat: -16.0439, lon: -68.685, tipo: "origen", detalle: "centro", mapa: { x: 283, y: 277 } },
        Escoma: { lat: -15.6614, lon: -69.129, tipo: "origen", detalle: "centro", mapa: { x: 212, y: 220 } },
        Charazani: { lat: -15.1762, lon: -68.9952, tipo: "origen", detalle: "centro", mapa: { x: 235, y: 130 } },
        Apolo: { lat: -14.7154, lon: -68.4177, tipo: "destino", detalle: "plaza principal", mapa: { x: 338, y: 45 } }
    },

    destino: "Apolo",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "El Alto", hasta: "Huarina", km: 63.0, min: 59, via: "la Ruta Nacional 2" },
        { desde: "Huarina", hasta: "Achacachi", km: 19.8, min: 20, via: "la Ruta Nacional 16" },
        { desde: "Achacachi", hasta: "Escoma", km: 74.8, min: 71, via: "la Ruta Nacional 16" },
        { desde: "Escoma", hasta: "Charazani", km: 88.3, min: 100, via: "la Ruta Nacional 16" },
        { desde: "Charazani", hasta: "Apolo", km: 158.3, min: 238, via: "la Ruta Nacional 16" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por El Alto, Huarina, Achacachi, Escoma y Charazani", "411,7 km aprox."] },
        { desde: "Huarina", icono: "🚗", color: "verde", detalles: ["Por Achacachi, Escoma y Charazani", "341,2 km aprox."] },
        { desde: "Achacachi", icono: "🚙", color: "morado", detalles: ["Por Escoma y Charazani", "321,4 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Capital de la provincia Franz Tamayo, a unos 1400 m de altura; el municipio tiene 19 156 habitantes según el censo de 2024 (Wikipedia).",
            "Parte de su territorio está en la Amazonía: lo cruza el río Tuichi y tiene el lago Chalalán y la laguna Santa Rosa (Wikipedia).",
            "En la plaza principal hay una fuente y un monumento a Santos Pariamo (Wikimedia Commons)."
        ],
        cultura: [
            "Su nombre vendría de Aphullu pampa («pampa grande»), Phullu pampa («pampa de toros») o Polo pampa (Wikipedia).",
            "La antigua provincia Caupolicán, que incluía Apolo, fue creada por el mariscal Sucre el 23 de enero de 1826 (Wikipedia)."
        ],
        produccion: [],
        educacion: [],
        umsa: [
            "Sede Universitaria Local Apolo, del CRU San Buenaventura de la Universidad Mayor de San Andrés, región Norte Amazónico.",
            "Programa: Lic. Administración de Empresas y Organizaciones Públicas.",
            "Fuente de los programas: folleto «Programas académicos» del IDR-DU."
        ]
    },

    galeria: [
        { archivo: "bienvenidos-apolo-madidi.jpg", icono: "🏘️", leyenda: "Bienvenida en la plaza principal", credito: "Agenda acuática, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Bienvenidos_Apolo_Madidi.jpg" },
        { archivo: "fuente-en-la-plaza-principal-en-el-municipio-de-ap.jpg", icono: "⛲", leyenda: "La fuente de la plaza principal", credito: "Agenda acuática, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Fuente_en_la_plaza_principal_en_el_municipio_de_Apolo.jpg" },
        { archivo: "santos-pariamo-de-lejos.jpg", icono: "🗿", leyenda: "Monumento a Santos Pariamo", credito: "Agenda acuática, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Santos_Pariamo_de_lejos.jpg" }
    ]
};
