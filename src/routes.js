import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Employee from './pages/employee';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/employees/:id' component={Employee}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;