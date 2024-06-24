import { getValuesFromDate } from '@/utils/format';
import { AvailableHoursCard } from '@/features/patient-booking/components/AvailableHoursCard';
import { Calendar } from '@/features/patient-booking/components/Calendar';
import { StepBackButton } from '@/features/patient-booking/components/StepBackButton';
import { useBookingCalendar } from '@/features/patient-booking/hooks/useBookingCalendar';
import { Booking } from '@/@types/booking';

interface PatientBookingPickerProps {
  fillBookingData: (data: Partial<Booking>) => void;
  handleStep: (step: number) => void;
}

export const PatientBookingPicker = ({
  fillBookingData,
  handleStep,
}: PatientBookingPickerProps) => {
  const {
    availableDays,
    availableAppointments,
    selectedCalendarDay,
    handleSelectedCalendarDay,
    handleSelectedAppointment,
  } = useBookingCalendar(fillBookingData, handleStep);

  return (
    <div className='mx-auto flex w-full flex-col items-center gap-5 lg:flex-row lg:items-start lg:gap-10'>
      <div>
        <StepBackButton previousStep={1} handleStep={handleStep} />
        <Calendar
          selectedCalendarDay={selectedCalendarDay}
          handleSelectedCalendarDay={handleSelectedCalendarDay}
          availableDays={availableDays}
        />
      </div>
      {selectedCalendarDay && (
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
      )}
    </div>
  );
};
