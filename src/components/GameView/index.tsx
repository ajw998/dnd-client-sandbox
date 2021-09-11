import { Fragment, h } from 'preact';
import style from './style.module.scss';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useAppSelector } from '../../store/hooks';
import { GameStateBar } from './GameStateBar';
import { DetailSidebar } from './DetailSidebar';
import ViewSwitcher from './ViewSwitcher';
import { CardCollection } from './CardCollection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSlash } from '@fortawesome/free-solid-svg-icons';

import type {
  CharacterStats,
  DND5eCharacterSkills,
  DND5ePlayerAbility,
  DND5eCharacterState,
} from '../../types';
import LoadingSpinner from '../common/LoadingSpinner';
import { CharacterCard } from './CharacterCard';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const EmptyData = () => {
  return <Fragment>
    <div>
      <FontAwesomeIcon icon={ faUserSlash } size={ '3x' }/>
      No Content Found!
    </div>
  </Fragment>
}

const PlayerView = () => {
  // TODO - There is a double re-render here
  // TODO use table-layout to prevent reflow
  useFirestoreConnect('players');

  const gameView = useAppSelector((state) => state.gameView.mainView);

  let content;

  const players: CharacterStats<
    DND5ePlayerAbility,
    DND5eCharacterState,
    DND5eCharacterSkills
  > = useAppSelector((state) => state.firestore.data.players);

  if (!isLoaded(players)) {
    content = <Fragment><LoadingSpinner size={'5x'} /></Fragment>;
  }

  if (isEmpty(players)) {
    content = <EmptyData />;
  } 

    const cards = players && Object.entries(players).map(([key, value], index) => {
      return (
        <CharacterCard
          characterClass={value.meta.class}
          key={index}
          id={key}
          isPlayable={false}
          name={value.meta.name ?? 'unknown'}
          playerStats={value}
          stacked={gameView === 'global' ? true : false}
        />
      );
    });

    content = <Fragment>
        <GameStateBar isFeatureEnabled={ true }/>
        <ViewSwitcher />
        <DetailSidebar />
        <CardCollection cards={cards} />
    </Fragment>

  return (
    <div className={style.gameView}>
      { content }
    </div>
  );
};

export default PlayerView;
