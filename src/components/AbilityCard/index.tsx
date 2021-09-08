import { h } from 'preact';
import styles from '../AbilityCard/styles.module.css';
import { useEffect, useState, memo } from 'preact/compat';
import { ABILITY_ABBREVIATION } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'react-collapse';

export interface AbilityRowProps {
  name: string;
  value: number;
}

export interface AbilityCardProps {
  title: string;
  stats: Record<string, number> | undefined;
}

const ABILITY_ROW_UPDATE_COLOUR = '#f7e6c3';

const AbilityRow = ({ name, value }: AbilityRowProps) => {
  const [backgroundColor, setBackgroundColor] = useState('inherit');

  useEffect(() => {
    setBackgroundColor(ABILITY_ROW_UPDATE_COLOUR);
    const timeoutId = window.setTimeout(() => {
      setBackgroundColor('inherit');
    }, 500);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <div className={styles['abilityRow']} style={{ backgroundColor }}>
      <div>{name}</div>
      <div>{value} </div>
    </div>
  );
};

const MemoisedAbilityRow = memo(AbilityRow, (prev, next) => prev === next);

export const AbilityCard = ({ title, stats }: AbilityCardProps) => {
  if (!stats) return null;

  const [ isOpen, setIsOpen ] = useState(true);

  const statRows = Object.entries(ABILITY_ABBREVIATION).map(
    ([k, v], index) => {
      return (
        <MemoisedAbilityRow
          key={`${title}-${index}`}
          name={v}
          value={stats[k] ?? 0}
        />
      );
    },
  );

  return (
    <section className={styles['abilityCard']}>
      <h4 className={styles['header']} onClick={ () => setIsOpen(!isOpen) }>
        <FontAwesomeIcon icon={ isOpen ? faCaretDown : faCaretRight } />  Ability
      </h4>
      <Collapse isOpened={ isOpen }>
        {statRows}
      </Collapse>
    </section>
  );
};

export default memo(AbilityCard, (prev, next) => prev === next);
