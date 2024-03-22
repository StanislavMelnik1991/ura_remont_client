'use client';
import Link from 'next/link';
import { useBrandList } from 'features/brand/list';
import { Card } from '_entities/ui/Card/Card';
import { adminClientRouter } from 'shared/routes/adminClient';
import styles from './BrandList.module.scss';

const PER_PAGE = 100;

export const BrandList = () => {
  const { list, setSearchValue, total, searchValue } = useBrandList(PER_PAGE);
  return (
    <div className={styles.wrapper}>
      <input
        value={searchValue}
        onChange={(ev) => {
          setSearchValue(ev.target.value);
        }}
        type="text"
      />
      <nav className={styles.list}>
        <Card className={styles.element} key={'create-brand-button'}>
          <Link
            href={adminClientRouter.admin.brand.create.baseRoute}
            className={styles.link}
          >
            <h4>+</h4>
          </Link>
        </Card>
        {list.map((el, index) => {
          console.log(el);
          return (
            <Card
              className={styles.element}
              key={`${index}-${el.id}`}
              image={el.images.images[0]?.image}
            >
              <Link
                href={adminClientRouter.admin.brand.current.getRoute(el.id)}
                className={styles.link}
              >
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
