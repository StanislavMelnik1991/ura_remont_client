'use client';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';
import { ListType } from '_entities/types';
import { deleteBrand } from './deleteBrand';
import { getBrands } from './getBrands';

export const useBrandList = (perPage: number) => {
  const [list, setList] = useState<Array<ListType>>([]);
  const [page, setPage] = useState(1);
  const [total, seTotal] = useState<number>();
  const [searchValue, setSearchValue] = useState('');
  const [debounced] = useDebounce(searchValue, 500);

  const handleGetData = useCallback(() => {
    getBrands({ page, perPage, searchValue: debounced }).then(
      ({ data, total }) => {
        const typedResult = data.map(
          ({ id, images: { images }, description, name }) => {
            return {
              description: description.ru,
              id,
              title: name.ru,
              image: images?.[0]?.image,
            };
          },
        );
        setList(typedResult);
        seTotal(total);
      },
    );
  }, [page, debounced, perPage]);

  const handleDelete = useCallback(
    (id: number) => () => {
      deleteBrand(id)
        .then((data) => {
          if (data.error) {
            console.error(data.error);
            toast.error('Что-то пошло не так');
          } else {
            toast('удалено успешно');
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error('Что-то пошло не так');
        });
    },
    [],
  );

  useEffect(() => {
    handleGetData();
  }, [handleGetData, debounced]);
  return {
    list,
    total,
    page,
    setPage,
    setSearchValue,
    handleDelete,
    searchValue,
  };
};
