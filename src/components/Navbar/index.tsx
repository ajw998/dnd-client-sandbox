import { h } from 'preact';
import { memo } from 'preact/compat';
import { Link } from 'preact-router/match';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import styles from './styles.module.scss';

export interface NavData {
  [s: string]: NavLink;
}

export interface NavLink extends Pick<FontAwesomeIconProps, 'icon'> {
  path: string;
  activeClassName?: string;
}

const NavLink = ({ icon, path }: NavLink & { isHome?: boolean }) => {
  return (
    <li className={cn(styles['navItem'])}>
      <Link
        class={styles['navItemAnchor']}
        href={path}
        activeClassName={styles['navActive']}
      >
        <FontAwesomeIcon
          className={styles['navItemIcon']}
          size={'2x'}
          icon={icon}
        />
      </Link>
    </li>
  );
};

interface NavBarProps {
  links: NavData;
}
export const NavBar = ({ links }: NavBarProps) => {
  const navLinks = Object.entries(links).map(([_, value], index) => {
    return <NavLink key={index} {...value} />;
  });
  return (
    <nav className={styles['navBar']}>
      <ul className={styles['navBarList']}>{navLinks}</ul>
    </nav>
  );
};

export default memo(NavBar);
