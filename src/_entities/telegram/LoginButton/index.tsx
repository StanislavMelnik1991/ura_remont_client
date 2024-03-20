'use client';
import classNames from 'classnames';
import styles from './LoginButton.module.scss';

interface Props {
  className?: string;
}

export const LoginButton = ({ className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <p>{`data-auth-url="${process.env.HOST}/login"`}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `<script async 
          src="https://telegram.org/js/telegram-widget.js?22" 
          data-telegram-login="${process.env.TG_BOT_NAME}"
           data-userpic="false" 
           data-radius="10" 
           data-size="medium" 
           data-auth-url="login"
           data-request-access="write"></script>`,
        }}
      />
    </div>
  );
};
