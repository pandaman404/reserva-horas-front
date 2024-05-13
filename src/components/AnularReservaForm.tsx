import { SubmitHandler, useForm } from 'react-hook-form';
import TextField from './TextField';
import SubmitButton from './SubmitButton';

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
            className='mx-auto flex max-w-3xl flex-col gap-8 rounded-md border p-5 md:p-10'
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                type='text'
                name='rut'
                placeholder='111111-1'
                register={register}
                errors={errors}
            />
            <SubmitButton
                text='Buscar horas reservadas'
                isSubmitting={isSubmitting}
            />
        </form>
    );
};

export default AnularReservaForm;
