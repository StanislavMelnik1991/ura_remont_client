'use client';
import { useCallback } from 'react';
import { FormField } from '_entities/types';
import { AcceptedLanguagesEnum, LanguageLabels } from 'shared/constants';
import { IBrandFull } from 'shared/types';

interface Props {
  brand: IBrandFull;
  updateDictionary(
    data: Record<AcceptedLanguagesEnum, string> & { id: number },
  ): Promise<
    | {
        id: number;
      }
    | {
        error: {
          message: string;
          status: number;
          statusText: string;
        };
      }
  >;
}

export const useGetBrandDetails = ({ brand, updateDictionary }: Props) => {
  const { name, description, images } = brand;
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
      defaultValue: name[val],
    };
  });
  const descriptionFields: Array<FormField> = Object.entries(
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
      defaultValue: description[val],
    };
  });

  const handleUpdate = useCallback(
    (dictionaryId: number) => (data: Record<AcceptedLanguagesEnum, string>) =>
      updateDictionary({ id: dictionaryId, ...data }),
    [updateDictionary],
  );

  return {
    nameFields,
    descriptionFields,
    handleUpdate,
    images,
  };
};
