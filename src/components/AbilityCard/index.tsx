import { h } from 'preact';
import styles from '../AbilityCard/styles.module.css';
import { useEffect, useState, memo } from 'preact/compat';
import { ABILITY_ABBREVIATION } from '../../constants';

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

  return <section className={styles['abilityCard']}>{statRows}</section>;
};

export default memo(AbilityCard, (prev, next) => prev === next);
