import { useState, useCallback, useEffect } from 'react';

type ThemeMode = 'light' | 'dark';

type UseDarkModeTypes = {
  isDarkMode: boolean;
  switchMode: () => void;
};

const root = document.documentElement;

const addDarkModeClass = (mode: ThemeMode) => {
  if (mode === 'light') {
    localStorage.setItem('theme', 'light');
    root.classList.remove('dark');
    root.classList.add('light');
  } else {
    localStorage.setItem('theme', 'dark');
    root.classList.remove('light');
    root.classList.add('dark');
  }
};

export default function useDarkMode(): UseDarkModeTypes {
  const [theme, setTheme] = useState<ThemeMode>((localStorage.getItem('theme') as ThemeMode) || 'light');
  const localTheme =
    localStorage.getItem('theme') ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const switchMode = useCallback(() => {
    if (root.classList.contains('dark')) {
      setTheme('light');
      addDarkModeClass('light');
    } else {
      setTheme('dark');
      addDarkModeClass('dark');
    }
  }, []);

  useEffect(() => {
    root.classList.add(localTheme);
  }, []);

  return { isDarkMode: theme === 'dark', switchMode };
}
