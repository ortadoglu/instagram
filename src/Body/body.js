import React from 'react';
import { Route, Switch} from 'react-router-dom';
import LoginPage from '../LoginPage/login.js';
import GalleryPage from '../GalleryPage/galleryPage.js';

class Body extends React.Component {
  render() {
    return (
        <Switch>
            <Route exact path="/">
                <LoginPage/>
            </Route>
            <Route path="/galery">
                <GalleryPage/>
            </Route>
        </Switch>
    );
  }
}

export default Body;