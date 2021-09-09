import { h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'preact/compat';
import styles from './styles.module.scss';

interface GameIdProps {
  gameId?: string;
}

export const GameId = ({ gameId }: GameIdProps) => {
  return <div className={ styles['block'] }>
      <FontAwesomeIcon
        icon={faFingerprint}
      />{' '}
  { gameId ?? Date.now()}
  </div>;
};

export default memo(GameId)
