import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

type SelectProps<T extends FieldValues> = {
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  options: {
    name: string;
  }[];
};

const DEFAULT_VALUE = 'DEFAULT';

const Select = <T extends FieldValues>({
  name,
  placeholder,
  register,
  errors,
  options,
}: SelectProps<T>) => {
  return (
    <div className='relative'>
      <select
        className='select select-bordered w-full'
        {...register(name, {
          validate: (value) =>
            value !== DEFAULT_VALUE || `${placeholder} es requerido`,
        })}
        defaultValue={DEFAULT_VALUE}
      >
        <option disabled value={DEFAULT_VALUE}>
          {placeholder}
        </option>
        {options.map(({ name }) => {
          return (
            <option key={uuidv4()} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      {errors[name] && (
        <div className='absolute -bottom-5 left-2 text-sm text-error'>
          {errors[name]?.message?.toString()}
        </div>
      )}
    </div>
  );
};

export default Select;
