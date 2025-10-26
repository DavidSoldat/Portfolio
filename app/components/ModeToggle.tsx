'use client';
import { useTheme } from 'next-themes';
import { ThemeIconButton } from 'react-simple-animated-dark-mode-button';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeIconButton
      isDarkMode={theme === 'light'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      color={{
        light: '#a855f7',
        dark: '#eab308',
      }}
    />
  );
}
