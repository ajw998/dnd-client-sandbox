import { h } from 'preact';
import GoldBlock from './blocks/Gold';
import DeathSavesBlock from './blocks/DeathSaves';

interface PlayerStateCardProps {
  state: PlayerState;
}

interface DeathSaves {
  successes: number;
  failures: number;
}

interface PlayerState {
  armor: number;
  gold: number;
  hitDice: string;
  deathSaves: DeathSaves;
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
      <DeathSavesBlock successes={ state.deathSaves.successes } failures={ state.deathSaves.failures }/>
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
