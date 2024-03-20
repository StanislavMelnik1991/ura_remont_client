'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { apiRouter } from 'shared/routes';

type Props = {
  id: number;
  first_name: string;
  username: string;
  photo_url: string;
  auth_date: Date;
  hash: string;
};

export const telegramLogin = async (data: Props) => {
  const {
    telegram: { baseRoute },
  } = apiRouter.auth;
  const url = `${process.env.API_URL}/${baseRoute}`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
    }),
  })
    .then((response) => response.json())
    .then((res: { token: string }) => {
      cookies().set({
        name: 'token',
        value: res.token,
        secure: true,
        httpOnly: true,
        path: '/',
      });
    })
    .catch((error) => console.error('Error:', error));

  redirect('/');
};
