

// Grupos de investigación
const grupos = {
  "quantumquipu": {
    nombre: "Grupo de Investigación QuantumQuipu",
    tipo: "Grupo de Investigación",
    descripcion: "Grupo de la UNMSM enfocado en computación cuántica y divulgación científica.",
    enlace: "https://quantumquipu.unmsm.edu.pe",
    imagen: "https://quantumquipu.unmsm.edu.pe/logo.png"
  },
  "gipc": {
    nombre: "Grupo de Investigación en Física de Partículas y Cosmología (GIPC)",
    tipo: "Grupo de Investigación",
    descripcion: "Grupo dedicado al estudio de la física de partículas y la cosmología en el Perú.",
    enlace: "https://www.gipc.org.pe",
    imagen: "https://www.gipc.org.pe/logo.png"
  }
};

// Misceláneos
const miscelaneos = {
  "cientificos-pe": {
    nombre: "Cientificos.pe",
    tipo: "Misceláneo",
    descripcion: "Plataforma que conecta a científicos peruanos y promueve la investigación y la ciencia en el país.",
    enlace: "https://www.cientificos.pe",
    imagen: "https://www.cientificos.pe/logo.png"
  },
  "colegio-fisicos": {
    nombre: "Colegio de Físicos del Perú",
    tipo: "Misceláneo",
    descripcion: "Institución que agrupa a los profesionales de la física en el Perú, promoviendo la ética y el desarrollo profesional.",
    enlace: "https://www.colegiodefisicos.pe",
    imagen: "https://www.colegiodefisicos.pe/logo.png"
  },
  "aspast": {
    nombre: "Asociación Peruana de Astrobiología (ASPAST)",
    tipo: "Misceláneo",
    descripcion: "Organización dedicada a la promoción y desarrollo de la astrobiología en el Perú.",
    enlace: "https://www.aspast.org.pe",
    imagen: "https://www.aspast.org.pe/logo.png"
  }
};

// Personas
const personas = {
  "juan-perez": {
    nombre: "Juan Pérez",
    tipo: "Persona",
    descripcion: "Investigador peruano, miembro del grupo QuantumQuipu de la UNMSM, especializado en computación cuántica.",
    enlace: "https://juanperez.unmsm.edu.pe",
    imagen: "https://juanperez.unmsm.edu.pe/foto.jpg"
  }
};

// Función para obtener datos por etiqueta
function obtenerDatosPorTag(tag) {
  return (
    universidades[tag] ||
    instituciones[tag] ||
    grupos[tag] ||
    miscelaneos[tag] ||
    personas[tag] ||
    null
  );
}