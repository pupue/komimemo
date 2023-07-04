'use client';

import Lottie from 'lottie-react';
import styles from './index.module.css';
import { useReadButton } from '@/hooks/useReadButton';
import { useEffect, useState } from 'react';

type Props = {
  id: string;
};

export default function ReadButton({ id }: Props) {
  const { checked, showText, options, handleReadButtonClick, handleCompleteAnimation } =
    useReadButton();

  return (
    <div>
      <button
        className={`${
          checked ? 'pointer-events-none' : 'pointer-events-auto'
        } flex w-[80px] mx-auto`}
        onClick={() => handleReadButtonClick(id)}
      >
        <Lottie {...options} initialSegment={[41, 96]} onComplete={handleCompleteAnimation} />
      </button>
      <p className={`${styles.text} ${showText ? 'opacity-1' : 'opacity-0'}`}>
        最後まで読んでいただきありがとうございます！
        <br />
        <span className="flex flex-wrap justify-center">
          <span>もしよければ「読んだよ！」の代わりに</span>
          <span>↑の紙飛行機をクリックで飛ばしてください。</span>
        </span>
        わたしの元に届きます。
      </p>
    </div>
  );
}
