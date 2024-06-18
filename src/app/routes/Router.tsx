import { createBrowserRouter } from 'react-router-dom';

import CancelBookingPage from '@/features/cancel-patient-booking/CancelBookingPage';
import PatientBookingPage from '@/features/patient-booking/PatientBookingPage';
import NotFoundPage from '@/components/layout/NotFoundPage';
import PatientLayout from '@/components/layout/PatientLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PatientLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <PatientBookingPage />,
      },
      {
        path: '/agendar-hora',
        element: <PatientBookingPage />,
      },
      {
        path: '/anular-hora',
        element: <CancelBookingPage />,
      },
    ],
  },
]);
