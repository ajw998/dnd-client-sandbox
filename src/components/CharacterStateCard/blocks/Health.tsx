import { h } from 'preact';
import { memo } from 'preact/compat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import styles from './styles.module.css';

export interface HealthBlockProps {
  maxHp: number;
  currentHp: number;
  tempHp?: number;
}


export const HealthBlock = ({
  maxHp = 0,
  currentHp = 0,
  tempHp = 0,
}: HealthBlockProps) => {
  const CRITICAL_HEALTH_THRESHOLD = 0.5;

  const isInCriticalHealth = (currentHp / maxHp) < CRITICAL_HEALTH_THRESHOLD;

  console.log(isInCriticalHealth)

  return (
    <div>
      <FontAwesomeIcon className={cn(styles['healthIcon'], isInCriticalHealth && styles['criticalHealth'])} icon={faHeart} />{' '}
      {currentHp} (+{tempHp}) / {maxHp}
    </div>
  );
};

export default memo(HealthBlock);
