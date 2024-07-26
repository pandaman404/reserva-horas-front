import type { AppointmentBooking } from '@/@types/AppointmentBooking';
import type { MedicalCenterId } from '@/@types/MedicalCenter';
import type { SpecialtyId } from '@/@types/Specialty';
import { axiosClient } from '@/lib/axios-client';

export async function getAvailableAppointmentBookings(specialty: SpecialtyId, medicalCenter: MedicalCenterId) {
  try {
    const axiosResponse = await axiosClient.get('/appointmentBookings');
    const data = axiosResponse.data as AppointmentBooking[];
    const availableAppointmentBookings = generateAvailableAppointmentBookings(data, specialty, medicalCenter);
    return availableAppointmentBookings;
  } catch (error) {
    console.error(error);
  }
}

function generateAvailableAppointmentBookings(
  data: AppointmentBooking[],
  specialtyId: SpecialtyId,
  medicalCenterId: MedicalCenterId,
) {
  const availableAppointmentBookings: AppointmentBooking[] = [];
  const currentDate = new Date();

  for (const appointmentBooking of data) {
    if (
      appointmentBooking.available &&
      appointmentBooking.specialty === specialtyId &&
      appointmentBooking.medicalCenter === medicalCenterId
    ) {
      appointmentBooking.day = new Date(appointmentBooking.day);
      if (appointmentBooking.day >= currentDate) {
        availableAppointmentBookings.push(appointmentBooking);
      }
    }
  }

  const sortedAvailableAppointmentBookings = availableAppointmentBookings.sort(
    (a, b) => new Date(a.day).getTime() - new Date(b.day).getTime(),
  );

  return sortedAvailableAppointmentBookings;
}
