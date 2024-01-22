export const mesesDelAnio = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const zeroPad = (value) => (value < 10 ? "0" + value : value);

export const getFecha = () => {
  const fecha = new Date();
  const dia = zeroPad(fecha.getDate());
  const mes = zeroPad(fecha.getMonth() + 1);
  const anio = fecha.getFullYear();
  return `${anio}-${mes}-${dia}`;
};

export const getHora = () => {
  const fecha = new Date();
  const hora = zeroPad(fecha.getHours());
  const minuto = zeroPad(fecha.getMinutes());
  const segundo = zeroPad(fecha.getSeconds());
  return `${hora}:${minuto}:${segundo}`;
};

export const getFechaHora = () => {
  const fecha = new Date();
  const dia = zeroPad(fecha.getDate());
  const mes = zeroPad(fecha.getMonth() + 1);
  const anio = fecha.getFullYear();
  const hora = zeroPad(fecha.getHours());
  const minuto = zeroPad(fecha.getMinutes());
  const segundo = zeroPad(fecha.getSeconds());
  return `${anio}-${mes}-${dia} ${hora}:${minuto}:${segundo}`;
};

export const esBisiesto = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};

export const getDiasFeb = (year) => {
  return esBisiesto(year) ? 29 : 28;
};
export const diasDelMes = (year) => {
  return [31, getDiasFeb(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
};
