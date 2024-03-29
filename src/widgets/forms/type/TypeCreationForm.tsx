'use client';
import { CreationForm } from 'features/customForm';
import { createType } from 'features/type';
import { adminClientRouter } from 'shared/router';
import { brandCreateScheme } from 'shared/schemas';

export const TypeCreationForm = () => {
  const fields = [
    { name: 'name', placeHolder: 'Введите название', label: 'Название' },
    { name: 'description', placeHolder: 'Введите описание', label: 'Описание' },
  ];

  return (
    <CreationForm
      title="Новый тип товаров"
      successRedirect={adminClientRouter.brand.current.getRoute}
      onSubmit={createType}
      fields={fields}
      validationSchema={brandCreateScheme}
    />
  );
};
