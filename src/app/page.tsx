import { redirect } from 'next/navigation';
import { validateAuth } from 'features/auth';
import { adminClientRouter } from 'shared/routes/adminClient';

export default async function Home() {
  const successUrl = adminClientRouter.admin.baseRoute;
  const telegramAuth = adminClientRouter.login.baseRoute;
  const { isAuthorize } = await validateAuth();
  if (isAuthorize) {
    redirect(successUrl);
  } else {
    redirect(telegramAuth);
  }
}
