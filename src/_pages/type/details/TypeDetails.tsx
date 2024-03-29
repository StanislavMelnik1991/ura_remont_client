import { redirect } from 'next/navigation';
import { UpdateDictionary, UpdateImages } from 'widgets/forms';
import { uploadTypeImage } from 'features/type';
import { getTypeDetails } from 'features/type';
import { adminClientRouter } from 'shared/router';
import styles from './TypeDetails.module.scss';

type Props = {
  params: { typeId: string };
};

export const TypeDetails = async ({ params: { typeId } }: Props) => {
  if (Number.isNaN(Number(typeId))) {
    redirect('/');
  }
  const type = await getTypeDetails(Number(typeId));
  if (!type) {
    redirect(adminClientRouter.brand.list.route);
  }
  return (
    <div className={styles.wrapper}>
      <UpdateDictionary title="Имя" dictionary={type.name} />
      <UpdateDictionary title="Описание" dictionary={type.description} />
      <UpdateImages
        images={type.images?.images}
        uploadImage={uploadTypeImage}
        id={type.id}
      />
    </div>
  );
};
