import { NewBookingProvider } from './context/NewBookingContext';
import { NewBookingLayout } from './layout/NewBookingLayout';

const PatientBookingPage = () => {
  return (
    <NewBookingProvider>
      <NewBookingLayout />
    </NewBookingProvider>
  );
};

export default PatientBookingPage;
