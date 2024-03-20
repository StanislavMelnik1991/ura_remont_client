'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function Search() {
  const searchParams = useSearchParams();
  console.log(searchParams.entries());
  return <div>{searchParams}</div>;
}

export const Params = () => {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Search />
    </Suspense>
  );
};
