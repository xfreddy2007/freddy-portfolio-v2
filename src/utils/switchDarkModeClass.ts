import { ThemeMode } from '../feature/switchThemeMode';

const root = document.documentElement;

export const addDarkModeClass = (mode: ThemeMode) => {
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
