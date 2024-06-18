import { useState } from 'react';
import { addDays, set } from 'date-fns';

const availableDays = [
  addDays(new Date(), 1),
  addDays(new Date(), 2),
  addDays(new Date(), 5),
  addDays(new Date(), 8),
];
const availableAppointments = [
  {
    doctorName: 'Rebecca Chambers',
    doctorImage:
      'https://thatarklayplace.com/wp-content/uploads/2020/11/RebeccaChambers_Vendetta.jpg',
    area: 'Medicina General',
    medicalCenter: 'Hospital Raccoon City',
    day: addDays(new Date(), 1),
    hours: ['10:20', '16:00'],
  },
  {
    doctorName: 'William Birkin',
    doctorImage:
      'https://www.residentevildatabase.com/wp-content/uploads/2023/12/william-birkin.jpg',
    area: 'Medicina General',
    medicalCenter: 'Hospital Raccoon City',
    day: addDays(new Date(), 1),
    hours: ['10:00', '10:20', '10:40', '11:00', '12:50', '15:00'],
  },
];

export function useBookingCalendar(
  fillBookingData: (data: any) => void,
  handleStep: (step: number) => void,
) {
  const [selectedCalendarDay, setSelectedCalendarDay] = useState<Date>(
    availableDays[0],
  );

  const handleSelectedCalendarDay = (day: Date) => {
    setSelectedCalendarDay(day);
  };

  const createAppointment = (date: Date, hour: String) => {
    const hourDigits = Number(hour.split(':')[0]);
    const minutesDigits = Number(hour.split(':')[1]);

    const appointment = set(date, {
      hours: hourDigits,
      minutes: minutesDigits,
      seconds: 0,
    });

    return appointment;
  };

  const handleSelectedAppointment = ({ doctor, day, hour }: any) => {
    const appointment = createAppointment(day, hour);
    fillBookingData({ doctor, appointment });
    handleStep(3);
  };

  return {
    availableDays,
    availableAppointments,
    selectedCalendarDay,
    handleSelectedCalendarDay,
    handleSelectedAppointment,
  };
}
