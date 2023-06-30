import { Textarea as CTextarea } from '@chakra-ui/react';
import { TextareaHTMLAttributes } from 'react';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export default function Textarea({ label }: Props) {
  return (
    <label>
      <span className="text-sm">{label}</span>
      <CTextarea size="lg" rows={8} />
    </label>
  );
}
