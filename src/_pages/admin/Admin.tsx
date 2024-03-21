'use client';
import Link from 'next/link';
import { Card } from '_entities/ui/Card/Card';
import styles from './Admin.module.scss';

interface NavElement {
  title: string;
  image?: string;
  link: string;
}

export const Admin = () => {
  const navigationScheme: Array<NavElement> = [
    { link: '/', title: 'Brand' },
    { link: '/', title: 'Type' },
    { link: '/', title: 'Prototype' },
    { link: '/', title: 'Product' },
  ];
  return (
    <div className={styles.wrapper}>
      <nav className={styles.list}>
        {navigationScheme.map((el, index) => {
          return (
            <Card className={styles.element} key={`${index}-${el.title}`}>
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
