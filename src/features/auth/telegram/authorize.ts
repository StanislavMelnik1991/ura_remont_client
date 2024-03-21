'use server';
import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { Axios } from '_entities/axios/instance';
import { TOKEN_NAME } from '_entities/constants';
import { apiRouter } from 'shared/routes';

const { scheme, baseRoute } = apiRouter.auth.telegram;

type TgAuthSchemeType = z.infer<typeof scheme>;

export const telegramAuth = async (data: TgAuthSchemeType) => {
  const oldToken = cookies().get(TOKEN_NAME)?.value;
  const { axios } = new Axios(oldToken);
  try {
    const {
      data: { token },
    } = await axios.post<ResponseType>(baseRoute, data);
    cookies().set({
      name: TOKEN_NAME,
      value: token,
      secure: true,
      httpOnly: true,
    });
    return { ok: true };
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      console.error('authorization error', error.response.data);
    } else {
      console.error(error);
    }
  }
};

type ResponseType = { token: string };
