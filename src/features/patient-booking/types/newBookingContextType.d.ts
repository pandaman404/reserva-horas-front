import { type AppointmentBooking } from '@/@types/AppointmentBooking';
import { type MedicalData } from '@/@types/MedicalData';

export interface NewBookingContextType {
  newBooking: AppointmentBooking;
  step: number;
  medicalData: MedicalData;
  isLoading: boolean;
  isError: boolean;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
  modifyNewBooking: (data: Partial<AppointmentBooking>) => void;
  makeNewBooking: () => Promise<void>;
  resetNewBooking: () => void;
}
