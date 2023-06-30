'use client';

import Lottie from 'lottie-react';
import animationData from '@/public/lottie/lottie-good.json';
import styles from './index.module.css';
import { useReadButton } from '@/hooks/useReadButton';

type Props = {
  id: string;
};

export default function ReadButton({ id }: Props) {
  const { lottieRef, handleClick } = useReadButton();

  return (
    <div>
      <p className={styles.text}>
        最後まで読んでいただきありがとうございます。
        <br />
        もしよければ「読んだよ！」の代わりに↓のボタンを押していってください。
        <br />
        最初のワンクリックがわたしの元に届きます！
      </p>
      <button className="flex w-[160px] mx-auto -mt-8" onClick={() => handleClick(id)}>
        <Lottie animationData={animationData} loop={false} autoplay={false} lottieRef={lottieRef} />
      </button>
    </div>
  );
}
