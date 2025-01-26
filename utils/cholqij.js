import moment from "moment";
import "moment-timezone";
import "moment/locale/es";
import { haab } from "./haab";
import { nawals } from "./info";

export const usableDate = (year, month, day) => {
  // moment.tz.setDefault("America/Guatemala");
  const date = new Date(year, month, day);
  const formattedDate = moment(date).locale("es").format("YYYY-MM-DD");
  // .format("DD [de] MMMM [de] YYYY");
  return formattedDate;
};
export const prettiDate = (year, month, day) => {
  // moment.tz.setDefault("America/Guatemala");
  const date = new Date(year, month, day);
  const formattedDate = moment(date)
    .locale("es")
    // .format("YYYY-MM-DD");
    .format("DD [de] MMMM [de] YYYY");
  return formattedDate;
};

// export const prettiDate = (year, month, day) => {
//   // No establecer una zona horaria por defecto
//   const date = new Date(year, month - 1, day);
//   // Restamos 1 a month porque Date usa índices de meses desde 0
//   const formattedDate = moment(date)
//     .locale("es")
//     .format("DD [de] MMMM [de] YYYY");
//   return formattedDate;
// };

export const getMayanDate = (dateString) => {
  // restaFechaHoy("1900-03-21")
  const date = new Date(dateString);

  const baseDate = new Date("457-01-18");

  const diff = date.getTime() - baseDate.getTime();
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));

  let nawalIndex = days % 20;
  if (nawalIndex < 0) {
    nawalIndex += 20;
  }
  const nawal = nawals[nawalIndex];

  const energyNawal = (days + 10) % 13; // obtiene el número de energía

  // Obtener nawal auxiliar izquierdo
  let auxiliarIzIndex = (nawalIndex - 6) % 20;
  if (auxiliarIzIndex < 0) {
    auxiliarIzIndex += 20;
  }

  const energyAuxIz = (days + 4) % 13; // obtiene el número de energía

  const auxIz = nawals[auxiliarIzIndex];

  // Obtener nawal auxiliar derecho
  let auxiliarDerIndex = (nawalIndex + 6) % 20;
  if (auxiliarDerIndex < 0) {
    auxiliarDerIndex += 20;
  }
  const energyAuxDer = (days + 3) % 13; // obtiene el número de energía

  const auxDer = nawals[auxiliarDerIndex];

  // Obtener nawal de engendramiento
  let engendramientoIndex = (nawalIndex - 8) % 20;
  if (engendramientoIndex < 0) {
    engendramientoIndex += 20;
  }
  const energyEngendramiento = (days + 2) % 13; // obtiene el número de energía

  const engendramiento = nawals[engendramientoIndex];

  // Obtener nawal de destino
  let destinoIndex = (nawalIndex + 8) % 20;
  if (destinoIndex < 0) {
    destinoIndex += 20;
  }
  const energyDestino = (days + 5) % 13; // obtiene el número de energía

  const destino = nawals[destinoIndex];

  // Obtener nawal de engendramiento auxiliar izquierdo
  let engendramientoAuxIzqIndex = (engendramientoIndex - 6) % 20;
  if (engendramientoAuxIzqIndex < 0) {
    engendramientoAuxIzqIndex += 20;
  }
  const energyEngendramientoAuxIzq = (days + 9) % 13; // obtiene el número de energía

  const engendramientoAuxIzq = nawals[engendramientoAuxIzqIndex];

  // Obtener nawal de engendramiento auxiliar derecho
  let engendramientoAuxDerIndex = (engendramientoIndex + 6) % 20;
  if (engendramientoAuxDerIndex < 0) {
    engendramientoAuxDerIndex += 20;
  }
  const energyEngendramientoAuxDer = (days + 8) % 13; // obtiene el número de energía

  const engendramientoAuxDer = nawals[engendramientoAuxDerIndex];

  // Obtener nawal de destino auxiliar izquierdo
  let destinoAuxIzqIndex = (destinoIndex - 6) % 20;
  if (destinoAuxIzqIndex < 0) {
    destinoAuxIzqIndex += 20;
  }
  const energyDestinoAuxIzq = (days + 12) % 13; // obtiene el número de energía

  const destinoAuxIzq = nawals[destinoAuxIzqIndex];

  // Obtener nawal de destino auxiliar derecho
  let destinoAuxDerIndex = (destinoIndex + 6) % 20;
  if (destinoAuxDerIndex < 0) {
    destinoAuxDerIndex += 20;
  }
  const energyDestinoAuxDer = (days + 11) % 13; // obtiene el número de energía

  const destinoAuxDer = nawals[destinoAuxDerIndex];

  return {
    haab: haab(date.toString()),
    cargador: chargerOfYear(date),
    engendramientoAuxIzq: {
      energy:
        energyEngendramientoAuxIzq === 0 ? 13 : energyEngendramientoAuxIzq,
      nawal: engendramientoAuxIzq,
    },
    engendramiento: {
      energy: energyEngendramiento === 0 ? 13 : energyEngendramiento,
      nawal: engendramiento,
    },
    engendramientoAuxDer: {
      energy:
        energyEngendramientoAuxDer === 0 ? 13 : energyEngendramientoAuxDer,
      nawal: engendramientoAuxDer,
    },
    auxIz: { energy: energyAuxIz === 0 ? 13 : energyAuxIz, nawal: auxIz },
    nawal: { energy: energyNawal === 0 ? 13 : energyNawal, nawal: nawal },
    auxDer: { energy: energyAuxDer === 0 ? 13 : energyAuxDer, nawal: auxDer },
    destinoAuxIzq: {
      energy: energyDestinoAuxIzq === 0 ? 13 : energyDestinoAuxIzq,
      nawal: destinoAuxIzq,
    },
    destino: {
      energy: energyDestino === 0 ? 13 : energyDestino,
      nawal: destino,
    },
    destinoAuxDer: {
      energy: energyDestinoAuxDer === 0 ? 13 : energyDestinoAuxDer,
      nawal: destinoAuxDer,
    },
  };
};

