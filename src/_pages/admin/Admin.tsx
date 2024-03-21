import { validateAuth } from 'features/auth';
import styles from './Admin.module.scss';

interface Props {}

export const Admin = async ({}: Props) => {
  await validateAuth({});
  return (
    <div className={styles.wrapper}>
      <p>authorized</p>
    </div>
  );
};
