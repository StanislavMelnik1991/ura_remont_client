import { redirect } from 'next/navigation';
import { validateAuth } from 'features/auth';
import { adminClientRouter } from 'shared/router';

export default async function Home() {
  const successUrl = adminClientRouter.common.home.route;
  const telegramAuth = adminClientRouter.auth.login.route;
  const { isAuthorize } = await validateAuth();
  if (isAuthorize) {
    redirect(successUrl);
  } else {
    redirect(telegramAuth);
  }
}
