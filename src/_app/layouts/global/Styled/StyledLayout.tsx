import classNames from 'classnames';
import { ThemeEnum } from '_entities/enums';
import styles from './styles/Theme.module.scss';
import './styles/globals.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
  theme: ThemeEnum;
}

export const StyledLayout = ({ className, children, theme }: Props) => {
  return (
    <main className={classNames(styles.wrapper, className, styles[theme])}>
      {children}
    </main>
  );
};
