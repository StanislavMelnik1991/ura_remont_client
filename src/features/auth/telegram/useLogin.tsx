'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { adminClientRouter } from 'shared/router';
import { authTelegramScheme } from 'shared/schemas';
import { telegramAuth } from './authorize';

type TgAuthSchemeType = z.infer<typeof authTelegramScheme>;

export const useTelegramLogin = (data?: TgAuthSchemeType) => {
  const {
    auth: {
      login: { route: loginRoute },
    },
    common: {
      home: { route: adminRoute },
    },
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
            router.push(loginRoute);
          }
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [adminRoute, loginRoute, data, router]);
  return {
    loading,
  };
};
