import { h } from 'preact';
import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';

interface LevelBlockProps {
  level: number;
}
export const LevelBlock = ({ level }: LevelBlockProps) => {
  return (
    <div>
      <FontAwesomeIcon icon={faLevelUpAlt} /> {level}
    </div>
  );
};

export default memo(LevelBlock);
