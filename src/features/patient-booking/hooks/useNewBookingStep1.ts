import { type PatientBooking } from '@/@types/booking';
import { type PatientFormOptions } from '../types/patientFormOptions';
import { type PatientFormFields } from '../types/patientFormFields';
import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { getMedicalData } from '../api/get-medical-data';

export function useNewBookingStep1(
  modifyPatientBooking: (data: Partial<PatientBooking>) => void,
  goToNextStep: () => void,
) {
  const [patientFormOptions, setPatientFormOptions] = useState<PatientFormOptions>({} as PatientFormOptions);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit: SubmitHandler<PatientFormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    modifyPatientBooking(data);
    goToNextStep();
  };

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    getMedicalData()
      .then((response) => {
        if (response) {
          setPatientFormOptions(response);
        } else {
          setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    patientFormOptions,
    isLoading,
    isError,
    onSubmit,
  };
}
