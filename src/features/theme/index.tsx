'use client';
import { useCallback, useLayoutEffect, useState } from 'react';
import { ThemeEnum } from '_entities/enums';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.DARK);

  useLayoutEffect(() => {
    let isDarkTheme = false;
    let localTheme: ThemeEnum | null = ThemeEnum.LIGHT;
    if (typeof window !== 'undefined') {
      isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
      localTheme = localStorage.getItem('app-theme') as ThemeEnum | null;
    }
    const defaultTheme = isDarkTheme ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    setTheme(localTheme || defaultTheme);
  }, []);

  const switchThemeHandler = useCallback(() => {
    switch (theme) {
      case 'dark':
        window.document.documentElement.setAttribute(
          'data-theme',
          ThemeEnum.LIGHT,
        );
        localStorage.setItem('app-theme', ThemeEnum.LIGHT);
        setTheme(ThemeEnum.LIGHT);
        break;

      default:
        window.document.documentElement.setAttribute(
          'data-theme',
          ThemeEnum.DARK,
        );
        localStorage.setItem('app-theme', ThemeEnum.DARK);
        setTheme(ThemeEnum.DARK);
        break;
    }
  }, [theme]);

  return { switchTheme: switchThemeHandler, theme };
};
