import { useEffect, useRef, useState } from 'react';
import { LottieRefCurrentProps } from 'lottie-react';
import { incrementReadCount } from '@/libs/microcms/server';
import animationData from '@/public/lottie/lottie-sending.json';

export const useReadButton = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [loop, setLoop] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(true);
  const [showToast, setShowToast] = useState<boolean>(false);

  const options = {
    animationData,
    loop,
    autoplay: false,
    lottieRef,
  };

  useEffect(() => {
    if (loop) {
      lottieRef?.current?.playSegments([42, 96], true);
      return;
    } else if (checked) {
      lottieRef?.current?.playSegments([97, 120], true);
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
    setShowToast(true);
    lottieRef?.current?.destroy();
  };

  const handleCloseClick = () => {
    setShowToast(false);
  };

  return {
    checked,
    showText,
    options,
    lottieRef,
    showToast,
    handleReadButtonClick,
    handleCompleteAnimation,
    handleCloseClick,
  };
};
