import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// View 
import Home from './View/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;