import React, { ComponentProps } from 'react';
import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

type InputType = ComponentProps<'input'>['type'];
type FormFieldType = InputType | 'textarea';

type Props<T extends FieldValues> = {
  label: string;
  type: FormFieldType;
  name: Path<T>;
  register: UseFormRegister<T>;
  registerOptions?: RegisterOptions;
  errorMessage?: string;
};

export const FormField = <T extends FieldValues>({
  label,
  type,
  name,
  register,
  registerOptions,
  errorMessage,
}: Props<T>) => {
  return (
    <div className="flex flex-col">
      <span>{label}</span>
      {type === 'textarea' ? (
        <Textarea {...register(name, registerOptions)} error={errorMessage ? true : false} />
      ) : (
        <Input
          type={type}
          {...register(name, registerOptions)}
          error={errorMessage ? true : false}
        />
      )}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};
