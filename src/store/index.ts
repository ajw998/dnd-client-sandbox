import { createStore, combineReducers } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import editorReducer from './slices/editor';
import 'firebase/firestore';

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  editor: editorReducer,
});

export const store = createStore(rootReducer, {
  editor: { isEditing: false },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
