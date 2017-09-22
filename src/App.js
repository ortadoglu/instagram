import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage/login.js';
import GaleryPage from './GaleryPage/galery.js';

class App extends Component {
  render() {
    return (
        <div>
            <Switch>
            <Route exact path="/">
                <LoginPage/>
            </Route>
            <Route path="/galery">
                <GaleryPage/>
            </Route>
            </Switch>
        </div>

    );
  }
}

export default App;
//<Route exact={true} path="/">