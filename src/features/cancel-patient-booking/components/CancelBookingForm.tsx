import { SubmitHandler, useForm } from 'react-hook-form';
import TextField from '@/components/forms/TextField';
import SubmitButton from '@/components/forms/SubmitButton';
import { Rut } from '@/@types/user';

type FormFields = {
  rut: Rut;
};

export const CancelBookingForm = () => {
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
      className='mx-auto flex w-full max-w-lg flex-col gap-4 p-5 md:p-10'
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
