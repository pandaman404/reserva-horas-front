import { getHours, getMinutes } from 'date-fns';
import { format } from 'date-fns/format';
import { es } from 'date-fns/locale';

export function getValuesFromDate(date: Date) {
  const dayOfWeek = format(date, 'EEEE', { locale: es });
  const dayOfMonth = format(date, 'd', { locale: es });
  const month = format(date, 'MMMM', { locale: es });
  const year = format(date, 'yyyy', { locale: es });
  const hourAndMinutes = `${getHours(date) <= 9 ? '0' + getHours(date) : getHours(date)}:${getMinutes(date) <= 9 ? '0' + getMinutes(date) : getMinutes(date)}`;
  return {
    dayOfWeek,
    dayOfMonth,
    month,
    year,
    hourAndMinutes,
  };
}
