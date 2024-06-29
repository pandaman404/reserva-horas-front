interface StepBackButtonProps {
  goToPreviousStep: () => void;
}

export const StepBackButton = ({ goToPreviousStep }: StepBackButtonProps) => {
  return (
    <button className='uppercase text-secondary' onClick={goToPreviousStep}>
      &lt; Volver
    </button>
  );
};
