import { AvailableAppointmentsCard } from '@/features/patient-booking/components/AvailableAppointmentsCard';
import { Calendar } from '@/features/patient-booking/components/Calendar';
import { StepBackButton } from '@/features/patient-booking/components/StepBackButton';
import { useNewBookingStep2 } from '../hooks/useNewBookingStep2';
import { Loader } from '@/components/ui/Loader';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { getValuesFromDate } from '@/utils/getValuesFromDate';

export const PatientBookingPicker = () => {
  const {
    selectedCalendarDay,
    availableCalendarDays,
    handleSelectedCalendarDay,
    handleSelectedAppointment,
    availableAppointments,
    isLoading,
    isError,
    goToPreviousStep,
  } = useNewBookingStep2();

  return (
    <div className='mx-auto flex w-full flex-col items-center justify-center gap-5 lg:flex-row lg:items-start lg:gap-10'>
      {isLoading && !isError && (
        <div className='relative top-32'>
          <Loader />
        </div>
      )}
      {isError && (
        <div className='relative top-32 flex flex-col gap-4'>
          <ErrorMessage text='Ups! no hemos podido encontrar horas disponibles' />
          <StepBackButton goToPreviousStep={goToPreviousStep} />
        </div>
      )}
      {!isLoading && !isError && selectedCalendarDay && availableAppointments.length > 0 && (
        <>
          <div>
            <StepBackButton goToPreviousStep={goToPreviousStep} />
            <Calendar
              selectedCalendarDay={selectedCalendarDay}
              handleSelectedCalendarDay={handleSelectedCalendarDay}
              availableDays={availableCalendarDays}
            />
          </div>
          <div className='w-full'>
            <h2 className='w-full rounded bg-primary px-2 py-3 text-center text-lg font-semibold uppercase tracking-widest text-base-100'>
              {`${getValuesFromDate(selectedCalendarDay).dayOfMonth} de ${getValuesFromDate(selectedCalendarDay).month}`}
            </h2>
            {availableAppointments.map((item) => (
              <AvailableAppointmentsCard
                key={crypto.randomUUID()}
                availableAppointments={item}
                selectedCalendarDay={selectedCalendarDay}
                handleSelectedAppointment={handleSelectedAppointment}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
