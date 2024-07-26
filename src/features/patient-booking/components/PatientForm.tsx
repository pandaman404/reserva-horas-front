import { type PatientFormFields } from '../types/patientFormFields';
import { useForm } from 'react-hook-form';
import Select from '@/components/forms/Select';
import SubmitButton from '@/components/forms/SubmitButton';
import TextField from '@/components/forms/TextField';
import { validateRutFormat } from '@/utils/validateRut';
import { useNewBookingStep1 } from '../hooks/useNewBookingStep1';

export const PatientForm = () => {
  const { centers, healthInsurances, specialties, onSubmit } = useNewBookingStep1();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientFormFields>();

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
      <TextField type='email' name='email' placeholder='awesker@umbrella.org' register={register} errors={errors} />
      <Select
        name='medicalCenter'
        placeholder='Centro de salud'
        register={register}
        errors={errors}
        options={centers!}
      />
      <Select
        name='healthInsurance'
        placeholder='Previsión'
        register={register}
        errors={errors}
        options={healthInsurances!}
      />
      <Select name='specialty' placeholder='Especialidad' register={register} errors={errors} options={specialties!} />

      <SubmitButton text={'Continuar'} isSubmitting={isSubmitting} />
    </form>
  );
};
