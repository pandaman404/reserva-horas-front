import { AvailableHoursCard } from './AvailableHoursCard';
import { Calendar } from './Calendar';
import { formatDate } from '../utils/format';
import { v4 as uuidv4 } from 'uuid';
import { useBookingCalendar } from '../hooks/useBookingCalendar';

interface PatientBookingPickerProps {
  fillBookingData: (data: any) => void;
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
    <div className='mx-auto flex flex-col items-center gap-5 lg:flex-row lg:items-start lg:gap-10'>
      <Calendar
        selectedCalendarDay={selectedCalendarDay}
        handleSelectedCalendarDay={handleSelectedCalendarDay}
        availableDays={availableDays}
      />
      {selectedCalendarDay && (
        <div className='w-full'>
          <h2 className='w-full rounded bg-primary px-2 py-3 text-center text-lg font-semibold uppercase tracking-widest text-base-100'>
            {formatDate(selectedCalendarDay)}
          </h2>
          {availableAppointments.map((appointments) => {
            return (
              <AvailableHoursCard
                {...appointments}
                handleSelectedAppointment={handleSelectedAppointment}
                key={uuidv4()}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
