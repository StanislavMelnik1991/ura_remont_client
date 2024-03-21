import classNames from 'classnames';
import styles from './Card.module.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
};
