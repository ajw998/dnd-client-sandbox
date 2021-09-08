import { h } from 'preact';
import style from './style.css';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useAppSelector } from '../../store/hooks';
import type {
  CharacterStats,
  DND5ePlayerAbility,
  DND5eCharacterState,
} from '../../types';
import { CharacterCard } from '../../components/CharacterCard';

const Home = () => {
  // TODO - There is a double re-render here
  // TODO use table-layout to prevent reflow
  useFirestoreConnect('players');

  const players: CharacterStats<DND5ePlayerAbility, DND5eCharacterState> =
    useAppSelector((state) => state.firestore.data.players);
  let cards;

  if (players) {
    cards = Object.entries(players).map(([key, value], index) => {
      return (
        <CharacterCard
          characterClass={value.meta.class}
          key={index}
          id={key}
          isPlayable={false}
          name={value.meta.name ?? 'unknown'}
          playerStats={value}
        />
      );
    });
  }

  return (
    <div className={style.home}>
      <div style={{ display: 'flex' }}>{cards}</div>
    </div>
  );
};

export default Home;
