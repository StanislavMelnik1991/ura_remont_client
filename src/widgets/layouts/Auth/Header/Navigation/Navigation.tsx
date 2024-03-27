import classNames from 'classnames';
import { NavLink } from '_entities/ui/NavLink/NavLink';
import { adminClientRouter } from 'shared/router';
import styles from './Navigation.module.scss';

interface Props {
  className?: string;
}

export const Navigation = ({ className }: Props) => {
  return (
    <nav className={classNames(styles.wrapper, className)}>
      <NavLink href={adminClientRouter.brand.list.route}>Все Бренды</NavLink>
      <NavLink href={adminClientRouter.type.list.route}>Все Типы</NavLink>
      <NavLink href={'/prototype'}>Все товары</NavLink>
    </nav>
  );
};
