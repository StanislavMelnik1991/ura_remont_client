'use client';
import { MouseEventHandler } from 'react';
import { ListType } from '_entities/types';
import { TextField } from '_entities/ui';
import { Button } from '_entities/ui/Button/Button';
import { IconAdd } from '_entities/ui/icons';
import { ListCard } from './ListCard';
import styles from './ListItems.module.scss';

interface Props {
  searchValue?: string;
  setSearchValue?(val: string): void;
  onAdd?: MouseEventHandler<HTMLButtonElement> | false;
  getCurrentRoute?(id: number): string;
  handleDelete(id: number): () => void;
  list: Array<ListType>;
}

export const ListItems = ({
  searchValue,
  setSearchValue,
  onAdd,
  getCurrentRoute,
  handleDelete,
  list,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      {setSearchValue && searchValue && (
        <TextField
          placeholder="Поиск"
          value={searchValue}
          onChange={(ev) => {
            setSearchValue(ev.target.value);
          }}
        />
      )}
      <nav className={styles.list}>
        {onAdd && (
          <Button
            className={styles.element}
            key={'create-brand-button'}
            onClick={onAdd}
          >
            <IconAdd className={styles.addIcon} />
          </Button>
        )}
        {list.map((el, index) => {
          return (
            <ListCard
              key={`${index}-${el.id}`}
              image={el.image}
              href={getCurrentRoute ? getCurrentRoute(el.id) : undefined}
              description={el.description}
              title={el.title}
              handleDelete={handleDelete(el.id)}
            />
          );
        })}
      </nav>
    </div>
  );
};
