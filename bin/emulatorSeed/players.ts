import { db } from '../../src/firebase';
import { mockAbilityStats } from './__seed__/mock-players';

const MOCK_GAME_KEY = 'ZG9vbWd1eQo';

db.useEmulator('localhost', 9001);

const batch = db.batch();

Object.entries(mockAbilityStats).map(([key, value]) => {
  const ref = db
    .collection('game')
    .doc(MOCK_GAME_KEY)
    .collection('players')
    .doc(key);
  batch.set(ref, value);
});

batch.commit().then(() => {
  console.info('Seeded ability set');
  process.exit(0);
});
