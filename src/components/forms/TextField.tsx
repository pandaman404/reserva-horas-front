import { HTMLInputTypeAttribute } from 'react';
import {
  FieldValues,
  UseFormRegister,
  Path,
  FieldErrors,
} from 'react-hook-form';
import { capitalizeText } from '@/utils/format';

type TextFieldProps<T extends FieldValues> = {
  type: HTMLInputTypeAttribute;
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

const TextField = <T extends FieldValues>({
  type,
  name,
  placeholder,
  register,
  errors,
}: TextFieldProps<T>) => {
  const capitalizeName = capitalizeText(name);

  return (
    <label className='input input-bordered relative flex items-center gap-2 text-sm'>
      {capitalizeName}
      <input
        type={type}
        className='grow'
        placeholder={placeholder}
        {...register(name, {
          required: `${capitalizeName} es requerido`,
        })}
      />
      {errors[name] && (
        <div className='absolute -bottom-6 left-2 text-sm text-error'>
          {errors[name]?.message?.toString()}
        </div>
      )}
    </label>
  );
};

export default TextField;
