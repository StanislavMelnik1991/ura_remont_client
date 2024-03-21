'use client';
import { z } from 'zod';
import { useTelegramLogin } from 'features/auth';
import { apiRouter } from 'shared/routes';

interface Props {
  searchParams: TgAuthSchemeType;
}

const { scheme } = apiRouter.auth.telegram;

type TgAuthSchemeType = z.infer<typeof scheme>;

export const Telegram = ({ searchParams }: Props) => {
  useTelegramLogin(searchParams);
  return <div />;
};
