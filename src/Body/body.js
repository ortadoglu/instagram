import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import LoginPage from '../LoginPage/login.js';
import GaleryPage from '../GaleryPage/galery.js';

class Body extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/">
                <LoginPage/>
            </Route>
            <Route path="/galery">
                <GaleryPage/>
            </Route>
        </Switch>
    );
  }
}

export default Body;