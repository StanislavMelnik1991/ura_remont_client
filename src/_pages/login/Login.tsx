'use client';
import { TelegramLoginButton } from 'features/auth';
import { adminClientRouter } from 'shared/router';
import styles from './Login.module.scss';

export const Login = () => {
  const telegramAuth = adminClientRouter.auth.authTelegram.route;
  return (
    <div className={styles.wrapper}>
      <TelegramLoginButton
        botName={process.env.TG_BOT_NAME as string}
        redirect={telegramAuth}
        displayAvatar={false}
        radius={10}
        size="large"
      />
    </div>
  );
};
