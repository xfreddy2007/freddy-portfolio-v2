import { useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark';

type UseDarkModeTypes = {
  isDarkMode: boolean;
  switchMode: () => void;
};

export default function useDarkMode(): UseDarkModeTypes {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchMode = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return { isDarkMode, switchMode };
}
