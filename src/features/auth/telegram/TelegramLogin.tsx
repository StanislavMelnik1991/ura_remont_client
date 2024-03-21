'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { apiRouter } from 'shared/routes';
import { adminClientRouter } from 'shared/routes/adminClient';
import { telegramAuth } from './authorize';

const { scheme } = apiRouter.auth.telegram;

type TgAuthSchemeType = z.infer<typeof scheme>;

export const useTelegramLogin = (data?: TgAuthSchemeType) => {
  const {
    telegramAuth: { baseRoute: authRoute },
    admin: { baseRoute: adminRoute },
  } = adminClientRouter;
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (data) {
      telegramAuth(data)
        .then((val) => {
          if (val) {
            router.push(adminRoute);
          } else {
            router.push(authRoute);
          }
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [adminRoute, authRoute, data, router]);
  return {
    loading,
  };
};
