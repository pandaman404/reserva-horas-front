import { useState } from 'react';
import { Booking } from '../types';

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

  const fillBookingData = (data: any) => {
    setBooking({ ...booking, ...data });
  };

  const handleStep = (step: number) => {
    setStep(step);
  };

  const createNewBooking = async (booking: Booking) => {
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
