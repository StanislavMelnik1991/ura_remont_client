'use client';
import { createBrand } from 'features/brand';
import { CreationForm } from 'features/customForm';
import { adminClientRouter } from 'shared/router';
import { brandCreateScheme } from 'shared/schemas';

export const BrandCreationForm = () => {
  const fields = [
    { name: 'name', placeHolder: 'Введите название', label: 'Название' },
    { name: 'description', placeHolder: 'Введите описание', label: 'Описание' },
  ];

  return (
    <CreationForm
      title="Новый бренд"
      successRedirect={adminClientRouter.brand.current.getRoute}
      onSubmit={createBrand}
      fields={fields}
      validationSchema={brandCreateScheme}
    />
  );
};
