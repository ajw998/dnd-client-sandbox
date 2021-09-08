import { h } from 'preact';
import style from './style.module.css';
import { HEADERS } from '../../constants/index';

export interface HeaderProps {
  role?: 'player' | 'dm';
}

const Header = ({ role = 'player' }: HeaderProps) => {
  return (
    <header class={style.header}>
      <h1 className={ style['title'] }>{HEADERS[role]}</h1>
    </header>
  );
};

export default Header;
