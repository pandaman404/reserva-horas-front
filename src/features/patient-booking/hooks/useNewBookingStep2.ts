import { type PatientBooking } from '@/@types/booking';
import { type Appointment } from '@/@types/appointment';
import { useEffect, useState } from 'react';
import { getAvailableAppointmentsByParams } from '../api/get-appointments';
import { set } from 'date-fns';

export function useNewBookingStep2(
  patientBooking: PatientBooking,
  modifyPatientBooking: (data: Partial<PatientBooking>) => void,
  goToNextStep: () => void,
) {
  const [availableAppointments, setAvailableAppointments] = useState<Appointment[]>([]);
  const [selectedCalendarDay, setSelectedCalendarDay] = useState<Date>(new Date());
  const [availableCalendarDays, setAvailableCalendarDays] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const getCalendarDays = (availableAppointments: Appointment[]): void => {
    const uniqueDates = new Set();

    availableAppointments.forEach((availableAppointment) => {
      const { day } = availableAppointment;
      if (day instanceof Date) {
        const dateWithoutTime = set(day, { hours: 0, minutes: 0, seconds: 0 }).toISOString();
        uniqueDates.add(dateWithoutTime);
      }
    });

    const uniqueDatesArray: Date[] = [...uniqueDates].map((dateString) => new Date(dateString as string));

    setSelectedCalendarDay(uniqueDatesArray[0]);
    setAvailableCalendarDays(uniqueDatesArray);
  };

  const handleSelectedCalendarDay = (day: Date): void => {
    setSelectedCalendarDay(day);
  };

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getAvailableAppointmentsByParams(patientBooking.specialty, patientBooking.medicalCenter)
      .then((response) => {
        if (response) {
          setAvailableAppointments(response);
          getCalendarDays(response);
        } else {
          setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    availableAppointments,
    selectedCalendarDay,
    availableCalendarDays,
    handleSelectedCalendarDay,
    isLoading,
    isError,
  };
}
