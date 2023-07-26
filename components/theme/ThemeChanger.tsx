'use client';
import { useTheme } from 'next-themes';
import { LightModeIcon, DarkModeIcon } from '@/components/ui/icons/index';

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = (theme: string) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <div>
      {theme === 'light' ? (
        <button onClick={() => handleClick('dark')}>
          <LightModeIcon />
        </button>
      ) : (
        <button onClick={() => handleClick('light')}>
          <DarkModeIcon />
        </button>
      )}
    </div>
  );
};
