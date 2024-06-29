import { type Appointment } from '@/@types/appointment';
import { type MedicalData } from './medicalData';

export interface NewBookingContextType {
  newBooking: Appointment;
  step: number;
  medicalData: MedicalData;
  isLoading: boolean;
  isError: boolean;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
  modifyNewBooking: (data: Partial<Appointment>) => void;
}
