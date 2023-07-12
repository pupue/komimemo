import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="pt-4 px-6 pb-2">
      <Link href="/" className="font-bold text-2xl">
        こみめも
      </Link>
    </header>
  );
};
