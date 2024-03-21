'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { TOKEN_NAME } from '_entities/constants';
import { apiRouter } from 'shared/routes';
import { adminClientRouter } from 'shared/routes/adminClient';

const { scheme, baseRoute } = apiRouter.auth.telegram;

type TgAuthSchemeType = z.infer<typeof scheme>;

export const telegramAuth = async (data: TgAuthSchemeType) => {
  if (!data) {
    return;
  }
  const url = `${process.env.API_URL}/${baseRoute}`;
  const {
    telegramAuth: { baseRoute: telegramAuth },
    admin: { baseRoute: adminRoute },
  } = adminClientRouter;
  const token = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
    }),
  })
    .then((response) => response.json())
    .then((res: ResponseType) => {
      if (res.statusCode) {
        console.error('Error:', res.message);
      } else if (res.token) {
        return res.token;
      }
    })
    .catch(() => redirect(telegramAuth));
  if (token) {
    cookies().set({
      name: TOKEN_NAME,
      value: token,
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
    redirect(adminRoute);
  }
};

type ResponseType = { token?: string; message?: string; statusCode?: number };
