import { Outlet } from 'react-router-dom';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const PacienteLayout = () => {
  return (
    <section className='flex min-h-screen flex-col justify-between'>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default PacienteLayout;
