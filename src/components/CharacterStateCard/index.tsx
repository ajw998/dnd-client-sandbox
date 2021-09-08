import { h } from 'preact';
import GoldBlock from './blocks/Gold';
import DeathSavesBlock from './blocks/DeathSaves';
import HealthBlock from './blocks/Health';
import LevelBlock from './blocks/Level';
import style from './style.module.css';
import type { DND5eCharacterState } from '../../types';

// TODO - Abstract this type correctly
interface PlayerStateCardProps {
  state: DND5eCharacterState;
}
export const PlayerStateCard = ({ state }: PlayerStateCardProps) => {
  return (
    <div>
      <DeathSavesBlock
        successes={state.deathSaves.successes}
        failures={state.deathSaves.failures}
      />
      <section className={style['stateGroup']} style={{ display: 'flex' }}>
        <LevelBlock level={state.level} />
        <HealthBlock maxHp={state.maxHp} currentHp={state.hp} />
        <GoldBlock gold={state.gold} />
      </section>
    </div>
  );
};
