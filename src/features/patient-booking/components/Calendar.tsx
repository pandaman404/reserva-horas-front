import { DayMouseEventHandler, DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

export interface CalendarProps {
  availableDays: Date[];
  selectedCalendarDay: Date;
  handleSelectedCalendarDay: (day: Date) => void;
}

export const Calendar = ({ availableDays, selectedCalendarDay, handleSelectedCalendarDay }: CalendarProps) => {
  const handleDayClick: DayMouseEventHandler = (day, { available }) => {
    if (available) {
      console.log(day);
      handleSelectedCalendarDay(day);
    }
  };

  return (
    <DayPicker
      mode='single'
      locale={es}
      selected={selectedCalendarDay}
      disabled={{ before: availableDays[0] }}
      modifiers={{ available: availableDays }}
      modifiersClassNames={{ available: 'available-day' }}
      onDayClick={handleDayClick}
      classNames={{
        day_selected: 'selected-day',
        day_disabled: 'calendar-btn_disabled',
        button: 'calendar-btn',
        caption_label: 'capitalize font-semibold',
      }}
    />
  );
};
