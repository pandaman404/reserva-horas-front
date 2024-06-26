import { type Rut } from './user';

export interface Appointment {
  id: AppointmentId;
  medicalCenter: string;
  specialty: string;
  doctor: string;
  patientRut: Rut;
  patientEmail: string;
  patientHealthInsurance: string;
  day: string | Date;
  available: boolean;
  status: Status;
  created_at: string | Date;
}

export type AppointmentId = string;
export type Status = 'pending' | 'confirmed' | 'canceled';
