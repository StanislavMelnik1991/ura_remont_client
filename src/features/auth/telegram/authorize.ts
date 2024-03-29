'use server';
import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { Axios } from '_entities/axios/instance';
import { TOKEN_NAME } from '_entities/constants';
import { apiRouter } from 'shared/router';
import { authTelegramScheme } from 'shared/schemas';

const { route } = apiRouter.auth.tgLogin;

type TgAuthSchemeType = z.infer<typeof authTelegramScheme>;

export const telegramAuth = async (data: TgAuthSchemeType) => {
  const oldToken = cookies().get(TOKEN_NAME)?.value;
  const { axios } = new Axios(oldToken);
  try {
    const {
      data: { token },
    } = await axios.post<ResponseType>(route, data);
    cookies().set({
      name: TOKEN_NAME,
      value: token,
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
    return { ok: true };
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      console.error('authorization error', error.response.data);
    } else {
      console.error(error);
    }
  }
  return { ok: false };
};

type ResponseType = { token: string };
