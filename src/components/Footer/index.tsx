import { h } from 'preact';
import styles from './styles.module.scss';
import { CurrentTime } from './blocks/CurrentTime';
import GameId from './blocks/GameId';
import { VERSION } from '../../constants';

// Components:
// - Current user name
// - Current game id
// - Current app version
// Footer change depending on role
export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <section className={ styles['metaInfo'] }>
        <CurrentTime />
        <GameId />
      </section>
      <section className={ styles['breadcrumbs'] }>Dungeon & Dragons</section>
      <section className={ styles['version'] }>Version v{VERSION}</section>
    </footer>
  );
};
