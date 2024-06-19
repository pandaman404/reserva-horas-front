import { Rut } from './user';

export interface Booking {
  rut: Rut;
  email: string;
  prevision: string;
  medicalCenter: string;
  area: string;
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
