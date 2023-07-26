'use client';

import { useTheme } from 'next-themes';
import { LightModeIcon, DarkModeIcon } from '@/components/ui/icons/index';

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === 'light' ? (
        <button className="sun" onClick={() => setTheme('dark')}>
          <DarkModeIcon />
        </button>
      ) : (
        <button className="moon" onClick={() => setTheme('light')}>
          <LightModeIcon />
        </button>
      )}
    </div>
  );
};
