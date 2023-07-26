import React from 'react';
import Link from 'next/link';
import { ThemeChanger } from '../theme/ThemeChanger';

export const Header = () => {
  return (
    <header className="pt-4 px-6 pb-2">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          こみめも
        </Link>
        <div className="lg:fixed top-4 right-6">
          <ThemeChanger />
        </div>
      </div>
    </header>
  );
};
