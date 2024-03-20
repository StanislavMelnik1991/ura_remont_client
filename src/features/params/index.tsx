'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function Search() {
  const searchParams = useSearchParams();
  console.log(searchParams.entries());
  const name = searchParams.get('first_name');
  const id = searchParams.get('id');
  const username = searchParams.get('username');
  const photo = searchParams.get('photo_url');
  const date = new Date(searchParams.get('auth_date') || Date.now());
  const hash = searchParams.get('hash');
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }}>
      <p>{`id: ${id}`}</p>
      <p>{`name: ${name}`}</p>
      <p>{`username: ${username}`}</p>
      <p>{`hash: ${hash}`}</p>
      <p>{`date: ${date.toDateString()}`}</p>
      <Image src={photo || ''} alt={'avatar'} width={200} height={200} />
    </div>
  );
}

export const Params = () => {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Search />
    </Suspense>
  );
};
