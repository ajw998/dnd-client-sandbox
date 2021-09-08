// !!WARN!! Do not upgrade firebase@9.x due to compilation errors
// See https://github.com/preactjs/preact-cli/issues/1591
// Once the issue has been fixed, follow Firebase's official guide
// https://firebase.google.com/docs/web/modular-upgrade
// to upgrade
import firebase from 'firebase/app';
import fbConfig from './config/firebase';
import 'firebase/firestore';

export const firebaseApp = firebase.initializeApp(fbConfig);

export const db = firebase.firestore();

db.useEmulator('localhost', 9001);
