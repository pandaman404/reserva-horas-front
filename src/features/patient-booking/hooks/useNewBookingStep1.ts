import { useNewBookingContext } from '../context/NewBookingContext';
import { type PatientFormFields } from '../types/patientFormFields';
import { SubmitHandler } from 'react-hook-form';

export function useNewBookingStep1() {
  const { medicalData, modifyNewBooking, goToNextStep } = useNewBookingContext();
  const { centers, healthInsurances, specialties } = medicalData;

  const onSubmit: SubmitHandler<PatientFormFields> = (data) => {
    const {
      rut: patientRut,
      email: patientEmail,
      healthInsurance: patientHealthInsurance,
      specialty,
      medicalCenter,
    } = data;
    modifyNewBooking({ patientRut, patientEmail, patientHealthInsurance, specialty, medicalCenter });
    goToNextStep();
  };

  return {
    onSubmit,
    centers,
    healthInsurances,
    specialties,
  };
}
