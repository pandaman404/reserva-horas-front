import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/routes/Router';
import { Toaster } from 'sonner';

export const AppProvider = () => {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
};
