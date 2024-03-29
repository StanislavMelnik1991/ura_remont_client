import classNames from 'classnames';
import Link from 'next/link';
import { MouseEventHandler } from 'react';
import { Card } from '_entities/ui';
import { Button } from '_entities/ui/Button/Button';
import { IconTrash } from '_entities/ui/icons';
import styles from './ListCard.module.scss';

interface Props {
  className?: string;
  image?: string;
  href?: string;
  title?: string;
  description?: string;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
}

export const ListCard = ({
  className,
  description,
  href,
  title,
  image,
  handleDelete,
}: Props) => {
  return (
    <Card className={classNames(styles.wrapper, className)} image={image}>
      {href ? (
        <Link href={href} className={styles.link}>
          {title && <h4>{title}</h4>}
          {description && <p>{description}</p>}
        </Link>
      ) : (
        <div className={styles.link}>
          {title && <h4>{title}</h4>}
          {description && <p>{description}</p>}
        </div>
      )}
      <Button className={styles.remove} onClick={handleDelete}>
        <IconTrash />
      </Button>
    </Card>
  );
};
