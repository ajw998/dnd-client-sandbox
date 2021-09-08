import { h } from 'preact';
import { memo } from 'react';

interface GoldBlockProps {
  gold: number;
}
export const GoldBlock = ({ gold }: GoldBlockProps) => {
  return (
    <div>
      <b>Gold</b>: {gold}
    </div>
  );
};

export default memo(GoldBlock, (prev, next) => prev === next);
