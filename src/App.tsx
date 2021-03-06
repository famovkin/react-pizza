import { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Header } from './components';
import { Cart, Home } from './pages';

const App: FC = () => (
  <div className='wrapper'>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/cart' component={Cart} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
