import { h } from 'preact';
import { memo } from 'preact/compat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import ReactTooltip from 'react-tooltip';

export interface PassiveWisdomProps {
  tooltipText?: string;
  value: number;
}
export const PassiveWisdom = ({
  tooltipText = 'Passive wisdom',
  value,
}: PassiveWisdomProps) => {
  return (
    <div data-tip='passiveWisdom' data-for='passiveWisdom'>
      <ReactTooltip
        className={styles['tooltip']}
        place={'bottom'}
        id='passiveWisdom'
      >
        <span>{tooltipText}</span>
      </ReactTooltip>
      <FontAwesomeIcon icon={faEye} /> {value}
    </div>
  );
};

export default memo(PassiveWisdom);
