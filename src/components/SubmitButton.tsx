type SubmitButtonProps = {
    text: string;
    isSubmitting: boolean;
};

const SubmitButton = ({ text, isSubmitting }: SubmitButtonProps) => {
    return (
        <button
            className='btn btn-primary col-span-2 w-full place-self-center lg:btn-wide'
            disabled={isSubmitting}
            type='submit'
        >
            {isSubmitting ? (
                <span className='loading loading-spinner'></span>
            ) : (
                text
            )}
        </button>
    );
};

export default SubmitButton;
