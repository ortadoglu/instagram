import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import galleryApp from './reducers';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css'

import { initialize, addTranslation } from 'react-localize-redux';


let store = createStore(galleryApp);
// To set a different default active language set the defaultLanguage option.
const languages = ['en', 'de', 'ro'];
store.dispatch(initialize(languages, { defaultLanguage: 'en' }));

const json = {
    "tag": ["Tag","Der Tag","Tag-ul"],
    "description": ["Description","Beschreibung", "Descrierea"],
    "location": ["Location", "Standort", "Locatie"],
    "date": ["Date", "Datum", "Data"],  
    "Image Url": ["Image URL", "Bild Url", "Url imagine"],
    "add image": ["ADD IMAGE", "HINZUFÜGEN", "ADAUGA"],
    "DISCLAIMER": ["This tab doesnt close so you cand watch language switching",
        "Diese Registerkarte schließt nicht so, dass Sie die Sprache wechseln",
        "Fereasta nu se inchide pentru a putea vedea schimbarea limbii"],
  };
  
store.dispatch(addTranslation(json));


render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)