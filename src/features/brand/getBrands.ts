'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { Axios } from '_entities/axios/instance';
import { TOKEN_NAME } from '_entities/constants';
import { adminRouter } from 'shared/router';
import { adminClientRouter } from 'shared/router';
import { brandGetAllScheme } from 'shared/schemas';
import { IBrandFull } from 'shared/types';

const { route } = adminRouter.brand.getAll;
type Props = z.infer<typeof brandGetAllScheme>;

export const getBrands = async (params: Props) => {
  const loginRoute = adminClientRouter.auth.login.route;
  const token = cookies().get(TOKEN_NAME)?.value;
  if (!token) {
    redirect(loginRoute);
  } else {
    const { axios } = new Axios(token);
    try {
      const { data } = await axios.get<{
        data: Array<IBrandFull>;
        total: number;
      }>(route, { params });
      return data;
    } catch (error) {
      console.log(error);
      redirect(loginRoute);
    }
  }
};
