/* ==============================================================
   LAS SEDES UNIVERSITARIAS DE LA UMSA
   La lista que se ve en el inicio y en la barra de sedes.
   Fuente: folleto "Programas académicos" del IDR-DU (Instituto de
   Desarrollo Regional y Desconcentración Universitaria de la UMSA):
   "4 Centros Regionales Universitarios y 14 Sedes Universitarias".
   En la copia fotografiada (17/10/2026) se leen 13 sedes locales:
   [COMPLETAR] falta una de las 14. Cajuata no tiene programa listado.

   id: lo que va en la dirección: sede.html?sede=<id>
   activa: true = ya tiene su archivo de datos en sedes/<id>.js
   programas: los que ofrece la sede, según el folleto

   CÓMO SE AGREGA UNA SEDE (por ejemplo, la sede local que falta):
   1. Agregarla aquí abajo, con su id, región, tipo y programas.
   2. Copiar sedes/colquencha.js como sedes/<id>.js, cambiar la primera
      línea a DATOS_SEDE["<id>"] = { y poner sus datos: lugares, tramos,
      accesos, secciones y galería.
   3. En sede.html, agregar <script src="sedes/<id>.js"></script>.
   4. Ponerle activa: true.
   5. Correr las pruebas: node pruebas/probar.js
   ============================================================== */

// Cada archivo sedes/<id>.js agrega aquí los datos de su sede
const DATOS_SEDE = {};

const SEDES = [
    { id: "san-buenaventura", region: "Norte Amazónico", nombre: "San Buenaventura", tipo: "CRU", activa: true,
      programas: ["Lic. Ciencias de la Educación para el Desarrollo Sostenible", "Lic. Arquitectura para la Amazonía", "Lic. Administración de Empresas y Organizaciones Públicas", "Lic. Ingeniería Industrial Amazónica"] },
    { id: "sapecho", region: "Norte Amazónico", nombre: "Sapecho", tipo: "SUL", activa: true,
      programas: ["Lic. Ingeniería Forestal y Maderera", "Técnico Superior en Ciencias Químicas"] },
    { id: "ixiamas", region: "Norte Amazónico", nombre: "Ixiamas", tipo: "SUL", activa: true,
      programas: ["Lic. Ingeniería Agroforestal"] },
    { id: "apolo", region: "Norte Amazónico", nombre: "Apolo", tipo: "SUL", activa: true,
      programas: ["Lic. Administración de Empresas y Organizaciones Públicas"] },
    { id: "patacamaya", region: "Altiplano Sur", nombre: "Patacamaya", tipo: "CRU", activa: true,
      programas: ["Lic. Administración de Empresas y Organizaciones Públicas", "Lic. Ingeniería Agronómica"] },
    { id: "colquencha", region: "Altiplano Sur", nombre: "Colquencha", tipo: "SUL", activa: true,
      programas: ["Técnico Superior en Informática"] },
    { id: "quime", region: "Altiplano Sur", nombre: "Quime", tipo: "SUL", activa: true,
      programas: ["Técnico Superior en Geología de Minas", "Lic. Ingeniería Industrial"] },
    { id: "inquisivi", region: "Altiplano Sur", nombre: "Inquisivi", tipo: "SUL", activa: true,
      programas: ["Lic. Administración de Empresas y Organizaciones Públicas"] },
    { id: "sica-sica", region: "Altiplano Sur", nombre: "Sica Sica", tipo: "SUL", activa: true,
      programas: ["Lic. Administración de Empresas y Organizaciones Públicas"] },
    { id: "chulumani", region: "Yungas", nombre: "Chulumani", tipo: "CRU", activa: true,
      programas: ["Lic. Administración de Empresas y Organizaciones Públicas", "Técnico Superior Contador General"] },
    { id: "caranavi", region: "Yungas", nombre: "Caranavi", tipo: "SUL", activa: true,
      programas: ["Lic. Ciencias de la Educación para el Desarrollo Sostenible", "Lic. Administración de Empresas y Organizaciones Públicas", "Técnico Superior Contador General", "Lic. Ingeniería Industrial Amazónica"] },
    { id: "coripata", region: "Yungas", nombre: "Coripata", tipo: "SUL", activa: true,
      programas: ["Técnico Superior en Ciencias Químicas"] },
    { id: "cajuata", region: "Yungas", nombre: "Cajuata", tipo: "SUL", activa: true,
      programas: [] },
    { id: "achacachi", region: "Altiplano Norte Lacustre", nombre: "Achacachi", tipo: "CRU", activa: true,
      programas: ["Lic. Administración de Empresas y Organizaciones Públicas"] },
    { id: "pillapi", region: "Altiplano Norte Lacustre", nombre: "Pillapi", tipo: "SUL", activa: true,
      programas: ["Lic. Ciencias de la Educación para el Desarrollo Sostenible", "Lic. Administración de Empresas y Organizaciones Públicas"] },
    { id: "viacha", region: "Altiplano Norte Lacustre", nombre: "Viacha", tipo: "SUL", activa: true,
      programas: ["Técnico Superior en Producción Láctea (en proceso de titulación)"] },
    { id: "puerto-acosta", region: "Altiplano Norte Lacustre", nombre: "Puerto Acosta", tipo: "SUL", activa: true,
      programas: ["Lic. Enfermería"] }
];
