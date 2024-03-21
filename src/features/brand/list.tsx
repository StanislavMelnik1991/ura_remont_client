'use client';
import { useEffect, useState } from 'react';
import { IBrandLocalized } from 'shared/types';
import { getBrands } from './getBrands';

const PER_PAGE = 10;

export const useBrandList = () => {
  const [list, setList] = useState<Array<IBrandLocalized>>([]);
  const [page, sePage] = useState(1);
  const [total, seTotal] = useState<number>();
  const [searchValue, seSearchValue] = useState('');

  useEffect(() => {
    getBrands({ page, perPage: PER_PAGE, searchValue }).then(
      ({ data, total }) => {
        setList(data);
        seTotal(total);
      },
    );
  }, [page, searchValue]);
  return { list, total, page, sePage, seSearchValue };
};
