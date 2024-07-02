import { type Appointment } from '@/@types/appointment';
import { useState } from 'react';
import { getAppointmentsByRut } from '../api/get-appointments-by-rut';
import { putCancelBooking } from '../api/put-cancel-booking';

export function useCancelBooking() {
  const [results, setResults] = useState<Appointment[] | null>(null);
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

  const cancelBooking = async (appointmentId: string, rut: string): Promise<void> => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await putCancelBooking(appointmentId, rut);
      console.log(response);
      setResults(response ? response : []);
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
