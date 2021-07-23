import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteProps,
  RouteComponentProps,
  Switch
} from 'react-router-dom';

import * as GlobalEndpoints from '../../globals/endpoints';

import Page1 from '../../screens/Page1';
import Page2 from '../../screens/Page2';

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={GlobalEndpoints.SCREEN_PAGE_1} exact component={Page1} />
        <Route path={GlobalEndpoints.SCREEN_PAGE_2} exact component={Page2} />

        <Route path="*">
          <Redirect to={GlobalEndpoints.SCREEN_PAGE_1} />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;