import firebase from 'firebase/app';
import { mockAbilityStats } from '../../../../bin/emulatorSeed/__seed__/mock-players';
import { mockGameHistory } from '../../../../bin/emulatorSeed/__seed__/mock-game-history';

export const dbSeedFunc = (db: firebase.firestore.Firestore) => {
  return () => {
    const MOCK_GAME_KEY = 'ZG9vbWd1eQo';

    const batch = db.batch();

    Object.entries(mockAbilityStats).map(([key, value]) => {
      const ref = db
        .collection('game')
        .doc(MOCK_GAME_KEY)
        .collection('players')
        .doc(key);
      batch.set(ref, value);
    });

    batch.commit();

    db.collection('game')
      .doc(MOCK_GAME_KEY)
      .set(mockGameHistory[MOCK_GAME_KEY]);
  };
};
