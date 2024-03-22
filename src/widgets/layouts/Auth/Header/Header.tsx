import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { LogoutButton } from 'features/auth';
import styles from './Header.module.scss';
import { Navigation } from './Navigation';

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Link href="/">
        <Image src={'/icons/logo.svg'} alt="logo" width={55} height={55} />
      </Link>
      <Navigation />
      <LogoutButton />
    </div>
  );
};
