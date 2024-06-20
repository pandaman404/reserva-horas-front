import { SubmitHandler, useForm } from 'react-hook-form';
import Select from '@/components/forms/Select';
import SubmitButton from '@/components/forms/SubmitButton';
import TextField from '@/components/forms/TextField';
import data from '@/mocks/select.json';
import { Rut } from '@/@types/user';
import { Booking } from '@/@types/booking';
import { validateRutFormat } from '@/utils/validateRut';

type PatientFormFields = {
  rut: Rut;
  email: string;
  prevision: string;
  medicalCenter: string;
  area: string;
};

interface PatientFormProps {
  fillBookingData: (data: Partial<Booking>) => void;
  handleStep: (step: number) => void;
}

export const PatientForm = ({
  fillBookingData,
  handleStep,
}: PatientFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientFormFields>();

  const onSubmit: SubmitHandler<PatientFormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    fillBookingData(data);
    handleStep(2);
  };

  return (
    <form
      className='mx-auto flex w-full max-w-3xl flex-col gap-8 rounded-md border p-5 md:p-10'
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        type='text'
        name='rut'
        placeholder='11111111-1'
        register={register}
        errors={errors}
        fnCustomValidation={validateRutFormat}
      />
      <TextField
        type='email'
        name='email'
        placeholder='awesker@umbrella.org'
        register={register}
        errors={errors}
      />
      <Select
        name='medicalCenter'
        placeholder='Centro de salud'
        register={register}
        errors={errors}
        options={data.centrosSalud}
      />
      <Select
        name='prevision'
        placeholder='Previsión'
        register={register}
        errors={errors}
        options={data.prevision}
      />
      <Select
        name='area'
        placeholder='Especialidad'
        register={register}
        errors={errors}
        options={data.especialidad}
      />

      <SubmitButton text={'Continuar'} isSubmitting={isSubmitting} />
    </form>
  );
};
