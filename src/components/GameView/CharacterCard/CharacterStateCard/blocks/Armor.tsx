import { h } from 'preact';
import { memo } from 'preact/compat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import styles from './styles.module.scss';
import ReactTooltip from 'react-tooltip';

export interface ArmorProps {
  value: number;
  tooltipText?: string;
}

export const ArmorBlock = ({
  value,
  tooltipText = 'Armor',
}: ArmorProps) => {

  return (
    <div data-tip='armor' data-for='armor'>
      <ReactTooltip className={styles['tooltip']} place={ 'bottom' } id='armor'>
        <span>{tooltipText}</span>
      </ReactTooltip>
      <FontAwesomeIcon
        className={cn(
          styles['armorIcon'],
        )}
        icon={faShieldAlt}
      />{' '}
      { value }
    </div>
  );
};

export default memo(ArmorBlock);
