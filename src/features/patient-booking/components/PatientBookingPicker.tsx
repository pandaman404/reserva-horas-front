import { type PatientBooking } from '@/@types/booking';
import { getValuesFromDate } from '@/utils/format';
import { AvailableHoursCard } from '@/features/patient-booking/components/AvailableHoursCard';
import { Calendar } from '@/features/patient-booking/components/Calendar';
import { StepBackButton } from '@/features/patient-booking/components/StepBackButton';
import { useNewBookingStep2 } from '../hooks/useNewBookingStep2';
import { Loader } from '@/components/ui/Loader';
import { ErrorMessage } from '@/components/ui/ErrorMessage';

interface PatientBookingPickerProps {
  patientBooking: PatientBooking;
  modifyPatientBooking: (data: Partial<PatientBooking>) => void;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}

export const PatientBookingPicker = ({
  patientBooking,
  modifyPatientBooking,
  goToPreviousStep,
  goToNextStep,
}: PatientBookingPickerProps) => {
  const {
    selectedCalendarDay,
    availableCalendarDays,
    handleSelectedCalendarDay,
    availableAppointments,
    isLoading,
    isError,
  } = useNewBookingStep2(patientBooking, modifyPatientBooking, goToNextStep);

  return isLoading ? (
    <div className='relative top-32 mt-20'>
      <Loader />
    </div>
  ) : !isLoading && (isError || availableAppointments.length === 0) ? (
    <div className='relative top-32 mt-20 flex flex-col gap-5'>
      <ErrorMessage text='No se han encontrado horas disponibles' />
      <StepBackButton goToPreviousStep={goToPreviousStep} />
    </div>
  ) : (
    <div className='mx-auto flex w-full flex-col items-center gap-5 lg:flex-row lg:items-start lg:gap-10'>
      <div>
        <StepBackButton goToPreviousStep={goToPreviousStep} />
        <Calendar
          selectedCalendarDay={selectedCalendarDay}
          handleSelectedCalendarDay={handleSelectedCalendarDay}
          availableDays={availableCalendarDays}
        />
      </div>
      {/* {selectedCalendarDay && (
        <div className='w-full'>
          <h2 className='w-full rounded bg-primary px-2 py-3 text-center text-lg font-semibold uppercase tracking-widest text-base-100'>
            {`${getValuesFromDate(selectedCalendarDay).dayOfMonth} de ${getValuesFromDate(selectedCalendarDay).month}`}
          </h2>
          {availableAppointments.map((appointment) => {
            return (
              <AvailableHoursCard
                {...appointment}
                handleSelectedAppointment={handleSelectedAppointment}
                key={crypto.randomUUID()}
              />
            );
          })}
        </div>
      )} */}
    </div>
  );
};
