import { Metadata } from 'next';
import { AuthLayout, UserLayout } from 'widgets/layouts';

export const metadata: Metadata = {
  title: 'Admin',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <AuthLayout>
      <UserLayout>{children}</UserLayout>
    </AuthLayout>
  );
}
