'use client';
import { useRouter } from 'next/navigation';
import { ListItems } from 'widgets/ListItems';
import { useTypeList } from 'features/type';
import { adminClientRouter } from 'shared/router';

export const ListPage = () => {
  const router = useRouter();
  const PER_PAGE = 10;
  const {
    create: { route },
    current: { getRoute },
  } = adminClientRouter.type;
  const { list, setSearchValue, searchValue, handleDelete } =
    useTypeList(PER_PAGE);
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
