import { Stack, Input as CInput, Textarea, Button } from '@chakra-ui/react';
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

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
