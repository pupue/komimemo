import { ComponentProps, ReactNode } from 'react';
import { LoadingIcon } from '@/components/ui/icons/LoadingIcon';

type Props = ComponentProps<'button'> & {
  children: ReactNode;
  isLoading?: boolean;
};
export const Button = ({ children, isLoading, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${
        isLoading ? 'min-h-[44px] pointer-events-none opacity-50' : 'pointer-events-auto'
      } leading-5 relative inline-block w-full bg-[#005e94] rounded-md text-white p-3`}
    >
      {isLoading ? (
        <span className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
          <LoadingIcon />
        </span>
      ) : (
        children
      )}
    </button>
  );
};
