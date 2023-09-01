'use client';

import { CloseIcon } from './icons/CloseIcon';

type Props = {
  title?: string;
  text?: string;
  visible: boolean;
  handleClick: () => void;
  position?: 'bottom-right' | 'bottom-center';
};

export const Toast = ({
  title = 'Special Thanks!!!',
  text = 'ありがとうございました',
  visible,
  handleClick,
  position = 'bottom-center',
}: Props) => {
  return (
    <div
      className={`${visible ? 'scale-100 opacity-100' : ' scale-75 opacity-0'} ${
        position === 'bottom-center' ? 'left-0' : ''
      } fixed z-10  right-0 bottom-4 w-full max-w-xs text-white bg-[#3182ce] shadow-lg rounded-xl p-4 mx-auto ease-in transition-[transform_opacity] duration-200`}
    >
      <button onClick={handleClick} className="absolute top-2 right-2">
        <CloseIcon />
      </button>
      <div className="text-center">
        <div className="font-bold">{title}</div>
        <p>{text}</p>
      </div>
    </div>
  );
};
