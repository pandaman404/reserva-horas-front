import { type Appointment } from '@/@types/appointment';
import { type MedicalData } from '../types/medicalData';
import { useEffect, useState } from 'react';
import { getDoctors } from '../api/get-doctors';
import { getMedicalData } from '../api/get-medical-data';

export function useNewBooking() {
  const [medicalData, setMedicalData] = useState<MedicalData>({} as MedicalData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [newBooking, setNewBooking] = useState<Appointment>({
    id: '',
    patientRut: '',
    patientEmail: '',
    patientHealthInsurance: '',
    medicalCenter: '',
    specialty: '',
    doctor: '',
    day: '',
    available: true,
    status: 'pending',
    created_at: '',
  });

  const modifyNewBooking = (data: Partial<Appointment>): void => {
    setNewBooking({ ...newBooking, ...data });
  };

  const loadMedicalData = async (): Promise<void> => {
    setIsError(false);
    setIsLoading(true);
    try {
      const doctorsResponse = await getDoctors();
      const medicalDataResponse = await getMedicalData();

      if (
        doctorsResponse &&
        doctorsResponse.length > 0 &&
        medicalDataResponse &&
        Object.keys(medicalDataResponse).length > 0
      ) {
        const newMedicalData: MedicalData = { ...medicalDataResponse, doctors: doctorsResponse };
        setMedicalData(newMedicalData);
        console.log(newMedicalData);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

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

  useEffect(() => {
    loadMedicalData();
  }, []);

  useEffect(() => {
    console.log(newBooking);
  }, [newBooking]);

  return {
    newBooking,
    modifyNewBooking,
    step,
    goToPreviousStep,
    goToNextStep,
    isLoading,
    isError,
    medicalData,
  };
}
