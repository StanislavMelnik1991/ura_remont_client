import classNames from 'classnames';
import { NavLink } from '_entities/ui/NavLink/NavLink';
import { adminClientRouter } from 'shared/routes/adminClient';
import styles from './Navigation.module.scss';

interface Props {
  className?: string;
}

export const Navigation = ({ className }: Props) => {
  return (
    <nav className={classNames(styles.wrapper, className)}>
      <NavLink href={adminClientRouter.admin.brand.baseRoute}>
        Все Бренды
      </NavLink>
      <NavLink href={adminClientRouter.admin.type.baseRoute}>Все Типы</NavLink>
      <NavLink href={'/prototype'}>Все товары</NavLink>
    </nav>
  );
};
