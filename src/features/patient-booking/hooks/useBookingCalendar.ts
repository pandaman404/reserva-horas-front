// import { useState } from 'react';
// import { set } from 'date-fns';
// import { Appointment, Booking } from '@/@types/booking';
// import { appointments, availableDays } from '@/mocks/booking-calendar';

// export function useBookingCalendar(
//   fillBookingData: (data: Partial<Booking>) => void,
//   handleStep: (step: number) => void,
// ) {
//   const [selectedCalendarDay, setSelectedCalendarDay] = useState<Date>(availableDays[0]);
//   const [availableAppointments] = useState<Appointment[]>(appointments as Appointment[]);

//   const handleSelectedCalendarDay = (day: Date): void => {
//     setSelectedCalendarDay(day);
//   };

//   const createAppointment = (date: Date, hour: string): Date => {
//     const hourDigits = Number(hour.split(':')[0]);
//     const minutesDigits = Number(hour.split(':')[1]);

//     const appointment = set(date, {
//       hours: hourDigits,
//       minutes: minutesDigits,
//       seconds: 0,
//     });

//     return appointment;
//   };

//   const handleSelectedAppointment = ({ doctorName, day, selectedHour }: Partial<Appointment>): void => {
//     const appointment = createAppointment(day!, selectedHour!);
//     fillBookingData({ doctor: doctorName, appointment });
//     handleStep(3);
//   };

//   return {
//     availableDays,
//     availableAppointments,
//     selectedCalendarDay,
//     handleSelectedCalendarDay,
//     handleSelectedAppointment,
//   };
// }
