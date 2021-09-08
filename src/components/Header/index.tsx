import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import { HEADERS } from '../../constants/index';

export interface HeaderProps {
  role?: 'player' | 'dm';
}

const Header = ({ role = 'player' }: HeaderProps) => {
  return (
    <header class={style.header}>
      <h1>{HEADERS[role]}</h1>
      <nav>
        <Link activeClassName={style.active} href='/'>
          Home
        </Link>
        <Link activeClassName={style.active} href='/dungeon-master'>
          John
        </Link>
      </nav>
    </header>
  );
};

export default Header;
