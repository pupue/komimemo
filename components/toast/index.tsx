'use client';

import { useToast } from './useToast';
import { CloseIcon } from '@/components/ui/icons/CloseIcon';

type Props = {
  title?: string;
  text: string;
  visible: boolean;
  status: 'success' | 'error';
  position?: 'bottom-right' | 'bottom-center';
};

export const Toast = ({ title, text, visible, status, position = 'bottom-center' }: Props) => {
  const { show, closeToast } = useToast(visible);

  return (
    <div
      className={`${show ? 'scale-100 opacity-100' : ' scale-75 opacity-0'} ${
        status === 'success' ? 'bg-[#3182ce]' : 'bg-[#ce4231]'
      } ${
        position === 'bottom-center' ? 'left-0 right-0' : 'right-4'
      } fixed z-10 bottom-4 w-full max-w-xs text-white shadow-lg rounded-xl p-4 mx-auto ease-in transition-[transform_opacity] duration-200`}
    >
      <button type="button" onClick={closeToast} className="absolute top-2 right-2">
        <CloseIcon />
      </button>
      <div className="text-center">
        {title && <p className="font-bold">{title}</p>}
        <p>{text}</p>
      </div>
    </div>
  );
};
