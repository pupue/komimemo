'use client';

import Lottie from 'lottie-react';
import animationData from '@/public/lottie/lottie-astronaut.json';

export const LottieAnimation = () => {
  return (
    <div className="w-80 mx-auto">
      <Lottie animationData={animationData} />
    </div>
  );
};
