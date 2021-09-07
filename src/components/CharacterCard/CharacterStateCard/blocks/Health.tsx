import { h } from 'preact';
import { memo } from 'preact/compat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faHeart } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import styles from './styles.module.scss';
import ReactTooltip from 'react-tooltip';

export interface HealthBlockProps {
  maxHp: number;
  currentHp: number;
  tempHp?: number;
  tooltipText?: string;
}

export const HealthBlock = ({
  maxHp = 0,
  currentHp = 0,
  tempHp = 0,
  tooltipText = 'Health',
}: HealthBlockProps) => {
  const CRITICAL_HEALTH_THRESHOLD = 0.5;

  const isInCriticalHealth = currentHp / maxHp < CRITICAL_HEALTH_THRESHOLD;

  return (
    <div data-tip='health' data-for='health'>
      <ReactTooltip
        className={styles['tooltip']}
        place={'bottom'}
        id='health'
      >
        <span>{tooltipText}</span>
      </ReactTooltip>
      <FontAwesomeIcon
        className={cn(
          styles['healthIcon'],
          isInCriticalHealth && styles['criticalHealth'],
        )}
        icon={isInCriticalHealth ? faHeartbeat : faHeart}
      />{' '}
      {currentHp} (+{tempHp}) /{maxHp}
    </div>
  );
};

export default memo(HealthBlock);
