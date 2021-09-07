import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import { useState, useEffect } from 'preact/compat';

import GameView from './GameView';
import { SuperAdminView } from 'src/components/SuperAdminView';
import { CalculatorView } from './CalculatorView';
import { DungeonMasterView } from './DungeonMasterView';
import NotFoundPage from '../routes/notfound';
import AsyncRoute from 'preact-async-route';
import styles from './styles.module.scss';
import NavBar from './Navbar';
import { useAppSelector } from 'src/store/hooks';
import {
  GAME_KEY,
  DUNGEON_MASTER_NAVIGATION_ITEM,
  SUPER_ADMIN_NAVIGATION_ITEM,
  NAVIGATION_ITEM,
} from '../constants';
import { Footer } from './Footer';
import { db } from 'src/firebase';
import firebase from 'firebase/app';

const fetchDungeonMaster = async (
  db: firebase.firestore.Firestore,
  gameId: string,
) => {
  const result = await db.collection('game').doc(gameId).get();
  if (result.exists) {
    return result.data()?.dungeonMaster;
  }
  return null;
};

const App: FunctionalComponent = () => {
  const [dm, setDM] = useState(null);

  useEffect(() => {
    fetchDungeonMaster(db, GAME_KEY).then((r) => setDM(r));
  });

  const auth = useAppSelector((state) => state.firebase.auth);

  const navigationItems = {
    ...NAVIGATION_ITEM,
    ...((auth.email === dm || auth.email === __SUPER_ADMIN_ID__) &&
      DUNGEON_MASTER_NAVIGATION_ITEM),
    ...(auth.email === __SUPER_ADMIN_ID__ && SUPER_ADMIN_NAVIGATION_ITEM),
  };

  return (
    <main className={styles['main']}>
      <NavBar links={navigationItems} />
      <div className={styles['content']}>
        <Router>
          <AsyncRoute path='/' component={GameView} />
          <Route path='/calculator' component={CalculatorView} />
          {auth.email === __SUPER_ADMIN_ID__ && (
            <Route path='/super-admin' component={SuperAdminView} />
          )}
          <Route path='/details/:id' component={GameView} />
          {(auth.email === dm || auth.email === __SUPER_ADMIN_ID__) && (
            <AsyncRoute path='/dm' component={DungeonMasterView} />
          )}
          <NotFoundPage default />
        </Router>
      </div>
      <Footer />
    </main>
  );
};

export default App;
