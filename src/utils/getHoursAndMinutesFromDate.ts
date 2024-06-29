import { getHours, getMinutes } from 'date-fns';

export function getHoursAndMinutesFromDate(date: Date): string {
  let hours: string | number = getHours(date);
  let minutes: string | number = getMinutes(date);
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}`;
}
