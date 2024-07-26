import { AppointmentBooking } from '@/@types/AppointmentBooking';
import { axiosClient } from '@/lib/axios-client';

export async function putPatientAppointmentBooking(patientAppointmentBooking: AppointmentBooking) {
  try {
    const { id } = patientAppointmentBooking;
    const axiosResponse = await axiosClient.put(`/appointmentBookings/${id}`, patientAppointmentBooking);
    return axiosResponse;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
