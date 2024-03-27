import { redirect } from 'next/navigation';
import { validateAuth } from 'features/auth';
import { adminClientRouter } from 'shared/router';
import styles from './AuthLayout.module.scss';
import { Header } from './Header';

interface Props {
  children: React.ReactNode;
}

export const AuthLayout = async ({ children }: Props) => {
  const telegramAuth = adminClientRouter.auth.login.route;
  const { isAuthorize } = await validateAuth();
  if (isAuthorize) {
    return (
      <>
        <Header />
        <div className={styles.scrolling}>{children}</div>
      </>
    );
  } else {
    redirect(telegramAuth);
  }
};
