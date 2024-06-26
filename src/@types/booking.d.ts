import { type Rut } from './user';

export interface PatientBooking {
  rut: Rut;
  email: string;
  healthInsurance: string;
  medicalCenter: string;
  specialty: string;
  doctor: string;
  appointment: Date | null;
}

export interface Appointment {
  doctorName: string;
  doctorImage: string;
  area: string;
  medicalCenter: string;
  day: Date;
  availableHours: string[];
  selectedHour: string | null;
}
