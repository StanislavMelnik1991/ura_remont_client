'use client';
import classNames from 'classnames';
import styles from './LoginButton.module.scss';

interface Props {
  className?: string;
}

export const LoginButton = ({ className }: Props) => {
  // const url = `https://oauth.telegram.org/embed/${process.env.TG_BOT_NAME}?origin=${process.env.HOST}&request_access=write`;
  return (
    <div className={classNames(styles.wrapper, className)}>
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?22"
        data-telegram-login={process.env.TG_BOT_NAME}
        data-size="medium"
        data-userpic="false"
        data-auth-url="https://admin.ship.cloudns.be/login"
      />
    </div>
  );
};
