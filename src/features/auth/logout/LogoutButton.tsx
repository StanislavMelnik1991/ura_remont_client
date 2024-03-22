'use client';
import { useCallback } from 'react';
import { Button } from '_entities/ui/Button/Button';
import { logout } from './logout';

export const LogoutButton = () => {
  const hadleClick = useCallback(() => {
    logout();
  }, []);
  return <Button onClick={hadleClick}>Выйти</Button>;
};
