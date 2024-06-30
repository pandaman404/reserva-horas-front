import { type NewBookingContextType } from '../types/newBookingContextType';
import { createContext, useContext } from 'react';
import { useNewBooking } from '../hooks/useNewBooking';

export const NewBookingContext = createContext<NewBookingContextType>({} as NewBookingContextType);

export const NewBookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    newBooking,
    medicalData,
    step,
    isLoading,
    isError,
    goToPreviousStep,
    goToNextStep,
    modifyNewBooking,
    makeNewBooking,
    resetNewBooking,
  } = useNewBooking();
  return (
    <NewBookingContext.Provider
      value={{
        newBooking,
        medicalData,
        step,
        isLoading,
        isError,
        goToPreviousStep,
        goToNextStep,
        modifyNewBooking,
        makeNewBooking,
        resetNewBooking,
      }}
    >
      {children}
    </NewBookingContext.Provider>
  );
};

export const useNewBookingContext = () => useContext(NewBookingContext);
