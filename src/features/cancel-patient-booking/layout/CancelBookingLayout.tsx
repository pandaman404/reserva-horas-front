import { BookingCard } from '../components/BookingCard';
import { BookingNotFound } from '../components/BookingNotFound';
import { CancelBookingForm } from '../components/CancelBookingForm';
import { useCancelBooking } from '../hooks/useCancelBooking';
import { Loader } from '@/components/ui/Loader';

export const CancelBookingLayout = () => {
  const { results, isLoading, isError, searchAppointments, cancelBooking } = useCancelBooking();
  return (
    <main className='flex-1'>
      <h2 className='relative bg-neutral p-4 text-center text-lg font-semibold uppercase tracking-widest text-white'>
        Anular Reserva
      </h2>
      <div className='flex-start container mx-auto my-10 flex min-h-[70vh] flex-col gap-5 px-3 lg:my-20 lg:flex-row xl:px-0'>
        <CancelBookingForm searchAppointments={searchAppointments} />
        <div className='flex w-full flex-col items-center gap-5 px-5'>
          {results === null && ''}
          {isLoading && !isError && (
            <div className='mt-10'>
              <Loader />
            </div>
          )}
          {!isLoading && results && results.length === 0 && <BookingNotFound />}
          {!isLoading &&
            results &&
            results.length > 0 &&
            results.map((appointment) => {
              return <BookingCard key={crypto.randomUUID()} appointment={appointment} cancelBooking={cancelBooking} />;
            })}
        </div>
      </div>
    </main>
  );
};
