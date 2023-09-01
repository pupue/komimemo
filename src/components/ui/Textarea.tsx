import { ComponentProps, forwardRef } from 'react';
import { FormInputStyle } from './styles';

type Props = ComponentProps<'textarea'> & {
  error?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { error, ...restProps } = props;

  return (
    <textarea
      ref={ref}
      {...restProps}
      className={`${FormInputStyle} ${
        error ? 'border-red-200 focus:border-red-200' : 'border-white focus:border-gray-200'
      } min-h-[150px]`}
    />
  );
});

Textarea.displayName = 'Textarea';
