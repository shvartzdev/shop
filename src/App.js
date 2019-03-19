import React, { Component, Fragment } from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import Routes from './Routes';

class App extends Component {
  render() {
    const store = createStore(reducers, composeWithDevTools(
      applyMiddleware(thunk),
    ));

    return (
      <Fragment>
        <Routes store={store} />
      </Fragment>
    );
  }
}

export default App;
