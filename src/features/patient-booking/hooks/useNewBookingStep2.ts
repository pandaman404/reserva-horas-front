import { useEffect, useState } from 'react';
import { set } from 'date-fns';
import type { AppointmentBooking } from '@/@types/AppointmentBooking';
import type { AvailableAppointmentBookings } from '@/@types/AvailableAppointmentBookings';
import type { Doctor } from '@/@types/Doctor';
import { getAvailableAppointmentBookings } from '../api/get-appointment-booking';
import { useNewBookingContext } from '../context/NewBookingContext';

export function useNewBookingStep2() {
  const { newBooking, modifyNewBooking, goToPreviousStep, goToNextStep, medicalData } = useNewBookingContext();
  const [availableAppointments, setAvailableAppointments] = useState<AvailableAppointmentBookings[]>([]);
  const [selectedCalendarDay, setSelectedCalendarDay] = useState<Date | null>(new Date());
  const [availableCalendarDays, setAvailableCalendarDays] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const formatAvailableAppointmentBookings = (appointmentBookings: AppointmentBooking[], doctors: Doctor[]): void => {
    const availableAppointments: AvailableAppointmentBookings[] = [];

    appointmentBookings.forEach((appointmentBooking) => {
      const doctor = doctors.find((doctor) => doctor.id === appointmentBooking.doctor);

      if (doctor) {
        const index = availableAppointments.findIndex(
          (availableAppointment) => availableAppointment.doctorId === doctor.id,
        );

        if (index != -1) {
          availableAppointments[index].appointments.push(appointmentBooking);
          return;
        }

        availableAppointments.push({
          doctorId: doctor.id,
          doctorName: `${doctor.name.first} ${doctor.name.last}`,
          doctorImage: doctor.image,
          medicalCenter: doctor.medicalCenter,
          specialty: doctor.specialty,
          appointments: [appointmentBooking],
        } as AvailableAppointmentBookings);
      }
    });

    setAvailableAppointments(availableAppointments);
  };

  const getCalendarDays = (appointmentBookings: AppointmentBooking[]): void => {
    const uniqueDates = new Set();

    appointmentBookings.forEach((appointmentBooking) => {
      const { day } = appointmentBooking;
      if (day instanceof Date) {
        const dateWithoutTime = set(day, { hours: 0, minutes: 0, seconds: 0 }).toISOString();
        uniqueDates.add(dateWithoutTime);
      }
    });

    const uniqueDatesArray: Date[] = [...uniqueDates].map((dateString) => new Date(dateString as string));

    setAvailableCalendarDays(uniqueDatesArray);
    setSelectedCalendarDay(uniqueDatesArray[0]);
  };

  const handleSelectedCalendarDay = (day: Date): void => {
    setSelectedCalendarDay(day);
  };

  const handleSelectedAppointment = (appointmentBooking: AppointmentBooking): void => {
    const selectedAppointmentBooking = { ...appointmentBooking };
    selectedAppointmentBooking.patientRut = newBooking.patientRut;
    selectedAppointmentBooking.patientEmail = newBooking.patientEmail;
    selectedAppointmentBooking.patientHealthInsurance = newBooking.patientHealthInsurance;
    selectedAppointmentBooking.available = newBooking.available;
    modifyNewBooking(selectedAppointmentBooking);
    goToNextStep();
  };

  const loadAvailableAppointmentBookings = async (specialty: string, medicalCenter: string): Promise<void> => {
    setIsError(false);
    setIsLoading(true);
    try {
      const appointmentBookingsResponse = await getAvailableAppointmentBookings(specialty, medicalCenter);
      console.log(appointmentBookingsResponse);
      if (appointmentBookingsResponse && appointmentBookingsResponse.length > 0) {
        formatAvailableAppointmentBookings(appointmentBookingsResponse, medicalData.doctors!);
        getCalendarDays(appointmentBookingsResponse);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAvailableAppointmentBookings(newBooking.specialty, newBooking.medicalCenter);
  }, []);

  return {
    availableAppointments,
    selectedCalendarDay,
    availableCalendarDays,
    handleSelectedCalendarDay,
    handleSelectedAppointment,
    goToPreviousStep,
    isLoading,
    isError,
  };
}
