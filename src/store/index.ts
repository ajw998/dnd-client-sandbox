import { createStore, combineReducers } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { attackRollCalculatorReducer, editorReducer } from './slices';
import 'firebase/firestore';

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  editor: editorReducer,
  attackRollCalculator: attackRollCalculatorReducer,
});

export const store = createStore(rootReducer, {});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
