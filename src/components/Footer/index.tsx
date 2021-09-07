import { h } from 'preact';
import styles from './styles.module.scss';
import { useAppSelector } from 'src/store/hooks';
import cn from 'classnames';
import { CurrentTime } from './blocks/CurrentTime';
import GameId from './blocks/GameId';
import UserID from './blocks/UserId';
import { VERSION } from '../../constants';

// Components:
// - Current user name
// - Current game id
// - Current app version
// Footer change depending on role
export const Footer = () => {
  const auth = useAppSelector((state) => state.firebase.auth);

  return (
    <footer
      className={cn(
        styles['footer'],
        auth.email === __SUPER_ADMIN_ID__ && styles['footer--superAdmin'],
      )}
    >
      <section className={styles['metaInfo']}>
        <CurrentTime />
        <GameId />
        <UserID />
      </section>
      <section className={styles['breadcrumbs']}>Dungeon & Dragons</section>
      <section className={styles['version']}>Version v{VERSION}</section>
    </footer>
  );
};
