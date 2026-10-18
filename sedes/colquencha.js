/* ==============================================================
   SEDE COLQUENCHA: los datos de su página (sede.html?sede=colquencha)
   La primera sede de la plataforma, y el modelo para las demás:
   para agregar otra, se copia este archivo y se cambian los datos.
   script.js no se toca.
   ============================================================== */

DATOS_SEDE.colquencha = {

    municipio: "Colquencha",
    ubicacion: "Provincia Aroma, La Paz",
    lema: "Un municipio lleno de cultura, tradición, producción y oportunidades para el futuro.",
    sede: "Sede Universitaria Local Colquencha, del CRU Patacamaya. La primera sede de Conoce y Conecta",

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
       Solo información verificada, con su fuente. Lo que empieza con
       "[COMPLETAR" se ve resaltado: lo escribe el grupo (y borra la
       marca) cuando lo confirme.
       ---------------------------------------------------------- */
    secciones: {
        turismo: [
            "Colquencha es la sexta sección municipal de la provincia Aroma, en el departamento de La Paz: 339 km², a unos 3900 m de altura (Wikipedia, con datos del INE).",
            "[COMPLETAR] El Calvario: dónde está, qué se ve desde arriba y cómo se sube. Con foto.",
            "[COMPLETAR] La iglesia de Colquencha: de qué año es, qué tiene de especial. Con foto.",
            "[COMPLETAR] Otros lugares para visitar (miradores, comunidades, paisajes), cada uno con una línea y una foto."
        ],
        cultura: [
            "[COMPLETAR] Fiesta del 16 de julio: qué se celebra, cómo (entradas, danzas, fraternidades) y dónde.",
            "[COMPLETAR] Fiesta patronal: el santo o la virgen, la fecha y cómo se vive.",
            "[COMPLETAR] Otras fechas importantes del municipio (aniversario, ferias)."
        ],
        produccion: [
            "Papa, y sus derivados deshidratados: chuño y tunta.",
            "Granos andinos: quinua y cebada.",
            "[COMPLETAR] La planta de cerámica: qué produce y desde cuándo.",
            "[COMPLETAR] La minería del municipio: qué se extrae y dónde.",
            "[COMPLETAR] Otros recursos del municipio."
        ],
        educacion: [
            "[COMPLETAR] Las unidades educativas del municipio: nombre y niveles que ofrecen.",
            "[COMPLETAR] Logros de sus estudiantes: olimpiadas, medallas, concursos (con el año y la fuente).",
            "[COMPLETAR] Profesionales y personas destacadas que salieron de Colquencha."
        ],
        umsa: [
            "Sede Universitaria Local Colquencha, del CRU Patacamaya de la Universidad Mayor de San Andrés.",
            "Programa Académico Desconcentrado: Técnico Superior en Informática (Carrera de Informática, Facultad de Ciencias Puras y Naturales).",
            "Colquencha es la primera sede de Conoce y Conecta: Sedes UMSA, la plataforma que hicimos sus estudiantes."
        ]
    },


    /* ----------------------------------------------------------
       5. GALERÍA
       Cada foto va en img/colquencha/ con el nombre de "archivo".
       Mientras falte, se ve el ícono con su leyenda.
       ---------------------------------------------------------- */
    galeria: [
        { archivo: "foto-calvario.jpg",   icono: "⛰️", leyenda: "El Calvario" },
        { archivo: "foto-iglesia.jpg",    icono: "⛪", leyenda: "La iglesia" },
        { archivo: "foto-fiesta.jpg",     icono: "🎭", leyenda: "Fiesta del 16 de julio" },
        { archivo: "foto-produccion.jpg", icono: "🏭", leyenda: "Cerámica y producción" },
        { archivo: "foto-colegio.jpg",    icono: "🏫", leyenda: "Nuestros colegios" },
        { archivo: "foto-sede.jpg",       icono: "🏛️", leyenda: "La sede de la UMSA" }
    ]
};
