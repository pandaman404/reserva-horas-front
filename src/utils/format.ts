import { format } from 'date-fns/format';
import { es } from 'date-fns/locale';

export const capitalizeText = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatDate = (date: Date) => {
  const dayOfWeek = format(date, 'EEEE', { locale: es });
  const dayOfMonth = format(date, 'd', { locale: es });
  const month = format(date, 'MMMM', { locale: es });

  return `${capitalizeText(dayOfWeek)} ${dayOfMonth} de ${capitalizeText(month)}`;
};
