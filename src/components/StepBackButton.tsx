interface StepBackButtonProps {
  previousStep: number;
  handleStep: (step: number) => void;
}

export const StepBackButton = ({
  previousStep,
  handleStep,
}: StepBackButtonProps) => {
  return (
    <button
      className='uppercase text-secondary'
      onClick={() => handleStep(previousStep)}
    >
      &lt; Volver
    </button>
  );
};
