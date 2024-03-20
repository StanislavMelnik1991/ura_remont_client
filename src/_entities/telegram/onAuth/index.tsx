'use client';
import classNames from 'classnames';
import styles from './LoginButton.module.scss';

export const TelegramOnAuthButton = () => {
  return (
    <div className={classNames(styles.wrapper)}>
      <p>{'data-onauth="onTelegramAuth(user)"'}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `<script 
          async 
          src="https://telegram.org/js/telegram-widget.js?22" 
          data-telegram-login="${process.env.TG_BOT_NAME}" 
          data-size="medium" 
          data-userpic="false"
          data-radius="10"
          data-onauth="onTelegramAuth(user)" 
          data-request-access="write"></script>
            <script type="text/javascript">
              function onTelegramAuth(user) {
                console.log(user)
                alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
              }
            </script>`,
        }}
      />
    </div>
  );
};
