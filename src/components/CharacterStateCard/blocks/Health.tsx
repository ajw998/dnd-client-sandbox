import { h } from 'preact';
import { memo } from 'preact/compat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
  return (
    <div>
      <FontAwesomeIcon className={styles['healthIcon']} icon={faHeart} />{' '}
      {currentHp} (+ {tempHp}) / {maxHp}
    </div>
  );
};

export default memo(HealthBlock);
