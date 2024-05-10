import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
    rut: string;
};

const AnularReservaForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(data);
    };

    return (
        <form
            className='mx-auto flex max-w-3xl flex-col gap-6 rounded-md border p-5 md:p-10'
            onSubmit={handleSubmit(onSubmit)}
        >
            <label className='input input-bordered flex items-center gap-2 text-sm'>
                Rut
                <input
                    type='text'
                    className='grow'
                    placeholder='1111111-1'
                    {...register('rut', {
                        required: 'Rut es requerido',
                    })}
                />
            </label>
            {errors.rut && (
                <div className='relative left-2 text-error'>
                    {errors.rut.message}
                </div>
            )}
            <button
                className='btn btn-primary col-span-2 w-full place-self-center lg:btn-wide'
                disabled={isSubmitting}
                type='submit'
            >
                {isSubmitting ? (
                    <span className='loading loading-spinner'></span>
                ) : (
                    'Continuar'
                )}
            </button>
        </form>
    );
};

export default AnularReservaForm;
