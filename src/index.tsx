import './style/index.module.scss';
import { h } from 'preact';
import App from './components/app';

import { store } from './store';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { firebaseApp } from './firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { SignInView } from 'src/components/SignupView';

const rrfProps = {
  firebase: firebaseApp,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const WrappedApp = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <SignInView>
        <App />
      </SignInView>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default WrappedApp;
