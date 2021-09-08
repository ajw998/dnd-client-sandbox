import { h } from 'preact';
import { memo } from 'preact/compat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export interface PassiveWisdomProps {
  value: number;
}
export const PassiveWisdom = ({ value }: PassiveWisdomProps) => {
  return (
    <div style={{ position: 'absolute', right: 10 }}>
      <FontAwesomeIcon icon={faEye} /> {value}
    </div>
  );
};

export default memo(PassiveWisdom);
