import { ComponentProps, forwardRef } from 'react';
import { FormInputStyle } from '@/components/ui/styles';

type Props = ComponentProps<'input'> & {
  error?: boolean;
};

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { error, ...restProps } = props;

  return (
    <input
      ref={ref}
      {...restProps}
      className={`${FormInputStyle} ${
        error ? 'border-red-200 focus:border-red-200' : 'border-white focus:border-gray-200'
      }`}
    />
  );
});

Input.displayName = 'Input';
