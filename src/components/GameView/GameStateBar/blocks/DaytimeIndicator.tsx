import { h } from 'preact';
import { memo } from 'preact/compat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

interface DaytimeIndicator {
  day?: 'day' | 'night';
}

const DAYTIME_TEXT = {
  day: 'Daytime',
  night: 'Nighttime',
};

export const DaytimeIndicator = ( { day = 'day' }: DaytimeIndicator ) => {
  return <div>
      <FontAwesomeIcon
        size={ '1x' }
        className={ styles[day] }
        icon={day === 'day' ? faSun : faMoon}
      />{' '} { DAYTIME_TEXT[day] }
  </div>
}

export default memo(DaytimeIndicator)
