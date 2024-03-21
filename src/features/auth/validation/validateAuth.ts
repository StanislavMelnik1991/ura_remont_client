'use server';
import { cookies } from 'next/headers';
import { TOKEN_NAME } from '_entities/constants';

export const validateAuth = async () => {
  const token = cookies().get(TOKEN_NAME)?.value;
  return { isAuthorize: !!token };
};
