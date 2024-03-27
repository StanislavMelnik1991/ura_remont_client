'use client';
import { z } from 'zod';
import { useTelegramLogin } from 'features/auth';
import { Spinner } from '_entities/ui';
import { authTelegramScheme } from 'shared/schemas';

interface Props {
  searchParams: TgAuthSchemeType;
}

type TgAuthSchemeType = z.infer<typeof authTelegramScheme>;

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
