import { getReadCount, updateReadCount } from '@/libs/microcms/server';
import { useToast } from '@chakra-ui/react';
import { LottieRefCurrentProps } from 'lottie-react';
import { useRef, useState } from 'react';

export const useReadButton = () => {
  const toast = useToast();
  const [checked, setChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handleClick = async (id: string) => {
    if (lottieRef.current) {
      lottieRef.current.goToAndPlay(0, false);
    }

    if (checked) {
      return;
    }

    if (!isLoading) {
      setIsLoading(true);
      try {
        const currentReadCount = await getReadCount(id);
        await updateReadCount(id, currentReadCount + 1);
        setChecked(true);
        toast({
          title: 'Special Thanks!!!',
          description: 'ありがとうございます❤︎',
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: 'Error',
          description: 'エラーが発生しました',
          isClosable: true,
          status: 'error',
        });
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    lottieRef,
    handleClick,
  };
};
