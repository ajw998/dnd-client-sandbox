import { h } from 'preact';
import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

interface GoldBlockProps {
  gold: number;
}
export const GoldBlock = ({ gold }: GoldBlockProps) => {
  return (
    <div>
      <FontAwesomeIcon className={styles['goldIcon']} icon={faCoins} /> {gold}
    </div>
  );
};

export default memo(GoldBlock);
