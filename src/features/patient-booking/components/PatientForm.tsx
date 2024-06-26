import { type PatientBooking } from '@/@types/booking';
import { type PatientFormFields } from '../types/patientFormFields';
import { useForm } from 'react-hook-form';
import Select from '@/components/forms/Select';
import SubmitButton from '@/components/forms/SubmitButton';
import TextField from '@/components/forms/TextField';
import { validateRutFormat } from '@/utils/validateRut';
import { useNewBookingStep1 } from '../hooks/useNewBookingStep1';
import { Loader } from '@/components/ui/Loader';
import { ErrorMessage } from '@/components/ui/ErrorMessage';

interface PatientFormProps {
  modifyPatientBooking: (data: Partial<PatientBooking>) => void;
  goToNextStep: () => void;
}

export const PatientForm = ({ modifyPatientBooking, goToNextStep }: PatientFormProps) => {
  const { patientFormOptions, isLoading, isError, onSubmit } = useNewBookingStep1(modifyPatientBooking, goToNextStep);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientFormFields>();

  const { medicalCenters, healthInsurances, specialties } = patientFormOptions;

  return isLoading ? (
    <div className='relative top-32 mt-20'>
      <Loader />
    </div>
  ) : isError || Object.keys(patientFormOptions).length === 0 ? (
    <div className='relative top-32 mt-20'>
      <ErrorMessage text='Ups! ha ocurrido un error.' />
    </div>
  ) : (
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
        options={medicalCenters}
      />
      <Select
        name='healthInsurance'
        placeholder='Previsión'
        register={register}
        errors={errors}
        options={healthInsurances}
      />
      <Select name='specialty' placeholder='Especialidad' register={register} errors={errors} options={specialties} />

      <SubmitButton text={'Continuar'} isSubmitting={isSubmitting} />
    </form>
  );
};
