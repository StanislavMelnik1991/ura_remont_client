'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Axios } from '_entities/axios/instance';
import { TOKEN_NAME } from '_entities/constants';
import { CustomError } from '_entities/types';
import { adminRouter } from 'shared/router';
import { adminClientRouter } from 'shared/router';

export const deleteType = async (id: number) => {
  const { getRoute } = adminRouter.type.deleteOne;
  const loginRoute = adminClientRouter.auth.login.route;
  const token = cookies().get(TOKEN_NAME)?.value;
  if (!token) {
    redirect(loginRoute);
  } else {
    const { axios } = new Axios(token);
    try {
      const { data } = await axios.delete(getRoute(id));
      return data;
    } catch (error) {
      const {
        data: { message },
        status,
        statusText,
      } = (error as CustomError).response;
      if ((error as { response: any }).response) {
        console.log(error);
        return { error: { message, status, statusText } };
      }
    }
  }
};
