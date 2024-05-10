import AnularReservaForm from '../components/AnularReservaForm';

const AnularHoraPage = () => {
    return (
        <main className='flex-1'>
            <h2 className='relative bg-neutral p-4 text-center text-lg font-semibold uppercase tracking-widest text-white'>
                Anular Reserva
            </h2>
            <div className='container mx-auto my-10 px-3 lg:my-20 xl:px-0'>
                <AnularReservaForm />
            </div>
        </main>
    );
};

export default AnularHoraPage;
