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
      <p>{`data-auth-url="${process.env.HOST}/login"`}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `<script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="${process.env.TG_BOT_NAME}" data-size="medium" data-auth-url="${process.env.HOST}/login" data-request-access="write"></script>`,
        }}
      />
      <p>{'data-onauth="onTelegramAuth(user)"'}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `<script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="${process.env.TG_BOT_NAME}" data-size="medium" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>`,
        }}
      />
      <p>iframe</p>
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
