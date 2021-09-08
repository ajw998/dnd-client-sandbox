import './style/index.css';
import { h } from 'preact';
import App from './components/app';

import { store } from './store';
import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { firebaseApp } from './firebase';
import { createFirestoreInstance } from 'redux-firestore';

const rrfProps = {
  firebase: firebaseApp,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const WrappedApp = (): ReactElement => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default WrappedApp;
