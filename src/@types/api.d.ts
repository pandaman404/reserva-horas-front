import { HealthInsurance } from './healthInsurance';
import { MedicalCenter } from './medicalCenter';
import { MedicalSpecialty } from './medicalSpecialty';

export interface ApiResponse {
  record: Record;
  metadata: Metadata;
}

export interface Metadata {
  id: string;
  private: boolean;
  createdAt: Date;
  name: string;
}

export interface Record {
  medicalCenters: MedicalCenter[];
  healthInsurances: HealthInsurance[];
  specialties: MedicalSpecialty[];
}
