import { type Appointment } from './appointment';
import { type Doctor } from './doctor';
import { type HealthInsurance } from './healthInsurance';
import { type MedicalCenter } from './medicalCenter';
import { type MedicalSpecialty } from './medicalSpecialty';

export interface Metadata {
  id: string;
  private: boolean;
  createdAt: Date;
  name: string;
}

export interface ApiResponseMedicalData {
  record: {
    medicalCenters: MedicalCenter[];
    healthInsurances: HealthInsurance[];
    specialties: MedicalSpecialty[];
  };
  metadata: Metadata;
}

export interface ApiResponseAppointments {
  record: {
    appointments: Appointment[];
  };
  metadata: Metadata;
}

export interface ApiResponseDoctors {
  record: {
    doctors: Doctor[];
  };
  metadata: Metadata;
}
