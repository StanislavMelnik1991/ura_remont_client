'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { Axios } from '_entities/axios/instance';
import { TOKEN_NAME } from '_entities/constants';
import { adminRouter } from 'shared/routes';
import { adminClientRouter } from 'shared/routes/adminClient';

const { getRoute, scheme } = adminRouter.dictionary.current.update;
type Props = z.infer<typeof scheme> & { id: number };

export const updateDictionary = async ({ id, ...body }: Props) => {
  const loginRoute = adminClientRouter.login.baseRoute;
  const token = cookies().get(TOKEN_NAME)?.value;
  if (!token) {
    redirect(loginRoute);
  } else {
    const { axios } = new Axios(token);
    try {
      const { data } = await axios.patch(getRoute(id), body);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
