import { useEffect, useState } from 'react';
import { Reserva } from '../types';
import { PatientForm } from '../components/PatientForm';
import { PatientBookingPicker } from '../components/PatientBookingPicker';
import { ConfirmBooking } from '../components/ConfirmBooking';

export const PatientBooking = () => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<Reserva>({
    rut: '',
    email: '',
    prevision: '',
    medicalCenter: '',
    area: '',
    doctor: '',
    appointment: null,
  });

  const fillBookingData = (data: any) => {
    setBooking({ ...booking, ...data });
  };

  const handleStep = (step: number) => {
    setStep(step);
  };

  useEffect(() => {
    console.log(booking);
  }, [booking]);

  return (
    <main className='flex-1'>
      <h2 className='relative bg-neutral p-4 text-center text-lg font-semibold uppercase tracking-widest text-white'>
        Reserva de horas
      </h2>
      <div className='container mx-auto my-10 min-h-[50vh] px-3 lg:my-20 xl:px-0'>
        {step === 1 ? (
          <PatientForm
            fillBookingData={fillBookingData}
            handleStep={handleStep}
          />
        ) : step === 2 ? (
          <PatientBookingPicker
            fillBookingData={fillBookingData}
            handleStep={handleStep}
          />
        ) : (
          <ConfirmBooking />
        )}
      </div>
    </main>
  );
};
