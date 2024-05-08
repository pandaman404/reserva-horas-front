import { createBrowserRouter } from 'react-router-dom';
import ReservarHoraPage from './ReservarHoraPage';
import AnularHoraPage from './AnularHoraPage';
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
                element: <ReservarHoraPage />,
            },
            {
                path: '/anular-hora',
                element: <AnularHoraPage />,
            },
        ],
    },
]);
