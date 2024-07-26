import type { Doctor } from './Doctor';
import type { HealthInsurance } from './HealthInsurance';
import type { MedicalCenter } from './MedicalCenter';
import type { Specialty } from './Specialty';

export interface MedicalData {
  centers: MedicalCenter[];
  doctors: Doctor[];
  healthInsurances: HealthInsurance[];
  specialties: Specialty[];
}
