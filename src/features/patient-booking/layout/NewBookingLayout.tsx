import { Loader } from '@/components/ui/Loader';
import { BookingSteps } from '../components/BookingSteps';
import { useNewBookingContext } from '../context/NewBookingContext';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { PatientForm } from '../components/PatientForm';
import { PatientBookingPicker } from '../components/PatientBookingPicker';

export const NewBookingLayout = () => {
  const { step, isLoading, isError, medicalData } = useNewBookingContext();
  const showLoader = (isLoading && !isError) || !medicalData;
  const showError = !isLoading && isError;

  return (
    <main className='flex-1'>
      <h2 className='relative bg-neutral p-4 text-center text-lg font-semibold uppercase tracking-widest text-white'>
        Reserva de horas
      </h2>
      <div className='container mx-auto my-10 flex min-h-[75vh] flex-col items-center gap-5 px-3 lg:my-20 xl:px-0'>
        <BookingSteps currentStep={step} />
        {showLoader && (
          <div className='relative top-32'>
            <Loader />
          </div>
        )}
        {!showLoader && showError && (
          <div className='relative top-32'>
            <ErrorMessage text='Ups! ha ocurrido un error.' />
          </div>
        )}
        {!showLoader && !showError && step === 1 && <PatientForm />}
        {!showLoader && !showError && step === 2 && <PatientBookingPicker />}
        {!showLoader && !showError && step === 3 && <p>step3</p>}
        {/* <ConfirmBooking booking={booking} createNewBooking={createNewBooking} handleStep={handleStep} /> */}
      </div>
    </main>
  );
};
