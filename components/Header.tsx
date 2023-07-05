import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="pt-4 px-6 pb-2">
      <Link href="/" className="font-bold text-2xl">
        こみいめも
      </Link>
    </header>
  );
};
