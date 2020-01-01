import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage } from './Homepage';

const Layout = () => {
  return (
    <Fragment>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Homepage} />
          </Switch>
        </Fragment>
      </Router>
    </Fragment>
  );
};

export default Layout;
