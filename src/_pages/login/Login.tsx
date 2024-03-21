'use client1';
import { z } from 'zod';
import { useTelegramLogin } from 'features/auth';
import { LoginButton } from '_entities/telegram';
import { apiRouter } from 'shared/routes';
import { adminClientRouter } from 'shared/routes/adminClient';
import styles from './Login.module.scss';

interface Props {
  searchParams: TgAuthSchemeType;
}

const { scheme } = apiRouter.auth.telegram;

type TgAuthSchemeType = z.infer<typeof scheme>;

export const Login = ({ searchParams }: Props) => {
  const telegramAuth = adminClientRouter.telegramAuth.baseRoute;
  const { loading } = useTelegramLogin(searchParams);
  return (
    <div className={styles.main}>
      {loading ? (
        <p>{`loading: ${loading}`}</p>
      ) : (
        <LoginButton
          botName={process.env.TG_BOT_NAME as string}
          redirect={telegramAuth}
          displayAvatar={false}
          radius={10}
          size="large"
        />
      )}
    </div>
  );
};
