'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Axios } from '_entities/axios/instance';
import { TOKEN_NAME } from '_entities/constants';
import { CustomError } from '_entities/types';
import { adminClientRouter, adminRouter } from 'shared/router';

interface Props {
  formData: FormData;
  id: number;
}

export const uploadTypeImage = async ({ formData, id }: Props) => {
  const { getRoute } = adminRouter.type.uploadImage;
  const loginRoute = adminClientRouter.auth.login.route;
  const token = cookies().get(TOKEN_NAME)?.value;
  if (!token) {
    redirect(loginRoute);
  } else {
    const { axios } = new Axios(token);
    try {
      const { data } = await axios.post<{ id: number }>(
        getRoute(id),
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
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
      } else {
        return {
          error: { message: 'unknown', status: 500, statusText: '' },
        };
      }
    }
  }
};
