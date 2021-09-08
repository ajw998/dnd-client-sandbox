import { h } from 'preact';
import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

interface GoldBlockProps {
  gold: number;
}
export const GoldBlock = ({ gold }: GoldBlockProps) => {
  return (
    <div>
      <FontAwesomeIcon color={'#e5ae38'} icon={faCoins} /> {gold}
    </div>
  );
};

export default memo(GoldBlock, (prev, next) => prev === next);
