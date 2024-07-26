import { type Rut } from './user';

export interface AppointmentBooking {
  id: AppointmentBookingId;
  medicalCenter: string;
  specialty: string;
  doctor: string;
  patientRut: Rut;
  patientEmail: string;
  patientHealthInsurance: string;
  day: string | Date;
  available: boolean;
  status: Status;
}

export type AppointmentBookingId = string;
export type Status = 'pending' | 'confirmed' | 'canceled';
