import { h } from 'preact';
import { useAppSelector } from 'src/store/hooks';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export const SignInView = ({ children }: { children: JSX.Element }) => {
  const auth = useAppSelector((state) => state.firebase.auth);
  if (!isLoaded(auth) || isEmpty(auth)) {
    return (
      <div>
        <StyledFirebaseAuth
          uiConfig={{
            signInFlow: 'popup',
            signInSuccessUrl: '/',
            signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
          }}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
  return children;
};
