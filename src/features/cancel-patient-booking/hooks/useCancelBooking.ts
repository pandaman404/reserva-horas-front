import { useState } from 'react';
import { getAppointmentsByRut } from '../api/get-appointments-by-rut';
import { putCancelBooking } from '../api/put-cancel-booking';
import { AppointmentBooking } from '@/@types/AppointmentBooking';
import { StatusCodes } from 'http-status-codes';

export function useCancelBooking() {
  const [results, setResults] = useState<AppointmentBooking[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const searchAppointments = async (rut: string): Promise<void> => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await getAppointmentsByRut(rut);
      console.log(response);
      setResults(response ? response : []);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelBooking = async (appointmentBooking: AppointmentBooking): Promise<void> => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await putCancelBooking(appointmentBooking);
      if (response && response.status === StatusCodes.OK) {
        const newResults = results?.filter((result) => result.id !== appointmentBooking.id);
        setResults(newResults ?? []);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    results,
    isLoading,
    isError,
    searchAppointments,
    cancelBooking,
  };
}
