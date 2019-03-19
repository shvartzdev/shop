import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import Phones from './node_modules/containers/Phones';
import PhoneCard from './node_modules/containers/PhoneList';

const Root = ({ store }) => (
  <Fragment>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Phones} />
        <Route path="/card" component={PhoneCard} />
      </Switch>
    </Provider>
  </Fragment>
);


Root.propTypes = {
  store: PropTypes.objectOf(Root).isRequired,
};

export default Root;
