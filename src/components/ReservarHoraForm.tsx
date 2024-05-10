import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
    rut: string;
    prevision: string;
    centroSalud: string;
    especialidad: string;
};

const centrosSalud = [
    {
        id: 1,
        nombre: 'Raccoon City',
    },
    {
        id: 2,
        nombre: 'Los Santos',
    },
    {
        id: 3,
        nombre: 'Pueblo Paleta',
    },
];

const prevision = [
    {
        id: 1,
        nombre: 'Fonasa',
    },
    {
        id: 2,
        nombre: 'Particular',
    },
    {
        id: 3,
        nombre: 'Isapre',
    },
];

const especialidad = [
    {
        id: 1,
        nombre: 'Medicina General',
    },
    {
        id: 2,
        nombre: 'Oftalmologia',
    },
    {
        id: 3,
        nombre: 'Radiologia',
    },
];

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
            {/* {errors.rut && (
                <div className='text-error'>{errors.rut.message}</div>
            )} */}
            <select
                className='select select-bordered w-full'
                {...register('centroSalud')}
                defaultValue='DEFAULT'
            >
                <option disabled value='DEFAULT'>
                    Centro de Salud
                </option>
                {centrosSalud.map(({ id, nombre }) => {
                    return (
                        <option key={id} value={nombre}>
                            {nombre}
                        </option>
                    );
                })}
            </select>
            <select
                className='select select-bordered w-full'
                {...register('prevision')}
                defaultValue='DEFAULT'
            >
                <option disabled value='DEFAULT'>
                    Previsión
                </option>
                {prevision.map(({ id, nombre }) => {
                    return (
                        <option key={id} value={nombre}>
                            {nombre}
                        </option>
                    );
                })}
            </select>
            <select
                className='select select-bordered w-full'
                {...register('especialidad')}
                defaultValue='DEFAULT'
            >
                <option disabled value='DEFAULT'>
                    Especialidad
                </option>
                {especialidad.map(({ id, nombre }) => {
                    return (
                        <option key={id} value={nombre}>
                            {nombre}
                        </option>
                    );
                })}
            </select>
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

export default ReservarHoraForm;
