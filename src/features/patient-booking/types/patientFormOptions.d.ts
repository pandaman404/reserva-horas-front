import { HealthInsurance } from '@/@types/healthInsurance';
import { MedicalCenter } from '@/@types/medicalCenter';
import { MedicalSpecialty } from '@/@types/medicalSpecialty';

export type PatientFormOptions = {
  healthInsurances: HealthInsurance[];
  medicalCenters: MedicalCenter[];
  specialties: MedicalSpecialty[];
};
