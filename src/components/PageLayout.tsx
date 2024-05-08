import { PropsWithChildren } from 'react';

type PageLayoutProps = PropsWithChildren;

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <main className='mx-auto px-3 text-white xl:container sm:px-6 xl:px-0'>
            {children}
        </main>
    );
};

export default PageLayout;
