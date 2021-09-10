import { h } from 'preact';
import style from './style.module.scss';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useAppSelector } from '../../store/hooks';
import { GameStateBar } from './GameStateBar';
import LoadingSpinner from '../common/LoadingSpinner';
import type {
  CharacterStats,
  DND5eCharacterSkills,
  DND5ePlayerAbility,
  DND5eCharacterState,
} from '../../types';
import { CharacterCard } from './CharacterCard';

const PlayerView = () => {
  // TODO - There is a double re-render here
  // TODO use table-layout to prevent reflow
  useFirestoreConnect('players');

  const players: CharacterStats<
    DND5ePlayerAbility,
    DND5eCharacterState,
    DND5eCharacterSkills
  > = useAppSelector((state) => state.firestore.data.players);

  if (!isLoaded(players)) {
    return <LoadingSpinner size={'5x'} />;
  }

  if (isEmpty(players)) {
    return <div className={style.home}>Empty</div>;
  }

  const cards = Object.entries(players).map(([key, value], index) => {
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

  return <div className={style.home}>
    <GameStateBar />
    <section className={ style.characterCardsSection }>
      {cards}
    </section>
  </div>;
};

export default PlayerView;
