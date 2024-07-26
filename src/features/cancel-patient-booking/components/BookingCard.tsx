import type { AppointmentBooking } from '@/@types/AppointmentBooking';
import { getValuesFromDate } from '@/utils/getValuesFromDate';

interface BookingCardProps {
  appointmentBooking: AppointmentBooking;
  cancelBooking: (appointmentBooking: AppointmentBooking) => Promise<void>;
}

export const BookingCard = ({ appointmentBooking, cancelBooking }: BookingCardProps) => {
  const { day, doctor, specialty, medicalCenter } = appointmentBooking;
  const { dayOfWeek, dayOfMonth, month, hourAndMinutes } = getValuesFromDate(new Date(day));
  return (
    <div className='mx-auto w-full max-w-lg overflow-hidden rounded'>
      <h2 className='bg-warning py-2 text-center font-bold uppercase tracking-wider'>
        {`${dayOfWeek} ${dayOfMonth} ${month}`}
      </h2>
      <div className='flex flex-col gap-3 border px-5 py-5 text-sm md:text-base'>
        <p className='flex gap-3'>
          <span className='font-bold'>Hora:</span>
          <span>{hourAndMinutes}</span>
        </p>
        <p className='flex gap-3'>
          <span className='font-bold'>Profesional:</span>
          <span>{doctor}</span>
        </p>
        <p className='flex gap-3'>
          <span className='font-bold'>Especialidad:</span>
          <span>{specialty}</span>
        </p>{' '}
        <p className='flex gap-3'>
          <span className='font-bold'>Lugar:</span>
          <span>{medicalCenter}</span>
        </p>
        <button onClick={() => cancelBooking(appointmentBooking)} className='btn btn-warning mt-2 self-start'>
          Anular hora
        </button>
      </div>
    </div>
  );
};
