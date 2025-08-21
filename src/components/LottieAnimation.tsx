'use client';

import dynamic from 'next/dynamic';
import animationData from '@/public/lottie/lottie-astronaut.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export const LottieAnimation = () => {
  return (
    <div className="max-w-xs mx-auto">
      <Lottie animationData={animationData} />
    </div>
  );
};
