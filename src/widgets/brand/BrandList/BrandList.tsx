'use client';
import Link from 'next/link';
import { useBrandList } from 'features/brand/hook';
import { Card, TextField } from '_entities/ui';
import { IconAdd } from '_entities/ui/icons';
import { adminClientRouter } from 'shared/router';
import { BrandCard } from './BrandCard';
import styles from './BrandList.module.scss';

interface Props {
  perPage: number;
}

export const BrandList = ({ perPage }: Props) => {
  const { list, setSearchValue, searchValue, handleDelete } =
    useBrandList(perPage);
  return (
    <div className={styles.wrapper}>
      <TextField
        placeholder="Поиск"
        value={searchValue}
        onChange={(ev) => {
          setSearchValue(ev.target.value);
        }}
        type="text"
      />
      <nav className={styles.list}>
        <Card className={styles.element} key={'create-brand-button'}>
          <Link
            href={adminClientRouter.brand.create.route}
            className={styles.link}
          >
            <IconAdd className={styles.addIcon} />
          </Link>
        </Card>
        {list.map((el, index) => {
          return (
            <BrandCard
              key={`${index}-${el.id}`}
              image={el.images.images[0]?.image}
              href={adminClientRouter.brand.current.getRoute(el.id)}
              description={el.description.ru}
              name={el.name.ru}
              handleDelete={handleDelete(el.id)}
            />
          );
        })}
      </nav>
    </div>
  );
};
