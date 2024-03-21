import { redirect } from 'next/navigation';
import { validateAuth } from 'features/auth';
import { adminClientRouter } from 'shared/routes/adminClient';

interface Props {
  children: React.ReactNode;
}

export const AuthLayout = async ({ children }: Props) => {
  const telegramAuth = adminClientRouter.login.baseRoute;
  const { isAuthorize } = await validateAuth();
  if (isAuthorize) {
    return <>{children}</>;
  } else {
    redirect(telegramAuth);
  }
};
