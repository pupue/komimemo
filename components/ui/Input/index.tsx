import { InputHTMLAttributes } from 'react';
import { Input as CInput } from '@chakra-ui/react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Input({ label, type }: Props) {
  return (
    <label>
      <span className="text-sm">{label}</span>
      <CInput type={type} variant="outline" placeholder="Outline" />
    </label>
  );
}
