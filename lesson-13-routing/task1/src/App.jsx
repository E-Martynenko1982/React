import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from './Products';
import Contacts from './Contacts';
import Home from './Home';
import PageNotFound from './PageNotFound';

const App = () => {
  return (

    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/products'><Products /></Route>
          <Route path='/contacts'><Contacts /></Route>
          <Route path='*'><PageNotFound /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
