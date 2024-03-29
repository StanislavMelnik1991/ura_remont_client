'use client';
import { useRouter } from 'next/navigation';
import { ListItems } from 'widgets/ListItems';
import { useBrandList } from 'features/brand';
import { adminClientRouter } from 'shared/router';

export const BrandListPage = () => {
  const PER_PAGE = 10;
  const router = useRouter();
  const {
    create: { route },
    current: { getRoute },
  } = adminClientRouter.brand;
  const { list, setSearchValue, searchValue, handleDelete } =
    useBrandList(PER_PAGE);
  return (
    <ListItems
      getCurrentRoute={getRoute}
      handleDelete={handleDelete}
      list={list}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      onAdd={() => router.push(route)}
    />
  );
};
