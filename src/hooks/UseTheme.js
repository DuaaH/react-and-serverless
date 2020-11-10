import { useState, useEffect } from 'react';


export default () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const lsTheme = localStorage.getItem('theme');
    setTheme(lsTheme || 'light');
  }, []);


  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return [theme, toggleTheme];
}