import { AppointmentBooking } from '@/@types/AppointmentBooking';
import { axiosClient } from '@/lib/axios-client';

export const putCancelBooking = async (appointmentBooking: AppointmentBooking) => {
  try {
    const { id } = appointmentBooking;

    appointmentBooking.available = true;
    appointmentBooking.patientRut = '';
    appointmentBooking.patientEmail = '';
    appointmentBooking.patientHealthInsurance = '';

    const axiosResponse = await axiosClient.put(`/appointmentBookings/${id}`, appointmentBooking);
    return axiosResponse;
  } catch (error) {
    console.log(error);
  }
};
