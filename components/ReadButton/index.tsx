'use client';

import { updateRead } from '@/libs/microcms';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animationData from '@/public/lottie/lottie-good.json';
import { useRef, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import styles from './index.module.css';

type Props = {
  id: string;
  count: number;
};

export default function ReadButton({ id, count }: Props) {
  const toast = useToast();
  const [checked, setChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handleClick = async () => {
    if (lottieRef.current) {
      lottieRef.current.goToAndPlay(0, false);
    }

    if (checked) {
      return;
    }

    if (!isLoading) {
      setIsLoading(true);
      await updateRead(id, count + 1)
        .then(() => {
          setChecked(true);
          toast({
            title: 'Special Thanks!!!',
            description: 'ありがとうございます❤︎',
            isClosable: true,
          });
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div>
      <p className={styles.text}>
        最後まで読んでいただきありがとうございます。
        <br />
        もしよければ「読んだよ！」の代わりに↓のボタンを押していってください。
        <br />
        最初のワンクリックがわたしの元に届きます！
      </p>
      <button className="flex w-[160px] mx-auto -mt-8" onClick={handleClick}>
        <Lottie animationData={animationData} loop={false} autoplay={false} lottieRef={lottieRef} />
      </button>
    </div>
  );
}
