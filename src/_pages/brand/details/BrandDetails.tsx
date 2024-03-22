import { redirect } from 'next/navigation';
import { getDetails } from 'features/brand/details';
import { Card } from '_entities/ui/Card/Card';
import { adminClientRouter } from 'shared/routes/adminClient';
import styles from './BrandDetails.module.scss';

type Props = {
  params: { brandId: string };
};

export const BrandDetails = async ({ params: { brandId } }: Props) => {
  if (Number.isNaN(Number(brandId))) {
    redirect('/');
  }
  const brand = await getDetails(Number(brandId));
  if (!brand) {
    redirect(adminClientRouter.admin.brand.baseRoute);
  }
  const { name, description, images } = brand;
  return (
    <div className={styles.wrapper}>
      {name && (
        <Card>
          <div className={styles.card}>
            <h4>Название</h4>
            <div className={styles.content}>
              <p>
                <span>ru: </span>
                {name.ru}
              </p>
              <p>
                <span>be: </span>
                {name.be}
              </p>
              <p>
                <span>en: </span>
                {name.en}
              </p>
              <p>
                <span>uk: </span>
                {name.uk}
              </p>
              <p>
                <span>pl: </span>
                {name.pl}
              </p>
            </div>
          </div>
        </Card>
      )}
      {description && (
        <Card>
          <div className={styles.card}>
            <h4>Описание</h4>
            <div className={styles.content}>
              <p>
                <span>ru: </span>
                {description.ru}
              </p>
              <p>
                <span>be: </span>
                {description.be}
              </p>
              <p>
                <span>en: </span>
                {description.en}
              </p>
              <p>
                <span>uk: </span>
                {description.uk}
              </p>
              <p>
                <span>pl: </span>
                {description.pl}
              </p>
            </div>
          </div>
        </Card>
      )}
      {images && (
        <div className={styles.list}>
          {images.images.map((el, index) => {
            return (
              <Card
                className={styles.element}
                key={`${index}-${el.id}`}
                image={el.image}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
