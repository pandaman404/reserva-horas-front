import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/routes/Router';

export const AppProvider = () => {
  return <RouterProvider router={router} />;
};
