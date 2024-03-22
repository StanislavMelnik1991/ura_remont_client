import { redirect } from 'next/navigation';
import { getDetails } from 'features/brand/details';
import { Card } from '_entities/ui';
import { adminClientRouter } from 'shared/routes/adminClient';
import styles from './BrandDetails.module.scss';
import { DictionaryEditor } from './DictionaryEditor/DictionaryEditor';

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
      {name && <DictionaryEditor dictionary={name} title="Название" />}
      {name && <DictionaryEditor dictionary={description} title="Описание" />}
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
