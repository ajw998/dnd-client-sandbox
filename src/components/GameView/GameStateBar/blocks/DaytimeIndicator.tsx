import { h } from 'preact';
import { memo } from 'preact/compat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

interface DaytimeIndicator {
  day?: 'day' | 'night';
}

export const DaytimeIndicator = ({ day = 'day' }: DaytimeIndicator) => {
  return (
    <div>
      <FontAwesomeIcon
        size={'1x'}
        className={styles[day]}
        icon={day === 'day' ? faSun : faMoon}
      />{' '}
    </div>
  );
};

export default memo(DaytimeIndicator);
