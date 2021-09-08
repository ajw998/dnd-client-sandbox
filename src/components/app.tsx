import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './Header';

const App: FunctionalComponent = () => {
  return (
    <div id='preact_root'>
      <Header />
      <Router>
        <Route path='/' component={Home} />
        <Route path='/:role' component={Profile} />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
