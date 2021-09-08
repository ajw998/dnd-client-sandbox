import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import PlayerView from './PlayerView';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './Header';
import styles from './styles.module.css';

const App: FunctionalComponent = () => {
  return (
    <div id='preact_root'>
      <Header />
      <div className={ styles['main'] }>
        <Router>
        <Route path='/' component={PlayerView} />
        <Route path='/:role' component={Profile} />
        <NotFoundPage default />
        </Router>
      </div>
    </div>
  );
};

export default App;
