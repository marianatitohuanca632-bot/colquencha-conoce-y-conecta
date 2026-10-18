/* ==============================================================
   SEDE COLQUENCHA: los datos de la página del proyecto (index.html)
   Su formato es el modelo de las sedes de la pestaña "Otras sedes":
   para agregar otra, se copia este archivo y se cambian los datos.
   script.js no se toca.
   ============================================================== */

DATOS_SEDE.colquencha = {

    municipio: "Colquencha",
    ubicacion: "Provincia Aroma, La Paz",
    lema: "Un municipio lleno de cultura, tradición, producción y oportunidades para el futuro.",
    sede: "Sede Universitaria Local Colquencha, del CRU Patacamaya",

    // Fondo del inicio de la página (la foto del grupo). Si falta, se ve un fondo de color.
    fondo: "img/colquencha/paisaje_colquencha.png",


    /* ----------------------------------------------------------
       1. NODOS DEL GRAFO: los lugares
       lat y lon: coordenadas de OpenStreetMap (consulta del 13/10/2026).
       tipo "origen": aparece en la lista de puntos de partida.
       tipo "cruce":  es un punto del camino, no se ofrece como partida.
       tipo "destino": la sede (uno solo).
       mapa: posición en el esquema del mapa (x de 0 a 600, y de 0 a 420).
             Es un esquema, no está a escala: respeta el norte arriba y el
             orden de los lugares, pero acerca a Patacamaya y a Oruro.
       ---------------------------------------------------------- */
    lugares: {
        "La Paz":           { lat: -16.4957, lon: -68.1336, tipo: "origen", detalle: "Plaza Murillo", mapa: { x: 330, y: 45 } },
        "El Alto":          { lat: -16.5036, lon: -68.1627, tipo: "origen", detalle: "La Ceja", mapa: { x: 215, y: 60 } },
        "Río Seco":         { lat: -16.4899, lon: -68.2097, tipo: "origen", detalle: "estación del teleférico, Av. Juan Pablo II", mapa: { x: 95, y: 45 } },
        "Senkata":          { lat: -16.5830, lon: -68.1845, tipo: "origen", detalle: "salida a la carretera La Paz - Oruro", mapa: { x: 215, y: 150 } },
        "Viacha":           { lat: -16.6533, lon: -68.3015, tipo: "origen", detalle: "centro", mapa: { x: 75, y: 175 } },
        "Patacamaya":       { lat: -17.2327, lon: -67.9203, tipo: "origen", detalle: "centro", mapa: { x: 445, y: 350 } },
        "Oruro":            { lat: -17.9698, lon: -67.1148, tipo: "origen", detalle: "centro", mapa: { x: 560, y: 405 } },
        "Cruce Vilaque":    { lat: -16.8459, lon: -68.1527, tipo: "cruce",  detalle: "Nueva Vilaque Copata, carretera La Paz - Oruro", mapa: { x: 265, y: 255 } },
        "Desvío Calamarca": { lat: -16.9079, lon: -68.1201, tipo: "cruce",  detalle: "Ruta Nacional 1, a la altura de Calamarca", mapa: { x: 390, y: 300 } },
        "Colquencha":       { lat: -16.9326, lon: -68.2494, tipo: "destino", detalle: "plaza principal", mapa: { x: 150, y: 330 } }
    },

    destino: "Colquencha",


    /* ----------------------------------------------------------
       2. ARISTAS DEL GRAFO: los tramos de camino
       km y min: distancia y tiempo en auto por carretera, calculados con
       OSRM sobre los mapas de OpenStreetMap el 13/10/2026.
       Son APROXIMADOS: conviene verificarlos en un viaje real.
       Cada tramo sirve en los dos sentidos.
       ---------------------------------------------------------- */
    tramos: [
        { desde: "La Paz",           hasta: "El Alto",          km: 6.3,   min: 9,   via: "la Av. Panamericana" },
        { desde: "Río Seco",         hasta: "El Alto",          km: 6.5,   min: 7,   via: "la Av. Juan Pablo II" },
        { desde: "El Alto",          hasta: "Senkata",          km: 12.3,  min: 15,  via: "la Av. 6 de Marzo" },
        { desde: "El Alto",          hasta: "Viacha",           km: 24.5,  min: 24,  via: "la Av. Ladislao Cabrera y doble vía El Alto - Viacha" },
        { desde: "Río Seco",         hasta: "Viacha",           km: 23.9,  min: 23,  via: "la Av. Periférica y doble vía El Alto - Viacha" },
        { desde: "Senkata",          hasta: "Viacha",           km: 18.5,  min: 18,  via: "la Av. Periférica y doble vía El Alto - Viacha" },
        { desde: "Senkata",          hasta: "Cruce Vilaque",    km: 30.6,  min: 30,  via: "la doble vía La Paz - Oruro" },
        { desde: "Cruce Vilaque",    hasta: "Colquencha",       km: 15.3,  min: 24,  via: "el camino de Machacamarca y Escohoco" },
        { desde: "Cruce Vilaque",    hasta: "Desvío Calamarca", km: 7.8,   min: 8,   via: "la doble vía La Paz - Oruro" },
        { desde: "Desvío Calamarca", hasta: "Colquencha",       km: 15.8,  min: 24,  via: "el camino de Ventilla" },
        { desde: "Patacamaya",       hasta: "Desvío Calamarca", km: 46.6,  min: 46,  via: "la doble vía La Paz - Oruro" },
        { desde: "Oruro",            hasta: "Patacamaya",       km: 128.4, min: 123, via: "la Ruta Nacional 1" },
        { desde: "Viacha",           hasta: "Colquencha",       km: 34.5,  min: 46,  via: "el camino Viacha - Colquencha (sin nombre en el mapa)" }
    ],

    fuenteRutas: "Distancias y tiempos aproximados en auto, calculados con OpenStreetMap (OSRM) el 13/10/2026.",


    /* ----------------------------------------------------------
       3. LAS TARJETAS "RUTAS DE ACCESO" (texto del grupo)
       color: azul, verde o morado.
       ---------------------------------------------------------- */
    accesos: [
        { desde: "El Alto",    icono: "🚌", color: "azul",   detalles: ["Parada Calle 6", "Senkata"] },
        { desde: "Viacha",     icono: "🚗", color: "verde",  detalles: ["Ruta independiente"] },
        { desde: "Patacamaya", icono: "🚙", color: "morado", detalles: ["Por carretera (Cruce Vilaque)", "Desvío Kalamarka"] }
    ],


    /* ----------------------------------------------------------
       4. INFORMACIÓN DE CADA SECCIÓN
       Lo que se muestra al pulsar el botón de cada tarjeta.
       Solo información verificada, con su fuente entre paréntesis.
       Una sección sin datos no se muestra.
       ---------------------------------------------------------- */
    secciones: {
        turismo: [
            "Colquencha es la sexta sección municipal de la provincia Aroma: 339 km², a unos 3900 m de altura, y 12 490 habitantes según el censo de 2024 (Wikipedia, con datos del INE).",
            "La iglesia del Tata de la Exaltación está en lo alto de un cerro: se sube por más de 2000 gradas de piedra y cal, y desde arriba se ven El Alto, Viacha, Calamarca, Sapahaqui y el Illimani (Qamasa, 6 de octubre de 2026).",
            "Según los pobladores, la capilla se construyó hacia 1890: la piedra y la cal se subieron a lomo de burro y de llama. Guarda las imágenes del Tata de la Exaltación y de la Virgen de la Concepción (Qamasa, 2026).",
            "La iglesia será parte del circuito turístico de la provincia Aroma (Qamasa, 2026)."
        ],
        cultura: [
            "Devoción al Tata de la Exaltación: los fieles suben a pie, algunos en ayuno, rezan de rodillas ante la cruz del atrio y entran a la capilla (Qamasa, 2026).",
            "Candelaria (1 y 2 de febrero): el kamana, que cuida los cultivos, entrega a la comunidad las primeras cosechas de papa, cebada y quinua (Iño Daza, revista Prácticas y Discursos, 2026).",
            "Cada 24 de junio se posesiona al Apu Mallku y a la Mama T'alla, la máxima autoridad política y espiritual (Iño Daza, 2026).",
            "Colquencha presentó sus danzas autóctonas en el Festival de Música y Danza Autóctona del departamento de La Paz, junto a los municipios de la provincia Aroma (2012)."
        ],
        produccion: [
            "Agricultura: papa, cebada y quinua; ganadería vacuna (Iño Daza, 2026).",
            "Papa deshidratada: chuño y tunta.",
            "Piedra caliza: se extrae a cielo abierto. La Asociación de Mineros Productores de Piedra Caliza (Amiprocal), con unos 1800 afiliados de Colquencha y Marquirivi, abastece a SOBOCE para fabricar cemento: en 2010 le entregó cerca de 530 000 toneladas (Telecombol, 2011).",
            "La fábrica de cemento de SOBOCE está en Viacha, donde también funcionan unas 100 fábricas de cerámica (Wikipedia, «Viacha»)."
        ],
        educacion: [
            "La Unidad Educativa Eduardo Abaroa tiene, desde 2022, un sistema de agua caliente con energía solar para sus estudiantes (Practical Action, 2022).",
            "En 2011 se abrieron dos telecentros con 40 computadoras en Colquencha y Marquirivi, construidos por SOBOCE y Amiprocal (Telecombol, 2011)."
        ],
        umsa: [
            "Sede Universitaria Local Colquencha, del CRU Patacamaya de la Universidad Mayor de San Andrés.",
            "Programa Académico Desconcentrado: Técnico Superior en Informática (Carrera de Informática, Facultad de Ciencias Puras y Naturales).",
            "En la pestaña «Otras sedes» puedes ver las demás sedes universitarias de la UMSA y cómo llegar a ellas."
        ]
    },


    /* ----------------------------------------------------------
       5. GALERÍA
       Cada foto va en img/colquencha/ con el nombre de "archivo",
       y lleva su crédito: autor y licencia. Las fotos del grupo se
       agregan aquí, con "credito" y sin "pagina".
       ---------------------------------------------------------- */
    galeria: [
        { archivo: "mujeres-horticultoras-de-colquencha.jpg", icono: "🌱", leyenda: "Mujeres horticultoras de Colquencha", credito: "Sandra Aruquipa, CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Mujeres_horticultoras_de_Colquencha.jpg" }
    ]
};
