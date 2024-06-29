import { type AvailableAppointments, type Appointment } from '@/@types/appointment';
import { type Doctor } from '@/@types/doctor';
import { useEffect, useState } from 'react';
import { getAvailableAppointmentsByParams } from '../api/get-appointments';
import { useNewBookingContext } from '../context/NewBookingContext';
import { set } from 'date-fns';

export function useNewBookingStep2() {
  const { newBooking, modifyNewBooking, goToPreviousStep, goToNextStep, medicalData } = useNewBookingContext();
  const [availableAppointments, setAvailableAppointments] = useState<AvailableAppointments[]>([]);
  const [selectedCalendarDay, setSelectedCalendarDay] = useState<Date | null>(new Date());
  const [availableCalendarDays, setAvailableCalendarDays] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getAvailableAppointments = (appointments: Appointment[], doctors: Doctor[]): void => {
    const availableAppointments: AvailableAppointments[] = [];

    appointments.forEach((appointment) => {
      const doctor = doctors.find((doctor) => doctor.id === appointment.doctor);

      if (doctor) {
        const index = availableAppointments.findIndex(
          (availableAppointment) => availableAppointment.doctorId === doctor.id,
        );

        if (index != -1) {
          availableAppointments[index].appointments.push(appointment);
          return;
        }

        availableAppointments.push({
          doctorId: doctor.id,
          doctorName: `${doctor.name.first} ${doctor.name.last}`,
          doctorImage: doctor.image,
          medicalCenter: doctor.medicalCenter,
          specialty: doctor.specialty,
          appointments: [appointment],
        } as AvailableAppointments);
      }
    });

    setAvailableAppointments(availableAppointments);
  };

  const getCalendarDays = (appointments: Appointment[]): void => {
    const uniqueDates = new Set();

    appointments.forEach((appointment) => {
      const { day } = appointment;
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

  const handleSelectedAppointment = (appointment: Appointment): void => {
    const selectedAppointment = { ...appointment };
    selectedAppointment.patientRut = newBooking.patientRut;
    selectedAppointment.patientEmail = newBooking.patientEmail;
    selectedAppointment.patientHealthInsurance = newBooking.patientHealthInsurance;
    modifyNewBooking(selectedAppointment);
    goToNextStep();
  };

  const loadDoctorsAndAppointments = async (specialty: string, medicalCenter: string): Promise<void> => {
    setIsError(false);
    setIsLoading(true);
    try {
      const appointmentsRes = await getAvailableAppointmentsByParams(specialty, medicalCenter);
      if (appointmentsRes && appointmentsRes.length > 0) {
        getAvailableAppointments(appointmentsRes, medicalData.doctors!);
        getCalendarDays(appointmentsRes);
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
    loadDoctorsAndAppointments(newBooking.specialty, newBooking.medicalCenter);
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
