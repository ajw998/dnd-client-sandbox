import { h } from 'preact';
import styles from './styles.module.scss';
import { memo } from 'preact/compat';
import { ABILITY_ABBREVIATION } from 'src/constants';
import EditableNumberInput from 'src/components/common/EditableNumberInput';
import isEqual from 'lodash.isequal';
import { DataRow } from 'src/components/common/DataRow';
import { useFirestore } from 'react-redux-firebase';

export interface AbilityCardProps {
  // Self-explanatory
  characterId: string;
  stats: Record<string, number> | undefined;
  isEditable?: boolean;
}

export const AbilityCard = ({
  characterId,
  stats,
  isEditable = false,
}: AbilityCardProps) => {
  if (!stats) return null;

  const statRows = Object.entries(ABILITY_ABBREVIATION).map(
    ([k, v], index) => {
      let inputChangeFn;

      if (isEditable) {
        const firestore = useFirestore();
        inputChangeFn = (number: number) =>
          firestore.update(
            {
              collection: 'game',
              doc: 'ZG9vbWd1eQo',
              subcollections: [{ collection: 'players', doc: characterId }],
            },
            { ability: { ...stats, [k]: number } },
          );
      }

      return (
        <DataRow
          key={index}
          isEditable={isEditable}
          attribute={v}
          value={
            <EditableNumberInput
              inputFn={inputChangeFn}
              value={stats[k] ?? 0}
            />
          }
        />
      );
    },
  );

  return (
    <section className={styles['abilityCard']}>
      <h4 className={styles['header']}>Abilities</h4>
      {statRows}
    </section>
  );
};

export default memo(AbilityCard);
