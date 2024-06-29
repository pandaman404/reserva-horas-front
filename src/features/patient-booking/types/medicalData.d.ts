import { type Doctor } from '@/@types/doctor';
import { type HealthInsurance } from '@/@types/healthInsurance';
import { type MedicalCenter } from '@/@types/medicalCenter';
import { type MedicalSpecialty } from '@/@types/medicalSpecialty';

export interface MedicalData {
  healthInsurances?: HealthInsurance[];
  medicalCenters?: MedicalCenter[];
  specialties?: MedicalSpecialty[];
  doctors?: Doctor[];
}
