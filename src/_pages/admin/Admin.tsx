'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '_entities/ui/Card/Card';
import { adminClientRouter } from 'shared/routes/adminClient';
import styles from './Admin.module.scss';

interface NavElement {
  title: string;
  image?: string;
  link: string;
}

export const Admin = () => {
  const navigationScheme: Array<NavElement> = [
    {
      link: adminClientRouter.admin.brand.baseRoute,
      title: 'Brand',
      image:
        'https://firebasestorage.googleapis.com/v0/b/paralect-test-8e049.appspot.com/o/type%2F1%2F1711102827581?alt=media&token=f87f3298-adde-499f-9032-ec875f00dac7',
    },
    { link: adminClientRouter.admin.type.baseRoute, title: 'Type' },
    { link: '/', title: 'Prototype' },
    { link: '/', title: 'Product' },
  ];
  return (
    <div className={styles.wrapper}>
      <nav className={styles.list}>
        {navigationScheme.map((el, index) => {
          return (
            <Card className={styles.element} key={`${index}-${el.title}`}>
              {el.image && (
                <Image width={100} height={100} alt="asd" src={el.image} />
              )}
              <Link href={el.link}>
                <h4>{el.title}</h4>
              </Link>
            </Card>
          );
        })}
      </nav>
    </div>
  );
};
