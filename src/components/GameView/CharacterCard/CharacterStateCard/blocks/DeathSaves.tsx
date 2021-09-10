import { h } from 'preact';
import { memo } from 'preact/compat';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookDead } from '@fortawesome/free-solid-svg-icons';

interface DeathSavesProps {
  successes: number;
  failures: number;
}

export const DeathSavesBlock = ({
  successes = 0,
  failures = 0,
}: DeathSavesProps) => {
  return (
    <div className={styles['deathSavesBlock']}>
      {Array.from({ length: successes }).map((_, index) => (
        <span key={index} className={styles['deathSavesSuccess']}>
          &#10004;
        </span>
      ))}
      {Array.from({ length: failures }).map((_, index) => (
        <FontAwesomeIcon
          key={index}
          size={'sm'}
          icon={faBookDead}
          className={styles['deathSavesFailure']}
        />
      ))}
    </div>
  );
};

export default memo(DeathSavesBlock);
