import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Phones from './node_modules/containers/Phones';


export default (
    <Fragment>
        <Switch>
            <Route exact path="/" component={Phones}/>
        </Switch>
    </Fragment>
);
