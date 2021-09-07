// Purely for debugging and MVP purposes
// This component shows the user's id
import { h } from 'preact';
import { memo } from 'preact/compat';
import { useAppSelector } from 'src/store/hooks';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

export const UserID = () => {
  const auth = useAppSelector((state) => state.firebase.auth);
  if (!isLoaded(auth) || isEmpty(auth)) return null;

  return (
    <div>
      <FontAwesomeIcon icon={faUserShield} /> {auth.uid ?? ''}
    </div>
  );
};

export default memo(UserID);
