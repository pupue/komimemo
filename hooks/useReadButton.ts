import { getReadCount, incrementReadCount, updateReadCount } from '@/libs/microcms/server';
import { useToast } from '@chakra-ui/react';
import { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
import animationData from '@/public/lottie/lottie-sending.json';

export const useReadButton = () => {
  const toast = useToast();
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [loop, setLoop] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(true);

  const options = {
    animationData,
    loop,
    autoplay: false,
    lottieRef,
  };

  useEffect(() => {
    if (!lottieRef.current) {
      return;
    }

    if (loop) {
      lottieRef.current.playSegments([42, 96], true);
      return;
    } else if (checked) {
      lottieRef.current.playSegments([97, 120], true);
    }
  }, [loop, lottieRef, checked]);

  const handleReadButtonClick = async (id: string) => {
    if (checked || isLoading) {
      return;
    }

    setIsLoading(true);
    setShowText(false);
    setLoop(true);

    try {
      await incrementReadCount(id);
      setChecked(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setLoop(false);
    }
  };

  const handleCompleteAnimation = () => {
    toast({
      title: 'Special Thanks!!!',
      description: 'ありがとうございました❤︎',
      isClosable: true,
    });
  };

  return {
    checked,
    showText,
    options,
    lottieRef,
    handleReadButtonClick,
    handleCompleteAnimation,
  };
};
