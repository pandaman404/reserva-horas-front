import { PatientBooking } from '@/@types/booking';
import { useEffect, useState } from 'react';

export function useNewBooking() {
  const [step, setStep] = useState<number>(2);
  const [patientBooking, setPatientBooking] = useState<PatientBooking>({
    rut: '19635606-1',
    email: 'awesker@umbrella.org',
    healthInsurance: 'PREV001',
    medicalCenter: 'CENTER001',
    specialty: 'ESP002',
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
