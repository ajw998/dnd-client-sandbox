import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import GameView from './GameView';
import { CalculatorView } from './CalcuatorView';
import NotFoundPage from '../routes/notfound';
import AsyncRoute from 'preact-async-route';
import styles from './styles.module.scss';
import NavBar from './Navbar';
import { NAVIGATION_ITEM } from '../constants';
import { Footer } from './Footer';

const App: FunctionalComponent = () => {
  return (
    <main className={styles['main']}>
      <NavBar links={NAVIGATION_ITEM} />
      <div className={styles['content']}>
        <Router>
          <AsyncRoute path='/' component={GameView} />
          <Route path='/calculator' component={CalculatorView} />
          <Route path='/details/:id' component={GameView} />
          <NotFoundPage default />
        </Router>
      </div>
      <Footer />
    </main>
  );
};

export default App;
