import { useEffect, useState } from 'react';
import { useNewBookingContext } from '../context/NewBookingContext';
import { getValuesFromDate } from '@/utils/getValuesFromDate';

interface BookingData {
  doctor: string;
  specialty: string;
  medicalCenter: string;
  dayOfWeek: string;
  dayOfMonth: string;
  month: string;
  hourAndMinutes: string;
}

export function useNewBookingStep3() {
  const { medicalData, newBooking, goToPreviousStep, makeNewBooking, step, resetNewBooking } = useNewBookingContext();
  const [bookingData, setbookingData] = useState<BookingData>({} as BookingData);

  const handlebookingData = (): void => {
    const { dayOfWeek, dayOfMonth, month, hourAndMinutes } = getValuesFromDate(new Date(newBooking.day));
    const doctor = medicalData.doctors?.find((doctor) => doctor.id === newBooking.doctor);
    const specialty = medicalData.specialties?.find((specialty) => specialty.id === newBooking.specialty);
    const medicalCenter = medicalData.medicalCenters?.find(
      (medicalCenter) => medicalCenter?.id === newBooking.medicalCenter,
    );

    setbookingData({
      dayOfWeek,
      dayOfMonth,
      month,
      hourAndMinutes,
      doctor: `${doctor?.name.first} ${doctor?.name.last}`,
      specialty: `${specialty?.name}`,
      medicalCenter: `${medicalCenter?.name}`,
    });
  };

  useEffect(() => {
    handlebookingData();
  }, []);

  return {
    bookingData,
    goToPreviousStep,
    makeNewBooking,
    resetNewBooking,
    step,
  };
}
