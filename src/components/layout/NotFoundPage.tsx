import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import notFound from '@/assets/error404.svg';

const NotFoundPage = () => {
  return (
    <section className='flex min-h-screen flex-col justify-between'>
      <Header />
      <div className='mx-auto h-auto w-full max-w-80'>
        <img src={notFound} className='h-full w-full object-cover' />
      </div>
      <Footer />
    </section>
  );
};

export default NotFoundPage;
