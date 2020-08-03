import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Register from './pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
