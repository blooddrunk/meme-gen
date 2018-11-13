import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DefaultLayout from '../layouts/Default';
import { Home } from './Home';

export class Root extends Component {
  render() {
    return (
      <Router basename={process.env.REACT_APP_PUBLIC_URL}>
        <Switch>
          <DefaultLayout>
            <Switch>
              <Route exact component={Home} path="/" />
            </Switch>
          </DefaultLayout>
        </Switch>
      </Router>
    );
  }
}
