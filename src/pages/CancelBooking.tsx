import { BookingCard } from '../components/BookingCard';
import { BookingNotFound } from '../components/BookingNotFound';
import { CancelBookingForm } from '../components/CancelBookingForm';

export const CancelBooking = () => {
  return (
    <main className='flex-1'>
      <h2 className='relative bg-neutral p-4 text-center text-lg font-semibold uppercase tracking-widest text-white'>
        Anular Reserva
      </h2>
      <div className='flex-start container mx-auto my-10 flex min-h-[70vh] flex-col gap-5 px-3 lg:my-20 lg:flex-row xl:px-0'>
        <CancelBookingForm />
        <div className='flex w-full flex-col items-center gap-5 px-5'>
          <BookingCard />
          <BookingCard />
          {/* <BookingNotFound /> */}
        </div>
      </div>
    </main>
  );
};
