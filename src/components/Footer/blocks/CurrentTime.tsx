import { h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

export const CurrentTime = () => {
  return (
    <div className={styles['block']}>
      <FontAwesomeIcon icon={faCalendar} /> {new Date().toLocaleDateString()}
    </div>
  );
};
