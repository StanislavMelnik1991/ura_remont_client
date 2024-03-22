import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GlobalLayout } from 'widgets/layouts';

export const metadata: Metadata = {
  title: 'URA! REMONT!',
  description: '"ura remont" admins app',
};

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang={'en'}>
      <link
        rel="icon"
        href="/icons/logo.svg"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={inter.className}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
