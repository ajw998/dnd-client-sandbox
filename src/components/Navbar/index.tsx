import { h } from 'preact';
import { memo } from 'preact/compat';
import { Link } from 'preact-router/match';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useFirebase } from 'react-redux-firebase';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import styles from './styles.module.scss';

export interface NavData {
  [s: string]: NavLink;
}

export interface NavLink extends Pick<FontAwesomeIconProps, 'icon'> {
  path: string;
  activeClassName?: string;
  isEnabled?: boolean;
}

const NavLink = ({ icon, path, isEnabled = true }: NavLink) => {
  const navIcon = (
    <FontAwesomeIcon
      className={styles['navItemIcon']}
      size={'2x'}
      icon={icon}
    />
  );
  return isEnabled ? (
    <li className={cn(styles['navItem'])}>
      <Link
        class={styles['navItemAnchor']}
        href={path}
        activeClassName={styles['navActive']}
      >
        {navIcon}
      </Link>
    </li>
  ) : (
    <li className={cn(styles['navItem'], styles['navItem--disabled'])}>
      {navIcon}
    </li>
  );
};

interface NavBarProps {
  links: NavData;
}
export const NavBar = ({ links }: NavBarProps) => {
  const firebase = useFirebase();
  const navLinks = Object.entries(links).map(([_, value], index) => {
    return <NavLink key={index} {...value} />;
  });
  return (
    <nav className={styles['navBar']}>
      <ul className={styles['navBarList']}>{navLinks}</ul>
      <div className={styles['signoutButton']}>
        <FontAwesomeIcon
          onClick={() => firebase.logout()}
          icon={faSignOutAlt}
          size={'2x'}
        />
      </div>
    </nav>
  );
};

export default memo(NavBar);
