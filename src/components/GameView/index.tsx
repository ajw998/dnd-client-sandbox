import { Fragment, h } from 'preact';
import style from './style.module.scss';
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase';
import { useAppSelector, useAppDispatch } from 'src/store/hooks';
import { DetailSidebar } from './DetailSidebar';
import ViewSwitcher from './ViewSwitcher';
import { CharacterCardsDisplay } from '../common/CharacterCardsDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { CharacterInformation } from 'src/types';
import { createCharacterArray } from 'src/utils/createCharacterArray';
import { faUserSlash } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '../common/LoadingSpinner';

const EmptyData = (): JSX.Element => {
  return (
    <Fragment>
      <div>
        <FontAwesomeIcon icon={faUserSlash} size={'3x'} />
        No Content Found!
      </div>
    </Fragment>
  );
};

// TODO - Set gameid to required
interface PlayerViewProps {
  gameId?: string;
}

const GameView = ({
  gameId = 'ZG9vbWd1eQo',
}: PlayerViewProps): JSX.Element => {
  // TODO - There is a double re-render here
  useFirestoreConnect([
    {
      collection: 'game',
      doc: gameId,
      subcollections: [{ collection: 'players' }],
      storeAs: 'players',
    },
  ]);

  let content;

  const players: CharacterInformation = useAppSelector(
    (state) => state.firestore.data.players,
  );

  if (!isLoaded(players)) {
    content = (
      <Fragment>
        <LoadingSpinner size={'5x'} />
      </Fragment>
    );
  }

  if (isEmpty(players)) {
    content = <EmptyData />;
  }

  content = (
    <Fragment>
      <ViewSwitcher />
      <DetailSidebar />
      <CharacterCardsDisplay editable={false}>
        {players && createCharacterArray(players)}
      </CharacterCardsDisplay>
    </Fragment>
  );

  return <div className={style.gameView}>{content}</div>;
};

export default GameView;
