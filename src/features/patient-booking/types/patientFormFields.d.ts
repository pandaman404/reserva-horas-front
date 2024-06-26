import { Rut } from '@/@types/user';

export type PatientFormFields = {
  rut: Rut;
  email: string;
  healthInsurance: string;
  medicalCenter: string;
  specialty: string;
};
