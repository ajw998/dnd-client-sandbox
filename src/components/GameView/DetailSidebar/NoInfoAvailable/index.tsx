import { h } from 'preact';
import { memo } from 'preact/compat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

export const NoInfoAvailable = () => {
  return (
    <div className={styles['noInfoAvailable']}>
      <div className={styles['noInfoAvailableIcon']}>
        <FontAwesomeIcon icon={faQuestionCircle} size={'3x'} />{' '}
      </div>
      <div>No Information Available</div>
    </div>
  );
};

export default memo(NoInfoAvailable);
