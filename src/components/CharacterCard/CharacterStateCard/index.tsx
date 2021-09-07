import { h } from 'preact';
import HealthBlock from './blocks/Health';
import StateBlock from './blocks/StateBlock';
import styles from './style.module.scss';
import type { DND5eCharacterState } from 'src/types';
import {
  faCoins,
  faEye,
  faLevelUpAlt,
  faShieldAlt,
  faSortNumericUp,
} from '@fortawesome/free-solid-svg-icons';

// TODO - Abstract this type correctly
interface PlayerStateCardProps {
  characterId: string;
  state: DND5eCharacterState;
  isEditable?: boolean;
}
export const PlayerStateCard = ({
  isEditable,
  state,
}: PlayerStateCardProps) => {
  const blocks = [
    { stateId: 'xp', value: state.xp, icon: faSortNumericUp },
    { stateId: 'passiveWisdom', value: state.passiveWisdom, icon: faEye },
    { stateId: 'armor', value: state.armor, icon: faShieldAlt },
    { stateId: 'level', value: state.level, icon: faLevelUpAlt },
    {
      stateId: 'gold',
      value: state.gold,
      icon: faCoins,
      iconClassName: styles['goldIcon'],
    },
  ];
  return (
    <div className={styles['playerStateWrapper']}>
      <section className={styles['stateGroup']}>
        <section className={styles['baseInfoBlock']}>
          {blocks.map((block) => (
            <StateBlock
              inputClassName={styles['input']}
              isEditable={isEditable}
              {...block}
            />
          ))}
        </section>
        <section className={styles['healthBlock']}>
          <HealthBlock maxHp={state.maxHp} currentHp={state.hp} />
        </section>
      </section>
    </div>
  );
};
