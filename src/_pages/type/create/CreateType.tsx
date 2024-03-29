import { TypeCreationForm } from 'widgets/forms';
import styles from './CreateType.module.scss';

export const CreateType = () => {
  return (
    <div className={styles.wrapper}>
      <TypeCreationForm />
    </div>
  );
};
