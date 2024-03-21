import { Metadata } from 'next';
import { AuthLayout } from 'widgets/layouts/authorized';

export const metadata: Metadata = {
  title: 'Admin',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <AuthLayout>{children}</AuthLayout>;
}
