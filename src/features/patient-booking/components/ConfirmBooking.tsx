import { CalendarIcon } from '@heroicons/react/24/outline';
import { getValuesFromDate } from '@/utils/format';
import { StepBackButton } from '@/features/patient-booking/components/StepBackButton';
import { Booking } from '@/@types/booking';

export interface ConfirmBookingProps {
  booking: Booking;
  createNewBooking: (booking: Booking) => void;
  handleStep: (step: number) => void;
}

export const ConfirmBooking = ({
  booking,
  createNewBooking,
  handleStep,
}: ConfirmBookingProps) => {
  const { appointment, doctor, area, medicalCenter } = booking;
  const { dayOfWeek, dayOfMonth, month, hourAndMinutes } = getValuesFromDate(
    appointment!,
  );

  return (
    <div className='mx-auto flex max-w-3xl flex-col flex-wrap items-center justify-center gap-5 rounded-md border  p-5 md:flex-row'>
      <div className='relative w-60'>
        <CalendarIcon height={240} width={240} className='stroke-accent' />
        <p className='absolute left-1/2 top-[62px] -translate-x-1/2 text-sm font-black uppercase'>
          {month}
        </p>
        <p className='absolute left-1/2 top-[110px] -translate-x-1/2 text-3xl font-bold uppercase'>
          {dayOfMonth}
        </p>
        <p className='absolute left-1/2 top-[140px] -translate-x-1/2 capitalize'>
          {dayOfWeek}
        </p>
        <p className='absolute left-1/2 top-[170px] -translate-x-1/2 font-semibold capitalize'>
          Hora: {hourAndMinutes}
        </p>
      </div>
      <div>
        <p className='flex gap-3'>
          <span className='font-bold'>Profesional:</span>
          <span>{doctor}</span>
        </p>
        <p className='flex gap-3'>
          <span className='font-bold'>Especialidad:</span>
          <span>{area}</span>
        </p>
        <p className='flex gap-3'>
          <span className='font-bold'>Lugar:</span>
          <span>{medicalCenter}</span>
        </p>
      </div>
      <div className='flex w-full justify-between'>
        <StepBackButton previousStep={2} handleStep={handleStep} />
        <button
          className='btn btn-primary col-span-2  place-self-center rounded-full lg:btn-wide'
          onClick={() => createNewBooking(booking)}
        >
          Reservar Hora
        </button>
      </div>
    </div>
  );
};
