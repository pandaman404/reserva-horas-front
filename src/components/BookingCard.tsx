export const BookingCard = () => {
  return (
    <div className='mx-auto w-full max-w-lg overflow-hidden rounded'>
      <h2 className='bg-warning py-2 text-center font-bold uppercase tracking-wider'>
        Miércoles 28 Mayo
      </h2>
      <div className='flex flex-col gap-3 border px-5 py-5 text-sm md:text-base'>
        <p className='flex gap-3'>
          <span className='font-bold'>Hora:</span>
          <span>10:40</span>
        </p>
        <p className='flex gap-3'>
          <span className='font-bold'>Profesional:</span>
          <span>Rebecca Chambers</span>
        </p>
        <p className='flex gap-3'>
          <span className='font-bold'>Especialidad:</span>
          <span>Medicina General</span>
        </p>{' '}
        <p className='flex gap-3'>
          <span className='font-bold'>Lugar:</span>
          <span>Raccoon City</span>
        </p>
        <button
          onClick={() => console.log('Hola')}
          className='btn btn-warning mt-2 self-start'
        >
          Anular hora
        </button>
      </div>
    </div>
  );
};
