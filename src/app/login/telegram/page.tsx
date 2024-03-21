import { redirect } from 'next/navigation';
import { z } from 'zod';
import { telegramAuth } from 'features/auth';
import { apiRouter } from 'shared/routes';
import { adminClientRouter } from 'shared/routes/adminClient';

interface Props {
  searchParams: TgAuthSchemeType;
}

const { scheme } = apiRouter.auth.telegram;

type TgAuthSchemeType = z.infer<typeof scheme>;

export default async function Home({ searchParams }: Props) {
  const successUrl = adminClientRouter.admin.baseRoute;
  const loginUrl = adminClientRouter.login.baseRoute;
  const { ok } = await telegramAuth(searchParams);
  if (ok) {
    redirect(successUrl);
  } else {
    redirect(loginUrl);
  }
}
