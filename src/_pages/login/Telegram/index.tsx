'use client';
import { z } from 'zod';
import { useTelegramLogin } from 'features/auth';
import { Spinner } from '_entities/ui';
import { apiRouter } from 'shared/routes';

interface Props {
  searchParams: TgAuthSchemeType;
}

const { scheme } = apiRouter.auth.telegram;

type TgAuthSchemeType = z.infer<typeof scheme>;

export const Telegram = ({ searchParams }: Props) => {
  useTelegramLogin(searchParams);
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner size={'30vh'} />
    </div>
  );
};
