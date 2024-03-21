'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { TOKEN_NAME } from '_entities/constants';
import { adminClientRouter } from 'shared/routes/adminClient';

interface Props {
  successUrl?: string;
}

export const validateAuth = async ({ successUrl }: Props) => {
  const telegramAuth = adminClientRouter.telegramAuth.baseRoute;
  const token = cookies().get(TOKEN_NAME)?.value;
  if (!token) {
    redirect(telegramAuth);
  } else {
    if (successUrl) {
      redirect(successUrl);
    }
  }
};