// Define a function that takes a date parameter
const chargerOfYear = (date) => {
  // Define the base date as March 21, 1900, which is 5 No'j in the Mayan calendar
  const baseDate = new Date("1848-04-02"); // 1900-03-21 previous date

  // Calculate the difference in time between the input date and the base date in milliseconds
  const timeDiff = date.getTime() - baseDate.getTime();

  // Convert the time difference to days, counting for leap years
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysDiff = Math.floor(timeDiff / msPerDay);

  // Define the available chargers as an array
  const chargers = ["No'j", "Iq'", "Keej", "E"];

  const years = Math.floor(daysDiff / 365);

  // Calculate the index of the corresponding charger based on the number of days difference
  const chargerIndex = Math.floor(daysDiff / 365) % chargers.length;

  // Retrieve the corresponding charger based on the index
  const charger = chargers[chargerIndex];

  // Calculate the energy number based on the number of days difference
  const energy = (years % 13) + 5; // 5 corresponds to the No'j day on the base date

  // Return an object containing the energy number and the corresponding charger
  return {
    energy: energy % 13 === 0 ? 13 : energy % 13, // Ensure that the energy number is within the range of 1-13
    nawal: charger,
  };
};

function calcular(numeroInicial, numeroASumar) {
  const resultado = (numeroInicial + numeroASumar) % 13;
  return resultado === 0 ? 13 : resultado;
}

function calcularNawalDeIteraciones(nawalInicio, iteraciones) {
  let index = nawals.indexOf(nawalInicio);

  for (let i = 0; i < iteraciones; i++) {
    index = (index + 1) % 20;
  }

  return nawals[index];
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export const getGregorianDate = (energy, nawalFecha) => {
  // moment.tz.setDefault("America/Guatemala");

  const fechaActual = new Date();
  const date = usableDate(
    fechaActual.getFullYear(),
    fechaActual.getMonth(),
    fechaActual.getDate() + 1
  );
  const cholqijToday = getMayanDate(date);

  let days = 0;

  let dateResult = null;
  let lunationsResult = {};

  for (let i = 0; i < 260; i++) {
    days++;
    if (
      calcularNawalDeIteraciones(cholqijToday.nawal.nawal, days) === nawalFecha
    ) {
      if (calcular(cholqijToday.nawal.energy, days) === energy) {
        const newDate = addDays(date, days);
        const resultDate = usableDate(
          newDate.getFullYear(),
          newDate.getMonth(),
          newDate.getDate() + 1
        );

        dateResult = resultDate;

        break;
      }
    }
  }

  return dateResult;
};

// console.log(getGregorianDate(10, "No'j"));
