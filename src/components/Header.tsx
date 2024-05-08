import Logo from './Logo';
import PageLayout from '../layout/PageLayout';

const Header = () => {
    return (
        <header className='h-48 w-full bg-header bg-cover bg-center lg:h-72'>
            <PageLayout>
                <Logo />
            </PageLayout>
        </header>
    );
};

export default Header;
