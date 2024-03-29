import { redirect } from 'next/navigation';
import { UpdateDictionary, UpdateImages } from 'widgets/forms';
import { uploadBrandImage } from 'features/brand';
import { getBrandDetails } from 'features/brand';
import { adminClientRouter } from 'shared/router';
import styles from './BrandDetails.module.scss';

type Props = {
  params: { brandId: string };
};

export const BrandDetails = async ({ params: { brandId } }: Props) => {
  if (Number.isNaN(Number(brandId))) {
    redirect('/');
  }
  const brand = await getBrandDetails(Number(brandId));
  if (!brand) {
    redirect(adminClientRouter.brand.list.route);
  }

  return (
    <div className={styles.wrapper}>
      <UpdateDictionary title="Имя" dictionary={brand.name} />
      <UpdateDictionary title="Описание" dictionary={brand.description} />
      <UpdateImages
        images={brand.images?.images}
        uploadImage={uploadBrandImage}
        id={brand.id}
      />
    </div>
  );
};
