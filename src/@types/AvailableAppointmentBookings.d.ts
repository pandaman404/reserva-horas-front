import type { AppointmentBooking } from './AppointmentBooking';

export interface AvailableAppointmentBookings {
  doctorId: string;
  doctorName: string;
  doctorImage: string;
  medicalCenter: string;
  specialty: string;
  appointments: AppointmentBooking[];
}
