'use client';

import React, { ReactNode } from 'react';
import { useTheme } from 'next-themes';

type Props = {
  children: ReactNode;
};

export const ThemeContainer = ({ children }: Props) => {
  const { theme } = useTheme();
  return <div className={theme}>{children}</div>;
};
