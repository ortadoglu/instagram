import React from 'react';
import Gallery from './gallery.js';
import mockup from './mockupAPI.js';
import { Switch , Route } from 'react-router-dom'
import EditPicturePage from './editPicturePage.js';
import './gallery.css';

let test = mockup.all();

class GalleryPage extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/galery">
                        <Gallery  imageUrls={test}/>
                    </ Route>
                    <Route path="/galery/:id">
                        <EditPicturePage />
                    </Route>
                </Switch>

            </div>
        );
    }
}

export default GalleryPage