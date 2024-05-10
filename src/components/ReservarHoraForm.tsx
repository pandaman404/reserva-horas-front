import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
    rut: string;
    prevision: string;
    centroSalud: string;
    especialidad: string;
};

const ReservarHoraForm = () => {
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
            className='mx-auto flex max-w-3xl flex-col gap-6 rounded-md border p-5 md:p-10 lg:p-10'
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
            {/* {errors.rut && (
                <div className='text-error'>{errors.rut.message}</div>
            )} */}
            <select
                className='select select-bordered w-full'
                {...register('centroSalud')}
                defaultValue={'DEFAULT'}
            >
                <option disabled value='DEFAULT'>
                    Centro de Salud
                </option>
                <option>Raccoon City</option>
                <option>Los Santos</option>
                <option>Pueblo Paleta</option>
            </select>
            <select
                className='select select-bordered w-full'
                {...register('prevision')}
                defaultValue={'DEFAULT'}
            >
                <option disabled value='DEFAULT'>
                    Previsión
                </option>
                <option>Fonasa</option>
                <option>Particular</option>
                <option>Isapre</option>
            </select>
            <select
                className='select select-bordered w-full'
                {...register('especialidad')}
                defaultValue={'DEFAULT'}
            >
                <option disabled value='DEFAULT'>
                    Especialidad
                </option>
                <option>Medicina General</option>
                <option>Oftalmologia</option>
                <option>Radiologia</option>
            </select>
            <button
                className='btn btn-primary lg:btn-wide col-span-2 w-full place-self-center'
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

export default ReservarHoraForm;
