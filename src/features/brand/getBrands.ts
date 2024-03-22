'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { Axios } from '_entities/axios/instance';
import { TOKEN_NAME } from '_entities/constants';
import { adminRouter } from 'shared/routes';
import { adminClientRouter } from 'shared/routes/adminClient';
import { IBrandFull } from 'shared/types';

const { baseRoute, scheme } = adminRouter.brand.getAll;
type Props = z.infer<typeof scheme>;

export const getBrands = async (params: Props) => {
  const loginRoute = adminClientRouter.login.baseRoute;
  const token = cookies().get(TOKEN_NAME)?.value;
  if (!token) {
    redirect(loginRoute);
  } else {
    const { axios } = new Axios(token);
    try {
      const { data } = await axios.get<{
        data: Array<IBrandFull>;
        total: number;
      }>(baseRoute, { params });
      return data;
    } catch (error) {
      console.log(error);
      redirect(loginRoute);
    }
  }
};
