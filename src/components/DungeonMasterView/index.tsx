import { h, Fragment } from 'preact';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useAppSelector } from '../../store/hooks';
import { shallowEqual } from 'react-redux';
import { createCharacterArray } from 'src/utils/createCharacterArray';
import { CharacterCardsDisplay } from '../common/CharacterCardsDisplay';
import { isLoaded, isEmpty } from 'react-redux-firebase';

interface DungeonMasterView {
  gameId?: string;
}

export const DungeonMasterView = () => {
  // TODO - The following should only be called once, since this might
  // potentially cause double request
  useFirestoreConnect([
    {
      collection: 'game',
      doc: 'ZG9vbWd1eQo',
      subcollections: [{ collection: 'players' }],
      storeAs: 'players',
    },
  ]);

  const data = useAppSelector(
    (state) => state.firestore.data.players,
    shallowEqual,
  );

  if (isEmpty(data) || !isLoaded(data)) {
    return <div>Waiting</div>;
  }

  return (
    <div>
      <Fragment>
        <CharacterCardsDisplay editable={true}>
          {data && createCharacterArray(data)}
        </CharacterCardsDisplay>
      </Fragment>
    </div>
  );
};
