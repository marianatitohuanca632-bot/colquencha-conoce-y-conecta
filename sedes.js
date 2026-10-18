/* ==============================================================
   LAS SEDES UNIVERSITARIAS DE LA UMSA
   La lista que se ve en el inicio y en la barra de sedes.
   Armada el 17/10/2026 con las páginas del IDR-DU de la UMSA
   (umsa.bo/web/idru-du), que no coinciden entre sí: dan 4 centros
   regionales (CRU) y 15 sedes locales (SUL), 19 en total.
   [COMPLETAR] Confirmar la lista vigente con el IDR-DU antes de la
   feria. La región de las sedes con confirmar: true se asignó por
   su ubicación: no figura en esas páginas.

   id: lo que va en la dirección: sede.html?sede=<id>
   activa: true = ya tiene su archivo de datos en sedes/<id>.js

   CÓMO SE AGREGA UNA SEDE (por ejemplo, Quime):
   1. Copiar sedes/colquencha.js como sedes/quime.js y cambiar sus
      datos: lugares, tramos, accesos, secciones y galería.
   2. En sede.html, agregar <script src="sedes/quime.js"></script>.
   3. Aquí abajo, ponerle activa: true a Quime.
   4. Correr las pruebas: node pruebas/probar.js
   ============================================================== */

// Cada archivo sedes/<id>.js agrega aquí los datos de su sede
const DATOS_SEDE = {};

const SEDES = [
    { id: "patacamaya",        region: "Altiplano Sur",                 nombre: "Patacamaya",       tipo: "CRU" },
    { id: "colquencha",        region: "Altiplano Sur",                 nombre: "Colquencha",       tipo: "SUL", activa: true },
    { id: "quime",             region: "Altiplano Sur",                 nombre: "Quime",            tipo: "SUL" },
    { id: "inquisivi",         region: "Altiplano Sur",                 nombre: "Inquisivi",        tipo: "SUL" },
    { id: "luribay",           region: "Altiplano Sur",                 nombre: "Luribay",          tipo: "SUL", confirmar: true },
    { id: "achacachi",         region: "Altiplano Norte Lacustre",      nombre: "Achacachi",        tipo: "CRU" },
    { id: "pillapi",           region: "Altiplano Norte Lacustre",      nombre: "Pillapi",          tipo: "SUL" },
    { id: "viacha",            region: "Altiplano Norte Lacustre",      nombre: "Viacha",           tipo: "SUL" },
    { id: "copacabana",        region: "Altiplano Norte Lacustre",      nombre: "Copacabana",       tipo: "SUL", confirmar: true },
    { id: "ancoraimes",        region: "Altiplano Norte Lacustre",      nombre: "Ancoraimes",       tipo: "SUL", confirmar: true },
    { id: "huarina",           region: "Altiplano Norte Lacustre",      nombre: "Huarina",          tipo: "SUL", confirmar: true },
    { id: "puerto-acosta",     region: "Altiplano Norte Lacustre",      nombre: "Puerto Acosta",    tipo: "SUL", confirmar: true },
    { id: "chulumani",         region: "Yungas",                        nombre: "Chulumani",        tipo: "CRU" },
    { id: "irupana",           region: "Yungas",                        nombre: "Irupana",          tipo: "SUL" },
    { id: "caranavi",          region: "Yungas",                        nombre: "Caranavi",         tipo: "SUL" },
    { id: "san-buenaventura",  region: "Norte Amazónico",               nombre: "San Buenaventura", tipo: "CRU" },
    { id: "sapecho",           region: "Norte Amazónico",               nombre: "Sapecho",          tipo: "SUL" },
    { id: "ixiamas",           region: "Norte Amazónico",               nombre: "Ixiamas",          tipo: "SUL" },
    { id: "tumupasa",          region: "Norte Amazónico",               nombre: "Tumupasa",         tipo: "SUL", confirmar: true }
];
