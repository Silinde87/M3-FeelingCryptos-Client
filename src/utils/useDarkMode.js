import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
      setIsDarkMode(true)
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
      setIsDarkMode(false)
    }
  };
  function setMode(mode) {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }
  }, []);

  return [theme, toggleTheme, isDarkMode]
};