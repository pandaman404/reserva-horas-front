import Logo from '@/components/ui/Logo';
import Navbar from '@/components/ui/NavBar';

const Header = () => {
  return (
    <header className='relative flex h-48 w-full bg-header bg-cover bg-center lg:h-72'>
      <div className='container mx-auto flex h-full flex-col justify-between px-3 xl:px-0'>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
