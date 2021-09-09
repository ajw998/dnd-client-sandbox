import { h } from 'preact';
import GoldBlock from './blocks/Gold';
import HealthBlock from './blocks/Health';
import LevelBlock from './blocks/Level';
import PassiveWisdom from './blocks/PassiveWisdom';
import Armor from './blocks/Armor';
import style from './style.module.scss';
import type { DND5eCharacterState } from '../../types';

// TODO - Abstract this type correctly
interface PlayerStateCardProps {
  state: DND5eCharacterState;
}
export const PlayerStateCard = ({ state }: PlayerStateCardProps) => {
  return (
    <div className={style['playerStateWrapper']}>
      <section className={style['stateGroup']}>
      <section className={ style['baseInfoBlock']}>
        <div>XP: { state.xp } </div>
        <PassiveWisdom value={ state.passiveWisdom }/>
        <Armor value={ state.armor }/>
        <LevelBlock level={state.level} />
      </section>
        <section className={ style['criticalInfoBlock'] }>
          <HealthBlock maxHp={state.maxHp} currentHp={state.hp} />
          <GoldBlock gold={state.gold} />
        </section>
      </section>
    </div>
  );
};
