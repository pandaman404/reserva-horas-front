import { PatientForm } from '../components/PatientForm';
import { PatientBookingPicker } from '../components/PatientBookingPicker';
import { ConfirmBooking } from '../components/ConfirmBooking';
import { useHandleBooking } from '../hooks/useHandleBooking';
import { BookingSteps } from '../components/BookingSteps';

export const PatientBooking = () => {
  const { booking, fillBookingData, step, handleStep, createNewBooking } =
    useHandleBooking();

  return (
    <main className='flex-1'>
      <h2 className='relative bg-neutral p-4 text-center text-lg font-semibold uppercase tracking-widest text-white'>
        Reserva de horas
      </h2>
      <div className='container mx-auto my-10 flex min-h-[75vh] flex-col items-center gap-5 px-3 lg:my-20 lg:gap-10 xl:px-0'>
        <BookingSteps currentStep={step} />
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
          <ConfirmBooking
            booking={booking}
            createNewBooking={createNewBooking}
            handleStep={handleStep}
          />
        )}
      </div>
    </main>
  );
};
