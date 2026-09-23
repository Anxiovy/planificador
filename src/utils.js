import dayjs from 'dayjs';
export function formatearfecha(fecha) {
  const fechaformateada = dayjs(fecha).format('DD/MM/YYYY HH:mm');
  return fechaformateada;
}
export function determinartiempo(tiempo) {
  if (tiempo < 10) {
    return '(baja)';
  } else if (tiempo < 30) {
    return '(media)';
  }
  return '(alta)';
}
