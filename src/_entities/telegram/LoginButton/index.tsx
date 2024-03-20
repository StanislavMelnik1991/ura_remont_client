'use client';
import classNames from 'classnames';
import styles from './LoginButton.module.scss';

interface Props {
  className?: string;
}

export const LoginButton = ({ className }: Props) => {
  const url = `https://oauth.telegram.org/embed/${process.env.TG_BOT_NAME}?origin=${process.env.HOST}&request_access=write`;
  return (
    <div className={classNames(styles.wrapper, className)}>
      <iframe
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};
