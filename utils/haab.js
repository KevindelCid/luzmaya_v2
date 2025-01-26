const daysInMonth = 20; // Cada mes tiene 20 días
const monthsInYear = 19; // Hay 19 meses, incluyendo el mes de 5 días "Wayeb"
const haabStartDate = new Date("920-11-13"); // La fecha de inicio del calendario Haab

const haabYearDays = 365; // Un año Haab tiene 365 días

// Función que convierte una fecha dada en el calendario Haab a su equivalente mes y día
const haab = (dateString) => {
  const date = new Date(dateString);

  // Calcular el número de días desde el inicio del calendario Haab
  const daysSinceHaabStart = Math.floor(
    (date - haabStartDate) / (1000 * 60 * 60 * 24)
  );
  // Calcular el número de día del año actual en el calendario Haab
  const dayOfYear = daysSinceHaabStart % haabYearDays;

  // Calcular el índice del mes actual en el calendario Haab
  const monthIndex = Math.floor(dayOfYear / daysInMonth);
  // Calcular el número de día actual en el mes actual del calendario Haab
  const dayOfMonth = dayOfYear % daysInMonth;

  // Obtener el nombre del mes actual en el calendario Haab
  const haabMonth = months[monthIndex];
  // Obtener el número de día actual en el calendario Haab
  const haabDay = dayOfMonth;

  // Devolver un objeto con el nombre del mes actual y el número de día actual en el calendario Haab
  return {
    month: haabMonth,
    numberDay: haabDay,
  };
};

const glyphs = [
  "Pop",
  "Wo'",
  "Sip",
  "Sotz'",
  "Sek",
  "Xul",
  "Yaxk'in",
  "Mol",
  "Ch'en",
  "Yax",
  "Sak",
  "Kej",
  "Mak",
  "K'ank'in",
  "Muwan",
  "Pax",
  "K'ayab'",
  "Kumk'u",
  "Wayeb'",
];

const months = [
  "Pop",
  "Wo'",
  "Sip",
  "Sotz'",
  "Sek",
  "Xul",
  "Yaxk'in",
  "Mol",
  "Ch'en",
  "Yax",
  "Sak",
  "Kej",
  "Mak",
  "K'ank'in",
  "Muwan",
  "Pax",
  "K'ayab'",
  "Kumk'u",
  "Wayeb'",
];

const monthGlyphs = [
  glyphs.slice(0, 19),
  glyphs.slice(19, 38),
  glyphs.slice(38, 57),
  glyphs.slice(57, 76),
  glyphs.slice(76, 95),
  glyphs.slice(95, 114),
  glyphs.slice(114, 133),
  glyphs.slice(133, 152),
  glyphs.slice(152, 171),
  glyphs.slice(171, 190),
  glyphs.slice(190, 209),
  glyphs.slice(209, 228),
  glyphs.slice(228, 247),
  glyphs.slice(247, 266),
  glyphs.slice(266, 285),
  glyphs.slice(285, 304),
  glyphs.slice(304, 323),
  glyphs.slice(323, 342),
  ["Uayeb"],
];

// Función que devuelve el índice del grupo de glifos (mes) para un mes dado
const monthGlyphIndex = (month) => {
  for (let i = 0; i < monthGlyphs.length; i++) {
    if (monthGlyphs[i].includes(month)) {
      return i;
    }
  }
};

// Función que devuelve el glifo del primer día del mes para un mes dado
const glyphMonth = (glyph) => {
  for (const monthGlyph of monthGlyphs) {
    if (monthGlyph.includes(glyph)) {
      return monthGlyph[0];
    }
  }
};

// Creamos un arreglo con los números del 0 al 19 (para representar los días)
const days = Array.from(Array(daysInMonth).keys());

// Exportamos todas las funciones y arreglos que hemos creado para poder usarlos en otros archivos
export { haab, glyphs, months, monthGlyphIndex, glyphMonth, days };

// Return the result (No es una función o variable importante, ya que solo es un comentario que indica el final del código)
