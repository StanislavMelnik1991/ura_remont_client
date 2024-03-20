'use client';
import Image from 'next/image';
import { telegramLogin } from 'features/auth';
import styles from './Login.module.scss';

interface Props {
  params: { slug: string };
  searchParams: {
    id: string;
    first_name: string;
    username: string;
    photo_url: string;
    auth_date: string;
    hash: string;
  };
}

export const Login = ({ searchParams }: Props) => {
  const { auth_date, first_name, hash, id, photo_url, username } = searchParams;
  const date = new Date(Number(auth_date));
  telegramLogin({
    auth_date: date,
    first_name,
    hash,
    id: Number(id),
    photo_url,
    username,
  });
  return (
    <div className={styles.wrapper}>
      <p>{`id: ${id}`}</p>
      <p>{`name: ${first_name}`}</p>
      <p>{`username: ${username}`}</p>
      <p>{`hash: ${hash}`}</p>
      <p>{`date: ${date.toDateString()}`}</p>
      <Image src={photo_url || ''} alt={'avatar'} width={200} height={200} />
    </div>
  );
};
