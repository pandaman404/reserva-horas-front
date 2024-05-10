import ReservarHoraForm from '../components/ReservarHoraForm';

const ReservarHoraPage = () => {
    return (
        <main className='flex-1'>
            <h2 className='relative bg-neutral p-4 text-center text-lg font-semibold uppercase tracking-widest text-white'>
                Reserva de horas
            </h2>
            <div className='container mx-auto my-10 px-3 lg:my-20 xl:px-0'>
                <ReservarHoraForm />
            </div>
        </main>
    );
};

export default ReservarHoraPage;
