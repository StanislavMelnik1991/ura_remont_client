'use client';
import { useCallback } from 'react';
import { CreationForm } from 'features/customForm';
import { updateDictionary } from 'features/dictionary';
import { FormField } from '_entities/types';
import { AcceptedLanguagesEnum, LanguageLabels } from 'shared/constants';
import { dictionaryUpdateScheme } from 'shared/schemas';
import { IDictionary } from 'shared/types';

interface Props {
  dictionary: IDictionary;
  title: string;
}

export const UpdateDictionary = ({ dictionary, title }: Props) => {
  const nameFields: Array<FormField> = Object.entries(
    AcceptedLanguagesEnum,
  ).map((el) => {
    const [key, val] = el as [
      keyof typeof AcceptedLanguagesEnum,
      AcceptedLanguagesEnum,
    ];
    return {
      name: val,
      label: LanguageLabels[key],
      placeHolder: `Перевод для ${LanguageLabels[key]} языка`,
      defaultValue: dictionary[val],
    };
  });

  const handleUpdate = useCallback(
    (dictionaryId: number) => (data: Record<AcceptedLanguagesEnum, string>) =>
      updateDictionary({ id: dictionaryId, ...data }),
    [],
  );
  return (
    <CreationForm
      fields={nameFields}
      onSubmit={handleUpdate(dictionary.id)}
      title={title}
      validationSchema={dictionaryUpdateScheme}
    />
  );
};
