import { SubmitHandler, useForm } from 'react-hook-form';
import TextField from '@/components/forms/TextField';
import SubmitButton from '@/components/forms/SubmitButton';
import { Rut } from '@/@types/user';
import { validateRutFormat } from '@/utils/validateRut';

type FormFields = {
  rut: Rut;
};

interface CancelBookingFormProps {
  searchAppointments: (rut: string) => Promise<void>;
}

export const CancelBookingForm = ({ searchAppointments }: CancelBookingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = ({ rut }) => {
    searchAppointments(rut);
  };

  return (
    <form className='mx-auto flex w-full max-w-lg flex-col gap-9 p-5 md:p-10' onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type='text'
        name='rut'
        placeholder='11111111-1'
        register={register}
        errors={errors}
        fnCustomValidation={validateRutFormat}
      />
      <SubmitButton text='Buscar horas reservadas' isSubmitting={isSubmitting} />
    </form>
  );
};
