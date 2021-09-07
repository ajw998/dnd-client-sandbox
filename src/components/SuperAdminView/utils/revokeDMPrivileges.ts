import type firebase from 'firebase/app';

export const revokeDMPrivileges = (db: firebase.firestore.Firestore) => {
  return () => {
    const GAME_KEY = 'ZG9vbWd1eQo';
    db.collection('game')
      .doc(GAME_KEY)
      .update({ dungeonMasterId: __SUPER_ADMIN_ID__ });
  };
};
