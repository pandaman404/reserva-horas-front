import { AppointmentBooking } from '@/@types/AppointmentBooking';
import { axiosClient } from '@/lib/axios-client';

export const getAppointmentsByRut = async (rut: string) => {
  try {
    const axiosResponse = await axiosClient.get('/appointmentBookings');
    const data = axiosResponse.data as AppointmentBooking[];

    const patientAppointments: AppointmentBooking[] = [];
    const currentDate = new Date();

    for (const appointment of data) {
      if (appointment.patientRut === rut) {
        appointment.day = new Date(appointment.day);
        if (appointment.day >= currentDate) {
          patientAppointments.push(appointment);
        }
      }
    }

    const sortedPatientAppointments = patientAppointments.sort(
      (a, b) => new Date(a.day).getTime() - new Date(b.day).getTime(),
    );

    return sortedPatientAppointments;
  } catch (error) {
    console.log(error);
  }
};
