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
      <div style={ { display: 'flex', justifyContent: 'space-between'  }}>
        <CurrentTime />
        <GameId />
      </div>
      <div>
        Dungeon & Dragons
      </div>
      <div>
        Version v{VERSION}
      </div>
    </footer>
  );
};
