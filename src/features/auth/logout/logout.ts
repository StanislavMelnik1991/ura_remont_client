'use server';
import { cookies } from 'next/headers';
import { TOKEN_NAME } from '_entities/constants';

export const logout = async () => {
  cookies().delete(TOKEN_NAME);
};
