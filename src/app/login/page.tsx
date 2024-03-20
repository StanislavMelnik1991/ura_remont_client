'use client';
import { useSearchParams } from 'next/navigation';
import { LoginButton } from '_entities/telegram/LoginButton';

export default function Page() {
  const params = useSearchParams();
  console.log(params);
  return (
    <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
      <LoginButton />
      {params}
    </div>
  );
}
