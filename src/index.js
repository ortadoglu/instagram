import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import galleryApp from './reducers';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css'
import { localeReducer as locale } from 'react-localize-redux';

import { initialize, addTranslation } from 'react-localize-redux';



let store = createStore(galleryApp);
// To set a different default active language set the defaultLanguage option.
const languages = ['en', 'de', 'ro'];
store.dispatch(initialize(languages, { defaultLanguage: 'en' }));


const json = {
    "title": ["Movie Reviews"],
    "search": ["<a href='http://www.imdb.com/'>Search IMDb</a>"],
    "copyright": ["Movie Copyright"],
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