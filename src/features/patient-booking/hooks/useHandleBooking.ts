import { useState } from 'react';
import { Booking } from '@/@types/booking';

export function useHandleBooking() {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<Booking>({
    rut: '',
    email: '',
    prevision: '',
    medicalCenter: '',
    area: '',
    doctor: '',
    appointment: new Date(),
  });

  const fillBookingData = (data: Partial<Booking>): void => {
    setBooking({ ...booking, ...data });
  };

  const handleStep = (step: number): void => {
    setStep(step);
  };

  const createNewBooking = async (booking: Booking): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(booking);
  };

  return {
    step,
    booking,
    fillBookingData,
    handleStep,
    createNewBooking,
  };
}
