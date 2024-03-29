'use client';
import { useGetBrandDetails } from 'features/brand';
import { CreationForm } from 'features/customForm';
import { updateDictionary } from 'features/dictionary';
import { Card } from '_entities/ui';
import { dictionaryUpdateScheme } from 'shared/schemas';
import { IBrandFull } from 'shared/types';
import styles from './Brand.module.scss';

interface Props {
  brand: IBrandFull;
}

export const BrandUpdatingForm = ({ brand }: Props) => {
  const { descriptionFields, handleUpdate, nameFields, images } =
    useGetBrandDetails({
      brand,
      updateDictionary,
    });
  return (
    <>
      <CreationForm
        fields={nameFields}
        onSubmit={handleUpdate(brand.name.id)}
        title="Имя"
        validationSchema={dictionaryUpdateScheme}
      />
      <CreationForm
        fields={descriptionFields}
        onSubmit={handleUpdate(brand.description.id)}
        title="Описание"
        validationSchema={dictionaryUpdateScheme}
      />
      {images && (
        <div className={styles.images}>
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
    </>
  );
};
