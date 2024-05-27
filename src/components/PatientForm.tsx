import { SubmitHandler, useForm } from 'react-hook-form';
import TextField from './TextField';
import Select from './Select';
import SubmitButton from './SubmitButton';

interface PatientFormProps {
  fillBookingData: (data: any) => void;
  handleStep: (step: number) => void;
}

type FormFields = {
  rut: string;
  email: string;
  prevision: string;
  medicalCenter: string;
  area: string;
};

const centrosSalud = [
  {
    id: 1,
    name: 'Raccoon City',
  },
  {
    id: 2,
    name: 'Los Santos',
  },
  {
    id: 3,
    name: 'Pueblo Paleta',
  },
];

const prevision = [
  {
    id: 1,
    name: 'Fonasa',
  },
  {
    id: 2,
    name: 'Particular',
  },
  {
    id: 3,
    name: 'Isapre',
  },
];

const especialidad = [
  {
    id: 1,
    name: 'Medicina General',
  },
  {
    id: 2,
    name: 'Oftalmologia',
  },
  {
    id: 3,
    name: 'Radiologia',
  },
];

export const PatientForm = ({
  fillBookingData,
  handleStep,
}: PatientFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
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
        placeholder='111111-1'
        register={register}
        errors={errors}
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
        options={centrosSalud}
      />
      <Select
        name='prevision'
        placeholder='Previsión'
        register={register}
        errors={errors}
        options={prevision}
      />
      <Select
        name='area'
        placeholder='Especialidad'
        register={register}
        errors={errors}
        options={especialidad}
      />

      <SubmitButton text={'Continuar'} isSubmitting={isSubmitting} />
    </form>
  );
};
