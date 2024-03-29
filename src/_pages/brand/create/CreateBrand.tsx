import { BrandCreationForm } from 'widgets/forms';
import styles from './CreateBrand.module.scss';

export const CreateBrand = () => {
  return (
    <div className={styles.wrapper}>
      <BrandCreationForm />
    </div>
  );
};
