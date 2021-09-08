import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useFirestore } from 'react-redux-firebase';
import style from './style.css';

interface Props {
  role: string;
}

const Profile: FunctionalComponent<Props> = (props: Props) => {
  const firestore = useFirestore();

  // useFirestoreConnect('players')
  const { role } = props;
  const [time, setTime] = useState<number>(Date.now());
  const [count, setCount] = useState<number>(0);

  // gets called when this route is navigated to
  useEffect(() => {
    const timer = window.setInterval(() => setTime(Date.now()), 1000);

    // gets called just before navigating away from the route
    return (): void => {
      clearInterval(timer);
    };
  }, []);

  const ability = {
    strength: 16,
    dexterity: 9,
    constitution: 15,
    intelligence: 11,
    wisdom: 13,
    charisma: 14,
  };

  // update the current time
  const increment = () => {
    return firestore.add({ collection: 'players' }, { ability });
  };

  return (
    <div class={style.profile}>
      <h1>Profile: {role}</h1>
      <p>This is the user profile for a user named {role}.</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>

      <p>
        <button onClick={increment}>Click Me</button> Clicked {count} times.
      </p>
    </div>
  );
};

export default Profile;
