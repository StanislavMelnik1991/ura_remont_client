'use client';
import Link from 'next/link';
import { useBrandList } from 'features/brand/list';
import { Card } from '_entities/ui/Card/Card';
import styles from './BrandList.module.scss';

export const BrandList = () => {
  const { list } = useBrandList();
  return (
    <div className={styles.wrapper}>
      <nav className={styles.list}>
        <Card className={styles.element} key={'create-brand-button'}>
          <Link href={'/'}>
            <h4>+</h4>
          </Link>
        </Card>
        {list.map((el, index) => {
          return (
            <Card className={styles.element} key={`${index}-${el.id}`}>
              <Link href={`/${el.id}`}>
                <h4>{el.name.ru}</h4>
                <p>{el.description.ru}</p>
              </Link>
            </Card>
          );
        })}
      </nav>
    </div>
  );
};
