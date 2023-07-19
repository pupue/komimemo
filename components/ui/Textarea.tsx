import { TextareaHTMLAttributes } from 'react';
import { Textarea as CTextarea } from '@chakra-ui/react';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export const Textarea = ({ label }: Props) => {
  return (
    <label>
      <span className="text-sm">{label}</span>
      <CTextarea size="lg" rows={8} />
    </label>
  );
};
