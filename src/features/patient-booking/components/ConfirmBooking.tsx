import { CalendarIcon } from '@/components/icons/CalendarIcon';
import { StepBackButton } from '@/features/patient-booking/components/StepBackButton';
import { useNewBookingStep3 } from '../hooks/useNewBookingStep3';
import { NavigateButton } from '@/components/router/NavigateButton';

export const ConfirmBooking = () => {
  const { bookingData, goToPreviousStep, makeNewBooking, step, resetNewBooking } = useNewBookingStep3();
  const { dayOfWeek, dayOfMonth, month, hourAndMinutes, doctor, specialty, medicalCenter } = bookingData;

  return (
    <div className='mx-auto flex max-w-3xl flex-col flex-wrap items-center justify-center gap-5 rounded-md border  p-5 md:flex-row'>
      <div className='relative w-60'>
        <CalendarIcon size={240} />
        <p className='absolute left-1/2 top-[62px] -translate-x-1/2 text-sm font-black uppercase'>{month}</p>
        <p className='absolute left-1/2 top-[110px] -translate-x-1/2 text-3xl font-bold uppercase'>{dayOfMonth}</p>
        <p className='absolute left-1/2 top-[140px] -translate-x-1/2 capitalize'>{dayOfWeek}</p>
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
          <span>{specialty}</span>
        </p>
        <p className='flex gap-3'>
          <span className='font-bold'>Lugar:</span>
          <span>{medicalCenter}</span>
        </p>
      </div>
      {step === 4 && (
        <p className='mb-5 flex w-full justify-center'>
          <span className='font-semibold text-primary'>Tu hora ha sido reservada con éxito. </span>{' '}
          <span className='text-primary'> Revisa el comprobante en tu correo.</span>
        </p>
      )}

      <div className='flex w-full justify-between'>
        {step === 3 && (
          <>
            <StepBackButton goToPreviousStep={goToPreviousStep} />
            <button
              className='btn btn-primary col-span-2  place-self-center rounded-full lg:btn-wide'
              onClick={makeNewBooking}
            >
              Reservar Hora
            </button>
          </>
        )}
        {step === 4 && (
          <>
            <button
              className='btn btn-primary col-span-2  place-self-center rounded-full lg:btn-wide'
              onClick={resetNewBooking}
            >
              Nueva Reserva
            </button>
            <NavigateButton route='/anular-hora'>
              <button className='btn btn-warning col-span-2 place-self-center rounded-full lg:btn-wide'>
                Anular Reserva
              </button>
            </NavigateButton>
          </>
        )}
      </div>
    </div>
  );
};
