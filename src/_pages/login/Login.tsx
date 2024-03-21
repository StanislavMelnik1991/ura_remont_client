'use client';
import { LoginButton } from '_entities/ui';
import { adminClientRouter } from 'shared/routes/adminClient';
import styles from './Login.module.scss';

export const Login = () => {
  const telegramAuth = adminClientRouter.login.telegramAuth.baseRoute;
  console.log(telegramAuth);
  return (
    <div className={styles.main}>
      <LoginButton
        botName={process.env.TG_BOT_NAME as string}
        redirect={telegramAuth}
        displayAvatar={false}
        radius={10}
        size="large"
      />
    </div>
  );
};
