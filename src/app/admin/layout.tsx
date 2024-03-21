import { AuthLayout } from 'widgets/layouts/authorized';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <AuthLayout>{children}</AuthLayout>;
}
