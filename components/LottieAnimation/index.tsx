'use client';

import Lottie from 'lottie-react';
import animationData from '@/public/lottie/lottie-astronaut.json';

export const LottieAnimation = () => {
  return (
    <div className="max-w-xs mx-auto">
      <Lottie animationData={animationData} />
    </div>
  );
};
