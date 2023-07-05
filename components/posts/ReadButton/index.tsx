'use client';

import Lottie from 'lottie-react';
import { useReadButton } from './useReadButton';

type Props = {
  id: string;
};

export const ReadButton = ({ id }: Props) => {
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
      <p
        className={`relative z-10 text-center text-sm leading-[1.7] ${
          showText ? 'opacity-1' : 'opacity-0'
        }`}
      >
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
};
