import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteProps,
  RouteComponentProps,
  Switch
} from 'react-router-dom';

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>

        {/* <Route path="/app/test" exact component={ArchTestScreen} />
        <Route path={GlobalEndpoints.SCREEN_USER_LIST} exact component={ListUsers} />
        <Route path={GlobalEndpoints.SCREEN_USER_NEW} exact component={NewUser} />
        <Route path={GlobalEndpoints.SCREEN_SUPPLIER_LIST} exact component={ListSuppliers} />
        <Route path={GlobalEndpoints.SCREEN_SUPPLIER_NEW} exact component={NewSupplier} />
        <Route path={GlobalEndpoints.SCREEN_PRODUCT_LIST} exact component={ListProducts} />
        <Route path={GlobalEndpoints.SCREEN_PRODUCT_NEW} exact component={NewProduct} /> */}


        <Route path="*">
          <Redirect to="/app/test" />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;