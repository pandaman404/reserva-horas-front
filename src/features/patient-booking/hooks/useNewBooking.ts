import { PatientBooking } from '@/@types/booking';
import { useEffect, useState } from 'react';

export function useNewBooking() {
  const [step, setStep] = useState<number>(1);
  const [patientBooking, setPatientBooking] = useState<PatientBooking>({
    rut: '',
    email: '',
    healthInsurance: '',
    medicalCenter: '',
    specialty: '',
    doctor: '',
    appointment: null,
  });

  const goToPreviousStep = (): void => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const goToNextStep = (): void => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const modifyPatientBooking = (data: Partial<PatientBooking>): void => {
    setPatientBooking({ ...patientBooking, ...data });
  };

  // falta llamar Endpoint para crear reserva

  useEffect(() => {
    console.log(patientBooking);
  }, [patientBooking]);

  return {
    patientBooking,
    modifyPatientBooking,
    step,
    goToPreviousStep,
    goToNextStep,
  };
}
