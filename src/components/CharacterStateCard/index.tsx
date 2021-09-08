import { h } from 'preact';
import GoldBlock from './blocks/Gold';

interface PlayerStateCardProps {
  state: PlayerState;
}

interface PlayerState {
  armor: number;
  gold: number;
  hitDice: string;
  hp: number;
  initiative: number;
  level: number;
  maxHp: number;
  speed: number;
  xp: number;
}

export const PlayerStateCard = ({ state }: PlayerStateCardProps) => {
  return (
    <div>
      <section>
        <b>Level</b>: {state.level}
      </section>
      <section>
        <b>Current HP</b>: {state.hp} / {state.maxHp}
      </section>
      <GoldBlock gold={state.gold} />
    </div>
  );
};
