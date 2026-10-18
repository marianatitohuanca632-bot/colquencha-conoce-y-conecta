/* ==============================================================
   SEDE PILLAPI: los datos de su página (index.html?sede=pillapi)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Cada dato de las secciones lleva
   su fuente (sedes-datos/contenido.json); las fotos son de Wikimedia Commons,
   con su autor y su licencia (sedes-datos/fotos.json).
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["pillapi"] = {

    municipio: "Pillapi",

    ubicacion: "Provincia Ingavi, La Paz",

    lema: "Conoce Pillapi, en la provincia Ingavi del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Pillapi, del CRU Achacachi",

    fondo: "img/pillapi/tiwanaku-ruins-of-monumental-gate.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 555, y: 149 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 495, y: 166 } },
        Laja: { lat: -16.5366, lon: -68.3852, tipo: "origen", detalle: "centro", mapa: { x: 367, y: 184 } },
        Viacha: { lat: -16.6533, lon: -68.3015, tipo: "origen", detalle: "centro", mapa: { x: 423, y: 265 } },
        Tiwanaku: { lat: -16.5531, lon: -68.6816, tipo: "origen", detalle: "centro", mapa: { x: 169, y: 195 } },
        Guaqui: { lat: -16.5974, lon: -68.8369, tipo: "origen", detalle: "centro", mapa: { x: 65, y: 226 } },
        Pillapi: { lat: -16.5038, lon: -68.7677, tipo: "destino", detalle: "plaza principal", mapa: { x: 111, y: 161 } }
    },

    destino: "Pillapi",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "La Paz", hasta: "Laja", km: 31.3, min: 34, via: "la Ruta Nacional 1" },
        { desde: "El Alto", hasta: "Laja", km: 25.5, min: 25, via: "la Ruta Nacional 1 y la Ruta Nacional 2" },
        { desde: "El Alto", hasta: "Viacha", km: 22.9, min: 24, via: "la Ruta Nacional 19 y la Ruta Nacional 2" },
        { desde: "Laja", hasta: "Viacha", km: 16.9, min: 22, via: "Camino Laja-Viacha" },
        { desde: "Laja", hasta: "Tiwanaku", km: 37.3, min: 37, via: "la Ruta Nacional 1" },
        { desde: "Laja", hasta: "Guaqui", km: 53.3, min: 51, via: "la Ruta Nacional 1 y el camino Laja-Viacha" },
        { desde: "Tiwanaku", hasta: "Guaqui", km: 20.9, min: 23, via: "la Ruta Nacional 1" },
        { desde: "Tiwanaku", hasta: "Pillapi", km: 11.4, min: 18, via: "Camino Tiawanacu-Santa Rosa de Taraco" },
        { desde: "Guaqui", hasta: "Pillapi", km: 16.2, min: 27, via: "la Ruta Nacional 1 y el camino Tiawanacu-Santa Rosa de Taraco" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por Laja y Tiwanaku", "80,0 km aprox."] },
        { desde: "Viacha", icono: "🚗", color: "verde", detalles: ["Por Laja y Tiwanaku", "65,6 km aprox."] },
        { desde: "Laja", icono: "🚙", color: "morado", detalles: ["Por Tiwanaku", "48,7 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Pillapi es una comunidad del municipio de Tiahuanacu, en la provincia Ingavi (OpenStreetMap).",
            "A unos 11 km está el sitio arqueológico de Tiwanaku, con la Puerta del Sol y el templo de Kalasasaya (Wikimedia Commons).",
            "La plaza de Tiahuanaco, con arcos en sus cuatro esquinas, es la única plaza cerrada que subsiste en el territorio del antiguo Virreinato del Perú (Wikipedia)."
        ],
        cultura: [
            "La mayoría de la población es aimara (Wikipedia)."
        ],
        produccion: [
            "Agricultura: papa, cebada, tarwi, oca y quinua; cría de ganado vacuno y lanar (Wikipedia)."
        ],
        educacion: [],
        umsa: [
            "Sede Universitaria Local Pillapi, del CRU Achacachi de la Universidad Mayor de San Andrés, región Altiplano Norte Lacustre.",
            "Programa: Lic. Ciencias de la Educación para el Desarrollo Sostenible.",
            "Programa: Lic. Administración de Empresas y Organizaciones Públicas.",
            "Fuente de los programas: folleto «Programas académicos» del IDR-DU."
        ]
    },

    galeria: [
        { archivo: "tiwanaku-arqueologia-02.jpg", icono: "🏛️", leyenda: "Tiwanaku, a 11 km de Pillapi", credito: "LAGATANDINA, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Tiwanaku_Arqueologia_02.jpg" },
        { archivo: "tiwanaku-puerta-del-sol.jpg", icono: "🏛️", leyenda: "La Puerta del Sol, en Tiwanaku", credito: "Fallbeth, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Tiwanaku-Puerta_del_sol.jpg" },
        { archivo: "exterior-del-templo-de-kalasasaya-tiwanaku-bolivia.jpg", icono: "🏛️", leyenda: "El templo de Kalasasaya", credito: "Andrea Lastra, CC0", pagina: "https://commons.wikimedia.org/wiki/File:Exterior_del_Templo_de_Kalasasaya_-_Tiwanaku,_Bolivia.jpg" }
    ]
};
