/* ==============================================================
   SEDE APOLO: los datos de su página (sede.html?sede=apolo)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Lo que dice [COMPLETAR] lo
   escribe quien conozca el municipio, con información verificada.
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["apolo"] = {

    municipio: "Apolo",

    ubicacion: "Provincia Franz Tamayo, La Paz",

    lema: "Conoce Apolo, en la provincia Franz Tamayo del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Apolo, del CRU San Buenaventura",

    fondo: "img/apolo/paisaje.jpg",

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
            "Apolo es una pequeña ciudad del municipio homónimo y capital de la provincia de Franz Tamayo, ubicada esta en el centro norte del departamento de La Paz (Bolivia). Según el último censo oficial realizado por el Instituto Nacional de Estadística de Bolivia (INE) en 2012, el municipio cuenta con una población de 20.308 habitantes y está situado a una altitud promedio de 1.400 metros sobre el nivel del mar. (Wikipedia, «Apolo (Bolivia)»)",
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
            "Sede Universitaria Local Apolo, del CRU San Buenaventura de la Universidad Mayor de San Andrés, región Norte Amazónico.",
            "Programa: Lic. Administración de Empresas y Organizaciones Públicas.",
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
