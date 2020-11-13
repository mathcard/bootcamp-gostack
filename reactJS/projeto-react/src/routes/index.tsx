import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// Como o paramentro possua uma /, é necessario colocar o +

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
