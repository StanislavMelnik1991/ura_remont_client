import classNames from 'classnames';
import Link from 'next/link';
import { MouseEventHandler } from 'react';
import { Card } from '_entities/ui';
import { Button } from '_entities/ui/Button/Button';
import { IconTrash } from '_entities/ui/icons';
import styles from './BrandCard.module.scss';

interface Props {
  className?: string;
  image?: string;
  href: string;
  name: string;
  description: string;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
}

export const BrandCard = ({
  className,
  description,
  href,
  name,
  image,
  handleDelete,
}: Props) => {
  return (
    <Card className={classNames(styles.wrapper, className)} image={image}>
      <Link href={href} className={styles.link}>
        <h4>{name}</h4>
        <p>{description}</p>
      </Link>
      <Button className={styles.remove} onClick={handleDelete}>
        <IconTrash />
      </Button>
    </Card>
  );
};
