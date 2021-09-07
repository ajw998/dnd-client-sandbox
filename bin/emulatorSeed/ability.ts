import { db } from '../../src/firebase';
import { mockAbilityStats } from './__seed__/mock-abilities';

db.useEmulator('localhost', 9001)

const batch = db.batch();

mockAbilityStats.forEach((abilitySet) => {
  const ref = db.collection('ability').doc(abilitySet.id)
  batch.set(ref, abilitySet.data)
})

batch.commit().then(() => {
  console.info('Seeded ability set')
  process.exit(0)
})
