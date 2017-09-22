import React from 'react';
import Gallery from './gallery.js';
import mockup from './mockup.js';
import { Switch , Route } from 'react-router-dom'
import EditPicturePage from './editPicturePage.js';

let test = mockup;

class GalleryPage extends React.Component {
    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <h2>GaleryPage</h2>
                </div>
                
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