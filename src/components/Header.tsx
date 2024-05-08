import Logo from './Logo';
import PageLayout from './PageLayout';

const Header = () => {
    return (
        <header className='bg-header h-48 w-full bg-cover bg-center lg:h-72'>
            <PageLayout>
                <Logo />
            </PageLayout>
        </header>
    );
};

export default Header;
