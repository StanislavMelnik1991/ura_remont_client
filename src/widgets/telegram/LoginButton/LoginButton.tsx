'use client';
import styles from './LoginButton.module.scss';

interface Props {
  radius?: number;
  size?: 'medium' | 'large' | 'small';
  redirect: string;
  botName: string;
  displayAvatar?: boolean;
}

export const TelegramLoginButton = ({
  botName,
  redirect,
  radius = 10,
  size = 'medium',
  displayAvatar,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div
        dangerouslySetInnerHTML={{
          __html: `<script async 
          src="https://telegram.org/js/telegram-widget.js?22" 
          data-telegram-login="${botName}"
           data-userpic="${displayAvatar}" 
           data-radius="${radius}" 
           data-size="${size}" 
           data-auth-url="${redirect}"
           data-request-access="write"></script>`,
        }}
      />
    </div>
  );
};
