import type { MedicalData } from '@/@types/MedicalData';
import type { AppointmentBooking } from '@/@types/AppointmentBooking';
import { useEffect, useState } from 'react';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'sonner';
import { getMedicalData } from '../api/get-medical-data';
import { putPatientAppointmentBooking } from '../api/put-new-appointment-booking';

const initialState: AppointmentBooking = {
  id: '',
  patientRut: '',
  patientEmail: '',
  patientHealthInsurance: '',
  medicalCenter: '',
  specialty: '',
  doctor: '',
  day: '',
  available: false,
  status: 'pending',
};

export function useNewBookingAppointment() {
  const [medicalData, setMedicalData] = useState<MedicalData>({} as MedicalData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [newBooking, setNewBooking] = useState<AppointmentBooking>(initialState);

  const modifyNewBooking = (data: Partial<AppointmentBooking>): void => {
    setNewBooking({ ...newBooking, ...data });
  };

  const makeNewBooking = async (): Promise<void> => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await putPatientAppointmentBooking(newBooking);
      if (response && response.status === StatusCodes.OK) {
        setStep(4);
        toast.success('Tu hora ha sido reservada con éxito.');
      } else {
        setIsError(true);
        toast.error('No se ha podido realizar la reserva.');
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const resetNewBooking = () => {
    setNewBooking(initialState);
    setStep(1);
  };

  const loadMedicalData = async (): Promise<void> => {
    setIsError(false);
    setIsLoading(true);
    try {
      const medicalData = await getMedicalData();
      console.log(medicalData);

      if (medicalData && Object.keys(medicalData).length > 0) {
        setMedicalData(medicalData);
        return;
      }

      setIsError(true);
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
    if (step < 4) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  useEffect(() => {
    loadMedicalData();
  }, []);

  return {
    newBooking,
    modifyNewBooking,
    makeNewBooking,
    resetNewBooking,
    step,
    goToPreviousStep,
    goToNextStep,
    isLoading,
    isError,
    medicalData,
  };
}
