'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Axios } from '_entities/axios/instance';
import { TOKEN_NAME } from '_entities/constants';
import { adminRouter } from 'shared/router';
import { adminClientRouter } from 'shared/router';
import { IBrandFull } from 'shared/types';

export const getTypeDetails = async (id: number) => {
  const { getRoute } = adminRouter.type.getOne;
  const route = getRoute(id);
  const loginRoute = adminClientRouter.auth.login.route;
  const token = cookies().get(TOKEN_NAME)?.value;
  if (!token) {
    redirect(loginRoute);
  } else {
    const { axios } = new Axios(token);
    try {
      const { data } = await axios.get<IBrandFull>(route);
      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  }
};
