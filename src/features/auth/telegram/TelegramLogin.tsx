'use client';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { apiRouter } from 'shared/routes';
import { telegramAuth } from './authorize';

const { scheme } = apiRouter.auth.telegram;

type TgAuthSchemeType = z.infer<typeof scheme>;

export const useTelegramLogin = (data?: TgAuthSchemeType) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data) {
      telegramAuth(data).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [data]);
  return {
    loading,
  };
};
