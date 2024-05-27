import { DayMouseEventHandler, DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

interface CalendarProps {
  availableDays: Date[];
  selectedCalendarDay: Date;
  handleSelectedCalendarDay: (day: Date) => void;
}

export const Calendar = ({
  availableDays,
  selectedCalendarDay,
  handleSelectedCalendarDay,
}: CalendarProps) => {
  const handleDayClick: DayMouseEventHandler = (day, { available }) => {
    if (available) {
      handleSelectedCalendarDay(day);
    }
  };

  return (
    <DayPicker
      mode='single'
      locale={es}
      selected={selectedCalendarDay}
      disabled={{ before: new Date() }}
      modifiers={{ available: availableDays }}
      modifiersClassNames={{ available: 'available-day' }}
      onDayClick={handleDayClick}
      classNames={{
        day_selected: 'selected-day',
        day_today: 'today-day',
        day_disabled: 'calendar-btn_disabled',
        button: 'calendar-btn',
        caption_label: 'capitalize font-semibold',
      }}
    />
  );
};
