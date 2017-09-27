import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import galleryApp from './reducers';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css'

import { initialize, addTranslation } from 'react-localize-redux';
import texts from './languageFiles/global.json';


let store = createStore(galleryApp);
// To set a different default active language set the defaultLanguage option.
const languages = ['en', 'de', 'ro'];
store.dispatch(initialize(languages, { defaultLanguage: 'en' }));

  
store.dispatch(addTranslation(texts));


render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)