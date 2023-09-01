import { useEffect, useState } from 'react';

export const useToast = (visible: boolean) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  const closeToast = () => {
    setShow(false);
  };

  return {
    show,
    closeToast,
  };
};
