interface BookingStepsProps {
  currentStep: number;
}

export const BookingSteps = ({ currentStep }: BookingStepsProps) => {
  console.log(currentStep);
  return (
    <ul className='steps w-full max-w-[768px]'>
      <li
        data-content={currentStep > 1 ? '✓' : '1'}
        className={`step ${currentStep >= 1 && 'step-info'} font-semibold`}
      >
        <span className='hidden text-sm lg:block'>
          Identificación y Especialidad
        </span>
      </li>
      <li
        data-content={currentStep > 2 ? '✓' : '2'}
        className={`step ${currentStep >= 2 && 'step-info'} font-semibold`}
      >
        <span className='hidden text-sm lg:block'>Horas Disponibles</span>
      </li>
      <li
        data-content={currentStep > 3 ? '✓' : '3'}
        className={`step ${currentStep >= 3 ? 'step-info' : ''} font-semibold`}
      >
        <span className='hidden text-sm lg:block'>Confirmar Datos</span>
      </li>
    </ul>
  );
};
