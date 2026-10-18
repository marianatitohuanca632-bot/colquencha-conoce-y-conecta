/* ==============================================================
   SEDE PUERTO ACOSTA: los datos de su página (sede.html?sede=puerto-acosta)
   GENERADO por sedes-datos/escribir.py el 17/10/2026: lugares de OpenStreetMap
   (Nominatim), tramos por carretera de OSRM y el resumen del municipio de
   Wikipedia. Las distancias son APROXIMADAS. Lo que dice [COMPLETAR] lo
   escribe quien conozca el municipio, con información verificada.
   Mismo formato que sedes/colquencha.js: ver los comentarios de ese archivo.
   ============================================================== */

DATOS_SEDE["puerto-acosta"] = {

    municipio: "Puerto Acosta",

    ubicacion: "Provincia Eliodoro Camacho, La Paz",

    lema: "Conoce Puerto Acosta, en la provincia Eliodoro Camacho del departamento de La Paz, y cómo llegar.",

    sede: "Sede Universitaria Local Puerto Acosta, del CRU Achacachi",

    fondo: "img/puerto-acosta/paisaje.jpg",

    lugares: {
        "La Paz": { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 508, y: 365 } },
        "El Alto": { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 448, y: 382 } },
        Batallas: { lat: -16.2993, lon: -68.5317, tipo: "origen", detalle: "centro", mapa: { x: 360, y: 318 } },
        Huarina: { lat: -16.1907, lon: -68.601, tipo: "origen", detalle: "centro", mapa: { x: 327, y: 265 } },
        Achacachi: { lat: -16.0439, lon: -68.685, tipo: "origen", detalle: "centro", mapa: { x: 298, y: 210 } },
        Ancoraimes: { lat: -15.8975, lon: -68.9056, tipo: "origen", detalle: "centro", mapa: { x: 234, y: 172 } },
        Carabuco: { lat: -15.7583, lon: -69.0644, tipo: "origen", detalle: "centro", mapa: { x: 185, y: 135 } },
        Escoma: { lat: -15.6614, lon: -69.129, tipo: "origen", detalle: "centro", mapa: { x: 155, y: 80 } },
        "Puerto Acosta": { lat: -15.5329, lon: -69.2524, tipo: "destino", detalle: "plaza principal", mapa: { x: 110, y: 38 } }
    },

    destino: "Puerto Acosta",

    tramos: [
        { desde: "La Paz", hasta: "El Alto", km: 7.5, min: 11, via: "la autopista La Paz - El Alto" },
        { desde: "El Alto", hasta: "Batallas", km: 49.4, min: 46, via: "la Ruta Nacional 2" },
        { desde: "Batallas", hasta: "Huarina", km: 15.0, min: 16, via: "la Ruta Nacional 2" },
        { desde: "Huarina", hasta: "Achacachi", km: 19.8, min: 20, via: "la Ruta Nacional 16" },
        { desde: "Achacachi", hasta: "Ancoraimes", km: 35.9, min: 31, via: "la Ruta Nacional 16" },
        { desde: "Ancoraimes", hasta: "Carabuco", km: 25.7, min: 24, via: "la Ruta Nacional 16" },
        { desde: "Carabuco", hasta: "Escoma", km: 13.3, min: 17, via: "la Ruta Nacional 16" },
        { desde: "Escoma", hasta: "Puerto Acosta", km: 24.5, min: 28, via: "caminos locales" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 17/10/2026. Conviene verificarlos en un viaje real.",

    accesos: [
        { desde: "La Paz", icono: "🚌", color: "azul", detalles: ["Por El Alto, Batallas, Huarina, Achacachi, Ancoraimes, Carabuco y Escoma", "191,1 km aprox."] },
        { desde: "Achacachi", icono: "🚗", color: "verde", detalles: ["Por Ancoraimes, Carabuco y Escoma", "99,4 km aprox."] },
        { desde: "Batallas", icono: "🚙", color: "morado", detalles: ["Por Huarina, Achacachi, Ancoraimes, Carabuco y Escoma", "134,2 km aprox."] }
    ],

    secciones: {
        turismo: [
            "Puerto Acosta es una localidad y municipio de Bolivia, capital de la provincia de Camacho en el departamento de La Paz. Su población era de 1.123 personas en 2001. (Wikipedia, «Puerto Acosta»)",
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
            "Sede Universitaria Local Puerto Acosta, del CRU Achacachi de la Universidad Mayor de San Andrés, región Altiplano Norte Lacustre.",
            "Programa: Lic. Enfermería.",
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
