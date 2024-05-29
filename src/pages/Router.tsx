import { createBrowserRouter } from 'react-router-dom';
import { PatientBooking } from './PatientBooking';
import { CancelBooking } from './CancelBooking';

import NotFoundPage from './NotFoundPage';
import PacienteLayout from '../layout/PacienteLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PacienteLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <PatientBooking />,
      },
      {
        path: '/anular-hora',
        element: <CancelBooking />,
      },
    ],
  },
]);
