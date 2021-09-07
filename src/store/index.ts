import { createStore, combineReducers } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import {
  attackRollCalculatorReducer,
  dungeonMasterReducer,
  gameViewReducer,
  calculatorViewReducer,
} from './slices';
import 'firebase/firestore';

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  dungeonMaster: dungeonMasterReducer,
  attackRollCalculator: attackRollCalculatorReducer,
  gameView: gameViewReducer,
  calculatorView: calculatorViewReducer,
});

export const store = createStore(rootReducer, {});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
